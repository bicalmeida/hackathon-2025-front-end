import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Produto } from '../../models/models';

@Component({
  selector: 'app-listagem-produtos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="header">
      <button class="back-button" (click)="goBack()">
        ← Produtos Cadastrados
      </button>
      <button class="menu-button">☰</button>
    </div>

    <div class="products-container">
        <div class="loading" *ngIf="isLoading">
        Carregando produtos...
      </div>

      <div class="error-message" *ngIf="errorMessage">
        {{ errorMessage }}
      </div>

      <div class="products-list" *ngIf="!isLoading && !errorMessage">
        <div class="product-card" *ngFor="let produto of produtos; let i = index">
          <div class="product-header">
            <h3>{{ produto.nome }}</h3>
            <div class="expand-controls">
              <button 
                class="expand-button"
                (click)="toggleExpand(i)"
              >
                {{ expandedItems[i] ? 'Recolher' : 'Expandir' }}
                <span class="arrow">{{ expandedItems[i] ? '▲' : '▼' }}</span>
              </button>
            </div>
          </div>
          
          <div class="product-details" [class.expanded]="expandedItems[i]">
            <div class="detail-row">
              <span class="label">Juros Anual:</span>
              <span class="value">{{ produto.taxaAnual }}%</span>
            </div>
            <div class="detail-row">
              <span class="label">Prazo Máximo:</span>
              <span class="value">{{ produto.prazoMaximo }} meses</span>
            </div>
          </div>
        </div>

        <div class="empty-state" *ngIf="produtos.length === 0">
          <p>Nenhum produto cadastrado ainda.</p>
          <button class="add-product-button" (click)="goToCadastro()">
            Cadastrar Primeiro Produto
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .header {
      background-color: #005CA9;
      color: white;
      padding: 15px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .back-button {
      background: none;
      border: none;
      color: white;
      font-size: 18px;
      cursor: pointer;
    }

    .menu-button {
      background: none;
      border: none;
      color: white;
      font-size: 20px;
      cursor: pointer;
    }

    .products-container {
      padding: 20px;
      background: #f5f5f5;
      min-height: calc(100vh - 70px);
    }

.page-container {
    display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
}


    .loading {

      padding: 50px;
      font-size: 18px;
      color: #666;

    }

    .error-message {
      background: #d93636;
      color: white;
      padding: 15px;
      border-radius: 4px;
      text-align: center;
      margin-bottom: 20px;
    }

    .products-list {
      max-width: 800px;
      margin: 0 auto;
    }

    .product-card {
      background: white;
      border-radius: 8px;
      margin-bottom: 15px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }

    .product-header {
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #eee;
    }

    .product-header h3 {
      margin: 0;
      color: #005CA9;
      font-size: 18px;
    }

    .expand-controls {
      display: flex;
      align-items: center;
    }

    .expand-button {
      background: none;
      border: none;
      color: #005CA9;
      font-size: 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    .arrow {
      transition: transform 0.3s ease;
    }

    .product-details {
      padding: 0 20px;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease, padding 0.3s ease;
    }

    .product-details.expanded {
      max-height: 200px;
      padding: 20px;
    }

    .detail-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
    }

    .label {
      font-weight: 500;
      color: #003c4d;
    }

    .value {
      font-weight: 600;
      color: #005CA9;
    }

    .empty-state {
      text-align: center;
      padding: 50px;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .empty-state p {
      font-size: 18px;
      color: #666;
      margin-bottom: 20px;
    }

    .add-product-button {
      background: #005CA9;
      color: white;
      border: none;
      padding: 12px 30px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
    }

    @media (max-width: 768px) {
      .products-container {
        padding: 15px;
      }

      .product-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
      }

      .expand-controls {
        width: 100%;
        justify-content: flex-end;
      }
    }
  `]
})
export class ListagemProdutosComponent implements OnInit {
  produtos: Produto[] = [];
  isLoading = true;
  errorMessage = '';
  expandedItems: boolean[] = [];

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProdutos();
  }

  loadProdutos(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.apiService.getProdutos().subscribe({
      next: (produtos) => {
        this.produtos = produtos;
        this.expandedItems = new Array(produtos.length).fill(false);
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = 'Erro ao carregar produtos. Tente novamente.';
        console.error('Erro:', error);
      }
    });
  }

  toggleExpand(index: number): void {
    this.expandedItems[index] = !this.expandedItems[index];
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  goToCadastro(): void {
    this.router.navigate(['/cadastro-produtos']);
  }
}