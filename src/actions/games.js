import * as types from './../constants/ActionTypes';
import fetch from 'isomorphic-fetch';
import { v4 } from 'uuid';

export const requestGames = (selectedSkills) => ({
  type: types.REQUEST_GAMES,
  selectedSkills
});

export const receiveGames = (relevantGames) => ({
  type: types.RECEIVE_GAMES,
  relevantGames
});


export function getGames(selectedSkills, dispatch) {
  return function(dispatch) {
    dispatch(requestGames(selectedSkills));
    let gameIdsFromSkills = [];
    selectedSkills.forEach((skill) => {
      if (skill.gameIds) {
        skill.gameIds.forEach((gameId) => {
          gameIdsFromSkills.push(gameId);
        });
        return fetch('http://localhost:3000/games').then(
          response => response.json(),
          error => console.log('An error occured.', error)
        ).then(function(all_games) {
          let games = [];
          all_games.forEach((game) => {
            gameIdsFromSkills.forEach((gameId) => {
              if (gameId === game._id) {
                games.push(game);
              }
            });
          });
          dispatch(receiveGames(games));
        })
      } else {
        let noGames = [{ 
          _id: "no_games_for_the_chosen_skills",
          name: "Our Apologies",
          description: "Unfortunately, we do not currently have any games for the skills you selected.",
          bonus: "We hope to have new games added for you soon."
        }];
        dispatch(receiveGames(noGames));
      }
    });

  }
}
