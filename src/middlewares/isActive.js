export default function isActive () {
  return function (req, res, next) {
    if (req.user.is_active) {
      return next();
    }

    return res.status(401).send();
  }
}