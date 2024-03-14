import portrait from '../../assets/portrait.png'

const Banner = () => {
    return (
        <div className=' bg-blue-100 flex flex-col lg:flex-row px-10 gap-5 mb-10'>
            <div className="banner-img w-full lg:w-1/2">
                <img src={portrait} alt="" className='w-full lg:w-4/5 scale-x-[-1] drop-shadow-2xl'/>
            </div>
            <div className="banner-content text-center flex flex-col justify-center items-center w-full lg:w-1/2 space-y-4 py-3 md:p-0">
                <div>
                    <p className='text-blue-900'>Unlock the Secrets of Journalism</p>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold'>Start your journey with Arun!</h1>
                </div>
                <p>Dive into the dynamic world of journalism with Arun, a seasoned expert and retired journalist. Gain invaluable insights, practical knowledge, and mentorship through our exclusive 2-week online masterclass. Whether you are an aspiring journalist or seeking to enhance your skills, join us to unlock the secrets of impactful storytelling and reporting. Enroll now and embark on your journey to becoming a proficient journalist!</p>
                <button className='bg-blue-400 p-4 rounded-lg border-blue-500 border-2 hover:bg-transparent transition'>Get Started</button>
            </div>
        </div>
    );
};

export default Banner;