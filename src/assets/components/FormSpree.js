// import React from 'react'

// const SendMesage = () => {
//   return (
//     <div className='image_Bkg bg-message-bkg h-screen bg-cover bg-no-repeat bg-center'>
      
//     </div>
//   )
// }

// export default SendMesage
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';


function MessageForm() {
  const [state, handleSubmit] = useForm("mnqwqyap");
  if (state.succeeded) {
      return (
        <section className='grid-cols-1'>
          <p className='form-sent-response section-sub-title'>Thank you for contacting us!</p>
        </section>
      );
  }
  return (
      <form onSubmit={handleSubmit} 
        className='bg-indigo-50 flex flex-col pb-4 items-center'>
          <h2>SEND US A MESSAGE</h2>
        <section className='flex flex-col p-6 w-screen'>
          <label 
            className=''
            htmlFor="email" 
            aria-label='your email'>
            Email Address
          </label>
          <input
            className='mb-4'
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
            rows="6" 
            required
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
      </section>
      <button aria-label='center justified' className='border-black border-2 rounded-full w-6/12 py-4'  type="submit" disabled={state.submitting}>
        Send
      </button>
    </form>
  );
}
const FormSpree = () => {
  return (
    <section>
      <MessageForm />
    </section>
  );
}
export default FormSpree;