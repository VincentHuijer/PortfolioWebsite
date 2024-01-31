import React from 'react';
import VincentHuijer from '../media/VincentHuijer.png';
import Sidebar from '../components/Sidebar';

const Homepage = () => {
  return (
    <div>
      <div className="flex flex-col items-center text-2xl font-serif mb-5 bg-[#f4f4f4] p-3"> Vincent Huijer</div>
        <div>
          <div className='flex flex-col items-center justify-center md:flex-row md:items-start'>
            <div className='w-3/4 md:w-5/12 mb-6 md:mb-0 md:mr-24'>
              <div>
                <img src={VincentHuijer} alt="Vincent Huijer" className="" />
              </div>
              <div className="ml-12 md:ml-64 text-sm mb-5">Vincent Huijer</div>

              <div>
                <div className="font-serif text-lg">Over mij</div>
                <div className='mb-5'>Hoi, mijn naam is Vincent Huijer. Ik ben 24 jaar oud en ik woon in Nootdorp, Zuid-Holland. Op dit moment volg ik een opleiding ICT Software Engineering aan De Haagse Hogeschool. Ik ben al van jongs af aan geïnteresseerd in computers en heb verschillende activiteiten gedaan, zoals videobewerking, spelen met 3D-modellen in Blender en gamen, wat uiteindelijk leidde tot mijn interesse in programmeren. Tijdens mijn middelbare school begon ik naar alle mogelijkheden binnen de IT-sector te kijken. Hier ontdekte ik softwareontwikkeling en ben ik er dieper in gedoken. Sindsdien breid ik elke week mijn kennis over webontwikkeling uit en heb ik aan verschillende projecten gewerkt.</div>
              </div>
              <div>
                <div className="font-serif text-lg">Studie</div>
                <div className='mb-5'>Het begin van mijn onderwijsreis vond plaats op Stanislas in de mavo. Na mijn tijd op de mavo maakte ik de overstap naar de havo, waar ik mijn academische horizon verder verbreedde. Mijn studiepad bracht me uiteindelijk naar de Haagse Hogeschool, waar ik aanvankelijk HBO Rechten studeerde. Na een zorgvuldige afweging besloot ik echter dat deze richting niet volledig aan mijn verwachtingen voldeed. Daarom maakte ik de overstap naar HBO ICT, waar mijn passie en interesse beter tot hun recht kwamen. Deze beslissing heeft mijn onderwijsreis verrijkt en mijn pad geleid naar een vakgebied dat beter aansluit bij mijn persoonlijke en professionele doelen.</div>
              </div>

              <div>
              <div className="font-serif text-lg">Gym</div>
              <div className='mb-5'>Sporten is voor mij niet alleen een fysieke activiteit, maar een essentieel onderdeel van mijn levensstijl en welzijn. Er zijn talloze redenen waarom ik sporten als iets belangrijks beschouw, en het gaat verder dan alleen het streven naar een gezond lichaam. Allereerst ervaar ik sporten als een krachtig middel om stress te verminderen en mijn mentale gezondheid te verbeteren. Tijdens het sporten kan ik mijn gedachten loslaten en me concentreren op het moment, wat resulteert in een gevoel van ontspanning en helderheid. Het helpt me om spanningen kwijt te raken en even te ontsnappen aan de dagelijkse beslommeringen.</div>
            </div>
          </div>

          <div className="w-4/12 p-4">
            <Sidebar/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
