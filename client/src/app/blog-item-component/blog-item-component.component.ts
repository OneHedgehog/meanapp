import { Component, OnInit, Input } from '@angular/core';
import { LikeService} from '../services/like.service';

@Component({
  selector: 'app-blog-item-component',
  templateUrl: './blog-item-component.component.html',
  styleUrls: ['./blog-item-component.component.css']
})
export class BlogItemComponentComponent implements OnInit {

   @Input() comment;
   @Input() user;
  public constructor(
      private likeService: LikeService
  ) { }

  public ngOnInit() {
    console.log(this.comment);
    console.log(this.user);
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
}
