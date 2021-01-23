import * as types from './actionTypes';
import


export function createCourse(course){
    
    return {
      type: types.CREATE_COURSE,
      course,
    };
}