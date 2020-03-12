
    window.onload = function () {
        var tabla = document.getElementById("namesTable");
        var clientes = [{ "nombre": "Juan", "direccion": "jiron calloma", "telefono": "685985485" },
        { "nombre": "peres", "direccion": "jiron tuesla", "telefono": "5643566876" },
        { "nombre": "uriel", "direccion": "jiron 4 de diciembre", "telefono": "965863554" }];
        
        console.log(Object.keys(clientes[0]));
        var propiedades= Object.keys(clientes[0]);

       var cabecera =document.createElement("tr");

                for (var prop of propiedades ){
                        var th=document.createElement("th");
                        th.innerHTML=prop;
                        cabecera.appendChild(th);
                }
                    tabla.appendChild(cabecera)

        clientes.forEach(function (e) {

            var tr = document.createElement("tr");

            for (var prop in e) {
               // console.log(prop);
                console.log(e[prop]);
                var td = document.createElement("td"); 
                td.innerHTML = e[prop];
                tr.appendChild(td)
            }
            tabla.appendChild(tr)
        })

        document.getElementById("counter").value = clientes.length;
    }
