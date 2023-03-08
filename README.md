![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png)

# **FOOD** | Proyecto Individual

## **📌 OBJETIVOS**

-  Construir una Single Page Application utlizando las tecnologías: **React**, **Redux**, **Node**, **Express** y **Sequelize**.
-  Poner en práctica recursos básicos de estilos y diseño (UX : UI).
-  Afirmar y conectar los conceptos aprendidos en la carrera.
-  Aprender mejores prácticas.
-  Aprender y practicar el workflow de GIT.
-  Utilizar y practicar testing.

<br />

## **📁 CONTENIDO**

<br />

### **🖱 BASE DE DATOS**

Deberás crear dos modelos para tu base de datos. Una será para las recetas y la otra será para los tipos de dietas (pueden llevar el nombre que tu quieras). La relación entre ambos modelos debe ser de muchos a muchos. A continuación te dejamos las propiedades que debe tener cada modelo.

**📍 MODELO 1 | Recipe**

-  ID. \*
-  Nombre. \*
-  Imagen. \*
-  Resumen del plato. \*
-  Nivel de comida saludable (health score). \*
-  Paso a paso. \*

<br />

**📍 MODELO 2 | Diets**

-  ID. \*
-  Nombre. \*

<br />

---

<br />

### **🖱 BACK-END**

Para esta parte deberás construir un servidor utilizando **NodeJS** y **Express**. Tendrás que conectarlo con tu base de datos mediante **Sequelize**.

Tu servidor deberá contar con las siguientes rutas:

#### **📍 GET | /recipes/:idRecipe**

-  Esta ruta obtiene el detalle de una receta específica. Es decir que devuelve un objeto con la información pedida en el detalle de una receta.
-  La receta es recibida por parámetro (ID).
-  Tiene que incluir los datos de los tipos de dietas asociados a la receta.
-  Debe funcionar tanto para las recetas de la API como para las de la base de datos.

#### **📍 GET | /recipes/name?="..."**

-  Esta ruta debe obtener todas aquellas recetas que coincidan con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
-  Debe poder buscarla independientemente de mayúsculas o minúsculas.
-  Si no existe la receta, debe mostrar un mensaje adecuado.
-  Debe buscar tanto las de la API como las de la base de datos.

#### **📍 POST | /recipes**

-  Esta ruta recibirá todos los datos necesarios para crear una nueva receta y relacionarla con los tipos de dieta solicitados.
-  Toda la información debe ser recibida por body.
-  Debe crear la receta en la base de datos, y esta debe estar relacionada con los tipos de dieta indicados (al menos uno).

#### **📍 GET | /diets**

-  Obtiene un arreglo con todos los tipos de dietas existentes.
-  En una primera instancia, cuando no exista ninguna dieta, deberás precargar la base de datos con las dietas de la [**documentación**](https://spoonacular.com/food-api/docs#Diets).
-  Estas deben ser obtenidas de la API (se evaluará que no haya hardcodeo). Luego de obtenerlas de la API, deben ser guardadas en la base de datos para su posterior consumo desde allí.

<br />

---

<br />

### **🖱 FRONT-END**

Se debe desarrollar una aplicación utilizando **React** y **Redux** que contenga las siguientes vistas:

**📍 LANDING PAGE |** deberás crear una página de inicio o bienvenida con:

-  Alguna imagen de fondo representativa al proyecto.
-  Botón para ingresar a la **`home page`**.

<br />

**📍 HOME PAGE |** la página principal de tu SPA debe contener:

-  SearchBar: un input de búsqueda para encontrar recetas por nombre.
-  Sector en el que se vea un listado de cards con las recetas. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta **`GET /recipes`** y deberá mostrar su:
   -  Imagen.
   -  Nombre.
   -  Tipos de dietas.
-  Cuando se le hace click a una Card deberá redirigir al detalle de esa receta específica.
-  Botones/Opciones para **filtrar** por tipo de dieta, y por si su origen es de la API o de la base de datos (creados por nosotros desde el formulario).
-  Botones/Opciones para **ordenar** tanto ascendentemente como descendentemente las recetas por orden alfabético y por "comida saludable" (_health score_).
-  Paginado: el listado de recetas se hará por partes. Tu SPA debe contar con un paginado que muestre un total de 9 recetas por página.

**⚠️ IMPORTANTE**: se deben mostrar tanto las recetas traidas desde la API como así también las de la base de datos, pero **NO** está permitido almacenar en la base de datos las recetas de la API. **Solamente se pueden guardar aquellas creadas desde el form**.

**⚠️ IMPORTANTE:** debido a que en la API existen alrededor de 5.000 recetas, por cuestiones de performance puedes tomar la simplificación de obtener y **paginar** las primeras 100 recetas.

<br />

**📍 DETAIL PAGE |** en esta vista se deberá mostrar toda la información específica de una receta:

-  ID.
-  Nombre.
-  Resumen del plato.
-  Nivel de comida saludable (health score).
-  Paso a paso.
-  Imagen.
-  Tipos de dieta.

<br />

**📍 FORM PAGE |**: en esta vista se encontrará el formulario para crear una nueva receta.

Este formulario debe ser **controlado completamente con JavaScritp**. No se pueden utilizar validaciones HTML, ni utilizar librerías especiales para esto. Debe contar con los siguientes campos:

-  Nombre.
-  Resumen del plato.
-  Nivel de comida saludable (health score).
-  Paso a paso.
-  Imagen.
-  Posibilidad de seleccionar/agregar varios tipos de dieta en simultáneo.
-  Botón para crear la receta.

> [**IMPORANTE**]: es requisito que el formulario de creación esté validado sólo con JavaScript. Puedes agregar las validaciones que consideres. Por ejemplo: que el nombre de la receta no pueda contener números, o que el health score no pueda exceder determinado valor, etc.

<br />

---

<br />

<div align="center">
<img src="./cooking.png" alt="" />
</div>
