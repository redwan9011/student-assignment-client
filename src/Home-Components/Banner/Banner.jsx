

const Banner = () => {
    return (
      <div className="hero md:h-[60vh] mt-4 md:mt-7" style={{backgroundImage: 'url(https://i.ibb.co/CsY9kK5/mother-child-tablet-home-education-e-learning-support-games-development-banner-happy-family-mom-girl.webp)' ,}}>
      <div className="hero-overlay  bg-opacity-50 bg-black"></div>
      <div className="hero-content  text-neutral-content">
        <div className=" md:pl-8">
          <h1 className="mb-2 md:mb-5 md:text-2xl lg:text-4xl font-bold text-white">Unlock Collaborative <br />Learning Potential</h1>
          <p className="mb-5 w-4/5 md:w-3/5 lg:w-1/2 text-xs md:text-sm lg:text-base">Join a vibrant community of learners and boost your academic success. Connect with peers, create study groups, and collaborate seamlessly on assignments and projects. Access a wealth of study materials and engage in meaningful discussions. Start your journey to excellence today!</p>
       
        </div>
      </div>
    </div>
    );
};

export default Banner;