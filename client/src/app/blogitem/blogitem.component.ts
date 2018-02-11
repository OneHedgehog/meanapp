import { Component, OnInit, Input } from '@angular/core';
import { BlogServiceService} from "../services/blog-service.service";

@Component({
  selector: 'app-blogitem',
  templateUrl: './blogitem.component.html',
  styleUrls: ['./blogitem.component.css']
})
export class BlogitemComponent implements OnInit {
  @Input() post;
  public likes:Number;
  public dislikes:Number;
  public userId:String;
  public exist = true;

  constructor(
      private blogServiceService: BlogServiceService,
  ) { }

  ngOnInit() {
      this.userId = localStorage.getItem('user_id');
      this.likes = this.post.likes.length;
      this.dislikes = this.post.likes.length;
  }


    public deleteBlog( id ){
        this.blogServiceService.deletePost( id )
            .subscribe( (deletedData) => {

                console.log(deletedData)
            })
        this.exist = false;
    }
}
