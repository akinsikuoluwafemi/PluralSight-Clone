import * as types from './actionTypes';
import * as authorApi from '../../api/authorApi';



export function loadAuthorSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}



export function loadCourses(){
  return function(dispatch){
    return authorApi.getCourses().then(courses => {
      dispatch(loadCourseSuccess(courses));
    }).catch(error => {
      throw error;
    })
  }
}