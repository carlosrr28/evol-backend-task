# README - Configuración del Backend con NestJS y PostgreSQL

## Requisitos Previos

Antes de comenzar, asegúrese de tener instalados los siguientes programas:

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [Docker](https://www.docker.com/get-started) y Docker Compose

### Instalación de Docker (Breve Guía)

1. Descarga Docker desde [aqui](https://www.docker.com/get-started) según tu sistema operativo.
2. Sigue las instrucciones de instalación.
3. Verifica la instalación ejecutando:
   ```sh
   docker --version
   docker-compose --version
   ```

---

## Configuración de la Base de Datos con PostgreSQL

### 1. Crear la Base de Datos con Docker
Ejecuta el siguiente comando en una terminal para levantar un contenedor con PostgreSQL:
```sh
docker run --name task_management_db -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=task_management -p 5432:5432 -d postgres
```

Esto creará un contenedor de PostgreSQL con:
- Usuario: `admin`
- Contraseña: `admin`
- Base de datos: `task_management`
- Puerto: `5432`

### 2. Crear la Tabla `tasks`
Conecta a la base de datos desde tu terminal:
```sh
docker exec -it task_management_db psql -U admin -d task_management
```
Ejecuta la siguiente consulta SQL para crear la tabla:
```sql
CREATE TABLE Tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    completed BOOLEAN DEFAULT FALSE,
    tags TEXT[],
    due_date TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 3. Insertar Datos Dummy
Ejecuta el siguiente script en PostgreSQL:
```sql
INSERT INTO "Tasks" ("title", "description", "completed", "tags", "dueDate", "createdAt", "updatedAt")
VALUES
('Comprar comida', 'Ir al supermercado y comprar frutas', false, '["compras", "supermercado"]', '2024-12-01', '2024-02-19 10:00:00', '2024-02-19 10:00:00'),
('Terminar proyecto', 'Finalizar la prueba técnica de NestJS', true, '["trabajo", "proyecto"]', '2024-12-05', '2024-02-19 10:10:00', '2024-02-19 10:10:00'),
('Hacer ejercicio', 'Salir a correr por 30 minutos', false, '["salud", "ejercicio"]', '2024-12-02', '2024-02-19 10:20:00', '2024-02-19 10:20:00'),
('Leer un libro', 'Leer 20 páginas del libro de programación', false, '["lectura", "aprendizaje"]', '2024-12-03', '2024-02-19 10:30:00', '2024-02-19 10:30:00'),
('Actualizar CV', 'Revisar y actualizar información', false, '["trabajo", "cv"]', '2024-12-04', '2024-02-19 10:40:00', '2024-02-19 10:40:00');
```

---

## Levantar el Servidor NestJS

1. Clonar el repositorio
  ```sh
  git clone <URL_DEL_REPOSITORIO>
  cd <NOMBRE_DEL_PROYECTO>
   ```

2. Instalar Dependencias
  ```sh
   npm install
   ```

3. Iniciar el servidor:
```sh
npm run start
```

2. Verifica que el servidor esté corriendo en `http://localhost:3000`

---

## Otras configuraciones

Para configurar variables de entorno que no sean las por defecto ir al archivo environments/environment.ts

Para ejecutar pruebas:
Iniciar el servidor:
```sh
npm test 
```