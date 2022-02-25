import React from 'react';
import Header from './Header.jsx';
import TeamWriter from './TeamWriter.jsx';
import EssayWritingFeatures from './EssayWritingFeatures.jsx';
import LatestFeedback from './LatestFeedback.jsx';
import PaperWritingServices from './PaperWritingServices.jsx';
import FreqAskQuestions from './FreqAskQuestions.jsx';
import EssayWritingExp from './EssayWritingExp.jsx'
import StayAnonymus from './StayAnonymus.jsx';

const AllComp = () => {
  return (
    <div>
       < Header/>
        <TeamWriter/>
        <EssayWritingFeatures/>
        <LatestFeedback/>
        <PaperWritingServices/>
        <FreqAskQuestions/>
        <EssayWritingExp/>
        <StayAnonymus/>
    
    </div>
  )
}

export default AllComp;