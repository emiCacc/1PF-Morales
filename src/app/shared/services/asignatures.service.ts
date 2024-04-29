import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IAsignatures } from 'src/app/layouts/dashboard/pages/asignatures/models/asignatures_iface';

@Injectable({
  providedIn: 'root'
})
export class AsignaturesService {
  private asignaturesSubject: BehaviorSubject<IAsignatures[]> = new BehaviorSubject<IAsignatures[]>([]);
  asignatures$: Observable<IAsignatures[]> = this.asignaturesSubject.asObservable();

  constructor() {
    const storedAsignatures = this.getStoredAsignatures();
    if (storedAsignatures) {
      this.asignaturesSubject.next(storedAsignatures);
    }
  }

  setAsignatures(asignatures: IAsignatures[]): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        this.asignaturesSubject.next(asignatures);
        this.storeAsignatures(asignatures);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  private storeAsignatures(asignatures: IAsignatures[]): void {
    localStorage.setItem('asignatures', JSON.stringify(asignatures));
  }

  private getStoredAsignatures(): IAsignatures[] | null {
    const storedAsignatures = localStorage.getItem('asignatures');
    return storedAsignatures ? JSON.parse(storedAsignatures) : null;
  }

}
