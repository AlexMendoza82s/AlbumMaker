# Descripcion
Proyecto elaborado con REACT y estilizado con bootstrap, permite visualizar una matriz de 3x3 que permite mostrar arrastrar imagenes desde el escritorio o desde una carpeta especifica, muestra las imagenes en la matriz y permite ejecutar las opciones de 
## 1.- Eliminar la imagen cargada
## 2.- Ordenar o mover la imagen cargada hacia otra posicion
## 3.- Intercambiar los lugares con otra imagen cargada

Se controlan los siguientes aspectos
1.- Solo se pueden cargar imagenes
2.- No se puede cargar una imagen sobre una posicion ocupada por otra imagen
3.- No se puede continuar a la siguiente etapa hasta que se haya cargado por o menos una imagen

Al continuar con el proceso se muestra la seccion de informacion, un formulario que permite el registro de informacion personal e informacion de facturacion, si el usuario desea puede usar la misma informacion de personal como informacion de facturacion, se controlan los siguientes aspectos
1.- Obligatoriedad de campos
2.- se remarcan campos con error

Al haber culminado el ingreso de la informacion se puede visuzalizar un formulario con el resumen de los ingresado y las imagenes seleccionadas en la primera etapa

# Desarrollo
Para el desarrollo de la aplicacion se uso react y otros componentes, para lograr su ejecucion asegurese de tener instalados los componentes necesarios
1.- Descargue express e instalelo en su equipo (descargar del sitio oficial https://nodejs.org/.), 
2.- Ejecute los procesos de instalacion de react (npm install -g create-react-app)
3.- Descague este proyecto y ejecute npm install desde el repositorio descargado (antes de ejeuctar el proceso install asegurese de estar ubicado en la carpeta ALBUMMAKER)

Mejoras a considerar
1.- Implementar redux
2.- Permitir arrastrar lotes de imagenes
3.- Ajustar el tamano de las imagenes
4.- Guardar o cargar las imagenes a un repositorio S3 de amazon 
5.- Integrar la informacion con Base de Datos

# Despliegue
Siga los siguientes pasos para el despliegue de la solucion en AWS
1.- Crear servicio EC2, asignar los recursos necesario, la aplicacion sirve en el puerto 8080 no olvide habilitarlo
2.- Ejecutar en su consola de aws  sudo apt update && sudo apt upgrade
3.- Instalar docker sudo apt install docker
4.- Instalar docker compose sudo apt install docker-compose
5.- ejecutar comandos
	mkdir album-maker
	cd album-maker	
6.- Copiar o crear archivos de docker compose
	![Dockerfile-app](./PublicarAWS/Dockerfile-app)
	![Dockerfile-nginx](./PublicarAWS/Dockerfile-nginx)
	![docker-compose.yml](./PublicarAWS/docker-compose.yml)
	![nginx.conf](./PublicarAWS/nginx.conf)
7.- Ejecutar sudo docker-compose up -d
8.- Ingrese a su servidor (IP:8080)
