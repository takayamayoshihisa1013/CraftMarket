// 		// スライド
// 		$(".slider").slick({
// 		    autoplay: true,       //自動再生
// 		    // autoplaySpeed: 2000,  //自動再生のスピード
// 		    // speed: 800,           //スライドするスピード
// 		    // dots: true,           //スライド下のドット
// 		    arrows: false,         //左右の矢印
// 		    infinite: true,       //永久にループさせる
// 		    autoplay: true,         //自動再生
// 		    autoplaySpeed: 2000,       //自動再生のスピード
// 		    speed: 5000,            //追加（スライドスピード
// 		    slidesToShow: 5,        //追加（スライドの1スライドごとの表示枚数
// 		    // cssEase: "linear",      //追加（スライドの動きを等速に
// 		    pauseOnHover: false,    //追加（ホバーしても止まらないように
// 		    pauseOnFocus: false,    //追加（フォーカスしても止まらないように
// })

$(".slider").slick({
    autoplay: true,         // 自動再生
    autoplaySpeed: 7000,    // 自動再生のスピード
    speed: 800,            // スライド速度の調整
    slidesToShow: 5,        // 表示するスライド数
    slidesToScroll: 1,      // スクロールするスライド数
    arrows: false,
    infinite: true,         // 無限ループを有効化
    cssEase: "linear",      // スライドの動きを等速に
    pauseOnHover: false,    // ホバーしても止まらないように
    pauseOnFocus: false,    // フォーカスしても止まらないように
    dots: true,
});

const $slider = $(".slider");

$slider.on("beforeChange", (event, slick, currentSlide, nextSlide) => {
	$slider.find(".slick-slide").each((index, el) => {
		const $this = $(el),
		slickindex = $this.attr("data-slick-index");
		if (nextSlide == slick.slideCount - 1 && currentSlide == 0) {
			if (slickindex == "-1") {
				$this.addClass("is-active-next");
			} else {
				$this.removeClass("is-active-next");
			}
		} else if (nextSlide == 0) {
			if (slickindex == slick.slideCount) {
				$this.addClass("is-active-next");
			} else {
				$this.removeClass("is-active-next");
			}
		} else {
			$this.removeClass("is-active-next");
		}
	});
});