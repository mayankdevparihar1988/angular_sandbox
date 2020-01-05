import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostService } from '../../services/post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  posts: Post[];
  currentPost: Post = {

    id: 0,
    title: '',
    body: ''

  };

  isEdit = false;

  constructor(private postService: PostService) { }

  ngOnInit() {

    this.postService.getPosts().subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    });

  }

  onNewPost(post: Post) {

    this.posts.unshift(post);
  }

  editPost(post: Post) {

    this.currentPost = post;
    this.isEdit = true;
  }

  updatedPost(post: Post) {

    const updatedPostId = post.id;
    this.posts.forEach((curr, index) => {

      if (curr.id === updatedPostId) {
        this.posts.splice(index, 1);
        this.posts.unshift(post);
        this.isEdit = false;
      }
    });

  }

  deletePost(post: Post) {

    if (confirm('Are you sure to delete it ?')) {

      this.postService.deletePost(post.id).subscribe(() => {

        this.posts.forEach((curr, index) => {

          if (curr.id === post.id) {
            this.posts.splice(index, 1);
          }
        });

      });

    }

  }


}
