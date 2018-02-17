import { Component, OnInit } from '@angular/core';

import { BlogServiceService} from "../services/blog-service.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  public posts: Array<any>;

  public constructor(
      private blogServiceService: BlogServiceService,
  ) {
  }

  public ngOnInit() {
    this.blogServiceService.getPosts()
        .subscribe( (postsData: any) => {
          if(postsData.success === false){
            //redirect to errorPage
          }else{
              console.log(postsData);
              this.posts = postsData.posts;
          }
        });
  }

}
