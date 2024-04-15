import { Component, OnInit } from '@angular/core';
import { AsignaturesService } from 'src/app/shared/services/asignatures.service';
import { IAsignatures } from '../../models/asignatures_iface';

@Component({
  selector: 'app-qualifications',
  templateUrl: './qualifications.component.html',
  styleUrls: ['./qualifications.component.scss']
})

export class QualificationsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'asignature', 'asignatureType', 'enrolled', 'professor'];
  asignatures: IAsignatures[] = [];

  constructor(private asignaturesService: AsignaturesService) {}

  ngOnInit(): void {
    this.asignaturesService.asignatures$.subscribe(asignatures => {
      this.asignatures = asignatures;
    });
  }
}