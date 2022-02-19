import { apiClientGenerator } from "./api-client-generator.js";

// age of empires api client

const AGE_OF_EMPIRES_API_BASE_URL = 'https://age-of-empires-2-api.herokuapp.com/api/v1';

const ageOfEmpiresApiClient = apiClientGenerator(AGE_OF_EMPIRES_API_BASE_URL);

 function printCivilizations(ids){
    ids.forEach(async (id) => {

        const {name, army_type} = await ageOfEmpiresApiClient.civilization(id);
        
        console.log(`The civilization name is: ${name} and the army type is: ${army_type}`);
    });
}

 function printStructures(ids){
    ids.forEach(async (id) => {

        const {name, build_time} = await ageOfEmpiresApiClient.structure(id);
        
        console.log(`The structure name is: ${name} and the time to build is: ${build_time}`);
    });
}

printCivilizations([1, 4, 5, 8]);
printStructures([2, 7, 10]);

// pokemon api client

const POKEMON_API_BASE_URL = 'https://pokeapi.co/api/v2';

const pokemonApiClient = apiClientGenerator(POKEMON_API_BASE_URL);

function printPokemonItem(ids, item){
    ids.forEach(async (id) => {

        const {name} = await pokemonApiClient[item](id);
        
        console.log(`The ${item} name is: ${name}`);
    });
}
printPokemonItem([1,2,3], "pokemon");
        
printPokemonItem([1,2,3], "location");