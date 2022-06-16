<template>
  <div
    class="bg-gray-100 rounded-lg w-80 mx-auto gap-4 p-6 space-y-3 m-6 md:w-128 md:w-1/2 dark:border-transparent dark:bg-dark-gray-800"
  >
    <p class="font-semibold">Front-end development</p>
    <ul class="list-none">
      <li v-for="item in frontend" :key="item.index" class="p-3">
        <i class="fi fi-br-arrow-circle-right text-blue-500"></i
        ><span class="pl-3">{{ item.name }}</span>
      </li>
    </ul>
    <p class="font-semibold">Back-end development</p>
    <ul class="list-none">
      <li v-for="item in backend" :key="item.index" class="p-3">
        <i class="fi fi-br-arrow-circle-right text-blue-500"></i
        ><span class="pl-3">{{ item.name }}</span>
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
      frontend: [
        {
          name: "HTML & CSS",
          color: "#ea580c",
        },
        {
          name: "Vue.js",
          color: "#3fb984",
        },
        {
          name: "React.js",
          color: "#5ed3f3",
        },

        {
          name: "Foo4",
        },
      ],
      backend: [
        {
          name: "Node.js",
          color: "#ea580c",
        },
        {
          name: "MySQL",
          color: "#3fb984",
        },
        {
          name: "MongoDB",
          color: "#3fb984",
        },
      ],
    };
  },
};
</script>

<style></style>
