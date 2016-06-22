import React from 'react';
import { transparentBg } from '../styles';
import ConfirmBattle from '../components/ConfirmBattle';
import { getPlayersInfo } from '../utils/githubHelpers';


const ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    console.log('getInitialState');
    return {
      isLoading: true,
      playersInfo: []
    }
  },
  componentWillMount: function () {
    console.log('componentWillMount');
  },
  componentDidMount: function () {
    console.log('componentDidMount');
    const { query } = this.props.location;
    getPlayersInfo([query.playerOne, query.playerTwo])
      .then(function (players) {
        this.setState({
          isLoading: false,
          playersInfo: [players[0], players[1]]
        }) 
      }.bind(this))
  },
  handleInitiateBattle: function () {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      } 
    })
  },
  componentWillReceiveProps: function () {
    console.log('componentWillReceiveProps');
  },
  componentWillUnmount: function () {
    console.log('componentWillUnmount');
  },
  render: function () {
    console.log('componentRender');
    return (
        <ConfirmBattle 
          isLoading={this.state.isLoading}
          onInitiateBattle={this.handleInitiateBattle}
          playersInfo={this.state.playersInfo} />
    );
  }
});

export default ConfirmBattleContainer;