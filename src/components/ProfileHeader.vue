<template>
  <div class="flex flex-row gap-6 p-4 md:gap-10">
    <div class="basis-1/2 flex items-center">
      <img
        class="ml-auto mr-2 w-32 md:w-32 h-32 md:h-32 rounded-full ring-offset-4 ring-4 ring-lavender-600 dark:ring-offset-slate-900 dark:ring-lavender-500/50"
        :src="profileImg"
        alt=""
        width="384"
        height="512"
      />
    </div>
    <div class="basis-1/2 ml-auto mr-2 md:w-36 lg:w-auto">
      <div class="animate-fade-in-down">
        <p class="text-sm">Hi, my name is</p>
        <div class="flex-col mt-3">
          <p class="text-2xl font-semibold tracking-wide">Poonnamee</p>
          <p class="text-2xl font-semibold tracking-wide">Ngamrayab</p>
        </div>
        <form action="mailto:ppoonnamee@gmail.com">
          <button class="btn btn-primary flex mt-6">
            Message
            <i class="fi fi-br-envelope ml-2 w-4 h-4 flex self-center"></i>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import profileImg from "../assets/profile-img-crop.png";
export default {
  name: "profile-header",

  data() {
    return {
      profileImg: profileImg,
      showModal: false,
    };
  },
};
</script>
