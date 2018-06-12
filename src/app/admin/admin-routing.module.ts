import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {PaginaNaoEncontradaComponent} from './pagina-nao-encontrada/pagina-nao-encontrada.component';


const routes: Routes = [
  {
    path: 'admin', component: AdminComponent, children: [
      {path: '', component: HomeComponent},
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
