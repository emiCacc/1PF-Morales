import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map, of } from 'rxjs';

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
  private actualUserSubject: BehaviorSubject<User | null> = new BehaviorSubject<User|null>(null);
  actualUser$: Observable<User|null> = this.actualUserSubject.asObservable();
  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();

  constructor(private router: Router) {
    const storedUser = localStorage.getItem(STORAGE_KEY);
    if (storedUser) {
      const user: User = JSON.parse(storedUser);
      this.actualUserSubject.next(user);
      this.isLoggedInSubject.next(true);
    }
  }

  login(email: string, password: string): Observable<boolean> {
    const users: User[] = [
      { email: 'admin@example.com', password: 'admin', role: 'admin' },
      { email: 'student@example.com', password: 'student', role: 'student' }
    ];
 
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      this.actualUserSubject.next(user);
      this.isLoggedInSubject.next(true);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
      return of(true);
    } else {
      return of(false);
    }
  }
  
  logout(): void {
    this.actualUserSubject.next(null);
    this.isLoggedInSubject.next(false);
    localStorage.removeItem(STORAGE_KEY);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!this.actualUserSubject.getValue();
  }

  isAdmin(): Observable<boolean> {
    return this.actualUserSubject.pipe(map(user => user?.role === 'admin'));
  }
}