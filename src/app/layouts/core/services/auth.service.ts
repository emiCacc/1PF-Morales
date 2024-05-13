import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface User {
  email: string;
  password: string;
  role: 'admin' | 'student';
}

const STORAGE_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: User | null = null;

  constructor() {
    const storedUser = localStorage.getItem(STORAGE_KEY);
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
    }
  }

  login(email: string, password: string): Observable<boolean> {
    const users: User[] = [
      { email: 'admin@example.com', password: 'admin', role: 'admin' },
      { email: 'student@example.com', password: 'student', role: 'student' }
    ];
 
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      this.currentUser = user;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
      return of(true);
    } else {
      return of(false);
    }
  }
  
  logout(): void {
    this.currentUser = null;
    localStorage.removeItem(STORAGE_KEY);
  }

  isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  isAdmin(): boolean {
    return this.currentUser?.role === 'admin';
  }
}