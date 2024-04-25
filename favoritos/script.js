function splitString(stringToSplit, separator) {
    const arrayOfStrings = stringToSplit.split(separator);
  
    
    console.log(arrayOfStrings)



    const favoritosLista = document.getElementById('favoritos-lista');
    arrayOfStrings.forEach(municipio => {

        

        const row = document.createElement('li');


        
        row.innerHTML = `
              <li>${municipio}</li>
        `;
        favoritosLista.appendChild(row);
























    


  })
}

  let favoritos = []

favoritos.push(localStorage.getItem("favoritos"))

const comma = ",";

splitString(localStorage.getItem("favoritos"), comma);

