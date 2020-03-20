import WebSocket from 'ws'
import Logger from './util/logger'

interface GameSocket {
    param: any
    server: WebSocket.Server
    msgFunc: Function
    handleMessage: Function
    serverState: null | String

}

const DEFAULT_PORT = 3334
const SOCKET_STATE = 'close' // close open opening

class GameSocket {
    constructor(param?: any) {
        this.param = param || {}
        this.server = null
        this.handleMessage = null
        this.serverState = null // stopped
        this.init()
    }

    init() {
        if (this.server && this.serverState !== 'stopped') {
            return
        }

        this.server = new WebSocket.Server({
            port: this.param.port || DEFAULT_PORT
        }, () => {
            Logger.log(`websocket has start at ${this.param.port || DEFAULT_PORT}`, 'log')
        })

        this.server.on('connection', (socket) => {

            Logger.log('a client has connet')

            socket.on('message', (data) => {
                if (this.handleMessage) {
                    this.handleMessage(data)
                }
            })

            socket.on('close', (data) => {
                Logger.log('client close')
            })
        })

        this.server.on('error', (err) => {
            Logger.log(`server stop cause ${err}`, 'error')
            this.serverState = 'stopped'
            this.init()
        })

    }

    sendMessage(message: any) {
        this.server.emit('topic', message)
    }

    onMessage(func: Function) {
        this.handleMessage = func
    }

}


export default GameSocket
