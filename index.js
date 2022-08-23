function creacionDeUsuario(){

    pin = 0
    contraseña= " "
    a=false
    b=false
    
    do {

     pin = parseInt(prompt("Genere su pin de 4 números"))
    let pin2 = parseInt(prompt("Repita su pin"))

    if (pin==pin2) {

        a=true

    }else{
        
        alert("Los valores no coinciden. Intente nuevamente")
        
    }
        
    } while (a!=true);

    do {

         contraseña = prompt("Genere su contraseña de 3 números")
        let contraseña2 = prompt("Repita su contraseña")
    
        if (contraseña==contraseña2) {
    
            b=true
    
        }else{
            
            alert("Los valores no coinciden. Intente nuevamente")
            
        }
            
        } while (b!=true);

        ingresoYVerificacion(pin, contraseña)

}




function ingresoYVerificacion(valor1, valor2){

    let pin = valor1
    let password = valor2
    let i = 0
    let j = 0
    let k = 0

    alert("BIENVENIDO AL CODER-CAJERO" + "\n"  + "\n" + "¡PIDA SU PRESTAMO PESONAL!")

    do {
        
        pinUser = parseInt(prompt("Ingrese su Pin"))

        if(pinUser != pin){
    
            i++
    
        }else{
            do {

                passwordUser = prompt("Ingrese su clave de 3 digitos")
    
            if(passwordUser != password){
    
                j++
    
            }else{
                alert("¡Bienvenido!" + "\n" + "A continuacion ingrese el monto que desea solicitar. ")
                montoDePrestamo = parseInt(prompt("Ingrese el monto a solicitar: "))
                cantidadDeCuotas = parseInt(prompt("Ingrese la cantidad de cuotas que desea: "))
                k++
                break
                
            }
            } while (j!=3);
        }
        
    } while (i!=3 && j!=3 && k!=1);

    
    validacion1(i, j)
    calculoDeInteres(montoDePrestamo, cantidadDeCuotas)
    validacionFinal(i, j)

}



function validacion1(valor1, valor2){

    if(valor1==3){
        alert("Operacion finalizada, Error al ingresar su Pin. CUENTA BLOQUEADA")
    }
    
    if(valor2==3){
        alert("Operacion finalizada, Error al ingresar su Contraseña. CUENTA BLOQUEADA")
    }
    


}

function calculoDeInteres(monto, cantidadDeCuotas){

    let interes= monto*0.69
    let montoFinal = monto+interes
    let cuotas = montoFinal / cantidadDeCuotas
    alert("El monto a abonar por cuota es de: " + "$" + Math.round(cuotas) + "\n" + "\n" + "El interes aplicado es del 69% " )
    

}

function validacionFinal(valor1, valor2){

    let retirodeDinero = prompt("¿Desea pedir el prestamo? si/no")
    if(retirodeDinero == "si"){

        alert("Dinero depositado en su cuenta")

    }

    if(valor1!=3 && valor2!=3){
    
        alert("Operacion Finalizada.")
    
    }

}


creacionDeUsuario()


