import React from 'react';
import { connect } from 'react-redux';
import {
  createCourseAction,
  loadCoursesAction
} from '../../redux/actions/courseActions';
import PropTypes from 'prop-types';

class CoursesPage extends React.Component {
  componentDidMount() {
    this.props.loadCourses().catch(e => {
      console.log('loading courses failed', e);
    });
  }

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
  createCourse: PropTypes.func.isRequired,
  loadCourses: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createCourse: course => dispatch(createCourseAction(course)),
    loadCourses: () => dispatch(loadCoursesAction())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage);
