const url = "https://api.coincap.io/v2";


function getApi(){
    return fetch(`${url}/assets?limit=20`)
    .then(resp => resp.json())
    .then(resp => resp.data)
}

function getCoin(coin){
    return fetch(`${url}/assets/${coin}`)
    .then(resp => resp.json())
    .then(resp => resp.data)
}

function getAssetHistory(coin){
    // Get current date
    const now = new Date()
    // I make a copy of the current date
    const end = now.getTime()
    // I change the value of the variable now for the one of a previous day
    now.setDate(now.getDate()-1)
    // I save the value of the previous date in the start variable
    const start = now.getTime()

    return fetch(`${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`)
        .then(resp => resp.json())
        .then(resp => resp.data)
}

export default { getApi, getCoin, getAssetHistory }


