# Manual de instalación:

## Programas a descargar a mano:

https://nodejs.org/en/download

https://www.docker.com/products/docker-desktop/

## scripts a ejecutar:

Ejecutar instalacion.exe ubicado en la carpeta raíz del proyecto

Ejecutar abrir_servidor.exe ubicado en la carpeta raíz del proyecto para iniciar la base de datos y el servidor backend.




# web_Mediacion

descargar contenedores docker:

docker run -d --name mariadb-tfg -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -v C:\Users\guija\Desktop\web_Mediacion\DB\mariadb_data:/var/lib/mysql mariadb

docker run --name tfg-phpmyadmin -d --link mariadb-tfg:db -p 8080:80 phpmyadmin

activar servidor:

cd C:\Users\guija\Desktop\web_Mediacion\BACKEND

node server.js
