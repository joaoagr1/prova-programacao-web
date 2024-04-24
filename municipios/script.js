function changePageTitle(title) {
    document.title = title
  }



function getSearchParams() {
    // Early return -> Caso location search, não faz nada.
    if (!location.search) {
      return
    }
  
    // URLSearchParams é uma classe que facilita a manipulação de query strings
    const urlSearchParams = new URLSearchParams(location.search)
  
    // Pegando o valor do parâmetro name
    const uf = urlSearchParams.get('uf')
  
    changePageTitle(`Municípios de ${uf}`)
    //getListaMunicipios(uf)

    localStorage.setItem("uf", `${uf}` );


  }


  function fetchMunicipios() {

    const ufUrl = localStorage.getItem("uf");

    

    const apiUrl = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufUrl}/municipios`;


    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const municipiosLista = document.getElementById('municipios-lista');
            console.log(municipiosLista)
           // estadosLista.innerHTML = 'ok';
            data.forEach(municipio => {

                const uf = municipio.sigla;
                

                const row = document.createElement('li');
                row.addEventListener('click', function () {


                    


                                });
                row.innerHTML = `
                      <li>${municipio.nome}</li> <button>⭐</button>
                `;
                municipiosLista.appendChild(row);
            });
        });
}






  
  document.addEventListener('DOMContentLoaded', function () {
    getSearchParams()
    fetchMunicipios()
  })