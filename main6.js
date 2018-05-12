/*function nombreCompleto(nombre,apellido){
    document.writeln(nombre+" "+apellido);
}

nombreCompleto("Gregory","Rivera");*/

function edad(anioNac){
    var ed = (2018-anioNac);
    if(ed>=18){
        return 1;
    }else{
        return 0;
    }
}

switch(edad(1980)){
    case 1:
        console.log("Es Mayor a 18 Años");
        break;
    case 0:
        console.log("Es Menor a 18 Años");
        break;
}