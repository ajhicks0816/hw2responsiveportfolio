$('#project1').on('click', ()=> {
    console.log('clicked');
    var win = window.open('https://spicyjackrabbits.github.io/theFoodApp', '_blank');
    if (win) {
        //Browser has allowed it to be opened
        win.focus();
    } else {
        //Browser has blocked it
        alert('Please allow popups for this website');
    }
});
$('#project2').on('click', ()=> {
    console.log('clicked');
    var win = window.open('https://homegrown-app-grizzlies.herokuapp.com/', '_blank');
    if (win) {
        //Browser has allowed it to be opened
        win.focus();
    } else {
        //Browser has blocked it
        alert('Please allow popups for this website');
    }
});
$('#workdayscheduler').on('click', ()=> {
    console.log('clicked');
    var win = window.open('https://ayejayhicks.github.io/workdayscheduler/', '_blank');
    if (win) {
        //Browser has allowed it to be opened
        win.focus();
    } else {
        //Browser has blocked it
        alert('Please allow popups for this website');
    }
});
$('#notetaker').on('click', ()=> {
    console.log('clicked');
    var win = window.open('https://tranquil-island-78590.herokuapp.com/', '_blank');
    if (win) {
        //Browser has allowed it to be opened
        win.focus();
    } else {
        //Browser has blocked it
        alert('Please allow popups for this website');
    }
});

