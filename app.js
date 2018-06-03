var MAX_IMAGES = 12;

var rowTemplate = `
<div class="row">
</div>
`;

var cellTemplate = `
<div class="cell">
    <img class="poster" src="assets/01.png" />
</div>
`;

$(document).ready(function() {
    var currentEffect = 'grow';
    var currentTransitionFunction = 'linear';

    $('#runAnimationBtn').on('click', go);

    $('#avatarsPerRow').on('change', go);

    $('#effectBtns button').on('click', function(e) {
        e.preventDefault();

        var effect = $(this).attr('value');
        if( effect === currentEffect ) {
            return;
        }

        var $body = $('body');
        $body.removeClass(currentTransitionFunction);

        if( effect === 'grow' ) {
            $('#transitionBtns').removeClass('d-none');
            $('#bezierBtns').addClass('d-none');

            currentTransitionFunction = 'linear';
        }
        else if( effect === 'pop' ) {
            $('#transitionBtns').addClass('d-none');
            $('#bezierBtns').removeClass('d-none');

            currentTransitionFunction = 'bezier';
        }

        $body.addClass(currentTransitionFunction);

        var activeBtn = $('#effectBtns button.btn-primary');
        activeBtn.removeClass('btn-primary');
        activeBtn.addClass('btn-secondary');

        $(this).removeClass('btn-secondary')
        $(this).addClass('btn-primary');

        currentEffect = effect;
        go();
    });

    $('#transitionBtns button').on('click', function(e) {
        e.preventDefault();

        var $body = $('body');
        $body.removeClass(currentTransitionFunction);

        var transitionFunction = $(this).attr('value');
        $body.addClass(transitionFunction);

        var activeBtn = $('#transitionBtns button.btn-primary');
        activeBtn.removeClass('btn-primary');
        activeBtn.addClass('btn-secondary');

        $(this).removeClass('btn-secondary')
        $(this).addClass('btn-primary');

        currentTransitionFunction = transitionFunction;
        go();
    });

    createAvatars(6);
    runAnimation();

    function go(e) {
        if(e) {
            e.preventDefault();
        }

        clear();

        var columns = +$('#avatarsPerRow').val();

        createAvatars(columns);
        runAnimation();
    }

    function clear() {
        $('.cell').removeClass('enter');
    }

    function runAnimation() {
        var cells = $('.cell');
        setTimeout(function () {
            for (var i = 3; i <= cells.length; i += 5) {
                $(cells[i - 1]).addClass('enter');
            }
        }, 0);

        setTimeout(function () {
            for (var i = 1; i <= cells.length; i += 5) {
                $(cells[i - 1]).addClass('enter');
            }
        }, 100);

        setTimeout(function () {
            for (var i = 4; i <= cells.length; i += 5) {
                $(cells[i - 1]).addClass('enter');
            }
        }, 200);

        setTimeout(function () {
            for (var i = 5; i <= cells.length; i += 5) {
                $(cells[i - 1]).addClass('enter');
            }
        }, 300);

        setTimeout(function () {
            for (var i = 2; i <= cells.length; i += 5) {
                $(cells[i - 1]).addClass('enter');
            }
        }, 400);
    }

    function createAvatars(columns) {
        var contentArea = $('#contentArea');
        contentArea.empty();

        for( var row = 0; row < 20; row++ ) {
            var rowHTML = $(rowTemplate);
            for( var col = 0; col < columns; col++) {
                var cellHTML = $(cellTemplate);
                var $img = cellHTML.find('.poster');

                var index = (row * columns + col) % (MAX_IMAGES - 1) + 1;
                index = index < 10 ? '0' + index : '' + index;

                $img.attr('src', 'assets/' + index + '.png');
                rowHTML.append(cellHTML);
            }
            contentArea.append(rowHTML);
        }
    }
})