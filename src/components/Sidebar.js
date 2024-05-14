import React, { useEffect, useState } from "react";
import SearchBar from "./Searchbar";
import GetBooks from "../api/message/Books";

const Sidebar = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/message`)).json();
      setData(text);
    })();
  });

  return (
    <div className="hidden md:block">
      <div className=" bg-[#F7F7F7] p-6 mb-7">
        <div className='font-serif text-lg'> Zoeken in vincenthuijer.netlify.app</div>
        <SearchBar/>
      </div>

      <div className="bg-[#F7F7F7] p-6 mb-7">
        <div className='font-serif text-lg border-b-2 border-black mb-2 pb-1'> Something really interesting about Vincent</div>
        <div>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
      </div>

      <div className="bg-[#F7F7F7] p-6 mb-7">
        <div className='font-serif text-lg border-b-2 border-black mb-2 pb-1'> Kleine projecten
          <ul>
            <li className="mb-1">
              <a href="https://github.com/VincentHuijer/ArcaneAegis" className="text-gray-800 hover:underline">C# Unity game project, Arcane Aegis</a>
            </li>
            <li className="mb-1">
              <a href="https://github.com/VincentHuijer/FilmsZoekenAPIMetReact" className="text-gray-800 hover:underline">React project, films zoeken doormiddel van een API</a>
            </li>
            <li className="mb-1">
              <a href="https://github.com/Examenproject/Examentool-voor-studenten" className="text-gray-800 hover:underline">Examentool voor studenten</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-[#F7F7F7] p-6 mb-7">
        <div className='font-serif text-lg border-b-2 border-black mb-2 pb-1'> Accessibility certificering</div>
        <div>
          <a href="https://drive.google.com/file/d/1MRtZNcNN6JZMYKR5S3MQIK2Kx7ffSMVH/view?usp=sharing" className="text-gray-800 hover:underline font-sans" target="_blank" rel="noopener noreferrer">Bekijk in Google Drive</a>
        </div>
      </div>

      <div className="bg-[#F7F7F7] p-6 mb-7">
        <div className='font-serif text-lg border-b-2 border-black mb-2 pb-1'> Boekenlijst</div>
        <GetBooks/>
      </div>
    </div>
  )
}

export default Sidebar;