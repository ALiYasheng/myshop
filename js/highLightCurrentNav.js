document.addEventListener("DOMContentLoaded", function() {
    // 获取当前页面的URL
    var currentLocation = window.location.pathname.split('/').pop();

    // 获取所有的导航链接
    var navLinks = document.querySelectorAll('.custom-navbar-nav .nav-link');

    // 然后为当前页面对应的导航项添加 'active' 类
    navLinks.forEach(function(link) {
        if (link.getAttribute('href') === currentLocation) {
            link.parentNode.classList.add('active');
        }
    });
});