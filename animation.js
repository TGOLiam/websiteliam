const textElement = document.getElementById("text");
  const isMediaQueryMatched = window.matchMedia("(max-width: 768px)").matches;
  const text = isMediaQueryMatched ? "WE\nARE\nASPIRING\nDEVELOPERS." : "WE ARE ASPIRING DEVELOPERS.";
  const speed = 80;
  let index = 0;

  function typeText() {
    if (index < text.length) {
      textElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeText, speed);
    }
  }

  typeText();

// About Us Animation
const aboutUsElement = document.getElementById("about-us");
const aboutUsText = "ABOUT US";
const aboutUsSpeed = 100;
let aboutUsIndex = 0;

function typeAboutUsText() {
  if (aboutUsIndex < aboutUsText.length) {
    aboutUsElement.textContent += aboutUsText.charAt(aboutUsIndex);
    aboutUsIndex++;
    setTimeout(typeAboutUsText, aboutUsSpeed);
  }
}

// Paragraph Animation
const paragraphElement = document.getElementById("paragraph");
const paragraphText = "LoreJohn Anderson is an accomplished entrepreneur and visionary leader, recognized for his significant contributions to the technology industry. Born on June 1, 1980, in the bustling city of New York, Anderson displayed an innate curiosity and passion for innovation from an early age.";
const paragraphSpeed = 10;
let paragraphIndex = 0;

function typeParagraphText() {
  if (paragraphIndex < paragraphText.length) {
    paragraphElement.textContent += paragraphText.charAt(paragraphIndex);
    paragraphIndex++;
    setTimeout(typeParagraphText, paragraphSpeed);
  }
}

// Paragraph 2 Animation
const paragraph2Element = document.getElementById("paragraph2");
const paragraph2Text = "LoreJohn Anderson is an accomplished entrepreneur and visionary leader, recognized for his significant contributions to the technology industry. Born on June 1, 1980, in the bustling city of New York, Anderson displayed an innate curiosity and passion for innovation from an early age.";
const paragraph2Speed = 10;
let paragraph2Index = 0;

function typeParagraph2Text() {
  if (paragraph2Index < paragraph2Text.length) {
    paragraph2Element.textContent += paragraph2Text.charAt(paragraph2Index);
    paragraph2Index++;
    setTimeout(typeParagraph2Text, paragraph2Speed);
  }
}

// Project Welcome Animation
const projectWelcomeElement = document.getElementById("project-welcome");
const projectWelcomeText = "WHAT WE'RE WORKING ON";
const projectWelcomeSpeed = 50;
let projectWelcomeIndex = 0;

function typeProjectWelcomeText() {
  if (projectWelcomeIndex < projectWelcomeText.length) {
    projectWelcomeElement.textContent += projectWelcomeText.charAt(projectWelcomeIndex);
    projectWelcomeIndex++;
    setTimeout(typeProjectWelcomeText, projectWelcomeSpeed);
  }
}

// Project Title Animation
const projectTitleElement = document.getElementById("project-title");
const projectTitleText = "A GAME PROTOTYPE";
const projectTitleSpeed = 50;
let projectTitleIndex = 0;

function typeProjectTitleText() {
  if (projectTitleIndex < projectTitleText.length) {
    projectTitleElement.textContent += projectTitleText.charAt(projectTitleIndex);
    projectTitleIndex++;
    setTimeout(typeProjectTitleText, projectTitleSpeed);
  }
}

// Project Description Animation










// Intersection Observer for About Us Animation
const aboutUsContainer = document.querySelector(".about-us-container");
const aboutUsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      typeAboutUsText();
    }
  });
});

aboutUsObserver.observe(aboutUsContainer);

// Intersection Observer for Fade-in Animation
const paragraphBox = document.querySelector('.paragraph-box');
const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
});

fadeInObserver.observe(paragraphBox);

// Observer for paragraph
const paragraphObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      typeParagraphText();
    }
  });
});

paragraphObserver.observe(paragraphBox);

// Observer for paragraph 2
const paragraph2Observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      typeParagraph2Text();
    }
  });
});

paragraph2Observer.observe(paragraphBox);


// Observer for project welcome
const projectWelcomeBox = document.querySelector('.project-welcome-container');
const projectWelcomeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      typeProjectWelcomeText();
    }
  });
});

projectWelcomeObserver.observe(projectWelcomeBox)


// Fade in & pan up Animation for project GIF
const projectGifBox = document.querySelector('.project-gif');
const projectGifObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
});

projectGifObserver.observe(projectGifBox);

// Observer for project title
const projectTitleContainer = document.querySelector(".project-title-container");
const projectTitleObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      typeProjectTitleText();
    }
  });
});

projectTitleObserver.observe(projectGifBox);

/*
const codeElement = document.getElementById('code');
const code = `<!DOCTYPE html>
<html>
<head>
  <title>We Are Aspiring Developers</title>
  <style>
    body {
      background-color: #f2f2f2;
      background-image: url("background-image.jpg");
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
    }
  </style>
</head>
<body>
  <h1>Welcome to "We Are Aspiring Developers"</h1>
  <p>This is a community for aspiring developers to learn and grow together.</p>
</body>
</html>
`;

let currentIndex = 0;

function typeCode() {
  codeElement.textContent = code.substr(0, currentIndex);
  currentIndex++;

  if (currentIndex <= code.length) {
    setTimeout(typeCode, 25);
  } else {
    codeElement.classList.remove('blink');
  }
}

typeCode();
codeElement.classList.add('blink');
*/
