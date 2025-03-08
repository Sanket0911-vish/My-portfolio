<div align="center">
  
  ![GitHub repo size](https://img.shields.io/github/repo-size/Sanket0911-vish/My-portfolio)
  ![GitHub stars](https://img.shields.io/github/stars/Sanket0911-vish/My-portfolio?style=social)
  ![GitHub forks](https://img.shields.io/github/forks/Sanket0911-vish/My-portfolio?style=social)

  <br />

  <h2 align="center">My Portfolio</h2>

  Responsive Portfolio Website using HTML, CSS, and JavaScript.

  <a href="https://Sanket0911-vish.github.io/My-portfolio/"><strong>➥ Live Demo</strong></a>

</div>

<br />

### Desktop Preview

https://github.com/Sanket0911-vish/My-portfolio/assets/118673866/0322c419-a173-4aa9-a360-b09bd7bd24aa

### Prerequisites

Before you begin, ensure you have met the following requirements:

* You Should Know Basic or Intermediate of HTML, CSS, and JavaScript
* This website is developed with Bootstrap 5, copy the code below:
```
<!--- Bootstrap 5 CSS CDN Link --->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />

<!-- Bootstrap JavaScript CDN Link  -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
```

* jQuery CDN Link:
```
<!-- JavaScript jQuery CDN -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
```

* Bootstrap Icons:
```
<!-- Bootstrap icon CDN link  -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css"/>
```

### AOS Animation Library Installation

### Basic
Add styles in `<head>`:
```css
<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
```
Add script right before closing `</body>` tag, and initialize AOS:
```js
<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
<script>
  AOS.init();
</script>
```

### Using package managers

Install `aos` package:
* `yarn add aos@next`
* or `npm install --save aos@next`

Import script, styles, and initialize AOS:
```js
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
```

To make it work, ensure your build process configures styles loader correctly.
If you're using [Parcel](https://parceljs.org/), it will work out of the box.

### How to use it?
1. Initialize AOS:
```js
// Initializing AOS library
AOS.init({
  duration: 1000,
  offset: 50,
});
```

2. Set animation using `data-aos` attribute:
```
<div data-aos="fade-in"></div>
```

* For more guidance, click on <a href="https://github.com/michalsnik/aos/blob/next/README.md">AOS Animation</a>

### Project Contains

* Sticky Responsive Navigation Bar
* Hero Section
* Expertise Section
* Skill Section with Progress Animation
* Contact Section
* Footer Section
* Fully Responsive for All Devices

### Font Family
 
* Using Google Fonts - Josefin Sans:
```
<!-- Google Font Link -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
```

### Run Locally

To run **My Portfolio** locally, use this command:

Linux and macOS:
```bash
sudo git clone https://github.com/Sanket0911-vish/My-portfolio.git
```

Windows:
```bash
git clone https://github.com/Sanket0911-vish/My-portfolio.git
```

### License

This project is **Free To Use** and does not contain any license.

