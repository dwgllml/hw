document.addEventListener('DOMContentLoaded', function() {
    
    // 1. 푸터 연도 자동 업데이트
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. 현재 페이지 메뉴 하이라이트 (Navigation Active State)
    // 파일명만 추출하여 비교 (로컬/서버 환경 모두 호환되도록 개선)
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    
    document.querySelectorAll('nav a').forEach(link => {
        const linkPath = link.getAttribute('href');
        // 현재 경로와 링크가 일치하면 active 클래스 추가
        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });

    // 3. 스크롤 애니메이션 (Intersection Observer 사용)
    // 화면에 요소가 20% 정도 보이면 애니메이션 시작
    const observerOptions = {
        threshold: 0.15 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // 한 번 나타나면 감시 중단 (성능 최적화)
            }
        });
    }, observerOptions);

    // HTML에 .animate-up 클래스가 붙은 모든 요소를 감시
    const animatedElements = document.querySelectorAll('.animate-up');
    animatedElements.forEach(el => observer.observe(el));


    // 4. (보너스) 스크롤 시 헤더 스타일 변경
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

});