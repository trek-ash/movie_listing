import { api_base_url } from '../../constants'; 

class Favourite{
    
    add = (email, title, overview, movie_id) => {
        
        const requestOptions = {
            method: 'POST',
            headers: {'content-type':'application/json', email: email},
            body: JSON.stringify({ title: title, overview: overview, movie_id: movie_id})
        };
        return new Promise((res, rej)=>{
            fetch(
                `${api_base_url}/movie/favourites/add`,
                requestOptions
            )
            .then(response => {
                
                if(response.status===400)
                    return res(false)
                
                else return response.json()
            })
            .then(response => {
                
                if(response){
                
                    res(true)
                }
                else
                    res(false)
            })
            .catch(err=>rej(err))
        })
    }

    remove = (email, movie_id) => {
        const requestOptions = {
            method: 'POST',
            headers: {'content-type':'application/json', email: email},
            body: JSON.stringify({ movie_id: movie_id})
        };
        return new Promise((res, rej)=>{
            fetch(
                `${api_base_url}/movie/favourites/remove`,
                requestOptions
            )
            .then(response => {
                
                if(response.status===400)
                    return res(false)
                
                else return response.json()
            })
            .then(response => {
                res(response)
            })
            .catch(err=>rej(err))
        })
    }

    getFavourites = (email) => {
        const requestOptions = {
            method: 'GET',
            headers: {'content-type':'application/json', email: email},
            
        };
        return new Promise((res, rej)=>{
            fetch(
                `${api_base_url}/movie/favourites`,
                requestOptions
            )
            .then(response => {
                
                if(response.status===400)
                    return res(false)
                
                else return response.json()
            })
            .then(response => {
                res(response.Body)
                
            })
            .catch(err=>rej(err))
        })
    }
    
    
}

export default Favourite;