const File = require("../../auth/models/File");
const fs = require("fs");

const uploadFile = async (req, res) => {
  try {
    const { originalname, mimetype, path: filePath } = req.file;

    const file = await File.create({
      name: req.body.name || originalname,
      path: filePath,
      mimetype,
    });

    const fileUrl = `${req.protocol}://${req.get('host')}/${file.path}`;

    res.status(201).json({
      message: "File uploaded successfully!",
      file: {
        id: file.id,
        name: file.name,
        mimetype: file.mimetype,
        url: fileUrl,
      },
    });
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).json({ message: "File upload failed." });
  }
};

const listFiles = async (req, res) => {
  try {
    const files = await File.findAll();
    res.status(200).json(files);
  } catch (error) {
    console.error("Error fetching files:", error);
    res.status(500).json({ message: "Failed to fetch files." });
  }
};

const getFileById = async (req, res) => {
  try {
    const { id } = req.params;
    const file = await File.findByPk(id);

    if (!file) {
      return res.status(404).json({ message: "File not found." });
    }

    res.status(200).json(file);
  } catch (error) {
    console.error("Error fetching file:", error);
    res.status(500).json({ message: "Failed to fetch file." });
  }
};

const updateFile = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const file = await File.findByPk(id);

    if (!file) {
      return res.status(404).json({ message: "File not found." });
    }

    file.name = name || file.name;
    await file.save();

    res.status(200).json({
      message: "File updated successfully.",
      file,
    });
  } catch (error) {
    console.error("Error updating file:", error);
    res.status(500).json({ message: "Failed to update file." });
  }
};

const deleteFile = async (req, res) => {
  try {
    const { id } = req.params;

    const file = await File.findByPk(id);

    if (!file) {
      return res.status(404).json({ message: "File not found." });
    }

    fs.unlink(file.path, async (err) => {
      if (err) {
        console.error("Error deleting file from disk:", err);
        return res.status(500).json({ message: "Failed to delete file." });
      }

      await file.destroy();
      res.status(200).json({ message: "File deleted successfully." });
    });
  } catch (error) {
    console.error("Error deleting file:", error);
    res.status(500).json({ message: "Failed to delete file." });
  }
};

module.exports = {
  uploadFile,
  listFiles,
  getFileById,
  updateFile,
  deleteFile,
};
