# Parcial Sistemas Distribuidos

Nombres: Nicolas Sarmiento Vargas, Nicolas Samuel Tinjaca Topia

# Uso

La aplicación está en Docker Hub, para ejecutarla en un contenedor de docker. La ubicación de la imágen está disponible [Aquí](https://hub.docker.com/r/nicolassarmiento8/json-place-holder-exam).

Para descargar y construir el contenedor a través de la imágen, ejecutar el siguiente comando:

```
docker run -p 3000:3000 --name jsonplaceholderapp nicolassarmiento8/json-place-holder-exam:latest
```

Luego se pueden consultar las siguientes rutas para acceder a los recursos de Json Placeholder
- Con la siguiente ruta se obtienen todos los álbumes:
```
http://localhost:8000/album
```
- Con la siguiente ruta se obtiene un álbum por id:
```
http://localhost:8000/album/{id}
```
