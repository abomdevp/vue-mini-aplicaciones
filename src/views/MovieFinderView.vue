<template>
  <section class="page">
    <h1>Buscador de Películas</h1>

    <!-- BUSCADOR -->
    <div class="search">
      <input
        v-model="query"
        @keyup.enter="buscarPeliculas"
        type="text"
        placeholder="Buscar película..."
      />
      <button @click="buscarPeliculas">Buscar</button>
    </div>

    <!-- LOADING -->
    <p v-if="loading">Cargando...</p>

    <!-- SIN RESULTADOS -->
    <p v-if="!loading && peliculas.length === 0 && buscado">
      No se encontraron películas, intenta con Batman en el buscador.
    </p>

    <!-- RESULTADOS -->
    <div class="grid">
      <div v-for="movie in peliculas" :key="movie.imdbID" class="card">
        <img :src="movie.Poster" alt="poster" />
        <h3>{{ movie.Title }}</h3>
        <p>{{ movie.Year }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const query = ref('')
const peliculas = ref([])
const loading = ref(false)
const buscado = ref(false)

// ⚠️ puedes usar esta API pública de prueba
const API_URL = 'https://www.omdbapi.com/?apikey=564727fa&s='

const buscarPeliculas = async () => {
  if (!query.value.trim()) return

  loading.value = true
  buscado.value = true

  try {
    const res = await axios.get(API_URL + query.value)

    if (res.data.Response === 'True') {
      peliculas.value = res.data.Search
    } else {
      peliculas.value = []
    }

  } catch (error) {
    console.error(error)
    peliculas.value = []
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
}

.search {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

input {
  flex: 1;
  padding: 0.5rem;
}

button {
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
}

.card {
  background: white;
  padding: 0.5rem;
  border-radius: 8px;
  text-align: center;
}

.card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}
</style>