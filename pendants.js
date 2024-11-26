function toggleDropdown(button) {
    const card = button.closest('.pendant-card');
    const content = button.nextElementSibling;
    
    // Toggle the expanded class
    if (card.classList.contains('expanded')) {
        card.classList.remove('expanded');
        content.style.opacity = "0";
        content.style.height = "0";
    } else {
        card.classList.add('expanded');
        content.style.opacity = "1";
        content.style.height = "auto";
    }
}

function toggleDropdown(button) {
    const dropdown = button.parentElement;
    dropdown.classList.toggle('open');
}

document.querySelectorAll('.dropdown-toggle').forEach(button => {
    button.addEventListener('click', function () {
        const card = this.parentElement;
        card.classList.toggle('expanded');
    });
});
