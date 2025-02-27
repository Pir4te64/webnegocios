// src/components/Contact/ContactUs.tsx
import React, { useState } from 'react';
import "./ContactUs.css";

const ContactUs: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [formStatus, setFormStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus('Enviando...');
        // Aquí implementarás el envío real del formulario.
        // Por ahora simulamos un envío exitoso:
        setTimeout(() => {
            setFormStatus('Mensaje enviado con éxito.');
            setFormData({ name: '', email: '', message: '' });
        }, 2000);
    };

    return (
        <div className="contact-section2">
            {/* Video de fondo */}
            <video className="background-video1" autoPlay muted loop>
                <source src="/Fondo2.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
            </video>
            <div className="contact-content2">
                <h2>Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Send</button>
                </form>
                {formStatus && <p className="status-message">{formStatus}</p>}
            </div>
        </div>
    );
};

export default ContactUs;
