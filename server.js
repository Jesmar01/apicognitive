express = require("express");
mongoose = require("mongoose");
const app = express();
//
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use((rep, res, next)=>{
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Methods","GET, POST, PUT, DELETE, OPTIONS");
  next();
});
//conectar a la base de datos
mongoose
  .connect(
    "mongodb+srv://admin:123jesus@cluster0-c9kfd.mongodb.net/juegosludicos?retryWrites=true",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("connected");
  })
  .catch(err => {
    console.log("err", err);
  });

app.get("/", (req, res)=> {
  res.send("Ludic Game");
});

//modulos externos
var user = require("./lib/User");
var juego = require("./lib/Juego");
var cognitivo = require("./lib/P_cognitivo");
var mental = require("./lib/P_mental");



//GET TODOS
app.get("/users", (req, res) => {
  user.getUsers(req, res);
});
app.get("/juegos", (req, res) => {
  juego.getJuegos(req, res);
});
app.get("/cognitivos", (req, res) => {
  cognitivo.getP_cognitivos(req, res);
});
app.get("/mentales", (req, res) => {
  mental.getP_mentales(req, res);
});

//GET POR ID
app.get("/users/:id", (req, res) => {
  user.getUser(req, res);
});
app.get("/juegos/:id", (req, res) => {
  juego.getJuego(req, res);
});
app.get("/cognitivos/:id", (req, res) => {
  cognitivo.getP_cognitivo(req, res);
});
app.get("/mentales/:id", (req, res) => {
  mental.getP_mental(req, res);
});
//POST
app.post("/users", (req, res) => {
  user.newUser(req, res);
});
app.post("/juegos", (req, res) => {
  juego.newJuego(req, res);
});
app.post("/cognitivos", (req, res) => {
  cognitivo.newP_cognitivo(req, res);
});
app.post("/mentales", (req, res) => {
  mental.newP_mental(req, res);
});
//PUT
app.put("/users/:id", (req, res) => {
  user.updateUser(req, res);
});
app.put("/juegos/:id", (req, res) => {
  juego.updateJuego(req, res);
});
app.put("/cognitivos/:id", (req, res) => {
  cognitivo.updateP_cognitivo(req, res);
});
app.put("/mentales/:id", (req, res) => {
  mental.updateP_mental(req, res);
});
//DELETE
app.delete("/users/:id", (req, res) => {
  user.deleteUser(req, res);
});
app.delete("/juegos/:id", (req, res) => {
  juego.deleteJuego(req, res);
});
app.delete("/cognitivos/:id", (req, res) => {
  cognitivo.deleteP_cognitivo(req, res);
});
app.delete("/mentales/:id", (req, res) => {
  mental.deleteP_mental(req, res);
});

app.listen(8081);
console.log(`Servidor on ${app.settings.env}`);
