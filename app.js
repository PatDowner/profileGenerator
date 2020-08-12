const inquirer = require('inquirer')
const fs = require('fs')

inquirer
  .prompt([
    // name
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
      // location
      type: 'input',
      name: 'location',
      message: 'What city and state are you in?'
    },
    {
      // bio
      type: 'input',
      name: 'bio',
      message: 'Write a short bio about yourself.'
    },
    {
      // linkedIn
      type: 'input',
      name: 'linkedin',
      message: 'What is your linked in URL?'
    },
    {
      // GitHub
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?'
    },
    {
      // GitHub
      type: 'input',
      name: 'email',
      message: 'What is your email?'
    }
    // end prompts
  ])
  .then(res => {

    // HTML file
    fs.writeFile('index.html', `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio</title>
  <!-- Reset styelsheet -->
  <link rel="stylesheet" href="./reset.css">

  <!-- Bootstrap stylesheet info -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

  <!-- page-specific stylesheet -->
  <link rel="stylesheet" href="./style.css">
</head>

<body>
  <nav id="navpad" class="navbar navbar-dark bg-info navbar-expand-sm p-3 mb-2 sticky-top">

    <!-- my name, left side of nav bar. links to about page -->
    <a class="navbar-brand" href="./index.html">${res.name}</a>

    <!-- toggle button that appears in right of nav bar at small size screen size, used to reveal/hide nav links on small screens -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- nav links to pages in site, right side of nav bar -->
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <!-- About link, current/active page -->
        <li class="nav-item">
          <a class="nav-link  active" href="./index.html">About<span class="sr-only">(current)</span></a>
        </li>
        <!-- Portfolio link -->
        <li class="nav-item">
          <a class="nav-link" href="">Portfolio</a>
        </li>
        <!-- Contact link -->
        <li class="nav-item">
          <a class="nav-link" href="">Contact</a>
        </li>
      </ul>
    </div>
  </nav>

  <!-- page head -->
  <h1 class="border-bottom boarder border-warning text-body head">About Me</h1>

  <!-- bio -->
  <main class="container">
    <section class="col-sm-12">
      <p>Hello, my name is ${res.name}. I am from ${res.location}.</p>
      <p>${res.bio}</p>
      <!-- my contact info -->
      <p>Folllow me on <a href="${res.linkedin}">my LinkedIn profile</a>, <a href="https://github.com/${res.github}">on
          GitHub</a>, and on this
        site. I can also be reached via email at: <a href="mailto:${res.email}">${res.email}</a>.</p>
    </section>
  </main>

  <!-- creates some extra whitespace at bottom to ensure nothing is hidden by footer -->
  <div id="bottom"></div>

  <!-- footer -->
  <footer class="fixed-bottom bg-info text-light">
    &copy; 2020
  </footer>

  <!-- JavaScript plugins from Bootstrap -->
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
    integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
    crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
    integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
    crossorigin="anonymous"></script>
</body>

</html>
    `, (err) => {
      if (err) { console.log(err) }
      console.log('file created')
    })

    // reset css file
    fs.writeFile('reset.css', `
* {
  box-sizing: border-box;
}

html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */

article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
  display: block;
}

body {
  line-height: 1;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after, q:before, q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
`, (err) => {
      if (err) { console.log(err) }
      console.log('file created')
    })

    // style css file
    fs.writeFile('style.css', `
/* style sheet for index.html */

/* Add some depth to nav bar and left align with content below */

#navpad {
     padding: 8px 20px;
     opacity: .9;
}

/* Sets yellow squiggly under the active link in the nav bar */

.active {
     text-decoration-line: underline;
     text-decoration-style: wavy;
     text-decoration-color: #ffc107;
     -moz-text-decoration-color: #ffc107;
     -moz-text-decoration-style: wavy;
     -moz-text-decoration-line: underline;
}

/* On smaller screens, the navbar switches to a toggle button, this sets the color of the button */

.navbar-toggler {
     background-color: black;
     opacity: .25;
}

/* Give space around the page head "Container", left align with other text, increases font size, reduced opacity to lighten color*/

.head {
     margin: 5px 20px;
     margin-top: 15px;
     padding-bottom: 5px;
     font-size: 24px;
     opacity: .7;
}

/* provides appropriate spacing around columns */

.container {
     margin-top: 20px;
     margin-left: 5px;
}

/* allows small left/right margin maintained on xs screens*/

@media only screen and (max-width: 576px) {
     .container {
          width: 97%;
     }
}

/* Adds white space at bottom of page so all text will clear footer */

#bottom {
     height: 35px;
}

/* creates footer at bottom of page */

footer {
     height: 30px;
     border-top: 5px solid #ffc107;
     text-align: center;
     opacity: .9;
}
`, (err) => {
      if (err) { console.log(err) }
      console.log('file created')
    })
    // end of .then 
  })
  .catch(err => console.log(err))