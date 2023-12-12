const validateUser = async (req, res, next) => {
  const { gender } = req.body;
  if (gender) {
   next()
  } else {res.statut(404).send({message: "gender is not correct"})
  }
};

module.exports = validateUser;