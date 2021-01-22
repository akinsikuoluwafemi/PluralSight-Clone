import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

 class CoursesPage extends Component {

        state = {
            course: {
                title: '',
            }
        }
    
    handleChange =(event) => {
        const course = {...this.state.course, title: event.target.value}
        this.setState({course})
    }

     handleSubmit = (event) => {
         event.preventDefault();
         this.props.createCourse(this.state.course)
     }

    render() {
        return (
          <>
            <form onSubmit={this.handleSubmit}>
              <h2>Courses</h2>
              <h3>Add Course</h3>
              <input
                type="text"
                value={this.state.course.title}
                onChange={this.handleChange}
              />
              <input type="submit" value="save" />
            </form>
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
    createCourse: PropTypes.func.isRequired,
};


 const mapStateToProps = (state) => {

     return {
         courses: state.courses
     }
 }


const mapDispatchToProps = (dispatch) =>{
    return {
         createCourse: dispatch(courseActions.createCourse(course))
     }
 }

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);