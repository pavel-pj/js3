export const smallestDivisor = (num) =>
{
    if(num === 1) return 1;


    const devider = (iter) => {

        if (num % iter === 0) return iter;
        if (iter === num) return num
        return devider (iter + 1);


    }
    const iter = 2;
    return devider (iter);

}

export default smallestDivisor;