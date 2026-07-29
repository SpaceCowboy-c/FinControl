import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';

@Component({
    selector: 'app-lancamentos',
    standalone: true,
    imports: [Navbar],
    styleUrl: './lancamentos.css',
    template: `

    <app-navbar></app-navbar>
  `
})
export class Lancamentos { }