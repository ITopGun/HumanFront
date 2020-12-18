let baseURL = 'http://4humandesign.com:8000/api/';

export default class API {
  static baseURL = baseURL;

  static async request(url, method = 'GET', body = null) {
    //   let access_token = data;
      
      
      return await fetch(baseURL + url, {
        method: method,
        headers: {
            
            "Referer": "http://4humandesign.com",
            'Content-Type': 'application/json'
        // //   'Authorization': 'Bearer ' + (access_token ? access_token : null)
        },
        body: body === null ? null : JSON.stringify(body)
      });
  }

  static async createContact(data)
  {
    try{

        console.log(JSON.stringify(data))
        let res = await this.request('contact/', 'POST', data)
        res = res.json()
        return res
    }catch(err)
    {
        return {err:err}
    }
 }

 static async getList()
 {
     try{
        let res = await this.request('blog', 'GET')
        res =res.json()
        return res
     }
     catch(err)
     {
         return {err:err}
     }
 }

 static async getBlogDetails(id)
 {
     try{
        let res = await this.request('blog/'+id, 'GET')
        res =res.json()
        return res
     }
     catch(err)
     {
         return {err:err}
     }
 }
}   