import { Component } from "@angular/core";
import { AuthService } from "src/app/core/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  user = {
    Username: "",
    Password: "",
  };

  constructor(private authService: AuthService, private router: Router) {}

  signIn() {
    this.authService.logIn(this.user).subscribe({
      next: (res) => {
        console.log(res);
        localStorage.setItem("token", res);
        this.router.navigate(["/students"]);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
