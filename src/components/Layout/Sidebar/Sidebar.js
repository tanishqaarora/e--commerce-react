import React, { useState } from "react";
import './Sidebar.css'

const Sidebar = () => {
    const [filters, setFilters] = useState({
        category: "",
        minPrice: "",
        maxPrice: "",
        size: [],
        color: [],
        brand: "",
        ratings: ""
    });

    const onSelectOption = (e) => {
        const { name, value, type, checked } = e.target;
        setFilters((filters) => ({ ...filters, [name]: value} ));
    }

    return (
        <div class="wrapper">
            <div class="filters-heading">
                FILTERS
            </div>
            <div class="filter-items">
                <div class="item">
                    <h2>Category</h2>
                    <div onChange={onSelectOption} class="category">
                        <input
                            type="radio"
                            name="category"
                            value="Clothing"
                            checked={filters.category === "Clothing"}
                        />
                        <span class="checkmark">Clothing</span>
                        <input
                            type="radio"
                            name="category" 
                            value="Electronics"
                            checked={filters.category === "Electronics"}
                        />
                        <span class="checkmark">Electronics</span>
                    </div>
                </div>

                <div class="item">
                    <h2>Price</h2>
                    <div class="price">
                        <span>min</span>
                        <input 
                            type="number" 
                            name="price" 
                            value="value"
                        />
                        <span>max</span>
                        <input 
                            type="number" 
                            name="price" 
                            value="value"
                        /> 
                    </div>
                </div>

                <div class="item">
                    <h2>Size</h2>
                    <div class="size">
                        <input 
                            type="checkbox" 
                            name="size" 
                            value={filters.size.includes("Small")}
                            onChange={onSelectOption}
                        />
                        <span class="checkmark">Small</span>
                        <input 
                            type="checkbox" 
                            name="size" 
                            value={filters.size.includes("Medium")}
                        />
                        <span class="checkmark">Medium</span>
                        <input 
                            type="checkbox" 
                            name="size" 
                            value={filters.size.includes("Large")}
                        />
                        <span class="checkmark">Large</span>
                    </div>
                </div>

                <div class="item">
                    <h2>Brand</h2>
                    <div class="brand">
                        <input 
                            type="checkbox" 
                            name="brand" 
                            value="filters.brand"
                        />
                        <span class="checkmark">A</span>
                        <input 
                            type="checkbox" 
                            name="brand" 
                            value="brand"
                        />
                        <span class="checkmark">B</span>
                    </div>
                </div>

                <div class="item">
                    <h2>Color</h2>
                    <div class="color">
                        <input 
                            type="checkbox" 
                            name="color" 
                            value="value"
                            // checked={}
                            onChange={onSelectOption}
                        />
                        <span class="checkmark">Red</span>
                        <input 
                            type="checkbox" 
                            name="color" 
                            value={filters.color}
                            // checked={}
                            onChange={onSelectOption}
                        />
                        <span class="checkmark">Blue</span>
                        <input 
                            type="checkbox" 
                            name="color" 
                            value={filters.color}
                            // checked={}
                            onChange={onSelectOption}
                        />
                        <span class="checkmark">Green</span>
                    </div>
                </div>

                <div class="item">
                    <h2>Ratings</h2>
                    <div class="rating">
                        <input 
                            type="checkbox" 
                            name="rating" 
                            value="value"
                        />
                        <span class="checkmark">4 & above</span>
                        <input 
                            type="checkbox" 
                            name="rating" 
                            value="value"
                        />
                        <span class="checkmark">3 & above</span>
                    </div>
                </div>
                
            </div>
            <button className="bg-gray-700 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded"
                type="submit"
                name="submit"
            >
            Apply
            </button>
        </div>
    )
}

export default Sidebar;

