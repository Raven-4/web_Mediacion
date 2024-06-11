# Manual de instalación:

## Programas a descargar a mano:

https://nodejs.org/en/download

https://www.docker.com/products/docker-desktop/

## scripts a ejecutar:

Ejecutar "instalacion.exe" ubicado en la carpeta raíz del proyecto

# Manual de uso:

 - Iniciar servidor:

   - Ejecutar "abrir_servidor.exe" ubicado en la carpeta raíz del proyecto, dejar en ejecución mientras se esté utilizando la base de datos.

 - Iniciar página web:

   - Ejecutar "iniciar_web.exe" ubicado en la carpeta raíz del proyecto, dejar en ejecución mientras se esté utilizando la página web.

 - Acceder a la base de datos MariaDB:

   - Ejecutar script "acceder_bd.exe"

     - Usuario: root

     - Contraseña: root

     - Al acceder se encontrará con distintas bases de datos, la usada para la web se llama web_mediacion

# web_Mediacion

descargar contenedores docker:

docker run -d --name mariadb-tfg -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -v C:\Users\guija\Desktop\web_Mediacion\DB\mariadb_data:/var/lib/mysql mariadb

docker run --name tfg-phpmyadmin -d --link mariadb-tfg:db -p 8080:80 phpmyadmin

activar servidor:

cd C:\Users\guija\Desktop\web_Mediacion\BACKEND

node server.js

# DOCUMENTACIÓN

# Portada segundo modelo oficial, cos datos de identificación do traballo

# Dedicatoria (opcional).

# Agradecementos (opcional).

# Índice de contidos.

# Índice de ilustracións (se procede).

#  Índice de táboas (se procede).

# Introdución:

Este documento detalla el trabajo efectuado en el proyecto final de carrera en Ingeniería Informática. El proyecto trata de diseñar una herramienta web intuitiva para gestionar los procesos de mediación en un instituto de secundaria.

## Motivación

Los conflictos han sido un problema continuo en todos los ámbitos de la vida, sobre todo en momentos de cambio e inseguridad como puede ser la adolescencia. A este problema se le ha dado una solución, la mediación de conflictos.  

La mediación es una forma de lograr la paz negociada en un conflicto. Esta se basa en agregar una tercera persona que debe ser neutral al problema que ayudará a las partes en conflicto a llegar a un acuerdo común. [1] En las aulas, cuando existe un sistema de mediación, este suele ser un equipo conformado por un coordinador (un profesor) y mediadores (alumnos voluntarios a participar en el equipo de mediación). Cuando surge un conflicto, es el coordinador el que enviará a 2 mediadores a hablar con la parte perjudicada y si esta acepta la mediación, comenzará el proceso en donde los mediadores estudiarán el conflicto, y posteriormente se reunirán con las partes en conflicto para llegar a un acuerdo.[2]

Este proyecto propone realizar una aplicación web para ayudar al equipo de mediación a automatizar sus tareas y datos, y que así se puedan hacer las mediaciones de una forma más efectiva y eficaz.

# Objetivos: 

## Presentación del problema:

Actualmente, la gestión de los casos de mediación en el entorno educativo se hace de forma manual. Esto puede llevar a pérdidas de información, retrasos en el seguimiento de los casos y dificultades para mantener el registro de los casos accesibles al equipo de mediación, también puede dificultar al coordinador la supervisión y evaluación eficaz de los casos.

## Objetivo principal:

Este proyecto tiene la intención de desarrollar una herramienta centralizada de gestión de casos de mediación que permita al equipo de mediación realizar su trabajo de forma más efectiva. Esta herramienta, accesible via web, asegurará el almacenamiento seguro y organizado de la información, así como proporcionar herramientas para facilitar el seguimiento de los casos.

## Objetivos específicos:

 - Desarrollo de una Base de Datos Centralizada:
   - Alcance: esta base de datos almacenará información tanto del equipo de mediación, como de los casos que se les presenten.

 - Desarrollo de un servidor para acceder a la base de datos:
   - Alcance: permitir que la página web pueda acceder a la base de datos para poder extraer e insertar información.

 - Implementación de funcionalidades de Seguimiento de Casos:
   - Alcance: Desarrollar funcionalidades que permitan al equipo de mediadores registrar y actualizar los casos de mediación, así como realizar su valoración final y guardar informes del caso.

 - Desarrollo de la Interfaz de Usuario:
   - Alcance: Diseñar una interfaz de usuario que sea intuitiva y accesible para el equipo de mediación. 

# Resumen de la solución propuesta: 

## Solución aportada:

La solución propuesta para el problema presentado anteriormente es la creación de un sistema de gestión de los casos de mediación centralizado y digitalizado. Esta aplicación se ha elegido hacer via web para ayudar al acceso por parte de los usuarios sin que estos mismos tengan la necesidad de descargar ningún tipo de programa. El sistema permite una gestión eficiente y organizada de los casos, proporcionando herramientas para el seguimiento y evaluación continua de estos.

El sistema tiene una base de datos centralizada que almacena al equipo de mediación y los casos de mediación, incluyendo los detalles de los alumnos involucrados, los mediadores asignados y la documentación y estado del caso. Además, contiene una interfaz de usuario intuitiva que permitirá al usuario interactuar con el sistema de manera eficiente, independientemente de su nivel técnico.

# Metodología:

Para el desarrollo del sistema se ha utilizado una metodología ágil, en concreto se ha utilizado Scrum adaptado a las necesidades del proyecto.

## Metodologías ágiles:

Las metodologías ágiles son un un método alternativo de desarrollo de software. Esta metodología surge por la necesidad de cambiar los métodos convencionales, modelos de desarrollo líneal como puede ser el módelo en cascada, que resultaban poco efectivos para los equipos que desarrollaban software, pues este tipo de desarrollo está expuesto a constantes cambios y modificaciones porque las necesidades de los clientes también están en constante cambio.

Por la necesidad de este cambio, en febrero de 2001, se reunieron 17 personas para buscar un terreno común en el desarrollo de software. A esta reunión acudieron los representantes de varias metodologías ágiles ya existentes como "Extreme Programing" o Scrum. La reunión daría resultado a la redacción y firma del "Agile Manifesto" o Manifiesto por el desarrollo Ágil. El manifiesto enfatiza la organización basada en la colaboración y el respeto, promoviendo un entorno que considera a las personas como fundamentales para el éxito.

El "Agile Manifesto" consta de 4 valores principales para la gestión ágil de proyectos y, a partir de estos valores, se desarrollaron 12 principios.

Los valores del Manifiesto ágil:

1. Individuos e interacciones sobre procesos y herramientas

2. Software funcionando sobre documentación extensiva

3. Colaboración con el cliente sobre negociación contractual

4. Respuesta ante el cambio sobre seguir un plan

Los 12 principios del manifiesto ágil:

1. Nuestra mayor prioridad es satisfacer al cliente mediante la entrega temprana y continua de software con valor.

2. Aceptamos que los requisitos cambien, incluso en etapas tardías del desarrollo. Los procesos Ágiles aprovechan el cambio para proporcionar ventaja competitiva al cliente.

3. Entregamos software funcional frecuentemente, entre dos semanas y dos meses, con preferencia al periodo de tiempo más corto posible.

4. Los responsables de negocio y los desarrolladores trabajamos juntos de forma cotidiana durante todo el proyecto.

5. Los proyectos se desarrollan en torno a individuos motivados. Hay que darles el entorno y el apoyo que necesitan, y confiarles la ejecución del trabajo.

6. El método más eficiente y efectivo de comunicar información al equipo de desarrollo y entre sus miembros es la conversación cara a cara.

7. El software funcionando es la medida principal de progreso.

8. Los procesos Ágiles promueven el desarrollo sostenible. Los promotores, desarrolladores y usuarios debemos ser capaces de mantener un ritmo constante de forma indefinida.

9. La atención continua a la excelencia técnica y al buen diseño mejora la Agilidad.

10. La simplicidad, o el arte de maximizar la cantidad de trabajo no realizado, es esencial.

11. Las mejores arquitecturas, requisitos y diseños emergen de equipos auto-organizados.

12. A intervalos regulares el equipo reflexiona sobre cómo ser más efectivo para a continuación ajustar y perfeccionar su comportamiento en consecuencia.[3] 

## Scrum

Scrum fué desarrollado a principios de los años 90, y se redactó una guía, que se ha hido actualizando constantemente, en 2010, con el objetivo de ayudar a las personas a entender Scrum.

Según la "Scrum guide" o guía de scrum: "Scrum es un marco ligero que ayuda a las personas, equipos y organizaciones a generar valor a través de soluciones adaptables para problemas complejos." Es decir, requiere de un jefe de equipo denominado "Scrum Master", que facilitará un entorno en el que el propietario del producto, denominado "Product Owner", ornganizará el trabajo, y el equipo, o "Scrum Team", entregará el trabajo de forma incremental durante eventos de longitud fija, llamados "Sprints".

Scrum está basado en el empirismo (conocimiento a partir de la experiencia y toma de decisiones basada en la observación) y el pensamiento Lean (reducción de los desperdicios centrandose en lo esencial). Utiliza un enfoque iterativo e incremental y combina cuatro eventos formales que convergen en un evento principal, el Sprint. Esto es posible porque se aplican los pilares empíricos de Scrum: la transparencia, la inspección y la adaptación. Además, las personas que conformen el equipo deben seguir cinco valores: el compromiso, el enfoque, la apertura, el respeto y el coraje.

Scrum contiene un evento fundamental, el Sprint, el "latido del corazón de Scrum". Estos eventos son de longitud fija, durarán como máximo un mes y es donde se produce todo el trabajo del proyecto. Es importante mencionar que durante los sprints no se pueden hacer cambios de requisitos u objetivos porque pondría en peligro la continuidad del proyecto. Los sprints están divididos en 4 subeventos: La planificación o "Sprint Planning", se consituirá el trabajo a hacer durante el sprint; el Scrum diario o "Daily Scrum", son reuniones diarías en donde se insepcciona el progreso y, en caso de ser necesario, se ajustará el trabajo planeado; revisión del Sprint o "Sprint Review", al final del sprint se revisan los resultados proporcionados por el equipo;  y la retrospectiva del Sprint o "Sprint Retrospective", donde se junta el equipo para insepccionar los puntos fuertes y débiles del equipo, analizando tanto los problemas y soluciones que aparecieron durante el sprint, como las situaciones que fueron bien. [4]

## Aplicando Scrum a un proyecto individual

Al estar Scrum diseñado para equipos colaborativos, hay que hacer algunas modificaciones a sus principios y prácticas para poder aplicarlas a un proyecto individual. En cuanto a los roles (Product Owner, Scrum Master y Scrum Team) todos serán asumidos por la misma persona.

A la hora de realizar un sprint, este no cambiará mucho. El sprint seguirá siendo de longitud fija y ya no se harán los cuatro subeventos, sino tres de ellos, y los que se realicen tendrán ciertas modificaciones. A la hora de la planificación, esta no cambiará. El "Daily Scrum" si recibirá algún cambio, pues ya no hay equipo al que comunicar el progreso realizado, pero sí se podrá realizar una planificación de las tareas que se realizarán diariamente. A la hora de hacer un "Sprint Review", no se realizarán cambios. La retrospectiva del sprint, al estar orientada al trabajo en equipo, no se realizará.

Aplicando estos pequeños cambios, es posible la adaptación de la metodología ágil Scrum a un proyecto individual. Es este Scrum modificado, el que se usará a la hora de desarrollar el proyecto de gestión de casos de mediación. 

# Planificación y seguimento:

## Sprint 0 - Preparación inicial:

Duración planificada: 1 semana

El objetivo del sprint 0 fué configurar el entorno de desarrollo. Realizar la instalación de las herramientas necesarias para la realización del proyecto y la recopilación inicial de las historias de usuario (funcionalidades de la aplicación).

Duración real: 1 semana

## Sprint 1 - Análisis de requisitos:

Duración planificada: 1 semana

En el primer sprint, se analizó las necesidades concretas de la aplicación, así como sus expectativas. Se identificaron y documentaron los requisitos del sistema creando historias de usuario más detalladas.

Duración real: 1 semana

## Sprint 2 - Diseño de la arquitectura y la base de datos:

Duración planificada: 1 semana

En el segundo sprint, se diseñó la arquitectura del sistema creando el diagrama de arquitectura que incluye el Front-end, Back-end y la base de datos. También se hizo el modelo entidad-relación de la base de datos.

Duración real: 1 semana

## Sprint 3 - Desarrollo del backend y la base de datos:

Duración planificada: 2 semanas

El objetivo propuesto para este sprint, fué realizar el desarrollo de la base de datos en SQLite y el backend en PHP.

Durante este sprint surgieron distintos problemas. Empezando por la base de datos, se decidió cambiar SQLite por MySQL. Estos son distintos sistemas usados para la gestión de bases de datos. El motivo del cambio fué la dificultad encontrada a la hora de acceder desde el servidor backend, a la base de datos; pues SQLite es un sistema de gestión sin servidor, esto lo convierte en un sistema ineficiente para realizar una página web. Posteriormente se encontró otro problema al que no se le halló solución: al ejecutar el servidor MySQL, este no podía ser accedido de ninguna forma para acceder a sus datos, a pesar de que el servidor se ejecutaba correctamente; para solucionarlo se tomó la decisión de volver a cambiar el gestor de base de datos, utilizando finalmente MariaDB. También se decidió cambiar el lenguaje del backend, pasando de PHP a Node.js, que permite realizar el servidor de una forma más sencilla. Debido a estos problemas encontrados el sprint duró más de lo planificado.

Duración real: 3 semanas

## Sprint 4 - Desarrollo del frontend:

Duración planificada: 2 semanas

El cuarto sprint es el último del desarrollo de la aplicación. Durante este sprint se desarrolló todo el frontend de la aplicación, creando todas las páginas necesarias para su uso usando HTML. Se finalizó el sprint con la implementación de la interfaz de usuario. En ciertos momentos se necesitó cambiar ciertas partes del servidor backend, pero eso no demoró la duración del sprint.

Duración real: 2 semanas

## Sprint 5 - Pruebas finales y documentación:

Duración planificada: 2 semanas

En el quinto y último sprint se realizaron las últimas pruebas, encargándose de que la aplicación funcione correctamente y corrigiendo los errores restantes. También se redactó la documentación del proyecto

Duración real: 

# Arquitectura:

La arquitectura del sistema está diseñada de forma modular, para que sea fácil de mantener. Está compuesta de varios componentes interconectados que se pueden actualizar de manera independiente, sin que estos cambios influyan a las otras capas. El sistema sigue una arquitectura de capas, dividida en tres capas principales: la capa de presentación, la capa de negocio, y la de datos.

![Application architecture example](https://github.com/Raven-4/web_Mediacion/assets/121634522/cc126678-d3c4-4596-b2c1-07269160ed19) 
Ilustración 1. Diagrama de arquitectura

## Capa de Presentación (Frontend):

La capa de presentación se encarga de la interacción con el usuario. Incluye todas las interfaces gráficas, como formularios y tablas, que permiten a los usuarios gestionar los casos de mediación. Esta capa está diseñada en HTML y Javascript, para la lógica de los formularios y tablas; y CSS, para asegurar una apariencia consistente y profesional a la aplicación. Esta capa se comunica con el Backend mediante solicitudes HTTP (GET, POST, PUT, DELETE), que se usan para extraer o insertar información del servidor.

## Capa de Lógica de la aplicación (Backend):

La capa de lógica se encarga de interconectar a la capa de Presentación con la Base de datos. El Backend procesa las solicitudes HTTP provenientes del Frontend, aplica las reglas de negocio necesarias y se comunica con la base de datos. En esta capa es donde se realiza la autenticación de usuarios, la gestión de los casos de mediación, y la asignación de mediadores; así como las modificaciones de los usuarios o la eliminación de estos mismos. Para la realización de esta capa se ha utilizado Node.js y el framework Express.js.

## Capa de Datos:

La capa de datos se encarga del almacenamiento y la gestión de los datos. Para el almacenamiento de los datos se ha usado el Sistema Gestor de Bases de Datos (SGBD) MariaDB; y para acceder e interactuar con la misma, de forma independiente al Backend, se ha usado phpMyAdmin. Se han utilizado consultas SQL para gestionar y recuperar datos de forma eficiente.

# Tecnologías e integración de productos de terceros:

## Tecnologías usadas

### HTML5

HTML (HyperText Markup Language) es el lenguaje de programación estándar utilizado para crear y estructurar páginas web y aplicaciones en la web. Define el contenido de las páginas web mediante el uso de etiquetas para estructurar texto y otros elementos como imágenes, listas y vídeos. HTML es fácil de aprender, permitiendo a cualquier persona crear una página web básica. Aunque HTML define el contenido y algunos estilos básicos, el diseño profesional se logra con habilidades de diseño y lenguajes adicionales como CSS. [5]

### CSS3

CSS (Cascading Style Sheets) es un lenguaje de programación creado por el W3C en 1996 para estilizar elementos escritos en HTML, separando el contenido de la presentación visual. Permite definir estilos en un archivo separado, lo que simplifica el mantenimiento y la personalización del diseño.

CSS utiliza una sintaxis simple con selectores y bloques de declaración para aplicar estilos a elementos HTML. Existen tres métodos para aplicar CSS: interno (dentro del archivo HTML), externo (en un archivo separado con extensión ".css") e "inline" (directamente en el elemento HTML). El método externo es el más eficiente, permitiendo aplicar estilos a múltiples páginas y mejorar los tiempos de carga. [6]

### JavaScript

JavaScript es un lenguaje de secuencias de comandos que permite implementar funciones complejas en páginas web. Añade interactividad y dinamismo a la interfaz de usuario permitiendo crear contenido de actualización dinámica o controlar contenido multimedia entre otros. Es la tercera capa necesaria para hacer cualquier página web (siendo las otras 2 HTML y CSS). [7] Para aplicar JavaScript a una página web se puede hacer tanto dentro del archivo HTML como en un archivo separado (que tendrá la extensión ".js"). Para aumentar la legibilidad del código es recomendable tener los scripts en un archivo separado.

### Node.js

Node.js es un entorno de ejecución para Javascript utilizado para realizar aplicaciones de red (servidores). Está orientado a eventos asíncronos diseñado de forma que pueda manejar muchas conexiones de forma concurrente. Este entorno tiene el protocolo HTTP de forma nativa, lo que hace que sea un entorno adecuado a la hora de realizar frameworks web. [8]

### NPM

NPM (Node Package Manager) es el gestor de paquetes predeterminado para Node.js, que facilita la gestión y distribución de paquetes de software.

### MariaDB

MariaDB es un Sistema Gestor de Bases de Datos (SGDB) relacionales de código abierto. Este sistema se puede utilizar para "datos de transacciones de alta disponibilidad, análisis de datos, como servidor integrado, y una amplia gama de herramientas y aplicaciones soportan MariaDB Server." [9]

### SQL

SQL (Structured Query Language) es un lenguaje de consulta que permite manipular y extraer datos de una base de datos. Es el principal lenguaje de programación utilizado a la hora de usar bases de datos relacionales.

### Python

Python es uno de los lenguajes de programación más populares del mundo, utilizado en aplicaciones web, desarrollo de software e inteligencia artificial, entre otros.

## Productos de terceros

### Visual Studio Code

Visual Studio Code (o VSCode) es un editor de código disponible para Windows, MacOS y Linux, el cual tiene soporte para la mayoría de lenguajes de programación. Fué utilizado para como entorno de protgramación del proyecto

### Express

Express.js o Express es un framework hecho para Node.js que facilita la creación de aplicaciones web y APIs. Se ha utilizado en el proyecto para realizar la lógica del servidor, definiendo las rutas del mismo.

### Docker

Docker permite empaquetar tanto las aplicaciones como sus dependencias en contenedores ligeros y portátiles. Se ha usado en el proyecto para la gestión de la base de datos, utilizando MariaDB y PHPMyAdmin como contenedores.

### Font Awesome

Font Awesome es una biblioteca de iconos usados para mejorar la interfaz de usuario del sistema.

### PHPMyAdmin

PHPMyAdmin es una herramienta de administración de bases de datos que proporciona una interfaz gráfica para interactuar con las mismas. Fué usada para acceder a MariaDB de forma externa a la aplicación y así poder realizar las pruebas necesarias sin modificar la aplicación.

# Especificación y analisis de requisitos:

## Requisitos funcionales

Los requisitos funcionales son aquellos que definen las funciones específicas del sistema.

1. Gestión de Usuarios:

   - El administrador debe poder crear, modificar y eliminar nuevos usuarios.

2. Autenticación

   - El sistema debe requerir autenticación para acceder a sus funcionalidades

3. Autorización

   - El sistema debe proporcionar diferentes niveles de acceso dependiendo del rol asignado al usuario

4. Gestión de Casos de Mediación

   - El sistema debe permitir al administrador registrar nuevos casos de mediación.

   - Los casos deben estar asignados a dos usuarios distintos

   - El sistema debe permitir acutalizar los detalles de los casos

   - El sistema debe permitir descargar y adjuntar un archivo PDF que servirá como Formulario del caso

4. Seguimiento de Casos

   - El sistema debe proporcionar una lista de todos los casos de mediación asignados al usuario

   - El sistema debe proporcionar una lista de todos los casos de mediación existentes al administrador

   - El sistema debe proporcionar todos los detalles de cada caso

   - El sistema debe proporcionar las estadísticas de los casos de cada usuario.

## Requisitos no funcionales

Los requisitos no funcionales definen los criterios que pueden usarse a la hora de determinar el funcionamiento de un sistema.

1. Rendimiento

   - El sistema debe ser capaz de manejar múltiples solicitudes simultáneamente

2. Escalabilidad

   - El sistema debe ser capaz de soportar un aumento significativo en el número de usuarios sin la necesidad de reestructurar la aplicación.

3. Seguridad

   - El sistema debe asegurar la protección de los datos referentes a los casos de mediación frente a accesos no autorizados.

4. Usabilidad

   - La interfaz de usuario debe ser intuitiva y fácil de usar para que usuarios de cualquier nivel técnico puedan utilizar la aplicación.

   - El manual de usuario debe ser comprensible para cualquier tipo de usuario.

5. Compatibilidad

   - El sistema debe ser compatible con los principales navegadores web.

# Diseño do software (estático y dinámico):

## Diseño estático

## Diseño dinámico

# Gestión de datos e información:
describiranse os métodos ou técnicas empregadas para xestionar tanto os datos coma o resto de información relevante.

# Pruebas llevadas a cabo: 
describiranse as probas realizadas aos distintos niveis para garantir o correcto funcionamento do software ou do hardware.

# Manual de usuario:
debe incluír requisitos mínimos, manual de instalación e de utilización

# Aportaciones principales:
deberanse destacar as aportacións importantes do traballo realizado, tendo en conta os obxectivos fixados

# Conclusiones:
 incluiranse todas as conclusións de tipo técnico e persoal.

# Vías de trabajo futuro:
presentaranse posible ampliacións e traballos relacionados por facer.

# Referencias:

[1] Valencia Agudelo, Germán Darío; Alderid Gutiérrez Loaiza y Sandra Johansson. (2012). Negociar la paz: una síntesis de los estudios sobre la resolución negociada de conflictos armados internos. Estudios Políticos, 40, Instituto de Estudios Políticos, Universidad de Antioquia, (pp. 149–174).

[2] https://mediacionescolar.org/como-mediar-conflictos-institutos/

[3] https://agilemanifesto.org

[4] https://scrumguides.org/scrum-guide.html

[5] https://desarrolloweb.com/articulos/que-es-html.html

[6] https://www.hostinger.es/tutoriales/que-es-css

[7] https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/What_is_JavaScript#una_definición_de_alto_nivel

[8] https://nodejs.org/en/about#about-nodejs

[9] https://mariadb.org/es/

# Anexos (opcional): 
incluiranse outros elementos de interese no TFG que se consideren necesarios para a mellor comprensión do mesmo.
