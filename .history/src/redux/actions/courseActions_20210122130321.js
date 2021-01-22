import {CREATE_COURSE} from './'

export function createCourse(course){
    
    return {
        type: "CREATE_COURSE",
        course
    }
}