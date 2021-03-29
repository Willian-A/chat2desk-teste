const filter = require("../middleware/filter");

module.exports = (application) => {
    application.get("/register_form", (req, res) => {
        application.app.controllers.user.register_form(res);
    });

    application.get("/login_form", (req, res) => {
        application.app.controllers.user.login_form(res);
    });
    // Rota para o cadastro de usuarios
    application.post('/register', filter.fields, (req, res) => {
        application.app.controllers.user.register(application, req, res);
    });

    // Rota para o login de usuarios
    application.post('/login', filter.fields, (req, res) => {
        application.app.controllers.user.login(application, req, res);
    });

}