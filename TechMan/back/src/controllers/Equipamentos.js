const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let equipamentos = await prisma.equipamentos.create({
        data: req.body
    });

    res.status(200).json(equipamentos).end();
}

const read = async (req, res) => {
    let equipamentos = await prisma.equipamentos.findMany({
        where: {
            ativo: 1
        },
        select: {
            id: true,
            imagem: true,
            equipamento: true,
            descricao: true,
            data: true,
            ativo: true
        }
    });

    //SELECT email, nome FROM equipamentos WHERE email = ''

    res.status(200).json(equipamentos).end();
}

const del = async (req, res) => {
    console.log(req.params);
    const equipamentos = await prisma.equipamentos.delete({
        where: {
            id: Number(req.params.id)
        }
    })
    res.status(204).end();
}

module.exports = {
    create,
    read,
    del
}