import React from "react";
import SearchBar from "./Searchbar";

const Sidebar = () => {
  return (
  <div>
  <div className="bg-[#F7F7F7] p-6 mb-7">
    <div className='font-serif text-lg'> Zoeken in VincentHuijer.com</div>
    <SearchBar/>
  </div>

  <div className="bg-[#F7F7F7] p-6 mb-7">
    <div className='font-serif text-lg border-b-2 border-black mb-2 pb-1'> Something really interesting about Vincent</div>
    <div>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
  </div>

  <div className="bg-[#F7F7F7] p-6 mb-7">
    <div className='font-serif text-lg border-b-2 border-black mb-2 pb-1'> Boekenlijst</div>
    <div>Meditations, Marcus Aurelius </div>
    <div>The Way of the Superior Man, David Deida</div>
    <div>On the Shortness of Life, Lucius Annaeus Seneca</div>
    <div>Letters from a stoic, Lucius Annaeus Seneca</div>
    <div>Ego Is the Enemy, Ryan Holiday</div>
    <div>How to win friends & influence people, Dale Carnegie</div>
  </div>

  <div className="bg-[#F7F7F7] p-6 mb-7">
    <div className='font-serif text-lg border-b-2 border-black mb-2 pb-1'> Lorem Ipsum</div>
    <div> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
  </div>
</div>
  )
}

export default Sidebar;