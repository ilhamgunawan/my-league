const leagueApi = url => {
    return fetch(`${url}`, {
        method: 'GET',
        headers: {
            'X-Auth-Token': '0d08af0570034b03a525c4af84529e5c'
        }
    })
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.log("Can't get data", error));
}

export default leagueApi;