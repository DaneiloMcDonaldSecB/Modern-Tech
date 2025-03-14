import express from "express";
import { education, experience, overview, skills, projects } from "../data/portfolioData.js";

const router = express.Router();

router.get("/getEdu", (req, res) => res.json(education));
router.get("/getExp", (req, res) => res.json(experience));
router.get("/getOverview", (req, res) => res.json(overview));
router.get("/getSkills", (req, res) => res.json(skills));
router.get("/getProjects", (req, res) => res.json(projects));

export default router;
