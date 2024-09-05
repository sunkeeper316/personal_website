<template>
    <div class="experience-item mb-8">
            <div class="flex items-start space-x-4">
              <div class="text-gray-400 text-sm">2023.04 — PRESENT</div>
              <div>
                <h3 class="text-white text-lg font-semibold">ios app開發工程師 · 偉盟系統股份有限公司</h3>
                <p class="text-gray-400 text-sm mt-2">幫助公司開發電商App 包含flutter app的 iOS 及原生swift iOS app</p>
                <div class="flex space-x-2 mt-2">
                  <span class="badge">iOS</span>
                  <span class="badge">SWIFT</span>
                  <span class="badge">Flutter</span>
                </div>
              </div>
            </div>
          </div>
</template>

<script>
export default {
  name: 'ClickableLabel',
  props: {
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
        imgurl: this.url // 确保路径正确
      };
    },
    mounted() {
      //console.log(this.url);  // 打印路徑
    }
}
</script>