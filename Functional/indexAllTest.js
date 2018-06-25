const spotifySongs = [
    { id: 1, name: "Curl of the Burl", artist: "Mastodon", duration: 204 },
    { id: 2, name: "Oblivion", artist: "Mastodon", duration: 306 },
    { id: 3, name: "Flying Whales", artist: "Gojira", duration: 444 },
    { id: 4, name: "L'Enfant Sauvage", artist: "Gojira", duration: 246 }
];

const lastFmSongs = [
    { id: 5, name: "Chop Suey", artist: "System of a Down", duration: 192 },
    { id: 6, name: "Throne", artist: "Bring me the Horizon", duration: 186 },
    { id: 7, name: "Destrier", artist: "Agent Fresco", duration: 132 },
    { id: 8, name: "Out of the Black", artist: "Royal Blood", duration: 240 } 
];

const allSongs = [spotifySongs, lastFmSongs];

//Let's reduce the array of arrays into a single one
const songNames = allSongs
    .reduce((acc, currValue) => {
        return acc.concat(currValue);
    }, [])
    //let's map it out with the seconds turned into minutes
    .map(song => {
        return { ...song, duration: Math.floor(song.duration / 60) };
    })
    //let's filter the ones under 3 minutes
    .filter(song => {
        return song.duration > 3;
    })
    //now let's map out the song names the quick way
    .map(song => song.name)
    //Join'em up
    .join(" , ");

console.log(songNames);    