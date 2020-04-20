import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import {connect} from 'react-redux';

import LoginPage from "../LoginPage";
import  CreateTripPage from "../CreateTripPage";
import HomePage from "../HomePage";
import ListTripPage from "../ListTripsPage";
import TripDetails from "../TripDetailsPage";

export const routes ={
    root: "/",                                           // login ou formulario
    applicationForm: "/application-form",                // qualquer usuario cadastrar
    login: "/login",                                     // para fazer login
    tripsCreate: "/trips/create",                        // criar viagens
    tripsDetails: "/trips/details",                      // detalhes da viagem
    tripList: "/trips/List"                              // ver todas viagens
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
          <Route path={routes.root} component={HomePage} />
          <Route path={routes.login} component={LoginPage} />
          <Route path={routes.tripsCreate} component={CreateTripPage} />
          <Route path={routes.tripList} component={ListTripPage} />
          <Route path={routes.tripsDetails} component={TripDetails} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
