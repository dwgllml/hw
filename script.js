// 푸터의 연도 자동으로 표시
(function () {
  var y = document.getElementById('year');
  if (y) { y.textContent = new Date().getFullYear(); }
})();

// 스크롤 시 네비게이션 바 스타일 변경
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    // 스크롤이 50px 이상 내려갔을 때 클래스 추가
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(18, 18, 18, 0.95)'; // 투명도 추가
        navbar.style.backdropFilter = 'blur(5px)'; // 블러 효과 추가
    } else {
        navbar.style.backgroundColor = '#333333'; // 기본 색상으로 복귀
        navbar.style.backdropFilter = 'none';
    }
});

// 네비게이션 링크 클릭 시 부드럽게 스크롤
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 