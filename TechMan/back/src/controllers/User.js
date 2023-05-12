const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();

const read = async (req, res) => {
    let user = await prisma.user.findMany({
        select: {
            id: true,
            perfil: true,
            senha: true
        }
    });

    //SELECT email, nome FROM user WHERE email = ''

    res.status(200).json(user).end();
}

const login = async (req, res) => {

    let user = await prisma.user.findMany({
        where: {
            senha: req.body.senha
        },
        select: {
            id: true,
            perfil: true
        }

    })
    if (user.length > 0) {
        res.status(202).json(user).end();
    } else {
        res.status(404).end();
    }
}

module.exports = {
    read,
    login
}