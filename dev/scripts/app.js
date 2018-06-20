const art = {};

// get art from api
const url = 'https://www.rijksmuseum.nl/api/en/collection/';

art.getArt = (query) => {
    $.ajax({
        url: url,
        method: 'GET',
        dataType: 'jsonp',
        data: {
            key: art.key,
            format: 'jsonp',
            q: query,
            // imgonly: true
        }
    })
    .then((res) => {
        const artObjects = res.artObjects;
        console.log(artObjects);
        art.displayArt(artObjects);
    })
}
// only monkey art
// display art on page

art.displayArt = (allArt) => {
    console.log('displayArt allArt', allArt);
    $('#artwork').empty();
    const cleanArt = allArt.filter((artPiece) => {
        return artPiece.webImage != null;
    });

    cleanArt.forEach(function(art) {
        console.log(art.webImage.url);
        const artImages = art.webImage.url;
        const $artTitles = $('<h2>').text(art.title);
        const $artist = $('<p>').addClass('artist').text(art.principalOrFirstMaker);
        const $img = $('<img>').attr('src', artImages);

        $('#artwork').append($artTitles, $artist, $img);

    })
}

art.init = () => {
    console.log('hiii');
    art.key = 'd2nyoxro';
    art.getArt('monkey');
    $('#animal').on('change', function() {
        const animal = $(this).val();
        console.log(animal);
        art.getArt(animal);
});
}

$(function() {
    art.init();
})