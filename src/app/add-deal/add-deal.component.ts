import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  FormsModule,
  FormBuilder, 
  FormGroup,
  Validators,   
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatOption, provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../../models/user.class';
import { Account } from '../../models/account.class';
import { Firestore, collection, addDoc, getDocs } from '@angular/fire/firestore'; 
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { count } from 'console';
import { MatCard, MatCardContent } from '@angular/material/card';


@Component({
  selector: 'app-add-deal',
  standalone: true,
  imports: [
    MatDialogContent,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatProgressBarModule,
    CommonModule,
    ReactiveFormsModule,
    MatCard,
    MatCardContent,
    MatOption,
    MatDialogActions,
  ],
  templateUrl: './add-deal.component.html',
  styleUrls: ['./add-deal.component.scss'],
  providers: [provideNativeDateAdapter()],
})


export class AddDealComponent implements OnInit {
  dealForm: FormGroup;
  accounts: Account[] = [];
  loading = false;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddDealComponent>,
    private firestore: Firestore
  ) {
    this.dealForm = this.fb.group({
      title: ['', Validators.required],
      accountId: ['', Validators.required],
      amount: [0, [Validators.required, Validators.min(1)]],
      stage: ['', Validators.required],
      createdAt: [new Date(), Validators.required]
    });
    this.loadAccounts();

  }

  async ngOnInit() {
    await this.loadAccounts();
  }

  async loadAccounts() {
    try {
      const accountsCollection = collection(this.firestore, 'accounts');
      const snapshot = await getDocs(accountsCollection);
      this.accounts = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
        } as Account;
      });
    } catch (error) {
      console.error('Error loading accounts:', error);
    }
  }
  async saveDeal() {
    if (this.dealForm.invalid) {
      return;
    }
    
    try { 
      this.loading = true;
      const dealData = {
        ...this.dealForm.value,
    };
      const dealCollection = collection(this.firestore, 'deals');
      await addDoc(dealCollection, dealData);

          this.dialogRef.close();
    } catch (error) {
      console.error('Error saving deal:', error);
    }}
}
