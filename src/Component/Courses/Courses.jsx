const Courses = () => {
    return (
        <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold my-10" id="courses">Explore Courses</h1>

            <p className="text-center p-3 w-full md:w-1/2 mx-auto my-4">Embark on a transformative journey into the world of journalism with our comprehensive online courses, curated by industry veteran Arun. Whether you are a budding journalist eager to kickstart your career or a seasoned professional looking to sharpen your skills, our courses offer practical insights, expert guidance, and hands-on training to help you thrive in media landscape.</p>

            <div className="cards grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full md:w-4/5 mx-auto">
                <div className="card p-5 border-2 space-y-3 mx-2">
                    <img src="https://picsum.photos/200/300" alt="" className="w-full h-[300px] " />
                    <h3 className="text-xl font-semibold">Mastering Journalism: A Comprehensive Guide</h3>
                    <p>Duration: 2 Weeks</p>
                    <p>In this immersive 2-week online masterclass, delve into the captivating world of journalism with seasoned expert, Mr. Arun. Designed for aspiring journalists and those looking to refine their skills, this course offers a comprehensive exploration of the fundamental principles, practical techniques, and ethical considerations essential for success in the field.</p>
                    <button className='bg-blue-400 p-4 rounded-lg border-blue-500 border-2 hover:bg-transparent transition' onClick={() => document.getElementById('my_modal_2').showModal()}>Get Started</button>

                    {/* modal */}
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <dialog id="my_modal_2" className="modal">
                        <div className="modal-box space-y-4 px-10 box-border ">
                            <h3 className="text-xl font-semibold">Mastering Journalism: A Comprehensive Guide</h3>
                            <p>Duration: 2 Weeks</p>
                            <p>In this immersive 2-week online masterclass, delve into the captivating world of journalism with seasoned expert, Mr. Arun. Designed for aspiring journalists and those looking to refine their skills, this course offers a comprehensive exploration of the fundamental principles, practical techniques, and ethical considerations essential for success in the field.</p>
                            <h2 className="font-bold">Course Modules:</h2>
                            <ul className="list-disc">
                                <li>Introduction to Journalism: Gain a deep understanding of the role of journalism in society, its historical context, and its evolution in the digital age.</li>
                                <li>The Art of Storytelling: Learn the art and science of crafting compelling narratives that engage audiences and convey information effectively across various media platforms.</li>
                                <li>Research and Investigation: Develop essential research skills and techniques for conducting thorough investigations, fact-checking, and gathering reliable sources.</li>
                                <li>Interviewing and Reporting: Master the art of conducting interviews, writing news articles, and producing insightful reports that adhere to journalistic standards of accuracy, fairness, and objectivity.</li>
                                <li>Ethics and Integrity: Explore the ethical dilemmas faced by journalists and learn how to navigate complex ethical issues while upholding professional integrity and accountability.</li>
                            </ul>

                            <button className="btn-primary transition border-blue-600 border-2 hover:bg-blue-400 p-3 rounded-md my-5 text-black w-full">Join With Me</button>
                            <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                        </div>
                        
                    </dialog>
                </div>

                <div className="card p-5 border-2 space-y-3 mx-2">
                    <img src="https://picsum.photos/200/300" alt="" className="w-full h-[300px] " />
                    <h3 className="text-xl font-semibold">Mastering Journalism: A Comprehensive Guide</h3>
                    <p>Duration: 2 Weeks</p>
                    <p>In this immersive 2-week online masterclass, delve into the captivating world of journalism with seasoned expert, Mr. Arun. Designed for aspiring journalists and those looking to refine their skills, this course offers a comprehensive exploration of the fundamental principles, practical techniques, and ethical considerations essential for success in the field.</p>
                    <button className='bg-blue-400 p-4 rounded-lg border-blue-500 border-2 hover:bg-transparent transition' onClick={() => document.getElementById('my_modal_1').showModal()}>Get Started</button>

                    {/* modal */}
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box space-y-4 px-10 box-border ">
                            <h3 className="text-xl font-semibold">Mastering Journalism: A Comprehensive Guide</h3>
                            <p>Duration: 2 Weeks</p>
                            <p>In this immersive 2-week online masterclass, delve into the captivating world of journalism with seasoned expert, Mr. Arun. Designed for aspiring journalists and those looking to refine their skills, this course offers a comprehensive exploration of the fundamental principles, practical techniques, and ethical considerations essential for success in the field.</p>
                            <h2 className="font-bold">Course Modules:</h2>
                            <ul className="list-disc">
                                <li>Introduction to Journalism: Gain a deep understanding of the role of journalism in society, its historical context, and its evolution in the digital age.</li>
                                <li>The Art of Storytelling: Learn the art and science of crafting compelling narratives that engage audiences and convey information effectively across various media platforms.</li>
                                <li>Research and Investigation: Develop essential research skills and techniques for conducting thorough investigations, fact-checking, and gathering reliable sources.</li>
                                <li>Interviewing and Reporting: Master the art of conducting interviews, writing news articles, and producing insightful reports that adhere to journalistic standards of accuracy, fairness, and objectivity.</li>
                                <li>Ethics and Integrity: Explore the ethical dilemmas faced by journalists and learn how to navigate complex ethical issues while upholding professional integrity and accountability.</li>
                            </ul>
                            <button className="btn-primary transition border-blue-600 border-2 hover:bg-blue-400 p-3 rounded-md my-5 text-black w-full">Join With Me</button>
                            <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                        </div>
                        
                    </dialog>
                </div>

                <div className="card p-5 border-2 space-y-3 mx-2">
                    <img src="https://picsum.photos/200/300" alt="" className="w-full h-[300px] " />
                    <h3 className="text-xl font-semibold">Mastering Journalism: A Comprehensive Guide</h3>
                    <p>Duration: 2 Weeks</p>
                    <p>In this immersive 2-week online masterclass, delve into the captivating world of journalism with seasoned expert, Mr. Arun. Designed for aspiring journalists and those looking to refine their skills, this course offers a comprehensive exploration of the fundamental principles, practical techniques, and ethical considerations essential for success in the field.</p>
                    <button className='bg-blue-400 p-4 rounded-lg border-blue-500 border-2 hover:bg-transparent transition' onClick={() => document.getElementById('my_modal_3').showModal()}>Get Started</button>

                    {/* modal */}
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box space-y-4 px-10 box-border ">
                            <h3 className="text-xl font-semibold">Mastering Journalism: A Comprehensive Guide</h3>
                            <p>Duration: 2 Weeks</p>
                            <p>In this immersive 2-week online masterclass, delve into the captivating world of journalism with seasoned expert, Mr. Arun. Designed for aspiring journalists and those looking to refine their skills, this course offers a comprehensive exploration of the fundamental principles, practical techniques, and ethical considerations essential for success in the field.</p>
                            <h2 className="font-bold">Course Modules:</h2>
                            <ul className="list-disc">
                                <li>Introduction to Journalism: Gain a deep understanding of the role of journalism in society, its historical context, and its evolution in the digital age.</li>
                                <li>The Art of Storytelling: Learn the art and science of crafting compelling narratives that engage audiences and convey information effectively across various media platforms.</li>
                                <li>Research and Investigation: Develop essential research skills and techniques for conducting thorough investigations, fact-checking, and gathering reliable sources.</li>
                                <li>Interviewing and Reporting: Master the art of conducting interviews, writing news articles, and producing insightful reports that adhere to journalistic standards of accuracy, fairness, and objectivity.</li>
                                <li>Ethics and Integrity: Explore the ethical dilemmas faced by journalists and learn how to navigate complex ethical issues while upholding professional integrity and accountability.</li>
                            </ul>
                            <button className="btn-primary transition border-blue-600 border-2 hover:bg-blue-400 p-3 rounded-md my-5 text-black w-full">Join With Me</button>
                            <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                        </div>
                        
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default Courses;