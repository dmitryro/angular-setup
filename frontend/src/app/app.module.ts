import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { Actions, EffectsModule } from '@ngrx/effects';
import { ChatModule } from '@modules/chat/chat.module';
import { LoginModule } from '@modules/login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '@components/home/home.component';
import { ChatService } from '@modules/chat/services/chat.service';
import { LoginService } from '@modules/login/services/login/login.service';
import { chatReducer } from '@modules/chat/reducers/chat.reducer';
import { loginReducer } from '@store/reducers/login.reducer';
import { ChatComponent } from '@modules/chat/chat.component';
import { ChatDrawerComponent } from '@modules/chat/chat-drawer/chat-drawer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatComponent,
    ChatDrawerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ChatModule,
    LoginModule,
    AppRoutingModule,
    EffectsModule.forRoot([]),
    StoreModule.forFeature('chat', chatReducer),
    StoreModule.forFeature('login', loginReducer),
    StoreModule.forRoot({login: loginReducer, chat: chatReducer}),

  ],
  providers: [ChatService, LoginService, Actions],
  bootstrap: [AppComponent]
})
export class AppModule { }
