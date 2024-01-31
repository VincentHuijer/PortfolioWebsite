import React from 'react';
import GenericArticle from '../components/GenericArticle';
import JavaLogo from '../media/Logos/JavaLogo.png' 
import ReactLogo from '../media/Logos/ReactLogo.png' 
import VueLogo from '../media/Logos/VueLogo.png' 
import PythonLogo from '../media/Logos/PythonLogo.png' 
import Sidebar from '../components/Sidebar';

const Portfolio = () => {
  return (
    <div className="">
      <div className="bg-[#f4f4f4] p-3 flex items-center justify-center mb-7 text-2xl font-serif">Portfolio</div>
      <div>
        <div className='flex flex-col justify-center'>
          <div className='w-3/4 ml-5 md:w-5/12 md:ml-48 md:mr-24'>
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
              text="Theater Laak is een fictief bedrijf dat behoefte heeft aan een nieuwe website voor het theater. In het kader van deze opdracht ben ik samen met een groep medestudenten aan de slag gegaan om deze website te ontwikkelen. Tijdens het project moesten we creatieve oplossingen bedenken voor het omzetten van specifieke gegevens in code en het effectief verdelen van verantwoordelijkheden. Het lijkt misschien eenvoudig om een reservering te maken voor een voorstelling, maar hierbij moeten we rekening houden met het feit dat je eigenlijk een stoel koopt voor een bepaalde zaal en voor een specifieke show van een voorstelling. Bovendien moeten alle beschikbare shows overzichtelijk worden weergegeven in een kalender voor gebruikers. Klanten moeten in staat zijn om stoelen in een zaal te bestellen aan de hand van een specifieke opstelling."
              linkReference={'TheaterLaak'}
              linkText={'+ LEES MEER'}
            />

            <GenericArticle
              imageSrc={JavaLogo}
              title="Greenbit, Een applicatie voor Betabit om milieubewuster reizen te stimuleren"
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
            <Sidebar/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
