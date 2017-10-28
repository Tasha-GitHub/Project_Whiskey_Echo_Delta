import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { HomePage } from './HomePage';
import { ItineraryPage } from './ItineraryPage';
import { PhotosPage } from './PhotosPage';

const Routes = props => (
  <Router {...props}>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/itinerary" component={ItineraryPage} />
      <Route path="/photos" component={PhotosPage} />
    </div>
  </Router>
);

export default Routes;
