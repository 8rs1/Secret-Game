<script setup>
import { reactive } from 'vue';

const dropDownItems = reactive([
  {id: 1, value: "عنوان اول"},
  {id: 2, value: "عنوان دوم"},
  {id: 3, value: "عنوان سوم"},
  {id: 4, value: "عنوان چهارم"},
  {id: 5, value: "عنوان پنجم"},
  {id: 6, value: "عنوان ششم"},
])
const navItems = reactive([
  {id:1, name: "اخبار و مقالات"},
  {id:2, name: "ویدیو"},
  {id:3, name: "بررسی بازی ها"},
  {id:4, name: "آموزش"},
  {id:5, name: "سکرت گیم"},
])
</script>
<template>
  <header class="header">
    <div class="logo-container">logo</div>
    <div class="navigation-container">
      <nav class="nav">
        <ul class="navbar">
          <li class="nav-item" v-for="navItem in navItems" :key="navItem.id">
            {{ navItem.name }}
            <i class="far fa-angle-down"></i>
            <ul class="submenu">
              <li class="submenu-item" v-for="item in dropDownItems" :key="item.id"><RouterLink to="javascript:void(0)">{{ item.value }}</RouterLink></li>
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
a:hover {
  color: var(--link-hover-color);
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
  background-color: var(--first-color);
  box-shadow: 1px 0 10px #bbb;
  padding: .5rem 2rem;
  font-family: iransans;
  position: sticky;
  top: 0;
  color: var(--text-white);
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
  cursor: pointer;
  color: var(--text-white-low-opacity);
}
.nav-item:hover {
  color: var(--text-white);
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
  background-color: var(--first-color);
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