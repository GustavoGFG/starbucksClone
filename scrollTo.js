window.addEventListener('scroll', e => {
  let headerHeight = document.getElementsByTagName('header')[0].clientHeight;
  let titleContainer = document.getElementById('social-impact-title');
  let asideLogoContainer = document.getElementById('aside-logo-container');
  let footerHeight = document.getElementsByTagName('footer')[0].clientHeight;
  let bodyheight = document.body.clientHeight;
  let height = bodyheight - window.innerHeight - footerHeight;
  let asideText = document.getElementById('aside-text-container');

  if (window.innerWidth >= 995) {
    if (this.scrollY >= height) {
      asideLogoContainer.style.position = 'absolute';
      asideLogoContainer.style.left = '50%';
      asideLogoContainer.style.bottom = `${window.innerHeight / 2}px`;
    } else if (this.scrollY < height) {
      asideLogoContainer.style.position = 'fixed';
      asideLogoContainer.style.left = '20%';
      asideLogoContainer.style.bottom = `50%`;
    }

    if (this.scrollY >= height) {
      asideText.style.position = 'absolute';
      asideText.style.bottom = `0px`;
      // asideText.style.left = '50%';
      asideText.style.padding = '9% 15%';
      asideText.style.width = '100%';
      asideText.style.height = '5%';
    } else if (this.scrollY < height) {
      asideText.style.position = 'fixed';
      asideText.style.bottom = `0`;
      // asideLogoContainer.style.left = '20%';
      asideText.style.padding = '5.5%';
      asideText.style.width = '40%';
      asideText.style.height = '20%';
    }
  }

  if (this.scrollY >= headerHeight) {
    titleContainer.style.position = 'fixed';
    titleContainer.style.top = '0';
    titleContainer.style.zIndex = '10';
    titleContainer.style.width = '100%';
  } else if (this.scrollY < headerHeight) {
    titleContainer.style.position = 'static';
  }
});

window.addEventListener('resize', e => {
  let footerHeight = document.getElementsByTagName('footer')[0].clientHeight;
  let bodyheight = document.body.clientHeight;
  let height = bodyheight - window.innerHeight - footerHeight;
  let asideLogoContainer = document.getElementById('aside-logo-container');
  let asideText = document.getElementById('aside-text-container');
  if (window.innerWidth <= 995) {
    console.log(window.innerWidth);
    asideLogoContainer.style.position = 'static';
    asideText.style.position = 'static';
    asideText.style.width = '100%';
  } else if (this.scrollY >= height) {
    asideLogoContainer.style.position = 'absolute';
    asideText.style.position = 'absolute';
    asideText.style.width = '40%';
  } else {
    asideLogoContainer.style.position = 'fixed';
    asideText.style.position = 'fixed';
    asideText.style.width = '40%';
  }
});
