const songs = [
    { id: 1, name: "Curl of the Burl", artist: "Mastodon" },
    { id: 2, name: "Oblivion", artist: "Mastodon" },
    { id: 3, name: "Flying Whales", artist: "Gojira"},
    { id: 4, name: "L'Enfant Sauvage", artist: "Gojira" }
]

const mult = [songs, [{id:112, name: "Chop Suey", artist: "System of a Down"}]];

//var flatMult = mult.reduce(function (acc, currValue) {
//    return acc.concat(currValue);
//}, []);

//ES6
const flatMult = mult.reduce((acc, currValue) => {
    return acc.concat(currValue);
}, []);

console.log(flatMult);
