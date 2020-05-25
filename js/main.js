window.onscroll = e => {
  const top = document.documentElement.scrollTop;

  //   from {
  //     opacity: 1;
  //     transform: translateX(0);
  //   }

  //   to {
  //     opacity: 0;
  //     transform: translateX(-120%);
  if (top > 160) {
    const settings = [
      { opacity: '1', transform: 'translateX(0)' },
      { opacity: '0', transform: 'translateX(-120%)' },
    ];

    const heading = document.querySelector('.top');

    const animation = heading.animate(settings, { duration: 1000 });

    animation.onfinish = e => {
      heading.style.display = 'none';
    };
  }
};
