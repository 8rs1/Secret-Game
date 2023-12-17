<template>
  <header class="header">
    <div class="logo-container">logo</div>
    <div class="navigation-container">
      <nav class="nav">
        <ul class="navbar">
          <li class="nav-item">
            اخبار و مقالات
            <i class="far fa-angle-down"></i>
            <ul class="submenu">
              <li class="submenu-item">لورم1</li>
              <li class="submenu-item">لورم2</li>
              <li class="submenu-item">لورم3</li>
              <li class="submenu-item">لورم4</li>
              <li class="submenu-item">لورم5</li>
              <li class="submenu-item">لورم6</li>
            </ul>
          </li>
          <li class="nav-item">
            ویدیو
            <i class="far fa-angle-down"></i>
            <ul class="submenu">
              <li class="submenu-item">لورم1</li>
              <li class="submenu-item">لورم2</li>
              <li class="submenu-item">لورم3</li>
              <li class="submenu-item">لورم4</li>
              <li class="submenu-item">لورم5</li>
              <li class="submenu-item">لورم6</li>
            </ul>
          </li>
          <li class="nav-item">
            بررسی بازی&zwnj;ها
            <i class="far fa-angle-down"></i>
            <ul class="submenu">
              <li class="submenu-item">لورم1</li>
              <li class="submenu-item">لورم2</li>
              <li class="submenu-item">لورم3</li>
              <li class="submenu-item">لورم4</li>
              <li class="submenu-item">لورم5</li>
              <li class="submenu-item">لورم6</li>
            </ul>
          </li>
          <li class="nav-item">
            آموزش
            <i class="far fa-angle-down"></i>
            <ul class="submenu">
              <li class="submenu-item">لورم1</li>
              <li class="submenu-item">لورم2</li>
              <li class="submenu-item">لورم3</li>
              <li class="submenu-item">لورم4</li>
              <li class="submenu-item">لورم5</li>
              <li class="submenu-item">لورم6</li>
            </ul>
          </li>
          <li class="nav-item">
            سکرت گیم
            <i class="far fa-angle-down"></i>
            <ul class="submenu">
              <li class="submenu-item">لورم1</li>
              <li class="submenu-item">لورم2</li>
              <li class="submenu-item">لورم3</li>
              <li class="submenu-item">لورم4</li>
              <li class="submenu-item">لورم5</li>
              <li class="submenu-item">لورم6</li>
            </ul>
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
  position: relative;
  width: 8rem;
  justify-content: center;
  text-align: center;
}
.nav-item:hover .fa-angle-down::before {
  content: "\f106";
}
.submenu {
  position: absolute;
  top: 10%;
  box-shadow: 1px 1px 10px #aaa;
  border-radius: 12px;
  width: 100%;
  visibility: hidden;
  opacity: 0;
  transition: all 100ms ease-out;
  overflow: hidden;
}
.submenu-item {
  background-color: #fff;
  padding: .3rem;
}
.nav-item:hover>.submenu {
  top: 100%;
  visibility: visible;
  opacity: 1;
  animation: drop-down_animation 200ms ease 1 alternate;
}
@keyframes drop-down_animation {
  0%,50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
