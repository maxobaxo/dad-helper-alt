import * as types from './../constants/ActionTypes';
import fetch from 'isomorphic-fetch';
import { v4 } from 'uuid';

export const requestGames = () => ({
  type: types.REQUEST_GAMES,
});

export const receiveGames = () => ({
  type: types.RECEIVE_GAMES,
});


export function getGames(selectedSkills, dispatch) {
  return function(dispatch) {
    console.log(selectedSkills);
    dispatch(requestGames(selectedSkills));
    return fetch('http://localhost:3000/games').then(
      response => response.json(),
      error => console.log('An error occured.', error)
    ).then(function(json) {
      console.log(json);
      dispatch(receiveGames(selectedSkills));
    })
  }
}
