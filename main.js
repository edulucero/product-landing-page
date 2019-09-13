menuSlide = () => {
  const toggle = document.querySelectorAll(".nav-toggle")
  const list = document.querySelectorAll(".main-nav")
  const sign = null

  slider(toggle, list, sign)
}

featuresSlide = () => {
  const toggle = document.querySelectorAll(".features-toggle")
  const list = document.querySelectorAll(".specs-list_features")
  const sign = document.querySelectorAll('.features-toggleSign')

  slider(toggle, list, sign)
}

soundsSlide = () => {

  const toggle = document.querySelectorAll(".sounds-toggle")
  const list = document.querySelectorAll(".specs-list_sounds")
  const sign = document.querySelectorAll(".sounds-toggleSign")

  slider(toggle, list, sign)
}

instrumentsSlide = () => {
  const toggle = document.querySelectorAll(".software-instruments-toggle")
  const list = document.querySelectorAll(".specs-list_instruments")
  const sign = document.querySelectorAll(".instruments-toggleSign")

  
  slider(toggle, list, sign)
}

audioEffectsSlide = () => {
  const toggle = document.querySelectorAll(".audio-effects-toggle")
  const list = document.querySelectorAll(".specs-list_audio")
  const sign = document.querySelectorAll(".effects-toggleSign")


  slider(toggle, list, sign)
}

midiEffectsSlide = () => {
  const toggle = document.querySelectorAll(".midi-effects-toggle")
  const list = document.querySelectorAll(".specs-list_midi")
  const sign = document.querySelectorAll('.midi-toggleSign')

  slider(toggle, list, sign)
}

slider = (toggle, list, sign) => {
  toggle.forEach( toggle => {
    list.forEach( list => {
      
      toggle.addEventListener("click", () => {
        list.style.maxHeight
        ? list.style.maxHeight = null
        : list.style.maxHeight = list.scrollHeight + "px"
        sign !== null
        ? sign.forEach( sign => {
            sign.classList.toggle("show")
          })
        : null
      })
    })
  })
}


toggleText = () => {
  const macBtn = document.querySelector("#mac-btn")
  const pcBtn = document.querySelector("#pc-btn")
  const list = document.querySelector(".req-list")

  pcBtn.addEventListener("focus", () => {
    macBtn.style.borderBottom = "2px solid white"
    pcBtn.style.borderBottom = "2px solid"
    list.innerHTML = "<li>Windows 7 (SP1), Windows 8 or Windows 10 (64-bit)</li> \
    <li>64-bit Intel® Core™ or AMD multi-core processor (Intel® Core™ processor or faster recommended)</li> \
    <li>4 GB RAM (8 GB or more recommended)</li><li>1366x768 display resolution</li> \
    <li>ASIO compatible audio hardware for Link support (also recommended for optimal audio performance)</li> \
    <li>USB port (USB 2.0 or better) for program installation</li> \
    <li>Access to an internet connection for authorizing Live (for downloading additional content and updating Live, a fast internet connection is recommended)</li> \
    <li>Approximately 3 GB disk space on the system drive for the basic installation (8 GB free disk space recommended)</li> \
    <li>Up to 76 GB disk space for additionally available sound content</li>"
  })
  macBtn.addEventListener("focus", () => {
    pcBtn.style.borderBottom = "2px solid white"
    macBtn.style.borderBottom = "2px solid"
    list.innerHTML = "<li>OS X 10.11.6 or later</li> \
    <li>Intel® Core™2 Duo Processor (Intel® Core™ i5 processor or faster recommended)</li> \
    <li>4 GB RAM (8 GB or more recommended)</li> \
    <li>1280x800 display resolution</li> \
    <li>Core Audio compliant audio interface recommended</li> \
    <li>USB port (USB 2.0 or better) for program installation</li> \
    <li>Access to an internet connection for authorizing Live (for downloading additional content and updating Live, a fast internet connection is recommended)</li> \
    <li>Approximately 3 GB disk space on the system drive for the basic installation (8 GB free disk space recommended)</li> \
    <li>Up to 76 GB disk space for additionally available sound content</li>"
  })
}

menuSlide()
featuresSlide()
soundsSlide()
instrumentsSlide()
audioEffectsSlide()
midiEffectsSlide()
toggleText()