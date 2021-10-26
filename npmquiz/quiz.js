
var ELEMENT_LIST    = 'access,adduser,bin,bugs,c,cache,completion,config,ddp,dedupe,deprecate,dist-tag,docs,edit,explore,get,help,help-search,i,init,install,install-test,it,link,list,ln,logout,ls,outdated,owner,pack,ping,prefix,prune,publish,rb,rebuild,repo,restart,root,run,run-script,s,se,search,set,shrinkwrap,star,stars,start,stop,t,tag,team,test,tst,un,uninstall,unpublish,unstar,up,update,v,version,view,whoami';
var one_second      = 1000;
var time_left       = min * 60000; // min in global space
var elements        = ELEMENT_LIST.split(',');
var timer;
var intro;
var quiz;
var clock;
var input;
var remaining;
var start_button;
var solved;
var outro;
var replay;
var replay_button;

var intro_html  = '<div id="intro"><h2>How To Play</h2><p>On the next screen, enter as many npm '+what+' as you can think of. For instance "help" is the command that list all the npm '+what+'. Correct answers will automatically be logged as you type within the input field. Once your time is up, any '+what+' you missed will be listed so you can improve for next time!</p><button type="button" id="start_button" title="Go">Start</button></div>';
var quiz_html   = '<div id="quiz"><div id="clock">'+min+':00</div><input id="input"><p><b id="remaining"></b> '+what+' remaining</p><ul id="solved" class="element_list"></ul></div>';
var outro_html  = '<div id="outro"><h2>Finished!</h2><p>You named <strong id="named">0</strong> npm '+what+' in ' + min + ' minutes!</p><div id="share"><h2>Share Your Score</h2></div><p id="missed_message">You missed the following '+what+':</p><ul id="missed_elements" class="element_list"></ul><button type="button" id="replay">Again?</button>';


// Global Methods ____________________________________________________________

function buildQuiz() {
    
    var placeholder = $('#quiz_wrapper').append(intro_html, quiz_html, outro_html);

    intro           = $('#intro');
    quiz            = $('#quiz');
    clock           = $('#clock');
    input           = $('#input');
    remaining       = $('#remaining');
    start_button    = $('#start_button');
    solved          = $('#solved');
    outro           = $('#outro');
    replay_button   = $('#replay');

    start_button.click(startQuiz);

    replay_button.click(restart);

    input.keyup(function() {
        var val     = $(this).val().toLowerCase() || this.value.toLowerCase(),
            els     = elements,
            index   = $.inArray(val, els);

        if (index !== -1) {
            els.splice(index, 1);
            solved.append('<li>' + val + '</li>');
            this.value = '';

            update();
        }
    });

    update();
}

function startQuiz() {
    intro.hide();
    quiz.show();
    input.focus();
    trackEvent('Start');
    timer = setInterval(tick, one_second);
}

function restart() {
    trackEvent('Restart');
    window.location = '';
}

function stopQuiz() {
    var solved_elements = parseInt(solved.children().length),
        share_text      = 'I was able to name ' + solved_elements + ' npm '+what+' in ' + min + ' minutes!',
        missed_list     = $('#missed_elements'),
        share_box       = $('#share'),
        twitter_html    = '',
        plus_html       = '',
        facebook_html   = '';

    clearInterval(timer);

    trackEvent('Stop');

    share_box.append(twitter_html, plus_html, facebook_html);
    share_box.children(':not(h2)').wrap('<div class="share_item">');
    quiz.hide();
    outro.show();

    $('#named').text(solved_elements);

    if (elements.length > 0) {
        $.each(elements, function() {
            missed_list.append('<li>' + this + '</li>');
        });
    }
    else {
        $('#missed_message, missed_elements').hide();
    }

    trackScore(solved_elements);
}

function formatTime(ms) {
    var x,
        seconds,
        minutes,
        formatted_time,
        number;

    x       = ms / 1000;
    seconds = x % 60;
    x       /= 60;
    minutes = Math.floor(x % 60);

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    if (minutes < 1 && !clock.hasClass('warning')) {
        clock.addClass('warning');
    }

    formatted_time = [minutes, seconds].join(':');

    return formatted_time;
}

function tick() {
    time_left -= one_second;
    clock.text(formatTime(time_left));

    if (time_left <= 0) {
        stopQuiz();
    }
}

function update() {
    var count = elements.length;

    remaining.text(count);

    if (count <= 0) {
        stopQuiz();
    }
}

function trackEvent(event_type) {
    if (ga) {        
        ga('send', 'event', 'wpcliQuiz', event_type, 'label', 1);
    }
}

function trackScore(score) {
    if (ga) {        
        ga('send', 'event', 'wpcliScore', 'Points', 'label', score);
    }
}

// Initialization ____________________________________________________________

$(function() {
    buildQuiz();
});
