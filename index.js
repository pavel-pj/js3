import fsp from 'fs/promises';
import _ from 'lodash';

import { Money as Money } from './src/oop/prototype.js';


const money1 = new Money(100);
console.log(money1.exchangeTo('eur').getValue());
//console.log(money1.exchangeTo('eur').getCurrency());
//console.log(money1.getValue());
//console.log(money1.getCurrency());

console.log(money1.exchangeTo('usd').getValue());
console.log(money1.getValue());
console.log(money1.getCurrency());

const money2 = new Money(200, 'eur');
const money3 = money2.add(money1)
console.log(money3.getValue());
console.log(money2.getValue());
console.log(money3.getCurrency());




//const money2 = new Money(200, 'eur');

//const money3 = money2.add(money1);



//const money4 = money1.add(money2);
//console.log(money4.getValue())

/*
const money1 = new Money(100);

// Возвращает значение
console.log(money1.getValue()); // 100
console.log(money1.getCurrency()); // 'usd'
console.log(money1.format())
// Конвертирует в указанную валюту и возвращает новое значение
console.log(money1.exchangeTo('eur').getValue()); // 70
console.log(money1.exchangeTo('eur').getValue()); // 70
console.log(money1.getCurrency()); // eur
console.log(money1.exchangeTo('usd').getValue()); // 70



/*
const money2 = new Money(200, 'eur');
console.log(money2.getValue()); // 200
const money3 = money2.add(money1);
console.log( money3.getValue()) //270
console.log(money3.format())
const money4 = money3.add(money1);
console.log(money4.getValue()); // 340

const money5 = new Money(10000);
console.log(money5.format()); // "$10,000.00"

console.log(money4.format())
*/




/*
const numbers1 = [1, 3];


Array.prototype.last = function last(){
    return this[this.length - 1];
}

console.log(numbers1.last())


/*

// Как только выполнится этот код, все массивы,
// включая уже созданные, обзаведутся методом last
Array.prototype.last = function last() {
    // Такое обращение сработает, ведь this — это ссылка на сам объект,
    // который в нашем случае является массивом
    return this[this.length - 1];
}

console.log(numbers1.last()); // 3*/