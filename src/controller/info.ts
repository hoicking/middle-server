import Express from 'express'
import Ctl from './ctl'
import InfoModel from '../model/info'
import Logger from '../util/logger'

class InfoCtl extends Ctl {

    public async getWeatherInfo() {
        try {
            const data = await new InfoModel().getWeather()
            this.res.json(data)
        } catch (error) {
            Logger.log(`InfoCtl::get weather fail cause ${error}`, 'error')
            this.res.statusCode = 500
        }
    }

}


export default InfoCtl