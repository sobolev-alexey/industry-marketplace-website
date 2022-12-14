import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalState from './context/globalState'
import HomePage from './pages/intro';
import DemoPage from './pages/demo';
import ExecutiveSummary from './pages/en/executive_summary';
import IntroductionToIndustry4 from './pages/en/introduction_to_industry4';
import BenefitsOfIota from './pages/en/benefits_of_iota';
import IndustryMarketplace from './pages/en/industry_marketplace';
import MarketManager from './pages/en/market_manager';
import MarketManagerInteractions from './pages/en/market_manager_interactions';
import ServiceRequester from './pages/en/service_requester';
import ServiceProvider from './pages/en/service_provider';
import YellowPages  from './pages/en/yellow_pages';
import UseCases from './pages/en/use_cases';
import DecentralizedIdentification from './pages/en/decentralized_identification';
import DecentralizedIdentificationTangle from './pages/en/decentralized_identification_tangle';
import TechnicalDemonstrator from './pages/en/technical_demonstrator';
import NeoceptionDemonstrator from './pages/en/neoception_demonstrator';
import WeWashPrototype from './pages/en/wewash_prototype';
import Standards from './pages/en/standards';
import PlattformIndustrie4 from './pages/en/plattform_industrie4';
import Industry4Language from './pages/en/industry4_language';
import Vocabulary from './pages/en/vocabulary';
import MessageStructure from './pages/en/message_structure';
import SemanticInteractionProtocols from './pages/en/semantic_interaction_protocols';
import ProjectPartners from './pages/en/project_partners';
import Join from './pages/en/join';
import RegisterDID from './pages/en/register_did';
import IOTATangle from './pages/en/iota_tangle';
import './assets/styles/content-page.scss';

class App extends Component {
    render() {
        return (
            <GlobalState>
                <BrowserRouter>
                        <Switch>
                            <Route path="/" component={HomePage} exact />
                            <Route path="/demo" component={DemoPage} />
                            <Route path="/executive_summary" component={ExecutiveSummary} />
                            <Route path="/introduction_to_industry4" component={IntroductionToIndustry4} />
                            <Route path="/benefits_of_iota" component={BenefitsOfIota} />
                            <Route path="/industry_marketplace" component={IndustryMarketplace} />
                            <Route path="/market_manager" component={MarketManager} />
                            <Route path="/market_manager_interactions" component={MarketManagerInteractions} />
                            <Route path="/service_requester" component={ServiceRequester} />
                            <Route path="/service_provider" component={ServiceProvider} />
                            <Route path="/yellow_pages" component={YellowPages} />
                            <Route path="/use_cases" component={UseCases} />
                            <Route path="/decentralized_identification" component={DecentralizedIdentification} />
                            <Route path="/decentralized_identification_tangle" component={DecentralizedIdentificationTangle} />
                            <Route path="/technical_demonstrator" component={TechnicalDemonstrator} />
                            <Route path="/neoception_demonstrator" component={NeoceptionDemonstrator} />
                            <Route path="/wewash_prototype" component={WeWashPrototype} />
                            <Route path="/standards" component={Standards} />
                            <Route path="/plattform_industrie4" component={PlattformIndustrie4} />
                            <Route path="/industry4_language" component={Industry4Language} />
                            <Route path="/vocabulary" component={Vocabulary} />
                            <Route path="/message_structure" component={MessageStructure} />
                            <Route path="/semantic_interaction_protocols" component={SemanticInteractionProtocols} />
                            <Route path="/project_partners" component={ProjectPartners} />
                            <Route path="/join" component={Join} />
                            <Route path="/register_did" component={RegisterDID} />
                            <Route path="/iota_tangle" component={IOTATangle} />
                            <Route component={HomePage} />
                        </Switch>
                </BrowserRouter>
            </GlobalState>
        );
    }
}

export default App;
