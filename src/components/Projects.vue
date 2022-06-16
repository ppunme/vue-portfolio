<template>
  <div class="relative container-snap">
    <div
      class="absolute h-64 w-64 md:h-72 md:w-72 bg-regal-green rounded-full left-0 right-0 mx-auto sm:top-2 md:left-8 md:right-auto md:top-0 md:mx-0 lg:left-12 xl:left-16"
    ></div>
    <div class="absolute right-6 -top-3 animate-bounce-in-right">
      <p class="text-xs text-blue-500 font-mono font-semibold">
        Swipe <i class="fi fi-br-arrow-right"></i>
      </p>
    </div>
    <div
      class="relative snap-x snap-mandatory flex overflow-x-auto mx-auto w-80 sm:w-108 lg:w-132 xl:w-144 pt-2"
    >
      <div
        v-for="item in items"
        :key="item.index"
        class="snap-start shrink-0 p-6 w-80 sm:w-108 lg:w-132 xl:w-144"
      >
        <div
          class="flex flex-col md:flex-row gap-14 sm:gap-10 md:gap-3 lg:gap-6"
        >
          <div class="basis-2/3">
            <img
              class="shrink-0 w-full sm:w-4/5 md:w-full mx-auto rounded-lg drop-shadow-lg"
              :src="item.img"
            />
          </div>
          <div class="basis-1/3">
            <p class="font-bold">{{ item.projectName }}</p>
            <p class="mt-3">{{ item.projectDesc }}</p>

            <div class="flex flex-row mt-3">
              <a class="btn-icon">
                <i class="bi bi-github"></i>
              </a>
              <a class="btn-icon ml-2" :href="item.link" target="_blank">
                <i class="fi fi-br-clip flex self-center"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="mt-6">
          <p class="font-semibold">Language &amp; Framework</p>
          <ul class="list-none">
            <li><i class="fi fi-br-arrow-right"></i> Vue.js</li>
            <li><i class="fi fi-br-arrow-right"></i> Bootstrap</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import invWeb1 from "../assets/screenshots/invoice-app-web-1.png";
import invWeb2 from "../assets/screenshots/invoice-app-web-2.png";
import invWeb3 from "../assets/screenshots/invoice-app-web-3.png";
import invWeb4 from "../assets/screenshots/invoice-app-web-4.png";

export default {
  name: "Projects-comp",
  components: {},
  data() {
    return {
      items: [
        {
          projectName: "Invoice management App",
          projectDesc:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          details: "project1 aaaaaaaa",
          img: invWeb1,
          link: "https://ppunme.github.io/vue-invoice-app/#/",
        },
        {
          projectName: "Foo2",
          projectDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
          details: "project2 bbbbbbb",
          img: invWeb2,
        },
        {
          projectName: "Foo3",
          projectDesc:
            "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
          details: "project3 cccccc",
          img: invWeb3,
        },
        {
          projectName: "Foo4",
          projectDesc:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
          img: invWeb4,
        },
      ],
    };
  },
};
</script>

<style>
/* Hide scrollbar for Chrome, Safari and Opera */
.container-snap::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.container-snap {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
