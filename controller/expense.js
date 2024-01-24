const expense = require("../model/expense");

exports.getAllExpense = async (req, res, next) => {
  const expenses = await expense.findAll();
  res.send(expenses);
};

exports.saveExpense = (req, res, next) => {
  const [title, amount, date] = [
    req.body.title,
    req.body.amount,
    req.body.date,
  ];
  expense
    .create({ title: title, amount: amount, date: date })
    .then((result) => {
      console.log({ "Response after saving ": result });
      res.send("Saved");
    })
    .catch((err) => console.log(err));
};

exports.deleteExpense = (req, res, next) => {
  let id = req.params.id;
  console.log(id);
  expense
    .destroy({
      where: {
        id: id,
      },
    })
    .then((result) => {
      res.send("Successfully deleted.");
    })
    .catch((err) => console.log(err));
};
