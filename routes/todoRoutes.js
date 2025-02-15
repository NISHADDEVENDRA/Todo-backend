const {Router} = require("express");
const { getTodo, saveTodo, updateTodo, deleteTodo } = require("../controller/todoController");

const router = Router()

router.get('/', getTodo)
router.post('/save', saveTodo)
router.put('/update', updateTodo)
router.post('/delete', deleteTodo)

module.exports = router;