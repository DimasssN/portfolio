const OMDB_API_KEY = 'a598057';
const app = Vue.createApp({
    data(){
        return {
            search_query:'Batman',
            movieList:[],
            movie_info: [],
            showModal: false,
            favorites: [],
            showFav: false
           // movieList:[{"Title":"Batman Begins","Year":"2005","imdbID":"tt0372784","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"Batman v Superman: Dawn of Justice","Year":"2016","imdbID":"tt2975590","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"Batman","Year":"1989","imdbID":"tt0096895","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg"},{"Title":"Batman Returns","Year":"1992","imdbID":"tt0103776","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg"},{"Title":"Batman Forever","Year":"1995","imdbID":"tt0112462","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"},{"Title":"Batman & Robin","Year":"1997","imdbID":"tt0118688","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg"},{"Title":"The Lego Batman Movie","Year":"2017","imdbID":"tt4116284","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"},{"Title":"Batman: The Animated Series","Year":"1992–1995","imdbID":"tt0103359","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg"},{"Title":"Batman: Under the Red Hood","Year":"2010","imdbID":"tt1569923","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNmY4ZDZjY2UtOWFiYy00MjhjLThmMjctOTQ2NjYxZGRjYmNlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},{"Title":"Batman: The Dark Knight Returns, Part 1","Year":"2012","imdbID":"tt2313197","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg"}]
        }
    },
    created() {
        window.goToPage = this.goToPage.bind(this);
        let fav_list = localStorage.getItem('favorites');
        if(fav_list!=null){
            this.favorites = JSON.parse(fav_list);
            console.log(this.favorites);
        }
        let view = this.getCookie('view');
        if(typeof(view)!= 'undefined'){
            if(view=='blocks'){
                this.blocksView = true;
            }else{
                this.blocksView = false;
            }
        }
    },
    methods:{
        searchMovie(){
            if(this.searchMovie != ''){
                axios.get('http://www.omdbapi.com/?apikey='+OMDB_API_KEY+'&s='+this.search_query)
                .then((resp)=>{
                    console.log(JSON.stringify(resp.data.Search));
                    if(resp.data.Response=='True'){
                        this.movieList = resp.data.Search;
                    }
                    else{
                        alert('Not found');
                    }
                }).catch((err)=>{
                    console.log(err);
                })
            }
        },
        getDetail(id){
            axios.get('http://www.omdbapi.com/?apikey='+OMDB_API_KEY+'&i='+id)
            .then((resp)=>{
                if(resp.data.Response=='True'){
                    this.movie_info = resp.data;
                    this.toggleModalDetail(true);
                }
                else{
                    alert(resp.data.Error);
                }
                console.log(resp.data);
            }).catch((err)=>{
                console.log(err);
            })
        },
        toggleModalDetail(show){
            this.showModal = show;
            document.getElementById('exampleModal').style.display = (show) ? 'block' : 'none';
        },
        toggleFavorites(item){
           let a = this.favorites.findIndex(function(el){
               return el.imdbID == item.imdbID;
            });
            if(a==-1){
                this.favorites.push(item);
            }else{
                this.favorites.splice(a, 1)
            }
            localStorage.setItem('favorites', JSON.stringify(this.favorites));
        },
        showFavorites(disp){
            this.showFav = disp;
            document.getElementById('fav-list').style.display = (disp) ? 'block' : 'none';
        }
    }
});

app.component('movie_item', {
    props: ['item'],
    methods: {
        getDetail(id){
            this.$parent.getDetail(id);
        },
        toggleFavorites(item){
            this.$parent.toggleFavorites(item);
        }
    },
    template: '#movie_item'
});
app.mount('#app');

