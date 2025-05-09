$(function () {

  //ページ内スクロール
  var navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });

  //スクロールの保存
  scrollBehavior(to, from, savedPosition) ;{
    if (savedPosition) {
        sessionStorage.setItem('positionY', savedPosition.y);
        return savedPosition
    } else {
        sessionStorage.setItem('positionY', 0);
        return { x: 0, y: 0 }
    }
}

});
