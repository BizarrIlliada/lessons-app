<template>
  <h1 class="title">Add new lesson</h1>
  <AddLessonForm />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  import AddLessonForm from '../components/AddLessonForm.vue';

  export default defineComponent({
    name: 'AddLessonView',
    components: {
      AddLessonForm,
    }
  })
</script>
