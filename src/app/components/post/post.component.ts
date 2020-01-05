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



}
