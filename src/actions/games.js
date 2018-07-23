import * as types from "./../constants/ActionTypes";
import fetch from "isomorphic-fetch";
import { v4 } from "uuid";

export const requestGames = selectedSkills => ({
  type: types.REQUEST_GAMES,
  selectedSkills
});

export const receiveGames = relevantGames => ({
  type: types.RECEIVE_GAMES,
  relevantGames
});

export function getGames(selectedSkills, dispatch) {
  return function(dispatch) {
    dispatch(requestGames(selectedSkills));
    let gameIdsFromSkills = [];
    return fetch("https://floating-basin-62498.herokuapp.com/games")
      .then(
        response => response.json(),
        error => console.log("An error occured.", error)
      )
      .then(function(all_games) {
        let games = [];
        selectedSkills.forEach(skill => {
          if (skill.gameIds) {
            skill.gameIds.forEach(gameId => {
              gameIdsFromSkills.push(gameId);
            });
          }
        });
        if (gameIdsFromSkills.length > 0) {
          all_games.forEach(game => {
            gameIdsFromSkills.forEach(gameId => {
              if (gameId === game._id) {
                games.push(game);
              }
            });
          });
        }
        dispatch(receiveGames(games));
      });
  };
}
