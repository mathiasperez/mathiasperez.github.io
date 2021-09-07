(function(){
    window.onload = function(){

        // let colorear = document.getElementById("btn-colorear");
        
        // colorear.onclick = function(){

        //     // alert('botón colorear')

        //     let colorAzul = document.getElementsByClassName("azul");
        //     let colorRojo = document.getElementsByClassName("rojo");

        //     let azulNumero = colorAzul.length;
        //     let rojoNumero = colorRojo.length;

        //     for(let i=azulNumero-1; i >= 0; i-- ){
        //         for(let j=rojoNumero-1; j >= 0; i--){
        //             colorRojo.item(j).className = colorRojo.item(j).className.replace("rojo","azul");
        //         }
        //         colorAzul.item(i).className = colorAzul.item(i).className.replace("azul","rojo");
        //     }
            
        // }

        let extraer = document.getElementById("btn-extraer");

        extraer.onclick = function() {

            //Primero limpiar los campos
            document.getElementById("paterno").value = "";
            document.getElementById("materno").value = "";
            document.getElementById("nombres").value = "";
            document.getElementById("longitud").value = "";
            document.getElementById("edad").value = "";
            document.getElementById("mes").value = "";

            //Obtener datos de nombres, apellidos y fecha
            let apellidosNombres = document.getElementById("apellidosNombres").value;
            let fechaNacimiento = document.getElementById("fechaNacimiento").value;

            //Validar que los campos no estén vacíos
            if(apellidosNombres == "" || fechaNacimiento == ""){
                document.getElementById("apellidosNombres").focus();
            }else {

                let separados = apellidosNombres.split(' ');
                
                document.getElementById("paterno").value = separados[0];
                document.getElementById("materno").value = separados[1];

                //Evaluar si tiene uno o dos nombres
                for(let i = 2; i < separados.length; i++){
                    document.getElementById("nombres").value += separados[i] + " ";
                }

                //Llenar campo de longitud de apellido
                let paterno = document.getElementById("paterno").value.length
                let materno = document.getElementById("materno").value.length
                document.getElementById("longitud").value = paterno + materno;

                //Llenar campo de edad
                let fecha = new Date();
                let dia = fecha.getUTCDate();
                let mes = fecha.getUTCMonth() + 1;
                let anio = fecha.getUTCFullYear();
                
                let fechaSeparados = fechaNacimiento.split('-');
                
                let diaNacimiento = fechaSeparados[0];
                let mesNacimiento = fechaSeparados[1];
                let anioNacimiento = fechaSeparados[2];
                
                let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Setiembre','Octubre','Noviembre','Diciembre'];
                document.getElementById("mes").value = meses[mesNacimiento-1];

                //Cálculo para edad
                let edad = anio - anioNacimiento;
                if(mes < mesNacimiento){
                    edad--;
                } else if (mes == mesNacimiento){
                    if(dia < diaNacimiento){
                        edad--;
                    }
                }

                document.getElementById("edad").value = edad;


            }
            

        }

    }

})();