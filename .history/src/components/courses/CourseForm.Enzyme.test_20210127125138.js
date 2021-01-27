import React from 'react';
import CourseForm from './CourseForm';
import { shallow } from 'enzyme';
import { iteratee } from 'lodash';

function renderCourseForm(args){
    const defaultProps = {
        authors: [],
        course: {},
        saving: false,
        errors: {},
        onSave: () => {},
        onChange: () => {}
    }

    const props = { ...defaultProps, ...args };
    return shallow(<CourseForm {...props} />);

}

iteratee(