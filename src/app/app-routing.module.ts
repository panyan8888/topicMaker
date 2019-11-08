import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LocationCategoryComponent } from './components/location-category/location-category.component';
import { TopicContentComponent } from './components/topic-content/topic-content.component';
import { MediaComponent } from './components/media/media.component';
import { PreviewComponent } from './components/preview/preview.component';


const routes: Routes = [
  { path: '', redirectTo: '/location', pathMatch: 'full' },
  { path: 'location', component: LocationCategoryComponent },
  { path: 'topic-content', component: TopicContentComponent },
  { path: 'media', component: MediaComponent},
  { path: 'preview', component: PreviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
