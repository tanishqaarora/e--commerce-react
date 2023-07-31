import React, { useState, useEffect } from 'react';
import ProductSearch from './Product/Search';
import Filter from './Product/Filter/Filter';

const Home = () => {
    return (
        <>
            <div class="main-container" className='flex'>
              <div>
                <Filter/>
              </div>
                 <div className='ml-60 bg-slate-200'>
                    <ProductSearch/>
                 </div>
            </div>
        </>
    )
}

export default Home;