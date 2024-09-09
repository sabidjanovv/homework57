const { errorHandler } = require("../helpers/error_handler");
const Tool = require("../models/tool");

const addTool = async (req, res) => {
  try {
    const { name, brand, description } = req.body;
    const newTool = await Tool.create({ name, brand, description });
    res.status(201).send(newTool);
  } catch (error) {
    errorHandler(res, error);
  }
};

const getAllTools = async (req, res) => {
  try {
    const tools = await Tool.findAll({});
    res.status(200).send({
      message: "All tools fetched successfully",
      data: tools,
    });
  } catch (error) {
    errorHandler(res, error);
  }
};

const getToolByID = async (req, res) => {
  try {
    const id = req.params.id;
    const tool = await Tool.findByPk(id);
    if (!tool) {
      return res.status(404).send({
        error: "Tool not found",
      });
    }
    res.status(200).send({
      message: "Tool fetched successfully by ID",
      data: tool,
    });
  } catch (error) {
    errorHandler(res, error);
  }
};

const updateTool = async (req, res) => {
  try {
    const { id } = req.params;
    const tool = await Tool.findByPk(id);
    if (!tool) {
      return res.status(404).send({
        error: "Tool not found",
      });
    }
    const { name, brand, description, is_active } = req.body;
    tool.name = name;
    tool.brand = brand;
    tool.description = description;
    tool.is_active = is_active;
    tool.save();
    res.status(200).send({
      message: "Tool updated successfully",
      data: tool,
    });
  } catch (error) {
    errorHandler(res, error);
  }
};

const deleteTool = async (req, res) => {
  try {
    const { id } = req.params;
    const tool = await Tool.findByPk(id);
    if (!tool) {
      return res.status(404).send({
        error: "Tool not found",
      });
    }
    await tool.destroy();
    return res.status(200).send({
      message: "Tool deleted successfully",
    });
  } catch (error) {
    errorHandler(res, error);
  }
};

module.exports = {
  addTool,
  getAllTools,
  getToolByID,
  updateTool,
  deleteTool,
};
