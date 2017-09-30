import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showCategory = 'recipe';

  constructor () {

  }

  onSelectedItem (event) {
    this.showCategory = event.category;
  }

}
