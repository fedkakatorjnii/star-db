import React, { Component } from 'react';

import Spinner from '../spinner/spinner.js';
import ErrorIndicator from '../error-indicator';
import ErrorButton from '../error-button';
import SwapiService from '../../services/swapi-service.js';

import './person-details.css';

export default class PersonDetails extends Component {

  swapiService = new SwapiService();

  state = {
    person: null,
    loading: true
  };

  componentDidMount() {
    this.updatePerson();
  }
  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
      this.onSpinnerLoaded();
    }
  }

  updatePerson() {
    const {personId} = this.props;
    if (!personId) {
      return;
    }
    this.swapiService
      .getPerson(personId)
      .then(this.onPersonLoaded)
      .catch(this.onError);
  };

  onPersonLoaded = (person) => {
    this.setState({
      person, 
      loading: false,
      error: false
    });
  };

  onError = (error) => {
    this.setState({
      error: true,
      loading: false
    });
  };

  onSpinnerLoaded() {
    this.setState({
      error: false,
      loading: true
    });
  }

      // .then((person) => {
      //   this.setState({person});
      // })

  render() {
    
    const { person, loading, error } = this.state;

    if(!person) {
      return <span>Select a person from a list.</span>
    }

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = hasData ? <PersenView person={person}/>  : null;

    // const { id, name, gender, 
    //         birthYear, eyeColor } = person; 

    return (
      <div className="person-details card">
        {errorMessage}
        {spinner}
        {content}
      </div>
    )
  };
};

const PersenView = ({person}) => {
  const { id, name, gender, 
          birthYear, eyeColor } = person;
  return (
    <React.Fragment>
        <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
          <ErrorButton />
        </div>
    </React.Fragment>
  );
};