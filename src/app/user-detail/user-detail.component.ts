import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { User } from '../../models/user.class';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit {
  userId: string = '';
  user: User = new User();
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private firestore: Firestore
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id')!;
      this.getUser();
    });
  }

  async getUser() {
    this.loading = true;
    try {
      const docRef = doc(this.firestore, 'users', this.userId);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        this.user = new User({
          id: docSnap.id,
          ...docSnap.data()
        });
      }
    } catch (error) {
      console.error('Error loading user:', error);
    } finally {
      this.loading = false;
    }
  }
}