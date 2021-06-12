import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Actions, EffectsModule } from '@ngrx/effects';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { ChatDrawerComponent } from '@modules/chat/chat-drawer/chat-drawer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatService } from '@modules/chat/services/chat.service';
import { ChatEffects } from '@modules/chat/effects/chat.effects';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChatRoutingModule,
    EffectsModule.forFeature([ChatEffects])
  ],
  providers: [
    ChatService, Actions
  ]
})
export class ChatModule {}
