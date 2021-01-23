import * as types from './actionTypes';
import * as courseApi from '../../api/courseApi';



export function createCourse(course){
    
    return {
      type: types.CREATE_COURSE,
      course,
    };
}

export function loadCourses(){
  return function(dispatch){
    return courseApi.getCourses().then(courses => {
      dispatch(loadCourseSuccess)
    })
  }
}