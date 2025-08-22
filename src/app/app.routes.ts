import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { CadastroProdutosComponent } from './components/cadastro-produtos/cadastro-produtos';
import { ListagemProdutosComponent } from './components/listagem-produtos/listagem-produtos';
import { SimulacaoEmprestimoComponent } from './components/simulacao-emprestimo/simulacao-emprestimo';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cadastro-produtos', component: CadastroProdutosComponent },
  { path: 'listagem-produtos', component: ListagemProdutosComponent },
  { path: 'simulacao-emprestimo', component: SimulacaoEmprestimoComponent },
  { path: '**', redirectTo: '' }
];