import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
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
    private toastController: ToastController
  ) {}

  async mostrarToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000, // Duración en milisegundos
      position: 'middle', // Posición en la pantalla (middle, top, bottom)
    });

    toast.present();
  }

  openHome() {
    if (this.user && this.password) {
      if (this.validarCampos()) {
        this.router.navigate(['/home'], {
          queryParams: {
            user: this.user,
            password: this.password,
          },
        });
      } else {
        this.mostrarToast(
          'Tu usuario debe de ser de 3 a 8 caracteres y tu contraseña de 4 dígitos.'
        );
      }
    } else {
      this.mostrarToast('Por favor, completa ambos campos.');
    }
  }

  private validarCampos(): boolean {
    const userValido = /^[a-zA-Z0-9]{3,8}$/.test(this.user);
    const passwordValido = /^[0-9]{4}$/.test(this.password);

    return userValido && passwordValido;
  }
  
  

}
