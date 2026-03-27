<template>
  <section class="home">
    <div class="hero">
      <h1>Ejercicio BootCamp</h1>
      <p>
        Colección de mini aplicaciones desarrolladas con Vue 3 para demostrar
        habilidades en frontend: reactividad, consumo de APIs, comunicación entre
        componentes y navegación SPA.
      </p>
    </div>

    <div class="projects" fade-in>
      <router-link to="/habit-tracker" class="card">
        <h3>Seguimiento de Hábitos</h3>
        <p>Gestión de hábitos con persistencia en localStorage.</p>
      </router-link>

      <router-link to="/movie-finder" class="card">
        <h3>Buscador de Películas</h3>
        <p>Consumo de API externa con manejo de estados.</p>
      </router-link>

      <router-link to="/coffee-shop" class="card">
        <h3>Tienda de Café</h3>
        <p>Simulación de e-commerce con carrito y componentes.</p>
      </router-link>
    </div>
  </section>
</template>

<style scoped>
.home {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
}

.hero {
  text-align: center;
  margin-bottom: 2rem;
}

.hero h1 {
  font-size: 2rem;
}

.projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  transition: all 0.25s ease;
  color: #111827;
}

.card:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}
</style>