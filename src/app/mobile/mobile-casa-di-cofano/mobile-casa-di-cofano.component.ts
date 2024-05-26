import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-casa-di-cofano',
  standalone: true,
  imports: [],
  templateUrl: './mobile-casa-di-cofano.component.html',
  styleUrl: './mobile-casa-di-cofano.component.scss'
})
export class MobileCasaDiCofanoComponent {

  constructor(private router: Router) {}

  redirectTo(url: string) {
    window.location.href = url
  }
  
}
