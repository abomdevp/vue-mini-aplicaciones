<template>
  <div class="card">

    <div v-if="precioOriginal" class="badge">
      Oferta
    </div>

    <img :src="imagen" alt="cafe" />

    <h3>{{ nombre }}</h3>

    <div class="precio">
      <span class="actual">
        {{ formatearPrecio(precio) }}
      </span>

      <span v-if="precioOriginal" class="original">
        {{ formatearPrecio(precioOriginal) }}
      </span>
    </div>

    <button @click="agregar">Agregar</button>
  </div>
</template>

<script setup>
const props = defineProps({
  id: Number,
  nombre: String,
  precio: Number,
  precioOriginal: Number,
  imagen: String
})

const emit = defineEmits(['add-to-cart'])

const agregar = () => {
  emit('add-to-cart', props)
}

const formatearPrecio = (valor) => {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP'
  }).format(valor)
}

</script>

<style scoped>
.card {
  position: relative;
  background: white;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
}

img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

button {
  margin-top: 0.5rem;
  cursor: pointer;
}

.precio {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  align-items: center;
}

.actual {
  font-weight: bold;
  color: #111827;
}

.original {
  text-decoration: line-through;
  color: #9ca3af;
  font-size: 0.9rem;
}

.badge {
  background: #ef4444;
  color: white;
  font-size: 0.7rem;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  position: absolute;
  top: 10px;
  left: 10px;
}

</style>