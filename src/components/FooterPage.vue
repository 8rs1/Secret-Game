<script setup></script>
<template>
  <footer class="footer">
    <div>
      <div class="copy" dir="ltr">
        &copy; All right reserved for
        <RouterLink to="/">Secret Game</RouterLink>
        2023
      </div>
    </div>
  </footer>
</template>
<style scoped>
a {
  @apply font-bold
}
.footer {
  @apply bg-[var(--first-color)] py-4
}
.copy {
  @apply text-[#ddd] font-mono
}
</style>