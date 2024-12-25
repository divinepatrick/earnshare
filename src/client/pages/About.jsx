import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const About = () => {
    return (
        <main className="container mx-auto px-4 py-8">
            <section className="my-16 text-center relative" id="about">
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
                            image: 'https://storage.googleapis.com/a1aa/image/vision.jpg',
                            title: 'Our Vision',
                            description: 'To revolutionize affiliate marketing through cutting-edge AI tools that empower businesses to achieve exceptional growth.',
                        },
                        {
                            image: 'https://storage.googleapis.com/a1aa/image/mission.jpg',
                            title: 'Our Mission',
                            description: 'To provide AI-powered solutions that simplify, optimize, and enhance the affiliate marketing experience for businesses worldwide.',
                        },
                        {
                            image: 'https://storage.googleapis.com/a1aa/image/values.jpg',
                            title: 'Our Core Values',
                            description: 'Innovation, Integrity, Collaboration, and Excellence in every service we provide.',
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
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            <section className="my-16 relative text-center" id="details">
                <h1 className="text-3xl sm:text-4xl font-bold mb-8">Why Choose Us?</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: 'AI Innovation',
                            description: 'We stay ahead of the curve by incorporating the latest AI advancements into our platform.',
                        },
                        {
                            title: 'Tailored Solutions',
                            description: 'Our tools adapt to your unique marketing needs, ensuring personalized results.',
                        },
                        {
                            title: 'Proven Results',
                            description: 'Our platform delivers measurable improvements in campaign performance and ROI.',
                        },
                    ].map((detail, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
                        >
                            <h2 className="text-xl font-bold mb-2">{detail.title}</h2>
                            <p className="text-sm">{detail.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="my-16 text-center relative" id="team">
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-4">Meet the Team</h1>
                    <p className="text-sm sm:text-lg mb-8">
                        Our team consists of passionate individuals dedicated to transforming the affiliate marketing landscape.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: 'Alice Johnson',
                                role: 'CEO & Founder',
                                image: 'https://storage.googleapis.com/a1aa/image/team1.jpg',
                            },
                            {
                                name: 'Bob Smith',
                                role: 'CTO & Co-Founder',
                                image: 'https://storage.googleapis.com/a1aa/image/team2.jpg',
                            },
                            {
                                name: 'Catherine Lee',
                                role: 'Head of AI Development',
                                image: 'https://storage.googleapis.com/a1aa/image/team3.jpg',
                            },
                        ].map((member, index) => (
                            <div key={index} className="text-center">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-24 h-24 mx-auto rounded-full mb-4"
                                />
                                <h3 className="text-xl font-bold">{member.name}</h3>
                                <p className="text-sm">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
