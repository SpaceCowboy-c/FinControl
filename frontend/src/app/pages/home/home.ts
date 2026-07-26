import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';

@Component({
  selector: 'app-home',
  imports: [Navbar], // importa o componente pra poder usar a tag <app-navbar>
  template: `
    <div class="layout">
      <app-navbar></app-navbar>
    </div>
  `,
  styleUrl: './home.css',
})
export class Home { }