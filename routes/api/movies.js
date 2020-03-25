const UserInfo = require("../../models/UserInfo");
const express = require("express");
const router = new express.Router();

// @route POST /movie/favourites/add
// @desc add a movie to favourites
// @access Public
router.post("/movie/favourites/add", async (req, res) => {
    try {
      const email = req.headers.email;
      const {
        title,
        overview,
        movie_id
      } = req.body;
  
      const user = await UserInfo.findOne({
        email: email.toLowerCase()
      });
  
      if (!user) {
        return res.status(400).json({
        Body: "User not found"
        });
      } else {
        let index = null;
        user.favourites.forEach((movie, i) => {          
          if(movie.movie_id==movie_id){
            index=i
          }
        });
        if(index){
          return res.status(400).json({
            Body: user
          })
        }
          

         const movie_favourite = {
           title: title,
           overview: overview,
           movie_id: movie_id
         }
        user.favourites.push(movie_favourite)
        const saved = await user.save()
        return res.status(200).json({
          Body: saved
          });
      }
    } catch (e) {
      console.log(e);
      return res.status(500).json({
        Body: "NETWORK_ERROR"
      });
    }
});

// @route POST /movie/favourites/remove
// @desc remove a movie to favourites
// @access Public
router.post("/movie/favourites/remove", async (req, res) => {
  try {
    const email = req.headers.email;
    const {
      movie_id
    } = req.body;

    const user = await UserInfo.findOne({
      email: email.toLowerCase()
    });

    if (!user) {
      return res.status(400).json({
      Body: "User not found"
      });
    } else {
        
        let index = null;
        user.favourites.forEach((movie, i) => {          
          if(movie.movie_id==movie_id){
            index=i
          }
        });
        if(index)
          user.favourites.splice(index, 1)
        const saved = await user.save()
        return res.status(200).json({
          Body: saved
        });
    }
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      Body: "NETWORK_ERROR"
    });
  }
});

// @route GET /movie/favourites
// @desc remove a movie to favourites
// @access Public

router.get("/movie/favourites", async(req, res)=>{
  try{
    const email = req.headers.email;

    const user = await UserInfo.findOne({
      email: email.toLowerCase()
    });

    if (!user) {
      return res.status(400).json({
        Body: "User not found"
      });
    } else {
      return res.status(200).json({
        Body: user.favourites
      })
    }
  }catch (e) {
    console.log(e);
    return res.status(500).json({
      Body: "NETWORK_ERROR"
    });
  }
})

module.exports = router