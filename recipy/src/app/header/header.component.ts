import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  @Output() selectedItem = new EventEmitter<{ category: string }>();
  @ViewChild('recipeMenuItem') recipeMenuItem: ElementRef;
  @ViewChild('shoppingListMenuItem') shoppingListMenuItem: ElementRef;

  constructor () {

  }

  onMenuSelected (event: Event) {
    event.preventDefault();
    this.selectedItem.emit({ category: (<HTMLAnchorElement> event.target).id });
  }
}
