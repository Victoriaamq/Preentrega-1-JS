const libros = ["Trono De Cristal", "Alas de Sangre", "Ciudad Medialuna", "Acotar"]

function libroABuscar(){
    const nombreDelLibro = prompt("Ingresa el nombre del Libro:")
    if(nombreDelLibro === null) {
        alert("Este libro no se encuentra en la base de datos")
        return;
    }else if (nombreDelLibro === ""){
        alert("El campo no puede estar vacio. Por favor, intente de nuevo")
        return;
    }else (nombreDelLibro === "1");{
        alert("Este libro se encuentra en la base de datos")
    return;
}
}
console.log(libroABuscar)

const autores = ["Sarah J. Maas", "Rebecca Yarros", "Jennifer L. Armentrout"]
function autorABuscar(){
const autorDelLibro = prompt("Ingrena el nombre del Autor")
if(autorDelLibro === null){
    alert("Este autor no se encuentra en la base de datos")
    return;
}else if (autorDelLibro === ""){
    alert("El campo no puede estar vacio. Por favor, intente de nuevo")
    return;
}else (autorDelLibro === 1);{
    alert("Este autor de encuentra en la base de datos")
    return;
}
}
console.log(autorABuscar)

const librerias = ["Yenny", "Cuspide", "Ateneo"]
function libreriaABuscar(){
    const nombreDeLibreria = prompt("Ingresa el Nombre de la Libreria")
    if(nombreDeLibreria === null){
        alert("Esta libreria no existe")
        return;
    }else if (nombreDeLibreria === ""){
        alert("Este campo no puede estar vacio. Por favor, intente de nuevo")
        return;
    }else (nombreDeLibreria === 1);{
        alert("Esta libreria si existe")
        return;
    }
}
console.log(libreriaABuscar)

const confirmar = confirm("¿Es correcta la información?")
    if(confirmar){
        const datos = {
            nombre,
            autor,
            librerias,
        };
        datos.push(datos)
        alert("Datos guardados exitosamente.")
        console.log("Datos actuales:", datos)
    } else {
        alert("Operación cancelada. No se ingresaron datos.")
    }

