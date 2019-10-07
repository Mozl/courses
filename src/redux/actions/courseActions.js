import { CREATE_COURSE, LOAD_COURSES_SUCCESS } from '../actions/actionTypes';
import * as courseApi from '../../api/courseApi';

export function createCourse(course) {
  return {
    type: CREATE_COURSE,
    course
  };
}

export function loadCourseSuccessAction(courses) {
  return {
    type: LOAD_COURSES_SUCCESS,
    courses
  };
}

export function loadCoursesThunk() {
  return function(dispatch) {
    return courseApi
      .getCourses()
      .then(courses => {
        dispatch(loadCourseSuccessAction(courses));
      })
      .catch(error => {
        throw error;
      });
  };
}
