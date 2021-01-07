import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LerArquivoExcelComponent } from './components/ler-arquivo-excel/ler-arquivo-excel.component';
import { ListarImportacaoComponent } from './components/listar-importacao/listar-importacao.component';

const routes: Routes = [
  { path: '', component: LerArquivoExcelComponent },
  { path: 'listar', component: ListarImportacaoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
