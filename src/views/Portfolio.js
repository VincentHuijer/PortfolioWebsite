import React from 'react';
import SearchBar from '../components/Searchbar';
import GenericArticle from '../components/GenericArticle';
import JavaLogo from '../media/Logos/JavaLogo.png' 
import ReactLogo from '../media/Logos/ReactLogo.png' 
import VueLogo from '../media/Logos/VueLogo.png' 
import PythonLogo from '../media/Logos/PythonLogo.png' 

const Portfolio = () => {
  return (
    <div className="">
      <div className="bg-[#f4f4f4] p-3 flex items-center justify-center mb-7">
        <div className="text-black text-2xl font-serif">Portfolio</div>
      </div>
      <div>
        <div className='flex justify-center'>
          <div className='w-8/12 ml-36'>
              <GenericArticle
                imageSrc={VueLogo}
                title="Een tijdregistratietool en sprintplanner"
                text="Met het huidige systeem van Uniware wordt tijd geregistreerd doormiddel van actiepunten. Actiepunten zijn activiteiten die een medewerker uitvoert voor een klant. Het systeem werkt goed voor interne administratieve doeleinden, maar het is lastig om de activiteiten op efficiënte wijze te delen met medewerkers en klanten. Hiervoor is aan mij de taak om een web-interface te bouwen."
                linkReference={'Uniware'}
                linkText={'+ LEES MEER'}
              />

              <GenericArticle
                imageSrc={ReactLogo}
                title="Een interactieve website voor Theater Laak"
                text="Doormiddel van React.js en C# heb ik in een team gewerkt aan een interactieve website voor Theater Laak."
                // text="Doormiddel van React.js en C# heb ik in een team gewerkt aan een interactieve website voor Theater Laak. Via de website is het mogelijk om tickets voor een stoel in een zaal voor een voorstelling te kopen. De voorstellingen zijn te vinden in de lijst van shows in een kalender"
                linkReference={'TheaterLaak'}
                linkText={'+ LEES MEER'}
              />

              <GenericArticle
                imageSrc={JavaLogo}
                title="Een applicatie voor medewerkers van Betabit om milieubewuster reizen te stimuleren"
                text="Betabit zet zich in om een steeds groener en milieubewuster bedrijf te worden. Hiervoor hebben ze gevraagd of ik een applicatie kan maken die medewerkers stimuleert om milieubewuster te reizen. De applicatie is gemaakt met JavaFX. De medewerkers kunnen doormiddel van de applicatie punten verdienen door milieubewust te reizen. De punten kunnen vervolgens worden ingewisseld voor beloningen."
                linkReference={'Betabit'}
                linkText={'+ LEES MEER'}
              />

              <GenericArticle
                imageSrc={PythonLogo}
                title="Webscraping, optimaliseren productselectie door middel van sentimentanalyse op reviews en kleuranalyse van productfoto's."
                text="Voor het fictieve bedrijf 'The Great Outdoors', heb ik de opdracht gekregen om onderzoek te doen naar welke sneakers het beste verkopen. Hiervoor heb ik een webscraper gemaakt die de reviews en foto's van de sneakers ophaalt en analyseert. De reviews worden geanalyseerd op sentiment en de productfoto's worden geanalyseerd op kleur. De resultaten van de webscraper worden opgeslagen in een Supabase Database. De resultaten heb ik vervolgens gebruikt om een uitspraak te doen voor het bedrijf welke kleuren sneakers het meest verstandigst zijn om in te kopen en welke punten klanten het meest op letten."
                linkReference={'TheGreatOutdoors'}
                linkText={'+ LEES MEER'}
              />


           


          </div>


          <div className="w-4/12 p-4 mr-36">
            <div className="bg-[#F7F7F7] p-6 mb-7">
              <div className='font-serif text-lg'> Zoeken in Vincent.com</div>
              <SearchBar/>
            </div>

            <div className="bg-[#F7F7F7] p-6 mb-7">
              <div className='font-serif text-lg border-b-2 border-black mb-2 pb-1'> Kleine projecten
              <ul>
                <li className="font-sans text-sm"><a href="https://github.com/VincentHuijer/ArcaneAegis">Unity game project Arcane Aegis</a></li>
                <li className="font-sans text-sm"><a href="https://github.com/VincentHuijer/FilmsZoekenAPIMetReact">React project, films zoeken doormiddel van een API</a></li>
              </ul>
              </div>
            </div>

            {/* <div className="bg-[#F7F7F7] p-6 mb-7">
              <div className='font-serif text-lg border-b-2 border-black mb-2 pb-1'> Accessibility certificering</div>
              <div>
              <a href="../media/Files/AccesibilityCertificaat.pdf" target="_blank" rel="noopener noreferrer">Open PDF</a>
              </div>
            </div> */}

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

export default Portfolio;
