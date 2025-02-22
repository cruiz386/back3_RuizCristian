# PRIMER ENTREGA - Mocking API

## Descripción
Este proyecto es un servidor Express que implementa un sistema de mockeo de datos para usuarios y mascotas. Se han desarrollado diferentes endpoints para generar y almacenar estos datos en una base de datos MongoDB.

## Instalación
1. Clonar el repositorio
```bash
   git clone <repositorio>
   cd <repositorio>
```
2. Instalar las dependencias
```bash
   npm install
```
3. Configurar las variables de entorno en un archivo `.env`
```plaintext
   PORT=8000
   DB_LINK=mongodb+srv://usuario:password@cluster.mongodb.net/miBaseDeDatos
```
4. Iniciar el servidor
```bash
   npm start
```

---

## Funcionalidades

1. **GET /mockingusers**: Genera 50 usuarios con datos ficticios.
2. **GET /mockingpets**: Genera 50 mascotas con datos ficticios.
3. **POST /generateData**: Genera la cantidad de usuarios y mascotas especificada en el body y los almacena en MongoDB.
4. **Verificación**: Comprobar los datos con los endpoints GET de users y pets.

---

## Endpoints a probar

### **Generación de datos ficticios**

#### **Usuarios Mockeados**
```http
GET http://localhost:8000/api/mocks/mockingusers
```

#### **Mascotas Mockeadas**
```http
GET http://localhost:8000/api/mocks/mockingpets
```

### **Generación de datos personalizados**
```http
POST http://localhost:8000/api/mocks/generateData
```
#### **Body JSON de ejemplo**
```json
{
  "users": 10,
  "pets": 5
}
```
Este endpoint genera 10 usuarios y 5 mascotas y los almacena en la base de datos.

---

### **Verificación de datos almacenados**

#### **Consultar usuarios almacenados en MongoDB**
```http
GET http://localhost:8000/api/mocks/users
```

#### **Consultar mascotas almacenadas en MongoDB**
```http
GET http://localhost:8000/api/mocks/pets
```

---

## Notas
- Asegúrate de tener MongoDB configurado y corriendo correctamente.
- Puedes verificar los datos insertados accediendo directamente a la base de datos con MongoDB Compass o mediante `mongo shell`.

---

## Autor
Proyecto desarrollado como parte de la primera entrega de backend3 de CoderHouse por Cristian Ruiz.

## Consigna de entrega
Crear proyecto express: Crear un router llamado mocks.router.js que funcione bajo la ruta base /api/mocks. 
Crear un modulo de Mocking para generar usuarios de acuerdo a un parametro numerico. Dichos usuarios deberan tener las siguientes caracteristicas: 
•	"password" debe tener la contraseña coder123 encriptada 
•	"role" pueden variar entre user y admin 
•	"pets" debe ir como array vacio 
•	"mail" debe ser un mail del usuario generado ficticio 
Dentro del router mocks.router.js utilizar este modulo en un endpoint GET llamado "/mockingusers", y generar 50 usuarios con el mismo formato que entregaria una peticion de Mongo. 
Dentro del router mocks.router.js desarrollar un endpoint POST llamado /generateData que reciba los parametros numericos "users" y "pets" para generar e insertar en la base de datos la cantidad de registros indicados. 
Comprobar de users y pets dichos registros insertados mediante los servicios GET

