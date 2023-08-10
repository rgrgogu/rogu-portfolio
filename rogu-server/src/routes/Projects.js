const express = require("express");
const {
  getProjects,
  getProject,
  createProject,
  deleteProject,
  updateProject,
  searchProject,
} = require("../controllers/ProjectController");

const router = express.Router();

router.get("/", getProjects); // GET ALL PROJECTS
router.get("/:id", getProject); // GET A SINGLE PROJECT
router.get("/search/:text", searchProject); // SEARCH A NEW PROJECT
router.post("/", createProject); // POST A NEW PROJECT
router.delete("/:id", deleteProject); // DELETE A PROJECT
router.patch("/:id", updateProject); // UPDATE A PROJECT

module.exports = router;
