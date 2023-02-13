const {override} = require('customize-cra')
const {aliasDangerous, configPaths} = require('-alias/lib/aliasDangerous');

module.exports = {
    webpack: override(
        aliasDangerous(configPaths('./tsconfig.paths.json'))
    )
}