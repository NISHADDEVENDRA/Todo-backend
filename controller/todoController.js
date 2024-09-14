const todoModel = require("../model/todoModel");

module.exports.getTodo = async (req, res) => {
  const todo = await todoModel.find();
  res.send(todo);
};

module.exports.saveTodo = async (req, res) => {
  const { text } = req.body;

  await todoModel.create({ text }).then((data) => {
    console.log("added Successfully");
    console.log(data);
    res.send(data);
  });
};


module.exports.updateTodo = async (req, res) => {
    const {_id,text} = req.body;

    await todoModel.findByIdAndUpdate(_id,{ text }).then(() => {
        res.set(201).send("Updated Successfully");
      }).catch((err)=>{console.log(err)})
  };


  module.exports.deleteTodo = async (req, res) => {
    const {_id} = req.body;

    await todoModel.findByIdAndDelete(_id).then(() => {
        res.set(201).send("Deleted Successfully");
      }).catch((err)=>{console.log(err)})
  };
