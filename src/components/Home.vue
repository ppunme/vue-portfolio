<template>
  <div class="flex justify-end pt-6 pr-6">
    <button @click="darkMode" class="dark:hidden hover:text-blue-500">
      <i class="fi fi-br-moon"></i>
    </button>
    <button @click="lightMode" class="hidden dark:block hover:text-blue-500">
      <i class="fi fi-br-sun"></i>
    </button>
  </div>

  <div class="md:flex md:flex-row md:gap-6 md:items-center">
    <div class="md:basis-1/3 lg:basis-2/5">
      <ProfileHeader />
    </div>
    <div class="md:basis-2/3 lg:basis-3/5">
      <Navbar />
    </div>
  </div>
</template>

<script>
import ProfileHeader from "./ProfileHeader.vue";
import Navbar from "./Navbar.vue";

export default {
  name: "Home-comp",
  props: {
    darkMode: Function,
    lightMode: Function,
  },

  components: {
    ProfileHeader,
    Navbar,
  },
};
</script>

<style lang="scss">
.nav-item {
  padding: 10px;
}
</style>
