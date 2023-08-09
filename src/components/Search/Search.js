import React, { useState, useEffect } from 'react';
import SearchItem from './SearchItem'
import { showToast } from '../../App';

const Search = () => {

    const [name, setName] = useState('');
    const [products, setProducts] = useState([]);

    const fetchProducts = async() => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/all-products`)
            const result = await response.json()
            
            if(response.status === 200) {
                setProducts(result.products)
            } else {
                showToast(result.message, 'error')
            }
        } catch(error) {
            showToast("Error in fetching products", 'error')
        }
    }
    
    useEffect(() => {
        fetchProducts()
    },[])

    const handleInputChange = (e) => {
        const name = e.target.value
        setName(name)
    }

    const onSearch = async() => {
        try {
            if(name){
                const response = await fetch(`${process.env.REACT_APP_API_URL}/search/products?name=${name}`, {
                    method: 'POST'
                })
                const result = await response.json()

                if(response.status === 200) {
                    setProducts(result.filteredProducts)
                } else {
                    showToast(result.message, 'error')
                }
            }
        } catch(error) {
            showToast("Error in fetching products", 'error')
        }
    }

    return (
        <>
            <div className="flex space m-6">
                <input
                    type="text"
                    name="search"
                    value={name}
                    onChange={handleInputChange}
                    className="block w-96 px-4 py-2 text-purple-700 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                />
                <button onClick={onSearch} className="px-4 text-white bg-purple-600 rounded-full ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                    </svg>
                </button>
            </div>
            <div class="m-9 grid grid-cols-4 gap-3">
                {products && products.length > 0 ? (
                    products.map(product => 
                        <SearchItem
                        key={product.id}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        rating={product.rating}
                        />
                    )
                ) : (
                    <span className="m-28 text-3xl pl-80">No products to show</span>
                )}
            </div> 
        </>
    )
}

export default Search;