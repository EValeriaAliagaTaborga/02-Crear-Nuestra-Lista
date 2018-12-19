import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
    <p>
      {{itemTitle}}
    </p>
  `,
  styleUrls: ['./item.component.scss']
})

export class ItemComponent implements OnInit {
  @Input() itemTitle: any;

  constructor() {
  }

  ngOnInit() {
   this.itemTitle = 'nuevo titulo';
  }

}
