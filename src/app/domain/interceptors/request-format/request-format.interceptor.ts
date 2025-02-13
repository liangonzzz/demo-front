import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpHeaders } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable, finalize, tap } from 'rxjs';
  import { environment } from 'src/environments/environment';
  import { RouterConstant } from '../../constants/router.constant';
  import { TransversalConstant } from '../../constants/transversal.constant';
  /**
 * Interceptor que permite configurar la seguridad y el spinner para
 * cada peticion HTTP que realiza el usuario
 */
  @Injectable()
  export class RequestFormatInterceptor implements HttpInterceptor {
     /**
   * @param spinnerState, se utiliza para visualizar, ocultar el spinner
   */
  /**URL que ser descarta el JWT, ya que en ella es que retorna el JWT */
     private apiUrlBack =environment.apiServiceComponentBack + RouterConstant.ROUTER_QUERY_CLIENT;
     constructor() {}

     intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
       // se configura el spinner para esta peticion
       // this.spinnerState.displaySpinner();
       /*
   
      
       }*/
   
       const token = localStorage.getItem('jwtToken');
   
       let clonedRequest = request.clone();
       
       if (this.requiresAuthorization(request.url) && token && !request.headers.has('Authorization-Token')) {
      
        request = request.clone({
          setHeaders: {
            "Authorization-Token": `${token}`
          }
        });
       
               
        return next.handle(request);
      }
      
    

       return next.handle(request).pipe(
        tap((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            const headers = event.headers;
           
            const newAuthToken = event.headers.get('Authorization-Token');
           
            if (newAuthToken) {
              localStorage.setItem('jwtToken', newAuthToken);
            }
          }
        })
      );
     }
    
     private requiresAuthorization(url: string): boolean {
    
      return  !TransversalConstant.URL_EXCLUDE_JWT.some(u => url.startsWith(u));
    }
   }