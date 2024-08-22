<template>
  <div class="experience-item flex space-x-4 bg-gray-800 p-4 rounded-lg mb-8">
    <img
      src=""
      alt="Project Image"
      class="w-24 h-24 rounded-md"
    />
    <div>
      <h3 class="text-white text-lg font-semibold">{{title}}</h3>
      <p class="text-gray-400 text-sm">2023.08 — 2024.02</p>
      <p class="text-gray-400 text-sm mt-2">
        {{content}}
      </p>
      <div class="flex space-x-2 mt-2">
        <span class="badge">Flutter</span>
        <span class="badge">google地圖</span>
        <span class="badge">API</span>
      </div>
      <div class="flex mt-4">
        <a
          href="#"
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

<style scoped></style>

<script>
export default {
  name: 'ClickableLabel',
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }
}
</script>
