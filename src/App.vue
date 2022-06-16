<template>
  <div :class="[isDark ? 'dark' : '']">
    <div class="dark:bg-dark-gray-900 dark:text-white min-h-screen">
      <Home :darkMode="darkMode" :lightMode="lightMode" />
    </div>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
export default {
  name: "App",
  components: {
    Home,
  },
  data() {
    return {
      isDark: false,
    };
  },
  methods: {
    darkMode() {
      this.isDark = true;
    },
    lightMode() {
      this.isDark = false;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;500;600;700;800;900&display=swap");
@import url("https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css");
@import url("https://cdn-uicons.flaticon.com/uicons-bold-rounded/css/uicons-bold-rounded.css");
@import url("https://cdn-uicons.flaticon.com/uicons-solid-rounded/css/uicons-solid-rounded.css");

#app {
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
