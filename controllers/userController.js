const bcrypt = require('bcrypt');
const { loginUserFC, registerUserFC } = require('../services/user.service');

const login = async (req, res) => {
    const { email, password } = req.body
    const data = await loginUserFC(email, password);
    console.log(email, password)
    res.status(200).send({ email, password });
}

const register = async (req, res) => {
    const { name, email, password } = req.body;
    console.log(req.body)
    console.log(name, email, password)
    try {
        const hashedPwd = await bcrypt.hash(password, 10);
        const data = await registerUserFC(name, email, hashedPwd);
        console.log(name, email, hashedPwd, 'sagar');
        res.status(200).send({ name, email, password });
    } catch (e) {
        res.send('Oops! Something went wrong.');
        console.log('failure');
    }
}

module.exports = {
    login, register
}