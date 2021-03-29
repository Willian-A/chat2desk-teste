module.exports.register_form = (res) => {
    return res.render("../views/register");
}
module.exports.login_form = (res) => {
    return res.render("../views/login");
}

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
    userModel.insertUser(users);
    return res.sendStatus(200);
}

module.exports.login = (application, req, res) => {
    const userModel = new application.app.models.user();
    const users = userModel.selectUser();
    for (var index in users) {
        if (users[index].user.email === req.body.email &&
            users[index].user.senha === req.body.senha) {
            res.cookie('token', { token: "58312319C1866E61394C69263957B" });
            return res.sendStatus(200);
        }
    }
    return res.status(404).send("Este usuario não existe");
}