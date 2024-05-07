import os

def start_containers():
    # Comando para iniciar el contenedor de MariaDB
    os.system("docker start mariadb-tfg")

    # Comando para iniciar el contenedor de PHPMyAdmin
    os.system("docker start tfg-phpmyadmin")

def start_node_server():
    # Cambia al directorio del servidor Node.js
    os.chdir("BACKEND")

    # Comando para ejecutar el servidor Node.js
    os.system("node server.js")

def main():
    start_containers()
    start_node_server()

if __name__ == "__main__":
    main()
