(function(){
    window.onload = function(){

        let colorear = document.getElementById("btn-colorear");
        
        colorear.onclick = function(){

            // alert('botón colorear')

            let colorAzul = document.getElementsByClassName("azul");

            alert(colorAzul.length);
            
            for(let i=colorAzul.length-1 ;i >= 0;i--){
                colorAzul.item(i).className = "rojo";
            }

            let colorRojo = document.getElementsByClassName("rojo");

            alert(colorRojo.length);
            
            for(let i=colorRojo.length-1 ;i >= 0;i--){
                colorRojo.item(i).className = "azul";
            }

            
            
        }

    }

})();