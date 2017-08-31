
export const SetupEnv = () => {
    if(process.env.ENV_VARS) {
            try {
                const vars = JSON.parse(process.env.ENV_VARS);
                Object.keys(vars)
                    .map(k=>{
                        process.env[k]=vars[k]
                    })
            } catch(e) {
                throw (e)
            }
    } else {
        throw("ENV_VARS not defined")
    }
}