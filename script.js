const head = document.querySelector("header");
const sec = document.querySelector("section");
const requestURL = "https://davidovtch.github.io/Visit-the-Alps/eletronics.json";
const request = new Request(requestURL,{method: "GET"});

async function jayson() {
    const response = await fetch(request);
    const result = await response.json();
    let x = 0;

    function page(hg) {
        sec.innerHTML = `<div style="display:flex;justify-content:center;gap:2em">
    <div>
    <h2>Notebook</h2><ul>
    <li>Marca: ${result["Notebook"][hg]["Brand"]}</li>
    <li>Modelo: ${result["Notebook"][hg]["Model"]}</li>
    <li>Valor: R$${result["Notebook"][hg]["Value"]}</li></ul>
    </div>
    <div>
    <h2>Celulares</h2><ul>
    <li>Marca: ${result["Cellphone"][hg]["Brand"]}</li>
    <li>Modelo: ${result["Cellphone"][hg]["Model"]}</li>
    <li>Valor: R$${result["Cellphone"][hg]["Value"]}</li></ul>
    </div>
    <div>
    <h2>Acessorios</h2><ul>
    <li>Marca: ${result["Accessories"][hg]["Brand"]}</li>
    <li>Modelo: ${result["Accessories"][hg]["Model"]}</li>
    <li>Valor: R$${result["Accessories"][hg]["Value"]}</li></ul>
    </div>
    </div>`
}
    page(x);
    setInterval(()=>{
        x>=4 ? x=0 : x++;
        page(x);
    },5000)
}

head.innerHTML = `<h1>Irineu Store</h1>
    <p>Irineu Eletronics's</p>`
jayson();