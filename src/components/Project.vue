<template>
  <div class="experience-item flex space-x-4 bg-gray-800 p-4 rounded-lg mb-8">
    <img
      v-bind:src=imgurl
      alt="Project Image"
      class="w-24 h-24 rounded-md"
    />
    <div>
      <h3 class="text-white text-lg font-semibold">{{title}}</h3>
      <p class="text-gray-400 text-sm">{{datetime}}</p>
      <p class="text-gray-400 text-sm mt-2">{{content}}</p>
      <div class="flex space-x-2 mt-2">
        <div class="flex space-x-2 mt-2">
          <span v-for="(badge, index) in badges" :key="index" class="badge">
            {{ badge }}
          </span>
        </div>
      </div>
      <div class="flex mt-4">
        <a
          :href="url"
          class="ml-auto text-right text-white hover:text-gray-400 transition flex items-center"
        >
          前往查看
          <svg
            class="w-4 h-4 ml-1"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M10.5 17l6-6-6-6v12z"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.badge {
    @apply bg-teal-800 text-teal-300 text-xs font-semibold px-3 py-1 rounded-full;
}
</style>

<script>
export default {
  name: 'ClickableLabel',
  props: {
    key: {
      type: Number,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    datetime: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    badges: {
      type: Array,
      required: true
    },

  },
    data() {
      return {
        imgurl: this.img // 确保路径正确
      };
    },
    mounted() {
      //console.log(this.url);  // 打印路徑
    }
}
</script>
