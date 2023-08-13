<template>
  <ElCard v-if="currentLesson">
    {{ lessonId }}
  </ElCard>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  import { Lesson } from '../global-types'

  export default defineComponent({
    name: 'LessonComponent',
    props: {
      lessonId: {
        type: String,
        required: true,
      }
    },

    data() {
      return {
        currentLesson: {} as Lesson,
      }
    },
  })
</script>
