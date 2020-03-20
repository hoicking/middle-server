export default class Logger {
    static log(message: any, level?: string) {
        let fmtStr = message
        if (typeof message !== 'string') {
            fmtStr = JSON.stringify(message)
        }

        switch (level) {
            case 'log':
                console.log(level + ': ' + fmtStr)
                break

            case 'warn':
                console.warn(level + ': ' + fmtStr)
                break

            case 'error':
                console.error(level + ': ' + fmtStr)
                break

            default:
                console.error('warn' + ': ' + fmtStr)
                break
        }
    }
}