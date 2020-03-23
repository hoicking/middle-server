import HttpRequest from '../util/requestKit'
import {MODEL_SERVER} from '../config'

export default class InfoModel {

    async getWeather(){
        const weather = HttpRequest.get(`${MODEL_SERVER}/info/weather`)
        return weather
    }
}