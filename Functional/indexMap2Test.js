const songs = [
    { id: 1, name: "Curl of the Burl", artist: "Mastodon" },
    { id: 2, name: "Oblivion", artist: "Mastodon" },
    { id: 3, name: "Flying Whales", artist: "Gojira"},
    { id: 4, name: "L'Enfant Sauvage", artist: "Gojira" }
]

//var allSongNames = songs.map(function (song){
//    return song.name;
//});

//ES6
const allSongNames = songs.map(song => {
    return song.name;
});

console.log(allSongNames);

//------------------------------

//var mySongFunc = function(song) {
//    return song.name.toLowerCase();
//}

//ES6
const mySongFunc = song => {
    return song.name.toLowerCase();
};

const lowerCaseSongs = songs.map(mySongFunc);

console.log(lowerCaseSongs);


//---------------------------------------------

//var mapped = songs.map(function(song) {
    //using _.omit we remove the artist property
    //don't use delete because it mutates the song object
    //while _.omit creates a new one
//    var newSong = _.omit(song, "artist");

//    return Object.assign(newSong, {
//        scrobbleCount: 0,
//        spotifyUrl: "let's just imagine these properties make sense for now",
//    });
//});

//ES6
const mapped = songs.map( song => {
    //let's remove the artist property
    const { artist, ...rest } = song;

    return {
        ...rest,
        scrobbleCount: 0,
        spotifyUrl: "let's just imagine these properties make sense for now",
    };
});

console.log(mapped);

