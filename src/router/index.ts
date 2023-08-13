import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import LessonComponent from '../components/LessonComponent.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    redirect: '/lessons',
  },
  {
    path: '/lessons',
    name: 'lessons',
    component: () => import('../views/LessonsView.vue'),
    children: [
      {
        name: 'lesson',
        path: ':lessonId',
        component: LessonComponent,
        props: true,
      }
    ]
  },
  {
    path: '/add-lesson',
    name: 'add-lesson',
    component: () => import('../views/AddLessonView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
