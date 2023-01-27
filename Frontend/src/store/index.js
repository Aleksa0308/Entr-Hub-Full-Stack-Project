import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import jwt_decode from "jwt-decode";
export default new Vuex.Store({
  state: {
    discuss: [],
    books: [],
    movies: [],
    anime: [],
    comicBooks: [],
    tvShows: [],
    manga: [],
    games: [],
    singleItem: [],
    users:[],
    comments: [],
    token: '',
    user:{
      username: '',
      role: ''
    }
  },
  mutations: {
    getDiscuss(state, discuss) {
      state.discuss = discuss;
    },
    getBooks(state, books) {
      state.books = books;
    },
    getMovies(state, movies) {
      state.movies = movies;
    },
    getAnime(state, anime) {
      state.anime = anime;
    },
    getManga(state, manga) {
      state.manga = manga;
    },
    getComics(state, comicBooks) {
      state.comicBooks = comicBooks;
    },
    getTvShows(state, tvShows) {
      state.tvShows = tvShows;
    },
    getGames(state, games) {
      state.games = games;
    },
    getUsers(state, users) {
      state.users = users;
    },
    getItem(state, item) {
      state.singleItem = item;
    },
    getComments(state, comments) {
      state.comments = comments;
    },
    setToken(state, token) {
      state.token = token;
      var x = jwt_decode(token)
      state.user.username = x.user
      state.user.role = x.role
      localStorage.token = token;
    },

    removeToken(state) {
      state.token = '';
      state.user.username = ''
      state.user.role = ''
      localStorage.token = '';
    },
  },
  actions: {
    fetchDiscussions({ commit }) {
      fetch('http://localhost:8000/api/discuss')
        .then( obj => obj.json() )
          .then( res => commit('getDiscuss', res) );
    },
    fetchDiscuss({ commit, state }, discussId) {
      fetch(`http://localhost:8000/api/discuss/${discussId}`,{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${state.token}`
        }
      })
        .then( obj => obj.json() )
          .then( res => commit('getItem', res) );
    },
    updateDisucss({ commit, state }, obj) {
      console.log(obj.id);
      fetch(`http://127.0.0.1:8000/api/discuss/${obj.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json',
          'Authorization': `Bearer ${state.token}`},
        body: JSON.stringify(obj.obj)
      })
    },
    deleteDiscuss({ commit, state }, discussId) {
      fetch(`http://127.0.0.1:8000/api/discuss/${discussId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json',
          'Authorization': `Bearer ${state.token}`
       },
      })
    },
    postDiscuss({ commit, state}, obj) {
       fetch('http://127.0.0.1:8000/api/discuss', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
          'Authorization': `Bearer ${state.token}` },
        body: JSON.stringify(obj)
    })
    },
    fetchBooks({ commit }) {
      fetch('http://localhost:8000/api/books')
        .then( obj => obj.json() )
          .then( res => commit('getBooks', res) );
    },
    fetchBook({ commit }, bookId) {
      fetch(`http://localhost:8000/api/books/${bookId}`)
        .then( obj => obj.json() )
          .then( res => commit('getItem', res) );
    },
    updateBook({ commit, state }, obj) {
      console.log(obj.id);
      fetch(`http://127.0.0.1:8000/api/books/${obj.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json',
          'Authorization': `Bearer ${state.token}`},
        body: JSON.stringify(obj.obj)
      })
    },
    deleteBook({ commit, state }, bookId) {
      fetch(`http://127.0.0.1:8000/api/books/${bookId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json',
          'Authorization': `Bearer ${state.token}`
       },
      })
    },
    fetchMovies({ commit }) {
      fetch('http://localhost:8000/api/movies')
        .then( obj => obj.json() )
          .then( res => commit('getMovies', res) );
    },
    fetchMovie({ commit }, movieId) {
      fetch(`http://localhost:8000/api/movies/${movieId}`)
        .then( obj => obj.json() )
          .then( res => commit('getItem', res) );
    },
    updateMovie({ commit, state }, obj) {
      console.log(obj.id);
      fetch(`http://127.0.0.1:8000/api/movies/${obj.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json',
          'Authorization': `Bearer ${state.token}`},
        body: JSON.stringify(obj.obj)
      })
    },
    deleteMovie({ commit, state }, movieId) {
      fetch(`http://127.0.0.1:8000/api/movies/${movieId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json',
          'Authorization': `Bearer ${state.token}`
       },
      })
    },
    fetchAnime({ commit }) {
      fetch('http://localhost:8000/api/anime')
        .then( obj => obj.json() )
          .then( res => commit('getAnime', res) );
    },
    fetchAni({ commit }, animeId) {
      fetch(`http://localhost:8000/api/anime/${animeId}`)
        .then( obj => obj.json() )
          .then( res => commit('getItem', res) );
    },
    updateAnime({ commit, state }, obj) {
      console.log(obj.id);
      fetch(`http://127.0.0.1:8000/api/anime/${obj.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json',
          'Authorization': `Bearer ${state.token}`},
        body: JSON.stringify(obj.obj)
      })
    },
    deleteAnime({ commit, state }, animeId) {
      fetch(`http://127.0.0.1:8000/api/anime/${animeId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json',
          'Authorization': `Bearer ${state.token}`
       },
      })
    },
    fetchManga({ commit }) {
      fetch('http://localhost:8000/api/manga')
        .then( obj => obj.json() )
          .then( res => commit('getManga', res) );
    },
    fetchMan({ commit }, mangaId) {
      fetch(`http://localhost:8000/api/manga/${mangaId}`)
        .then( obj => obj.json() )
          .then( res => commit('getItem', res) );
    },
    updateManga({ commit, state }, obj) {
      console.log(obj.id);
      fetch(`http://127.0.0.1:8000/api/manga/${obj.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json',
          'Authorization': `Bearer ${state.token}`},
        body: JSON.stringify(obj.obj)
      })
    },
    deleteManga({ commit, state }, mangaId) {
      fetch(`http://127.0.0.1:8000/api/manga/${mangaId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json',
          'Authorization': `Bearer ${state.token}`
       },
      })
    },
    fetchComics({ commit }) {
      fetch('http://localhost:8000/api/comicbooks')
        .then( obj => obj.json() )
          .then( res => commit('getComics', res) );
    },
    fetchComic({ commit }, comicId) {
      fetch(`http://localhost:8000/api/comicbooks/${comicId}`)
        .then( obj => obj.json() )
          .then( res => commit('getItem', res) );
    },
    updateComics({ commit, state }, obj) {
      console.log(obj.id);
      fetch(`http://127.0.0.1:8000/api/comicbooks/${obj.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json',
          'Authorization': `Bearer ${state.token}`},
        body: JSON.stringify(obj.obj)
      })
    },
    deleteComics({ commit, state }, comicId) {
      fetch(`http://127.0.0.1:8000/api/comicbooks/${comicId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json',
          'Authorization': `Bearer ${state.token}`
       },
      })
    },
    fetchTvShows({ commit }) {
      fetch('http://localhost:8000/api/tvshows')
        .then( obj => obj.json() )
          .then( res => commit('getTvShows', res) );
    },
    fetchTvShow({ commit }, tvShowsId) {
      fetch(`http://localhost:8000/api/tvshows/${tvShowsId}`)
        .then( obj => obj.json() )
          .then( res => commit('getItem', res) );
    },
    updateTvShows({ commit, state }, obj) {
      console.log(obj.id);
      fetch(`http://127.0.0.1:8000/api/tvshows/${obj.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json',
          'Authorization': `Bearer ${state.token}`},
        body: JSON.stringify(obj.obj)
      })
    },
    deleteTvShows({ commit, state }, tvShowsId) {
      fetch(`http://127.0.0.1:8000/api/tvshows/${tvShowsId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json',
          'Authorization': `Bearer ${state.token}`
       },
      })
    },
    fetchGames({ commit }) {
      fetch('http://localhost:8000/api/games')
        .then( obj => obj.json() )
          .then( res => commit('getGames', res) );
    },
    fetchGame({ commit }, gameId) {
      fetch(`http://localhost:8000/api/games/${gameId}`)
        .then( obj => obj.json() )
          .then( res => commit('getItem', res) );
    },
    updateGames({ commit, state }, obj) {
      console.log(obj.id);
      fetch(`http://127.0.0.1:8000/api/games/${obj.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json',
          'Authorization': `Bearer ${state.token}`},
        body: JSON.stringify(obj.obj)
      })
    },
    deleteGames({ commit, state }, gameId) {
      fetch(`http://127.0.0.1:8000/api/games/${gameId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json',
          'Authorization': `Bearer ${state.token}`
       },
      })
    },
    fetchUsers({ commit, state }) {
      fetch('http://localhost:8000/api/users', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${state.token}`
        }
      })
        .then( obj => obj.json() )
          .then( res => commit('getUsers', res) );
    },
    fetchUser({ commit, state }, userId) {
      fetch(`http://localhost:8000/api/users/${userId}`,{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${state.token}`
        }
      })
        .then( obj => obj.json() )
          .then( res => commit('getItem', res) );
    },
    updateUsers({ commit, state }, obj) {
      console.log(obj.id);
      fetch(`http://127.0.0.1:8000/api/users/${obj.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json',
          'Authorization': `Bearer ${state.token}`},
        body: JSON.stringify(obj.obj)
      })
    },
    deleteUsers({ commit, state }, userId) {
      fetch(`http://127.0.0.1:8000/api/users/${userId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json',
          'Authorization': `Bearer ${state.token}`
       },
      })
    },
    postUser({ commit, state}, obj) {
       fetch('http://127.0.0.1:8000/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
          'Authorization': `Bearer ${state.token}` },
        body: JSON.stringify(obj)
    })
    },
    login({ commit }, obj) {
      fetch('http://127.0.0.1:8000/api_login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    }).then( res => res.json() )
      .then( tkn => {
        if (tkn.msg) {
          alert(tkn.msg);
        } else {
          commit('setToken', tkn.token)
        }
      });  
    },
    register({ commit }, obj) {
      fetch('http://127.0.0.1:8000/api_register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }).then( res => res.json() )
        .then( tkn => commit('setToken', tkn.token) );
    },
    postComments({ commit, state}, obj) {
       fetch(`http://127.0.0.1:8000/api/comments/${obj.id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
          'Authorization': `Bearer ${state.token}` },
        body: JSON.stringify(obj.obj)
    })
    },
    fetchComments({ commit }, commId) {
      fetch(`http://localhost:8000/api/comments/${commId}`)
        .then( obj => obj.json() )
          .then( res => commit('getComments', res) );
    }
  }
})
