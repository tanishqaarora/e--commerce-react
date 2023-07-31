import React from "react";

const SearchItem = ({ name, description, price, rating}) => {
    return (
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class=" text-yellow-400 p-8 rounded-t-lg" src="" alt="product image" />
            </a>
            <div class="px-5 pb-5">
                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                    <p class="text-xs text-gray-300 p-2">{description}</p>
            <div class="flex items-center justify-left text-x text-gray-300 p-2">
                    Rating: {rating}
            </div>
                <div class="flex items-center justify-between">
                    <span class="text-3xl font-bold text-gray-900 dark:text-white">Rs. {price}</span>
                    <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy Now</a>
                </div>
            </div>
        </div>
    )
}

export default SearchItem;