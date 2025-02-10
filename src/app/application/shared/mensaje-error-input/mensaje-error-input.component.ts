import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-mensaje-error-input',
  templateUrl: './mensaje-error-input.component.html',
  styleUrls: ['./mensaje-error-input.component.scss']
})
export class MensajeErrorInputComponent {
  /** Mensaje de error a mostrar en el componente */
  @Input() public mensaje: string | any;  

  /** Enlaza las clases del host con este string */
  @HostBinding('class')
  private clasesMensaje?: string;

  /** Almacena el estado de visibilidad del componente */
  private visible = false;

  /**
   * ¿Es visible el mensaje de error?
   */
  public esVisible(): boolean {
    return this.visible;
  }

  /**
   * Muestra el mensaje de error
   * @param mensaje Mensaje de error a mostrar
   */
  public mostrar(mensaje: any = undefined): void {
    // Si existe un mensaje de error, lo asigno
    if (mensaje) this.mensaje = mensaje;
    // Marco el componente como visible
    this.visible = true;
    this.actualizarClases(this.visible);
  }

  /**
   * Oculta el mensaje de error
   */
  public ocultar(): void {
    // Marco el componente como no visible
    this.visible = false;
    this.actualizarClases(this.visible);
  }

  /**
   * Actualiza las clases para reflejar la visibilidad en el componente
   */
  private actualizarClases(visible: boolean) {
    // Aplico las clases si es visible
    this.clasesMensaje = visible ? "visible" : "";
  }
}
