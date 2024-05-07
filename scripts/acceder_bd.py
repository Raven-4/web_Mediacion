import webbrowser

def open_phpmyadmin(port=8080):
    url = f"http://localhost:{port}"
    print(f"Abriendo PHPMyAdmin en: {url}")
    webbrowser.open(url)

if __name__ == "__main__":
    open_phpmyadmin()
