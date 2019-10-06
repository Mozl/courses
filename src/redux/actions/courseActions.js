import { CREATE_COURSE, LOAD_COURSES_SUCCESS } from '../actions/actionTypes';
import * as CourseApi from '../../api/courseApi';

export function createCourseAction(course) {
  return {
    type: CREATE_COURSE,
    course
  };
}

export function loadCoursesSuccessAction(courses) {
  return {
    type: LOAD_COURSES_SUCCESS,
    courses
  };
}

export function loadCoursesAction() {
  return function(dispatch) {
    return CourseApi.getCourses()
      .then(courses => {
        dispatch(loadCoursesSuccessAction(courses));
      })
      .catch(error => {
        throw error;
      });
  };
}
