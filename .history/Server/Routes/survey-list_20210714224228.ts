import express from "express";
const router = express.Router();
export default router;

// instantiate an object of type clothing controller
import {
  DisplayAddPage,
  DisplaySurveyListPage,
  DisplayEditPage,
} from "../Controllers/surveys";

// Display the Clothing-List Page
router.get("/", DisplaySurveyListPage); // default route

// Display the Edit page by id
router.get("/edit/:id", DisplayEditPage);

// Display the Add page
router.get("/edit", DisplayAddPage);
