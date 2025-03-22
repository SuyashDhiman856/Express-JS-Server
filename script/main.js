const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_container h1", scrollRevealOption);
ScrollReveal().reveal(".header_container h4", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header_container .btn", {
    ...scrollRevealOption,
    delay: 1000,
});

//about container

ScrollReveal().reveal(".about_container .section_header",scrollRevealOption);
ScrollReveal().reveal(".about_container .section_subheader",{
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".about_container .about_flex",{
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".about_container .btn",{
    ...scrollRevealOption,
    delay: 1500,
});

//discover container
ScrollReveal().reveal(".discover_card",{
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".discover_card_content",{
    ...scrollRevealOption,
    interval: 500,
    delay: 200,
});

//blogs container
ScrollReveal().reveal(".blogs_card",{
    duration: 1000,
    interval: 400,
    
});

//journal container
ScrollReveal().reveal(".journals_card",{
    ...scrollRevealOption,
    interval: 400,
});

//search bar
document.getElementById('link_search').addEventListener('click', function() {
    let navLinks = document.getElementById('nav_links');
    let searchBar = document.getElementById('search_bar');

    // Hide navigation links with fade-out effect
    navLinks.style.transition = 'opacity 0.5s ease-out';
    navLinks.style.opacity = '0';

    setTimeout(() => {
        navLinks.style.display = 'none';

        // Show search bar with fade-in effect
        searchBar.style.display = 'flex';
        setTimeout(() => {
            searchBar.style.opacity = '1';
        }, 10); // Small delay for smooth transition
    }, 500);
});