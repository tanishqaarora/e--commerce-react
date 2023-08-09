import React from 'react';
import Sidebar from '../Layout/Sidebar/Sidebar';
import Search from '../Search/Search'

const Home = () => {
    return (
      <>
        <div class="flex gap-2">
          <div> 
            <Sidebar/>
          </div>
          <div className="bg-gray-300 w-full">
            <Search/>
          </div>
        </div>
       
      </>
    )
}

export default Home;