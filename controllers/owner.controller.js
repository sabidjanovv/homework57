const { errorHandler } = require("../helpers/error_handler");
const Owner = require("../models/owner");

const addOwner = async (req, res) => {
  try {
    const { name, phone_number } = req.body;
    const newOwner = await Owner.create({ name, phone_number });
    res.status(201).send(newOwner);
  } catch (error) {
    errorHandler(res, error);
  }
};

const getAllOwners = async (req, res) => {
  try {
    const owners = await Owner.findAll({});
    res.status(200).send({
      message: "All owners fetched successfully",
      data: owners,
    });
  } catch (error) {
    errorHandler(res, error);
  }
};

const getOwnerByID = async (req, res) => {
  try {
    const id = req.params.id;
    const owner = await Owner.findByPk(id);
    if (!owner) {
      return res.status(404).send({
        error: "Owner not found",
      });
    }
    res.status(200).send({
      message: "Owner fetched successfully by ID",
      data: owner,
    });
  } catch (error) {
    errorHandler(res, error);
  }
};

const updateOwner = async (req, res) => {
  try {
    const { id } = req.params;
    const owner = await Owner.findByPk(id);
    if (!owner) {
      return res.status(404).send({
        error: "Owner not found",
      });
    }
    const { name, phone_number, is_active } = req.body;
    owner.name = name;
    owner.phone_number = phone_number;
    owner.is_active = is_active;
    owner.save();
    res.status(200).send({
      message: "Owner updated successfully",
      data: owner,
    });
  } catch (error) {
    errorHandler(res, error);
  }
};

const deleteOwner = async (req, res) => {
  try {
    const { id } = req.params;
    const owner = await Owner.findByPk(id);
    if (!owner) {
      return res.status(404).send({
        error: "Owner not found",
      });
    }
    await owner.destroy();
    return res.status(200).send({
      message: "Owner deleted successfully",
    });
  } catch (error) {
    errorHandler(res, error);
  }
};

module.exports = {
  addOwner,
  getAllOwners,
  getOwnerByID,
  updateOwner,
  deleteOwner,
};
