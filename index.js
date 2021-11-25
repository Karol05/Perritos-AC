function registrar() {
    console.log("holi")

    const nameDueno = document.getElementById("nameDueño").value;
    const razaPet = document.getElementById("razaPet").value;
    const namePet = document.getElementById("namePet").value;
    const numberphone = document.getElementById("numberphone").value;
  
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

    //alert
    new swal({
        icon: "success",
        title: "se creo un nuevo mascota"
});
    
    axios.post("http://localhost:8000/nuevamascota", {
        nameDueno1: nameDueno,
        razaPet1: razaPet,
        namePet1: namePet,
        numberphone1: numberphone
        
    }).then((data) => {
        swal({
            icon: "success",
            title: "se creo un nuevo mascota"
          });
        console.log(data);
        console.log("registro")
    }).catch(e => { console.log("fallo :c"); })
}

function visualizarDatos() {
    axios.get("http://localhost:8000/listaduenos").then((data) =>{
        console.log(data.data);
        const namedueno = document.getElementById("namedueno");
        const namepet = document.getElementById("nombredueno");

        const namepet3 = document.getElementById("namepet");
        const namepet4 = document.getElementById("nombrepet");

        const numberphone = document.getElementById("numberphone");
        const numerophone = document.getElementById("numerophone");

        namedueno.appendChild(namepet);
        namepet3.appendChild(namepet4);
        numberphone.appendChild(numerophone);

        for (let i = 0; i < data.data.length; i++) {
            let datos = document.createElement("li")
            let datos2 = document.createElement("li")
            let datos3 = document.createElement("li")

            let creartext = document.createTextNode(data.data[i].nombredueno)
            let creartextpet = document.createTextNode(data.data[i].nombremascota)
            let creartextnumber = document.createTextNode(data.data[i].numerocelular)


            datos.appendChild(creartext);
            namepet.appendChild(datos);

            datos2.appendChild(creartextpet);
            namepet4.appendChild(datos2);

            datos3.appendChild(creartextnumber);
            numerophone.appendChild(datos3);

        }

        
    }).catch(e => { console.log("fallo2 :cc"); })
    
}
