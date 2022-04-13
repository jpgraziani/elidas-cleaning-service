import React from 'react';
import { useForm, ValidationError } from '@formspree/react';


function MessageForm() {
  const [state, handleSubmit] = useForm("mnqwqyap");
  if (state.succeeded) {
      return (
        <section className='flex'>
          <p className='form-sent-response section-sub-title'>Thank you for contacting us!</p>
        </section>
      );
  }
  return (
      <form onSubmit={handleSubmit} 
        className='bg-indigo-50 flex flex-col items-center container'>
          <h2 className='h2-title text-primary'>How can we help?</h2>
        <section className='flex flex-col container'>
          <label 
            className=''
            htmlFor="email" 
            aria-label='your email'>
            Email Address
          </label>
          <input
            className='mb-4 py-4'
            aria-placeholder='enter your email'
            id="email"
            type="email" 
            name="email"
            required
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
          <label 
            aria-label='your message' 
            className='' 
            htmlFor="message">Your message</label>
          <textarea
            aria-placeholder='enter your message here'
            className=''
            id="message"
            name="message"
            placeholder="How can we help?"
            rows="8" 
            required
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
      </section>
      <button aria-label='center justified' className='btn'  type="submit" disabled={state.submitting}>
        Send
      </button>
    </form>
  );
}
const FormSpree = () => {
  return (
    <section className=''>
      <MessageForm />
    </section>
  );
}
export default FormSpree;