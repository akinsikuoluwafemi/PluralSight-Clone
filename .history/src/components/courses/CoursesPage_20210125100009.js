import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';

 class CoursesPage extends Component {

   componentDidMount() {
     this.props.actions.loadCourses().catch(error => {
       alert('loading courses failed' + error);
     })
   }
   
        

    render() {
       console.log(this.props)
        return (
          <>
            <h2>Courses</h2>
            <CourseList courses={this.props }/>
            {
              this.props.courses.map((course) => (
                <div key={course.title}>{course.title}</div>
              ))
            }
          </>
        );
    }
 }

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
};


 const mapStateToProps = (state) => {

     return {
         courses: state.courses
     }
 }


const mapDispatchToProps = (dispatch) => {
    return {
           actions:  bindActionCreators(courseActions, dispatch)
       } 
 }

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);