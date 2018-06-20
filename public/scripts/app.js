(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var art = {};

// get art from api
var url = 'https://www.rijksmuseum.nl/api/en/collection/';

art.getArt = function (query) {
    $.ajax({
        url: url,
        method: 'GET',
        dataType: 'jsonp',
        data: {
            key: art.key,
            format: 'jsonp',
            q: query
            // imgonly: true
        }
    }).then(function (res) {
        var artObjects = res.artObjects;
        console.log(artObjects);
        art.displayArt(artObjects);
    });
};
// only monkey art
// display art on page

art.displayArt = function (allArt) {
    console.log('displayArt allArt', allArt);
    $('#artwork').empty();
    var cleanArt = allArt.filter(function (artPiece) {
        return artPiece.webImage != null;
    });

    cleanArt.forEach(function (art) {
        console.log(art.webImage.url);
        var artImages = art.webImage.url;
        var $artTitles = $('<h2>').text(art.title);
        var $artist = $('<p>').addClass('artist').text(art.principalOrFirstMaker);
        var $img = $('<img>').attr('src', artImages);

        $('#artwork').append($artTitles, $artist, $img);
    });
};

art.init = function () {
    console.log('hiii');
    art.key = 'd2nyoxro';
    art.getArt('monkey');
    $('#animal').on('change', function () {
        var animal = $(this).val();
        console.log(animal);
        art.getArt(animal);
    });
};

$(function () {
    art.init();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sTUFBTSxFQUFaOztBQUVBO0FBQ0EsSUFBTSxNQUFNLCtDQUFaOztBQUVBLElBQUksTUFBSixHQUFhLFVBQUMsS0FBRCxFQUFXO0FBQ3BCLE1BQUUsSUFBRixDQUFPO0FBQ0gsYUFBSyxHQURGO0FBRUgsZ0JBQVEsS0FGTDtBQUdILGtCQUFVLE9BSFA7QUFJSCxjQUFNO0FBQ0YsaUJBQUssSUFBSSxHQURQO0FBRUYsb0JBQVEsT0FGTjtBQUdGLGVBQUc7QUFDSDtBQUpFO0FBSkgsS0FBUCxFQVdDLElBWEQsQ0FXTSxVQUFDLEdBQUQsRUFBUztBQUNYLFlBQU0sYUFBYSxJQUFJLFVBQXZCO0FBQ0EsZ0JBQVEsR0FBUixDQUFZLFVBQVo7QUFDQSxZQUFJLFVBQUosQ0FBZSxVQUFmO0FBQ0gsS0FmRDtBQWdCSCxDQWpCRDtBQWtCQTtBQUNBOztBQUVBLElBQUksVUFBSixHQUFpQixVQUFDLE1BQUQsRUFBWTtBQUN6QixZQUFRLEdBQVIsQ0FBWSxtQkFBWixFQUFpQyxNQUFqQztBQUNBLE1BQUUsVUFBRixFQUFjLEtBQWQ7QUFDQSxRQUFNLFdBQVcsT0FBTyxNQUFQLENBQWMsVUFBQyxRQUFELEVBQWM7QUFDekMsZUFBTyxTQUFTLFFBQVQsSUFBcUIsSUFBNUI7QUFDSCxLQUZnQixDQUFqQjs7QUFJQSxhQUFTLE9BQVQsQ0FBaUIsVUFBUyxHQUFULEVBQWM7QUFDM0IsZ0JBQVEsR0FBUixDQUFZLElBQUksUUFBSixDQUFhLEdBQXpCO0FBQ0EsWUFBTSxZQUFZLElBQUksUUFBSixDQUFhLEdBQS9CO0FBQ0EsWUFBTSxhQUFhLEVBQUUsTUFBRixFQUFVLElBQVYsQ0FBZSxJQUFJLEtBQW5CLENBQW5CO0FBQ0EsWUFBTSxVQUFVLEVBQUUsS0FBRixFQUFTLFFBQVQsQ0FBa0IsUUFBbEIsRUFBNEIsSUFBNUIsQ0FBaUMsSUFBSSxxQkFBckMsQ0FBaEI7QUFDQSxZQUFNLE9BQU8sRUFBRSxPQUFGLEVBQVcsSUFBWCxDQUFnQixLQUFoQixFQUF1QixTQUF2QixDQUFiOztBQUVBLFVBQUUsVUFBRixFQUFjLE1BQWQsQ0FBcUIsVUFBckIsRUFBaUMsT0FBakMsRUFBMEMsSUFBMUM7QUFFSCxLQVREO0FBVUgsQ0FqQkQ7O0FBbUJBLElBQUksSUFBSixHQUFXLFlBQU07QUFDYixZQUFRLEdBQVIsQ0FBWSxNQUFaO0FBQ0EsUUFBSSxHQUFKLEdBQVUsVUFBVjtBQUNBLFFBQUksTUFBSixDQUFXLFFBQVg7QUFDQSxNQUFFLFNBQUYsRUFBYSxFQUFiLENBQWdCLFFBQWhCLEVBQTBCLFlBQVc7QUFDakMsWUFBTSxTQUFTLEVBQUUsSUFBRixFQUFRLEdBQVIsRUFBZjtBQUNBLGdCQUFRLEdBQVIsQ0FBWSxNQUFaO0FBQ0EsWUFBSSxNQUFKLENBQVcsTUFBWDtBQUNQLEtBSkc7QUFLSCxDQVREOztBQVdBLEVBQUUsWUFBVztBQUNULFFBQUksSUFBSjtBQUNILENBRkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBhcnQgPSB7fTtcblxuLy8gZ2V0IGFydCBmcm9tIGFwaVxuY29uc3QgdXJsID0gJ2h0dHBzOi8vd3d3LnJpamtzbXVzZXVtLm5sL2FwaS9lbi9jb2xsZWN0aW9uLyc7XG5cbmFydC5nZXRBcnQgPSAocXVlcnkpID0+IHtcbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZGF0YVR5cGU6ICdqc29ucCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGtleTogYXJ0LmtleSxcbiAgICAgICAgICAgIGZvcm1hdDogJ2pzb25wJyxcbiAgICAgICAgICAgIHE6IHF1ZXJ5LFxuICAgICAgICAgICAgLy8gaW1nb25seTogdHJ1ZVxuICAgICAgICB9XG4gICAgfSlcbiAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnN0IGFydE9iamVjdHMgPSByZXMuYXJ0T2JqZWN0cztcbiAgICAgICAgY29uc29sZS5sb2coYXJ0T2JqZWN0cyk7XG4gICAgICAgIGFydC5kaXNwbGF5QXJ0KGFydE9iamVjdHMpO1xuICAgIH0pXG59XG4vLyBvbmx5IG1vbmtleSBhcnRcbi8vIGRpc3BsYXkgYXJ0IG9uIHBhZ2VcblxuYXJ0LmRpc3BsYXlBcnQgPSAoYWxsQXJ0KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2Rpc3BsYXlBcnQgYWxsQXJ0JywgYWxsQXJ0KTtcbiAgICAkKCcjYXJ0d29yaycpLmVtcHR5KCk7XG4gICAgY29uc3QgY2xlYW5BcnQgPSBhbGxBcnQuZmlsdGVyKChhcnRQaWVjZSkgPT4ge1xuICAgICAgICByZXR1cm4gYXJ0UGllY2Uud2ViSW1hZ2UgIT0gbnVsbDtcbiAgICB9KTtcblxuICAgIGNsZWFuQXJ0LmZvckVhY2goZnVuY3Rpb24oYXJ0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGFydC53ZWJJbWFnZS51cmwpO1xuICAgICAgICBjb25zdCBhcnRJbWFnZXMgPSBhcnQud2ViSW1hZ2UudXJsO1xuICAgICAgICBjb25zdCAkYXJ0VGl0bGVzID0gJCgnPGgyPicpLnRleHQoYXJ0LnRpdGxlKTtcbiAgICAgICAgY29uc3QgJGFydGlzdCA9ICQoJzxwPicpLmFkZENsYXNzKCdhcnRpc3QnKS50ZXh0KGFydC5wcmluY2lwYWxPckZpcnN0TWFrZXIpO1xuICAgICAgICBjb25zdCAkaW1nID0gJCgnPGltZz4nKS5hdHRyKCdzcmMnLCBhcnRJbWFnZXMpO1xuXG4gICAgICAgICQoJyNhcnR3b3JrJykuYXBwZW5kKCRhcnRUaXRsZXMsICRhcnRpc3QsICRpbWcpO1xuXG4gICAgfSlcbn1cblxuYXJ0LmluaXQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2hpaWknKTtcbiAgICBhcnQua2V5ID0gJ2QybnlveHJvJztcbiAgICBhcnQuZ2V0QXJ0KCdtb25rZXknKTtcbiAgICAkKCcjYW5pbWFsJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBhbmltYWwgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhhbmltYWwpO1xuICAgICAgICBhcnQuZ2V0QXJ0KGFuaW1hbCk7XG59KTtcbn1cblxuJChmdW5jdGlvbigpIHtcbiAgICBhcnQuaW5pdCgpO1xufSkiXX0=
