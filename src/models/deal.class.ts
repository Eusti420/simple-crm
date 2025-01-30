export class Deal {
    id: string;
    title: string;
    accountId: string; 
    amount: number;
    stage: 'Lead' | 'Proposal' | 'Negotiation' | 'Closed';
    createdAt: Date;

    constructor(obj?: any) {
      this.id = obj ? obj.id : '';
      this.title = obj ? obj.title : '';
      this.accountId = obj ? obj.accountId : '';
      this.amount = obj ? obj.amount : 0;
      this.stage = obj ? obj.stage : 'Lead';
      this.createdAt = obj ? obj.createdAt : new Date();
      
    }
  }
  