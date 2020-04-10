import HttpRequest from '../util/requestKit'
import {MODEL_SERVER} from '../config'

export default class Index {

    async fishing(){
        const fishes = await HttpRequest.get(`${MODEL_SERVER}/fish/fishes`)

    }

}