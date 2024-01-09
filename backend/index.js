const express = require("express");
const cors = require("cors");
const axios = require('axios');


const app = express();
app.use(express.json());
app.use(cors({origin:true}));

app.post("/authenticate",async(req,res)=>{
    const {username} = req.body;
    try {
        // ... (axios request)
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            { username: username, secret: username, first_name: username },
            {
              headers: {
                'private-key': 'eff56c56-0ae6-420b-aae9-990bce53c6ae'
              }
            }
          );
          
      
        return res.status(r.status).json(r.data);
      } catch (e) {
        if (e.response) {
          return res.status(e.response.status).json(e.response.data);
        } else {
          // Handle non-response errors
          return res.status(500).json({ message: 'Internal Server Error' });
        }
      }
      
   
});

app.listen(3001);