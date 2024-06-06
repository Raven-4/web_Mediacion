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

12. A intervalos regulares el equipo reflexiona sobre cómo ser más efectivo para a continuación ajustar y perfeccionar su comportamiento en consecuencia.

[3] 

## Scrum



# Planificación e seguimento:
deberase incluír algunha evidencia que amose tanto a planificación do traballo, coa súa distribución de fases e tarefas, e a súa comparación cos datos reais obtidos tras o desenvolvemento do traballo.

# Arquitectura:
explicarase a arquitectura empregada para alcanzar os obxectivos propostos.

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


# Anexos (opcionais): 
incluiranse outros elementos de interese no TFG que se consideren necesarios para a mellor comprensión do mesmo.
