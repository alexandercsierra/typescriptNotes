let example1: any; //default, can be anything, just like normal javascript

let example2: boolean = true;

let example3: number = 35;

let example4: string = 'Hello World';

let example5: boolean | number = 35; //can be a boolean or a number

let example6: undefined = undefined;

//best practice is to limit to a single type when possible.

const arrayExample: number[] = [1,3,4,5];

//Checking types

import { Bear1 } from './bear.model';

const bear = new Bear(3);

if (bear instanceof Bear){
    console.log('Hello from TypeScript')
}

let definitelyNotAString: any = 'I am a string';

let strLength = definitelyNotAString.length;
//this may throw an error depending on the strictness of the linter because the type is any not specifically string

//need to cast as a string

strLength = (<string> definitelyNotAString).length;

//Arrays
//by default an array will have an any array type - any[]

let example7: any[] = [];

let example8: string[] = ['Hello World'];

let example9: number[] = [1,2];

let example10: boolean[] = [true, false];


//using number | boolean[] would indicate the variable should hold either a number or a boolean array. Grouping them together with parentheses lets TS know we mean either a number array or boolean array
let example11: (number | boolean)[] = [1,2,true];

//a two-dimensional array of boolean values
let example12: boolean[][] = [[true, false]];


//Tuples

//of type string or number. Can be added to, and doesn't have to follow the pattern string number string number after the first two, but must have items with type string OR number
const exampleTuple: [string, number] = ['Alex', 31 ];


//Enums

export enum Age {
    dylan = 30,
    mother = 21
}

function totalAge(age1: Age, age2: Age){
    return age1 + age2;
}

export enum Names {
    mine = 'dylan',
    moms = 'mother'
}

export enum Names2{
    mine,
    moms
}//would print out 0 and 1


const example13: object = {}; //can also use undefined, array, but cannot use NaN

const example14: Object = NaN; //NaN will work for capital O Object. This is why lowercase is preferred.

const example15: {} = {}; //is of type empty object and that's all it will ever be. Cannot assign properties later.


//Function Parameters

function add(val1: number, val2: number){
    return val1 + val2;
}

add(1, 10);

export class PersonClass {
    firstName: string;
    middleName: string;
    lastName: string;
    
    constructor(data?: any) {
        this.firstName = data.firstName || 'Dylan';
        this.lastName = data.lastName || 'Israel';
        this.middleName = data.middleName;    
    }
}


function sayHello(person: PersonClass){
    return `Say hello to my little friend, ${person.firstName}!`;
}

sayHello(new PersonClass({firstName: 'Dylan'}))


//Return Types

function add2(val1: number, val2: number): number {
    return val1 + val2;
}

function sayHello2(person: PersonClass): string {
    return `Say hello to my little friend, ${person.firstName}!`;
}

function voidExample(): void {
    add(1,2);
} // return type of void because the function doesn't return anything


function neverExample(): never {
    throw Error;
} // has a never type because it never is going to reach the end of the function


//Custom Types

type person = {firstName: string}; //somewhat deprecated. Should create an interface or a class

const personExample: person = {firstName: 'Alex'}


//Interfaces
import {IPerson} from './person.interface';

const personExample2: IPerson = {firstName: 'Alexander', middleName: 'Christopher', lastName: 'Sierra'};

personExample2.firstName = "Bob";


//Barrels
//create an index.ts to export multiple files from one file, similar to reducers in Redux.

import {Bear, Man, Pig} from './interfaces';

//Models

import {Person} from './person.model'

const examplePerson: Person = new Person({firstName: 'Dollan'}); // can change firstName but other defaults come from the model



//Intersection Types
//ability add multiple types to a single entity/class

let man: Man | Pig;
let bear1: Bear;
let pig: Pig;

type ManBearPig = Bear & Man & Pig;


let manBearPig: ManBearPig;
manBearPig.firstName = 'Dylan';
manBearPig.claws = 3;
manBearPig.bacon = false;


//Generics
//add clarity to something that doesn't have a predetermined type. But whatever type goes in will be the type that comes out

function exampleGeneric<T>(arg: T): T {
    return arg;
}

exampleGeneric(5);


function exampleGeneric2<T>(arg: T[]): T {
    return arg[0];
}

exampleGeneric2([5]);


//Access Modifiers

import {Bear as Bear3} from './bear.model'
import {Animal} from './animal.model'

const bear3 = new Bear3({name: 'Omega'});
// const animal = new Animal({type: bear});
bear3.claws = 3;
bear3.name = 'Bob'; // not allowed, name property is readonly, and was already set on line 204

//Running files
//use command tsc filename.ts
//check javaScript errors using    // @ts-check

//TSLint