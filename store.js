'use strict';

let store = document.querySelector('.store')

async function makeRequest(){
    let response = await fetch('https://fakestoreapi.com/products');
    let contents = await response.json()
    console.log(contents)

    contents.forEach((contents, i => {
        let newDiv = document.createElement('div')
        newDiv.textContent = contents[i].title
        document.body.append(newDiv)
    }
}


makeRequest()
