<template>
  <header class="header">
    <div class="logo-container">logo</div>
    <div class="navigation-container">
      <nav class="nav">
        <ul class="navbar">
          <li class="nav-item">
          اخبار و مقالات
          <i class="far fa-angle-down"></i>
        </li>
        <li class="nav-item">
          ویدیو
          <i class="far fa-angle-down"></i>
        </li>
        <li class="nav-item">
          بررسی بازی&zwnj;ها
          <i class="far fa-angle-down"></i>
        </li>
        <li class="nav-item">
          آموزش
          <i class="far fa-angle-down"></i>
        </li>
        <li class="nav-item">
          سکرت گیم
          <i class="far fa-angle-down"></i>
        </li>
        <li class="nav-item">
          تبلیغات
        </li>
        </ul>
      </nav>
    </div>
    <div class="actions-container">login/signup search</div>
  </header>
</template>
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.header {
  display: flex;
  justify-content: space-between;
  background-color: #eaeaea;
  padding: 1rem 2rem;
  font-family: iransans;
}
.navbar {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}
.nav-item {
  display: flex;
  gap: .2rem;
  align-items: center;
}
</style>
