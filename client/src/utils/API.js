import axios from "axios";

export default {
  getPlayers: function() {
    return axios.get("/api/players");
  },
  getPlayer: function(id) {
    return axios.get(`/api/players/${id}`);
  },
  // Deletes the book with the given id
  // deletePlayer: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // Saves a book to the database
  // savePlayer: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
  getCatchesByPlayerId: function(playerId) {
    return axios.get(`/api/catches/playerId/${playerId}`)
  },
  getCatchById: function(catchId) {
    return axios.get(`/api/catches/${catchId}`)
  }
};
