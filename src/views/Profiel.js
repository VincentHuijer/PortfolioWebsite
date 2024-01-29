import React from 'react';
import VincentHuijer from '../media/VincentHuijer.png';
import SearchBar from '../components/Searchbar';

const Homepage = () => {
  return (
    <div className="">
      <div className="bg-[#f4f4f4] p-3 flex items-center justify-center mb-7">
        <div className="text-black text-2xl font-serif">Vincent Huijer</div>
      </div>
      <div>
        <div className='flex justify-center'>
          <div className='w-8/12 ml-36'>
            <div>
              <img src={VincentHuijer} alt="Vincent Huijer" className="w-3/4" />
            </div>
            <div className="pl-64 text-sm">Vincent Huijer</div>

            <div>
              <div className="font-serif text-lg">Studie</div>
              <div className='mb-5'>Het begin van mijn onderwijsreis vond plaats op Stanislas in de mavo. Na mijn tijd op de mavo maakte ik de overstap naar de havo, waar ik mijn academische horizon verder verbreedde. Mijn studiepad bracht me uiteindelijk naar de Haagse Hogeschool, waar ik aanvankelijk HBO Rechten studeerde. Na een zorgvuldige afweging besloot ik echter dat deze richting niet volledig aan mijn verwachtingen voldeed. Daarom maakte ik de overstap naar HBO ICT, waar mijn passie en interesse beter tot hun recht kwamen. Deze beslissing heeft mijn onderwijsreis verrijkt en mijn pad geleid naar een vakgebied dat beter aansluit bij mijn persoonlijke en professionele doelen.</div>
            </div>

            <div>
              <div className="font-serif text-lg">Gym</div>
              <div className='mb-5'>Sporten is voor mij niet alleen een fysieke activiteit, maar een essentieel onderdeel van mijn levensstijl en welzijn. Er zijn talloze redenen waarom ik sporten als iets belangrijks beschouw, en het gaat verder dan alleen het streven naar een gezond lichaam. Allereerst ervaar ik sporten als een krachtig middel om stress te verminderen en mijn mentale gezondheid te verbeteren. Tijdens het sporten kan ik mijn gedachten loslaten en me concentreren op het moment, wat resulteert in een gevoel van ontspanning en helderheid. Het helpt me om spanningen kwijt te raken en even te ontsnappen aan de dagelijkse beslommeringen.</div>
            </div>

          </div>



          <div className="w-4/12 p-4 mr-36">
            <div className="bg-[#F7F7F7] p-6 mb-7">
              <div className='font-serif text-lg'> Zoeken in Vincent.com</div>
              <SearchBar/>
            </div>

            <div className="bg-[#F7F7F7] p-6 mb-7">
              <div className='font-serif text-lg border-b-2 border-black mb-2 pb-1'> Wat doet Vincent Nou weer</div>
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
        </div>
      </div>
    </div>
  );
};

export default Homepage;
