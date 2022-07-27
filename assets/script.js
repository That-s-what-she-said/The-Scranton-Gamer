
var charArray = [
    {
        name: "michael",
        fname: "Michael Scott",
        gameIndex : "tropico-5",
        genreIndex : "strategy,simulation,rpg",
        castID: "4495"
    },
    {
        name: "jan",
        fname: "Jan Levinson",
        gameIndex : "just-dance-2022",
        genreIndex : "casual,family,rpg",
        castID: "404"
    },
    {
        name: "dwight",
        fname: "Dwight Schrute",
        gameIndex : "stardew-valley",
        genreIndex : "rpg,simulation,indie",
        castID: "11678"
    },
    {
        name: "angela",
        fname: "Angela Martin",
        gameIndex : "stray-2",
        genreIndex : "simulation,indie,platformer",
        castID: "113867"
    },
    {
        name: "jim",
        fname: "Jim Halpert",
        gameIndex : "madden-nfl-22",
        genreIndex : "family,casual",
        castID: "17697"
    },
    {
        name: "pam",
        fname: "Pam Beesly",
        gameIndex : "fall-guys",
        genreIndex : "family,casual,indie",
        castID: "51856"
    },
    {
        name: "ryan",
        fname: "Ryan Howard",
        gameIndex : "halo-infinite",
        genreIndex : "action,shooter,adventure",
        castID: "107770"
    },
    {
        name: "kelly",
        fname: "Kelly Kapoor",
        gameIndex : "the-sims-4",
        genreIndex : "simulation,casual,indie",
        castID: "125167"
    },
    {
        name: "stanley",
        fname: "Stanley Hudson", 
        gameIndex : "untitled-goose-game",
        genreIndex : "puzzle,family",
        castID: "1230842"
    },
    {
        name: "phyllis",
        fname: "Phyllis Lapis",
        gameIndex : "the-sims-4",
        genreIndex : "puzzle,casual",
        castID: "169200"
    },
    {
        name: "oscar",
        fname: "Oscar Martinez",
        gameIndex : "boyfriend-dungeon",
        genreIndex : "indie,simulation",
        castID: "76094"
    },
    {
        name: "meredith",
        fname: "Meredith Palmer",
        gameIndex : "elden-ring",
        genreIndex : "action,rpg,adventure",
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
        $('#char-games').prepend("<li class='gImg'><p><img src='" + results.background_image + "' width='200px'/><br /><h2>"+results.name+"</h2></p></li>")
        
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
                $('#char-games').append("<li class='gImg'><p><img src='" + gamelist.results[i].background_image + "' width='200px'/><br /><h2>"+gamelist.results[i].name+"<h2/></p></li>")
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
        var charIndex = charArray.findIndex(x => x.name ==="michael")
        fillcharSection(charIndex)    
    })
$("#jan")
    .on("click", function (){
        animateSection()
        var charIndex = charArray.findIndex(x => x.name ==="jan")
        fillcharSection(charIndex)      
})
$("#dwight")
    .on("click", function (){
        animateSection()
        var charIndex = charArray.findIndex(x => x.name ==="dwight")
        fillcharSection(charIndex)
    })
$("#angela")
    .on("click", function (){
        animateSection()
        var charIndex = charArray.findIndex(x => x.name ==="angela")
        fillcharSection(charIndex)       
})
$("#jim")
    .on("click", function (){
        animateSection()
        var charIndex = charArray.findIndex(x => x.name ==="jim")
        fillcharSection(charIndex)     
    })
$("#pam")
    .on("click", function (){
        animateSection()
        var charIndex = charArray.findIndex(x => x.name ==="pam")
        fillcharSection(charIndex)     
})
$("#ryan")
    .on("click", function (){
        animateSection()
        var charIndex = charArray.findIndex(x => x.name ==="ryan")
        fillcharSection(charIndex)      
    })
$("#kelly")
    .on("click", function (){
        animateSection()
        var charIndex = charArray.findIndex(x => x.name ==="kelly")
        fillcharSection(charIndex)       
})
$("#stanley")
    .on("click", function (){
        animateSection()
        var charIndex = charArray.findIndex(x => x.name ==="stanley")
        fillcharSection(charIndex)       
    })
$("#phyllis")
    .on("click", function (){
        animateSection()
        var charIndex = charArray.findIndex(x => x.name ==="phyllis")
        fillcharSection(charIndex)  
    })
$("#oscar")
    .on("click", function (){
        animateSection()
        var charIndex = charArray.findIndex(x => x.name ==="oscar")
        fillcharSection(charIndex) 
    })
$("#meredith")
    .on("click", function (){
        animateSection()
        var charIndex = charArray.findIndex(x => x.name ==="meredith")
        fillcharSection(charIndex) 
})

var savedGames = []


$("#char-games").on("click", "li", function(){
    console.log($(this))

    $("#saved-videogames").show(200)
    $("#saved-list").append("<li class='column'><p><img src='"+$(this)[0].childNodes[0].childNodes[2].currentSrc+"' width='200'/><br />"+$(this).text()+"</p></li>")
    
    var gamesEntry = {
        imgsrc: $(this)[0].childNodes[0].childNodes[2].currentSrc,
        imgtext: $(this).text()
    }
    
    savedGames.push(gamesEntry)
    savedGames.sort((a, b) => {return b.imgtext-a.imgtext})

    storeGameslocal()
})

function renderGames(){
    $("#saved-list").empty()
    $("#saved-videogames").show(200)

    console.log(savedGames)
    for (var i=0; i < savedGames.length; i++){
        var sGame = savedGames[i]
        $("#saved-list").append("<li class='column'><p><img src='"+sGame.imgsrc+"' width='200'/><br />"+sGame.imgtext+"</p></li>")
    }
}

function initSavelist(){
    if(localStorage.getItem("storedGames") === null){
        localStorage.storedGames = "[]"
    }

    var storedGames = JSON.parse(localStorage.getItem("storedGames"))

    if (storedGames !== null){
        savedGames = storedGames
    }

    renderGames()
}

initSavelist()



function storeGameslocal(){
    localStorage.setItem("storedGames", JSON.stringify(savedGames))
}