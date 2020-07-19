export class Animal {
    protected type: string;
    
    protected constructor(data?: any) {
        this.type = data.type;
    }
}

//by default, will be public. By adding 'proctected', a user will not be able to instantiate a new animal by calling new Animal and passing in values to the constructor.