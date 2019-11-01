import {
  LOAD_COURSES_SUCCESS,
  CREATE_COURSE_SUCCESS,
  UPDATE_COURSE_SUCCESS
} from '../actions/actionTypes';
import * as courseApi from '../../api/courseApi';

export function loadCourseSuccessAction(courses) {
  return {
    type: LOAD_COURSES_SUCCESS,
    courses
  };
}

export function createCourseSuccessAction(course) {
  return { type: CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccessAction(course) {
  return { type: UPDATE_COURSE_SUCCESS, course };
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

export function saveCoursesThunk(course) {
  return function(dispatch, getState) {
    return courseApi
      .saveCourse(course)
      .then(savedCourse => {
        savedCourse.id
          ? dispatch(updateCourseSuccessAction(savedCourse))
          : dispatch(createCourseSuccessAction(savedCourse));
      })
      .catch(error => {
        throw error;
      });
  };
}
