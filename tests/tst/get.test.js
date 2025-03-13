
import get from '../../src/tst/get.js'

const val =get ({name:"Иван"}, "name");
if ( val !== "Иван") {
    throw new Error("Функция работает неверно")
}
const val2 =get ({name:"Иван"}, "name2","Игорь");
if (val2 !== "Игорь") {
    throw new Error("Функция работает неверно")
}

const val3 =get ({name:"Иван"}, "name","Игорь");
if (val3 !== "Иван") {
    throw new Error("Функция работает неверно")
}

console.log('Все тесты пройдены!');