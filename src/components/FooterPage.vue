<script setup></script>
<template>
  <footer class="footer">
    <div class="container">
      <div class="main">
        <div class="links-container">
          <div>
            <RouterLink to="/">صفحه اصلی</RouterLink>
          </div>
          <div>
            <RouterLink to="/about">درباره ما</RouterLink>
          </div>
          <div>
            <RouterLink to="/contactus">تماس با ما</RouterLink>
          </div>
        </div>
        <div dir="ltr">
          &copy; All right reserved for
          <RouterLink to="/">Secret Game</RouterLink>
          2023
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped>
a {
  @apply font-bold hover:text-[var(--link-hover-color)];
}
.footer {
  @apply bg-[var(--first-color)] py-4;
}
.links-container {
  @apply flex gap-4 text-[var(--text-white-low-opacity)];
}
.main {
  @apply text-[#ddd] font-mono flex justify-between md:flex-row flex-col;
}
</style>
