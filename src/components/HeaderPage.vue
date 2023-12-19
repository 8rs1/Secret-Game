
<template>
  <header class="header">
    <div class="logo-container">logo</div>
    <div class="navigation-container">
      <nav class="nav">
        <ul class="navbar">
          <li class="nav-item">
            اخبار
            <i class="far fa-angle-down"></i>
            <ul class="submenu">
              <li class="submenu-item"><RouterLink to="javascript:void(0)">لورم1</RouterLink></li>
              <li class="submenu-item"><RouterLink to="javascript:void(0)">لورم2</RouterLink></li>
              <li class="submenu-item"><RouterLink to="javascript:void(0)">لورم3</RouterLink></li>
              <li class="submenu-item"><RouterLink to="javascript:void(0)">لورم4</RouterLink></li>
              <li class="submenu-item"><RouterLink to="javascript:void(0)">لورم5</RouterLink></li>
              <li class="submenu-item"><RouterLink to="javascript:void(0)">لورم6</RouterLink></li>
            </ul>
          </li>
          <li class="nav-item">
            ویدیو
            <i class="far fa-angle-down"></i>
            <ul class="submenu">
              <li class="submenu-item"><RouterLink to="javascript:void(0)">لورم1</RouterLink></li>
              <li class="submenu-item"><RouterLink to="javascript:void(0)">لورم2</RouterLink></li>
              <li class="submenu-item"><RouterLink to="javascript:void(0)">لورم3</RouterLink></li>
              <li class="submenu-item"><RouterLink to="javascript:void(0)">لورم4</RouterLink></li>
              <li class="submenu-item"><RouterLink to="javascript:void(0)">لورم5</RouterLink></li>
              <li class="submenu-item"><RouterLink to="javascript:void(0)">لورم6</RouterLink></li>
            </ul>
          </li>
          <li class="nav-item">
            بررسی بازی&zwnj;ها
            <i class="far fa-angle-down"></i>
            <ul class="submenu">
              <li class="submenu-item"><RouterLink to="javascript:void(0)">لورم1</RouterLink></li>
              <li class="submenu-item"><RouterLink to="javascript:void(0)">لورم2</RouterLink></li>
              <li class="submenu-item"><RouterLink to="javascript:void(0)">لورم3</RouterLink></li>
              <li class="submenu-item"><RouterLink to="javascript:void(0)">لورم4</RouterLink></li>
              <li class="submenu-item"><RouterLink to="javascript:void(0)">لورم5</RouterLink></li>
              <li class="submenu-item"><RouterLink to="javascript:void(0)">لورم6</RouterLink></li>
            </ul>
          </li>
          <li class="nav-item">
            آموزش
            <i class="far fa-angle-down"></i>
            <ul class="submenu">
              <li class="submenu-item"><RouterLink to="javascript:void(0)">لورم1</RouterLink></li>
              <li class="submenu-item"><RouterLink to="javascript:void(0)">لورم2</RouterLink></li>
              <li class="submenu-item"><RouterLink to="javascript:void(0)">لورم3</RouterLink></li>
              <li class="submenu-item"><RouterLink to="javascript:void(0)">لورم4</RouterLink></li>
              <li class="submenu-item"><RouterLink to="javascript:void(0)">لورم5</RouterLink></li>
              <li class="submenu-item"><RouterLink to="javascript:void(0)">لورم6</RouterLink></li>
            </ul>
          </li>
          <li class="nav-item">
            سکرت گیم
            <i class="far fa-angle-down"></i>
            <ul class="submenu">
              <li class="submenu-item"><RouterLink to="javascript:void(0)">لورم1</RouterLink></li>
              <li class="submenu-item"><RouterLink to="javascript:void(0)">لورم2</RouterLink></li>
              <li class="submenu-item"><RouterLink to="javascript:void(0)">لورم3</RouterLink></li>
              <li class="submenu-item"><RouterLink to="javascript:void(0)">لورم4</RouterLink></li>
              <li class="submenu-item"><RouterLink to="javascript:void(0)">لورم5</RouterLink></li>
              <li class="submenu-item"><RouterLink to="javascript:void(0)">لورم6</RouterLink></li>
            </ul>
          </li>
          <li class="nav-item">
            تبلیغات
          </li>
        </ul>
      </nav>
    </div>
    <div class="actions-container">
      <div class="search" title="جستجو"><i class="far fa-search"></i></div>
      <div class="login" title="ورود">
        <RouterLink to="/login">ورود</RouterLink>
      </div>
      <div class="signup" title="ثبت نام">
        <RouterLink to="/signup">ثبت نام</RouterLink>
      </div>
    </div>
  </header>
</template>
<style scoped>
a {
  text-decoration: none;
  color: inherit;
  display: inline-block;
  width: 100%;
  height: 100%;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fafafa;
  box-shadow: 1px 0 10px #bbb;
  padding: .5rem 2rem;
  font-family: iransans;
  position: sticky;
  top: 0;
}
.navbar {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}
.nav-item {
  height: 2.5rem;
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
  right: 0;
  text-align: right;
  box-shadow: 1px 1px 10px #aaa;
  border-radius: 12px;
  width: 15rem;
  visibility: hidden;
  opacity: 0;
  transition: all 100ms ease-out;
  overflow: hidden;
}
.submenu-item {
  background-color: #fff;
  padding: .5rem 1rem;
}
.nav-item:hover>.submenu {
  top: 102%;
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
.actions-container {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
.search {
  font-size: 1.4rem;
  cursor: pointer;
}
.login, .signup {
  width: 5rem;
  height: 2.5rem;
  line-height: 2.5rem;
  text-align: center;
  background-color: #AB47BC;
  color: #fafafa;
  border-radius: .3rem;
}
.signup {
  background-color: #E0E0E0;
  color: initial;
}
</style>

