<template>
  <div class="cart">
    <h2>Orden</h2>

    <p v-if="items.length === 0">Vacío</p>

    <ul class="list">
      <li v-for="item in items" :key="item.id">
        
        <div class="info">
          <span>{{ item.nombre }}</span>
        </div>

        <div class="controls">
          <button @click="$emit('decrease', item.id)">-</button>
          <span>{{ item.cantidad }}</span>
          <button @click="$emit('increase', item.id)">+</button>
        </div>

        <div class="subtotal">
          {{ formatearPrecio(item.precio * item.cantidad) }}
        </div>

        <button class="delete" @click="$emit('remove', item.id)">
          Eliminar
        </button>

      </li>
    </ul>

    <h3>Total a Cancelar: {{ formatearPrecio(total) }}</h3>
  </div>
</template>

<script setup>
defineProps({
  items: Array,
  total: Number
})

defineEmits(['remove', 'increase', 'decrease'])

const formatearPrecio = (valor) => {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP'
  }).format(valor)
}
</script>

<style scoped>
  
  .list {
  list-style: none;
  padding: 0;
}

.list li {
  display: grid;
  grid-template-columns: 1fr auto auto auto;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.controls {
  display: flex;
  gap: 0.3rem;
  align-items: center;
}

.controls button {
  padding: 0.2rem 0.5rem;
}

.subtotal {
  font-weight: bold;
}

</style>