Al final de este documento se encontraran los videos tutoriales y documentos usados para
crearlo

### importante: por deffecto esta app usa el puerto 5322, cambiar en app.module si es necesario

## Description
Este es una API base que echa en NestJs conectada a postgresql contenido en docker, usa 
typeORM. 

LA API cuenta con un CRUD para crear-editar-eliminar y mostrar usuarios con los siguientes
campos:
- name
- username
- email
- age
- password
- gender

Puedes usar Insomnia o Postman para interactuar con el backend, como administrador de base
de datos puedes usar DBeaver.

## Requsitos

Desarrollo:

  - Node lts 20.14.0
  - NestJS 10.3.2
  - Docker 26.1.3
  - Imagen Postgres 16.3

 programas varios:

  - Editor de texto: Visual Studio Code
  - Tester de API: insomnia / postman
  - Terminal
  - Admin de BD: Dbeaver



## Installation

Crea un proyecto Nestjs y pega el contendio de este repositorio en la carpeta raiz
```bash
$ nest new
```
Instalar dependencias:
```bash
$ npm install @nestjs/config @nestjs/mapped-types @nestjs/typeorm class-transformer class-validator pg typeorm typeorm-naming-strategies
```

iniciar init.sql, esto crea la base de datos y tambien el conetendor de dokcer automaticamente
si es que no existe
```bash
$ sudo docker-compose up
```

## Ejecutar la app

solo la primera vez (si un comando te falla prueba el otro)
```bash
$ docker-compose up

$ docker compose up
```

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## Bibliografia
*dependiendo como instales es "docker compose" o "docker-compose"
Instalar docker-desktop Archlinux sin AUR:

https://docs.docker.com/desktop/install/archlinux/

ó con aur:
```bash
$ sudo pacman -S docker-desktop
```
docker-compose:
```bash
$ sudo pacman -S docker-compose
```

Docker-compose y PostgreSQL:

https://youtu.be/r92lNH6MYto?si=KrAL0DoFBAyqSkyt

Conectar Postgres a Nestjs con typeORM y Hacer CRUD:

https://medium.com/simform-engineering/nestjs-and-postgresql-a-crud-tutorial-32aa78778752

## License

Nest is [MIT licensed](LICENSE).
