import React from 'react';

const Card = (props) => {
    // console.log(props)
    return (
        <div className="  rounded-lg shrink-0 grow shadow-lg overflow-hidden border border-gray-200">
            {/* Image Section */}
            <div className="relative h-60 overflow-hidden">
                <img
                    src={"http://localhost:5000/images/" + props.image} // Replace with your image URL
                    alt="Offer"
                    className="w-full h-full object-cover transition-transform  duration-300 ease-in-out hover:scale-110"
                />
            </div>

            {/* Data Section */}
            <div className="p-4">
                {/* Offer Name */}
                <h2 className="text-lg font-semibold text-gray-800">maxTime:{props.maxTime} - minTime:{props.minTime}</h2>

                {/* Price */}
                <p className="text-gray-600 text-sm mt-1">Price: {props.offer}</p>

                {/* Star Rating */}
                <div className="flex items-center mt-2">
                    <span className=" text-gray-500 text-sm mr-2">Rating:{props.rating}</span>
                    <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
                </div>

                {/* Place Name */}
                <p className="text-gray-500 text-sm mt-1">Place: {props.place}</p>
            </div>
        </div>
    );
};

export default Card;
