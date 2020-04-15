import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
x : number;
y : number;
z : number;

hitung() {
  this.z = Math.pow(this.x,this.y);
  return this.z;
}

clear() {
  this.x = 0;
  this.y = 0;
  this.z = 0;
}

tmp1 = this.x;
a = this.z-this.y+1;
arr = new Array(this.a);

  for(var i = 0;i<this.a;i++) {
    this.arr[i] = new Array(this.tmp1);
    this.tmp1++;
  }
}

}
