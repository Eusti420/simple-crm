import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../../models/user.class';
import { Firestore, collection, addDoc } from '@angular/fire/firestore'; // Geänderte Imports

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
  providers: [provideNativeDateAdapter()],
})

export class DialogAddUserComponent {
  user = new User();
  birthDate!: Date;
  
  constructor(private firestore: Firestore) {}

  async saveNewUser() {
    try {
      this.user.birthDate = this.birthDate.getTime();
      
      // Verwende die toJSON Methode und stelle sicher, dass alle Werte definiert sind
      const userData = this.user.toJSON();
      console.log('Zu speichernde Daten:', userData);

      const usersCollection = collection(this.firestore, 'users');
      const docRef = await addDoc(usersCollection, userData);
      
      console.log('Benutzer erfolgreich hinzugefügt', docRef.id);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  }
}




