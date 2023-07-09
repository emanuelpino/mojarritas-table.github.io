"use strict";

// Variables - Funciones

const users = [
  {
    summoner: "MoRdOrR1",
    id: "xP4UGHIK3k2PDEWMbWCBht1OG6I214iCUs7pmq8y_PofVA",
  },
  {
    summoner: "Sparkii",
    id: "qm8yCeGLoBrbwfMw9NhqQ38xXoeDv22B2n5-Ogyi5kdsH3U",
  },
  {
    summoner: "NanoWars",
    id: "oB-KxwpIjOkgxoyPGkxZ_69lfDsWxxsw3FUOqDYgCOdTAg",
  },
  {
    summoner: "LaCerdaZapalina",
    id: "ZAWVWpmRmeEkC_xG7ye9UoK6PtOiKDqRfRIYH3nhIjtGEw",
  },
  {
    summoner: "TinkyWhisky",
    id: "20IHtTYspuRdpddTQQzMVev4mysHL-YGmozheBh43HEGrw",
  },
  // {
  //   summoner: "AltoGatito",
  //   id: "KE2u2VebIJwLNzWY0LFA68hdgZ0jEYmKlYoGdSUgxbpG",
  // },
  {
    summoner: "Anto",
    id: "w8K1313FWZeCB2IqXvlOUQ5nIdx-h4jRRNHQXw_Y4lMVHA",
  },
  // {
  //   summoner: "Mateo",
  //   id: "_vK7CtP0mahpA9K5nUfbnJURlkA-62v-Ivwy6v5IdUM9ug",
  // },
  // {
  //   summoner: "CaritaDePan",
  //   id: "jusia-5pfmxJ-KiN65y6dxE4hw2LuwUOdpGxm8KJaQhI910",
  // },
  {
    summoner: "Copi",
    id: "uzwv1feeotoar42QU3FSPhUxMzx1-zWvV1UxioaHyJUEDQ",
  },
  {
    summoner: "Totty",
    id: "AysOUbHfLA4I_D6njPDEMOr3h9WAxNtYimObqwS_OSpcww",
  },
  // {
  //   summoner: "Dolape",
  //   id: "UTPb2VIZxB5IxIV2YyloJGQegoTlvFNcgeVvWwlhtD5h4A",
  // },
  // {
  //   summoner: "Ema",
  //   id: "NSOO5ywGRiSGPrxKsyz6JjZ6NdWfieKmIzUXwPLGpp-FiGc",
  // },
];



const ol = document.querySelector('.ol')

// Consumo de la API de Riot Games
const apiKey = "RGAPI-4f42057c-199a-4a37-92b7-699502e46ad8";
const baseUrl = "https://la2.api.riotgames.com";
const urlSummoner = "/lol/summoner/v4/summoners/";
const urlLeague = "/lol/league/v4/entries/by-summoner/";

// Función para obtener información del usuario
async function getSummonerInfo(summonerId) {
  const url = `${baseUrl}${urlSummoner}${summonerId}?api_key=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// Función para obtener la liga del usuario
async function getLeagueInfo(summonerId) {
  const url = `${baseUrl}${urlLeague}${summonerId}?api_key=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// Función para crear un elemento <li> user con todos los subelementos y asignar los valores de cada usuario
function createElementUser(user) {
    
    // Crear el elemento <li>
    const li = document.createElement('li');
    li.classList.add('user');
    
    // Crear el primer contenedor <div> (container1)
    const container1 = document.createElement('div');
    container1.classList.add('container1');

    // Crear img para iconLeague
    const iconLeague = document.createElement('img')
    iconLeague.classList.add('league')
    iconLeague.setAttribute('src', `./assets/ranked-emblem/emblem-${user.tier.toLowerCase()}.png`)
    
    // Crear el título <h4>
    const h4 = document.createElement('h4');
    h4.classList.add('h4');
    h4.textContent = user.name;

    // Crear img para profileIcon
    const profileIcon = document.createElement('img')
    profileIcon.classList.add('profileIcon')
    profileIcon.setAttribute('src', `https://ddragon.leagueoflegends.com/cdn/13.13.1/img/profileicon/${user.profileIconId}.png`)

    // Crear el span para tier = rank
    const tier = document.createElement('span')
    tier.classList.add('tier')
    tier.textContent = `Tier: ${user.tier}`

    const rank = document.createElement('span')
    rank.classList.add('rank')
    rank.textContent = `Rank: ${user.rank}`

    
    // Crear el span para el nivel
    const level = document.createElement('span');
    level.classList.add('level');
    level.textContent = `Level: 🤪 ${user.summonerLevel}`;
    
    // Agregar los elementos al primer contenedor <div> (container1)
    container1.appendChild(iconLeague)
    container1.appendChild(h4);
    container1.appendChild(profileIcon)
    container1.appendChild(tier)
    container1.appendChild(rank)
    container1.appendChild(level);
    
    // Crear el segundo contenedor <div> (container2)
    const container2 = document.createElement('div');
    container2.classList.add('container2');
    
    // Crear el span para las partidas jugadas
    const games = document.createElement('span');
    games.classList.add('games');
    games.textContent = `Games: 🎮 ${(Number(user.wins)) + Number(user.losses)}`;

    // Crear el span para las partidas ganadas
    const wins = document.createElement('span')
    wins.classList.add('wins')
    wins.textContent = `Wins: ✅ ${user.wins}`

    // Crear el span para las partidas perdidas
    const losses = document.createElement('span')
    losses.classList.add('losses')
    losses.textContent = `Losses: ❌ ${user.losses}`

    // Crear div contenedor para los iconos de las posiciones
    const positionsContainer = document.createElement('div')
    positionsContainer.classList.add('positions')

    // Crear las dos imagenes para las posiciones
    const positionImg1 = document.createElement('img')
    positionImg1.classList.add('position1')
    positionImg1.setAttribute('src', `./assets/ranked-positions/Position_${user.tier.toLowerCase()}-jungle.png`)

    const positionImg2 = document.createElement('img')
    positionImg2.classList.add('position2')

    // Agregar las imagenes de las posiciones al contenedor positionsContainer
    positionsContainer.appendChild(positionImg1)
    positionsContainer.appendChild(positionImg2)
    
    // Agregar los elementos al segundo contenedor <div> (container2)
    container2.appendChild(games);
    container2.appendChild(wins)
    container2.appendChild(losses)
    container2.appendChild(positionsContainer)
    
    // Agregar los contenedores al elemento <li>
    li.appendChild(container1);
    li.appendChild(container2);

    // Agregar un EventListener de tipo 'click' a cada li
    li.addEventListener('click',() => {
        container2.classList.toggle('active')
    })
    
    // Agregar el elemento <li> al contenedor de la lista <ol> en el DOM
    ol.appendChild(li);

}


// Función GET global
async function getInfo(summonerId) {

  const summonerInfo = await getSummonerInfo(summonerId);
  const summonerLeagueInfo = await getLeagueInfo(summonerId);

  const summonerNew = {
    name: `${summonerInfo.name}`,
    profileIconId: `${summonerInfo.profileIconId}`,
    summonerLevel: `${summonerInfo.summonerLevel}`,
    tier: `${summonerLeagueInfo[0].tier}`,
    rank: `${summonerLeagueInfo[0].rank}`,
    wins: `${summonerLeagueInfo[0].wins}`,
    losses: `${summonerLeagueInfo[0].losses}`,
    leaguePoints: `${summonerLeagueInfo[0].leaguePoints}`,
  };

  return summonerNew
}

function main(){
  const userss = users.map( user => {
      return getInfo(user.id);
  });
  Promise.all(userss).then(data => {
    orderUsers(data)
  }).catch(error => {
    console.log(error)
  })
}


function order(users){
  users.sort((a,b) => {
    return b.summonerLevel - a.summonerLevel
  })
  users.map(user => {
    createElementUser(user)
  })
}

function orderUsers(users) {
  const tierOrder = {
    iron: 1,
    bronze: 2,
    silver: 3,
    gold: 4,
    platinum: 5,
    diamond: 6,
    grandmaster: 7,
    challenger: 8,
  };

  const rankOrder = {
    V: 1,
    IV: 2,
    III: 3,
    II: 4,
    I: 5,
  };

  users.sort((userA, userB) => {
    const tierA = userA.tier.toLowerCase();
    const tierB = userB.tier.toLowerCase();
    const rankA = userA.rank;
    const rankB = userB.rank;

    if (tierOrder[tierA] > tierOrder[tierB]) {
      return -1;
    } else if (tierOrder[tierA] < tierOrder[tierB]) {
      return 1;
    } else {
      // Si los tiers son iguales, se compara por rank
      if (rankOrder[rankA] < rankOrder[rankB]) {
        return -1;
      } else if (rankOrder[rankA] > rankOrder[rankB]) {
        return 1;
      } else {
        return 0; // Si tiers y ranks son iguales, se mantiene el orden original
      }
    }
  });
  users.map( user => {
    createElementUser(user)
  })
}


// Llamada a las funciones

main()