# 🐾 AdoptMe - Proyecto Final Backend

Este proyecto corresponde al **entregable final** del curso de Backend. AdoptMe es una API para gestionar usuarios, mascotas y adopciones.

Puntos trabajados:

- Documentación con Swagger del módulo `Users`.
- Test funcionales de los endpoints de `adoption.router.js`.
- Subir imagen del protecto a DockerHub.

## 🚀 Tecnologías utilizadas

- Node.js
- Express.js
- MongoDB + Mongoose
- Docker
- Swagger para documentación
- Mocha + Chai para testing

---

## 🐳 Imagen Docker

La imagen del proyecto ha sido subida a DockerHub y puede utilizarse desde el siguiente enlace:

🔗 **[Ver Imagen en DockerHub](https://hub.docker.com/repository/docker/trepiceno/backend-coder-image/general)**

Descargar la imagen:

```bash
docker pull trepiceno/backend-coder-image
```

---

## ▶️ Cómo ejecutar el proyecto con NODE JS

### Pasos:

1.  Descargar o clonar repositorio.

2. Situarse en la raiz del proyecto.

3. Ejecutar el comando en la terminal para descargar todas las dependencias necesarias.

```bash
npm install
```

4. Levantar el servidor

```bash
npm run start
```

## Nota importante:

Antes de levantar el proyecto crea el archivo `.env.prod` en la raíz del proyecto con las siguentes variables de entorno.

```env
MONGO_URI="mongodb+srv://trepiceno:VNsxw1nsvFnqkTjR@backend-i-coder.luayf.mongodb.net/Backend-I-entrega-final?retryWrites=true&w=majority&appName=Backend-I-Coder"
MODE="prod"
PORT=8080
JWT_SECRET_KEY="coder2025"
```

### Realización de Testing

```bash
npm run test
```
Creación de un archivo .env con únicamente la variable de entorno de MongoDB

```env
MONGO_URI="mongodb+srv://trepiceno:VNsxw1nsvFnqkTjR@backend-i-coder.luayf.mongodb.net/Backend-I-entrega-final?retryWrites=true&w=majority&appName=Backend-I-Coder"
```