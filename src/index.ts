import express, { Request, Response } from 'express'
import Ws from './socket' 
const app = express()

const port = 3333

app.get('/', (req: Request, res: Response) => {
    res.send('hello world')
})

app.listen(port, () => {
    console.log('server has start at ', port) // eslint-disable-line
})

new Ws()