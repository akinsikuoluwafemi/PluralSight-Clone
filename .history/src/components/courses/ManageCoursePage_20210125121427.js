import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

 class ManageCoursesPage extends Component {

   
   componentDidMount() {
   const { courses, authors, actions} = this.props;
   
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
       console.log(this.props.courses)
        return (
          <>
            <h2>Manage Course</h2>
            <CourseList courses={this.props.courses }/>
           
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
         courses: state.
       authors: state.authors
     }
 }


const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
    },
  }; 
 }

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursesPage);