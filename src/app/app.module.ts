import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './services/login.service';
import { LocationCategoryComponent } from './components/location-category/location-category.component';
import { TopicService } from './services/topic.service';
import { TopicContentComponent } from './components/topic-content/topic-content.component';
import { MediaComponent } from './components/media/media.component';
import { PreviewComponent } from './components/preview/preview.component';
import { PublishModalComponent } from './modals/publish-modal/publish-modal.component';
import { BsModalRef, BsModalService, ComponentLoaderFactory, ModalModule, PositioningService } from 'ngx-bootstrap';
// import { NgbModalBackdrop } from '@ng-bootstrap/ng-bootstrap/modal/modal-backdrop';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LocationCategoryComponent,
    TopicContentComponent,
    MediaComponent,
    PreviewComponent,
    PublishModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule,
  ],
  entryComponents: [
    PublishModalComponent
  ],
  providers: [
    LoginService,
    TopicService,
    BsModalService,
    BsModalRef,
    ComponentLoaderFactory,
    PositioningService],
  bootstrap: [AppComponent]
})
export class AppModule { }
