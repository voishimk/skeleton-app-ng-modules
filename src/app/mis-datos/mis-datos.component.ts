import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController, createAnimation } from '@ionic/angular';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.scss'],
})
export class MisDatosComponent  implements OnInit {

  selectTabs = 'explaboral';
  user: string = '';
  password: string = '';

  nameInput : string = '';
  lastNameInput : string = '';
  cbEducation : string = '';

  //reconocer el input name
  @ViewChild('ionInput1', { read: ElementRef }) ionInput1: ElementRef | undefined;
  @ViewChild('ionInput2', { read: ElementRef }) ionInput2: ElementRef | undefined;

  empresaInput: string ='';
  cargoInput: string = '';
  fechaInicioInput: string = '';
  trabajandoInput:string='';
  nombreCertiInput:string='';
  vencCertiInput:string='';

  constructor(private router: Router, 
    private route: ActivatedRoute,
    private toastController: ToastController,
     ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.user = params['user'];
      this.password = params['password'];
      this.nameInput = params['nameInput'];
      this.lastNameInput = params['lastNameInput'];
      this.cbEducation = params['cbEducation'];
    });
  }

  openLogin() {
    this.router.navigateByUrl('/login');
    this.clearInputs();
  }  

  clearInputs(){
    this.nameInput= " ";
    this.lastNameInput= " ";
    this.cbEducation= "";
    
  }

  async mostrarToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000, // Duración en milisegundos
      position: 'middle', // Posición en la pantalla (middle, top, bottom)
      cssClass:'toast',
    });

    toast.present();
  }
  
  showInput(){
    if(this.nameInput && this.lastNameInput){
      this.mostrarToast('Nombre:'+ this.nameInput+'\n'+'Apellido:'+this.lastNameInput);
    }
    else{
      this.mostrarToast('Rellene todos los campos');
    }

  }

  
}