import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from "./shared/authconfig.interceptor";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { GoVoteComponent } from './pages/go-vote/go-vote.component';
import { VoteSatisfaitComponent } from './pages/vote-satisfait/vote-satisfait.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { VoteNonSatisfaitComponent } from './pages/vote-non-satisfait/vote-non-satisfait.component';
import { VoteIndiferentComponent } from './pages/vote-indiferent/vote-indiferent.component';
import { VoteForServiceComponent } from './pages/vote-for-service/vote-for-service.component';
import { AddServiceComponent } from './pages/add-service/add-service.component';
import { SAVComponent } from './pages/sav/sav.component';
import { SavSatisfaitComponent } from './pages/sav-satisfait/sav-satisfait.component';
import { SavNonSatisfaitComponent } from './pages/sav-non-satisfait/sav-non-satisfait.component';
import { SavIndiferentComponent } from './pages/sav-indiferent/sav-indiferent.component';
import { DeleteProductComponent } from './pages/delete-product/delete-product.component';
import { AddPostsComponent } from './pages/add-posts/add-posts.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    AddProductComponent,
    GoVoteComponent,
    VoteSatisfaitComponent,
    ProductDetailsComponent,
    VoteNonSatisfaitComponent,
    VoteIndiferentComponent,
    VoteForServiceComponent,
    AddServiceComponent,
    SAVComponent,
    SavSatisfaitComponent,
    SavNonSatisfaitComponent,
    SavIndiferentComponent,
    DeleteProductComponent,
    AddPostsComponent,
    ReviewsComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
