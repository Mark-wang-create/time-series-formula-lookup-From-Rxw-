```javascript
$(document).ready(function() {
    $('#search').on('input', function() {
        const searchTerm = $(this).val().toLowerCase();

        $('.formula-section').each(function() {
            const sectionTitle = $(this).find('h2').text().toLowerCase();
            const sectionContent = $(this).find('p').text().toLowerCase();

            if (sectionTitle.includes(searchTerm) || sectionContent.includes(searchTerm)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});
