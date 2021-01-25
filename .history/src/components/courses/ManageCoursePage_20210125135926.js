import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import {loadCourses} from '../../redux/actions/courseActions';
import {loadAuthors} from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';

 const ManageCoursesPage = ({ courses loadAuthors, loadCourses}) =>  {

   useEffect(() => {
    //   

   
        loadCourses().catch((error) => {
          alert("loading courses failed" + error);
        });
    
        loadAuthors().catch((error) => {
          alert("loading authors failed" + error);
        });

    //    
       
       
   },[])
   
   

    

   
   
        

        return (
          <>
            <h2>Manage Course</h2>
           
          </>
        );
 }

ManageCoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired,
    loadCourses: PropTypes.func.isRequired,
    loadAuthors: PropTypes.func.isRequired
};


 const mapStateToProps = (state) => {
    console.log(state.authors)
     return {
         courses: state.courses,
         authors: state.authors
     }
 }


const mapDispatchToProps =  {
      loadCourses,
      loadAuthors
 }

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursesPage);