const db = require("../models");
const { v4: uuidv4 } = require("uuid");

exports.create = async (req, res) => {
  try {
    let user = new db[req.params.document](req.body);
    user.id = uuidv4();
    const data = await user.save();

    res.status(201).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: error.message,
    });
  }
};

exports.finds = async (req, res) => {
  try {
    let data = await db[req.params.document].scan({}).exec();

    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: error.message,
    });
  }
};

exports.find = async (req, res) => {
  try {
    const data = await db[req.params.document].get(req.params.id);
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: error.message,
    });
  }
};

exports.update = async (req, res) => {
  try {
    const data = await db[req.params.document].update(req.params.id, req.body);

    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: error.message,
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const data = await db[req.params.document].delete(req.params.id);

    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: error.message,
    });
  }
};
