<template>
  <div class="flex justify-end pt-6 pr-6">
    <button @click="darkMode" class="dark:hidden hover:text-blue-500">
      <i class="fi fi-br-moon"></i>
    </button>
    <button
      @click="lightMode"
      class="hidden dark:block hover:text-blue-500 sun-icon"
    >
      <i class="fi fi-br-sun"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "ToggleMode-comp",
  props: {
    darkMode: Function,
    lightMode: Function,
  },
};
</script>

<style lang="scss">
@import url("https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css");

.moon-icon {
  width: 15px;
  height: 15px;
}
</style>
