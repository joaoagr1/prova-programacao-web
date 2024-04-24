window.addEventListener("load", (event) => {
    fetchEstados()
  });

function fetchEstados() {

    const apiUrl = `https://servicodados.ibge.gov.br/api/v1/localidades/estados`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const estadosLista = document.getElementById('estados-lista');
            console.log(estadosLista)
           // estadosLista.innerHTML = 'ok';
            data.forEach(estado => {

                const row = document.createElement('li');
                row.addEventListener('click', function () {
                                });
                row.innerHTML = `
                      <li>${estado.nome}</li>
                `;
                estadosLista.appendChild(row);
            });
        });
}