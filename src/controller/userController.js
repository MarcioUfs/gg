async function login(req, res) {
    const login = req.body.login;
    const pass = req.body.password
    if (login === "000.000.000-01" && pass === "123") {
        return res.status(200).json({ error: false, msg: "usuario logado!", id: 2, token: "sdf7ew84f8we7r84gh4t8633#sae8d5f44-e7r84sae8d5f4gh4t8633#4-895*56595d4fseggFsae8d5f4e4fd5f4fTtt" })
    }
    return res.status(403).json({ error: true, msg: "Acesso não autorizado" })
}
async function me(req, res) {
    return res.status(200).json({ 
        error: false,
        msg: "Dados do usuario",
        nome:"Nome Usuario Teste",
        codigo: "356523",
        matricula: "20158487415484"
    })
}

module.exports = {
    login: login,
    me: me
}