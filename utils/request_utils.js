const axios = require('axios')


let get_star_wars_data = async () => {
    let data = await axios.get('https://swapi.dev/api/people/1/');
    return data.data
}

module.exports = { "get_star_wars_data": get_star_wars_data }
