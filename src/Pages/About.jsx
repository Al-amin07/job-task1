

const About = () => {
    return (
        <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
              About Us
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Welcome to [Your Brand Name], where passion meets creativity. We are dedicated to delivering the best products and exceptional customer service.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex items-center justify-center">
              <img src="[Your Image URL]" alt="About Us Image" className="rounded-lg shadow-lg w-full h-auto object-cover"/>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-800">
                Our Story
              </h3>
              <p className="mt-4 text-gray-600">
                Established in [Year], [Your Brand Name] started with the vision of providing top-notch products to customers worldwide. Our journey began with a small team of passionate individuals, and today, we have grown into a thriving business, thanks to the trust and support of our valued customers.
              </p>
              <p className="mt-4 text-gray-600">
                We believe in quality, innovation, and customer satisfaction. Every product we offer is carefully selected and tested to ensure it meets our high standards. Our mission is to create a seamless shopping experience for you, from browsing to delivery.
              </p>
              <h3 className="mt-8 text-2xl font-semibold text-gray-800">
                Our Values
              </h3>
              <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                <li>Customer First: We prioritize your needs and strive to exceed your expectations.</li>
                <li>Quality: We ensure every product is of the highest quality before it reaches you.</li>
                <li>Innovation: We continuously innovate to bring you the latest trends and products.</li>
                <li>Sustainability: We are committed to ethical practices and sustainable sourcing.</li>
              </ul>
            </div>
          </div>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-gray-800">
              Join Our Community
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Follow us on social media and stay updated with the latest products, offers, and more!
            </p>
            <div className="mt-6 flex justify-center space-x-6">
          
              <a href="#" className="text-gray-400 hover:text-gray-800">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-800">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                 
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-800">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-800">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      
    );
};

export default About;