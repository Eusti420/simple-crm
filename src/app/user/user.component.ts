import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule, TooltipPosition } from '@angular/material/tooltip';
import {MatDialogModule, MatDialog} from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../../models/user.class';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatTableDataSource} from '@angular/material/table';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environments';





@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatIconModule, 
            MatButtonModule,
            MatTooltipModule,
            MatDialogModule,
            MatCardModule,
            MatTableModule,
            CommonModule,
          ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})



export class UserComponent implements OnInit {

  position: TooltipPosition = 'above'; 

  users$: Observable<User[]>;

  constructor(
    private dialog: MatDialog,
    private firestore: Firestore
  ) {
    const usersCollection = collection(this.firestore, 'users');
    this.users$ = collectionData(usersCollection).pipe(
      map(users => users.map(user => new User(user)))
    );
  }

  ngOnInit() {
    this.users$.subscribe(users => {
      console.log('Users:', users);
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogAddUserComponent);
    dialogRef.afterClosed().subscribe(() => {
    });
  }
}


