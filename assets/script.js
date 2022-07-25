
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
        name: "Ryan",
        gameIndex : "stardew-valley",
        genreIndex : "rpg,simulation"
    },
    {
        name: "Kelly",
        gameIndex : "stray-2",
        genreIndex : "simulation,indie"
    },
    {
        name: "Stanley",
        gameIndex : "untitled-goose-game",
        genreIndex : "puzzle,family"
    },
    {
        name: "Phyllis",
        gameIndex : "the-sims-4",
        genreIndex : "simulation,casual"
    },
    {
        name: "Oscar",
        gameIndex : "stardew-valley",
        genreIndex : "rpg,simulation"
    },
    {
        name: "Meredith",
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

function changeImage(text) 
{
  document.images["charSelectImg"].src = "./assets/img/"+text+"-lg.jpg";
}

function changeImageBack() 
{
  document.images["charSelectImg"].src = "";
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
        document.images["charSelectImg"].src = "./assets/img/"+charArray[randNum].name+"-lg.jpg";
    })

$("#michael")
    .on("click", function (){
        $("#list-characters").hide("slow")
        $("#back").show(200)
        var funcVal = "michael"
        changeImage(funcVal)
    })
$("#jan")
.on("click", function (){
    $("#list-characters").hide("slow")
    $("#back").show(200)
    var funcVal = "jan"
    changeImage(funcVal)
})
$("#dwight")
    .on("click", function (){
        $("#list-characters").hide("slow")
        $("#back").show(200)
        var funcVal = "dwight"
        changeImage(funcVal)
    })

$("#angela")
.on("click", function (){
    $("#list-characters").hide("slow")
    $("#back").show(200)
    var funcVal = "angela"
    changeImage(funcVal)
})
$("#jim")
    .on("click", function (){
        $("#list-characters").hide("slow")
        $("#back").show(200)
        var funcVal = "jim"
        changeImage(funcVal)
    })
$("#pam")
.on("click", function (){
    $("#list-characters").hide("slow")
    $("#back").show(200)
    var funcVal = "pam"
    changeImage(funcVal)
})
$("#ryan")
    .on("click", function (){
        $("#list-characters").hide("slow")
        $("#back").show(200)
        var funcVal = "ryan"
        changeImage(funcVal)
    })
$("#kelly")
.on("click", function (){
    $("#list-characters").hide("slow")
    $("#back").show(200)
    var funcVal = "kelly"
    changeImage(funcVal)
})
$("#stanley")
    .on("click", function (){
        $("#list-characters").hide("slow")
        $("#back").show(200)
        var funcVal = "stanley"
        changeImage(funcVal)
    })
$("#phyllis")
.on("click", function (){
    $("#list-characters").hide("slow")
    $("#back").show(200)
    var funcVal = "phyllis"
    changeImage(funcVal)
})
$("#oscar")
    .on("click", function (){
        $("#list-characters").hide("slow")
        $("#back").show(200)
        var funcVal = "oscar"
        changeImage(funcVal)
    })
$("#meredith")
.on("click", function (){
    $("#list-characters").hide("slow")
    $("#back").show(200)
    var funcVal = "meredith"
    changeImage(funcVal)
})

