
document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
  var now=new Date();
  var ti = new Date(now.getFullYear(), now.getMonth(), 21, 23, 30, 0, 0) - now;
  var twoDaysFromNow = (now.getTime() / 1000) + ti/1000 + 1;

  // Set up FlipDown

var flipdown =new FlipDown(twoDaysFromNow, {
  headings: ["روز", "ساعت", "دقیقه", "ثانیه"],
}).start()



    // Do something when the countdown ends
    .ifEnded(() => {

      document.querySelector('[class="container-fluid"]').classList.add('d-none');
      //console.log('The countdown has ended!');
    });



});

