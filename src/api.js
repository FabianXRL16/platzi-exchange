const url = "https://api.coincap.io/v2";


function getApi(){
    return fetch(`${url}/assets?limit=20`)
    .then(resp => resp.json())
    .then(resp => resp.data)
}
export default { getApi }


