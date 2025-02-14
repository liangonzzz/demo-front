import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**PRIMENG */

import { DropdownModule } from 'primeng/dropdown';
import {CheckboxModule} from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { DialogModule } from 'primeng/dialog';
import { DialogService } from 'primeng/dynamicdialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { StepsModule } from 'primeng/steps';
import { FloatLabelModule } from 'primeng/floatlabel';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputOtpModule } from 'primeng/inputotp';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import { FileUploadModule } from 'primeng/fileupload';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ReactiveFormsModule } from '@angular/forms';

/** Componentes */
import { LoginNuevoComponent } from './Login/login-nuevo/login-nuevo.component';
import { LoginPrincipalComponent } from './Login/login-principal/login-principal.component';
import { RestablecerComponent } from './Login/restablecer/restablecer.component';
import { ConfirmarComponent } from './Login/confirmar/confirmar.component';
import { ConfiContraComponent } from './Login/confi-contra/confi-contra.component';
import { ConfiCorreoComponent } from './Login/confi-correo/confi-correo.component';

/** Shared */
import { ButtonComponent } from '../shared/button/button.component';
import { NotificadorErrorInputDirective } from '../../domain/directives/notificador-error-input/notificador-error-input.directive';


@NgModule({
  declarations: [
    LoginNuevoComponent,
    LoginPrincipalComponent,
    RestablecerComponent,
    ConfirmarComponent,
    ConfiContraComponent,
    ConfiCorreoComponent,
    ButtonComponent,
    NotificadorErrorInputDirective
  ],
  imports: [
    CommonModule,
    DropdownModule,
    CheckboxModule,
    RadioButtonModule,
    CalendarModule,
    AutoCompleteModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    ButtonModule,
    FileUploadModule,
    DialogModule,
    ConfirmDialogModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    StepsModule,
    FloatLabelModule,
    SelectButtonModule,
    InputOtpModule,
    TooltipModule,
    ReactiveFormsModule
  ],
  exports: [ FloatLabelModule,
             NotificadorErrorInputDirective,
             ButtonComponent
   ],
  providers: [{ provide: DialogService, useValue: {} },
    MessageService, ConfirmationService,]
})
export class ComponentsModule { }
