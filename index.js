let tarjetasDestapada = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let movimiento = 0;
let aciertos = 0;
//apuntando a HTML
let mostrarMovimiento = document.getElementById("movimiemtos");
let mostrarAciertos = document.getElementById("aciertos");

//generacion de numeros aleatorios
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];

numeros = numeros.sort(() => {return Math.random()-0.5})
console.log(numeros)

//funcion principal

const destapar = (id) => {
    tarjetasDestapada++
    console.log(tarjetasDestapada)

    if(tarjetasDestapada == 1){
        tarjeta1 = document.getElementById(id)
        primerResultado = numeros[id];
        tarjeta1.innerHTML = primerResultado

        //bloquear primer boton para que el contador no siga aumentado
        tarjeta1.disabled = true;

    }else if(tarjetasDestapada == 2){
        tarjeta2 = document.getElementById(id)
        segundoResultado = numeros[id];
        tarjeta2.innerHTML = segundoResultado

         //bloquear segundo boton para que el contador no siga aumentado
         tarjeta2.disabled = true;
         movimiento++
         mostrarMovimiento.innerHTML = `Movimientos: ${movimiento}`

         if(primerResultado == segundoResultado){
            tarjetasDestapada = 0;
            aciertos++
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`
         }else{
            setTimeout(()=>{
                tarjeta1.innerHTML = " ";
                tarjeta2.innerHTML = " ";
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetasDestapada = 0;
            }, 700)
         }
         if(aciertos == 8){
            alert(`ganaste con un total de ${movimiento} movimiento`)
         }
    }
}