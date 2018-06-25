const songs = [
    { id: 1, name: "Curl of the Burl", artist: "Mastodon" },
    { id: 2, name: "Oblivion", artist: "Mastodon" },
    { id: 3, name: "Flying Whales", artist: "Gojira"},
    { id: 4, name: "L'Enfant Sauvage", artist: "Gojira" }
]

//var obj = songs.reduce(function (acc, currValue) {
//    var artist = currValue.artist;
//    var artistCount = acc[artist] ? acc[artist] + 1 : 1;

//    var newObj = {};
//    newObj[artist] = artistCount;

//    return Object.assign(acc, newObj);
//},{});

//ES6
const obj = songs.reduce((acc, currValue) => {
    const artist = currValue.artist;
    const artistCount = acc[artist] ? acc[artist] + 1 : 1;

    return {
        ...acc,
        [artist]: artistCount,
    };
}, {});

console.log(obj);