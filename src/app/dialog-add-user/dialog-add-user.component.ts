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
import { provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../../models/user.class';
import { Firestore, collection, addDoc } from '@angular/fire/firestore'; 
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-dialog-add-user',
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
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
  providers: [provideNativeDateAdapter()],
})

export class DialogAddUserComponent {
  userForm: FormGroup;
  loading = false;
  
  constructor(
    private firestore: Firestore,
    public dialogRef: MatDialogRef<DialogAddUserComponent>,
    private fb: FormBuilder
  ) {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      street: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: ['', Validators.required]
    });
  }

  async saveNewUser() {
    if (this.userForm.invalid) return;
    
    try {
      this.loading = true;
      const userData = {
        ...this.userForm.value,
        birthDate: this.userForm.get('birthDate')?.value?.getTime()
      };

      const usersCollection = collection(this.firestore, 'users');
      await addDoc(usersCollection, userData);
      
      setTimeout(() => {
        this.loading = false;
        this.dialogRef.close();
      }, 1200);
      
    } catch (error) {
      console.error('Error adding user:', error);
      this.loading = false;
    }
  }
}







