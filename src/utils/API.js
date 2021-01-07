import axios from "axios";

const API = {
  getUsersData: function () {
    return axios.get("https://randomuser.me/api?results=20").then(function (res) {
    const users = res.data.results;
    // console.log("this is from API. Here is users data: ", users)
    return users.map(function (user) {
      return {
        image: user.picture.thumbnail,
        name: `${user.name.first} ${user.name.last}`,
        gender: user.gender,
        email: user.email,
        location: `${user.location.city}, ${user.location.state}, ${user.location.country}`
      }
    })
  })
}}

export default API;