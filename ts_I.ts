let example1: any; //default, can be anything, just like normal javascript

let example2: boolean = true;

let example3: number = 35;

let example4: string = 'Hello World';

let example5: boolean | number = 35; //can be a boolean or a number

let example6: undefined = undefined;

//best practice is to limit to a single type when possible.

const arrayExample: number[] = [1,3,4,5];

//Checking types

import { Bear } from './bear.model';

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

