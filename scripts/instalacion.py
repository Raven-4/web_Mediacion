import os

def find_relative_path():
    # Nombre del directorio que estamos buscando
    target_directory = "mariadb_data"
    
    # Busca recursivamente el directorio objetivo
    for root, dirs, files in os.walk(".", topdown=True):
        if target_directory in dirs:
            # Construye la ruta relativa
            relative_path = os.path.join(root, target_directory)
            return relative_path
    
    return None

def install_dependencies():
    # Instalar dependencias npm
    npm_install_command = "npm install cors@^2.8.5 express@^4.19.2 mariadb@^3.3.0 multer@^1.4.5-lts.1"
    os.system(npm_install_command)

def main():
    # Buscar la ruta relativa
    relative_path = find_relative_path()
    if relative_path is None:
        print("No se encontró la ruta relativa.")
        input("Pulsa enter para salir...")
        return
    
    print(f"Ruta relativa encontrada: {relative_path}")
    # Comando Docker para correr el contenedor
    docker_command = f"docker run -d --name mariadb-tfg -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -v {relative_path}:/var/lib/mysql mariadb"
    os.system(docker_command)

    # Comando Docker para correr el contenedor PHPMyAdmin
    phpmyadmin_command = "docker run --name tfg-phpmyadmin -d --link mariadb-tfg:db -p 8080:80 phpmyadmin"
    os.system(phpmyadmin_command)

    # Instalar dependencias npm
    install_dependencies()

    # Mensaje para salir
    input("Pulsa enter para salir...")

if __name__ == "__main__":
    main()
