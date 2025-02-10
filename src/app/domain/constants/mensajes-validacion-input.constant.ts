export const MensajesValidacionInput: any = {
    default: 'Este campo no es válido',
    required: 'Requerido',
    email: 'Este campo debe contener un email válido',
    minlength: 'Este campo debe contener mínimo #REQUIREDLENGTH caracteres y solo has ingresado #ACTUALLENGTH',
    maxlength: 'Este campo debe contener #REQUIREDLENGTH caracteres como máximo',
    min: 'Este campo solo admite valores mayores o iguales a #MIN',
    max: 'Este campo solo admite valores menores o iguales a #MAX',
    confirmationError: 'Confirmación fallida, escríbelo nuevamente',
    palabrasReservadas: 'Caracteres inválidos',
    nonNumeric: ''
} as const;