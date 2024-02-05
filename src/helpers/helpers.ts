import Swal, { SweetAlertIcon } from "sweetalert2";

export const alertSwal = (
  title: string,
  text: string,
  icon: SweetAlertIcon = "warning",
  confirmButtonText: string = "Aceptar",
  showCancelButton: boolean = false,
  onConfirm?: () => void,
  onCancel?: () => void,
  textCancelButton?: string
): Promise<unknown> => {
  return Swal.fire({
    title: title,
    text: text,
    icon: icon,
    confirmButtonText: confirmButtonText,
    showCancelButton: showCancelButton,
    confirmButtonColor: "#4caf50",
    html: `<style>.swal2-container{z-index: 9999;}</style> <span> ${text}</span>`,
    allowOutsideClick: false,
    preConfirm: () => {
      if (onConfirm) {
        onConfirm();
      }
    },
    showCloseButton: onCancel !== undefined,
    cancelButtonText: textCancelButton ?? "Cancelar",
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.cancel && onCancel) {
      onCancel();
    }
  });
};

export const apiKey = import.meta.env.VITE_APP_API_KEY_GOOGLE_MAPS;
