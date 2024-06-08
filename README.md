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

# Planificación e seguimento:

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

La arquitectura del sistema está diseñada de forma modular, para que sea fácil de mantener. Está compuesta de varios componentes interconectados que se pueden actualizar de manera independiente, sin que estos cambios influyan a las otras capas..

![Application architecture example](https://github.com/Raven-4/web_Mediacion/assets/121634522/cc126678-d3c4-4596-b2c1-07269160ed19) 
Ilustración 1. Diagrama de arquitectura

## Capa de Presentación:

## Capa de 

# Tecnoloxías e integración de produtos de terceiros:
describiranse adecuadamente as tecnoloxías utilizadas para o desenvolvemento do traballo, así coma os diversos produtos que non son da autoría do/da estudante, xustificando a súa utilización. 

# Especificación e análise de requisitos:
describiranse os requisitos necesarios, tanto funcionais como non funcionais. Incluiranse os aspectos máis relevantes correspondentes á análise do traballo realizado. 

# Deseño do software (estático e dinámico):
indicaranse os aspectos máis relevantes correspondentes ao deseño do traballo realizado

# Xestión de datos e información:
describiranse os métodos ou técnicas empregadas para xestionar tanto os datos coma o resto de información relevante.

# Probas levadas a cabo: 
describiranse as probas realizadas aos distintos niveis para garantir o correcto funcionamento do software ou do hardware.

# Manual de usuario:
debe incluír requisitos mínimos, manual de instalación e de utilización

# Principais aportacións:
deberanse destacar as aportacións importantes do traballo realizado, tendo en conta os obxectivos fixados

# Conclusións:
 incluiranse todas as conclusións de tipo técnico e persoal.

# Vías de traballo futuro:
presentaranse posible ampliacións e traballos relacionados por facer.

# Referencias:
deberanse citar todas as fontes de información empregadas para a realización do traballo. Deberase empregar un estilo uniforme para todas elas e aportarase, en cada caso:
1. Autor/a/es/as.
2. Título do artigo, libro, monografía,...
3. Editorial ou nome da revista.
4. Número da revista, volume e páxinas (só para revistas).
5. Ano de publicación.
6. Dirección e data de consulta (só para URL).
Recoméndase empregar para referencias de artigos, revistas, e outras fontes de referencia, o formato APA, ISO 690, IEEE ou similares, e uniformes ao longo de toda a sección


[1] Valencia Agudelo, Germán Darío; Alderid Gutiérrez Loaiza y Sandra Johansson. (2012). Negociar la paz: una síntesis de los estudios sobre la resolución negociada de conflictos armados internos. Estudios Políticos, 40, Instituto de Estudios Políticos, Universidad de Antioquia, (pp. 149–174).

[2] https://mediacionescolar.org/como-mediar-conflictos-institutos/

[3] https://agilemanifesto.org

[4] https://scrumguides.org/scrum-guide.html

# Anexos (opcionais): 
incluiranse outros elementos de interese no TFG que se consideren necesarios para a mellor comprensión do mesmo.
