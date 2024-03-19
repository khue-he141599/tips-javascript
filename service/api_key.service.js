const apiKeyRepo = require("../repository/api_key.repository");

async function createApiKey(body) {
    const result = await apiKeyRepo.createApiKey(body);
    return result;
}

async function getApiKeyByKey(key) {
    const result = await apiKeyRepo.getApiKeyByKey(key);
    return result;
}

module.exports = {
    createApiKey,
    getApiKeyByKey
};
