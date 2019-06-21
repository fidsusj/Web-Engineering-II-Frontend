import { BrowserModule } from '@angular/platform-browser';
import {Inject, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YellPipe } from './yell.pipe';
import { TodoComponent } from './todo/todo.component';
import { TestDirective } from './test.directive';
import { ClickHandlerDirective } from './click-handler.directive';
import {APP_NAME} from './appname';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    YellPipe,
    TodoComponent,
    TestDirective,
    ClickHandlerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide: APP_NAME, useValue: 'My App'}],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(@Inject(APP_NAME) name: string) {
    console.log(name);
  }
}
