import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { PoModule } from '@po-ui/ng-components';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, PoModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
