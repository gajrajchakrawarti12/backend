// Endpoint to handle image upload
const imageUpload = (req, res) => {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });
  
    res.json({
      message: "Upload successful",
      filename: req.file.filename,
    });
  };

module.exports = { imageUpload };