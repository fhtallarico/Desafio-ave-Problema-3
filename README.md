# Problema

Se desea crear un validador para la contraseña de un sitio web, pero esta debe ser muy
segura, para ello el cliente solicita los siguientes requerimientos para el password:

● Debe tener al menos 16 caracteres.

● Debe tener letras minúsculas y mayúsculas.

● No puede tener 2 letras iguales consecutivas.

● Debe contener al menos 4 números.

● No puede tener 2 números iguales consecutivos.

● Debe tener al menos 2 caracteres especiales (!@#$%ˆ&*-_+=?) pero ninguno de
ellos puede repetirse en ninguna posición y además los caracteres no pueden
estar juntos.

● No se puede usar el número 0.

● No se puede colocar espacios.

Nota: No debe usar expresión regular.

## Instrucciones

1. Clona el repositorio desde GitHub.

2. Abre el archivo `validator.js`.

3. Edita la constante en la linea 1 para modificar la contraseña a probar.

4. Ejecuta el archivo `validator.js` con Node.js en la terminal.

```bash
node validator.js
