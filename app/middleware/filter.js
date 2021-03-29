// Middleware para a confirmação de que a sessão de login existe e é valida
// bcrypt para a criação do hash do token vindo do JWT
exports.fields = (req, res, next) => {
    if (!req.body.senha) {
        return res.status(400).send("O campo senha não foi passado corretamente");
    }
    else if (!req.body.email) {
        return res.status(400).send("O campo email não foi passado corretamente");
    } else {
        next();
    }
}