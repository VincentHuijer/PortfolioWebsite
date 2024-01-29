import React from 'react';
import Sidebar from '../../../components/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; 

const Homepage = () => {
  return (
    <div className="">
      <div className="bg-[#f4f4f4] p-3 flex items-center justify-center mb-7">
        <a href="https://github.com/VincentHuijer/Hadoop-Scraper-kleurindeling-sentientreviewsindeling" className="text-2xl font-serif text-black hover:underline mr-4"> <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> Scraper & kleuranalyse</a>
        <a href="https://github.com/VincentHuijer/Reviews-waarnemen" className="text-2xl font-serif text-black hover:underline mr-4"> <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> Sentient analysis</a>
        <a href="https://github.com/VincentHuijer/Modelling-and-evaluation-of-Machine-Learning" className="text-2xl font-serif text-black hover:underline"> <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> Modelling and evaluation of Machine Learning</a>
      </div>
      <div>
        <div className='flex justify-center'>
          <div className='w-5/12 ml-48 mr-24'>
            <div className='font-sans text-3xl mb-4'>The Great Outdoors </div>
            <div className='font-sans mb-5'>Voor het fictieve bedrijf 'The Great Outdoors', heb ik de opdracht gekregen om onderzoek te doen naar welke sneakers het beste verkopen. Hiervoor heb ik een webscraper gemaakt die de reviews en foto's van de sneakers ophaalt en analyseert. De reviews worden geanalyseerd op sentiment en de productfoto's worden geanalyseerd op kleur. De resultaten van de webscraper worden opgeslagen in een Supabase Database. De resultaten heb ik vervolgens gebruikt om een uitspraak te doen voor het bedrijf welke kleuren sneakers het meest verstandigst zijn om in te kopen en welke punten klanten het meest op letten.</div>
              <div className="font-serif text-xl mb-5">Scraping</div>
              <div className="font-sans mb-5">
                Voor het fictieve bedrijf 'The Great Outdoors', heb ik de opdracht gekregen om onderzoek te doen naar welke sneakers het beste verkopen. Hiervoor heb ik een webscraper gemaakt die de reviews en foto's van de sneakers ophaalt en analyseert. 
              </div>
            <div>
              <div className="font-serif text-xl mb-2">Sentiment analysis</div>
              <div className="font-sans mb-5">
                De reviews worden geanalyseerd op sentiment en de productfoto's worden geanalyseerd op kleur. De resultaten van de webscraper worden opgeslagen in een Supabase Database. De resultaten heb ik vervolgens gebruikt om een uitspraak te doen voor het bedrijf welke kleuren sneakers het meest verstandigst zijn om in te kopen en welke punten klanten het meest op letten.
              </div>
            </div>
            <div>
              <div className="font-serif text-xl mb-5">Modelling and evaluation of Machine Learning</div>
              <div className="font-sans text-lg mb-2">Decisison tree</div>
              <div className="font-sans mb-2">Ik heb een'decision tree' gebouwd om bepaalde kenmerken of categorieën van data te voorspellen op basis van eigenschappen zoals recensies, kleuren en andere relevante kenmerken.</div>
              <div className="font-sans mb-2">Stel dat je wilt voorspellen of een sneaker populair is op basis van het aantal positieve recensies, de kleur en het merk. Een beslissingsboom kan je helpen beslissen welke kenmerken belangrijk zijn bij het voorspellen van de populariteit van een sneaker.</div>
              <div className="font-sans text-lg mb-2">Random forest</div>
              <div className="font-sans mb-2">Met een random forest combineer ik meerdere beslissingsbomen tot een groep om betere voorspellingen te maken dan één boom alleen.</div>
              <div className="font-sans text-lg mb-2">Clustering</div>
              <div className="font-sans mb-2">Ik heb clustering gebruikt voor het Groeperen van sneakers op basis van overeenkomsten, bijvoorbeeld op basis van kleurpatronen, reviewgedrag of andere kenmerken.</div>
              <div className="font-sans mb-2">Je zou sneakers kunnen clusteren op basis van kleurvoorkeuren of recensiegedrag, zonder van tevoren specifieke groepen te definiëren. Dit kan je helpen verborgen structuren in de dataset te ontdekken.</div>
              <div className="font-sans text-lg mb-2">Frequente itemsets</div>
              <div className="font-sans mb-2">Ik heb AI gebruikt voor het identificeer sets van items (bijvoorbeeld kleuren of merken) die vaak samen voorkomen in de dataset.</div>
              <div className="font-sans mb-2">of welke merken vaak samen worden beoordeeld. Dit kan nuttig zijn voor het doen van suggesties voor gerelateerde producten op basis van frequente combinaties.</div>
            </div>
          </div>
          <div className="w-4/12 p-4 mr-36">
            <Sidebar/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
