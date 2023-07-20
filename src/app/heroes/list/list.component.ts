import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames : string[]= ['spiderman','iroman','hulk','thor'];
  public deleteHero ?: string;

  removeLastHero():void{
    this.deleteHero =  this.heroNames.pop();
  }

}
