const prod = process.env.NODE_ENV === "production";

export default {

  url: prod ? 'https://dade-ufpe.herokuapp.com' : 'http://localhost:3001',

}