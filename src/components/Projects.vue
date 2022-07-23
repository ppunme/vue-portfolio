<template>
  <div class="md:max-w-[33rem] md:mx-auto xl:max-w-[36rem]">
    <div class="gap-2 md:ml-4 lg:ml-8 md:mb-4 lg:mb-8 hidden md:flex">
      <button
        @click="scrollToPrevItem"
        class="flex justify-center rounded-full w-8 h-8 border-2 border-neutral-400 text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700"
      >
        <i class="fi fi-bs-angle-left flex self-center"></i>
      </button>
      <button
        @click="scrollToNextItem"
        class="flex justify-center rounded-full w-8 h-8 border-2 border-neutral-400 text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700"
      >
        <i class="fi fi-bs-angle-right flex self-center"></i>
      </button>
    </div>
    <div class="relative container-snap">
      <!-- Circle background -->
      <div
        class="absolute w-64 h-64 sm:w-68 sm:h-68 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-lavender-500 rounded-full left-0 right-0 mx-auto sm:top-2 md:left-8 md:right-auto md:-top-1 lg:-left-8 lg:-top-2 xl:left-2 xl:-top-1 dark:bg-lavender-500/80"
      ></div>

      <!-- Swipe bounce -->
      <div
        class="absolute right-6 -top-3 animate-bounce-in-right temporary-bounce transition-opacity ease-in duration-700 opacity-100"
      >
        <p class="text-xs text-blue-500 font-mono font-semibold">
          Swipe <i class="fi fi-br-arrow-right"></i>
        </p>
      </div>

      <!-- Scroll snap -->
      <div
        class="relative snap-x snap-mandatory flex overflow-x-auto mx-auto w-80 sm:w-112 md:w-132 ;lg:w-140 xl:w-144 pt-2"
      >
        <div
          v-for="item in items"
          :key="item.index"
          class="snap-start shrink-0 p-6 w-80 sm:w-112 md:w-132 lg:w-140 xl:w-144"
        >
          <div class="flex flex-col md:flex-row gap-14 sm:gap-10 lg:gap-6">
            <div class="md:basis-3/5">
              <img
                class="shrink-0 w-full sm:w-4/5 md:w-full mx-auto rounded-lg drop-shadow-lg"
                :src="item.img"
              />
            </div>
            <div class="md:basis-2/5">
              <div v-if="item.lang">
                <p class="font-semibold">Frameworks</p>
                <ul class="list-none mt-3">
                  <li v-for="item in item.lang" :key="item.index" class="mb-2">
                    <i class="fi fi-br-arrow-right mr-3"></i>{{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="mt-5 md:mt-12">
            <p class="font-bold">{{ item.projectName }}</p>
            <p class="mt-3">{{ item.projectDesc }}</p>

            <div class="flex-col space-y-3 mt-3">
              <div class="flex items-center">
                <a class="btn-icon" :href="item.github" target="_blank">
                  <i class="bi bi-github"></i>
                </a>
                <span class="ml-3">Github</span>
              </div>

              <div class="flex items-center">
                <a class="btn-icon" :href="item.link" target="_blank">
                  <i class="fi fi-br-link flex self-center"></i>
                </a>
                <span class="ml-3">Website</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ss1 from "../assets/screenshots/ss-invoices-app.png";
import ss2 from "../assets/screenshots/ss-llama.png";
import ss3 from "../assets/screenshots/ss-beauty.png";
import ss4 from "../assets/screenshots/ss-anydrinks.png";

export default {
  name: "Projects-comp",
  components: {},
  data() {
    return {
      items: [
        {
          projectName: "Invoice management Website",
          projectDesc:
            "Users can use the website enter the data to create invoices, manage invoice status, and view monthly invoice summaries. The website is designed with a responsive design, which makes it compatible with all devices.",
          img: ss1,
          github: "https://github.com/ppunme/vue-invoice-app",
          link: "https://ppunme.github.io/vue-invoice-app/",
          lang: ["Vue.js", "Bootstrap", "Firebase"],
        },
        {
          projectName: "Llama Yoga",
          projectDesc:
            "Worked as a part of three-member team to developed code for client website primarily using Vue.js and WordPress",
          img: ss2,
          github: "https://github.com/YuriJ2020/llama-yoga-revamp",
          link: "https://llamayoga.com.au/home",
          lang: ["Vue.js", "Bootstrap", "WordPress"],
        },
        {
          projectName: "Beauty venue",
          projectDesc:
            "Simple beauty salon website, implemented with HTML, CSS and NodeJS",
          img: ss3,
          github: "https://github.com/ppunme/Assessment2ServerSide",
          link: "https://beauty-salon-nodejs.herokuapp.com/",
          lang: ["HTML", "CSS", "Node.js", "Bootstrap"],
        },
        {
          projectName: "Anydrinks",
          projectDesc:
            "An ecommerce website that allows users to search and filter products, create an acccount and login to create orders and view previous orders. The website is developed by ReactJS and hosted by Firebase.",
          img: ss4,
          github: "https://github.com/ppunme/anydrinks",
          link: "https://ppunme.github.io/anydrinks",
          lang: ["ReactJS", "Bootstrap", "Firebase"],
        },
      ],
    };
  },
  methods: {
    scrollToNextItem() {
      const scroller = document.querySelector(".snap-mandatory");
      const itemWidth = document.querySelector(".snap-start").clientWidth;
      scroller.scrollBy({ left: itemWidth, top: 0, behavior: "smooth" });
    },
    scrollToPrevItem() {
      const scroller = document.querySelector(".snap-mandatory");
      const itemWidth = document.querySelector(".snap-start").clientWidth;
      scroller.scrollBy({ left: -itemWidth, top: 0, behavior: "smooth" });
    },
  },
};
</script>
