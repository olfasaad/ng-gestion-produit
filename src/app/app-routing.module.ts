import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ProduitsComponent } from './produits/produits.component';

const routes: Routes = [
  {path:"acceuil",component:AccueilComponent},
  {path:"addProduit",component:AjoutProduitComponent},
  {path:"produit",component:ProduitsComponent},
  {path:"databd",component:DataBindingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
