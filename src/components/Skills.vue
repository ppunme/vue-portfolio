<template>
  <div
    class="bg-gray-100 rounded-lg w-72 sm:w-80 mx-auto gap-4 py-6 px-8 lg:py-10 lg:px-14 space-y-3 md:w-96 dark:bg-dark-gray-800"
  >
    <p class="font-semibold">Front-end development</p>
    <ul class="list-none">
      <li v-for="item in frontend" :key="item.index" class="p-3">
        <i class="fi fi-br-arrow-circle-right text-blue-500"></i
        ><span class="pl-3">{{ item }}</span>
      </li>
    </ul>

    <p class="font-semibold">Back-end development</p>
    <ul class="list-none">
      <li v-for="item in backend" :key="item.index" class="p-3">
        <i class="fi fi-br-arrow-circle-right text-blue-500"></i
        ><span class="pl-3">{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Skill-comp",
  components: {},
  data() {
    return {
      frontend: ["HTML", "CSS", "Vue.js", "React.js"],
      backend: ["Node.js", "MySQL", "MongoDB"],
    };
  },
};
</script>

<style></style>
