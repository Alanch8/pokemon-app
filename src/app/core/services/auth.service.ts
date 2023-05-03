import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private URL = "http://localhost:49220/api";
  constructor(private http: HttpClient, private router: Router) {}

  logIn(user: { Username: string; Password: string }) {
    return this.http.post<typeof user>(this.URL + "/login/authenticate", user);
  }

  loggedIn() {
    return !!localStorage.getItem("token");
  }

  logout() {
    localStorage.removeItem("token");
    this.router.navigate(["/login"]);
  }

  getToken() {
    return localStorage.getItem("token");
  }
}
