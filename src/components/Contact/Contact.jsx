import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import './Contact.css';

const schema = z.object({
  name: z.string().min(1, { message: 'El nombre es requerido' }),
  email: z.string().email({ message: 'Correo electrónico inválido' }),
  message: z.string().min(1, { message: 'El mensaje es requerido' }),
});

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm({ resolver: zodResolver(schema), mode: 'onSubmit' });

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setTimeout(() => {
      isSubmitSuccessful;
      reset();
    }, 2000);
    console.log(data);
    reset();
  };

  return (
    <section className="contact" id="contact">
      <h2>Contacta conmigo</h2>
      <p>Siéntete libre para hablar conmigo sobre cualquier tema.</p>

      <form className='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
        {isSubmitSuccessful && <p className='success-message'>Formulario enviado con éxito.</p>}
        <div className='form-group'>
          <label htmlFor="name">Nombre:</label>
          <input 
            type="text" 
            id="name" 
            {...register('name')}
            aria-label="name" 
            aria-describedby='name-help' 
          />
          {errors.name && <small id="name-help" className="error">{errors.name.message}</small>}
        </div>
        <div className='form-group'>
          <label htmlFor="email">Correo electrónico:</label>
          <input 
            type="email" 
            id="email" 
            {...register('email')}
            aria-label="email" 
            aria-describedby='email-help' 
          />
          {errors.email && <small id="email-help" className="error">{errors.email.message}</small>}
        </div>
        <div className='form-group'>
          <label htmlFor="message">Mensaje:</label>
          <textarea 
            id="message" 
            {...register('message')}
            aria-label="message" 
            aria-describedby='message-help' 
          ></textarea>
          {errors.message && <small id="message-help" className="error">{errors.message.message}</small>}
        </div>
        <button type="submit" className='btn-contact' disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Enviar'}          
        </button>
      </form>
    </section>
  );
}