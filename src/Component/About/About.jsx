import journalism from '../../assets/journalism.jpg'

const About = () => {
    return (
        <div className="my-10" id="about">
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold my-10">About Arun</h1>
            <div className='flex flex-col lg:flex-row w-full md:w-4/5 mx-auto items-center gap-10'>
            <div className="content w-full md:w-1/2 text-center p-4">
                Welcome! I am Arun, and I am thrilled to share my passion for journalism with you.With over 9 years of experience in the field, I have had the privilege of working as a journalist for many organization. Throughout my career, I have covered a diverse range of topics, from local news to global events, and have honed my skills in investigative reporting, feature writing, and multimedia storytelling.
                <br />
                What sets me apart is not just my professional experience, but my dedication to nurturing the next generation of journalists. I believe that journalism is not just a profession, but a calling—a commitment to truth, integrity, and making a difference in the world.
                <br />
                In this masterclass, I am excited to share with you the lessons I have learned, the challenges I have faced, and the insights that have shaped my career. From the fundamentals of journalism to the latest trends in digital media, my goal is to equip you with the knowledge and skills you need to succeed in this dynamic industry.
                <br />
                Join me on this journey, and together, let us explore the power of storytelling and the impact it can have on the world. <br />
                <button className="btn-primary transition border-blue-600 border-2 hover:bg-blue-400 p-3 rounded-md my-5 text-black">Join With Me</button>
            </div>

            <div className="image w-full md:w-1/2">
                <img src={journalism} alt="" className='rounded-xl'/>
            </div>
            </div>
        </div>
    );
};

export default About;