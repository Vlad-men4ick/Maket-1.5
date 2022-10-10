// const pageWidth = document.documentElement.scrollWidth;
// if(pageWidth < 768){
// new Swiper('.swiper-container',{
//     slidesPerView: 'auto',
//     spaceBetween: 16,
//     slidesOffsetBefore:16,
//     slidesOffsetAfter:16,

//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     });
// } else{
// };



const slider = document.querySelector('.swiper-container');
function mobileSlider() {
	if (window.innerWidth < 768  && slider.dataset.mobile == 'false') {
		mySwiper = new Swiper(slider, {
		slidesPerView: 'auto',
        spaceBetween: 16,
        slidesOffsetBefore:16,
        slidesOffsetAfter:16,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
			},
		});

		slider.dataset.mobile = 'true';
	}

	if (window.innerWidth > 768) {
		slider.dataset.mobile = 'false';
		if (slider.classList.contains('swiper-initialized')) {
			mySwiper.destroy();
		}
	}
}

// mobileSlider()

window.addEventListener('resize', () => {
	mobileSlider();
});

const brandsSwiper = document.querySelector('.brands__swiper');
const showAll = document.querySelector('.show-all');
const arry = document.querySelector('.show-all:before');
showAll.addEventListener('click', function(){
    brandsSwiper.classList.toggle('brands__swiper-show-all');
    showAll.classList.toggle('show-all-rotate');

		if(showAll.classList.contains('show-all-rotate')){
			showAll.textContent = 'Скрыть';
		} else {
			showAll.textContent = 'Показать все';
			}
});