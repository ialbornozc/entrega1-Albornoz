function singinUp(){
    let name=document.getElementById("nombre").value;
    let email=document.getElementById("correo").value;
    let fecha=document.getElementById("nacimiento").value;
    let contraseña=document.getElementById("clave").value;
if(name==""){
    alert("EL nombre es obligatorio")
   document.getElementById("name").focus();
  
   }
else{
    if(email==""){
 alert("El email es obligatorio")
   document.getElementById("email").focus();
    }
}
    if(fecha==""){
        alert("La fecha es obligatoria")
   document.getElementById("fecha").focus();
    }
    else{
        if(contraseña==""){
    alert("La contraseña es obligatoria")
   document.getElementById("contraseña").focus();
        }
        console.log(name + " " + email + " " + fecha + " " + contraseña);
     } 
 }
