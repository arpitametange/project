import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Output() outputvalue=new EventEmitter();
sendData(){
  this.outputvalue.emit('Hello Parent! This is from Child Component.');

}
}
