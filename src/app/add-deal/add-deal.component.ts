import { Component } from '@angular/core';
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
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatProgressBarModule,
    CommonModule,
    ReactiveFormsModule,
    MatOption,
    MatCard,
    MatCardContent,
  ],
  templateUrl: './add-deal.component.html',
  styleUrls: ['./add-deal.component.scss']
})
export class AddDealComponent {
  dealForm: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder) {
    this.dealForm = this.fb.group({
      title: ['', Validators.required],
      accountId: ['', Validators.required],
      amount: [0, [Validators.required, Validators.min(1)]],
      stage: ['Lead', Validators.required],
      createdAt: [new Date(), Validators.required],
    });
  }

  async saveDeal() {
    if (this.dealForm.invalid) return;

    this.loading = true;
    this.loading = false;
  }

  
}



