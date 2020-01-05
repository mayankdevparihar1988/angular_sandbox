import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/Post';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  post: Post;

  @Input() currentPost: Post;
  @Input() isEdit: boolean;
  @Output() newPost: EventEmitter<Post> = new EventEmitter();

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  addPost(title: string, body: string) {
    if (!title || !body) {

      alert('please add post');
    } else {
      // console.log(title,body)
      this.postService.savePost({ title, body } as Post).subscribe(post => {
        console.log(post);
        this.newPost.emit(post);
      });

    }

  }

  updatePost() {
    console.log(123);
  }

}
