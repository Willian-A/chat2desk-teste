module.exports.register = (application, req, res) => {
    const userModel = new application.app.models.user();
    const users = userModel.selectUser();
    for (var index in users) {
        if (users[index].user.email === req.body.email) {
            res.status(403).send("Este email já está cadastrado");
            return;
        }
    }
    users[Object.keys(users).length + 1] = { user: req.body };
    userModel.registerUser(users);
    return res.sendStatus(200);
}

module.exports.login = (application, req, res) => {
    const userModel = new application.app.models.user();
    const users = userModel.selectUser();
    for (var index in users) {
        if (users[index].user.email === req.body.email) {
            return res.sendStatus(200);
        }
    }
    return res.status(404).send("Este usuario não existe");


}