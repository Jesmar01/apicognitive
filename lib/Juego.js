const Juego = require("./JuegoSchema");
exports.getJuegos = (req, res) => {
Juego.find((err, juego) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(juego);
  });
};

exports.getJuego = (req, res) => {
  let id = req.params.id;


  Juego.find({ _id: id }, (err, juego) => {
    if (err) return res.status(5006).send(err);
    return res.status(200).send(juego);
  });
};

exports.newJuego = (req, res) => {
  const newJuego = new Juego(req.body);
  newJuego.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newJuego);
  });
};



exports.updateJuego = (req, res) => {
  let nombre = req.body.nombre;
  Juego.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: nombre },
    (err, todo) => {
      if (err) return res.status(500).send(err);
      return res.send(todo);
    }
  );
};

exports.deleteJuego = (req, res) => {
  Juego.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Todo successfully deleted",
      id: todo._id
    };
    return res.status(200).send(response);
  });
};
