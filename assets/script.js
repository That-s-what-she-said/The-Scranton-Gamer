
// Pull First Game
$.ajax({
    url:"https://api.rawg.io/api/games/stray-2?key=82f276f87ec44df988016fb8a6d23c76",
    method: "GET",
}).then(function(results){
    console.log(results)

    $('#char-games').prepend("<li><p>"+results.name+"<br /><img src='" + results.background_image + "' width='150'/></p></li>")
})

// Pull 3 Similar Games based on metacritic 80+
$.ajax({
    url:"https://rawg.io/api/games?page_size=3&genres=simulation,indie&metacritic=80&key=82f276f87ec44df988016fb8a6d23c76",
    method: "GET",
}).then(function(gamelist){
    console.log(gamelist.results)

    for (var i=0; i<3; i++){
        $('#char-games').append("<li><p>"+gamelist.results[i].name+"<br /><img src='" + gamelist.results[i].background_image + "' width='150'/></p></li>")
    }    
})