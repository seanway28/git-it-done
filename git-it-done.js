var imgEl = document.querySelector("#test");


// //AJAX is a method call in the Jquery library, we need Jquery to use this!
// $.ajax({
//     url: "https://pokeapi.co/api/v2/pokemon/jigglypuff",
//     method: "GET"
// }).then(responseObj => {
//     console.log(responseObj)
//     imgEl.setAttribute("src", responseObj.sprites.front_default)
// })

// imgEl.setAttribute("src")
// console.log(responseObj)

//Regular JS, no need to install JQUERY:
// fetch("https://pokeapi.co/api/v2/pokemon/jigglypuff")
//     .then(networkResponse => networkResponse.json())
//     .then(dataAsJson => {
//         imgEl.setAttribute("src", dataAsJson.sprites.front_default)
//     })


fetch("https://api.openweathermap.org/data/2.5/weather?q=houston&appid=16ec7c03d28e9e8237c4b323c139ad8d&units=imperial")
    .then(networkResponse => networkResponse.json())
    .then(dataAsJson => {
        // imgEl.setAttribute("src", dataAsJson.sprites.front_default)
        console.log(dataAsJson)
    })