export const getMovies = async () => {
    const response = await fetch(
      'http://localhost:3001/api/movies', {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
    )
    return response.json();
  };
  
  export const getNowPlayingMovies = async () => {
      const response = await fetch(
          'http://localhost:3001/api/movies/tmdb/now_playing', {
          headers: {
            'Authorization': window.localStorage.getItem('token')
          }
        }
      )
      return response.json();
  }
  
  
  export const getUpcomingMovies = async () => {
    const response = await fetch(
        'http://localhost:3001/api/movies/tmdb/upcoming', {
        headers: {
          'Authorization': window.localStorage.getItem('token')
        }
      }
    )
    return response.json();
  }
  
  
  export const getPopularMovies = async () => {
    const response = await fetch(
        'http://localhost:3001/api/movies/tmdb/popular', {
        headers: {
          'Authorization': window.localStorage.getItem('token')
        }
      }
    )
    return response.json();
  }
  
    export const login = async (username, password) => {
      const response = await fetch('http://localhost:3001/api/users', {
          headers: {
              'Content-Type': 'application/json'
          },
          method: 'post',
          body: JSON.stringify({ username: username, password: password })
      });
      return response.json();
  };
  
  export const signup = async (username, password) => {
      const response = await fetch('http://localhost:3001/api/users?action=register', {
          headers: {
              'Content-Type': 'application/json'
          },
          method: 'post',
          body: JSON.stringify({ username: username, password: password })
      });
      return response.json();
  };