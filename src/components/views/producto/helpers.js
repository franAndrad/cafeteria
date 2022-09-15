export const cantidadCaracteres = (input) => {
    if(input.length>=2 && input.length<=20){
        return true; //dato correcto
    }else{
        return false;
    }
}

export const validarPrecio = (dato) =>{
    let patron = /^[0-9]{1,4}$/;
    if(patron.test(dato)){
        return true;
    }else{
        return false;
    }
}

export const validarURL = (input) =>{
    let expRegular = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    if(expRegular.test(input.trim())){
        return true;
    } else {
        return false;
    }
}

export const validarCategoria = (input) =>{
    if(input!==''){
        return true;
    }else{
        return false;
    }
}