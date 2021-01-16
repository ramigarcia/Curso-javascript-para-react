//Multi-line sin Template Literals
const saludo = 'Hola,\n mi nombre es Ramiro'
//Un string se inicializa con comillas simples o dobles


//Multi-line con Template Literals
const saludo = `Hola, 
Mi nombre es Ramiro`;
//Con los Template Literals para hacer un salto de linea solo tenemos que dar ENTER y listo
//Backtick `` != Comillas


//Caracteristicas que nos ofrecen los Template Literals

//Expresiones sin Template Literals
const nombre = 'Ramiro'

const saludo = 'Hola,\n' + 'mi nombre es ' + nombre


//Expresiones con Template Literals
const nombre = 'Ramiro' //String

const saludo = `Hola,
Mi nombre es ${nombre}
`;
//Template Literal 
//${expresion}

//HTML Template
//Creamos una funcion donde nos llega un parametro (user). Lo cual despues se convierte en un objeto
function userTemplate(user){
  return `
    <article class="user">
      <img src="${user.avatar}" alt="${user.username}">
      <p>${user.username}</p>
    </article>
  `
}

//Tagged Template, "es como etiquetar un Template"
//Funcion llamada (userTemplate), recibe 2 parametros (strings, value). Devuelve un Template Literal
function userTemplate(strings, value){
  return `<p>${strings[0]}<strong>${value}</strong></p>`
}

userTemplate`username: ${'Ramiro'}`
