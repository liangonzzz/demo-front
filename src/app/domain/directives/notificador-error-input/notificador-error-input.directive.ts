import { AfterViewInit, ComponentRef, Directive, ElementRef, HostListener, Input, OnDestroy, Renderer2, ViewContainerRef } from '@angular/core';
import { AbstractControl, NgControl, ValidationErrors } from '@angular/forms';
import { debounceTime, Subscription } from 'rxjs';
import { MensajeErrorInputComponent } from '../../../application/shared/mensaje-error-input/mensaje-error-input.component';
import { ErrorSobrescritura as ErroresSobrescritura, ResolutorMensajesErrorService } from '../../services/error/resolutor-mensajes-error.service';

/**
 * Configura una etiqueta HTML para la visualización de los errores bajo los inputs
 */
@Directive({
  selector: '[appNotificadorErrorInput]',
  standalone: true

})
export class NotificadorErrorInputDirective implements AfterViewInit, OnDestroy {
  constructor(private ngControl: NgControl,
    private renderer: Renderer2,
    private el: ElementRef,
    private viewContainerRef: ViewContainerRef,
    private resolutorMensajesSrv: ResolutorMensajesErrorService) { }

  /** Mensajes de error proporcionados, estos se usan de manera prioritaria */
  @Input() mensajesErrorSobrescritura: ErroresSobrescritura = {};

  /** Clases aplicadas al contenedor generado */
  @Input() clasesContenedor: string = "";

  @Input() applyOnblur: boolean = false;

  private instanciaMensaje: ComponentRef<MensajeErrorInputComponent> | any = null;
  private componenteMensaje: MensajeErrorInputComponent | any = null;

  private control?: AbstractControl | any;
  private elementoNativo: HTMLElement | any;

  private controlSubscription: Subscription | any;

  public ngAfterViewInit(): void {
    // Obtengo una referencia al control de formulario y al elemento nativo
    this.configurarControl();
    this.configurarElementoNativo();

    // Si no existe, no prosigo en la creación de elementos
    if (!this.control) return;

    // Creo y configuro los elementos contenedores del input
    this.crearComponenteMensaje();
    const elementoDiv = this.crearElementoContenedor();
    this.insertarComponenteMensaje(elementoDiv);

    // Agrego la etiqueta al elemento
    this.insertarComponenteMensajeDespues(elementoDiv);

    this.controlSubscription = this.control
      .statusChanges
      .pipe(
        debounceTime(300)
      ).subscribe({
        next: (status: any) => {
          setTimeout(() => {
            // Valida que existan errores
            const { errors } = this.control;
            this.manejarErroresInput(errors, this.mensajesErrorSobrescritura);
          });
        },
      });
  }

  public ngOnDestroy(): void {
    this.controlSubscription?.unsubscribe();
  }

  /**
   * Crea el componente mensaje de error para la publicación de errores
   */
  private crearComponenteMensaje(): void {
    if (this.instanciaMensaje) return;
    this.instanciaMensaje = this.viewContainerRef.createComponent(MensajeErrorInputComponent);
    this.componenteMensaje = this.instanciaMensaje.instance;
  }

  /**
   * Inserta el componente mensaje error en el elemento especificado
   * @param elemento Elemento objetivo al qué insertar el componente
   */
  private insertarComponenteMensaje(elemento: HTMLElement): void {
    const elementoComponente: HTMLElement = this.instanciaMensaje.location.nativeElement;
    elemento.appendChild(elementoComponente);
  }

  /**
   * Inserta el componente mensaje error después del elemento especificado
   * @param elemento Elemento objetivo después del cual insertar el componente
   */
  private insertarComponenteMensajeDespues(elemento: HTMLElement): void {
    const parent = this.elementoNativo.parentNode;
    this.renderer.appendChild(parent, elemento);
  }

  /**
   * Muestra u oculta los mensajes de error según su existencia
   * @param errors Errores de validation provenientes del AbstractControl
   * @param erroresSobrescritura Errores definidos desde el consumidor para sobreescribir
   * los mensajes de error generados
   */
  private manejarErroresInput(errors: ValidationErrors, erroresSobrescritura?: ErroresSobrescritura): void {
    const hayErrores = errors && Object.keys(errors).length > 0;
    // Muestro los errores de input
    if (hayErrores) this.mostrarError(errors, erroresSobrescritura);
    else this.ocultarError();
  }

  /**
   * Muestra el mensaje de error para este input
   * @param errors Errores de validation provenientes del AbstractControl
   * @param erroresSobrescritura Errores definidos desde el consumidor para sobreescribir
   * los mensajes de error generados
   */
  private mostrarError(
    errores: ValidationErrors,
    erroresSobrescritura?: ErroresSobrescritura
  ): void {
    if (!this.control) return;

    const mensajeError = this.resolutorMensajesSrv.construirMensajeError(
      errores,
      erroresSobrescritura
    );

    this.componenteMensaje.mostrar();
    this.componenteMensaje.mensaje = mensajeError;

    this.renderer.addClass(this.elementoNativo, "input-error");
  }

  /**
   * Oculta el mensaje de error para este input
   */
  private ocultarError(): void {
    if (!this.control) return;

    this.componenteMensaje.mensaje = "";
    this.componenteMensaje.ocultar();

    this.renderer.removeClass(this.elementoNativo, "input-error");
  }

  /**
   * Crea un elemento HTML contenedor
   */
  private crearElementoContenedor(): HTMLElement {
    // Creo el componente div
    const element = this.renderer.createElement("div");
    // Asigno las clases al componente contenedor
    if (this.clasesContenedor)
      this.renderer.addClass(element, this.clasesContenedor);
    return element;
  }

  /**
   * Define el control de formulario para computar los errores
   */
  private configurarControl(): void {
    const { control } = this.ngControl;
    this.control = control;
  }

  /**
   * Define el elemento nativo de esta directiva
   */
  private configurarElementoNativo(): void {
    this.elementoNativo = this.el.nativeElement as HTMLElement;
  }

  @HostListener('onClear')
  @HostListener('onBlur')
  @HostListener('blur')
  @HostListener('onFileSelect')
  onListenerBlur() {
    if (this.applyOnblur) {
      const { errors } = this.control;
      this.manejarErroresInput(errors, this.mensajesErrorSobrescritura);
    }
  }
}
