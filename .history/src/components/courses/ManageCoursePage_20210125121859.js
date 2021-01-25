import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

 class ManageCoursesPage extends Component {

   
   componentDidMount() {
   const { courses, authors, actions, loadAuthors, loadCourses} = this.props;
   
    if(courses.length === 0){
        actions.loadCourses().catch((error) => {
          alert("loading courses failed" + error);
        });
    } 
    
     if(authors.length === 0){
        actions.loadAuthors().catch((error) => {
          alert("loading authors failed" + error);
        });
     }

    

   }
   
        

    render() {
        return (
          <>
            <h2>Manage Course</h2>
           
          </>
        );
    }
 }

ManageCoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired
};


 const mapStateToProps = (state) => {
    console.log(state.authors)
     return {
         courses: state.courses,
         authors: state.authors
     }
 }


const mapDispatchToProps =  {
      loadCourses: courseActions.loadCourses,
      loadAuthors: authorActions.loadAuthors
 }

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursesPage);