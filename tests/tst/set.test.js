
import set from '../../src/tst/set.js'

const obj = {};
set (obj, "key", "Иван");
if (obj.key !== "Иван") {
    throw new Error("Функция работает неверно")
}
set (obj, "key", "Коля");
if (obj.key !== "Иван") {
    throw new Error("Функция работает неверно")
}

console.log('Все тесты пройдены!');