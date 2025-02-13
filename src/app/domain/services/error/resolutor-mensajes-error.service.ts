import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { MensajesValidacionInput } from '../../constants/mensajes-validacion-input.constant';

export type ErrorSobrescritura = { [key: string]: string };

export type EspecificacionErrorInput = {
  llaveError: string;
  parametros: { [key: string]: any }
};

@Injectable({
  providedIn: 'root'
})
export class ResolutorMensajesErrorService {
  private errorMessage: string = '';

  public show(message: string): string {
    // TODO: When we have the modals module or toasted display the error
    this.errorMessage = message;
    return message;
  }

  // Este método obtiene el mensaje de error almacenado en el servicio.
  public getErrorMessage(): string {

    return this.errorMessage;
  }

  /** Especifica parámetros de sobrescritura para errores de forma general */
  private errorSobrescrituraGeneral: ErrorSobrescritura = {};

  /**
   * Construye un mensaje de error utilizando el primer error reportado
   * @param error El error de validación generado por el AbstractControl
   * @param erroresSobrescritura Errores definidos desde el consumidor para sobreescribir
   * los mensajes de error generados
   * @returns Un string con el mensaje de error correspondiente o indefinido
   *  si hay casos no funcionales para el error
   */
  public construirMensajeError(errors: ValidationErrors, erroresSobrescritura?: ErrorSobrescritura): string {
    const error: any = this.obtenerPrimerError(errors);
    return this.resolverMensajeError(error, erroresSobrescritura);
  }

  /**
   * Resuelvo el mensaje de error según los errores
   * @param error La especificación del error generada; llave y parámetros de error
   * @param erroresSobrescritura Errores definidos desde el consumidor para sobreescribir
   * los mensajes de error generados
   * @returns Un mensaje de error construido en base a los parámetros de error proporcionados
   */
  public resolverMensajeError(error: EspecificacionErrorInput, erroresSobrescritura?: ErrorSobrescritura | any): string {
    const { llaveError, parametros } = error;

    // Elegimos según la prioridad de mensajería actual
    // Primero se busca en los mensajes de sobrescritura provistos
    // desde la entrada de la directiva
    // Segundo, se busca en los mensajes que provienen de los mensajes
    // generales definidos en el servicio
    // Tercero y último, se busca en los mensajes constantes predeterminados
    // Retorna el primer mensaje que se encuentre.
    // Si ninguno de estos coincide se retorna el mensaje por defecto
    const errorResuelto =
      this.resolverMensajeSobrescritura(llaveError, erroresSobrescritura)
      ?? this.resolverMensajeSobrescrituraGeneral(llaveError)
      ?? this.resolverMensajePredefinido(llaveError)
      ?? MensajesValidacionInput.default;
    // Si existe, formateo el error usanado los parámetros

    return this.formatearMensaje(errorResuelto, parametros);
  }

  /**
   * Define los mensajes de error de sobrescritura para
   * esta instancia del servicio
   * @param errores Los errores de sobrescritura a definir como generales
   */
  public definirErroresSobrescritura(errores: ErrorSobrescritura) {
  if (!errores) return;
    this.errorSobrescrituraGeneral = errores;
  }

  /**
   * Resuelve el mensaje de error según los mensajes predefinidos en
   * el proyecto
   * @param llaveError Llave de error para determinar el mensaje a retornar
   * @returns Retorna el mensaje de error si existe, o undefined
   */
  private resolverMensajePredefinido(llaveError: string): string | undefined {
    // Si no existe la llave, obtengo un valor por defecto como mensaje de error
    if (!(llaveError in MensajesValidacionInput)) return undefined;
    return MensajesValidacionInput[llaveError];
  }

  /**
   * Resuelve el mensaje de error según los mensajes de sobrescritura
   * proporcionados por el consumidor
   * @param llaveError Llave de error para determinar el mensaje a retornar
   * @param errores Un objeto con todos los errores proporcionados por el consumidor
   * @returns Retorna el mensaje de error si existe, o undefined
   */
  private resolverMensajeSobrescritura(llaveError: string, errores: ErrorSobrescritura): string | undefined {
    // Si el objeto de errores no existe
    // O si no tiene errores registrados
    // O si la llave de error no está definida en los errores
    if (!errores
      || Object.keys(errores).length == 0
      || !(llaveError in errores))
      return undefined;
    return errores[llaveError];
  }

  /**
   * Resuelve el mensaje de error según los mensajes de sobrescritura
   * proporcionados de forma general por el consumidor
   * @param llaveError Llave de error para determinar el mensaje a retornar
   * @returns Retorna el mensaje de error si existe, o undefined
   */
  private resolverMensajeSobrescrituraGeneral(llaveError: string): string | undefined {
    // Si el objeto de errores no existe
    // O si no tiene errores registrados
    // O si la llave de error no está definida en los errores
    const errores = this.errorSobrescrituraGeneral
    if (!errores
      || Object.keys(errores).length == 0
      || !(llaveError in errores))
      return undefined;
    return errores[llaveError];
  }

  /**
   * Formateo el mensaje dado usando los parámetros entregados
   * @param mensaje Plantilla de mensaje de error a formatear
   * @param parametros: Parámetros informativos del error
   * @returns Un string formateado con los parámetros aplicados
   */
  private formatearMensaje(mensaje: string, parametros: { [key: string]: any }): string {
    let mensajeFinal = mensaje;
    for (const parametro in parametros) {
      // Obtengo el valor del parámetro
      const valor = parametros[parametro];
      // la llave consiste en un numeral seguido del parámetro en mayúsculas
      // #EJEMPLO, #EDAD, #MIN, #CURRENTDATE
      const llave = `#${parametro.toUpperCase()}`;
      mensajeFinal = mensajeFinal.replace(llave, valor);
    }
    // Retorno el mensaje formateado
    return mensajeFinal;
  }


  /**
   * Obtiene el primer mensaje de error
   * @param errors Errores de validación generados por el AbstractControl
   * @returns El primero de los errores que se reporten en la lista de errores
   */
  private obtenerPrimerError(errors: ValidationErrors): EspecificacionErrorInput | null {
    const entries = Object.entries(errors);
    // No existen errores de validación
    if (!entries || entries.length == 0) return null;

    // Resuelvo el primer error
    const [llaveError, parametros] = entries[0];
    return { llaveError, parametros } as EspecificacionErrorInput;
  }
}
