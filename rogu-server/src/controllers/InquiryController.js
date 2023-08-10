const Inquiry = require("../models/InquiryModel");
const mongoose = require("mongoose");

const ITEMS_PER_PAGE = 6;

// GET ALL Inquiries
const getInquiries = async (req, res) => {
  const page = req.query.page || 1;

  const skip = (page - 1) * ITEMS_PER_PAGE;
  const countPromise = Inquiry.estimatedDocumentCount({});
  const itemsPromise = Inquiry.find({}).limit(ITEMS_PER_PAGE).skip(skip);

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

// GET A SINGLE Inquiry
const getInquiry = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such inquiry" });
  }

  const inquiry = await Inquiry.findById(id);

  return !inquiry
    ? res.status(400).json({ error: "No such inquiry" })
    : res.status(200).json(inquiry);
};

// CREATE A NEW Inquiry
const createInquiry = async (req, res) => {
  try {
    const { firstName, lastName, email, company, website, details } = req.body;

    let emptyFields = [];

    if (!firstName) emptyFields.push("firstName");
    if (!lastName) emptyFields.push("lastName");
    if (!email) emptyFields.push("email");
    if (!company) emptyFields.push("company");
    if (!website) emptyFields.push("website");
    if (!details) emptyFields.push("details");

    if (emptyFields.length > 0)
      return res
        .status(400)
        .json({ error: "Please fill in all the fields! ", emptyFields });

    try {
      const inquiry = await Inquiry.create({
        firstName,
        lastName,
        email,
        company,
        website,
        details,
      });
      res.status(200).json(inquiry);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE A PROJECT
const deleteInquiry = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such inquiry " });
  }

  const inquiry = await Inquiry.findOneAndDelete({ _id: id });

  return !inquiry
    ? res.status(400).json({ error: "No such inquiry" })
    : res.status(200).json(inquiry);
};

const searchInquiry = async (req, res) => {
  const { text } = req.params;
  const page = req.query.page || 1;
  const skip = (page - 1) * ITEMS_PER_PAGE;

  const objWithLimit = [{ $skip: skip }, { $limit: ITEMS_PER_PAGE }];

  const obj = [
    {
      $search: {
        index: "index1",
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

  const allItems = await Inquiry.aggregate(obj);
  const limitedItems = await Inquiry.aggregate(merged);
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
  getInquiries,
  getInquiry,
  createInquiry,
  deleteInquiry,
  searchInquiry,
};
