var today = $('#currentDay');
var inputHour = moment().format('H');

setInterval(function() {
    var rightNow = moment();
    var date =rightNow.format('MMMM Do YYYY, h:mm:ss a');
    today.text(date);
}, 1000);

$(".saveBtn").click(function () { 
    $('input[type="text"]').each(function () { 
        var saveId = $(this).attr('id'); 
        var saveValue = $(this).val(); 
        localStorage.setItem(saveId, saveValue);
    });
});

$('input[type="text"]').each(function () { 
    var pullId = $(this).attr('id'); 
    var pullStored = localStorage.getItem(pullId); 
    document.getElementById(pullId).value = pullStored; 
});

function whatTime (time, id) {
    if (inputHour > time) {
        $(id).addClass('past');
    }else if (inputHour < time){
        $(id).addClass('future');
    } else {
        $(id).addClass('present');
    }
}

whatTime(8, '#eight');
whatTime(9, '#nine');
whatTime(10, '#ten');
whatTime(11, '#eleven');
whatTime(12, '#twelve');
whatTime(13, '#thirteen');
whatTime(14, '#fourteen');
whatTime(15, '#fifteen');
whatTime(16, '#sixteen');
whatTime(17, '#seventeen');
whatTime(18, '#eighteen');
