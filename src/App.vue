<template>
  <!-- 漢堡選單放在 .app 之外，確保它在頁面頂部 -->
  <div
    class="fixed top-0 left-0 w-full bg-gray-900 p-4 md:hidden z-50 flex justify-end"
  >
    <button @click="toggleMenu" class="text-white">
      <!-- 漢堡選單圖示 -->
      <svg
        v-if="!isMenuOpen"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
      <svg
        v-if="isMenuOpen"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>

  <!-- 漢堡選單的選項 -->
  <div v-if="isMenuOpen" class="fixed top-12 right-0 bg-gray-800 p-4 z-50">
    <nav class="flex flex-col space-y-4 text-right">
      <a href="#" class="nav-link text-white" @click="scrollToSection('about')"
        >ABOUT</a
      >
      <a
        href="#"
        class="nav-link text-white"
        @click="scrollToSection('experience')"
        >EXPERIENCE</a
      >
      <a
        href="#"
        class="nav-link text-white"
        @click="scrollToSection('projects')"
        >PROJECTS</a
      >
    </nav>
  </div>

  <div class="app h-screen pt-16">
    <div class="item-1 flex flex-col">
      <div class="flex flex-col grow text-white">
        <h1 class="text-5xl font-bold mb-2">Huang Sun</h1>
        <h2 class="text-2xl">{{ currentBase.name }}</h2>
        <p>{{ currentBase.position }}</p>
        
        <p class="text-customGray">{{ currentBase.work }}</p>
        <p class="text-customGray">{{ totalYears }}</p>
        <!-- <p class="text-customGray">{{ currentBase.school }}</p> -->
        <div class="flex flex-wrap justify-start gap-2 mt-5">
          <span
            v-for="(skill, index) in currentBase.skill"
            :key="index"
            class="badge"
          >
            {{ skill }}
          </span>
        </div>
        <div class="flex mt-4"></div>
        <nav class="hidden md:flex flex-col space-y-4 mt-5">
          <a href="#" class="nav-link" @click="scrollToSection('about')"
            >ABOUT</a
          >
          <a href="#" class="nav-link" @click="scrollToSection('experience')"
            >EXPERIENCE</a
          >
          <a href="#" class="nav-link" @click="scrollToSection('projects')"
            >PROJECTS</a
          >
        </nav>
      </div>
      
      <div class="flex justify-between items-center mt-5 w-full">        
        <!-- 社交媒体图标 -->
        <div class="flex space-x-4 ">
        <a
          href="https://github.com/sunkeeper316"
          class="text-gray-400 hover:text-blue-600"
        >
          <img src="./assets/img/icon/github.svg" alt="Icon description" />
        </a>

        <a
          href="https://www.linkedin.com/in/%E5%BE%B7%E6%A1%91-%E9%BB%83-012537183/"
          class="text-gray-400 hover:text-blue-600"
          @click="sendProfileEvent('phone')"
        >
          <img src="./assets/img/icon/linkedIn.svg" alt="Icon description" />
        </a>

        <a
          href="tel:+886922321678"
          class="text-gray-400 hover:text-blue-600 tel-block"
        >
          <img src="./assets/img/icon/phone.svg" alt="Icon description" />
        </a>

        <a
          href="mailto:sunkeeper316@gmail.com"
          class="text-gray-400 hover:text-blue-600"
        >
          <img src="./assets/img/icon/email.svg" alt="Icon description" />
        </a>
        </div>
        <!-- 多语言切换按钮 -->
        <div class="flex space-x-2">
            <button @click="setLanguage('en')" class="text-gray-400 hover:text-blue-600">EN</button>
            <button @click="setLanguage('zh-cn')" class="text-gray-400 hover:text-blue-600">简</button>
            <button @click="setLanguage('zh-tw')" class="text-gray-400 hover:text-blue-600">繁</button>
        </div>
      </div>
      
    </div>
    <div class="item-2"></div>
    <main class="item-3">
      
      <div id="about" class=" text-white ">
        <div class="mt-12 md:mt-0">
          <p>{{ currentBase.autobiography }}</p>
        </div>
        
      </div>
      <div id="experience" class="experience-list mt-20">
        <Job
          v-for="(job, index) in currentJob"
          :key="index"
          :datetime="job.datetime"
          :title="job.title"
          :content="job.content"
          :badges="job.badges"
        />
      </div>

      <div id="projects" class="experience-list mt-20 mb-20">
        <Project
          v-for="(project, index) in currentProject"
          :key="index"
          :img="project.img"
          :urlTitle="project.urlTitle"
          :url="project.url"
          :title="project.title"
          :datetime="project.datetime"
          :content="project.content"
          :badges="project.badges"
        />
      </div>
    </main>
  </div>
</template>

<script setup>
import Project from "./components/Project.vue";
import Job from "./components/Job.vue";

import BaseTWJson from "./assets/text/zh_tw/base_zh_tw.json";
import BaseCNJson from "./assets/text/zh_cn/base_zh_cn.json";
import BaseENJson from "./assets/text/en/base_en.json";

import ProjectListTWJson from "./assets/text/zh_tw/project_zh_tw.json";
import ProjectListCNJson from "./assets/text/zh_cn/project_zh_cn.json";
import ProjectListENJson from "./assets/text/en/project_en.json";

import JobListTWJson from "./assets/text/zh_tw/job_zh_tw.json";
import JobListCNJson from "./assets/text/zh_cn/job_zh_cn.json";
import JobListENJson from "./assets/text/en/job_en.json";

import { computed } from "vue"; // 確保正確導入 computed
import { ref } from "vue";

const userLang = navigator.language || navigator.userLanguage; 
console.log(userLang);
// 定义一个响应式的 selectedLanguage，默认为 'en'
const selectedLanguage = ref('en');

// 语言数据对象
const base_translations = {
  'en': BaseENJson,
  'zh-cn': BaseCNJson,
  'zh-tw': BaseTWJson
};


const currentBase = computed(() => {
  return base_translations[selectedLanguage.value] || {};
});

const job_translations = {
  'en': JobListENJson,
  'zh-cn': JobListCNJson,
  'zh-tw': JobListTWJson
};

const currentJob = computed(() => {
  return job_translations[selectedLanguage.value] || {};
});

const project_translations = {
  'en': ProjectListENJson,
  'zh-cn': ProjectListCNJson,
  'zh-tw': ProjectListTWJson
};

const currentProject = computed(() => {
  return project_translations[selectedLanguage.value] || {};
});

const setLanguage = (languageCode) => {
  selectedLanguage.value = languageCode;
  localStorage.setItem('language', languageCode); // 保存用户选择
};

// 使用 ref 定義 isMenuOpen 狀態
const isMenuOpen = ref(false);

// 切換漢堡選單顯示狀態
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// 定義開始日期
const startDate = new Date("2019-08-01");
// 計算年資
const totalYears = computed(() => {
  const currentDate = new Date();
  const years = currentDate.getFullYear() - startDate.getFullYear();

  const monthsDiff = currentDate.getMonth() - startDate.getMonth();
  const daysDiff = currentDate.getDate() - startDate.getDate();

  // 如果月份或日期在開始日期之前，減少一年
  if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
    return years - 1;
  }
  
  return `${base_translations[selectedLanguage.value].experience} | ${years} ${base_translations[selectedLanguage.value].years}`;
});

// GA4 自訂事件 - 點擊個人資料事件
const sendProfileEvent = (item) => {
  gtag("event", "custom_profileInfo_click", {
    custom_event_category: "profileInfo",
    custom_event_label: item,
  });
};

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  //section.scrollIntoView({ behavior: "smooth", top: 50 });
  // 檢查是否是手機版（根據視窗寬度判斷）
  const isMobile = window.innerWidth <= 768; // 768px 以下視為手機版

  if (isMobile) {
    // 手機版: 使用 scrollIntoView 並通過 margin-top 調整
    section.style.scrollMarginTop = "80px"; // 根據漢堡選單的高度設置
  }
  section.scrollIntoView({ behavior: "smooth" });
  // 平滑滾動到目標區域
  setTimeout(() => {
    
    }, 200); 
  isMenuOpen.value = false;
  
}
</script>

<style scoped>
.app {
  display: grid;
  min-height: 100vh;
  background-color: #111729;
  grid-template-columns: 4fr 1fr 7fr;
  grid-template-rows: 1fr;
  width: 100%;

  gap: 10px;
}

.item-1 {
  padding: 80px;
}
.item-3 {
  overflow-y: auto;
  padding: 80px;
  scrollbar-width: none;
}
.badge {
  @apply bg-teal-800 text-teal-300 text-xs font-semibold px-3 py-1 rounded-full my-1;
}
.tel-block {
  @apply relative inline-block;
}

.tel-block::after {
  @apply absolute -bottom-[36px] hidden text-white text-[14px] px-3 py-1 rounded-sm;
  content: "聯絡電話 +886922-321-678";
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
  color: #9ca3af; /* 按鈕文字顏色 */
  border: none;
  cursor: pointer;
  overflow: hidden;
  padding-left: 45px; /* 增加文字與橫線之間的距離 */
  transition: all 0.3s ease;
}

.nav-link:hover {
  padding-left: 75px; /* 增加文字與橫線之間的距離 */
  color: #ffffff; /* 游標移過去時顏色變為白色 */
}

.nav-link::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 30px; /* 橫線的長度 */
  height: 1px; /* 橫線的高度 */
  background-color: #9ca3af; /* 初始橫線顏色 */
  transition: background-color 0.3s ease; /* 平滑的顏色變化 */
}

.nav-link:hover::before {
  width: 60px; /* 游標移過去時橫線變長 */
  background-color: #ffffff; /* 游標移過去時橫線變為白色 */
}
/* 手機佈局 */
@media (max-width: 768px) {
  .app {
    display: block; /* 單列佈局 */
    height: 100vh;
    overflow-y: auto; /* 確保內容可以垂直滾動 */
    overflow-x: hidden; /* 防止橫向滾動 */
  }

  .item-1,
  .item-2,
  .item-3 {
    padding: 20px; /* 減少手機上的內邊距 */
    max-width: 100%; /* 確保內容不會超過容器寬度 */
    word-wrap: break-word; /* 防止文字溢出，換行處理 */
  }
}

</style>
