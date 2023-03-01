# maqueta-shop

diseño de una maqueta para tienda estilizada con material ui

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Next.js Maqueta-Shop App

Para correr localmente, se necesita la base de datos ejecute el
siguiente comando en la terminal:

```
docker-compose up -d
```

- El -d, significa de **detached**

## Configurar las variables de entorno

Renombrar el archivo **.env.template** a **.env**

\*MongoDB URL Local:

```
MONGO_URL=mongoDB://localhost:27017/teslodb
```

## Recostruir los módulos de node y levantar Next

First, run the development server:

```
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Llenar la base de datos con la informacion de pruebas

Llamara

```
http://localhost:3000/api/seed
```
