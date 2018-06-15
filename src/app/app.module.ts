import{RouterModule} from '@angular/router'; 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import{AppRoutes} from 'src/app.routes.module';

import { AppComponent } from './app.component';
import { BookingComponent } from './component/booking/booking.component';
import { ViewComponent } from './component/view/view.component';
import { BookComponent } from './component/book/book.component';
import { EventComponent } from './component/event/event.component';
import { DetailComponent } from './component/detail/detail.component';
import { NavbarComponent } from './component/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    ViewComponent,
    BookComponent,
    EventComponent,
    DetailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
