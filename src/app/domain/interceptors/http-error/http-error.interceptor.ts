import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResolutorMensajesErrorService } from '../../services/error/resolutor-mensajes-error.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {  Message, MessageService } from 'primeng/api';
import { SpinnerState } from '../../services/states/spinner.state';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

   /**
   * @param spinnerState, se utiliza para visualizar, ocultar el spinner
   */
   
  constructor(private errorService: ResolutorMensajesErrorService,
              private messageService: MessageService,
              private spinnerState: SpinnerState) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
    
    
  ): Observable<HttpEvent<unknown>> {

    //this.spinnerState.displaySpinner();
   
        return next.handle(request).pipe(
         
          catchError((error) => {
        
            if (error instanceof HttpResponse && error.status === 404) {
           
              const errorMessage = `Resource not found: ${error.url}`;
              this.errorService.show(errorMessage);
              
              // Crear un HttpResponse personalizado para el error 404
              const notFoundResponse = new HttpResponse<string>({
                status: 404,
                statusText: 'Not Found',
                url: request.url,
                body: errorMessage,
              });
            
              //this.spinnerState.hideSpinner();
              return of(notFoundResponse);
            }

            let errorMessage = '';
            if (error instanceof ErrorEvent) {
           
              errorMessage = `Client-side error: ${error.error.message}`;
            } else {
           
              errorMessage = `Server-side error: ${error.status} ${error.message}`;
            }
         
            this.errorService.show(errorMessage);
            // Aquí agregamos el mensaje de error al MessageService
            // Crear un mensaje de error de tipo 'Message'
            const errorDetail: Message = {
              severity: 'error', // 'error' es el nivel de severidad para un mensaje de error
              summary: 'Error', // El resumen del mensaje de error
              detail: errorMessage, // El detalle del mensaje de error
            };

            //this.messageService.add(errorDetail); 
            // Crear un HttpResponse de error genérico
            const genericErrorResponse = new HttpResponse<string>({
              status: error.status || 500,
              statusText: 'Error',
              url: request.url,
              body: errorMessage,
            });
            //this.spinnerState.hideSpinner();
            return of(genericErrorResponse);
          })
        );
      
  }  
}
