import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import {loadCourses, saveCourse} from '../../redux/actions/courseActions';
import {loadAuthors} from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';
import { newCourse } from '../../../tools/mockData';
import CourseForm from './CourseForm';

 const ManageCoursesPage = ({ courses,authors, loadAuthors, loadCourses, ...props}) =>  {

     const [course, setCourse] = useState({ ...props.course });
     const [errors, setErrors] = useState({});
     
     
   useEffect(() => {

        if(courses.length === 0){
            loadCourses().catch((error) => {
              alert("loading courses failed" + error);
            });
        }
        
    
       if(authors.length === 0){
           loadAuthors().catch((error) => {
             alert("loading authors failed" + error);
           });
       }
        

       
   },[])
   
   
     const handleChange = (event) => {
         const { name, value } = event.target;
         setCourse(prevCourse => ({
             ...prevCourse,
             [name]: name === "authorId" ? parseInt(value,10) : value
             
         }))
     }

    

     function handleSave(event){
         event.preventDefault()
     }
     
        

        return (
            <CourseForm course={course} errors={errors} authors={authors} onChange={handleChange}  />
        );
 }

ManageCoursesPage.propTypes = {
    course: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired,
    loadCourses: PropTypes.func.isRequired,
    loadAuthors: PropTypes.func.isRequired,
    saveCourse: PropTypes.func.isRequired
};


 const mapStateToProps = (state) => {
    console.log(state)
     return {
         course: newCourse,
         courses: state.courses,
         authors: state.authors
     }
 }


const mapDispatchToProps =  {
      loadCourses,
      loadAuthors,
      saveCourse
 }

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursesPage);