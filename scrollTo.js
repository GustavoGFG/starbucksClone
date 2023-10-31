window.addEventListener('scroll', e => {
  const headerHeight = document.getElementsByTagName('header')[0].clientHeight;
  const titleContainer = document.getElementById('social-impact-title');
  const asideLogoContainer = document.getElementById('aside-logo-container');
  const footerHeight = document.getElementsByTagName('footer')[0].clientHeight;
  const bodyheight = document.body.clientHeight;
  const height = bodyheight - window.innerHeight - footerHeight;
  const asideText = document.getElementById('aside-text-container');

  if (window.innerWidth >= 995) {
    if (this.scrollY >= height) {
      asideLogoContainer.style.position = 'absolute';
      asideLogoContainer.style.bottom = `${window.innerHeight / 2}px`;
      asideLogoContainer.style.left = '50%';
    } else if (this.scrollY <= height) {
      asideLogoContainer.style.position = 'fixed';
      asideLogoContainer.style.bottom = `50%`;
      asideLogoContainer.style.left = '20%';
    }

    if (this.scrollY >= height) {
      asideText.style.position = 'absolute';
      asideText.style.bottom = `0px`;
      // asideText.style.left = '50%';
      asideText.style.padding = '9% 15%';
      asideText.style.width = '100%';
      asideText.style.height = '5%';
    } else if (this.scrollY <= height) {
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
