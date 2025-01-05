export class User {
    firstName: string;
    lastName: string;
    birthDate: number;
    street: string;  
    streetNumber: number; 
    city: string;
    zipCode: number;

    constructor(obj?: any) {
        this.firstName = obj? obj.firstName : ''; 
        this.lastName = obj? obj.lastName : '';
        this.birthDate = obj? obj.birthDate : 0;   
        this.street = obj? obj.street : '';
        this.streetNumber = obj? obj.streetNumber : 0;
        this.city = obj? obj.city : '';
        this.zipCode = obj? obj.zipCode : 0;    
    }

    public toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            birthDate: this.birthDate,
            street: this.street,
            streetNumber: this.streetNumber,
            city: this.city,
            zipCode: this.zipCode
        };
    }
}