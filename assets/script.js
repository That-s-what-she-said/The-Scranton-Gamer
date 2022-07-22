
var charArray = [
    {
        name: "Michael",
        gameIndex : "office-management-101",
        genreIndex : "strategy,simulation"
    },
    {
        name: "Jan",
        gameIndex : "just-dance-2022",
        genreIndex : "rpg,action"
    },
    {
        name: "Jim",
        gameIndex : "rocket-league",
        genreIndex : "sports,family"
    },
    {
        name: "Pam",
        gameIndex : "fall-guys",
        genreIndex : "family,casual"
    },
    {
        name: "Dwight",
        gameIndex : "stardew-valley",
        genreIndex : "rpg,simulation"
    },
    {
        name: "Angela",
        gameIndex : "stray-2",
        genreIndex : "simulation,indie"
    },
    {
        name: "Stanley",
        gameIndex : "untitled-goose-game",
        genreIndex : "puzzle,family"
    },
    {
        name: "Kelly",
        gameIndex : "the-sims-4",
        genreIndex : "simulation,casual"
    },
]

function getInitgame(charIndex){
    // Pull First Game
    $.ajax({
        url:"https://api.rawg.io/api/games/" + charIndex + "?key=82f276f87ec44df988016fb8a6d23c76",
        // url:"https://api.rawg.io/api/games/stray-2?key=82f276f87ec44df988016fb8a6d23c76",
        method: "GET",
    }).then(function(results){
        console.log(results)

        $('#char-games').prepend("<li><p>"+results.name+"<br /><img src='" + results.background_image + "' width='150'/></p></li>")
    })
}

function getSimilargames(genreIndex){
        // Pull 3 Similar Games 
        $.ajax({
            url:"https://rawg.io/api/games?page_size=3&genres=" + genreIndex + "&metacritic=80&key=82f276f87ec44df988016fb8a6d23c76",
            // url:"https://rawg.io/api/games?page_size=3&genres=simulation,indie&metacritic=80&key=82f276f87ec44df988016fb8a6d23c76",
            method: "GET",
        }).then(function(gamelist){
            console.log(gamelist.results)
    
            for (var i=0; i<3; i++){
                $('#char-games').append("<li><p>"+gamelist.results[i].name+"<br /><img src='" + gamelist.results[i].background_image + "' width='150'/></p></li>")
            }    
        })
}

