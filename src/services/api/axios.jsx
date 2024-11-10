import axios from "axios";


export const axiosinstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/',
    params: {
        api_key: '411da55f79f5dd8ade3ddc33b2b0978d'
    }
  });


  export const axiosinstance2 = axios.create({
    baseURL: 'http://localhost:5000/user',
  });



  axiosinstance.interceptors.response.use((resconfig)=>{
    if(resconfig.status === 200 && Array.isArray(resconfig.data.results)){
        resconfig.data.results = resconfig.data.results.map((e)=>{
            return {...e , fav:false}
        })
    }
    return resconfig;

  })


  axiosinstance2.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });