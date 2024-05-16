window.localStorage.setItem('v4Particles', 'true')

// Nav
var nav = document.querySelector('.fixed-nav-bar')

if (nav) {
  var html = `
    <div class="fixed-nav-bar-container">
      <a class="icon" href="/./">Cosmic</a>
    </div>
    <div class="fixed-nav-bar-right">
      <a class="navbar-link" href="/./g"><i class="fa-solid fa-gamepad navbar-icon"></i><xn>Ga</xn><xn>mes</xn></a>
      <a class="navbar-link" href="/./ap"><i class="fa-solid fa-phone navbar-icon"></i><xn>Ap</xn><xn>ps</xn></a>
      <a class="navbar-link" href="/./t"><i class="fa-solid fa-laptop navbar-icon"></i><xn>Ta</xn><xn>bs</xn></a>
      <a class="navbar-link" href="/./s"><i class="fa-solid fa-gear navbar-icon settings-icon"></i><xn>Set</xn><xn>tings</xn></a>
    </div>`
  nav.innerHTML = html
}

// Themes
var themeid = localStorage.getItem('theme')
themeEle = document.createElement('link')
themeEle.rel = 'stylesheet'
if (themeid == 'catppuccinMocha') {
  themeEle.href = '/assets/styles/themes/catppuccin/mocha.css?v=1'
}
if (themeid == 'catppuccinMacchiato') {
  themeEle.href = '/assets/styles/themes/catppuccin/macchiato.css?v=1'
}
if (themeid == 'catppuccinFrappe') {
  themeEle.href = '/assets/styles/themes/catppuccin/frappe.css?v=1'
}
if (themeid == 'catppuccinLatte') {
  themeEle.href = '/assets/styles/themes/catppuccin/latte.css?v=1'
}
document.body.appendChild(themeEle)
// Tab Cloaker
document.addEventListener('DOMContentLoaded', function (event) {
  const icon = document.getElementById('tab-favicon')
  const name = document.getElementById('tab-title')
  const selectedValue = localStorage.getItem('selectedOption')

  function setCloak(nameValue, iconUrl) {
    // Check for custom values in local storage
    const customName = localStorage.getItem('CustomName')
    const customIcon = localStorage.getItem('CustomIcon')

    // If custom values exist, use them. Otherwise, use the provided values.
    if (customName) {
      nameValue = customName
    }
    if (customIcon) {
      iconUrl = customIcon
    }

    if (iconUrl) {
      icon.setAttribute('href', iconUrl)
      localStorage.setItem('icon', iconUrl)
    }
    if (nameValue) {
      name.textContent = nameValue
      localStorage.setItem('name', nameValue)
    }
  }

  const options = {
    Google: { name: 'Google', icon: '/assets/media/favicon/google.png' },
    Drive: { name: 'My Drive - Google Drive', icon: '/assets/media/favicon/drive.png' },
    Classroom: { name: 'Home', icon: '/assets/media/favicon/classroom.png' },
    Schoology: { name: 'Home | Schoology', icon: '/assets/media/favicon/schoology.png' },
    Gmail: { name: 'Gmail', icon: '/assets/media/favicon/gmail.png' },
    Clever: { name: 'Clever | Portal', icon: '/assets/media/favicon/clever.png' },
    Khan: { name: 'Dashboard | Khan Academy', icon: '/assets/media/favicon/khan.png' },
    Campus: { name: 'Infinite Campus', icon: '/assets/media/favicon/campus.png' },
    IXL: { name: 'IXL | Dashboard', icon: '/assets/media/favicon/ixl.png' },
    Canvas: { name: 'Dashboard', icon: '/assets/media/favicon/canvas.png' },
    LinkIt: { name: 'Test Taker', icon: '/assets/media/favicon/linkit.ico' },
    Edpuzzle: { name: 'Edpuzzle', icon: '/assets/media/favicon/edpuzzle.png' },
    'i-Ready Math': { name: 'Math To Do, i-Ready', icon: '/assets/media/favicon/i-ready.ico' },
    'i-Ready Reading': { name: 'Reading To Do, i-Ready', icon: '/assets/media/favicon/i-ready.ico' },
    'ClassLink Login': { name: 'Login', icon: '/assets/media/favicon/classlink-login.png' },
    'Google Meet': { name: 'Google Meet', icon: '/assets/media/favicon/google-meet.png' },
    'Google Docs': { name: 'Google Docs', icon: '/assets/media/favicon/google-docs.ico' },
    'Google Slides': { name: 'Google Slides', icon: '/assets/media/favicon/google-slides.ico' },
    Wikipedia: { name: 'Wikipedia', icon: '/assets/media/favicon/wikipedia.png' },
    Britannica: { name: 'Encyclopedia Britannica | Britannica', icon: '/assets/media/favicon/britannica.png' },
    Ducksters: { name: 'Ducksters', icon: '/assets/media/favicon/ducksters.png' },
    Minga: { name: 'Minga – Creating Amazing Schools', icon: '/assets/media/favicon/minga.png' },
    'i-Ready Learning Games': { name: 'Learning Games, i-Ready', icon: '/assets/media/favicon/i-ready.ico' },
    'NoRedInk Home': { name: 'Student Home | NoRedInk', icon: '/assets/media/favicon/noredink.webp' },
    'Newsela Binder': { name: 'Newsela | Binder', icon: '/assets/media/favicon/newsela.png' },
    'Newsela Assignments': { name: 'Newsela | Assignments', icon: '/assets/media/favicon/newsela.png' },
    'Newsela Home': { name: 'Newsela | Instructional Content Platform', icon: '/assets/media/favicon/newsela.png' },
    'PowerSchool Sign In': { name: 'Student and Parent Sign In', icon: '/assets/media/favicon/powerschool.png' },
    'PowerSchool Grades and Attendance': {
      name: 'Grades and Attendance',
      icon: '/assets/media/favicon/powerschool.png',
    },
    'PowerSchool Teacher Comments': { name: 'Teacher Comments', icon: '/assets/media/favicon/powerschool.png' },
    'PowerSchool Standards Grades': { name: 'Standards Grades', icon: '/assets/media/favicon/powerschool.png' },
    'PowerSchool Attendance': { name: 'Attendance', icon: '/assets/media/favicon/powerschool.png' },
    Nearpod: { name: 'Nearpod', icon: '/assets/media/favicon/nearpod.png' },
    StudentVUE: { name: 'StudentVUE', icon: '/assets/media/favicon/studentvue.ico' },
    'Quizlet Home': {
      name: 'Flashcards, learning tools and textbook solutions | Quizlet',
      icon: '/assets/media/favicon/quizlet.webp',
    },
    'Google Forms Locked Mode': { name: 'Start your quiz', icon: '/assets/media/favicon/googleforms.png' },
    DeltaMath: { name: 'DeltaMath', icon: '/assets/media/favicon/deltamath.png' },
    Kami: { name: 'Kami', icon: '/assets/media/favicon/kami.png' },
    'GoGuardian Admin Restricted': { name: 'Restricted', icon: '/assets/media/favicon/goguardian-lock.png' },
    'GoGuardian Teacher Block': { name: 'Uh oh!', icon: '/assets/media/favicon/goguardian.png' },
    'World History Encyclopedia': {
      name: 'World History Encyclopedia',
      icon: '/assets/media/favicon/worldhistoryencyclopedia.png',
    },
    'Big Ideas Math Assignment Player': { name: 'Assignment Player', icon: '/assets/media/favicon/bim.ico' },
    'Big Ideas Math': { name: 'Big Ideas Math', icon: '/assets/media/favicon/bim.ico' },
  }

  if (options[selectedValue]) {
    setCloak(options[selectedValue].name, options[selectedValue].icon)
  }
})
// Key
document.addEventListener('DOMContentLoaded', function () {
  const eventKey = JSON.parse(localStorage.getItem('eventKey')) || ['Ctrl', 'E']
  const pLink = localStorage.getItem('pLink') || 'https://classroom.google.com/'
  let pressedKeys = []

  document.addEventListener('keydown', function (event) {
    pressedKeys.push(event.key)
    if (pressedKeys.length > eventKey.length) {
      pressedKeys.shift()
    }
    if (eventKey.every((key, index) => key === pressedKeys[index])) {
      window.location.href = pLink
      pressedKeys = []
    }
  })
})
// Background Image
document.addEventListener('DOMContentLoaded', function () {
  var savedBackgroundImage = localStorage.getItem('backgroundImage')
  if (savedBackgroundImage) {
    document.body.style.backgroundImage = "url('" + savedBackgroundImage + "')"
  }
})


//trailer
let start = new Date().getTime();

const originPosition = { x: 0, y: 0 };

const last = {
  starTimestamp: start,
  starPosition: originPosition,
  mousePosition: originPosition
}

const config = {
  starAnimationDuration: 1500,
  minimumTimeBetweenStars: 250,
  minimumDistanceBetweenStars: 75,
  glowDuration: 500,
  maximumGlowPointSpacing: 10,
  colors: ["249 146 253", "252 254 255"],
  sizes: ["1.4rem", "1rem", "0.6rem"],
  animations: ["fall-1", "fall-2", "fall-3"]
}

let count = 0;
  
const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
      selectRandom = items => items[rand(0, items.length - 1)];

const withUnit = (value, unit) => `${value}${unit}`,
      px = value => withUnit(value, "px"),
      ms = value => withUnit(value, "ms");

const calcDistance = (a, b) => {
  const diffX = b.x - a.x,
        diffY = b.y - a.y;
  
  return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
}

const calcElapsedTime = (start, end) => end - start;

const appendElement = element => document.body.appendChild(element),
      removeElement = (element, delay) => setTimeout(() => document.body.removeChild(element), delay);

const createStar = position => {
  const star = document.createElement("span"),
        color = selectRandom(config.colors);
  
  star.className = "star fa-solid fa-sparkle";
  
  star.style.left = px(position.x);
  star.style.top = px(position.y);
  star.style.fontSize = selectRandom(config.sizes);
  star.style.color = `rgb(${color})`;
  star.style.textShadow = `0px 0px 1.5rem rgb(${color} / 0.5)`;
  star.style.animationName = config.animations[count++ % 3];
  star.style.starAnimationDuration = ms(config.starAnimationDuration);
  
  appendElement(star);

  removeElement(star, config.starAnimationDuration);
}

const createGlowPoint = position => {
  const glow = document.createElement("div");
  
  glow.className = "glow-point";
  
  glow.style.left = px(position.x);
  glow.style.top = px(position.y);
  
  appendElement(glow)
  
  removeElement(glow, config.glowDuration);
}

const determinePointQuantity = distance => Math.max(
  Math.floor(distance / config.maximumGlowPointSpacing),
  1
);

/* --  

The following is an explanation for the "createGlow" function below:

I didn't cover this in my video, but I ran into an issue where moving the mouse really quickly caused gaps in the glow effect. Kind of like this:

*   *       *       *    *      *    🖱️

instead of:

*************************************🖱️

To solve this I sort of "backfilled" some additional glow points by evenly spacing them in between the current point and the last one. I found this approach to be more visually pleasing than one glow point spanning the whole gap.

The "quantity" of points is based on the config property "maximumGlowPointSpacing".

My best explanation for why this is happening is due to the mousemove event only firing every so often. I also don't think this fix was totally necessary, but it annoyed me that it was happening so I took on the challenge of trying to fix it.

-- */
const createGlow = (last, current) => {
  const distance = calcDistance(last, current),
        quantity = determinePointQuantity(distance);
  
  const dx = (current.x - last.x) / quantity,
        dy = (current.y - last.y) / quantity;
  
  Array.from(Array(quantity)).forEach((_, index) => { 
    const x = last.x + dx * index, 
          y = last.y + dy * index;
    
    createGlowPoint({ x, y });
  });
}

const updateLastStar = position => {
  last.starTimestamp = new Date().getTime();

  last.starPosition = position;
}

const updateLastMousePosition = position => last.mousePosition = position;

const adjustLastMousePosition = position => {
  if(last.mousePosition.x === 0 && last.mousePosition.y === 0) {
    last.mousePosition = position;
  }
};

const handleOnMove = e => {
  const mousePosition = { x: e.clientX, y: e.clientY }
  
  adjustLastMousePosition(mousePosition);
  
  const now = new Date().getTime(),
        hasMovedFarEnough = calcDistance(last.starPosition, mousePosition) >= config.minimumDistanceBetweenStars,
        hasBeenLongEnough = calcElapsedTime(last.starTimestamp, now) > config.minimumTimeBetweenStars;
  
  if(hasMovedFarEnough || hasBeenLongEnough) {
    createStar(mousePosition);
    
    updateLastStar(mousePosition);
  }
  
  createGlow(last.mousePosition, mousePosition);
  
  updateLastMousePosition(mousePosition);
}

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);

document.body.onmouseleave = () => updateLastMousePosition(originPosition);
