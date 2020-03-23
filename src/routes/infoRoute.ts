import express from 'express'
import InfoCtl from '../controller/info'


const router = express.Router()

router.get('/weather', (req, res) => {
    new InfoCtl(req, res).getWeatherInfo()
})

export default router 