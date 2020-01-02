function validBody (req, res, next) {
    if (req.body && Object.keys(req.body).length) {
      next();
    } else {
      res.status(500).json({ message: "Please include a body on the request." });
    }
}

module.exports = validBody;