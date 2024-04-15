import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IAsignatures } from 'src/app/layouts/dashboard/pages/asignatures/models/asignatures_iface';

@Injectable({
  providedIn: 'root'
})
export class AsignaturesService {
  private asignaturesSubject: BehaviorSubject<IAsignatures[]> = new BehaviorSubject<IAsignatures[]>([]);
  asignatures$: Observable<IAsignatures[]> = this.asignaturesSubject.asObservable();

  constructor() { }

  setAsignatures(asignatures: IAsignatures[]): void {
    this.asignaturesSubject.next(asignatures);
  }
}
