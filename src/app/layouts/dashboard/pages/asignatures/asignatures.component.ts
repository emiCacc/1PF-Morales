import { Component } from '@angular/core';
import { IAsignatures } from './models/asignatures_iface';
import { MatDialog } from '@angular/material/dialog';
import { AsignaturesDialogComponent } from './components/asignatures-dialog/asignatures-dialog.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-asignatures',
  templateUrl: './asignatures.component.html',
  styleUrls: ['./asignatures.component.scss']
})
export class AsignaturesComponent {
  displayedColumns: string[] = ['id', 'asignature', 'asignatureType', 'enrolled', 'professor', 'actions'];

  asignatures: IAsignatures[] = [
    { id: 1, asignature: 'Historia de la Magia', asignatureType: 'Obligatoria', enrolled: '25', professor: 'Cuthbert Binns' },
    { id: 2, asignature: 'Defensa contra las artes oscuras', asignatureType: 'Obligatoria', enrolled: '25', professor: 'Severus Snape' },
    { id: 3, asignature: 'Encantamientos', asignatureType: 'Obligatoria', enrolled: '25', professor: 'Filius Flitwick' },
    { id: 4, asignature: 'Quidditch', asignatureType: 'Opcional', enrolled: '25', professor: 'Rolanda Hooch' },
    { id: 5, asignature: 'Cuidado de Criaturas Mágicas', asignatureType: 'Opcional', enrolled: '25', professor: 'Rubeus Hagrid' },
    { id: 6, asignature: 'Estudios Avanzados Aritmancia', asignatureType: 'Opcional', enrolled: '25', professor: 'Septima Vector' },
    { id: 7, asignature: 'Adivinacion', asignatureType: 'Obligatoria', enrolled: '25', professor: 'Sybill Trelawney' },
    { id: 8, asignature: 'Pociones', asignatureType: 'Obligatoria', enrolled: '25', professor: 'Horace Slughorn' },
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
        if(result !== undefined){
          if(editingAsignature){
            let isChanged = false;
            for (const key in result) {
              if (result.hasOwnProperty(key) && (result as any)[key] !== (editingAsignature as any)[key]) {
                isChanged = true;
                break;
              }
            }
            if (isChanged) { 
                this.asignatures = this.asignatures.map((u) => u.id === editingAsignature.id ? { ...u, ...result } : u);
                Swal.fire({
                  title: '¡Realizado!',
                  text: 'Materia actualizada con éxito!',
                  icon: 'success'
                });
            } else {
              Swal.fire({
                title: 'No sucedió nada',
                text: 'No se realizaron cambios...',
                icon: 'info'
              });
            }
          } else {
            result.id = new Date().getTime().toString().substring(0,2);
            this.asignatures = [...this.asignatures, result];
            Swal.fire({
              title: '¡Realizado!',
              text: '¡Alumno agregado con éxito!',
              icon: 'success'
            });
          }      
        } else {
          Swal.fire({
            title: 'No sucedió nada',
            text: 'No se realizaron cambios...',
            icon: 'info'
          });    
      }
    },
  });
}

onDeleteAsignature(id: number): void {
  Swal.fire({
    title: '¿Estás seguro?',
    text: 'Esta acción eliminará la materia seleccionada.',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Aceptar'
  }).then((result) => {
    if (result.isConfirmed) {
      this.asignatures = this.asignatures.filter((u) => u.id != id);
      Swal.fire({
        title: '¡Realizado!',
        text: 'Materia eliminada con éxito.',
        icon: 'success'
      });
    }
  });
}



}
