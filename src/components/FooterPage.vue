<script setup></script>
<template>
  <footer class="footer">
    <div>
      <div class="copy">
        &copy; All right reserved for
        <RouterLink to="/">Secret Game</RouterLink>
        2023
      </div>
    </div>
  </footer>
</template>
<style scoped>
a {
  font-weight: bold;
}
.footer {
  background-color: var(--first-color);
  padding: 1rem 0;
}
.copy {
  direction: ltr;
  color: #ddd;
  font-family: monospace;
}
</style>