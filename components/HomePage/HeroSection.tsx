import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="bg-[#B9C9E4] py-12 px-4">
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-8 max-w-4xl w-full">
          
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/contactus1.svg"
              alt="Contact Us"
              width={220}
              height={220}
              className="h-auto rounded-md"
              priority
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
            <h1 className="text-3xl font-bold text-blue-900 mb-1">Contact Us</h1>
            <h2 className="text-2xl font-semibold text-blue-900 mb-2">Start Today</h2>
            <p className="text-md font-semibold text-blue-800 mb-1">Change your life, today</p>
            <p className="text-gray-700 mb-4">
              Contact us and start using our communities.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold">
                Contact Us
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;

