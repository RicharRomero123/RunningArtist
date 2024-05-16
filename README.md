# RunningArtist

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.7.
Previamente se instaló NodeJs y json server.
Si aún en caso quieras realizar tu propio poryecto, consultar a la página de angular `https://material.angular.io/guide/getting-started`
o consultar a este video guía: https://www.youtube.com/watch?v=k8o9-QX298g

## Obtener dependencias

Para la obtener las dependencias del proyecto hay que ejecutar `npm install`, luego si es que no está instalado el json server, instalarlo con `json-server --watch data.json`
que normalmente se almacenerá en el puero localhost:3000

## Development server

Ejecutar `ng serve` en el Command Prompt del Visual Studio Code. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding | Generar nuevos archivos en el Proyecto

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Ejecucion

Para iniciar correctamente el proyecto angular, se debe dirigir a la carpeta `/src/assets` para ejecutar el siguiente comando. `json-server --watch data.json` ya que en este proyecto no se utilizó un API para recolectar la información. Despues de ello en la ejecución se podrán apreciar todos los datos de las peliculas que se encuentran en el archivo `data.json`.

