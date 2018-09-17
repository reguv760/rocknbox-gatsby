import React from 'react';
import { Form, Text } from 'react-form';


const validate = value => ({
  error:
    !value || !/Hello World/.test(value)
      ? "Input must contain 'Hello World'"
      : null,
  warning:
    !value || !/^Hello World$/.test(value)
      ? "Input should equal just 'Hello World'"
      : null,
  success:
    value && /Hello World/.test(value)
      ? "Thanks for entering 'Hello World'!"
      : null
});

const ContactForm = () => {
  return (
  	<Form>
	{
		formApi => (
			<form onSubmit={formApi.submitForm} id="form1" className="mb-4">
		    <ul className="contactForm__container">
		      <li>
		        <label htmlFor="contactForm__name">Name:</label>
		        <Text
		          field="Name"
		          id="contactForm__name"
		          validate={validate}
		        />
		      </li>
		      <li>
		        <label htmlFor="contactForm__email">Email:</label>
		        <Text
		          field="Email"
		          id="contactForm__email"
		          validate={validate}
		        />
		      </li>
		      <li>
		        <label htmlFor="contactForm__comment">Comments:</label>
		        <textarea
		          field="Comments"
		          id="contactForm__comment"
		          validate={validate}
		          rows="3"
		          cols="33"
		          maxlength="200"
		          wrap="hard"
		        />
		      </li>
		      <li>
		        <button type="submit" className="btn btn-primary">
		          Submit
		        </button>
		      </li>
		    </ul>
		  	</form>
	)}
	</Form>
  )
};

export default ContactForm