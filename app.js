require('dotenv').config()
const { leerInput, inquirerMenu, inquirerPausa } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async () => {
    try {
        const busquedas = new Busquedas();

        let option = '';
        do {
            option = await inquirerMenu();
    
            switch (option) {
                case 1:
                    //Show message
                    const place = await leerInput('Ciudad: ');
                    const lugar = busquedas.ciudad(place);
                    console.log(lugar);
                    //Search places
                    //Select the place
                    //Weather [Geolocation]
                    //Show results
                    // console.log('\nInformación de la ciudad\n');
                    // console.log('Ciudad: ');
                    // console.log('Lng: ');
                    // console.log('Ltd: ');
                    // console.log('Temperature: ');
                    // console.log('Max: ');
                    // console.log('Min: ');
                    break;
                case 2:
                    console.log('2 dentro de la opción');
                    break;
            }
    
            await inquirerPausa();
        } while (option != 0);    
    } catch (error) {
        console.error(error);
    }
}

main();