//datos para consumir api unplash
const accesKey = 'de2c8549a0426ab60764fa0cff20176be65648868023e2f1ec315ba2d4e76338';
const endPoint = 'https://api.unsplash.com/search/photos';

//función para consumir api unplash, query es la palabra que se va a buscar
// page es la pagina que se quiere recibir desde la api
export const GetImgs = (query,page)=>{
    const fetch = async ()=>{
        try{
            let response = await fetch(endPoint + '?query=' + query + 
            '&client_id=' + accesKey + '&per_page=20' + '&page=' + page);
            let jsonResponse = await response.json();
            let imagesList = await jsonResponse.results; 
            let output = {query: query, page: page, images: []};      
            imagesList.map((element)=>{
                output.images.push({
                    description: element.description,
                    id: element.id,
                    regular: element.urls.regular,
                    thumb: element.urls.thumb
                })
            return output;
            })
            }
            catch (error){
                console.log('Error',error)

        }
    

       
    }
    return fetch();
}