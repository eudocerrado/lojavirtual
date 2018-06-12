import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {PaginaNaoEncontradaComponent} from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { InicioComponent } from './inicio/inicio.component';
import { CadastroComponent } from './cadastro/cadastro.component';


const routes: Routes = [
  {
    path: 'admin', component: AdminComponent, children: [
      {path: 'cadastro', component: CadastroComponent},
      {path: 'inicio', component: InicioComponent},
      {path: '**', component: PaginaNaoEncontradaComponent}
      
      ,
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
