const checkSmallTask = (req, res, next) => {
  const { task } = req.body;

  if (typeof task !== 'string' || task.length < 10) {
    return res.status(422).json({
      err: {
        code: 'invalid_data',
        message: '"task" Your task is too small',
      },
    });
  }
  return next();
};

const checkBigTask = (req, res, next) => {
  const { task } = req.body;

  if (typeof task !== 'string' || task.length > 50) {
    return res.status(422).json({
      err: {
        code: 'invalid_data',
        message: '"task" Your task is too big',
      },
    });
  }
  return next();
};

module.exports = {
  checkSmallTask,
  checkBigTask,
};
