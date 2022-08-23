# ExampleBabel
Compilar JS actual para versiones antiguas
Using babel
1. We have to install dependency manager npm
https://nodejs.org/es/download/

2- Instala npm desde la raiz
npm install -g npm
3- Crea un nuevo proyecto y abrelo con Visual Studio Code
4- Crea el archivo package.json, para inicializar los npm scripts
npm init -y
5- Install babel in your project
npm install --save-dev @babel/core @babel/cli
6- Dentro del archivo de configuración debemos agregar el atributo build
"scripts": {
	"build": "babel src -d lib"
}
7- Luego necesitamos una carpeta llamada src para poder probar babel con el comando
8- Procedemos a probar babel
npm run build
9- Babel distribuye un "set" de configuraciones predefinidas llamadas presets. Estos son básicamente un conjunto de plugins comúnmente utilizados que te permiten iniciar rápidamente.
10- Instalaremos el paquete de presets:
 npm install @babel/preset-env --save-dev
11- Necesitaremos un archivo de configuración específico para babel, le llamaremos 
babel.config.js
12- Y luego definimos su uso en el archivo de configuración
module.exports = { presets: ["@babel/preset-env"] };
13- Ahora crearemos un archivo de prueba llamado script
14- Ahora procederemos a compilar 
npm run build
