import { Component } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics-assignment-3-start';
  display_paragraph = false;
  logs =[];

  onButtonClick(){
    this.display_paragraph = !this.display_paragraph;
    this.logs.push(new Date());
    
}
}
