const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const create = async (req, res) => {
  let comentarios = await prisma.comentarios.create({
    data: req.body,
  });

  res.status(200).json(comentarios).end();
};

const readOne = async (req, res) => {
    let comentarios = await prisma.comentarios.findMany({
        where: {
            equipamento: Number(req.params.id),
        },
        select: {
            id: true,
            comentario: true,
            data: true,
            equipa: {
                select: {
                    id: true,
                }
              },
            perf: {
                select: {
                  perfil: true
                }
              }
        }
    });

    //SELECT email, nome FROM comentarios WHERE email = ''

    res.status(200).json(comentarios).end();
}

const read = async (req, res) => {
  let comentarios = await prisma.comentarios.findMany({
    select: {
      id: true,
      comentario: true,
      data: true,
      perf: {
        select: {
          perfil: true,
        },
      },
    },
  });

  //SELECT email, nome FROM comentarios WHERE email = ''

  res.status(200).json(comentarios).end();
};



const del = async (req, res) => {
  console.log(req.params);
  const comentarios = await prisma.comentarios.delete({
    where: {
      id: Number(req.params.id),
    },
  });
  res.status(204).end();
};

module.exports = {
  create,
  read,
  del,
  readOne,
};
