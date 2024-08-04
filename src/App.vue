<template>
  <div class="app">
    <div class="main-content">
      <aside class="sidebar">
        <nav-component></nav-component>
      </aside>
      <main class="main">
        <div class="container">
        <p class="text-title">全端工程師</p>
        <h2 class="text-xl mt-8">Welcome to My Portfolio</h2>
        <h2 class="text-xl mt-8">Welcome to My Portfolio</h2>
        <h2 class="text-xl mt-8">Welcome to My Portfolio</h2>
        <h2 class="text-xl mt-8">Welcome to My Portfolio</h2>
        <h2 class="text-xl mt-8">Welcome to My Portfolio</h2>
        <!-- Add more content here -->
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f8f9fa;
}

.main-content {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.sidebar {
  width: 250px;
  background-color: #2c3e50;
  overflow-y: auto;
}

.main {
  flex: 1;
  background-color: #ecf0f1;
  overflow-y: auto;
  padding: 20px;
}

.header-component {
  flex-shrink: 0;
}
.footer-component {
  flex-shrink: 0;
}
</style>
