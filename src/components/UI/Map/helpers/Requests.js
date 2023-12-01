import axios from "axios";

async function getCoord(){
    try {
        const response = await axios.get('https://catalog.api.2gis.com/3.0/items/geocode?q=3237597887446179&fields=items.point&key=77661842-aa62-4345-b828-82b1be08cdb7')
        console.log(`RESP = ${response.data}`);

    } catch (error) {
        console.log(`err = ${error}`)
    }
}

async function getCoord2(){
    let response = await fetch('https://catalog.api.2gis.com/3.0/items/geocode?q=3237597887446179&fields=items.point&key=77661842-aa62-4345-b828-82b1be08cdb7')
    let commit = await response.text()
    console.log(`Commit = ${commit}`)
}

export default {getCoord, getCoord2};