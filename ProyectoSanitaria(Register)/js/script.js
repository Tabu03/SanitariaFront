let inputName = document.getElementById("inputName")
let inputLastNames = document.getElementById("inputLastNames")
let inputEmail = document.getElementById("inputEmail")
let inputCenter = document.getElementById("inputCenter")
let inputCourse = document.getElementById("inputCourse")
let inputPassword = document.getElementById("inputPassword")
let inputRepeatPassword = document.getElementById("inputRepeatPassword")
let btnsub = document.getElementById("btnsub")


const processForm = (event) =>{
    event.preventDefault();
    let newTecnico = {
        nombre:inputName.value,
        apellidos:inputLastNames.value,
        email:inputEmail.value,
        password:inputPassword.value,
        curso:inputCourse.value,
        centro:inputCenter.value,
    }

    fetch("http://localhost:3000/v1/tecnicos/register", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newTecnico)
}) //  Aqui acaba el fetch
    .then(response => response.json())
    .then(response => {
        console.log("LA INSERCIÓN UTILIZANDO POST SE HA REALIZADO CORRECTAMENTE")
        console.log(response)
        console.log("---------------------------------------------------------")
    })
    .catch(error => console.log(error));
}



btnsub.addEventListener("click", processForm)