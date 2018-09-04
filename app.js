//const axios = require('axios');

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


let getInfo = async (direccion) => {

    try{
        let coors = await lugar.getLugarLatLng ( direccion );
        let temp = await clima.getClima ( coors.lat, coors.lng );

        return `El clima en ${ coors.direccion } es de ${ temp }º Celcius`;
    } catch (e){
        return `No se pudo concatenar el clima en ${ direccion }`;
    }
}

getInfo( argv.direccion )
    .then( mensaje => console.log(mensaje) )
    .catch( e => console(e) );




// lugar.getLugarLatLng ( argv.direccion )
//     .then( resp => {
//         console.log(resp);
//     })
//     .catch( e => console.log(e));

// clima.getClima ( -33.4300637, -70.7613892 )
//     .then( temp => console.log(temp))
//     .catch( e => console.log(e));
