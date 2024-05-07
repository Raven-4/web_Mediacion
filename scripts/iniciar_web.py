import os
import webbrowser
import http.server
import socketserver

def start_server(port=5500):
    # Cambia al directorio donde se encuentra la página web
    os.chdir("FRONTEND")

    # Configura el manejador HTTP
    handler = http.server.SimpleHTTPRequestHandler

    # Inicia el servidor en el puerto especificado
    with socketserver.TCPServer(("", port), handler) as httpd:
        print(f"Servidor iniciado en el puerto {port}")
        webbrowser.open_new_tab(f"http://localhost:{port}/index.html")
        httpd.serve_forever()

if __name__ == "__main__":
    start_server()
