import { Routes } from '@angular/router';
import { CepComponent } from './cep/cep.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';

export const routes: Routes = [
    {
        path: 'cep',
        component: CepComponent
    },
    {
        path: 'posts',
        component: PostsComponent
    },
    {
        path: '', 
        component: HomeComponent
    }
];
