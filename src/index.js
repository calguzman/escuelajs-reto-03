var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var API = 'https://rickandmortyapi.com/api/character/';
var xhttp = new XMLHttpRequest();

const fetchData = (url_api) =>{
  return new Promise((resolve,reject)=>{
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET',url_api,true); 
    xhttp.onreadystatechange = (()=> {
      if(xhttp.readyState===4){
          if(xhttp.status===200){
            resolve(JSON.parse(xhttp.responseText));
          }
          else{
            const error = new Error(`Error ${url_api}`);
            reject(error);
          }
      }
    });
    xhttp.send();
  });
}
// Calling The Async Function
const getDataApi = async (api_url) => {
  try{
    console.log("Primer LLamado");
    const personajes = await fetchData(api_url);
    console.log("Segundo LLamado");
    const primerPersonaje = await fetchData(`${API}${personajes.results[0].id}`);
    console.log("Tercer  LLamado");
    const origin = await fetchData(primerPersonaje.origin.url);
    console.log(personajes.info.count);
    console.log(primerPersonaje.name);
    console.log(origin.dimension);
  }
  catch(err){
    console.error(err);
  }
}
getDataApi(API);
