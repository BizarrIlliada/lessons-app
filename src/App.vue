<template>
  <ElHeader>
    <nav>
      <router-link to="/lessons">
        <ElButton>
          Lessons
        </ElButton>
      </router-link>
      <router-link to="/add-lesson">
        <ElButton>
          Add lesson
        </ELButton>
      </router-link>
    </nav>
  </ElHeader>
  <router-view/>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  import { ElHeader } from 'element-plus';

  export default defineComponent({
    name: 'App',
    components: {
      ElHeader,
    },
  });
</script>

<style scoped>
  header {
    height: 60px;
    background-color: #defa9c;
  }

  nav {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
</style>