const P_mental = require("./P_mentalSchema");
exports.getP_mentales = (req, res) => {
P_mental.find((err, P_mental) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(P_mental);
  });
};

exports.getP_mental = (req, res) => {
  let id = req.params.id;


  P_mental.find({ _id: id }, (err, P_mental) => {
    if (err) return res.status(5006).send(err);
    return res.status(200).send(P_mental);
  });
};

exports.newP_mental = (req, res) => {
  const newP_mental = new P_mental(req.body);
  newP_mental.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(P_mental);
  });
};



exports.updateP_mental = (req, res) => {
  let P_mental = req.body.P_mental;
  P_mental.findOneAndUpdate(
    { _id: req.params.id },
    { P_mental: P_mental },
    (err, todo) => {
      if (err) return res.status(500).send(err);
      return res.send(todo);
    }
  );
};

exports.deleteP_mental = (req, res) => {
  P_mental.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Todo successfully deleted",
      id: todo._id
    };
    return res.status(200).send(response);
  });
};
