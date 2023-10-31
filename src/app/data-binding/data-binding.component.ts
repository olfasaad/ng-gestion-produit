import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
    name="Saad Olfa ";
    nameList=[
      "Saad",
      'Olfa',
      'Student',
    ]
    stat=true;

    state=true;
    afficher(){
      this.state=false;
    }
    cache=true;
    cacher(){
      this.cache=false;
    }
}
