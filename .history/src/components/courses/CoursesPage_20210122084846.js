import React, { Component } from 'react'

 class CoursesPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            course: {
                title: '',
            }
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const course = {...this.state.course, title: event.target.value}
        this.setState({course})
    }


    render() {
        return (
                <form>
                    <h2>Courses</h2>
                    <h3>Add Course</h3>
                    <input type="text" value={this.state.course.title} onChange={this.handleChange}/>
                    <input type="submit" value="save"/>
                </form>
            )
    }
}

export default CoursesPage