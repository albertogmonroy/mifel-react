/* Helper para convertir el texto a mayusculas */
export const handleUpperCase = (e: React.ChangeEvent<HTMLInputElement>) => {
  e.target.value = e.target.value.toUpperCase();
};