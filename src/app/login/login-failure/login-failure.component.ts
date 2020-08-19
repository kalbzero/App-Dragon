import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login-failure',
  templateUrl: './login-failure.component.html',
  styleUrls: ['./login-failure.component.scss']
})
export class LoginFailureComponent {

  constructor(
    public dialogRef: MatDialogRef<LoginFailureComponent>,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
