
const container = document.querySelector("#container")

const loadData = async () => {

    try {
        const response = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick')
        const data = await response.json();
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
    } catch (error) {
        console.log(error)
    }


}


function displayInfo(event) {
    const desc = event.target.parentElement.children[2]
    desc.style.display = 'block'
}

loadData()





