const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Enable CORS for all routes
app.use(cors());

// Serve static files from the 'images' folder
app.use('/images', express.static(path.join(__dirname, 'images')));

// Define your API endpoint
app.get('/api/customers', (req, res) => {
  const friends = [
    { id: 1, firstName: 'Joy', lastName: 'Aruku', email: 'joy.gold13@gmail.com', number: '08062356261', image: '/images/joya.jpeg' , profile:  'https://www.linkedin.com/in/joy-aruku-a23361195/'},
    { id: 2, firstName: 'Matthew', lastName: 'Idungafa', email: 'matthew.idungafa@decagon.dev', number: '07032739465', image: '/images/matthew.jpeg' , profile:  'https://www.linkedin.com/in/matthew-idungafa/'},
    { id: 3, firstName: 'Vivian', lastName: 'Ilechukwu', email: 'ilechukwuvivian0@gmail.com', number: '08033702003', image: '/images/vivian.jpeg', profile: "https://www.linkedin.com/in/vivian-ilechukwu-190697296/"},
    { id: 4, firstName: 'David', lastName: 'Arinze', email: 'david.arinze@decagon.dev', number: '+2349157065159', image: '/images/David.jpeg' , profile:  'https://www.linkedin.com/in/joy-aruku-a23361195/'},
    { id: 5, firstName: 'Obianuju', lastName: 'Okpalaezinne', email: 'obianujudim218@gmail.com', number: '07064801144', image: '/images/uju.jpeg' , profile:  'https://www.linkedin.com/in/obianuju-okpalaezinne-9a3163297/'},
    { id: 6, firstName: 'Maritha', lastName: 'Ebolosue', email: 'maritha.ebolosue@decagon.dev', number: '08102915211', image: '/images/Maritha.jpeg' , profile:  'https://www.linkedin.com/in/maritha-ebolosue-823492253/'}
  ];

  res.json(friends);
});

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
