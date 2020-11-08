let table = document.getElementById("table");

const html = `<div class="tr">
<div class="tr-hash">#hashtagname</div>
<div class="tr-date">25/02</div>
<div class="tr-hour">09:30</div>
</div>`;

const htmlBorderless = `<div class="tr borderlow">
<div class="tr-hash">#hashtagname</div>
<div class="tr-date">25/02</div>
<div class="tr-hour">09:30</div>
</div>`;

for (let i = 0; i < 10; i++) {
    table.innerHTML += html;
   }

$(window).on("scroll", function () {
  let scrollHeight = $(document).height();
  let scrollPos = $(window).height() + $(window).scrollTop();
  console.log((scrollHeight - scrollPos) / scrollHeight );
  if ((scrollHeight - scrollPos) / scrollHeight < -0.4) {
    for (let i = 0; i < 1; i++) {
     table.innerHTML += html;
    }
  }
});
