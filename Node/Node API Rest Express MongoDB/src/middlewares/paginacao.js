import ErroCasting from "../err/ErroCasting.js";

async function paginacao(req, res, next) {
  let { pagina = 1, limite = 5, ordenacao = "_id:1" } = req.query;

  let [campo, ordem] = ordenacao.split(":");

  pagina = parseInt(pagina);
  limite = parseInt(limite);
  ordem = parseInt(ordem);


  const resultado = req.resultado;

  try {
    if (limite > 0 && pagina > 0) {
      const resultadoPaginado = await resultado.find()
        .sort({ [campo]: ordem })
        .skip((pagina - 1) * limite)
        .limit(limite)
        .exec();
      res.status(200).json(resultadoPaginado);
    } else {
      res.status(200).json([]);
    }
  } catch (error) {
    next(new ErroCasting());
  }
}

export default paginacao;