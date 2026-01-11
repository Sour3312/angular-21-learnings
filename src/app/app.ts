import { Component, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { mannual } from "./component/mannual";

@Component({
  selector: 'app-root',
  imports: [FormsModule, mannual],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('21');

  name:WritableSignal<string> = signal<any>('');

  setValue(value:any){
    this.name.set(value);
  }

  reset(){
    this.name.set('223')
  }

  //getter and setter
  userName = signal('user');
  student = signal({
    name:'angular 18',
    school:'google'
  })

  get uName(){
    return this.userName();
  }

  set uName(val:string){
    this.userName.set(val);
  }

  get details (){
    return this.student().school;
  }

  set details(val:string){
    this.student.update((item)=>({...item, school:val}))
  }
}
