import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunk',
    power: 10
  }];

  @Input()
  onDeleteCharacter(id?:string):void{

    if(!id) return;
    this.onDelete.emit(id);
  }

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();
  

}
