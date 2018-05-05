import { Component, OnInit, Input } from '@angular/core';
import { LikeService} from '../../../services/like.service';
import { BlogServiceService} from "../../../services/blog-service.service";

@Component({
  selector: 'app-blog-item-component',
  templateUrl: './blog-item-component.component.html',
  styleUrls: ['./blog-item-component.component.css']
})
export class BlogItemComponentComponent implements OnInit {

   @Input() comment;
   @Input() user;
   public deleted: Boolean= false;

   public constructor(
      private likeService: LikeService,
      private blogServiceService: BlogServiceService
  ) { }

  public ngOnInit() {

  }

    public addLike() {
        const likeData = {
            authorname: this.user.user.username,
        }
        this.likeService.addLike(likeData, this.comment._id, 'comment').subscribe((likedData: any) => {
            console.log(likedData);
            if (likedData.success === true) {
                if (likedData.like === null) {
                    this.comment.likes.splice(-1, 1);
                } else {
                    this.comment.likes.push(likedData.like);
                }
            }
        });
    }

    public addDislike() {
        const dislikeData = {
            authorname: this.user.user.username,
        }
        this.likeService.addDislike(dislikeData, this.comment._id, 'comment').subscribe((dislikedData: any) => {
            console.log(dislikedData);
            if (dislikedData.success === true) {
                if (dislikedData.dislike === null) {
                    this.comment.dislikes.splice(-1, 1);
                } else {
                    this.comment.dislikes.push(dislikedData.dislike);
                }
            }
        });
    }

    public deleteComment(){
      this.blogServiceService.deletePostComments(this.comment.id)
        .subscribe( (data: any) => {
          if(data.success === true){
            this.deleted = true;
          };
      })
    }
}
