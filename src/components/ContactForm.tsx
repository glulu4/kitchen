import React, {useState} from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subscribe: false,
    });

    const handleChange = (e: any) => {
        const {name, value, type, checked} = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        // Handle form submission here (e.g., send data to API or display message)
        console.log(formData);
    };

    return (
        <div >
            <h2 className="text-5xl font-bold text-left mb-6">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="block font-medium text-lg text-gray-700 mb-1">
                            First name *
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="w-full border-b border-gray-400 focus:outline-none focus:border-black"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-lg font-medium text-gray-700 mb-1">
                            Last name *
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="w-full border-b border-gray-400 focus:outline-none focus:border-black"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-lg font-medium text-gray-700 mb-1">
                        Email Address *
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border-b border-gray-400 focus:outline-none focus:border-black"
                    />
                </div>
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        name="subscribe"
                        checked={formData.subscribe}
                        onChange={handleChange}
                        className="mr-2 border-gray-400"
                    />
                    <label className="text-gray-700 text-sm">
                        Yes, subscribe me to your newsletter.
                    </label>
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-black text-white font-semibold rounded hover:bg-gray-800"
                    >
                        Submit
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
