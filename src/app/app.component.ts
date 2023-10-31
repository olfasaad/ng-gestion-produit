import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-gestion-produit';
  actions:Array<any>=
  [
    {titre:"Accueil",route:"/acceuil"},
    {titre:"Liste de produits",route:"/produit"},
    {titre:"Ajouter de produit",route:"/addProduit"},
    {titre:"data binding",route:"/databd"},
  ]
  actionCourante:any;
  setActionCourante(a:any)
  {
    this.actionCourante=a;
  }
}
