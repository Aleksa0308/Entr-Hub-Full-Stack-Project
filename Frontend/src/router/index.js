import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Discuss from '../views/discuss/Discuss.vue'
import AddDiscuss from '../views/discuss/AddDiscuss.vue'
import SingleDiscuss from '../views/discuss/SingleDiscuss.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Books from '../views/books/Books.vue'
import SingleBook from '../views/books/SingleBook.vue'
import EditBook from '../views/books/EditBook.vue'
import AddBook from '../views/books/AddBook.vue'
import Movies from '../views/movies/Movies.vue'
import SingleMovie from '../views/movies/SingleMovie.vue'
import EditMovie from '../views/movies/EditMovie.vue'
import AddMovie from '../views/movies/AddMovie.vue'
import Anime from '../views/anime/Anime.vue'
import SingleAnime from '../views/anime/SingleAnime.vue'
import EditAnime from '../views/anime/EditAnime.vue'
import AddAnime from '../views/anime/AddAnime.vue'
import Manga from '../views/manga/Manga.vue'
import SingleManga from '../views/manga/SingleManga.vue'
import EditManga from '../views/manga/EditManga.vue'
import AddManga from '../views/manga/AddManga.vue'
import ComicBooks from '../views/comicbooks/ComicBooks.vue'
import SingleComic from '../views/comicbooks/SingleComic.vue'
import EditComic from '../views/comicbooks/EditComic.vue'
import AddComic from '../views/comicbooks/AddComic.vue'
import TvShows from '../views/tvshows/TvShows.vue'
import SingleTvShow from '../views/tvshows/SingleTvShow.vue'
import EditTvShows from '../views/tvshows/EditTvShow.vue'
import AddTvShows from '../views/tvshows/AddTvShow.vue'
import Games from '../views/games/Games.vue'
import SingleGame from '../views/games/SingleGame.vue'
import EditGames from '../views/games/EditGame.vue'
import AddGames from '../views/games/AddGame.vue'
import Users from '../views/users/Users.vue'
import EditUsers from '../views/users/EditUser.vue'
import AddUsers from '../views/users/AddUser.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/discuss',
    name: 'discuss',
    component: Discuss
  },
  {
    path: '/discuss/:id',
    name: 'singleDiscuss',
    component: SingleDiscuss
  },
  {
    path: '/discuss/admin/add',
    name: 'addDisscus',
    component: AddDiscuss
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/books',
    name: 'books',
    component: Books
  },
  {
    path: '/books/:id',
    name: 'singleBook',
    component: SingleBook
  },
  {
    path: '/books/:id/edit',
    name: 'editBook',
    component: EditBook
  },
  {
    path: '/books/admin/add',
    name: 'addBook',
    component: AddBook
  },
  {
    path: '/movies',
    name: 'movies',
    component: Movies
  },
  {
    path: '/movies/:id',
    name: 'singleMovie',
    component: SingleMovie
  },
  {
    path: '/movies/:id/edit',
    name: 'editMovie',
    component: EditMovie
  },
  {
    path: '/movies/admin/add',
    name: 'addMovie',
    component: AddMovie
  },
  {
    path: '/anime',
    name: 'anime',
    component: Anime
  },
  {
    path: '/anime/:id',
    name: 'singleAnime',
    component: SingleAnime
  },
  {
    path: '/anime/:id/edit',
    name: 'editAnime',
    component: EditAnime
  },
  {
    path: '/anime/admin/add',
    name: 'addAnime',
    component: AddAnime
  },
   {
    path: '/manga',
    name: 'manga',
    component: Manga
  },
  {
    path: '/manga/:id',
    name: 'singleManga',
    component: SingleManga
  },
  {
    path: '/manga/:id/edit',
    name: 'editManga',
    component: EditManga
  },
  {
    path: '/manga/admin/add',
    name: 'addManga',
    component: AddManga
  },
  {
    path: '/comicbooks',
    name: 'comicBooks',
    component: ComicBooks
  },
  {
    path: '/comicbooks/:id',
    name: 'singleComic',
    component: SingleComic
  },
  {
    path: '/comicbooks/:id/edit',
    name: 'editComic',
    component: EditComic
  },
  {
    path: '/comicbooks/admin/add',
    name: 'addComic',
    component: AddComic
  },
  {
    path: '/tvshows',
    name: 'tvShows',
    component: TvShows
  },
  {
    path: '/tvshows/:id',
    name: 'singleTvShow',
    component: SingleTvShow
  },
  {
    path: '/tvshows/:id/edit',
    name: 'editTvShows',
    component: EditTvShows
  },
  {
    path: '/tvshows/admin/add',
    name: 'addTvShows',
    component: AddTvShows
  },
  {
    path: '/games',
    name: 'games',
    component: Games
  },
  {
    path: '/games/:id',
    name: 'singleGame',
    component: SingleGame
  },
  {
    path: '/games/:id/edit',
    name: 'editGame',
    component: EditGames
  },
  {
    path: '/games/admin/add',
    name: 'addGames',
    component: AddGames
  },
  {
    path: '/users',
    name: 'users',
    component: Users
  },
  {
    path: '/users/:id',
    name: 'editUsers',
    component: EditUsers
  },
  {
    path: '/users/admin/add',
    name: 'addUser',
    component: AddUsers
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
