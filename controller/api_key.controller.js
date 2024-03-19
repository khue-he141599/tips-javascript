const apiKeyService = require("../service/api_key.service");

const createApiKey = async function (req, res) {
    try {
        const body = req.body;
        const rs = await apiKeyService.createApiKey(body);
        return res.status(200).json(rs);
    } catch (err) {
        return res.status(500).json({
            code: 500,
            message: err.message
        })
    }
};

module.exports = {
    createApiKey
}
