import * as types from './actionTypes';
import * as courseApi from '../../api/courseApi';



export function createCourse(course){
    
    return {
      type: types.CREATE_COURSE,
      course,
    };
}


export function loadCourseSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function createCourseSuccess(course){
  return {
    type: types.CREATE_COURSE_SUCCESS, course
  }
}

export function updateCourseSuccess(course){
  return {
    type: types.UPDATE_CO
  }
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

export function saveCourse(course){
  return function (dispatch, getState){
    return courseApi.saveCourse(course).then(savedCourse => {
      course.id ? dispatch(updateCoursesSuccess(savedCourse)) : dispatch(createCourseSuccess(savedCourse));
    })
    .catch(error => {
      throw error;
    });
  }
}