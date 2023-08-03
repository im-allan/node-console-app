# Node CLI App
## Aplicación de CLI en Node con TypeScript e Inquirer

¡Bienvenido/a a la aplicación de línea de comandos (CLI) en Node con TypeScript e Inquirer!

Esta aplicación te permite gestionar tus tareas de manera sencilla y rápida. A continuación, encontrarás las acciones disponibles:

### Acciones Disponibles

1. 📝 Crear Tareas: Agregar nuevas tareas a tu lista.
2. 📋 Listar Tareas: Ver todas las tareas disponibles, tanto completadas como pendientes.
3. ✅ Listar Tareas Completadas: Ver solo las tareas que ya has completado.
4. 🔴 Listar Tareas Pendientes: Ver solo las tareas que aún están pendientes.
5. ✔️ Completar Tarea(s): Marcar una o varias tareas como completadas.
6. ❌ Borrar Tarea: Eliminar una tarea de la lista.
7. 🚪 Salir: Cerrar la aplicación.

### Instalación y Uso

1. Clona este repositorio.
2. Ejecuta el siguiente comando para instalar las dependencias necesarias:

```bash
npm install
```

3. Utiliza el siguiente comando para compilar el código TypeScript a JavaScript:

```bash
npm run build
```

4. Inicia la aplicación con el siguiente comando:

```bash
npm start
```

### Configuración de TypeScript

La configuración de TypeScript en este proyecto es la siguiente:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "NodeNext",
    "moduleResolution": "NodeNext"
  }
}
```

### Paquetes Utilizados

Para el funcionamiento de esta aplicación, he utilizado los siguientes paquetes como dependencias:

- [colors](https://www.npmjs.com/package/colors) (v1.4.0): Proporciona colores para resaltar mensajes en la consola.
- [inquirer](https://www.npmjs.com/package/inquirer) (v9.2.9): Facilita la interacción con el usuario mediante preguntas y respuestas en la consola.
- [uuid](https://www.npmjs.com/package/uuid) (v9.0.0): Genera identificadores únicos universalmente (UUID) para las tareas.

### Información del Proyecto

- Nombre del Proyecto: Node CLI App
- Versión Actual: 1.0.0

¡Listo! Ahora puedes empezar a gestionar tus tareas de manera eficiente. ¡Diviértete utilizando la aplicación! Si tienes alguna duda o mejora, no dudes en contactarme!
