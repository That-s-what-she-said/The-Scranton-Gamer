var savedGames = []

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
        // console.log(results)

        $('#char-games').prepend("<li ><p><img class='gameImg' src='" + results.background_image + "' width='200px'><br/><span>"+results.name+"</span></p></li>")
        
    })
}

function getSimilargames(genreIndex){
        // Pull 3 Similar Games 
        $.ajax({
            url:"https://rawg.io/api/games?page_size=3&genres=" + genreIndex + "&metacritic=80&key=82f276f87ec44df988016fb8a6d23c76",
            method: "GET",
        }).then(function(gamelist){
            // console.log(gamelist.results)
    
            for (var i=0; i<3; i++){
                $('#char-games').append("<li ><p><img class='gameImg' src='" + gamelist.results[i].background_image + "' width='200px'><br/><span>"+gamelist.results[i].name+"</span></p></li>")
            }    
        })
}

function getDetails(castID){
    $.ajax({
        url:"https://api.themoviedb.org/3/person/" + castID + "?api_key=cd2339f965f5a11b2ea2c94d76b2b76f&language=en-US",
        method: "GET",
    }).then(function(results){
        // console.log(results)

        $("#char-details").append($("<h2 class='is-size-4 has-text-white'></h2>").text("Real Name: " + results.name))
        $("#char-details").append($("<p class='box py-3 mr-5'><strong>" + results.biography + "</strong></p>"))

        $('#current').prepend(results.name + " Currently Plays:")

    })
}

function changeImage(text) {
    $("#char-image").attr("src","./assets/img/"+text+"-med.jpg")
}

function clearCharDiv(){
    $("#current").empty()
    $("#char-details").empty()
    $("#char-games").empty()
    $("#char-big-name").empty()
}

function changeImageBack() {
    $("#char-image").attr("src","")
}

function charFname(text){
    $("#char-big-name").append(text)
}

$("#back")
    .on("click", function(){
        $("#back").hide("fast")
        $("#char-games-section").hide("fast")
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
        fillcharSection(randNum)
    })

function fillcharSection(charIndex){
    $("#character-info").show("slow")
    $("#char-games-section").show("slow") 
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

$(".selImg")
    .mouseover(function(){
        $(this).css('border', '3px solid red')
        $("#charselName").text($(this).attr("alt"))
    })
    .mouseout(function(){
        $(this).css('border', '')
        $("#charselName").text("that's what she said")
    })
    .on("click", function (){
        animateSection()
        var charIndex = charArray.findIndex(x => x.name === $(this).attr("id"))
        fillcharSection(charIndex)    
    })

$("#char-games")
    .on("mouseover", "img", function(){
        $(this).css('border', '3px solid red')
    })
    .on("mouseout", "img", function(){
        $(this).css('border', '')
    })
    .on("click", "li", function(){
        // console.log($(this).text())
        // console.log(savedGames)

        $("#saved-videogames").show(200)

        var found = $.grep(savedGames, e => e.imgtext === $(this).text());
        if (found.length > 0) {
            $("#vgstorage-text").text("Game Already Stored");
        } else if (savedGames.length >= 5) {
            // console.log("Storage Full!")
            $("#vgstorage-text").text("[Currently Full!]")
        }   else {
            $("#saved-list").append("<li class='column'><p><img class='gameImg' src='"+$(this)[0].childNodes[0].childNodes[0].currentSrc+"' width='200'/><br /><span>"+$(this).text()+"<span></p></li>")
        
            var gamesEntry = {
                imgsrc: $(this)[0].childNodes[0].childNodes[0].currentSrc,        
                imgtext: $(this).text()
            }
            
            savedGames.push(gamesEntry)
            savedGames.sort((a, b) => {return b.imgtext-a.imgtext})
        
            storeGameslocal()

            $('html, body').animate({
                scrollTop: $("#saved-videogames").offset().top
              });
        }
    })

$("#saved-list")
    .on("mouseover", "img", function(){
        $(this).css({'border' : '3px solid red','cursor' : 'crosshair'})
    })
    .on("mouseout", "img", function(){
        $(this).css('border', '')
    })
    .on("click", "li", function(){
        // console.log($(this).text())
        // console.log(savedGames)

        var removeItem = $(this).text()
        savedGames = $.grep(savedGames, function(value) {
            return value.imgtext != removeItem;
        });
        // console.log(savedGames)

        $(this).closest('li').remove()
        $("#vgstorage-text").empty()

        storeGameslocal()

        if (savedGames.length < 1) {
            $("#saved-videogames").hide("fast")
        }


    })

function renderGames(){
    $("#saved-list").empty()
    $("#saved-videogames").show(200)

    // console.log(savedGames)
    if (savedGames.length < 1){
        $("#saved-videogames").hide()
    } else if (savedGames.length >= 5) {
        $("#vgstorage-text").append(" [Currently Full]")
        for (var i=0; i < savedGames.length; i++){
            var sGame = savedGames[i]
            $("#saved-list").append("<li class='column'><p><img src='"+sGame.imgsrc+"' width='200'/><br /><span>"+sGame.imgtext+"</span></p></li>")
        }
    } else {
        for (var i=0; i < savedGames.length; i++){
            var sGame = savedGames[i]
            $("#saved-list").append("<li class='column'><p><img src='"+sGame.imgsrc+"' width='200'/><br /><span>"+sGame.imgtext+"</span></p></li>")
        }
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

