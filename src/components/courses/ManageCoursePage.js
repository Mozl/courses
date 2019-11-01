import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { loadAuthorsThunk } from '../../redux/actions/authorActions';
import { loadCoursesThunk } from '../../redux/actions/courseActions';
import PropTypes from 'prop-types';
import CourseForm from './CourseForm';
import { newCourse } from '../../../tools/mockData';

const ManageCoursePage = ({
  courses,
  authors,
  loadAuthors,
  loadCourses,
  ...props
}) => {
  const [course, setCourse] = useState({ ...props.course });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch(error => {
        alert('Loading courses failed' + error);
      });
    }

    if (authors.length === 0) {
      loadAuthors().catch(error => {
        alert('Loading authors failed' + error);
      });
    }
  }, []);

  const handleChange = event => {
    const { name, value } = event.target;
    setCourse(prevCourse => ({
      [name]: name === 'authorId' ? parseInt(value, 10) : value
    }));
  };

  return (
    <CourseForm
      course={course}
      errors={errors}
      authors={authors}
      onChange={handleChange}
    />
  );
};

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    course: newCourse,
    courses: state.courses,
    authors: state.authors
  };
}

const mapDispatchToProps = {
  loadCourses: loadCoursesThunk,
  loadAuthors: loadAuthorsThunk
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCoursePage);
