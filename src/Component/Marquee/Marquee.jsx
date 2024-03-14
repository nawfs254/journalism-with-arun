import facebook from '../../assets/media/facebook.png'
import google from '../../assets/media/google.png'
import linkedin from '../../assets/media/linkedin.png'
import microsoft from '../../assets/media/microsoft.png'
import youtube from '../../assets/media/youtube.png'

const Marquee = () => {
    const links = [facebook, google, linkedin, microsoft, youtube];



    return (
        <div>
            <hr  className='border-dashed border-black my-4 px-4 w-full md:w-4/5 mx-auto'/>
            <marquee direction="left" className="flex w-4/5 mx-auto my-5">

                <div className="flex justify-center items-center gap-10">
                    {
                        links.map((link, idx) => <span key={idx} className="mx-4"><img src={link} alt="" className="bg-red grayscale" /></span>)
                    }
                </div>
            </marquee>
            <hr  className='border-dashed border-black my-4 px-4 w-full md:w-4/5 mx-auto'/>

        </div>
    );
};

export default Marquee;