import express, { Request, Response } from 'express'
import Logger from './util/logger'
import Ws from './socket'
import infoRoute from './routes/infoRoute'

const app = express()

const port = process.env.PORT

app.get('/', (req: Request, res: Response) => {
    res.send('hello world')
})

app.use('/info', infoRoute)


app.listen(port, () => {
    Logger.log(`server has start at ${port}`, 'log')
})

const gameSocket = new Ws()

gameSocket.onMessage((data: any) => {
    Logger.log(`webscoket receive data ${data}`)
})