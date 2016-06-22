import React, { PropTypes } from 'react';
import { space } from '../styles';
import { Link } from 'react-router';
import UserDetails from './UserDetails';
import UserDetailsWrapper from './UserDetailsWrapper';
import MainContainer from './MainContainer';
import Loading from './Loading';

function StartOver () {
  return (
    <div className="col-sm-12" style={space}>
      <Link to='playerOne'>
        <button className="btn btn-lg btn-danger" type='button'>Start Over</button>
      </Link>
    </div>
  )
}

function Results ({isLoading, scores, playersInfo}) {
  if (isLoading === true) {
    return (
      <Loading text='And a little bit' speed={620} />
    )
  }


  if (scores[0] === scores[1]) {
    return (
      <MainContainer>
        <h1>It's a tie!!!</h1>
        <StartOver />
      </MainContainer>
    )
  }
  const winningIndex = scores[0] > scores[1] ? 0 : 1;
  const loserIndex = 1 - winningIndex;
  return (
    <MainContainer>
      <h1>Results</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header='Winner'>
          <UserDetails score={scores[winningIndex]} info={playersInfo[winningIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Loser'>
          <UserDetails score={scores[loserIndex]} info={playersInfo[loserIndex]} />
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </MainContainer>
  )
};

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

export default Results;