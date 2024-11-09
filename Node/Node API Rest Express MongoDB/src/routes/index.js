import express from 'express'
import routerLivros from './LivrosRoutes.js'
import routerAutores from './AutoresRoutes.js'
function routes(app) {
    app.route('/').get((req, res) => {
        res.status(200).send({ title: 'Home' })
    })

    app.use(express.json(), routerLivros, routerAutores)


}

export default routes