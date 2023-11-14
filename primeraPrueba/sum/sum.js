function suma(a,b) {
    return a+'b';
}

function resta ( a,b){
    return a-b;
}

function multiplicacion ( a,b){
    return a*b;
}

function divicion ( a,b){
    return a/b;
}

function concatenateStrings(msg1,msg2) {
    if (typeof msg1 !='string' || typeof msg2 != 'string') {
        throw new Error('Los datos deben de ser cadenas');
    }
    return msg1+msg2;
}



module.exports ={
suma,
resta,
multiplicacion
,divicion,
concatenateStrings
};
