import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-lancamentos',
  standalone: true,
  imports: [Navbar, ReactiveFormsModule],
  styleUrl: './lancamentos.css',
  template: `
    <div class="app-layout">
      <app-navbar></app-navbar>

      <main class="main-content">
        <div class="lancamento-container">
          <header class="welcome-header">
            <div>
              <h1>Lance aqui suas despesas e recebimentos</h1>
              <p>Preencha os campos abaixo com as informações do seu lançamento.</p>
            </div>
          </header>


          <form class="card">
            <div class="form-group type-toggle-container">
              <div class="type-toggle">
                <input type="radio" id="tipo-saida" name="tipoGeral" value="saida" checked />
                <label for="tipo-saida" class="toggle-btn saida-btn">Saída (Despesa)</label>

                <input type="radio" id="tipo-entrada" name="tipoGeral" value="entrada" />
                <label for="tipo-entrada" class="toggle-btn entrada-btn"
                  >Entrada (Recebimento)</label
                >
              </div>
            </div>

            <div class="form-group">
              <label for="categoria">Categoria</label>
              <input
                list="categorias-list"
                id="categoria"
                name="categoria"
                placeholder="Selecione ou digite uma nova categoria..."
              />
            </div>

            <div class="form-group">
              <label for="descricao">Descrição</label>
              <input
                type="text"
                id="descricao"
                name="descricao"
                placeholder="Ex: Mercado, Conta de luz, Salário..."
              />
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="valor">Valor (R$)</label>
                <input type="number" id="valor" name="valor" placeholder="0.00" step="0.01" />
              </div>

              <div class="form-group">
                <label for="data">Data</label>
                <input type="date" id="data" name="data" />
              </div>
            </div>

            <button type="button" class="btn btn-primary">Salvar Lançamento</button>
          </form>
        </div>
      </main>
    </div>
  `,
})
export class Lancamentos {}
