import { NgModule } from '@angular/core';
import { HttpClient, HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

//import {  RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from "ng-recaptcha";

/**MODULES */
import { ComponentsModule } from './application/components/components.module';

@NgModule({ 
     declarations: [
        AppComponent,
      
       ],
     exports: [
    
       ],
    bootstrap: [AppComponent], 
    imports: [BrowserModule,
            AppRoutingModule,
            ProgressSpinnerModule,
            BrowserAnimationsModule,
         
            RouterModule,
            ComponentsModule
      ], 
       providers: [
        DatePipe,
        CurrencyPipe,
            
        /*{
            provide: RECAPTCHA_SETTINGS,
            useValue: {
                siteKey: environment.recaptcha.siteKey,
            } as RecaptchaSettings,
        },*/
       
        provideHttpClient(withInterceptorsFromDi())
    ] })
/**Para la configuración local del calendario */
export class AppModule { }
