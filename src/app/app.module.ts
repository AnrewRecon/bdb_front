import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './component/person/create/create.component';
import { ListComponent } from './component/person/list/list.component';
import { PersonService } from './service/person.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(), 
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
