import { Component, OnInit, Input } from '@angular/core';
import { LikeService} from "../services/like.service";

@Component({
  selector: 'app-blog-item-component',
  templateUrl: './blog-item-component.component.html',
  styleUrls: ['./blog-item-component.component.css']
})
export class BlogItemComponentComponent implements OnInit {

   @Input() comment;
  public constructor(
      private likeService: LikeService
  ) { }

  public ngOnInit() {

  }

  public addLike(){

  }


  public addDislike(){

  }

}
