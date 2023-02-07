const hora = document.getElementById("hora-cronometro")
const minuto = document.getElementById("minuto-cronometro")
const segundo = document.getElementById("segundo-cronometro")

let ativeInterval;



function start(){

    //Reseta o setInterval "ativeInterval" 
    if(localStorage.getItem("ativeInterval") == 1){
        clearInterval(ativeInterval)
        localStorage.setItem("ativeInterval", 0)
    
    }
    
    //segundos
    segundo.innerHTML = document.getElementById("inputSeg").value
    if(segundo.innerHTML == ""){
        segundo.innerHTML = 0
    }

    //minuto
    minuto.innerHTML = document.getElementById("inputMin").value
    if(minuto.innerHTML == ""){
        minuto.innerHTML = 0
    }

    //hora
    hora.innerHTML = document.getElementById("inputHora").value
    if(hora.innerHTML == ""){
        hora.innerHTML = 0
    }

    //limita o cronometro a ter 24 horas de duração
    if(hora.innerHTML >= 24){
        hora.innerHTML = 23
        minuto.innerHTML = 59
        segundo.innerHTML = 59
    }
    if(segundo.innerHTML > 59 && minuto.innerHTML > 59){
        minuto.innerHTML = 59
        segundo.innerHTML = 59
    }
    if(segundo.innerHTML > 59){
        segundo.innerHTML = 59
    }
    
    ativeInterval = setInterval(
        function startCronometro(){
            segundo.innerHTML--
            segundo.innerHTML <= 0 ? segundo.innerHTML = 0 : segundo.innerHTML;
            
            if(segundo.innerHTML == 0 && minuto.innerHTML == 0 && hora.innerHTML == 0){
                location.reload()
            }
            
            if(segundo.innerHTML == 0){            
                if(minuto.innerHTML != 0){
                    minuto.innerHTML--
                    segundo.innerHTML = 59
                }
                
                if(minuto.innerHTML == 0){
                    if(hora.innerHTML > 0){
                        hora.innerHTML--
                        minuto.innerHTML = 59
                    }
                }

                if(minuto.innerHTML == 59){
                    segundo.innerHTML = 59
                } 
            }
        }
    , 1000)

   localStorage.setItem("ativeInterval", 1)
}


function restart(){
    location.reload()
}
