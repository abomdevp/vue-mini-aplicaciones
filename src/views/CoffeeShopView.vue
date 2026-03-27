<template>
  <section class="page">
    <h1>Tienda de Café</h1>

    <div class="layout">
      
      <!-- PRODUCTOS -->
      <div class="products">
        <ProductCard
          v-for="producto in productos"
          :key="producto.id"
          :id="producto.id"
          :nombre="producto.nombre"
          :precio="producto.precio"
          :precioOriginal="producto.precioOriginal"
          :imagen="producto.imagen"
          @add-to-cart="agregarAlCarrito"
        />
      </div>

      <!-- CARRITO -->
      <Cart
        :items="carrito"
        :total="total"
        @remove="eliminarDelCarrito"
        @increase="aumentarCantidad"
        @decrease="disminuirCantidad"
      />

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProductCard from '../components/coffee/ProductCard.vue'
import Cart from '../components/coffee/Cart.vue'

const productos = ref([
  {
    id: 1,
    nombre: 'Café Premium',
    precio: 4200,
    precioOriginal: 7200,
    imagen: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93'
  },
  {
    id: 2,
    nombre: 'Café Volcán',
    precio: 4500,
    precioOriginal: 6200,
    imagen: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93'
  },
  {
    id: 3,
    nombre: 'Café Orgánico',
    precioOriginal: 5200,
    precio: 4800,
    imagen: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93'
  },
  {
    id: 4,
    nombre: 'Café Descafeinado',
    precio: 4300,
    precioOriginal: 8200,
    imagen: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93'
  },
  {
    id: 5,
    nombre: 'Café Intenso',
    precio: 4600,
    precioOriginal: 9200,
    imagen: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93'
  },
  {
    id: 6,
    nombre: 'Café Suave',
    precio: 4100,
    precioOriginal: 7200,
    imagen: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93'
  },
  {
    id: 7,
    nombre: 'Café Gourmet',
    precio: 5000,
    precioOriginal: 9200,
    imagen: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93'
  },
  {
    id: 8,
    nombre: 'Café Tradicional',
    precio: 3900,
    precioOriginal: 5200,
    imagen: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93'
  }
])

const carrito = ref([])

// agregar al carrito
const agregarAlCarrito = (producto) => {
  const existe = carrito.value.find(p => p.id === producto.id)

  if (existe) {
    existe.cantidad++
  } else {
    carrito.value.push({
      ...producto,
      cantidad: 1
    })
  }
}

// eliminar
const eliminarDelCarrito = (id) => {
  carrito.value = carrito.value.filter(p => p.id !== id)
}

// total
const total = computed(() =>
  carrito.value.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
)

// aumentar cantidad
const aumentarCantidad = (id) => {
  const item = carrito.value.find(p => p.id === id)
  if (item) item.cantidad++
}

// disminuir cantidad
const disminuirCantidad = (id) => {
  const item = carrito.value.find(p => p.id === id)
  if (item && item.cantidad > 1) {
    item.cantidad--
  }
}
</script>

<style scoped>
.page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
}
</style>