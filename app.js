const container = document.querySelector("#container")


fetch('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.forEach(data => {
            container.innerHTML += `
            <div id="data">
            <p>${data.name}</p>
            <img src=${data.image_link} >
            <p id="desc">${data.description}</p>
            <button onclick='displayInfo(event)'>read more...</button>
            </div>
            `
        })

    });

    function displayInfo (event) {
        const desc = event.target.parentElement.children[2]
       desc.style.display = 'block'
    }
   // var lipstick = data.lipstick
      //  console.log(lipstick)
