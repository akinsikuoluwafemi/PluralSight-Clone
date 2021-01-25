import * as types from './actionTypes';
import * as authorApi from '../../api/authorApi';



export function loadCoursSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}



export function loadCourses(){
  return function(dispatch){
    return courseApi.getCourses().then(courses => {
      dispatch(loadCourseSuccess(courses));
    }).catch(error => {
      throw error;
    })
  }
}