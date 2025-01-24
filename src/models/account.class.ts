import { User } from './user.class';

export class Account {
  id: string;
  name: string;
  address: string;
  city: string;
  zipCode: string;
  industry: string;
  contacts: User[];

  constructor(obj?: any) {
    this.id = obj ? obj.id : '';
    this.name = obj ? obj.name : '';
    this.address = obj ? obj.address : '';
    this.city = obj ? obj.city : '';
    this.zipCode = obj ? obj.zipCode : '';
    this.industry = obj ? obj.industry : '';
    this.contacts = obj && obj.contacts ? obj.contacts.map((contact: any) => new User(contact)) : [];
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      address: this.address,
      city: this.city,
      zipCode: this.zipCode,
      industry: this.industry,
      contacts: this.contacts.map(contact => contact.toJSON()), // falls User auch eine toJSON-Methode hat
    };
  }
}
