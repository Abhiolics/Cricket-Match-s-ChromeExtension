async function getTrackData(){

    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=8870ae31-588b-4d57-8f1a-d93d6e6470b5&offset=0")
    .then(data => data.json())
    .then(data => {
        if(data.status != "success") return;

        const matchesList = data.data;

        if(!matchesList) return[];

        const relData = matchesList.map(match => `${match.name} , ${match.status}`);

        console.log(relData);

        document.getElementById("matches").innerHTML = relData.map(match => `<li>${match} </li>`).join('');

        return relData;
    })
    .catch(e => console.log(e));
}


getTrackData();



//  LUQY5KXKKQADTE5R