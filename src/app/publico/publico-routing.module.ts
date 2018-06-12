import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AcessarComponent} from "./acessar/acessar.component";
import {PublicoComponent} from "./publico/publico.component";
import {CarrinhoComponent} from "./carrinho/carrinho.component";

const routes: Routes = [
  {
    path: '', component: PublicoComponent, children: [
      {path: 'carrinho', component: CarrinhoComponent},
      {path: 'acessar', component: AcessarComponent}
      ,
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicoRoutingModule {
}
