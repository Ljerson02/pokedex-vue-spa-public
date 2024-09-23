# Pokedex App

## Descripción del Proyecto

Pokedex App es un aplicativo que permite obtener información de pokemones así como agregarlos a una lista de favoritos. La aplicación está diseñada para ser rápida y fácil de usar, proporcionando una experiencia de usuario fluida y agradable.

## Stack de Tecnología
- **Vite**
- **Vue 3**
- **Tailwind**
- **TypeScript**
- **UseVue**
- **Vue Router**

## Proceso de desarrollo

- **Configuración**:
  - Vite: Se decidió usar Vite gracias a que ofrece un entorno de desarrollo simple y poderoso para proyectos pequeños. Para ello, el proyecto se creó utilizando create vite@latest con la configuración inicial de Vue con TS.

  - Tailwind: Configurado como proveedor de estilos principales. Se utilizó la documentación oficial para la instalación y se personalizaron los archivos postcss.config.js y tailwind.config.js para adaptarlo a las necesidades del proyecto.

  - Vue Route: Este aplicativo está basado en SPA, por lo que para el manejo de las rutas se utilizó Vue Router con su herramienta de configuración createRouter.

  - Eslint y Prettier: Para mantener la homogeneidad del código en el proyecto se implementaron las configuraciones correspondientes de Eslint y Prettier que notifican y ayudan a corregir cualquier anomalía a nivel sintáctico en el código.

  - Paleta de colores y estilos: Empleando herramientas de Tailwind, se establecieron variables y configuraciones para poder aplicar de manera rápida y centralizada la identidad visual en todo el app. 

- **Creación de componentes:**
  Se configuraron los componentes básicos y recurrentes en el aplicativo como botones principales, cards y elementos de lista.

- **Creación de APIs y modelos de datos**
  Utilizando el patrón adaptador se generó una interfaz que define los métodos que se usarán para consumir información del API. Posteriormente, se creó una clase que implementa esta interfaz utilizando axios como gestor de HTTP.


- **Lógica del aplicativo**

  - Manejo del estado: 
  Debido a que el aplicativo solo tiene un módulo donde ocurren las acciones, se decidió utilizar un enfoque de manejo de estados local.

  - Vitual Scroll y paginado:
  Para ofrece un rendimiento óptimo ante respuesta que pueden ser muy largas por parte del API, se optó por un enfoque de paginación y virtual scrolling, de esta manera, el paginado nos permite ir trayendo valores a medida que el usuario baja por el listado y con el virtual scrolling, nos aseguramos que el navegador solo renderize los ítems que pueden ser visualizados en el momento. 

  - Lista de resultados:
  La lista de visualización tiene 3 formas de enumerar los resultados: todos, favoritos y resultados de búsqueda. Con esto en mente se implementó una método que computa los estados de búsqueda y Tab actual para determinar así cuáles serán los valores a mostrar.


## Instalación

Puedes instalar las dependencias del proyecto usando Yarn o npm.

### Usando Yarn

```sh
yarn install
npm install
```
### Ejecución
Este proyecto no tiene dependencias adicionales a las establecidas en el package.json por lo tanto puede ejecutarlo con yarn o npm usando el comando start.

```sh
yarn dev
npm run dev
```

