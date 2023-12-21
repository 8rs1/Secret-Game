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
<style scoped >
a {
  @apply inline-block w-full h-full
}
.header {
  @apply flex justify-between items-center shadow-[1px_0_10px_#bbb] py-2 px-8 bg-[var(--first-color)] font-[iransans] sticky top-0 text-[var(--text-white)]
}
.navbar {
  @apply flex justify-between gap-4
}
.nav-item {
  @apply h-10 flex gap-1 items-center relative w-32 justify-center text-center cursor-pointer text-[var(--text-white-low-opacity)]
}
.nav-item:hover {
  @apply text-[var(--text-white)]
}
.nav-item:hover .fa-angle-down::before {
  @apply content-["\f106"]
}
.submenu {
  @apply absolute top-20 right-0 text-right shadow-[1px_1px_10px_#aaa] rounded-xl w-60 invisible opacity-0 transition-all duration-100 ease-out overflow-hidden
}
.submenu-item {
  @apply bg-[var(--first-color)] py-2 px-4
}
.submenu-item a {
  @apply text-[var(--text-white-low-opacity)]
}
.submenu-item a:hover {
  @apply text-[var(--link-hover-color)]
}
.nav-item:hover>.submenu {
  @apply top-full visible opacity-100 animate-dropdown_animation
}
.actions-container {
  @apply flex gap-2 items-center
}
.search {
  @apply text-2xl cursor-pointer
}
.login, .signup {
  @apply w-20 h-10 leading-10 text-center bg-[#AB47BC] text-[#fafafa] rounded
}
.signup {
  @apply bg-[#e0e0e0] text-black
}
.login:hover {
  @apply bg-[#cd69de]
}
</style>