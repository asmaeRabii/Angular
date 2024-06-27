import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginObj: any = {
    userName: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  async onLogin() {
    const isAuthenticated = await this.authService.login(this.loginObj.userName, this.loginObj.password);
    if (isAuthenticated) {
      this.router.navigateByUrl('/products');
    } else {
      alert('Wrong credentials');
    }
  }
}
