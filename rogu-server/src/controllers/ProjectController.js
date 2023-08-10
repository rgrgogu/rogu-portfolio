const Project = require("../models/ProjectModel");
const mongoose = require("mongoose");
const cloudinary = require("../config/Cloudinary");
const upload = require("../config/Multer");

const uploadImage = upload.single("image");
const ITEMS_PER_PAGE = 6;

// GET ALL PROJECTS
const getProjects = async (req, res) => {
  const page = req.query.page || 1;

  const skip = (page - 1) * ITEMS_PER_PAGE;
  const countPromise = Project.estimatedDocumentCount({});
  const itemsPromise = Project.find({}).limit(ITEMS_PER_PAGE).skip(skip);

  const [count, items] = await Promise.all([countPromise, itemsPromise]);

  const pageCount = Math.ceil(count / ITEMS_PER_PAGE);

  res.status(200).json({
    pagination: {
      count,
      pageCount,
    },
    items,
  });
};

// GET A SINGLE PROJECT
const getProject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such project" });
  }

  const project = await Project.findById(id);

  return !project
    ? res.status(400).json({ error: "No such project" })
    : res.status(200).json(project);
};

// CREATE A NEW PROJECT
const createProject = async (req, res) => {
  uploadImage(req, res, async () => {
    let emptyFields = [];

    const image = req.file;
    const { title, category, date, description, link } = JSON.parse(req.body.data);

    if (!title) emptyFields.push("title");
    if (!category) emptyFields.push("category");
    if (!description) emptyFields.push("description");
    if (!date) emptyFields.push("date");
    if (!image) emptyFields.push("image");
    if (!link) emptyFields.push("link");

    if (emptyFields.length > 0)
      return res
        .status(400)
        .json({ error: "Please fill in all the fields! ", emptyFields });

    const path = req.file.path;

    try {
      const { secure_url, public_id } = await cloudinary.uploader.upload(path, {
        folder: "projects",
      });

      try {
        const object = {
          title,
          category: category.split(","),
          date: new Date(date),
          description,
          link,
          image: { url: secure_url, public_id },
        };
        const project = await Project.create(object);

        res.status(200).json(project);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    } catch (err) {
      console.log(err);
    }
  });
};

// DELETE A PROJECT
const deleteProject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such project" });
  }

  const project = await Project.findOneAndDelete({ _id: id });

  return !project
    ? res.status(400).json({ error: "No such project" })
    : res.status(200).json(project);
};

// UPDATE A PROJECT
const updateProject = async (req, res) => {
  uploadImage(req, res, async () => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "No such project" });
    }

    let emptyFields = [];
    const newImage = req.file;
    let obj = {
      title: "",
      category: "",
      date: "",
      description: "",
      link: "",
      image: {},
    };

    if (!newImage) {
      let { title, category, date, description, image, link } = JSON.parse(
        req.body.data
      );

      obj = { title, category, date, description, image, link };
    } else {
      let { title, category, date, description, link } = JSON.parse(req.body.data);

      obj = { title, category, date, description, link, image: newImage };
    }

    if (!obj.title) emptyFields.push("title");
    if (!obj.category) emptyFields.push("category");
    if (!obj.description) emptyFields.push("description");
    if (!obj.date) emptyFields.push("date");
    if (!obj.image) emptyFields.push("image");
    if (!obj.link) emptyFields.push("link");

    if (emptyFields.length > 0)
      return res
        .status(400)
        .json({ error: "Please fill in all the fields! ", emptyFields });

    if (newImage) {
      try {
        const path = req.file.path;
        const { secure_url, public_id } = await cloudinary.uploader.upload(
          path,
          {
            folder: "experiences",
          }
        );

        obj.image = { url: secure_url, public_id };
      } catch (err) {
        console.log(err);
      }
    }

    try {
      if (typeof obj.category === "string")
        obj.category = obj.category.split(",");

      const object = {
        title: obj.title,
        category: obj.category,
        date: new Date(obj.date),
        description: obj.description,
        link: obj.link,
        image: obj.image,
      };

      const project = await Project.findOneAndUpdate(
        { _id: id },
        { ...object },
        { new: true }
      );

      res.status(200).json(project);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
};

const searchProject = async (req, res) => {
  const { text } = req.params;
  const page = req.query.page || 1;
  const skip = (page - 1) * ITEMS_PER_PAGE;

  const objWithLimit = [{ $skip: skip }, { $limit: ITEMS_PER_PAGE }];

  const obj = [
    {
      $search: {
        index: "index2",
        text: {
          query: text,
          path: {
            wildcard: "*",
          },
        },
      },
    },
  ];

  const merged = [...obj, ...objWithLimit];

  const allItems = await Project.aggregate(obj);
  const limitedItems = await Project.aggregate(merged);
  const pageCount = Math.ceil(allItems.length / ITEMS_PER_PAGE);

  res.status(200).json({
    pagination: {
      count: allItems.length,
      pageCount,
    },
    items: limitedItems,
  });
};

module.exports = {
  getProjects,
  getProject,
  createProject,
  deleteProject,
  updateProject,
  searchProject,
};
