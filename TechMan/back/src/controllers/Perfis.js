const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const read = async (req, res) => {
    let perfis = await prisma.perfis.findMany({
        select: {
            id: true,
            perfil: true,
        }
    });

    //SELECT email, nome FROM perfis WHERE email = ''

    res.status(200).json(perfis).end();
}


module.exports = {
    read
}