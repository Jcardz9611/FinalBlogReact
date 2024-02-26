Instrucciones de uso

Instalación de base de datos
1. Descargar el archivo blog.sql, contenido dentro de la carpeta db de este repositorio.
2. Crear en MySQL Workbench o gestor de su preferencia, una base de datos llamada blog.

Ejecución del proyecto
1. Abra dos terminales sobre las carpetas api y client de este proyecto.
2. Una vez posicionado en la carpeta api, ejecute el comando npm install para poder configurar las dependencias utilizadas en este proyecto.
3. Para la carpeta client, ejecute yarn start.
4. Genere un nuevo archivo en la carpeta api, llamado .env, en dicho archivo copie las dos variables de entorno contenidas en example.env y use el puerto de su preferencia y su contraseña de mysql.

Prueba de app
1. Para poder probar la aplicación deberá ejecutar cliente y servidor. Sobre la carpeta api, ejecute npm start y sobre la carpeta client, ejecute yarn start.
2. Como primer paso, verá la raíz del proyecto. 
3. Vaya a Login y al ser su primer uso, vaya al link de registro contenido en la parte inferior del formulario.
4. Genere un usuario nuevo y utilice sus credenciales para acceder al sitio de blogs.
5. Suba una entrada nueva, utilizando la opción write, en la superior derecha de la pantalla.
6. De click en publish para crear una nueva entrada. 
7. Repita el proceso las veces que quiera para tener varias entradas disponibles y para que pueda probar el filtro.
8. Si quiere ver alguna entrada a detalle, deberá dar click en "Read More".
9. Dentro de la sección de read more, encontrará las funciones para editar y eliminar. Solo podrá borrar sus propios posts.
10. Puede regresar a Home utilizando el boton de lado derecho.
11. Se añadió un menu superior, disponible en home para cambiar entre blogs, de acuerdo a la categoria a la que estos pertenezcan.

