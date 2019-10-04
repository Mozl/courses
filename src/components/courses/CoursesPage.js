import React from 'react';
import { connect } from 'react-redux';
// import * as courseActions from '../../redux/actions/courseActions';
import { createCourseAction } from '../../redux/actions/courseActions';
import PropTypes from 'prop-types';

class CoursesPage extends React.Component {
  render() {
    return (
      <>
        <h2>Courses</h2>
        {this.props.courses.map(course => (
          <div key={course.title}>{course.title}</div>
        ))}
      </>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  createCourse: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createCourse: course => dispatch(createCourseAction(course))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage);
