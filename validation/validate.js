 
const validateNum=(numero)=> { 
    if (typeof numero !== "number" || isNaN(numero) || numero < 0) {
        throw new Error("Se espera que el parámetro dado sea un número no negativo");
    }
    return numero;
}

const validateString = (string) => {
    if (typeof string !== "string" || !string.trim().length) {
            throw new Error("Se espera que el parametro dado sea un string no vacío");
    }
    return string;
} 

const validateEmail = (email) => {
   const expRegEmail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    if (!expRegEmail.test(email)) {
        throw new Error("Se espera una dirección de correo válida");
    }
    return email;
}

module.exports = {
    validateNum, 
    validateString,
    validateEmail
}