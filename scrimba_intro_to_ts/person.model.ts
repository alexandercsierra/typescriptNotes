export class Person {
    firstName: string;
    middleName: string;
    lastName: string;

    constructor(data?: any){ //incoming data can by of any type, but only using that which is defined below
        this.firstName = data.firstName || 'Alex'; //can assign defaults with the || symbol
        this.middleName = data.middleName || 'C';
        this.lastName = data.lastName || 'Sierra';
    }
}