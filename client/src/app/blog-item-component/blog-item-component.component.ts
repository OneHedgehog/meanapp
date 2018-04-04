import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-item-component',
  templateUrl: './blog-item-component.component.html',
  styleUrls: ['./blog-item-component.component.css']
})
export class BlogItemComponentComponent implements OnInit {

   @Input() comment;
  public constructor() { }

  public ngOnInit() {

  }

}
