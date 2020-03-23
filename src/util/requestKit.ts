import axios from 'axios'

const NORMAL_HEADER = {
    'Content-Type': 'application/json'
}
export default class HttpRequest{
    public static async get (url: string, data?:any, header?: any):Promise<any>{
        const options = {
            method: 'GET' as const,
            url,
            params: data,
            headers: {...NORMAL_HEADER, ...header},
            responseType: 'json'
        }
        return await this.handleRequest(options)
    }

    public static async post (url: string, body: any, header?: any):Promise<any>{
        const options = {
            method: 'POST' as const,
            url,
            headers: {...NORMAL_HEADER, ...header},
            data: body,
            responseType: 'json'
        }

        return await this.handleRequest(options)
    }

    public static async put (url: string, body: any, header?: any):Promise<any>{
        const options = {
            method: 'PUT' as const,
            url,
            headers: {...NORMAL_HEADER, ...header},
            data: body,
            responseType: 'json'
        }
        return await this.handleRequest(options)
    }

    public static async delete (url: string, body: any, header?: any):Promise<any>{
        const options = {
            method: 'DELETE' as const,
            url,
            headers: {...NORMAL_HEADER, ...header},
            data: body,
            responseType: 'json'
        }
        return await this.handleRequest(options)
    }


    private static async handleRequest (options: any):Promise<any>{
        try {

            return await axios(options)

        } catch (error) {
            return {message: error.errMsg}
        }

    }
}
