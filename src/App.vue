<template>
  <div :class="[isDark ? 'dark' : '']">
    <div class="dark:bg-dark-gray-900 dark:text-white">
      <ToggleMode :darkMode="darkMode" :lightMode="lightMode" />
      <div
        class="p-3 xl:px-20 md:flex md:flex-row md:gap-6 min-h-[calc(100vh_-_3rem)]"
      >
        <div class="md:basis-1/4 lg:basis-2/5 md:pt-36 lg:pt-48">
          <ProfileHeader />
        </div>
        <div class="md:basis-3/4 lg:basis-3/5 sm:px-6">
          <Navbar />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ToggleMode from "./components/ToggleMode.vue";
import ProfileHeader from "./components/ProfileHeader.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    ToggleMode,
    ProfileHeader,
    Navbar,
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
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import url("https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css");
@import url("https://cdn-uicons.flaticon.com/uicons-bold-rounded/css/uicons-bold-rounded.css");
@import url("https://cdn-uicons.flaticon.com/uicons-solid-rounded/css/uicons-solid-rounded.css");
@import url("https://cdn-uicons.flaticon.com/uicons-bold-straight/css/uicons-bold-straight.css");

#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
