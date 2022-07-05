import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Formik } from 'formik';

const Form = () => {
  function newRecord() {
    console.log('newRecord');
  }

  const From = () => {
    const [startDate, setStartDate] = useState(new Date());
    let yyyy = startDate.getFullYear();
    let mm = startDate.getMonth() + 1;
    let dd = startDate.getUTCDate();

    let end = `${dd}-${mm}-${yyyy}`;

    localStorage.setItem('end', end);

    return (
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
      />
    );
  };

  const To = () => {
    const [lastDate, setLastDate] = useState(new Date());
    let yyyy = lastDate.getFullYear();
    let mm = lastDate.getMonth() + 1;
    let dd = lastDate.getUTCDate();

    let start = `${dd}-${mm}-${yyyy}`;

    localStorage.setItem('start', start);

    return (
      <DatePicker
        selected={lastDate}
        onChange={(date: Date) => setLastDate(date)}
      />
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        fontSize: '18px',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>Form</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          username: '',
          mobileNo: '',
          email: '',
          skills: '',
          totalExp: '',
          description: '',
        }}
        validate={(values) => {
          const errors = {};

          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
              values.email
            )
          ) {
            errors.email = 'Invalid email address';
          }

          if (!values.username) {
            errors.username = 'Required';
          } else if (/^\S*$/.test(values.username) == false) {
            errors.username = 'no whitespaces allowed';
          }

          if (!values.mobileNo) {
            errors.mobileNo = 'Required';
          }
          if (!values.description) {
            errors.description = 'Required';
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          let data = JSON.parse(localStorage.getItem('data'));

          data.push(values);

          localStorage.setItem('data', JSON.stringify(data));
          console.log(data);

          resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form
            style={{ display: 'flex', flexDirection: 'column' }}
            onSubmit={handleSubmit}
          >
            <input
              id="input1"
              type="text"
              name="firstName"
              onChange={handleChange}
              value={values.firstName}
              placeholder="first name"
            />
            <br></br>
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              value={values.lastName}
              placeholder="last name"
            />
            <br></br>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              value={values.username}
              placeholder="username"
            />
            {errors.username && touched.username && errors.username}
            <br></br>
            <input
              type="text"
              name="mobileNo"
              onChange={handleChange}
              value={values.mobileNo}
              placeholder="mobile number"
            />
            {errors.mobileNo && touched.mobileNo && errors.mobileNo}
            <br></br>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="email"
            />
            {errors.email && touched.email && errors.email}
            <br></br>
            <h4 style={{ textAlign: 'center' }}>Total Experince</h4>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                textAlign: 'center',
              }}
            >
              <h4>To</h4> <To />
              <h4>From</h4> <From />
              <br></br>
            </div>
            <input
              type="text"
              name="description"
              onChange={handleChange}
              value={values.description}
              placeholder="Description"
            />
            {errors.description &&
              touched.description &&
              errors.description}
            <br></br>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
            <br></br>
            <button onClick={newRecord}>New Record</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;
