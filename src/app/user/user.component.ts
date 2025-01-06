import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule, TooltipPosition } from '@angular/material/tooltip';
import {MatDialogModule, MatDialog} from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../../models/user.class';
import {MatCardModule} from '@angular/material/card';




@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatIconModule, 
            MatButtonModule,
            MatTooltipModule,
            MatDialogModule,
            MatCardModule,
          ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  position: TooltipPosition = 'above'; 

  user = new User();

  constructor(private dialog: MatDialog) {
     
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent)
  }
}


