
var charArray = [
    {
        name: "Michael",
        fname: "Michael Scott",
        gameIndex : "office-management-101",
        genreIndex : "casual,sports"
    },
    {
        name: "Jan",
        fname: "Jan Levinson",
        gameIndex : "just-dance-2022",
        genreIndex : "rpg,action"
    },
    {
        name: "Dwight",
        fname: "Dwight Schrute",
        gameIndex : "stardew-valley",
        genreIndex : "rpg,simulation"
    },
    {
        name: "Angela",
        fname: "Angela Martin",
        gameIndex : "stray-2",
        genreIndex : "simulation,indie"
    },
    {
        name: "Jim",
        fname: "Jim Halpert",
        gameIndex : "rocket-league",
        genreIndex : "sports,family"
    },
    {
        name: "Pam",
        fname: "Pam Beesly",
        gameIndex : "fall-guys",
        genreIndex : "family,casual"
    },
    {
        name: "Ryan",
        fname: "Ryan Howard",
        gameIndex : "stardew-valley",
        genreIndex : "rpg,simulation"
    },
    {
        name: "Kelly",
        fname: "Kelly Kapoor",
        gameIndex : "stray-2",
        genreIndex : "simulation,indie"
    },
    {
        name: "Stanley",
        fname: "Stanley Hudson", 
        gameIndex : "untitled-goose-game",
        genreIndex : "puzzle,family"
    },
    {
        name: "Phyllis",
        fname: "Phyllis Lapis",
        gameIndex : "the-sims-4",
        genreIndex : "simulation,casual"
    },
    {
        name: "Oscar",
        fname: "Oscar Martinez",
        gameIndex : "stardew-valley",
        genreIndex : "rpg,simulation"
    },
    {
        name: "Meredith",
        fname: "Meredith Palmer",
        gameIndex : "stray-2",
        genreIndex : "simulation,indie"
    },
]
// console.log(charArray)
// for (x=0;x < charArray.length;x++){
//     console.log(charArray[x].name)
// }

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

function changeImage(text) {
    $("#char-image").attr("src","./assets/img/"+text+"-lg.jpg")
}

function changeImageBack() {
    $("#char-image").attr("src","")
}

function charDetails(text){
    $("#char-fullname").empty()
    $("#char-games").empty()
    $("#char-fullname").append($("<h2></h2>").text(text))
    $("#char-fullname").append($("<p></p>").text('"This is a line reserved for a quote."'))
}

$("#back")
    .on("click", function(){
        $("#back").hide("fast")
        $("#list-characters").show("slow")
        changeImageBack()
    })
$("#random-character")
    .on("click", function(){
        $("#list-characters").hide("slow")
        $("#back").show(200)
        var randNum = Math.floor(Math.random()*charArray.length)
        $("#char-image").attr("src","./assets/img/"+charArray[randNum].name+"-lg.jpg")
    })

$("#michael")
    .on("click", function (){
        $("#list-characters").hide("slow")
        $("#back").show(200)
        var charIndex = charArray.findIndex(x => x.name ==="Michael")
        changeImage(charArray[charIndex].name)
        charDetails(charArray[charIndex].fname)
        getInitgame(charArray[charIndex].gameIndex)
        getSimilargames(charArray[charIndex].genreIndex)        
    })
$("#jan")
.on("click", function (){
    $("#list-characters").hide("slow")
    $("#back").show(200)
    var charIndex = charArray.findIndex(x => x.name ==="Jan")
    changeImage(charArray[charIndex].name)
    charDetails(charArray[charIndex].fname)
    getInitgame(charArray[charIndex].gameIndex)
    getSimilargames(charArray[charIndex].genreIndex)        
})
$("#dwight")
    .on("click", function (){
        $("#list-characters").hide("slow")
        $("#back").show(200)
        var charIndex = charArray.findIndex(x => x.name ==="Dwight")
        changeImage(charArray[charIndex].name)
        charDetails(charArray[charIndex].fname)
        getInitgame(charArray[charIndex].gameIndex)
        getSimilargames(charArray[charIndex].genreIndex)        
    })

$("#angela")
.on("click", function (){
    $("#list-characters").hide("slow")
    $("#back").show(200)
    var charIndex = charArray.findIndex(x => x.name ==="Angela")
    changeImage(charArray[charIndex].name)
    charDetails(charArray[charIndex].fname)
    getInitgame(charArray[charIndex].gameIndex)
    getSimilargames(charArray[charIndex].genreIndex)        
})
$("#jim")
    .on("click", function (){
        $("#list-characters").hide("slow")
        $("#back").show(200)
        var charIndex = charArray.findIndex(x => x.name ==="Jim")
        changeImage(charArray[charIndex].name)
        charDetails(charArray[charIndex].fname)
        getInitgame(charArray[charIndex].gameIndex)
        getSimilargames(charArray[charIndex].genreIndex)        
    })
$("#pam")
.on("click", function (){
    $("#list-characters").hide("slow")
    $("#back").show(200)
    var charIndex = charArray.findIndex(x => x.name ==="Pam")
    changeImage(charArray[charIndex].name)
    charDetails(charArray[charIndex].fname)
    getInitgame(charArray[charIndex].gameIndex)
    getSimilargames(charArray[charIndex].genreIndex)        
})
$("#ryan")
    .on("click", function (){
        $("#list-characters").hide("slow")
        $("#back").show(200)
        var charIndex = charArray.findIndex(x => x.name ==="Ryan")
        changeImage(charArray[charIndex].name)
        charDetails(charArray[charIndex].fname)
        getInitgame(charArray[charIndex].gameIndex)
        getSimilargames(charArray[charIndex].genreIndex)        
    })
$("#kelly")
.on("click", function (){
    $("#list-characters").hide("slow")
    $("#back").show(200)
    var charIndex = charArray.findIndex(x => x.name ==="Kelly")
    changeImage(charArray[charIndex].name)
    charDetails(charArray[charIndex].fname)
    getInitgame(charArray[charIndex].gameIndex)
    getSimilargames(charArray[charIndex].genreIndex)        
})
$("#stanley")
    .on("click", function (){
        $("#list-characters").hide("slow")
        $("#back").show(200)
        var charIndex = charArray.findIndex(x => x.name ==="Stanley")
        changeImage(charArray[charIndex].name)
        charDetails(charArray[charIndex].fname)
        getInitgame(charArray[charIndex].gameIndex)
        getSimilargames(charArray[charIndex].genreIndex)        
    })
$("#phyllis")
    .on("click", function (){
        $("#list-characters").hide("slow")
        $("#back").show(200)
        var charIndex = charArray.findIndex(x => x.name ==="Phyllis")
        changeImage(charArray[charIndex].name)
        charDetails(charArray[charIndex].fname)
        getInitgame(charArray[charIndex].gameIndex)
        getSimilargames(charArray[charIndex].genreIndex)    
    })
$("#oscar")
    .on("click", function (){
        $("#list-characters").hide("slow")
        $("#back").show(200)
        var charIndex = charArray.findIndex(x => x.name ==="Oscar")
        changeImage(charArray[charIndex].name)
        charDetails(charArray[charIndex].fname)
        getInitgame(charArray[charIndex].gameIndex)
        getSimilargames(charArray[charIndex].genreIndex)    
    })
$("#meredith")
.on("click", function (){
    $("#list-characters").hide("slow")
    $("#back").show(200)
    var charIndex = charArray.findIndex(x => x.name ==="Meredith")
    changeImage(charArray[charIndex].name)
    charDetails(charArray[charIndex].fname)
    getInitgame(charArray[charIndex].gameIndex)
    getSimilargames(charArray[charIndex].genreIndex) 
})

