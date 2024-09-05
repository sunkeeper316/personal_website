<template>
  <div class="app h-screen">
    <div class="item-1 flex flex-col">
      <div class="flex flex-col grow  text-white">
        <h1 class="text-5xl font-bold mb-2">Huang Sun</h1>
        <h2 class="text-2xl">{{ BaseJson.name }}</h2>
        <p>Cross-Platform Mobile Developer</p>
        <p>總年資 | {{ totalYears }} 年</p>
        <p class="text-customGray">偉盟系統股份有限公司 | ios app開發工程師</p>
        <p class="text-customGray">{{ BaseJson.school }}</p>
        <nav class="flex flex-col space-y-4 mt-20">
          <a href="#" class="nav-link" @click="scrollToSection('about')">ABOUT</a>
          <a href="#" class="nav-link" @click="scrollToSection('experience')">EXPERIENCE</a>
          <a href="#" class="nav-link" @click="scrollToSection('projects')">PROJECTS</a>
        </nav>
      </div>
      <!-- 社交媒体图标 -->
      <div class="flex space-x-4 mt-10">
        <a href="https://github.com/sunkeeper316" class="text-gray-400 hover:text-blue-600">
          <img src="./assets/img/icon/github.svg" alt="Icon description">
        </a>

        <a href="https://www.linkedin.com/in/%E5%BE%B7%E6%A1%91-%E9%BB%83-012537183/" class="text-gray-400 hover:text-blue-600" @click="sendProfileEvent('phone')">
          <img src="./assets/img/icon/linkedIn.svg" alt="Icon description">
        </a>

        <a href="tel:+886922321678" class="text-gray-400 hover:text-blue-600 tel-block">
          <img src="./assets/img/icon/phone.svg" alt="Icon description">
        </a>
        
        <a href="mailto:sunkeeper316@gmail.com" class="text-gray-400 hover:text-blue-600">
          <img src="./assets/img/icon/email.svg" alt="Icon description">
        </a>
      </div>
    </div>
    <div class="item-2">
    </div>
    <main class="item-3">
        <div id="about" class="container mx-auto p-4  text-white">
          <p>{{ BaseJson.autobiography }}</p>

          <div id="experience" class="experience-list mt-20">
          <!-- 第一个工作经历 -->
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

          <!-- 第二个工作经历 -->
          <div class="experience-item mb-8">
            <div class="flex items-start space-x-4">
              <div class="text-gray-400 text-sm">2023.03 — 2023.04</div>
              <div>
                <h3 class="text-white text-lg font-semibold">ios engineer · 艾酷互動股份有限公司</h3>
                <p class="text-gray-400 text-sm mt-2">在這家公司，您从事了某些工作或项目...</p>
                <div class="flex space-x-2 mt-2">
                  <span class="badge">iOS</span>
                  <span class="badge">SWIFT</span>
                  <span class="badge">Flutter</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 第三个工作经历 -->
          <div class="experience-item mb-8">
            <div class="flex items-start space-x-4">
              <div class="text-gray-400 text-sm">2022.01 — 2023.02</div>
              <div>
                <h3 class="text-white text-lg font-semibold">Software Developer · 另一家公司</h3>
                <p class="text-gray-400 text-sm mt-2">描述您在这段时间内的职责或项目...</p>
                <div class="flex space-x-2 mt-2">
                  <span class="badge">JavaScript</span>
                  <span class="badge">React</span>
                  <span class="badge">Node.js</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 第四个工作经历 -->
          <div class="experience-item mb-8">
            <div class="flex items-start space-x-4">
              <div class="text-gray-400 text-sm">2022.01 — 2023.02</div>
              <div>
                <h3 class="text-white text-lg font-semibold">Software Developer · 另一家公司</h3>
                <p class="text-gray-400 text-sm mt-2">描述您在这段时间内的职责或项目...</p>
                <div class="flex space-x-2 mt-2">
                  <span class="badge">JavaScript</span>
                  <span class="badge">React</span>
                  <span class="badge">Node.js</span>
                </div>
              </div>
            </div>
          </div>
          </div>

          <div id="projects" class="experience-list mt-20">
            <Project
              v-for="(project, index) in ProjectListJson"
              :key="index"
              :url="project.url"
              :title="project.title"
              :datetime="project.datetime"
              :content="project.content"
              :badges="project.badges"
            />
          </div>

        </div>
    </main>
  </div>
</template>

<script setup>
import Project from './components/Project.vue'
import BaseJson from './assets/text/base.json'
import ProjectListJson from './assets/text/project.json'
import { computed } from 'vue'  // 確保正確導入 computed

// 定義開始日期
const startDate = new Date('2019-08-01')
// 計算年資
const totalYears = computed(() => {
  const currentDate = new Date()
  const years = currentDate.getFullYear() - startDate.getFullYear()

  const monthsDiff = currentDate.getMonth() - startDate.getMonth()
  const daysDiff = currentDate.getDate() - startDate.getDate()

  // 如果月份或日期在開始日期之前，減少一年
  if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
    return years - 1
  }

  return years
})

// GA4 自訂事件 - 點擊個人資料事件
const sendProfileEvent = (item) => {
  gtag('event', 'custom_profileInfo_click', {
    'custom_event_category': 'profileInfo',
    'custom_event_label': item
  });
};

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' ,top: 50,});
}


</script>

<style scoped>
.app {
  display: grid ;
  min-height: 100vh;
  background-color: #111729;
  grid-template-columns: 4fr 1fr 7fr;
  grid-template-rows: 1fr;
  width: 100%;
  
  gap: 10px;
}
.badge {
    @apply bg-teal-800 text-teal-300 text-xs font-semibold px-3 py-1 rounded-full;
}
.item-1 {
  padding: 80px;
}
.item-3 {
  overflow-y: auto;
  padding: 80px;
}

.tel-block {
  @apply relative inline-block;
}

.tel-block::after {
  @apply absolute -bottom-[36px] hidden text-white text-[14px] px-3 py-1 rounded-sm;
  content: '聯絡電話 +886922-321-678';
  white-space: nowrap;
  transition: opacity 0.3s;
  background-color: #105ce8;
  left: 50%; /* 使伪元素的左边缘位于父元素的50% */
  transform: translateX(-50%); /* 将伪元素向左移动它自身宽度的一半，实现居中 */
}

.tel-block:hover::after {
  @apply block;
}
.nav-link {
    position: relative;
    padding: 10px 20px;
    color: #9CA3AF; /* 按鈕文字顏色 */
    border: none;
    cursor: pointer;
    overflow: hidden;
    padding-left: 45px; /* 增加文字與橫線之間的距離 */
    transition: all 0.3s ease;
}

.nav-link:hover {
    padding-left: 75px; /* 增加文字與橫線之間的距離 */
    color: #FFFFFF; /* 游標移過去時顏色變為白色 */
}

.nav-link::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 30px; /* 橫線的長度 */
    height: 1px; /* 橫線的高度 */
    background-color: #9CA3AF; /* 初始橫線顏色 */
    transition: background-color 0.3s ease; /* 平滑的顏色變化 */
}

.nav-link:hover::before {
    width: 60px; /* 游標移過去時橫線變長 */
    background-color: #FFFFFF; /* 游標移過去時橫線變為白色 */
}



</style>
