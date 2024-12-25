import React, { useState } from 'react';
import axios from 'axios';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const Home = () => {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/query', { query });
            setResponse(res.data.response);
        } catch (error) {
            console.error('Error fetching response:', error);
        }
    };

    return (
        <main className="container mx-auto px-4 py-8">
            <section className="my-16 text-center relative" id="home">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    loop
                    pagination={{ clickable: true }}
                    navigation
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    className="rounded-lg overflow-hidden shadow-lg"
                >
                    {[
                        {
                            image: 'https://storage.googleapis.com/a1aa/image/jXoU6TBC3r7rEJWeR8OdEfr5pQfpXeho85GzXYdmjf0t9COfE.jpg',
                            title: 'Welcome to AI Affiliate Marketing Automation Platform',
                            description: 'Automate your affiliate marketing campaigns with our AI-powered tools and strategies designed to maximize your ROI and streamline your marketing efforts.',
                            buttonText: 'Learn More',
                        },
                        {
                            image: 'https://storage.googleapis.com/a1aa/image/HuEzcdhFg2rmL5Eez0zxSVe7uqXLkLMKTSrofFtWQ8skvgznA.jpg',
                            title: 'Revolutionize Your Marketing',
                            description: 'Leverage AI to transform your affiliate marketing strategies and achieve unprecedented success.',
                            buttonText: 'Get Started',
                        },
                        {
                            image: 'https://storage.googleapis.com/a1aa/image/wgXzgvF6H2KELxqtgwOaQpCuQaYFbCl9dlqjqWIwgbK8FceJA.jpg',
                            title: 'AI-Driven Insights',
                            description: 'Gain valuable insights and optimize your campaigns with our AI-powered analytics tools.',
                            buttonText: 'Discover More',
                        },
                        {
                            image: 'https://storage.googleapis.com/a1aa/image/d32Z7rqCCJ49G94HjhXtN7MSh7UBD6PSsFJ8SDZ1TUB6FceJA.jpg',
                            title: 'Optimize Your Strategy',
                            description: 'Use AI to fine-tune your marketing strategies and achieve better results.',
                            buttonText: 'Learn More',
                        },
                        {
                            image: 'https://storage.googleapis.com/a1aa/image/safhj29V0c29Lim9S91mzXDECqsZIwUtOOZa3vCo8O11L48JA.jpg',
                            title: 'Data-Driven Decisions',
                            description: 'Make informed decisions with AI-powered data analytics and insights.',
                            buttonText: 'Get Started',
                        },
                    ].map((slide, index) => (
                        <SwiperSlide key={index} className="relative">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-[400px] sm:h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-4">
                                <h1 className="text-3xl sm:text-4xl font-bold mb-2">{slide.title}</h1>
                                <p className="text-sm sm:text-lg mb-4">{slide.description}</p>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                    {slide.buttonText}
                                </button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            <section className="my-16 relative" id="products">
                <div className="relative z-10 text-center">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-8">
                        Our AI-Powered Marketing Solutions
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: 'AI-Powered Campaign Optimizer',
                                description: 'Optimize your campaigns with real-time AI analytics and insights.',
                                image: 'https://storage.googleapis.com/a1aa/image/v5lIPhxeTlTyXKV9pwRnlATPzJxpWTi6Jokg6B2QRcj4L48JA.jpg',
                                buttonText: 'Learn More',
                            },
                            {
                                title: 'AI-Driven Audience Targeting',
                                description: 'Identify and target the right audience with precision using AI-driven tools.',
                                image: 'https://storage.googleapis.com/a1aa/image/O5osXWC0n2ZoCROdLDBaF1N1i5JfNumz5e8jUlP1HQbuXw5TA.jpg',
                                buttonText: 'Learn More',
                            },
                            {
                                title: 'AI-Powered Ad Creative Generator',
                                description: 'Generate high-converting ad creatives with the help of AI.',
                                image: 'https://storage.googleapis.com/a1aa/image/ryXd8mtW2daeZa1cpRMRWRmw0qXevrhyYbLZfLbrkmtUvgznA.jpg',
                                buttonText: 'Learn More',
                            },
                            {
                                title: 'AI-Enhanced Performance Tracking',
                                description: 'Track and analyze your performance metrics with AI-enhanced tools.',
                                image: 'https://storage.googleapis.com/a1aa/image/3QQiu99g5OZ8BRrDBPJyqPlA9KPeXclokWcyUZji9u9zL48JA.jpg',
                                buttonText: 'Learn More',
                            },
                        ].map((product, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
                            >
                                <img
                                    alt={product.title}
                                    src={product.image}
                                    className="w-full h-40 object-cover rounded mb-4"
                                />
                                <h2 className="text-xl font-bold mb-2">{product.title}</h2>
                                <p className="text-sm mb-4">{product.description}</p>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                    {product.buttonText}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="my-16 text-center relative" id="search">
                <div className="relative z-10 max-w-2xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                        Find the Best Affiliate Marketing Platforms
                    </h1>
                    <p className="text-sm sm:text-lg mb-8">
                        Get personalized recommendations for the best and highest paid affiliate marketing platforms based on your niche and performance metrics.
                    </p>
                    <form
                        id="chat-form"
                        className="flex flex-col sm:flex-row items-center justify-center"
                        onSubmit={handleSubmit}
                    >
                        <input
                            id="user-input"
                            type="search"
                            placeholder="Ask me anything..."
                            className="w-full sm:w-2/3 py-2 px-4 border rounded mb-4 sm:mb-0 sm:mr-4"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                        >
                            Search
                        </button>
                    </form>
                    {response && <div className="mt-4 bg-gray-100 p-4 rounded">{response}</div>}
                </div>
            </section>

            <section className="my-16 text-center" id="contact">
                <div className="relative z-10 px-4 py-8 md:px-16 lg:px-32 md:py-12">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-4">Get in Touch</h1>
                    <p className="text-sm sm:text-lg mb-8">
                        Have any questions or want to learn more about our products? Contact us today!
                    </p>
                    <form className="max-w-2xl mx-auto">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-left mb-2 font-medium">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-3 py-2 border rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-left mb-2 font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-3 py-2 border rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-left mb-2 font-medium">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                required
                                className="w-full px-3 py-2 border rounded"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </section>


        </main>
        
    );
};

export default Home;
