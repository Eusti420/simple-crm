export interface Deal {
    id: string;
    title: string;
    accountId: string; // Verknüpfung mit dem Account
    amount: number;
    stage: 'Lead' | 'Proposal' | 'Negotiation' | 'Closed';
    createdAt: Date;
  }
  