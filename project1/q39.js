// Define the make_album function
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    // Check if tracks parameter is provided
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Make three dictionaries representing different albums
var album1 = make_album('Artist1', 'Album1');
var album2 = make_album('Artist2', 'Album2');
var album3 = make_album('Artist3', 'Album3', 12); // Including number of tracks
// Print each return value
console.log(album1);
console.log(album2);
console.log(album3);
