<template>
  <h1>homePage</h1> 
  <div class="pitures">
    <div class="divpic">
      <img src="../assets/console-banner.jpg" alt="consolbanner" class="pics">
    </div>
    <div class="divpic">
      <img src="../assets/janebi-banner.jpg" alt="janebibanner" class="pics">
    </div>
  </div>
</template>
<style scoped>
    .pitures {
      height: 227px;
      display: flex;

    }
    .divpic {
      width: 50%;
      height: 227px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .pics {
      width: 600px;
      height: 200px;
      border-radius: 12px;
    }

</style>