require('isomorphic-fetch');
import 'babel-polyfill';

const url = 'http://localhost:5984';

const TableName = 'api-cache';

const GetDocuments = async () => {
	try {
		const res = await fetch(`${url}/${TableName}/_all_docs?include_docs=true`);
		// console.log(await res.json());
		return (await res.json()).rows
			.map(r => r.doc || r.value)
			.filter(doc => doc._id[0] !== '_');
	} catch (e) {
		console.error(e);
	}
};

const AWS = require('aws-sdk');
const credentials = new AWS.SharedIniFileCredentials({
	profile: ''
});
AWS.config.credentials = credentials;
AWS.config.update({
	region: 'us-east-1',
	endpoint: 'http://localhost:8000',
	accessKeyId: 'nope',
	secretAccessKey: 'not'
});
const documentClient = new AWS.DynamoDB.DocumentClient({
	convertEmptyValues: true
});

const write = Item => {
	const params = {
		TableName,
		Item
	};
	documentClient.put(params, (err, data) => {
		if (err) console.log(err);
		else console.log(data);
	});
};

export const main = async () => {
	// write({_id: 'test', currentStatus: 'test'});
	// (await GetDocuments()).forEach(doc => write(doc));
	const docs = await GetDocuments();
	const updateWait = () => {
		write(docs.pop());
		docs.length &&
			setTimeout(() => {
				updateWait();
			}, 250);
	};
	updateWait();
};