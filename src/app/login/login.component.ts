import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { AuthService } from '../shared/services/auth.service';
import { LoginFailureComponent } from './login-failure/login-failure.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /**
   * Form fields
   */
  loginForm: FormGroup;
  
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  onSubmit() {
    if(this.loginForm.valid) {
      let response;
      response = this.authService.login(this.loginForm.value);

      if(response) {
        sessionStorage.setItem('currentUser', JSON.stringify(this.loginForm.value));
          this.authService.setCurrentUserValues(this.loginForm.value);
          this.router.navigate(['']);
      } else {
        const dialogRef: MatDialogRef<LoginFailureComponent, any> = this.dialog.open(LoginFailureComponent, {
          width: '400px'
        });

        dialogRef.afterClosed().subscribe(
          () => {this.loginForm.reset}
        );
      }
    }
  }

}
