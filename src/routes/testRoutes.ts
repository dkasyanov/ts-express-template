import { BaseRoutes } from './baseRoutes'
import express from 'express'
import { TestController } from '../controllers/testController'

export class TestRoutes extends BaseRoutes {
    constructor(app: express.Application) {
        super(app, 'TestRoutes')
    }

    configureRoutes() {
        const testController = new TestController()

        this.app.route('/').get(testController.index)

        return this.app
    }
}
