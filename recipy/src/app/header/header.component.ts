import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  @ViewChild('menuItem') menuItem: ElementRef;
  @Output() selectedItem = new EventEmitter<{ category: 'string' }>();


  constructor () {

  }

  onMenuSelected () {
    console.log(this.menuItem.nativeElement);
  }
}
