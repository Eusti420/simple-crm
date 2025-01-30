export class User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    street: string;  
    streetNumber: number; 
    city: string;
    zipCode: number;
    companyId: string; 
    position: string; 
    phone: string;
  
    constructor(obj?: any) {
      this.id = obj ? obj.id : '';
      this.firstName = obj ? obj.firstName : ''; 
      this.lastName = obj ? obj.lastName : '';
      this.email = obj ? obj.email : '';   
      this.street = obj ? obj.street : '';
      this.streetNumber = obj ? obj.streetNumber : 0;
      this.city = obj ? obj.city : '';
      this.zipCode = obj ? obj.zipCode : 0;
      this.companyId = obj ? obj.companyId : ''; 
      this.position = obj ? obj.position : ''; 
      this.phone = obj ? obj.phone : ''; 
    }
  
    public toJSON() {
      return {
        id: this.id,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        street: this.street,
        streetNumber: this.streetNumber,
        city: this.city,
        zipCode: this.zipCode,
        companyId: this.companyId,
        position: this.position,
        phone: this.phone
      };
    }
  }
  