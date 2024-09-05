<template>
  <div class="experience-item mb-8">
    <div class="flex items-start space-x-4">
      <div class="text-gray-400 text-sm">{{ datetime }}</div>
      <div>
        <h3 class="text-white text-lg font-semibold">{{ title }}</h3>
        <p class="text-gray-400 text-sm mt-2">{{ content }}</p>
        <div class="flex space-x-2 mt-2">
          <span v-for="(badge, index) in badges" :key="index" class="badge">
            {{ badge }}
          </span>
        </div>
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
  name: "ClickableLabel",
  props: {
    key: {
      type: Number,
      required: true,
    },
    datetime: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    badges: {
      type: Array,
      required: true,
    },
  },
};
</script>
