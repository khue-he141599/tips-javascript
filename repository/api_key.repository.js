const apiKeyModel = require("../schema/api_key.schema");

const createApiKey = async (body) => {
    const result = await apiKeyModel.create(body);
    return result;
};

const getApiKeyByKey = async (key) => {
    const result = await apiKeyModel.aggregate([{ $match: { key: key } }]);
    return result;
};

module.exports = {
    createApiKey,
    getApiKeyByKey,
};
