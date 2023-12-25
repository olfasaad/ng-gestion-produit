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
    {titre:"Accueil",route:"/acceuil",icon: 'bi-house'},
    {titre:"Liste de produits",route:"/produit",icon:'bi-list'},
    {titre:"Ajouter de produit",route:"/addProduit",icon:'bi-plus'},
    {titre:"data binding",route:"/databd",icon:'bi-database-add'},
  ]
  actionCourante:any;
  setActionCourante(a:any)
  {
    this.actionCourante=a;
  }
}
