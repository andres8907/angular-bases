import { Component } from "@angular/core";


@Component({
    template: `
    <h3>Counter: {{counter}}</h3>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resert()"> Resert</button>
    <button (click)="increaseBy(2)">-1</button>
    `,
    selector: 'app-counter',
})
export class CounterComponent{

    public counter : number = 10;

  increaseBy(value: number):void{
    if(value == 1){
      this.counter = this.counter+1;
    }else{
      this.counter = this.counter - 1;
    }
  }

  resert():void{
    this.counter = 10;
  }
}