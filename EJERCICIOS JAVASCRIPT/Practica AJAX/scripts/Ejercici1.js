const BASE_URL = 'https://reqres.in/api/users/';

//Código principal dentro del evento load
// para asegurar la carga de los componentes
window.addEventListener('load', (ev) => {
  let numsecs = document.getElementById('numsecs');
  let user = document.getElementById('user');
  let boton = document.querySelector('button');

  boton.addEventListener('click', (ev) => {
    ev.preventDefault();
    clearFields();
    procesarFetch(numsecs.value, user.value);
  });
});

function clearFields() {
  document.querySelectorAll('span').forEach((element) => {
    element.innerHTML = '';
    console.log(element);
  });
}

function procesarFetch(numsecs, user) {
const BASE_URL = 'https://reqres.in/api/users/';

let resposta;

const nouUsuari = {
      name: "Ferran",
      userId: "6"
};
const opcions = {
  method: 'POST',
  body: JSON.stringify(nouUsuari),
  headers: { "Content-type": "application/json; charset=UTF-8" }
 };

  setTimeout(async () => {
    try{
      //GET
      resposta = await fetch(BASE_URL + user);
      const client = await Response.json();

      let id = document.getElementById('id');
      id.innerHTML = client.data.id;

      let email = document.getElementById('email');
      email.innerHTML = client.data.email;

      //POST
      const post = await fetch(POST_URL, opcions);
      const usuari = await post.json();

      let nom = document.getElementById('name');
      nom.innerHTML = usuari.json.name;
    }
      catch (error){
        console.log('ERROR: '+ error.message);

      }
      finally{
        let estat = document.getElementById('status');
        estat.innerHTML = resposta.estat;
      }

    }, numsecs * 1000);
  }
