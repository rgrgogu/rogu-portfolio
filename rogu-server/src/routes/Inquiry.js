const express = require("express");
const {
  getInquiries,
  getInquiry,
  createInquiry,
  deleteInquiry,
  searchInquiry,
} = require("../controllers/InquiryController");

const router = express.Router();

/* HIERARCHY
  1st: /
  2nd: customizer route accordance with the root "/" e.g: "/search, /admin"
  3rd: parameterized route accordance with the root "/" e.g: "/:id"
*/

router.get("/", getInquiries); // GET ALL INQUIRIES
router.get("/:id", getInquiry); // GET A SINGLE INQUIRY
router.get("/search/:text", searchInquiry); // SEARCH A NEW INQUIRY
router.post("/", createInquiry); // POST A NEW INQUIRY
router.delete("/:id", deleteInquiry); // DELETE A NEW INQUIRY

module.exports = router;
