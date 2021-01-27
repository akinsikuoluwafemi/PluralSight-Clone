import React from "react";
import CourseForm from './CourseForm';
import renderer from 'react-test-renderer';
import { courses, authors } from '../../../tools/mockData';


it("sets submit button label 'Saving...' when saving is true", () => {
    const tree = renderer.create(
        
    <CourseForm
            course={course[0]}
            authors={authors}
            onSave={jest.fn}
    />)
})