import WebSocket from 'ws'

interface GameSocket {
    param: any
    server: WebSocket.Server
}

const DEFAULT_PORT = 3334
const SOCKET_STATE = 'close' // close open opening

class GameSocket {
    constructor(param?: any) {
        this.param = param || {}
        this.server = null
        this.init()
    }

    init() {
        if (this.server) {
            return
        }

        this.server = new WebSocket.Server({
            port: this.param.port || DEFAULT_PORT
        }, () => {
            console.log('websocket has start at', this.param.port || DEFAULT_PORT)
        })

        this.server.on('connection', (socket) => {
            console.log('a client has connet')

            socket.on('message', (data) => {
                console.log('message is', data)
            })

            socket.on('close', (data) => {
                console.log('client close')
            })
        })

        this.server.on('error', (err) => {
            console.log('server stop cause', err)

            this.init()
        })

    }

    onmessage(func: Function) {
        // if
    }
}


export default GameSocket
