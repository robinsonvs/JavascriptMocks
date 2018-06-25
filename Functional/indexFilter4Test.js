const songs = [
    { id: 1, name: "Curl of the Burl", artist: "Mastodon" },
    { id: 2, name: "Oblivion", artist: "Mastodon" },
    { id: 3, name: "Flying Whales", artist: "Gojira"},
    { id: 4, name: "L'Enfant Sauvage", artist: "Gojira" }
]

//var mastodonSongs = songs.filter(function (song){
//    return song.artist.toLowerCase() === "mastodon";
//});

//ES6
const mastodonSongs = songs.filter(song => {
    return song.artist.toLowerCase() === "mastodon";
});

console.log(mastodonSongs);

