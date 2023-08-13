import axios from 'axios';
import { Lesson } from '../global-types';

// * RETURN TO CODE * make correct error handling

const LESSONS_URL = 'https://http-requests-practice-d4f8e-default-rtdb.europe-west1.firebasedatabase.app/lessons.json';

export async function getLessonsData(): Promise<Lesson[] | undefined> {
  const lessons = [];

  try {
    const responseData = (await axios.get(LESSONS_URL)).data;

    for (const key in responseData) {
      lessons.push({
        id: key,
        ...responseData[key],
      })
    }

    return lessons;
  } catch (error) {
    return;
  }
}

export async function addNewLesson(payload: Lesson) {
  try {
    await axios.post(LESSONS_URL, payload);
  } catch (error) {
    throw new Error();
  }
}
