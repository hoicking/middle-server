import Express from 'express'

export default class Ctl {
    res: Express.Response<any>
    req: Express.Request<any>

    constructor(req: Express.Request, res: Express.Response) {
        this.req = req
        this.res = res
    }
}