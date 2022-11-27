(function (w) {
  done = false,
    ready = function () {
      document.querySelector('form.searchform').addEventListener('submit', function (event) {
        if (false === done) {
          event.preventDefault();
          const target = event.currentTarget || event.target;
          const search = target.querySelector('.search');
          const orgVal = search.value;
          search.value = 'site:blog.coderzh.com ' + orgVal;
          done = true;
          target.submit();
        }
      });
      const backToTop = document.querySelector('a#back-to-top');//.click(function() {
      backToTop.addEventListener('click', function (event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // document.querySelector('html, body').animate({scrollTop:0},'slow');
      });
    },
    hasSetBg = false,
    scroller = function (event) {
      var target = event.srcElement || event.target;
      if (target.body.scrollTop > 10 && false === hasSetBg) {
        document.querySelector('.nav-container').css({
          background: '#26272b'
        });
        document.querySelector('.nav-cs-icon').show();
        hasSetBg = true;
      }
      if (0 === target.body.scrollTop && true === hasSetBg) {
        document.querySelector('.nav-container').css({
          background: 'none'
        });
        document.querySelector('.nav-cs-icon').hide();
        hasSetBg = false;
      }
    };

  if (window.addEventListener) {
    window.addEventListener('load', ready, false);
    window.addEventListener('scroll', scroller, false);
  } else {
    if (window.attachEvent) {
      window.attachEvent('onload', ready);
      window.attachEvent('onscroll', scroller);
    }
  }
  w.hljs.initHighlightingOnLoad();
})(window);