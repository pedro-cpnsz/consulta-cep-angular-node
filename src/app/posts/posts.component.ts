import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent implements OnInit {
  posts: any[] = [];

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.postsService.buscarPosts().subscribe(
      (data: any[]) => {
        this.posts = data;
      },
      (error) => {
        console.error('Erro ao carregar posts', error);
      }
    );
  }
}
