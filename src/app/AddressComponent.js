import React, {Component, PropTypes} from 'react';

export default class AddressComponent extends Component {
  render() {
    return (
      <div>
        <div>
          <strong>Long Name:</strong>
          <span>{this.props.longName}</span>
        </div>
        <div>
          <strong>Short Name:</strong>
          <span>{this.props.shortName}</span>
        </div>
        <div>
          <strong>Types:</strong>
          <span>{this.props.types.join(', ')}</span>
        </div>
      </div>
    );
  }
}

AddressComponent.propTypes = {
  longName: PropTypes.string,
  shortName: PropTypes.string,
  types: PropTypes.array
};
