const http = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="styles.css">
          <title>Annas - Portfolio</title>
          <link rel="stylesheet" href="style.css">
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
          <script src="index.js"></script>
      </head>
      <body>
      <div class="responsive">
      <header>
          <h1>Muhammad Annas Khalid </h1>
          <nav class=".h-nav">
              <ul class=".v-class">
                  <li><a href="homepage.html">Home</a></li>
                  <li><a href="about.html">About</a></li>
                  <li><a href="skills.html">Skills</a></li>
                  <li><a href="projects.html">Projects</a></li>
                  <li><a href="experience.html">Experience</a></li>
                  <li><a href="contact.html">Contact</a></li>
              </ul>
          </nav>
      </header>
      
      
      <div class="content-box">
          <img src="anas.jpg.jpg" width="400px" height="500px"" alt="Image">
          <div class="text-side">
              <script src="index.js"></script>
          <h3><big>W</big>elcome to my portfolio! I am a passionate web developer with a keen interest in creating user-friendly and visually appealing websites. I specialize in front-end technologies and enjoy turning ideas into reality through code.</div> <h3>
      </div>
  </div>
  <footer class=" footer">
          <p>&copy; 2023 Annas. All rights reserved.</p>
          <div class="social-icons">
              <a href="https://instagram.com/annas5585?igshid=OGQ5ZDc2ODk2ZA==" target="_blank"><i class="fab fa-instagram">Instagram</i></a>
              <a href="https://www.linkedin.com/in/annas-khalid-5337b81aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank"><i class="fab fa-linkedin-in">LinkedIn</i></a>
              <a href="https://api.whatsapp.com/send/?phone=%2B923155031175&text&type=phone_number&app_absent=0" target="_blank">Whatsapp<i class="fab fa-whatsapp"></i></a>
              
          </div>
   </footer>
  </div>
  </body>
  </html>
  `);
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});