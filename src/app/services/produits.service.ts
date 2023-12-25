import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produit } from '../model/produit';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  urlHote="http://localhost:3333/produits/";
constructor(private http :HttpClient)
{ }
getProduits() :Observable<Array<Produit>>
{
return this.http.get<Array<Produit>> (this.urlHote);
}
deleteProduit(idP: number | undefined): Observable<any> {
    return this.http.delete(`${this.urlHote}${idP}`);
  }
  addProduit(nouveau: Produit): Observable<Produit> {
    return this.http.post<Produit>(this.urlHote, nouveau);
  }
  
updateProduit(idP: number | undefined, nouveau: Produit)
 {
return this.http.put(this.urlHote+idP,nouveau);
}
getProduitsParCategorie(categorieId: number): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${this.urlHote}par-categorie/${categorieId}`);
  }
  
}