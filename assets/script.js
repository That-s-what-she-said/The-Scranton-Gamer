
var charArray = [
    {
        name: "Michael",
        fname: "Michael Scott",
        gameIndex : "office-management-101",
        genreIndex : "casual,action",
        castID: "4495"
    },
    {
        name: "Jan",
        fname: "Jan Levinson",
        gameIndex : "just-dance-2022",
        genreIndex : "rpg,action",
        castID: "404"
    },
    {
        name: "Dwight",
        fname: "Dwight Schrute",
        gameIndex : "stardew-valley",
        genreIndex : "rpg,action",
        castID: "11678"
    },
    {
        name: "Angela",
        fname: "Angela Martin",
        gameIndex : "stray-2",
        genreIndex : "simulation,indie",
        castID: "113867"
    },
    {
        name: "Jim",
        fname: "Jim Halpert",
        gameIndex : "rocket-league",
        genreIndex : "sports,family",
        castID: "17697"
    },
    {
        name: "Pam",
        fname: "Pam Beesly",
        gameIndex : "fall-guys",
        genreIndex : "family,casual",
        castID: "51856"
    },
    {
        name: "Ryan",
        fname: "Ryan Howard",
        gameIndex : "stardew-valley",
        genreIndex : "rpg,simulation",
        castID: "107770"
    },
    {
        name: "Kelly",
        fname: "Kelly Kapoor",
        gameIndex : "stray-2",
        genreIndex : "simulation,indie",
        castID: "125167"
    },
    {
        name: "Stanley",
        fname: "Stanley Hudson", 
        gameIndex : "untitled-goose-game",
        genreIndex : "puzzle,family",
        castID: "1230842"
    },
    {
        name: "Phyllis",
        fname: "Phyllis Lapis",
        gameIndex : "the-sims-4",
        genreIndex : "simulation,casual",
        castID: "169200"
    },
    {
        name: "Oscar",
        fname: "Oscar Martinez",
        gameIndex : "stardew-valley",
        genreIndex : "rpg,simulation",
        castID: "76094"
    },
    {
        name: "Meredith",
        fname: "Meredith Palmer",
        gameIndex : "stray-2",
        genreIndex : "simulation,indie",
        castID: "304282"
    },
]

function getInitgame(charIndex){
    // Pull First Game
    $.ajax({
        url:"https://api.rawg.io/api/games/" + charIndex + "?key=82f276f87ec44df988016fb8a6d23c76",
        method: "GET",
    }).then(function(results){
        console.log(results)

        $("<h2 id='current'>Currently Playing:</h2><br/>").insertBefore("#char-games")
        $('#char-games').prepend("<li><p><img src='" + results.background_image + "' width='150'/><br /><h2>"+results.name+"</h2></p></li>")
        
    })
}

function getSimilargames(genreIndex){
        // Pull 3 Similar Games 
        $.ajax({
            url:"https://rawg.io/api/games?page_size=3&genres=" + genreIndex + "&metacritic=80&key=82f276f87ec44df988016fb8a6d23c76",
            method: "GET",
        }).then(function(gamelist){
            console.log(gamelist.results)
    
            for (var i=0; i<3; i++){
                $('#char-games').append("<li><p><img src='" + gamelist.results[i].background_image + "' width='150'/><br /><h2>"+gamelist.results[i].name+"<h2/></p></li>")
            }    
        })
}

function getDetails(castID){
    $.ajax({
        url:"https://api.themoviedb.org/3/person/" + castID + "?api_key=cd2339f965f5a11b2ea2c94d76b2b76f&language=en-US",
        method: "GET",
    }).then(function(results){
        console.log(results)

        $("#char-details").append($("<h2></h2><br/>").text("Real Name: " + results.name))
        $("#char-details").append($("<p></p><br/>").text(results.biography))

    })
}

function changeImage(text) {
    $("#char-image").attr("src","./assets/img/"+text+"-lg.jpg")
}

function clearCharDiv(){
    $("#current").remove()
    $("#char-details").empty()
    $("#char-games").empty()
}

function changeImageBack() {
    $("#char-image").attr("src","")
}

function charFname(text){
    $("#char-details").append($("<h2></h2>").text(text))
    // $("#char-details").append($("<p></p>").text('"This is a line reserved for a quote."'))
}

function charRname(text){
    $("#char-details").append($("<h2></h2>").text(text))
}

$("#back")
    .on("click", function(){
        $("#back").hide("fast")
        $("#list-characters").show("slow")
        changeImageBack()
        clearCharDiv()
    })

$("#random-character")
    .on("click", function(){
        animateSection()
        clearCharDiv()
        changeImageBack()
        var randNum = Math.floor(Math.random()*charArray.length)
        changeImage(charArray[randNum].name)
        charFname(charArray[randNum].fname)
        getInitgame(charArray[randNum].gameIndex)
        getSimilargames(charArray[randNum].genreIndex)
        getDetails(charArray[randNum].castID)
    })

function fillcharSection(charIndex){
    changeImage(charArray[charIndex].name)
    charFname(charArray[charIndex].fname)
    getInitgame(charArray[charIndex].gameIndex)
    getSimilargames(charArray[charIndex].genreIndex)   
    getDetails(charArray[charIndex].castID)
}

function animateSection(){
    $("#list-characters").hide("slow")
    $("#back").show(200)
}

$("#michael")
    .on("click", function (){
        animateSection()
        var charIndex = charArray.findIndex(x => x.name ==="Michael")
        fillcharSection(charIndex)    
    })
$("#jan")
    .on("click", function (){
        animateSection()
        var charIndex = charArray.findIndex(x => x.name ==="Jan")
        fillcharSection(charIndex)      
})
$("#dwight")
    .on("click", function (){
        animateSection()
        var charIndex = charArray.findIndex(x => x.name ==="Dwight")
        fillcharSection(charIndex)
    })
$("#angela")
    .on("click", function (){
        animateSection()
        var charIndex = charArray.findIndex(x => x.name ==="Angela")
        fillcharSection(charIndex)       
})
$("#jim")
    .on("click", function (){
        animateSection()
        var charIndex = charArray.findIndex(x => x.name ==="Jim")
        fillcharSection(charIndex)     
    })
$("#pam")
    .on("click", function (){
        animateSection()
        var charIndex = charArray.findIndex(x => x.name ==="Pam")
        fillcharSection(charIndex)     
})
$("#ryan")
    .on("click", function (){
        animateSection()
        var charIndex = charArray.findIndex(x => x.name ==="Ryan")
        fillcharSection(charIndex)      
    })
$("#kelly")
    .on("click", function (){
        animateSection()
        var charIndex = charArray.findIndex(x => x.name ==="Kelly")
        fillcharSection(charIndex)       
})
$("#stanley")
    .on("click", function (){
        animateSection()
        var charIndex = charArray.findIndex(x => x.name ==="Stanley")
        fillcharSection(charIndex)       
    })
$("#phyllis")
    .on("click", function (){
        animateSection()
        var charIndex = charArray.findIndex(x => x.name ==="Phyllis")
        fillcharSection(charIndex)  
    })
$("#oscar")
    .on("click", function (){
        animateSection()
        var charIndex = charArray.findIndex(x => x.name ==="Oscar")
        fillcharSection(charIndex) 
    })
$("#meredith")
    .on("click", function (){
        animateSection()
        var charIndex = charArray.findIndex(x => x.name ==="Meredith")
        fillcharSection(charIndex) 
})

