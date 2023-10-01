import { StorageService } from './../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  user: string = '';
  
  password: string = '';
  

  constructor(
    private router: Router,
    private toastController: ToastController,
    private storageService: StorageService,
    private alertService:AlertController
  ) {}

  async showAlert(msg:string, title:string){
    var alert = await this.alertService.create({cssClass:"alertClass",message:msg,header:title,buttons:['Aceptar']});
    await alert.present();
    return alert;
  }

  async openHome() {
    
    if (this.user && this.password) {
      if (await this.validarCampos()) {
        console.log("Inicio exitoso, sesión activa");
        
        this.router.navigate(['/home'], {
          queryParams: {
            user: this.user,
            password: this.password,
          },
        });
      } else {
        this.showAlert('Tu usuario debe de ser de 3 a 8 caracteres y tu contraseña de 4 dígitos.',"Error");
      }
    } else {
      this.showAlert('Por favor, completa ambos campos.',"Error");
    }
  }

  async validarCampos() {
    const userBd = await this.storageService.get('user');
    const passwordBd = await this.storageService.get('password');

    if (userBd === this.user && passwordBd === this.password) {
      this.storageService.set("active","1")
      return true;
    } else {
      return false;
    }
  }
  
  openRegistro(){
    this.router.navigateByUrl('/registro');
  }

}
