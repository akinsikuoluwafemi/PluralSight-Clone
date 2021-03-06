import React, { Component } from 'react'

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
         
     }

    render() {
        return (
                <form onSubmit={this.handleSubmit}>
                    <h2>Courses</h2>
                    <h3>Add Course</h3>
                    <input type="text" value={this.state.course.title} onChange={this.handleChange}/>
                    <input type="submit" value="save"/>
                </form>
            )
    }
}

export default CoursesPage