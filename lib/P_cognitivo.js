
const P_cognitivo = require("./P_cognitivoSchema");
exports.getP_cognitivos = (req, res) => {
P_cognitivo.find((err, P_cognitivo) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(P_cognitivo);
  });
};

exports.getP_cognitivo = (req, res) => {
  let id = req.params.id;


  P_cognitivo.find({ _id: id }, (err, P_cognitivo) => {
    if (err) return res.status(5006).send(err);
    return res.status(200).send(P_cognitivo);
  });
};

exports.newP_cognitivo = (req, res) => {
  const newP_cognitivo = new P_cognitivo(req.body);
  newP_cognitivo.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newP_cognitivo);
  });
};



exports.updateP_cognitivo = (req, res) => {
  let P_cognitivo = req.body.P_cognitivo;
  P_cognitivo.findOneAndUpdate(
    { _id: req.params.id },
    { P_cognitivo: P_cognitivo },
    (err, todo) => {
      if (err) return res.status(500).send(err);
      return res.send(todo);
    }
  );
};

exports.deleteP_cognitivo = (req, res) => {
  P_cognitivo.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Todo successfully deleted",
      id: todo._id
    };
    return res.status(200).send(response);
  });
};
