import { Router } from '@angular/router';
import { StorageService } from './../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {

  user : string='';
  name : string='';
  password: any;


  
  constructor(private storageService: StorageService,
     private router:Router,
     private alertService:AlertController) { }

  async registro(){
    if (this.user && this.name && this.password ){
      await this.storageService.set('user', this.user);
    await this.storageService.set('name', this.name);
    await this.storageService.set('password', this.password);
    await this.storageService.set('active', "0");
    this.showAlert("Registro exitoso","Registro")
    this.router.navigateByUrl('/login')
    }
    else{
      this.showAlert("Por favor, completa todos los campos","Error")
    }
    
  }

  async getValue(){
    const user = await this.storageService.get('user');
    const name = await this.storageService.get('name');
    const password = await this.storageService.get('password');
    const active = await this.storageService.get('active');
    
  }
  async removeValue(){
    await this.storageService.remove('name');
  }
  async clearStorage(){
    await this.storageService.clear();
  }

  async showAlert(msg:string, title:string){
    var alert = await this.alertService.create({cssClass:"alertClass",message:msg,header:title,buttons:['Aceptar']});
    await alert.present();
    return alert;
  }
}
