import { CREATE_COURSE } from '../actions/actionTypes';

export function createCourseAction(course) {
  return {
    type: CREATE_COURSE,
    course
  };
}
