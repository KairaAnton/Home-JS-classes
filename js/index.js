"use strict"


class MyArrayMethods {
    length = 0;
    constructor(...arr) {

        for (let i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
            this.length++;
        }
    }

    push = function () {
        for (let i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];

            this.length++;
        }

        return this.length;
    }


    pop = function () {
        const lastIndex = this.length - 1;
        const lastItem = this[lastIndex];
        delete this[lastIndex];
        --this.length;
        return lastItem;
    }


    forEach = function (callback) {
        for (let i = 0; i < this.length; i++) {
            callback(this[i], i, this);
        }
    }


    concat = function (array) {
        let result = [];
        for (let i = 0; i < this.length; i++) {
            result.push(this[i]);
        }
        for (let i = 0; i < array.length; i++) {
            result.push(array[i]);
        }
        return result;
    }

    flat = function (depth = 1) {
        if (depth < 0) {
            console.error("depth must be a positive value");
            return;
        }

        let newArr = [];

        if (depth === 0) {
            return this;
        }

        for (let i = 0; i < this.length; i++) {
            if (Array.isArray(this[i])) {

                const buffer = this[i].flat(depth - 1);

                newArr = newArr.concat(buffer);

            } else if (this[i] !== undefined) {

                newArr.push(this[i]);

            }
        }

        return newArr;
    }

    shift = function () {
        const firstIndex = length - 0;

        const firstItem = this[firstIndex];

        let arr = this;

        for (let i = 1; i < this.length; i++) {
            this[i - 1] = arr[i]
        }
        const lastIndex = this.length - 1;
        delete this[lastIndex];
        --this.length;
        return firstItem;
    }


    unshift = function (...arg) {
        let arr = [];
        for (let i = 0; i < this.length; i++) {
            arr[i] = this[i];
        }

        for (let i = 0; i < arg.length; i++) {

            this[i] = arg[i];

            this.length++;

        }

        for (let i = 0; i < arr.length ; i++) {

            this[i + arg.length] = arr[i];
        }


        return this.length;
    }

}

const myArr = new MyArrayMethods(1, 2, 3, 4, 5, 6, 7, 8, [9]);


/* 2) Реализовать класс RangeValidator, со следующими свойствами:
■  from (number);
■  to (number);
Реализовать getter'ы и setter'ы для обоих свойств
Реализовать getter range, который будет возвращать массив с двумя числами диапазона
Реализовать метод validate, который будет принимать число и проверить входит ли число в указанный диапазон.
 */


class RangeValidator {
    constructor(from, to) {
        this._from = from;
        this._to = to;
    }

    set from(from) {
        if (typeof from !== "number") {
            throw new TypeError("from must be a number");
        }

        if (from < 0) {
            throw new RangeError("from must be a positiv value");
        }

        return this._from = from;
    }

    set to(to) {
        if (typeof to !== "number") {
            throw new TypeError("from must be a number");
        }
        if (to < 0) {
            throw new RangeError("from must be a positiv value");
        }
        return this._to = to;
    }

    get from() {
        return this._from
    }

    get to() {
        return this._to;
    }

    get range() {
        return [this._from, this._to];
    }


    validate(number) {
        if (this._from < this._to) {
            return number >= this._from && number <= this._to;
        }

        if (this._from > this._to) {
            return number <= this._from && number >= this._to;
        }

    }

}

const validator = new RangeValidator();



//3. Сделайте функцию, которая определяет, есть в массиве заданный элемент или нет.


function itemCheck(array, item) {
    return array.includes(item);
}


//4. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).

function reducer(number) {
    debugger;
    let num = `${number}`;
    let reduce = `${num.split('')
        .map(item => +item)
        .reduce((accumulator, currentValue) => accumulator + currentValue)}`;


    if (reduce.split('').length === 1) {
        return num.split('')
            .map(item => +item)
            .reduce((accumulator, currentValue) => accumulator + currentValue)
    }
    if (reduce.split('').length > 1) {
        return reducer(number = reduce);
    }


}


//5.  Напишите функцию, которая возвращает массив состоящий только из уникальных элементов из каждого массива


function unique(...array) {

    return array.map((elem) => {
        return elem.filter((item, pos) => {
            return elem.indexOf(item) === pos;
        })
    }).flat();


}