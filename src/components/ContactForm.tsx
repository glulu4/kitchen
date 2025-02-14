"use client"
import React, {useState} from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',  // Add this line
    });

    const handleChange = (e: any) => {
        const {name, value, type, checked} = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({formData}),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Something went wrong');
            }

            alert('Message sent successfully!');
            setFormData({name: '', email: '', message: ''}); // Reset form
        } catch (error) {
            alert(error instanceof Error ? error.message : 'Failed to send message');
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div className='mx-20'>
            <h2 className="text-5xl font-bold text-left mb-12">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="block font-medium text-lg text-gray-700 mb-1">
                            Full name *
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full border-b border-gray-400 bg-inherit focus:outline-none focus:border-black"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-lg font-medium text-gray-700 mb-1">
                            Email *
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full border-b border-gray-400 bg-inherit focus:outline-none focus:border-black"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-lg font-medium text-gray-700 mb-1">
                        Message *
                    </label>
                    <input
                        type="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full border-b border-gray-400 focus:outline-none bg-inherit focus:border-black"
                    />
                </div>



                <div className="flex justify-center">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-6 py-2 bg-black text-white font-semibold rounded hover:bg-gray-800 disabled:opacity-50"
                    >
                        {isSubmitting ? 'Sending...' : 'Submit'}
                    </button>
                </div>
            </form>
            <div className="flex justify-center mt-8 space-x-4 text-gray-500">
                <a href="#" className="hover:text-gray-700">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="hover:text-gray-700">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="hover:text-gray-700">
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </div>
        </div>
    );
};

export default ContactForm;
