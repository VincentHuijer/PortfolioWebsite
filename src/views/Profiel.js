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
              <div className="font-serif text-lg">Gym</div>
              <div className='mb-5'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
            </div>

            <div>
              <div className="font-serif text-lg">Studie</div>
              <div className='mb-5'>Het begin van mijn onderwijsreis vond plaats op Stanislas in de mavo. Na mijn tijd op de mavo maakte ik de overstap naar de havo, waar ik mijn academische horizon verder verbreedde. Mijn studiepad bracht me uiteindelijk naar de Haagse Hogeschool, waar ik aanvankelijk HBO Rechten studeerde. Na een zorgvuldige afweging besloot ik echter dat deze richting niet volledig aan mijn verwachtingen voldeed. Daarom maakte ik de overstap naar HBO ICT, waar mijn passie en interesse beter tot hun recht kwamen. Deze beslissing heeft mijn onderwijsreis verrijkt en mijn pad geleid naar een vakgebied dat beter aansluit bij mijn persoonlijke en professionele doelen.</div>
            </div>

            <div>
              <div className="font-serif text-lg">Interesses</div>
              <div className='mb-5'>Gamen, programmeren, etc bla bla bla lorem</div>
            </div>

            <div>
              <div className="font-serif text-lg">God</div>
              <div>Ik werd christelijk opgevoed in een traditionele omgeving. Maar de klakkeloos geaccepteerde dogmatiek was niet bestand tegen de kritisch vragen die ik leerde stellen op de christelijke studentenvereniging C.S.F.R. en op de universiteit. De dood van vrienden en familie versterkte dat. Ik kon niets meer met kerk en geloof en ik raakte zoekend los van God. Nietzsche, Sartre en Camus hadden me op dat moment meer te bieden dan Bonhoeffer en Kierkegaard; of dan Job en 1 Korinthe 13.

Gelukkig dacht God daar uiteindelijk anders over. Hij legde een liefdevolle hand op mijn schouder. Maar de oude traditie paste niet meer bij me en uiteindelijk kozen we (Jo-Anne en ik) samen met God voor EG Morgenstond in Delft; waar we onze plek vonden en waar ik gelovig werd gedoopt. In die gemeente ben ik als diaken verantwoordelijk voor het onderwijs.

Na mijn terugkeer bij God heb ik nooit meer aan Hem getwijfeld. Maar de vanzelfsprekendheid van het geloof is verdwenen. Als Jacob bij de Jabbok (een metafoor die Graafland hier ooit voor gebruikte) ben ik niet meer wie ik was voordat ik leefde zonder God. Ik ben blij dat ik heb mogen ruiken aan filosofie en theologie. Want dat maakt me bescheiden: hoe dieper ik graaf hoe vaker ik besef dat ik er ten diepste niets van begrijp; dat het meer een kwestie van vertrouwen is. Nietzsche, Sartre en Camus verloren hun glans en Bonhoeffer, Kierkegaard, Job en 1 Korinthe 13 zijn uiteindelijk toch voor me gaan leven.

In preken in mijn thuisgemeente deel ik graag met iedereen die het wil horen wie ik telkens weer ontmoet als ik verder zoek in de Bijbel. Diep in mijn hart zou ik dat best ook in andere kerken willen doen.</div>
            </div>


          </div>


          <div className="w-4/12 p-4 mr-36">
            <div className="bg-[#F7F7F7] p-6 mb-7">
              <div className='font-serif text-lg'> Zoeken in Vincent.com</div>
              <SearchBar/>
            </div>

            <div className="bg-[#F7F7F7] p-6 mb-7">
              <div className='font-serif text-lg border-b-2 border-black mb-2 pb-1'> Wat doet Vincent Nou weer</div>
              <div> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
            </div>

            <div className="bg-[#F7F7F7] p-6 mb-7">
              <div className='font-serif text-lg border-b-2 border-black mb-2 pb-1'> Breaking news</div>
              <div> Eens, in een klein dorpje genaamd Nootdorp, leefde er een eigenaardige eend genaamd Eddie. Eddie was niet zomaar een eend; hij had een onweerstaanbaar talent voor het imiteren van andere dieren. Op een dag besloot Eddie een feest te organiseren voor alle dieren in het dorp. De uitnodigingen waren snel verspreid, en al gauw stond het hele dorp te trappelen van opwinding voor het grote feest. De dieren kwamen van heinde en verre om Eddie's talent te bewonderen.</div>
            </div>

            <div className="bg-[#F7F7F7] p-6 mb-7">
              <div className='font-serif text-lg border-b-2 border-black mb-2 pb-1'> Marco</div>
              <div> In het oude Rome, tijdens de glorieuze dagen van het Romeinse Rijk, regeerde een keizer met wijsheid en filosofische diepgang: Marcus Aurelius. Marcus was niet alleen een krachtige heerser, maar ook een wijs en bedachtzaam man. Het was een warme zomerdag toen Marcus Aurelius besloot om een rustige wandeling te maken door de tuinen van zijn paleis. Terwijl hij door de schaduwrijke paden slenterde, overpeinsde hij zijn plichten als keizer en filosoof. Plotseling hoorde Marcus het geluid van zachte voetstappen achter zich. Hij draaide zich om en zag een jonge schildknaap genaamd Lucius. Lucius had bewondering voor de keizer en vroeg toestemming om met hem te praten.</div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
