import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  loggeado: boolean;

  constructor(private route:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('persona')){
      this.loggeado = true;
    }
  }

  cerrarSesion(){
    localStorage.clear();
    this.route.navigate(['']);
    // window.location.reload();
  }
}
