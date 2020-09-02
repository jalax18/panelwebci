import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IncidenciasService } from '../incidencias.service';

@Component({
  selector: 'app-form-first',
  templateUrl: './form-first.component.html',
  styleUrls: ['./form-first.component.css'],
})
export class FormFirstComponent implements OnInit {
  status = 'Form not Submitted';
  user = '';
  defaultName = '';
  defaultEmail = '';
  defaultPassword = '';
  displayPassword = false;
  lightStatus = 'RED';
  names = ['Astrid', 'Andrea', 'Diana', 'Jesus'];
  incidencias = [];
  errorMessage = '';

  @Input() parentDataForChildForm;

  @Output() childEvent = new EventEmitter();
  constructor(private incidenciasService: IncidenciasService) {}

  ngOnInit(): void {
    /* this.incidencias = this.incidenciasService.getIncidencias();
    console.log(this.incidencias);*/
    this.incidenciasService.getIncidencias().subscribe(
      (data) => (this.incidencias = data),
      (error) => (this.errorMessage = error)
    );
  }

  onSendForm(username, email, password) {
    console.log(username);
    console.log(this.incidencias);
    console.log(email);
    console.log(password);
    //alert('Enviado Formulario');
    this.status = 'Form has been Send';
  }

  onDefaultForm() {
    //alert('Enviado Formulario');
    this.status = 'Form not Submitted';
    this.defaultName = 'Jose Antonio Lax';
    this.defaultEmail = 'jalax@4glsp.com';
    this.defaultPassword = '123456789';
    this.displayPassword = true;
  }
  onClickRojo() {
    this.lightStatus = 'RED';
  }
  onClickAmarillo() {
    this.lightStatus = 'YELLOW';
  }
  onClickVerde() {
    this.lightStatus = 'GREEN';
  }
  onClickRoto() {
    this.lightStatus = null;
  }

  onSendEvent() {
    this.childEvent.emit('Este es un mensaje del hijo al padre');
  }
}
