export interface Deal {
    id: string;
    title: string;
    accountId: string; 
    amount: number;
    stage: 'Lead' | 'Proposal' | 'Negotiation' | 'Closed';
    createdAt: Date;
  }
  