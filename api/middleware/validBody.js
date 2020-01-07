function validBody (req, res, next) {
  const { email, username, password, firstName, lastName } = req.body;
  if (Object.keys(req.body).length === 5) {
    if (!username || !password || !email || !firstName || !lastName) 
      res.status(500).json({ message: "Please include all five fields; email, username, password, firstName and lastName."});
    next();
  } else res.status(500).json({ message: "Please include a body on the request." });
}

module.exports = validBody;