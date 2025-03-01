function validateApiKey(req, res, next) {
  const apiKeys = ["Gajraj@0905"]; // Store your valid API keys securely
  const key = req.query["api-key"] || req.headers["api-key"];

  if (!key) {
    return res.status(400).json({ error: "API key required" });
  }

  if (!apiKeys.includes(key)) {
    return res.status(401).json({ error: "Invalid API key" });
  }

  next();
}

module.exports = { validateApiKey };
