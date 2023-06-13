//Obtienendo los elementos de HTML
const numero = document.getElementById("numero")
const nombre = document.getElementById("nombre")
const tipo = document.getElementById("tipo")
const region = document.getElementById("region")
const btnom = document.getElementById("btnom")
const pokereg = document.getElementById("pokereg")

const pokeList = JSON.parse(localStorage.getItem("pokereg")) || []

btnom.onclick = ()=>{
    let numPoke = numero.value
    let nombrePoke = nombre.value
    let tipoPoke = tipo.value
    let regionPoke = region.value
    let pokePoke = {
        numero: numPoke,
        nombre: nombrePoke,
        tipo: tipoPoke,
        region: regionPoke,       
    }

    pokeList.push(pokePoke)

    localStorage.setItem("pokereg", JSON.stringify(pokeList))
    
    mostrarPoke()
}

function mostrarPoke(){
    pokereg.innerHTML = ""

    pokeList.forEach((pokePoke, indice)=>{
        
        let li = document.createElement('li')

        let p = document.createElement('p')
        p.innerText = pokePoke.numero

        let h3 = document.createElement('h3')
        h3.innerText = pokePoke.nombre
        let h4 = document.createElement('h4')
        h4.innerText = pokePoke.tipo
        let h5 = document.createElement('h5')
        h5.innerText = pokePoke.region

        let deleteBtn = document.createElement("button")
        deleteBtn.innerText = "Eliminar"

        deleteBtn.onclick = ()=>{
            pokeList.splice(indice,1)
            localStorage.setItem("pokereg", JSON.stringify(pokeList))
            mostrarPoke()
        }

        li.append(p)
        li.append(h3)
        li.append(h4)
        li.append(h5)
        li.appendChild(deleteBtn)

        pokereg.appendChild(li)
    })
}

mostrarPoke()