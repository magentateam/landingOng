<h1 align="center">ONGFrontenders</h1>

<h2>Link utiles</h2>

**Trello**: https://trello.com/b/fJLWprm7/landing-page

**Figma**: https://www.figma.com/file/lGap7e94h0dix5Qifg458K/Wireframe?node-id=0%3A1

**Link del repo**: https://github.com/magentateam

**Color palette**: https://colorhunt.co/

**CSS gradiente**: https://cssgradient.io/gradient-backgrounds/

**Fuentes**: https://fontpair.co/

**Tailwind**: https://tailwindcss.com/

<h2>Realizar un pull request</h2>

1- Clonamos el repositorio en nuesto entorno local

```bash

git clone https://github.com/magentateam/landingOng.git
```

2-Nos aseguramos que estamos en la rama master y hacemos un pull para obtener los ultimos cambios

```bash

git checkout master
git pull
```

3-Creamos un nuevo branch y nos paramos sobre el.

```bash

git checkout -b nombreDelBranch
```

4- Hacer los cambios necesarios ,una vez terminado agregar esos cambios al branch

```bash

git add .
```

5- Crear un commit con los cambios

```bash

git commit -m "nombreDelCommit"
```

6- Pushear los cambios al repositorio

```bash

git push --set-upstream origin nombreDelBranch``
```

7-Entrar al github y en la parte superior les va a sugerir crear el pull request

<h2>Instalacion</h2>

1- Instalamos node y npm en nuestro equipo

2- bajamos el repositorio

3 - corremos `npm install` dentro del repo

<h2>Correr el proyecto</h2>

Por el momento vamos a necesitar tener 2 terminales. la primera para levantar el proyecto y la segunda para compilar tailwind cada vez que hagamos un cambio.

en la primer terminal vamos a correr `npm run dev`

cada vez que hagamos una modificación en el archivo src/styles.css tenemos que rebuildear tailwind con `npm run build-css` . por el momento no se está compilando automaticamente asique necesitaríamos correrlo cada vez que modifiquemos el estilo.

Esta función va a tomar los cambios de el archivo src/style.css y los va a pegar en public/style.css. asique **NUNCA MODIFICAR PUBLIC/STYLE.CSS** ya que esos cambios se pierden
