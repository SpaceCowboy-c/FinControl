import { Component } from '@angular/core';

export interface MenuItem {
  id: string;
  label: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  styleUrl: './navbar.css',  //importa css
  
  template: `
    <nav class="navbar">
      <div class="navbar-header">
        <div class="logo-icon">
        <!--desenha a logo do cifrão (Scalable Vector Graphics) -->
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
          </svg>

        </div>
        <div class="empresa-info">
          <span class="brand-name">FinControl</span>
          <span class="brand-sub">Software Financeiro</span>
        </div>
      </div>

      <!-- Menu Principal -->
      <ul class="menu-list">
        @for (item of menuItems; track item.id) {
          <li 
            class="menu-item" 
            [class.active]="item.id === activeId"
            (click)="selectItem(item.id)"
          >
            <!--Desenha o icone do lado dos itens -->
            <svg class="menu-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="7" height="7" rx="1"/>
              <rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="14" y="14" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/>
            </svg>
            <span class="menu-label">{{ item.label }}</span>
          </li>
        }
      </ul>

      <!-- Rodapé / Perfil -->
      <div class="navbar-footer">
        <div class="user-avatar">CM</div>
        <div class="user-info">
          <span class="user-name">Caroline Martini</span>
          <span class="user-role">Administrador</span>
        </div>
        <button class="logout-btn" title="Sair">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
        </button>
      </div>
    </nav>
  `
})
export class Navbar {
  activeId = 'navbar';

  menuItems: MenuItem[] = [
    { id: 'home', label: 'Home' },
    { id: 'lancamentos', label: 'Lançamentos' },
    { id: 'contas', label: 'Contas' },
    { id: 'relatorios', label: 'Relatórios' },
    { id: 'dashboards', label: 'Dashboards' },
    { id: 'agenda', label: 'Agenda' },
  ];

  selectItem(id: string) {
    this.activeId = id;
  }
}