$(function() {
    const themeToggle = $('#theme-toggle');
    const body = $('body');
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.attr('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            themeToggle.text('Light Mode');
        }
    }
    themeToggle.on('click', function() {
        let theme = 'light';
        if (body.attr('data-theme') !== 'dark') {
            body.attr('data-theme', 'dark');
            theme = 'dark';
            themeToggle.text('Light Mode');
        } else {
            body.removeAttr('data-theme');
            themeToggle.text('Dark Mode');
        }
        localStorage.setItem('theme', theme);
    });
    $('a[href^="#"]').on('click', function(event) {
        const target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70
            }, 800);
        }
    });
    const sections = $('.section');
    $(window).on('scroll', function() {
        const scrollPos = $(window).scrollTop() + $(window).height() * 0.8;
        sections.each(function() {
            if (scrollPos > $(this).offset().top) {
                $(this).addClass('active');
            }
        });
    });
});
