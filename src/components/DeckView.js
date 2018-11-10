import React, { Component } from 'react';
import DeckList from './DeckList';
import { ScrollView } from 'react-native';
import { fetchRidesThunk } from '../actions';
import { connect } from 'react-redux';

class DeckView extends Component {
  componentDidMount() {
    this.props.fetchRidesThunk();

    this.interval = setInterval(() => {
      this.props.fetchRidesThunk();
    }, 30000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    console.log('updating');
    const { uber, lyft } = this.props;
    return (
      <ScrollView
        horizontal
        pagingEnabled
        style={{ flex: 1, backgroundColor: '#000' }}
      >
        <DeckList uber={uber} lyft={lyft} />
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ rides }) => {
  return { uber: rides.uber, lyft: rides.lyft };
};

export default connect(
  mapStateToProps,
  { fetchRidesThunk }
)(DeckView);
