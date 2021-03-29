const filter = require("../middleware/filter");

module.exports = (application) => {
    // Rota para o cadastro de usuarios
    application.post('/registrar', filter.fields, (req, res) => {
        application.app.controllers.user.register(application, req, res);
    });

    // Rota para o login de usuarios
    application.post('/login', filter.fields, (req, res) => {
        application.app.controllers.user.login(application, req, res);
    });

}