<template>
  <h1 class="title">Lessons</h1>
  <section v-if="lessons.length">
    <ElTabs tab-position="right">
      <ElTabPane v-for="lesson in lessons" :key="lesson.id">
        <template #label>
          <RouterLink :to="'/lessons/' + lesson.id">
            <ElButton :link="true">
              {{ lesson.title }}
            </ElButton>
          </RouterLink>
        </template>
    </ElTabPane>
    <router-view></router-view>
    </ElTabs>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  import { ElTabs, ElTabPane } from 'element-plus';

  import { getLessonsData } from '../requests/lessons-requests';
  import { Lesson } from '../global-types';

  export default defineComponent({
    name: 'LessonsView',
    components: {
      ElTabs,
      ElTabPane
    },

    data() {
      return {
        lessons: [] as Lesson[],
      }
    },

    async created() {
      const response = await getLessonsData();

      if (response) {
        this.lessons = response;
      } else {
        console.log('No data!');
      }
    }
  })
</script>
