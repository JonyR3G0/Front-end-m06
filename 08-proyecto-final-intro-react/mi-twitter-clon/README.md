# Mi Twitter Clon  

Proyecto #8 del modulo 06

La idea es construir un clon simplificado de Twitter donde se puede:  
- Ver una línea de tiempo de tweets.  
- Publicar nuevos tweets.  
- Dar “me gusta” a los tweets.  
- Manejar estado con hooks y guardar datos en localStorage.  
- Implementar rutas protegidas con React Router.  

> [!IMPORTANT]  
> Este proyecto usa **React con Vite**, junto con **React Router DOM** y **localStorage** para persistencia.  

---

## 📂 Estructura del proyecto 
``` bash
/mi-twitter-clon
│── public/
│── src/
│ ├── components/
│ │ ├── Tweet.js
│ │ ├── TweetList.js
│ │ ├── TweetForm.js
│ ├── pages/
│ │ ├── Home.js
│ │ ├── Profile.js
│ │ ├── Login.js
│ ├── App.js
│ ├── index.js
│── package.json
│── README.md
```

---

## ⚙️ Funcionalidad principal  

- `Tweet.js`: renderiza un tweet individual con botón de “me gusta”.  
- `TweetList.js`: lista todos los tweets.  
- `TweetForm.js`: formulario para publicar un nuevo tweet.  
- `Home.js`: timeline con estado y persistencia en localStorage.  
- `Profile.js`: perfil del usuario (ruta protegida).  
- `Login.js`: inicio de sesión y control de autenticación.  

> [!NOTE]  
> Si intentas acceder a **/profile** sin estar autenticado → se redirige automáticamente al login.  

---

## 📝 Notas  
