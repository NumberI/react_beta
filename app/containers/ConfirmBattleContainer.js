import React from 'react';
import { transparentBg } from '../styles';
import ConfirmBattle from '../components/ConfirmBattle';
import { getPlayersInfo } from '../utils/githubHelpers';


const ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState () {
    console.log('getInitialState');
    return {
      isLoading: true,
      playersInfo: []
    }
  },
  componentWillMount () {
    console.log('componentWillMount');
  },
  componentDidMount () {
    console.log('componentDidMount');
    const { query } = this.props.location;
    getPlayersInfo([query.playerOne, query.playerTwo])
      .then((players) => {
        this.setState({
          isLoading: false,
          playersInfo: [players[0], players[1]]
        }) 
      })
  },
  handleInitiateBattle () {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      } 
    })
  },
  componentWillReceiveProps () {
    console.log('componentWillReceiveProps');
  },
  componentWillUnmount () {
    console.log('componentWillUnmount');
  },
  render () {
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