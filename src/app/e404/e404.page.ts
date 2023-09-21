import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NativeAudio } from '@capacitor-community/native-audio';
@Component({
  selector: 'app-e404',
  templateUrl: './e404.page.html',
  styleUrls: ['./e404.page.scss'],
})



export class E404Page implements OnInit {
  

  constructor(private router: Router) {
    
  }
  ngOnInit() {
    
  }
  
  openLogin() {
    this.router.navigateByUrl('/login');
    
  }  
 

 
}
