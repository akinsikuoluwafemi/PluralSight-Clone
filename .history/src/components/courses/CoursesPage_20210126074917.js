import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';
import { Redirect } from 'react-router-dom';
import Spinner from '../common/Spinner';




 class CoursesPage extends Component {

   state = {
     redirectToAddCoursePage: false
   }
   
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
            {this.state.redirectToAddCoursePage && <Redirect to="/course"/>}
            <h2>Courses</h2>
            <Spinner/>
            <button
              style={{ marginBottom: 20 }}
              className="btn btn-primary add-course"
              onClick={() => this.setState({redirectToAddCoursePage: true})}
            >
              Add Course
            </button>

            <CourseList courses={this.props.courses }/>
           
          </>
        );
    }
 }

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
    loading: PropTypes.object.
    authors: PropTypes.array.isRequired
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
       authors: state.authors,
       loading: state.apiCallsInProgress > 0
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