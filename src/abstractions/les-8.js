import getGcd from './utils.js';

const ratToString = (rat) => `${getNumer(rat)}/${getDenom(rat)}`;

const makeRational = (numer,denom) =>{

    const devider =  getGcd(numer,denom)
    return {
        numer : numer/devider,
        denom : denom/devider
    }



}

const getNumer = (rat) =>
{
    return rat.numer

}
const getDenom = (rat) => {
    return rat.denom
}
const add = (rat1,rat2) => {

    const numer = rat1.numer * rat2.denom + rat2.numer * rat1.denom;
    const denom = rat1.denom * rat2.denom
    return makeRational(numer,denom);

}
const sub = (rat1,rat2) => {

    const numer = rat1.numer * rat2.denom - rat2.numer * rat1.denom;
    const denom = rat1.denom * rat2.denom
    return makeRational(numer,denom);

}



export {
    makeRational,
    getNumer,
    getDenom,
     add,
     sub,
     ratToString,
};
