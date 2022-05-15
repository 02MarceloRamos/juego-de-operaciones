
// MODO FACIL

//suma
function juego1(){
    var texto;
    var intentos = 0;
    var acierto = 0; 
    var res;
    var resp;
   
        while(intentos<5){
            var ale1 = Math.floor(Math.random()*30)+1;
            var ale = Math.floor(Math.random()*50)+1;
            var entrada = prompt(`la suma de ${ale1}+${ale} es: `);
            intentos++;
            if(entrada==null){
              return;
            }
            res= ale1 + ale;
            if (entrada == res){
                alert("FELICIDADES LOGRASTE EL RESULTADO");
             
                console.log("El número era: " + res);
                texto="LO LOGRASTE :)";
                acierto++;
                console.log(acierto);
            }
            else
            {  
                texto="PERDISTE";
            }
            resp="LLEVAS: "+acierto.toString()+" DE 5 ACIERTOS";  
        }
        document.getElementById("resp1").innerHTML=texto;
        document.getElementById("aleatorio").innerHTML=res;
        document.getElementById("resp2").innerHTML=resp;
    }


//resta
    function juego2(){
        var texto;
        var intentos = 0;
        var acierto = 0; 
        var res;
        var resp;
       
            while(intentos<5){
                var ale1 = Math.floor(Math.random()*(100-50))+50;
                var ale = Math.floor(Math.random()*50)+1;
                var entrada = prompt(`la resta de ${ale1}-${ale} es: `);
                intentos++;
                if(entrada==null){
                  return;
                }
                res= ale1 - ale;
            if (entrada == res){
                alert("FELICIDADES LOGRASTE EL RESULTADO");
             
                console.log("El número era: " + res);
                texto="LO LOGRASTE :)";
                acierto++;
                console.log(acierto);
            }
            else
            {  
                texto="PERDISTE";
            }
            resp="LLEVAS: "+acierto.toString()+" DE 5 ACIERTOS";  
        }
            document.getElementById("resp1").innerHTML=texto;
            document.getElementById("aleatorio").innerHTML=res;
            document.getElementById("resp2").innerHTML=resp;
        }
        
        
 
 // MODO INTERMEDIO

//suma
function juego5(){
    var texto;
    var intentos = 0;
    var acierto = 0; 
    var res;
    var resp;
   
        while(intentos<6){
            var ale1 = Math.floor(Math.random()*30)+1;
            var ale = Math.floor(Math.random()*50)+1;
            var entrada = prompt(`la suma de ${ale1}+${ale} es: `);
            intentos++;
            if(entrada==null){
              return;
            }
            res= ale1 + ale;
            if (entrada == res){
                alert("FELICIDADES LOGRASTE EL RESULTADO");
             
                console.log("El número era: " + res);
                texto="LO LOGRASTE :)";
                acierto++;
                console.log(acierto);
            }
            else
            {  
                texto="PERDISTE";
            }
            resp="LLEVAS: "+acierto.toString()+" DE 6 ACIERTOS";  
        }
        document.getElementById("resp1").innerHTML=texto;
        document.getElementById("aleatorio").innerHTML=res;
        document.getElementById("resp2").innerHTML=resp;
    }

//resta
    function juego6(){
        var texto;
        var intentos = 0;
        var acierto = 0; 
        var res;
        var resp;
       
            while(intentos<6){
                var ale1 = Math.floor(Math.random()*(100-50))+50;
                var ale = Math.floor(Math.random()*50)+1;
                var entrada = prompt(`la resta de ${ale1}-${ale} es: `);
                intentos++;
                if(entrada==null){
                  return;
                }
                res= ale1 - ale;
            if (entrada == res){
                alert("FELICIDADES LOGRASTE EL RESULTADO");
             
                console.log("El número era: " + res);
                texto="LO LOGRASTE :)";
                acierto++;
                console.log(acierto);
            }
            else
            {  
                texto="PERDISTE";
            }
            resp="LLEVAS: "+acierto.toString()+" DE 6 ACIERTOS";  
        }
            document.getElementById("resp1").innerHTML=texto;
            document.getElementById("aleatorio").innerHTML=res;
            document.getElementById("resp2").innerHTML=resp;
        }

//MULTIPLICACION
function juego7(){
    var texto;
    var intentos = 0;
    var acierto = 0; 
    var res;
    var resp;
   
        while(intentos<3){
            var ale1 = Math.floor(Math.random()*(100-50))+50;
            var ale = Math.floor(Math.random()*50)+1;
            var entrada = prompt(`la multiplicacion de ${ale1}*${ale} es: `);
            intentos++;
            if(entrada==null){
              return;
            }
            res= ale1 * ale;
            if (entrada == res){
                alert("FELICIDADES LOGRASTE EL RESULTADO");
             
                console.log("El número era: " + res);
                texto="LO LOGRASTE :)";
                acierto++;
                console.log(acierto);
            }
            else
            {  
                texto="PERDISTE";
            }
            resp="LLEVAS: "+acierto.toString()+" DE 3 ACIERTOS";  
        }
        document.getElementById("resp1").innerHTML=texto;
        document.getElementById("aleatorio").innerHTML=res;
        document.getElementById("resp2").innerHTML=resp;
    }
    
    
    //DIVISION
    function juego8(){
        var texto;
        var intentos = 0;
        var acierto = 0; 
        var res;
        var resp;
       
            while(intentos<3){
                var ale1 = Math.floor(Math.random()*(100-50))+50;
                var ale = Math.floor(Math.random()*50)+1;
                var entrada = prompt(`la division de ${ale1}/${ale} es: `);
                intentos++;
                if(entrada==null){
                  return;
                }
                res= ale1 / ale;
            if (entrada == res){
                alert("FELICIDADES LOGRASTE EL RESULTADO");
             
                console.log("El número era: " + res);
                texto="LO LOGRASTE :)";
                acierto++;
                console.log(acierto);
            }
            else
            {  
                texto="PERDISTE";
            }
            resp="LLEVAS: "+acierto.toString()+" DE 3 ACIERTOS";  
        }
            document.getElementById("resp1").innerHTML=texto;
            document.getElementById("aleatorio").innerHTML=res;
            document.getElementById("resp2").innerHTML=resp;
        }       

 
 
 // MODO DIFICIL


//MULTIPLICACION
function juego11(){
    var texto;
    var intentos = 0;
    var acierto = 0; 
    var res;
    var resp;
   
        while(intentos<2){
            var ale1 = Math.floor(Math.random()*(100-50))+50;
            var ale = Math.floor(Math.random()*50)+1;
            var entrada = prompt(`la multiplicacion de ${ale1}*${ale} es: `);
            intentos++;
            if(entrada==null){
              return;
            }
            res= ale1 * ale;
            if (entrada == res){
                alert("FELICIDADES LOGRASTE EL RESULTADO");
             
                console.log("El número era: " + res);
                texto="LO LOGRASTE :)";
                acierto++;
                console.log(acierto);
            }
            else
            {  
                texto="PERDISTE";
            }
            resp="LLEVAS: "+acierto.toString()+" DE 2 ACIERTOS";  
        }
        document.getElementById("resp1").innerHTML=texto;
        document.getElementById("aleatorio").innerHTML=res;
        document.getElementById("resp2").innerHTML=resp;
    }
    
    
    //DIVISION
    function juego12(){
        var texto;
        var intentos = 0;
        var acierto = 0; 
        var res;
        var resp;
       
            while(intentos<2){
                var ale1 = Math.floor(Math.random()*(100-50))+50;
                var ale = Math.floor(Math.random()*50)+1;
                var entrada = prompt(`la division de ${ale1}/${ale} es: `);
                intentos++;
                if(entrada==null){
                  return;
                }
                res= ale1 / ale;
            if (entrada == res){
                alert("FELICIDADES LOGRASTE EL RESULTADO");
             
                console.log("El número era: " + res);
                texto="LO LOGRASTE :)";
                acierto++;
                console.log(acierto);
            }
            else
            {  
                texto="PERDISTE";
            }
            resp="LLEVAS: "+acierto.toString()+" DE 2 ACIERTOS";  
        }
            document.getElementById("resp1").innerHTML=texto;
            document.getElementById("aleatorio").innerHTML=res;
            document.getElementById("resp2").innerHTML=resp;
        }


 //CRONÓMETRO       
     window.onload = updateClock;
var totalTime = 30;
function updateClock() {
    document.getElementById("countdown").innerHTML = totalTime;
    if(totalTime==0){
        console.log("Final");
    }else{
        totalTime-=1;
        setTimeout("updateClock()",1000);
    }
}   
        
//SALTO
        setTimeout(function(){
        location.href="perdiste.html";
        }, 1000*30);
    
