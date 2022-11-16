import React from 'react';
import {useState} from 'react';

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

// const [address, setAddress] = useState("");
// const [suggestion, setSuggestion] = useState("");
 
export default class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '', location: {lat: 0, lng: 0}};
  }



// nach unten props, nach oben events
 
  handleChange = address => {
    this.setState({ address });
  };
 
  handleSelect = address => {
    setAddress(address)
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(alert(this.state.location.lat))
      .then(latLng => alert(latLng.lat))
      .catch(error => console.error('Error', error));
  };


  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        // passing in the state to function from parent component and updating state there
        onSelect={this.props.setAddress(this.state.address)}
        
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                console.log(suggestion);
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}