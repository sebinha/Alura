import Erro404 from "../err/Erro404.js";

function middleware404(req, res, next) {
    const erro404 = new Erro404();
    next(erro404)
}

export default middleware404;