<template>
  <div class="flex justify-center items-center mt-3 py-2 sm:py-6 gap-x-4">
    <button
      v-for="tab in tabs"
      :key="tab"
      :class="['tab-button text-neutral-400', { active: currentTab === tab }]"
      @click="currentTab = tab"
    >
      <h4 class="p-4 items-center font-semibold">
        {{ tab }}
      </h4>
    </button>
  </div>
  <component :is="currentTab" class="animate-fade-in-up mt-3"></component>
</template>

<script>
import Projects from "./Projects.vue";
import Skills from "./Skills.vue";
import About from "./About.vue";
export default {
  name: "navbar-comp",
  data() {
    return {
      currentTab: "Skills",
      tabs: ["Skills", "Projects", "About"],
    };
  },
  components: {
    Projects,
    Skills,
    About,
  },
};
</script>

<style>
.tab-button.active {
  color: #3b82f6;
}
</style>
