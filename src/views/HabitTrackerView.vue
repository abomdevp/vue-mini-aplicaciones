<template>
  <section class="page">
    <h1>Seguimiento de Hábitos</h1>

    <!-- INPUT -->
    <div class="input-group">
      <input
        v-model="nuevoHabito"
        type="text"
        placeholder="Escribe un hábito..."
      />
      <button @click="agregarHabito">Añadir</button>
    </div>

    <!-- CONTADOR -->
    <p class="contador">
      Has completado {{ completados }} de {{ habitos.length }} hábitos
    </p>

    <!-- LISTA -->
    <ul class="lista">
      <li v-for="(habito, index) in habitos" :key="index">
        <input
          type="checkbox"
          v-model="habito.completado"
        />

        <span :class="{ done: habito.completado }">
          {{ habito.texto }}
        </span>

        <button class="delete" @click="eliminarHabito(index)">
          Eliminar Hábito
        </button>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'

const nuevoHabito = ref('')
const habitos = ref([])

// agregar hábito
const agregarHabito = () => {
  if (!nuevoHabito.value.trim()) return

  habitos.value.push({
    texto: nuevoHabito.value,
    completado: false
  })

  nuevoHabito.value = ''
}

// eliminar hábito
const eliminarHabito = (index) => {
  habitos.value.splice(index, 1)
}

// contador
const completados = computed(() =>
  habitos.value.filter(h => h.completado).length
)

// guardar en localStorage
watch(habitos, (nuevoValor) => {
  localStorage.setItem('habitos', JSON.stringify(nuevoValor))
}, { deep: true })

// cargar al iniciar
onMounted(() => {
  const data = localStorage.getItem('habitos')
  if (data) {
    habitos.value = JSON.parse(data)
  }
})
</script>

<style scoped>
.page {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
}

.input-group {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

input[type="text"] {
  flex: 1;
  padding: 0.5rem;
}

button {
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.lista {
  list-style: none;
  padding: 0;
}

.lista li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.done {
  text-decoration: line-through;
  color: gray;
}

.delete {
  background: none;
  border: none;
  cursor: pointer;
}
</style>