const errorHandler = (err, req, res, next) => {
  if (err) {
    res.send({
      error: true,
      success: false,
      message: err.message,
    });
  }

  next();
};

module.exports = errorHandler;
