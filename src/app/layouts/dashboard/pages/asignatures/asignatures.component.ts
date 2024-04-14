import { Component } from '@angular/core';
import { IAsignatures } from './models/asignatures_iface';
import { MatDialog } from '@angular/material/dialog';
import { AsignaturesDialogComponent } from './components/asignatures-dialog/asignatures-dialog.component';

@Component({
  selector: 'app-asignatures',
  templateUrl: './asignatures.component.html',
  styleUrls: ['./asignatures.component.scss']
})
export class AsignaturesComponent {
  displayedColumns: string[] = ['id', 'asignature', 'asignatureType', 'enrolled', 'professor', 'actions'];

  asignatures: IAsignatures[] = [
    { id: 1, asignature: 'Historia de la Magia', asignatureType: 'Obligatoria', enrolled: '25', professor: 'Minerva Mc Gonagall' },
];

constructor(private matDialog: MatDialog) {}

openDialog(editingAsignature?: IAsignatures): void {
  this.matDialog
    .open(AsignaturesDialogComponent,{
      data: editingAsignature,
    })
    .afterClosed()
    .subscribe({
      next: (result) => {
        if(result){

          if(editingAsignature){
            this.asignatures = this.asignatures.map((u) => u.id === editingAsignature.id ? { ...u, ...result } : u);
          } else {
            result.id = new Date().getTime().toString().substring(0,2);
            this.asignatures = [...this.asignatures, result];
          }
      }
    },
  });
}

onDeleteAsignature(id: number): void {
  if (confirm('Esta seguro?'))
  this.asignatures = this.asignatures.filter((u) => u.id != id);
}

}
