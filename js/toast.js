function Toast(msg, duration) {
            duration = isNaN(duration) ? 3000 : duration;
            var m = document.createElement('div');
            m.innerHTML = msg;
            m.style.cssText = "width: 80%;min-width: 150px;opacity: 0.8;height: 60px;color: rgba(99, 99, 99,1);line-height: 60px;text-align: center;border-radius: 5px;position: fixed;top: 60%;left: 10%;z-index: 999999;background: rgba(255, 250, 250,1);font-size: 20px;font-weight:400;font-family: 'Microsoft YaHei', sans-serif;";
            document.body.appendChild(m);
            setTimeout(function() {
              var d = 0.5;
              m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
              m.style.opacity = '0';
              setTimeout(function() {
                document.body.removeChild(m)
              },
              d * 1000);
            },
            duration);
          }



          $(document).ready(function() {
            $('.w3_play_icon,.w3_play_icon1,.w3_play_icon2').magnificPopup({
              type: 'inline',
              fixedContentPos: false,
              fixedBgPos: true,
              overflowY: 'auto',
              closeBtnInside: true,
              preloader: false,
              midClick: true,
              removalDelay: 300,
              mainClass: 'my-mfp-zoom-in'
            });

          });