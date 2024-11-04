# Ejercicios SWI
Ejercicios relacionados con NodeJS para la asignatura de Sistemas Web I

## Ejercicio 3

- Crea un servidor en node.js
- Que al cargar la página principal muestre una contraseña aleatoria
- Generada a partir de X palabras aleatorias seleccionadas de un diccionario
- El número de palabras (X) está definido como parámetro en la query
    - Accesible en req.url

## Ejercicio 4

Web scraping
- Extraer datos de páginas web
- De forma automática haciendo uso de bots
- Una vez extraída la información se procesa
- Se repite el proceso a lo largo del tiempo para comparar la evolución de los datos
- Ejemplos:
    - Google extrayendo información de las webs para el buscador
    - Internet Archive para conservar webs antiguas
    - Páginas de comparación de precios
- Crea un servidor
    - Inicializa package.json
    - Que descargue periódicamente el HTML de una web
    - Que lo procese para extraer una información específica
    - Opcional: usa algún paquete como cheerio para manipular el DOM
- Cuidado
    - Algunas webs requieren JS para visualizarse
    - No hagas muchas peticiones en poco tiempo