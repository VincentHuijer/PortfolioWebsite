import React from 'react';
import VincentHuijer from '../media/VincentHuijer.png';

const Homepage = () => {
  return (
    <div className="bg-[#f4f4f4] p-3">
      <div className="bg-[#f4f4f4] p-3 flex items-center justify-center">
        <div className="text-black text-m font-serif">Vincent Huijer</div>
      </div>
      <div>
        <div className='flex justify-center'>
          <div className='w-8/12 ml-36'>
          <div>
            <img src={VincentHuijer} alt="Vincent Huijer" className="w-3/4" />
          </div>
            <div> Vincent Huijer</div>
            <div>
              <strong>
                Gym
              </strong>
              <div>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
            </div>
          </div>

          <div className="w-4/12 p-4">
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
