import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { HomePage } from './HomePage';
import { ItineraryPage } from './ItineraryPage';
import { PhotosPage } from './PhotosPage';
import { PhotosGrid } from './PhotosPage';

const Routes = props => (
  <Router {...props}>
    <div className="routes-container">
      <Route exact path="/" component={HomePage} />
      <Route path="/itinerary" component={ItineraryPage} />
      <Route exact path="/photos" component={PhotosPage} />
      <Route path="/photos/:type" component={PhotosGrid} />
    </div>
  </Router>
);

export default Routes;
