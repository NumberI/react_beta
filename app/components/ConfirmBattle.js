import React, { PropTypes } from 'react';
import { space } from '../styles';
import { Link } from 'react-router';
import UserDetails from './UserDetails';
import UserDetailsWrapper from './UserDetailsWrapper';
import MainContainer from './MainContainer';
import Loading from './Loading';

function ConfirmBattle ({ isLoading, playersInfo, onInitiateBattle }) {
  return isLoading === true
    ? <Loading speed={300} text='Wait one moment' />
    : <MainContainer>
        <h1>Confirm Palyers</h1>
        <div className="col-sm-8 col-sm-offset-2">
          <UserDetailsWrapper header='1'>
            <UserDetails info={playersInfo[0]} />
          </UserDetailsWrapper>
          <UserDetailsWrapper header='2'>
            <UserDetails info={playersInfo[1]} />
          </UserDetailsWrapper>
        </div>
        <div className="col-sm-8 col-sm-offset-2">
          <div className="col-sm-12" style={space}>
            <button className="btn btn-lg btn-success" type='button' onClick={onInitiateBattle}>
              Initiate Battle
            </button>
          </div>
          <div className="col-sm-12" style={space}>
            <Link to='/playerOne'>
              <button className="btn btn-lg btn-danger" type="button">
                Reselect Players
              </button>
            </Link>
          </div>
        </div>
      </MainContainer>
};

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isfrom ,
  onInitiateBattle: PropTypes.func.isfrom ,
  playersInfo: PropTypes.array.isfrom 
}

export default ConfirmBattle;