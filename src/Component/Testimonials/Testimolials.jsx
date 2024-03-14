import { useEffect, useState } from "react";
import Testimonial from "../Testimonial/Testimonial";

const Testimolials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('testimonials.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <>
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold my-10" id="reviews">Student reviews</h1>
            <div className="carousel w-full my-10">
                {reviews.map((review, idx) => <Testimonial key={idx} review={review}></Testimonial>)}
            </div>
        </>
    );
};

export default Testimolials;