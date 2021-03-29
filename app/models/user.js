const fs = require("fs");

class UserDAO {
    selectUser = () => {
        try {
            const userJSON = fs.readFileSync(".../../database/users.json");
            return JSON.parse(userJSON);
        } catch (err) {
            console.log(err);
            return res.status(500).send("Erro interno do Servidor");
        }
    }

    insertUser = (values) => {
        fs.writeFileSync(".../../database/users.json", JSON.stringify(values));
    }
}


module.exports = (app) => {
    return UserDAO;
};
