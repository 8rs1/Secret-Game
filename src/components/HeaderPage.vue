<script setup>
import { reactive, ref } from 'vue'
const isBarActive = ref(false)
const navItems = reactive([
  {
    id: 1,
    name: 'اخبار و مقالات',
    value: ['اخبار اول', 'اخبار دوم', 'اخبار سوم', 'اخبار چهارم', 'اخبار پنجم'],
    stat: false
  },
  {
    id: 2,
    name: 'ویدیو',
    value: ['ویدیو اول', 'ویدیو دوم', 'ویدیو سوم', 'ویدیو چهارم'],
    stat: false
  },
  {
    id: 3,
    name: 'بررسی بازی ها',
    value: ['گیم اول', 'گیم دوم', 'گیم سوم', 'گیم چهارم', 'گیم پنجم'],
    stat: false
  },
  {
    id: 4,
    name: 'آموزش',
    value: ['آموزش اول', 'آموزش دوم', 'آموزش سوم', 'آموزش چهارم'],
    stat: false
  },
  { id: 5, name: 'سکرت گیم', value: ['درباره ما', 'تماس با ما'], stat: false }
])
</script>
<template>
  <header class="sticky top-0 z-[1000]">
    <div class="header">
      <div class="bars-container block lg:hidden text-2xl" @click="isBarActive = !isBarActive">
        <i class="far fa-bars"></i>
      </div>
      <div class="logo-container">logo</div>
      <nav class="nav">
        <ul class="navbar">
          <li class="nav-item group/nav-item cursor-default" v-for="navItem in navItems" :key="navItem.id">
            <div class="flex gap-1 items-center">
              {{ navItem.name }}
              <i
                class="far fa-angle-down"
                :class="navItem.stat ? 'fa-angle-up' : 'fa-angle-down'"
              ></i>
            </div>
            <ul class="submenu group-hover/nav-item:visible group-hover/nav-item:opacity-100">
              <li
                class="submenu-item"
                v-for="(submenuItem, submenuItemIndex) in navItem.value"
                :key="submenuItemIndex"
              >
                <RouterLink to="/">{{ submenuItem }}</RouterLink>
              </li>
            </ul>
          </li>
          <li class="nav-item">تبلیغات</li>
        </ul>
      </nav>
      <div
        class="h-screen w-64 bg-[#6a30c6] fixed transition-all duration-150 top-0 bottom-0 z-[1001] pb-8 px-5 overflow-auto"
        :class="isBarActive ? 'right-0' : '-right-[200vw]'"
      >
        <div class="h-12 flex items-center justify-between bg-blue-500">
          <div>logo</div>
          <div class="text-2xl cursor-pointer" @click="isBarActive = !isBarActive">
            <i class="far fa-close"></i>
          </div>
        </div>
        <div>
          <form action="/">
            <label for="searchBox" class="mt-3 relative h-12 block">
              <input type="search" name="s" id="searchBox" class="w-full rounded-lg py-1 pr-2 h-full bg-[var(--gray-color)] appearance-none text-black pl-10 outline-none border border-solid focus:border-[var(--slate-color)] transition-all duration-200" placeholder="جستجو">
              <button type="submit" class="text-xl absolute left-3 text-[var(--slate-color)] top-0 bottom-0 my-auto"><i class="far fa-search"></i></button>
            </label>
          </form>
        </div>
        <div class="mt-3 overflow-auto">
          <ul class="select-none">
            <li
              class="nav-item_sm py-1 cursor-pointer"
              :class="
                navItem.stat ? 'text-[var(--text-white)]' : 'text-[var(--text-white-low-opacity)]'
              "
              v-for="navItem in navItems"
              :key="navItem.id"
              @click="navItem.stat = !navItem.stat"
            >
              <div class="flex justify-between">
                {{ navItem.name }}
                <i class="fa" :class="navItem.stat ? 'fa-angle-up' : 'fa-angle-down'"></i>
              </div>
              <ul class="submenu_sm pt-1" v-if="navItem.stat">
                <li
                  class="submenu-item_sm py-1 hover:text-[var(--link-hover-color)]"
                  v-for="(navValue, navValueIndex) in navItem.value"
                  :key="navValueIndex"
                >
                  <RouterLink to="/">{{ navValue }}</RouterLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
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
    </div>
  </header>
</template>
<style scoped>
a {
  @apply inline-block w-full h-full;
}
.header {
  @apply grid grid-cols-3 lg:flex justify-between items-center shadow-[1px_0_10px_#bbb] py-2 px-8 bg-[var(--first-color)] font-[iransans] text-[var(--text-white)];
}
.bars-container {
  @apply cursor-pointer;
}
.nav {
  @apply hidden lg:block
}
.navbar {
  @apply flex gap-5;
}
.nav-item {
  @apply py-3 relative text-[var(--text-white-low-opacity)];
}
.nav-item:hover {
  @apply text-[var(--text-white)];
}
.submenu {
  @apply absolute top-full z-[1000] right-0 text-right shadow-[1px_1px_10px_#aaa] rounded-xl w-60 transition-all duration-200 ease-out overflow-hidden opacity-0 invisible;
}
.submenu-item {
  @apply bg-[var(--first-color)] py-2 px-4;
}
.submenu-item a:hover {
  @apply text-[var(--link-hover-color)];
}
.actions-container {
  @apply flex gap-2 items-center justify-end;
}
.search {
  @apply hidden lg:block text-2xl cursor-pointer;
}
.login,
.signup {
  @apply w-20 h-10 leading-10 text-center bg-[#AB47BC] text-[#fafafa] rounded hover:bg-[#cd69de];
}
.signup {
  @apply bg-[#e0e0e0] text-black hover:bg-[#f3f3f3];
}
</style>
