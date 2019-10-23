export default function isAdmin () {
  return function (req, res, next) {
    if (req.user.is_admin) {
      return next();
    }

    return res.status(401).send();
  }
}