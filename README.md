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
haberá que incluír unha introdución ao problema e xustificación do traballo realizado. En caso de que o TFG integre ou desenvolva traballos feitos na actividade doutras materias da titulación, o/a estudante deberá especificar os devanditos traballos e materias  esta sección.

# Obxectivos: 
presentar o problema que se vai tratar, incluír o obxectivo principal e os específicos, de ser o caso, do traballo presentado, indicando o alcance para cada un deles.

# Resumo da solución proposta: 
indicarase a solución aportada para o problema presentado. Deberase incluír aquí a metodoloxía empregada.

# Planificación e seguimento:
deberase incluír algunha evidencia que amose tanto a planificación do traballo, coa súa distribución de fases e tarefas, e a súa comparación cos datos reais obtidos tras o desenvolvemento do traballo.

# Arquitectura:
 explicarase a arquitectura empregada para alcanzar os obxectivos propostos.

 # 
