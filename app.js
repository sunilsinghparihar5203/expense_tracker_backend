const cors = require("cors");
const express = require("express");

const sequelize = require("./util/database");

const expense = require("./model/expense");
const user = require("./model/user");

const expenseController = require("./controller/expense");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.send("<h1>This is default page");
});

app.get("/expenses",expenseController.getAllExpense );

app.post("/expense", expenseController.saveExpense);

app.delete("/expense/:id", expenseController.deleteExpense);

app.use((req, res, next) => {
  res.status(404).send("<h1>This is error page</h1>");
});

expense.belongsTo(user, { constraints: true, onDelete: "CASCADE" });
user.hasMany(expense);

sequelize
  .sync() //{ force: true }
  .then((result) => {
    app.listen(3001, () => {
      console.log("server is running");
    });
  })
  .then((err) => console.log(err));
