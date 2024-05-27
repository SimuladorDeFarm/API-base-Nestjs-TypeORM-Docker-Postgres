Al final de este documento se encontraran los videos tutoriales y documentos usados para
crearlo

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

## Installation

Crea un proyecto Nestjs y pega el contendio de este repositorio en la carpeta raiz
```bash
$ nest new
```
Instalar dependencias:
```bash
$ npm install @nestjs/config @nestjs/mapped-types @nestjs/typeorm class-transformer class-validator pg typeorm typeorm-naming-strategies
```
crear contenedor docker (puedes modificar usario/calve pero tambien
deben moificarse en app.module)
```bash
$ docker create -p 5432:5432 --name pg_nest -e POSTGRES_USER=ucodrr -e POSTGRES_PASSWORD=1234 -e POSTGRES_DB=mydatabase postgres:16.3
```
iniciar init.sql
```bash
$ sudo docker-compose up
```

## Ejecutar la app

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

Instalar docker-desktop (trae docker-compose) Archlinux sin AUR:

https://docs.docker.com/desktop/install/archlinux/
ó con aur:
```bash
$ sudo pacman -S docker-desktop
```


Docker-compose y PostgreSQL:

https://youtu.be/r92lNH6MYto?si=KrAL0DoFBAyqSkyt

Conectar Postgres a Nestjs con typeORM y Hacer CRUD:

https://medium.com/simform-engineering/nestjs-and-postgresql-a-crud-tutorial-32aa78778752

## License

Nest is [MIT licensed](LICENSE).
