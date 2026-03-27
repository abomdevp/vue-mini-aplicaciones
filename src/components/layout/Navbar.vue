<template>
  <header class="navbar">
    <div class="navbar-container">
      <router-link to="/" class="logo">BootCamp</router-link>

      <nav class="nav-links">
        <router-link to="/">Inicio</router-link>
        <router-link to="/habit-tracker">Seguimiento de Hábitos</router-link>
        <router-link to="/movie-finder">Buscador de Películas</router-link>
        <router-link to="/coffee-shop">Tienda de Café</router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  width: 100%;
  background-color: #111827;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  color: white;
  font-size: 1.1rem;
  font-weight: 700;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-links a {
  color: #d1d5db;
  font-weight: 500;
}

.nav-links a.router-link-exact-active {
  color: white;
}
</style>