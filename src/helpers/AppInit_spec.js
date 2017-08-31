import { expect } from 'chai';
import { SetupEnv } from './AppInit.js';
const path = require('path');
const dotenv = require('dotenv')

describe('App Init - SetupEnv', () => {

    it('should read environment variables', () => {
 
        const dotEnvPath = path.resolve('./src/helpers/.env_spec');
        dotenv.config({ 'path': dotEnvPath });

        SetupEnv();

        expect(process.env.ENV_VARS).to.not.equal(undefined);
        expect(process.env.val1).to.equal("rommel");
        expect(process.env.val2).to.equal("villagomez");
    });

    it('should throw an error if ENV_VARS is not initialized yet', () => {
        delete process.env.ENV_VARS;
        expect(process.env.ENV_VARS).to.equal(undefined);
        expect(() => SetupEnv()).to.throw("ENV_VARS not defined");

    });

    it('should throw an error if .env does not have a valid JSON', () => {
        const dotEnvPath = path.resolve('./src/helpers/.bad_env_spec');
        dotenv.config({ 'path': dotEnvPath });

        expect(() => SetupEnv()).to.throw();

    });


})