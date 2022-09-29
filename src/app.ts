import express from 'express'
import http from 'http'

import cors from 'cors'
import { BaseRoutes } from './routes/baseRoutes'
import { TestRoutes } from './routes/testRoutes'
import debug from 'debug'
import { errorLoggerMiddleware, loggerMiddleware } from './middlewares/logger'

const app: express.Application = express()
const server: http.Server = http.createServer(app)
const port = 3000
const routes: Array<BaseRoutes> = []
const debugLog: debug.IDebugger = debug('app')

// here we are adding middlewares
app.use(express.json())
app.use(cors())
app.use(loggerMiddleware)
app.use(errorLoggerMiddleware)

// here we are adding the UserRoutes to our array,
// after sending the Express.js application object to have the routes added to our app!
routes.push(new TestRoutes(app))

// this is a simple route to make sure everything is working properly
server.listen(port, () => {
    debugLog(`Server running at http://localhost:${port}`)
    routes.forEach((route: BaseRoutes) => {
        debugLog(`Routes configured for ${route.getName()}`)
    })
})
