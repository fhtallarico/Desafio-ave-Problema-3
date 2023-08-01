const passwordToTest = "Abcdefghijklmnop1234+!";

// Definimos los caracteres especiales permitidos
const specialCharacters = "!@#$%^&*-_+=?";

// Requerimientos para el password
const MINIMUM_LENGTH = 16
const MINIMUM_NUMBERS = 4
const MINIMUM_SPEC_CHARS = 2

// Función principal que valida la contraseña
const validatePassword = (password) => {
  // Comprobaciones individuales
  validateLength(password, MINIMUM_LENGTH);
  validateLowerAndUpperCase(password);
  validateConsecutiveEquals(password, "string");
  validateMinimumNumbers(password, MINIMUM_NUMBERS);
  validateSpecialChars(password, MINIMUM_SPEC_CHARS);
  validateChars(password, '0');
  validateChars(password, ' ')

  return 'Contraseña aceptada'
};

// Función que verifica si la contraseña tiene al menos la longitud mínima requerida
const validateLength = (password, length) => {
  if (password.length < length) {
    throw new Error(`La contraseña debe tener ${length} caracteres de largo.`);
  }
};

// Función que verifica si la contraseña tiene al menos una letra mayúscula y una minúscula
const validateLowerAndUpperCase = (password) => {
  let hasLower = false;
  let hasUpper = false;

  for (let char of password) {
    if (char >= "A" && char <= "Z") {
      hasLower = true;
    } else if (char >= "a" && char <= "z") {
      hasUpper = true;
    }
  }

  if (!hasLower || !hasUpper) {
    throw new Error("La contraseña debe tener letras mayusculas y minusculas.");
  }
};

// Función que verifica si la contraseña tiene caracteres repetidos consecutivos
const validateConsecutiveEquals = (password) => {
  for (let i = 1; i < password.length; i++) {
    if (password[i] === password[i - 1]) {
      throw new Error(
        `La contraseña no debe tener caracteres repetidos consecutivos`
      );
    }
  }
};

// Función que verifica si la contraseña tiene al menos el número mínimo de números
const validateMinimumNumbers = (password, min) => {
  const totalNumbers = password.split("").filter((n) => n >= '0' && n <= '9');
  
  if (totalNumbers.length < min) {
    throw new Error(`La contraseña debe tener ${min} numeros`);
  }
};

// Función que verifica si la contraseña tiene al menos el número mínimo de caracteres especiales
const validateSpecialChars = (password, min) => {
  const passwordArray = password
    .split("")
    .filter((n) => specialCharacters.includes(n));

  if (passwordArray.length < min) {
    throw new Error(
      `La contraseña debe tener por lo menos ${min} caracter/es especial/es (!@#$%ˆ&*-_+=?)`
    );
  }
};

// Función que verifica si la contraseña contiene un carácter específico
const validateChars = (password, char) => {
  const hasChar = password.includes(char);

  if (char === ' ') {
    char = 'espacio en blanco'
  }

  if (hasChar) {
    throw new Error(`La contraseña no debe usar ${char}`);
  }
};

// Ejemplo de uso
console.log(validatePassword(passwordToTest));
