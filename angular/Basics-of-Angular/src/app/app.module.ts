import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { StrInterpolationComponent } from './str-interpolation/str-interpolation.component';
import { StrResetComponent } from './str-reset/str-reset.component';
import { ShowListComponent } from './show-list/show-list.component';
import { ShowListService } from './show-list/list-service.service';
import { DefaultPipesComponent } from './default-pipes/default-pipes.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { NewCustomPipe } from './custom-pipes/new-custom.pipe';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    StrInterpolationComponent,
    StrResetComponent,
    ShowListComponent,
    DefaultPipesComponent,
    CustomPipesComponent,
    NewCustomPipe,
    Child1Component,
    Child2Component,
    FavoriteComponent,
    ContentProjectionComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [ShowListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
