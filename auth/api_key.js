const apiKeyService = require("../service/api_key.service");

const apiKey = async (req, res, next) => {
    try {
        const key = req.headers["x-api-key"];
        const apiKey = await apiKeyService.getApiKeyByKey(key);
        if (apiKey.length == 0)
            return res.status(403).json({
                message: "Key missing",
                code: 403,
            });
        req.apiKey = key;
        next();
    } catch (err) {
        return res.status(500).json({
            message: err.message,
            code: 500,
        });
    }
};

module.exports = {
    apiKey,
};
