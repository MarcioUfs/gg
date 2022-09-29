async function login(req, res) {
    return res.status(200).json({ msg: "usuario logado!" })
}
async function me(req, res) {
    return res.status(200).json({ msg: "eu sou usuario" })
}

module.exports = {
    login: login,
    me: me
}