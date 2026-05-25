# simulacodigos

# 📁 Terminal Breach - Sistemas de Contraseñas Criptográficas

![Status: Active](https://img.shields.io/badge/STATUS-ACTIVE-brightgreen)
![Security Level: Critical](https://img.shields.io/badge/SECURITY__LEVEL-CRITICAL-red)
![Interface: Responsive](https://img.shields.io/badge/INTERFACE-RESPONSIVE-blue)

Aplicación web interactiva basada en una terminal de comandos estilo *Cyberpunk / Hacker* (Verde Neón y Rojo de Alerta). El sistema implementa y simula conceptos avanzados de criptografía posicional, flujos caóticos reversibles y codificación matricial abstracta utilizando secuencias numéricas de Fibonacci y números primos.

---

## 🏗️ Estructura del Proyecto (Orden de Carpetas)

Para que el sistema funcione correctamente y los enlaces relativos carguen todos los estilos, scripts e imágenes, el árbol de directorios debe organizarse de la siguiente manera:

[ ANÁLISIS DEL PROBLEMA Y LÓGICA CRIPTOGRÁFICA ]
                    Los métodos de cifrado simétrico tradicionales emplean claves estáticas que vuelven a los datos vulnerables ante análisis de frecuencias y ataques de diccionario, ya que un mismo carácter siempre se traduce en el mismo resultado. Este programa resuelve dicha vulnerabilidad mediante un **desplazamiento criptográfico dinámico, polialfabético y no lineal**. La lógica del sistema procesa cada carácter de una palabra convirtiéndolo a su valor decimal ASCII y sumándole un número primo extraído estrictamente de la sucesión de Fibonacci según la posición que ocupe la letra. Al depender de la posición en la cadena, caracteres idénticos generarán outputs completamente distintos.

// GENERADOR DE PATRÓN PRIMO
PROBLEMA: Los generadores pseudoaleatorios lineales estándar son predecibles si un atacante intercepta la semilla inicial, comprometiendo los sistemas de cifrado por flujo.
SOLUCIÓN: Este submódulo mitiga la predictibilidad mediante un algoritmo de forzado matemático irreversible. Al seleccionar un primo base ($x$), el sistema aplica la ecuación no lineal $(3x + 1)$ para proyectar un salto exponencial. Debido a que el resultado rara vez es un número primo, el script ejecuta un bucle iterativo que evalúa y avanza secuencialmente hasta hallar el siguiente número primo absoluto en la matriz numérica. Este ciclo se repite en cascada durante seis generaciones consecutivas, destruyendo cualquier correlación lineal o simetría estadística. El resultado es una "firma digital" o cadena de bloques caótica (representada mediante vectores separados por el pulso ⚡), ideal para simular la dispersión de llaves criptográficas dinámicas de alta seguridad.

MATRIZ FIBONACCI 24-BIT (* / _)
PROBLEMA: Los sistemas de autenticación basados en texto plano son fácilmente vulnerables a ataques de interceptación visual de contraseñas.
SOLUCIÓN: Este apartado procesa un rango numérico de entrada (1-40) y genera la secuencia iterativa de Fibonacci hasta dicha posición. Acto seguido, calcula el producto acumulado de todos los factores previos de la serie de manera no lineal. Debido al crecimiento exponencial de la sucesión, estas magnitudes masivas se convierten a su representación en sistema binario puro y se truncan de forma estricta a un bloque de 8 bits significativos. Finalmente, para garantizar el hermetismo visual, los pulsos binarios se codifican mediante un mapa de caracteres abstracto: los bits activos (1) mutan en asteriscos (`*`) y los pasivos (0) en guiones (`_`), vectorizando la información en un patrón puramente gráfico e indescifrable a simple vista.

```text
Sistemas-Contraseñas/
│
├── index.html               # Estructura principal y maquetación de pestañas (Tabs)
│
├── CSS/
│   └── style.css            # Estilos unificados (Hacker verde/rojo y Media-Queries)
│
├── script/
│   └── script.js           # Lógica matemática (BigInt, Fibonacci, Primos y Cifrado)
│
└── Imagenes/
    ├── img1.png             # Elemento decorativo visual 1 (Efecto Matrix)
    └── img2.png             # Elemento decorativo visual 2 (Efecto Matrix)

'''
