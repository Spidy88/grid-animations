$(document).ready(function() {
    var cells = $('.cell');
    setTimeout(function () {
        for (var i = 3; i <= cells.length; i += 5) {
            $(cells[i - 1]).addClass('enter');
        }
    }, 400);

    setTimeout(function () {
        for (var i = 1; i <= cells.length; i += 5) {
            $(cells[i - 1]).addClass('enter');
        }
    }, 500);

    setTimeout(function () {
        for (var i = 4; i <= cells.length; i += 5) {
            $(cells[i - 1]).addClass('enter');
        }
    }, 600);

    setTimeout(function () {
        for (var i = 5; i <= cells.length; i += 5) {
            $(cells[i - 1]).addClass('enter');
        }
    }, 700);

    setTimeout(function () {
        for (var i = 2; i <= cells.length; i += 5) {
            $(cells[i - 1]).addClass('enter');
        }
    }, 800);
})