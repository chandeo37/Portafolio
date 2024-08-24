function redireccionHtml(){
    location.href = 'https://chandeo37.github.io/entregaDigimon/listadigimon.html'
}

function redireccionCss(){
    location.href = 'https://chandeo37.github.io/chatFlex/'
}
function redireccionJs(){
    location.href = 'https://chandeo37.github.io/pcFinal5/'
}


const formulario = document.querySelector("#frmDatos");



formulario.addEventListener("submit", validaFormulario)

function validaFormulario(e){
e.preventDefault();
  
  
  
  
  

}
function guardarDatos(){
    
   let nombre2 = document.getElementById('nombre').value
  let email1 = document.getElementById('email').value
  let mensaje1 = document.getElementById('mensaje').value

  if (nombre2 ===''){
    
    Swal.fire("Ingrese un nombre por favor!");
    return false
  }
  const emailRegex = /\S+@\S+\.\S+/;
  if(email1 === ''){
     
      Swal.fire("Ingrese un correo por favor!");
      return false;
  } else if(!emailRegex.test(email1)) {
      
      Swal.fire("Ingrese un nombre por favor!");
      return false;
  }
  if(mensaje1 === ''){
    Swal.fire("Escriba un mensaje por favor!");
    return false;
  }
  
  const respuestaNombre = document.getElementById("resumenNombre")
  respuestaNombre.textContent = `Nombre: ${nombre2}`
  const respuestaEmail =document.getElementById("resumenCorreo")
  respuestaEmail.textContent = `Email: ${email1}`


  const respuestaMensaje = document.getElementById("resumenMensaje")
  respuestaMensaje.textContent = `Mensaje: ${mensaje1}`
  
    
  document.getElementById("frmDatos").reset()
  Swal.fire("El mensaje se envio exitosamente");
  return true
}




