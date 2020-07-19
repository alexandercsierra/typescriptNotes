import { Animal } from './animal.model';

export class Bear extends Animal{
    public claws: number; //utilize as normal, default
    readonly name: string; //once set, will not be able to be redefined
    private tail: boolean; // cannot be accessed outside 
    
    constructor(data?: any) {
        super(data);
        this.claws = data.claws;
        this.name = data.name;
        this.tail = data.tail;
    }

    private addTwo(num1, num2): number {
        return num1 + num2;
    }//use private with a function to hide that logic from the user
}