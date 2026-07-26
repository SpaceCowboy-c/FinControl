import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Interface que define o "formato" de cada item do menu.
interface MenuItem {
    label: string;  // texto exibido no menu
}

@Component({
    selector: 'app-navbar',
    imports: [CommonModule], // necessário para o *ngFor funcionar no template
    template: `
    <nav class="navbar">

      
      <div class="navbar-header">   <!-- Cabeçalho: logo + nome da empresa -->
        <div class="logo">FinControl</div>
        <div class="empresa-info">
          <strong>Software</strong>
          <span>Financeiro</span>
        </div>
      </div>

   
      <ul class="menu-list">   <!-- Menu principal: gerado dinamicamente a partir do array menuItems.-->
        <li *ngFor="let item of menuItems" class="menu-item">
          <span class="menu-label">{{ item.label }}</span>
          <span class="menu-seta">›</span>
        </li>
      </ul>
    </nav>
  `,
    styleUrl: './navbar.css',
})
export class Navbar {    
    menuItems: MenuItem[] = [  // Lista de itens do menu
        { label: 'Home' },
        { label: 'Lançamentos' },
        { label: 'Contas' },
        { label: 'Relatório' },
        { label: 'Dashboards' },
        { label: 'Agenda' },
    ];
}