const { Router } = require("express");

const { getToDo, saveToDo, deleteToDo, updateToDo } = require("../controllers/toDoController");

const router = Router();

router.get("/get-todo", getToDo);

router.post("/save-todo", saveToDo);

router.post("/delete-todo", deleteToDo);

router.post("/update-todo", updateToDo);

module.exports = router;