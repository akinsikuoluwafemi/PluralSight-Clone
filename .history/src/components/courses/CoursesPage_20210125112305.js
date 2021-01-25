import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';

 class CoursesPage extends Component {

   componentDidMount() {
    if(this.props.courses.length === 0){
        this.props.actions.loadCourses().catch((error) => {
          alert("loading courses failed" + error);
        });
    } 
    
     if(this.props.)

     this.props.actions.loadAuthors().catch(error => {
       alert("loading authors failed" + error);
       
     })

   }
   
        

    render() {
       console.log(this.props.courses)
        return (
          <>
            <h2>Courses</h2>
            <CourseList courses={this.props.courses }/>
           
          </>
        );
    }
 }

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
};


 const mapStateToProps = (state) => {
    console.log(state.authors)
     return {
         courses: state.authors.length === 0 ? [] : state.courses.map(course => {
           return {
             ...course,
             authorName: state.authors.find(a => a.id === course.authorId).name
           }
         }),
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

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);