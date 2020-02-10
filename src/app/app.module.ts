import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyOrderByPipe } from './shared/sort.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, MyOrderByPipe],
  bootstrap: [AppComponent],
  entryComponents: [],
  providers: [MyOrderByPipe]
})
export class AppModule { }
