import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';

export interface Transacao {
  id?: number;
  nome: string;
  descricao: string;
  data: string | Date;
  valor: number;
  tipo: 'entrada' | 'saida';
  categoria_id?: number | null;
}

export interface Categoria {
  id: number;
  nome: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Navbar], // <-- Adicionamos a Navbar aqui!
  styleUrl: './home.css',
  template: `
    <div class="app-layout">
      
      <app-navbar></app-navbar>  <!-- barra de navegação aproveitada -->

      <main class="main-content">
        <div class="dashboard-container">
          <header class="welcome-header">
            <div>
              <h1>Visão Geral</h1>
              <p>Acompanhe o resumo das suas movimentações financeiras.</p>
            </div>
            <button class="btn btn-primary" (click)="novoLancamento()"> + Novo Lançamento </button>
          </header>

          <!-- 3 cards para resumo financeiro -->
          <section class="kpi-grid">
            <div class="kpi-card">
              <span class="kpi-title">Saldo Total</span>
              <strong class="kpi-value text-neutral">
                R$ {{ calcularSaldo().toFixed(2) }}
              </strong>
            </div>

            <div class="kpi-card">
              <span class="kpi-title">Total Entradas</span>
              <strong class="kpi-value text-success">
                + R$ {{ calcularTotal('entrada').toFixed(2) }}
              </strong>
            </div>

            <div class="kpi-card">
              <span class="kpi-title">Total Saídas</span>
              <strong class="kpi-value text-danger">
                - R$ {{ calcularTotal('saida').toFixed(2) }}
              </strong>
            </div>
          </section>


          <section class="card">
            <div class="card-header">
              <h2>Últimas Transações</h2>
            </div>

            <div class="table-container">
              <table class="recent-table">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Data</th>
                    <th>Categoria</th>
                    <th class="text-right">Valor</th>
                  </tr>
                </thead>
                <tbody>
                  @for (item of transacoes; track item.id) {
                    <tr>
                      <td class="font-semibold">{{ item.nome }}</td>
                      <td class="text-muted">{{ item.descricao }}</td>
                      <td>{{ item.data }}</td>
                      <td>
                        <span class="badge">
                          {{ obterNomeCategoria(item.categoria_id) }}
                        </span>
                      </td>
                      <td 
                        class="text-right font-semibold"
                        [class.text-success]="item.tipo === 'entrada'"
                        [class.text-danger]="item.tipo === 'saida'"
                      >
                        {{ item.tipo === 'entrada' ? '+' : '-' }} R$ {{ item.valor.toFixed(2) }}
                      </td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>

    </div>
  `
})

export class Home {


  categorias: Categoria[] = [];
  transacoes: Transacao[] = [];

  obterNomeCategoria(categoriaId?: number | null): string {
    if (!categoriaId) return 'Sem Categoria';  // Se a transação não tiver categoria associada
    const cat = this.categorias.find(c => c.id === categoriaId); // Procura na array 'categorias' o objeto que tem o mesmo ID
    return cat ? cat.nome : 'Geral';  // Se encontrou a categoria, retorna o nome se não retorna "geral"
  }

  calcularTotal(tipo: 'entrada' | 'saida'): number {
    return this.transacoes
      .filter(t => t.tipo === tipo)  //filtra apenas o tipo entrada e saída
      .reduce((acc, t) => acc + t.valor, 0);  //soma o campo valor de todas as trasações selecionadas
  }

  calcularSaldo(): number {
    return this.calcularTotal('entrada') - this.calcularTotal('saida');
  }

  novoLancamento() { //botão adicional.
    console.log('Criar nova transação');
  }
}