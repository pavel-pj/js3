
 function createError (str) {
    if (str.length > 4) {
        throw new Error("The string is too long");
    }
    return str.length ;
}

export default createError;