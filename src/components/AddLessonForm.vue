<template>
  <ElForm
    @submit.prevent="onSubmit"
    label-position="top"
    :model="formData"
    :rules="formRules"
    ref="addLessonForm"
  >
    <ElFormItem label="Title:" :required="true">
      <ElInput v-model="formData.title" />
    </ElFormItem>
    <ElFormItem label="Subtitle:" :required="true">
      <ElInput v-model="formData.subtitle" />
    </ElFormItem>
    <ElFormItem label="Link:" :required="true">
      <ElInput v-model="formData.video_url" />
    </ElFormItem>
    <ElFormItem label="Duration:" :required="true">
      <ElInput v-model.number="formData.video_time" />
    </ElFormItem>
    <ElFormItem label="Description:" :required="true">
      <ElInput v-model="formData.description" />
    </ElFormItem>
  
    <ElButton native-type="submit">
      Add new lesson
    </ElButton>
  </ElForm>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  
  import { ElForm, ElFormItem, ElInput } from 'element-plus';

  // import { addNewLesson } from '../requests/lessons-requests';

  export default defineComponent({
    name: 'AddLessonForm',
    components: {
      ElForm,
      ElFormItem,
      ElInput,
    },

    data() {
      return {
        formData: {
          title: '',
          subtitle: '',
          video_url: '',
          video_time: 0,
          description: '',
        },

        formRules: {
          title: { required: true, message: 'Title is required', trigger: 'blur' },
          subtitle: { required: true, message: 'Subtitle is required', trigger: 'blur' },
          video_url: { required: true, message: 'Link is required', trigger: 'blur' },
          video_time: { required: true, message: 'Duration is required', trigger: 'blur' },
          description: { required: true, message: 'Description is required', trigger: 'blur' },
        }
      }
    },

    methods: {
      onSubmit() {
        const formRef = this.$refs.addLessonForm as typeof ElForm;
        console.log(formRef.validate);
        

        formRef.validate((isValid: boolean) => {
          console.log(isValid);
          console.log(this.formRules);
          
          if (isValid) {
            console.log('Form is valid, submitted');

            // addNewLesson(this.formData);
          } else {
            console.log('Form is invalid!');
          }
        })
      }
    }
  })
</script>

<style scoped>
  form {
    max-width: 500px;
    margin: 0 auto;
  }
</style>
