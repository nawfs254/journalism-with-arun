import PropTypes from 'prop-types'; // ES6

const Testimonial = ({ review }) => {
    const {designation, name, image, review_auth, location } = review;
    return (

        <>
        <div id="#slide1" className="carousel-item relative w-full items-center h-[500px]">
            <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full grayscale blur-sm" />
            <div className="absolute flex justify-between items-center">

                <div className="flex flex-col items-center space-y-2 bg-gray-100 py-2 drop-shadow-lg">
                    <img src={image} alt="" className="w-20 h-20 rounded-full border-2 border-black" />
                    <p className="font-bold">{name}</p>
                    <p className="font-medium">{designation}</p>
                    <p className="text-center w-4/5 md:w-1/2">{review_auth}</p>
                    <p>{location}</p>
                </div>
            </div>
        </div>
        </>
    );
};

Testimonial.propTypes = {
    review : PropTypes.object,
}

export default Testimonial;