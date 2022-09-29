import * as winston from 'winston'
import * as expressWinston from 'express-winston'

export const loggerMiddleware = expressWinston.logger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    ),
})

export const errorLoggerMiddleware = expressWinston.errorLogger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    ),
})
