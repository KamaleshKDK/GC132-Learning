import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from './post-service/post.service';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any = '';

  constructor(private service: PostService) { }

  ngOnInit(): void {
    // Get Method
    this.service.getPosts().subscribe((response: any) => {
      console.log(this.posts = response);
    }), (error: Response) => {
      alert("It is Unexpected Error")
      console.log(error);

    }
  }

  // Create Post Method

  createPost(inputTitle: HTMLInputElement) {
    let postCreation: any = { title: inputTitle.value }
    this.posts.splice(0, 0, postCreation);
    this.service.createPosts(postCreation).subscribe((response: any) => {
      postCreation['id'] = response;

      console.log(response);
    })
  }

  updateData(post: any) {
    this.service.updatePost(post).subscribe((response: any) => {
      console.log(response);

    })
  }

  deletePost(post: any) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1)
    this.service.deletePost(post.id).subscribe((response: any) => {
    }), (error: Response) => {
      console.log(error);

    }

  }
}
