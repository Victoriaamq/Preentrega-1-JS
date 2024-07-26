let bandera = true
let totalDeCompra= 0

const logicaDeCompra = (valor, cantidad) =>{
    if(isNaN(cantidad)){
        cantidad = 1
        totalDeCompra += valor * cantidad
    } else{
        totalDeCompra += valor * cantidad
    }
}

while(bandera){
    alert("Productos: \n 1- Trono De Cristal \n -2 Alas De Sangre \n -3 Acotar")
    let productoElegido = parseInt(prompt(""))

    switch(productoElegido){
        case 1:
            let cantidad = parseInt(prompt("¿Cuantos articulos deseas?"))
            logicaDeCompra (25000, cantidad)
            break
        case 2:
            let cantidad2 = parseInt(prompt("¿Cuantos articulos deseas?"))
            logicaDeCompra (30000, cantidad2)
            break
        case 3:
            let cantidad3 = parseInt(prompt("¿Cuantos articulos deseas?"))
            logicaDeCompra (20000, cantidad3)
            break
        default:
            alert("Articulo no encontrado, ¿Desea continuar?")
    }
    
    if(totalDeCompra !== 0)
    alert("El sub total es: " + totalDeCompra)

    bandera= confirm("¿Quiere continuar?")
}

function confirmacionDeCompra(totalFinal){
    let confimacion = confirm("El total de compra es: " + totalFinal)


    if(confirmacion){
        alert("Compra Realizada, en su email encontrada su ticket")
    }else{
        alert("Lamentamos no tener el articulo que busca")
    }
}

confirmacionDeCompra(totalDeCompra)




