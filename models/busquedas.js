const axios = require('axios');
const mapboxToken = process.env.MAPBOX_TOKEN;
const mapboxURL = process.env.MAPBOX_URL;

class Busquedas {
    historial = ['Tegucigalpa', 'Madrid', 'San José'];

    constructor() {
        //TODO: Read DB if exists
    }
    get paramsMapBox() {
        
        return {
            'access_token': `${mapboxToken}`,
            'limit': 5,
            'lengugage': 'es'
        }
    }
    async ciudad(place = '') {
        try {
            
            const instance = axios.create({
                baseURL: `${mapboxURL}${place}.json?`,
                params: this.paramsMapBox
            });
            const resp = await instance.get();
            console.log(resp.data);
            return [];
        } catch (error) {

        }


    }

}
module.exports = Busquedas;