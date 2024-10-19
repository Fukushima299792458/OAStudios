let htms = 3600000;
let x = 10;
let y = 1;
let save = "doesn't";
let line = "on"
const youtube = []
const infect = []
const status = document.getElementById('status');
var infection = 0
var resistance = 0
var watch_hours = 0
var last_log = watch_hours
var running = 0
var infecting = 1
var ram = navigator.deviceMemory;
if (ram == null) {
    ram = 0.5
}
ram /= 0.5
var videos = ram
let oneW = 1
oneWN = "yea"

status.addEventListener('click', () => {
  // 👇️ hide button
  status.style.display = 'none';

  // 👇️ show div
  const unstatus = document.getElementById('unstatus');
  unstatus.style.display = 'block';

  const warning = document.getElementById('warning');
  warning.style.display = "block";

  const unstatusa = document.getElementById('unstatusa');
  unstatusa.style.display = 'block';
});

unstatus.addEventListener('click', () => {
  // 👇️ hide button
  unstatusa.style.display = 'none';

  warning.style.display = "none";

  unstatus.style.display = 'none';

  // 👇️ show div
  const status = document.getElementById('status');
  status.style.display = 'block';
});

function myFunction() {
    var x = document.getElementById("frequency").value;
    document.getElementById("frequency").innerHTML = x;
}

function myFunction() {
    var y = document.getElementById("duration").value;
    document.getElementById("duration").innerHTML = y;
}
// myFunction()
function myFunction() {
    var ram = document.getElementById("ram").value;
    document.getElementById("ram").innerHTML = ram;
}

function myFunction() {
    var name = document.getElementById("name").value;
    document.getElementById("name").innerHTML = name;
}

function Open() {
    // videos = ram;
    // while (videos > 0) {
    //     youtube.unshift(window.open('drone.html', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=0, top=100, width=100000, height=0, visible=none', ''))
    //     videos = videos - 1
    // }
    videos = ram
    while (videos > 0) {
        // A
        // youtube.unshift(window.open('https://www.youtube.com/watch?v=kBLOVkhAzo8&list=PL53x4JSjfQBZS_6z93fZIJur_RH2bKc9q', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=1, top=1, width=100000, height=0, visible=none', ''))
        // 1
        // home
        // henry c
        // school
        // youtube.unshift(window.open('https://www.youtube.com/watch?v=kBLOVkhAzo8', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=300, top=100, width=750, height=400, visible=none', ''))
        // 2
        // home
        // 
        youtube.unshift(window.open('https://www.youtube.com/watch?v=kxBec2pxujc', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=300, top=100, width=750, height=400, visible=none', ''))
        // 3
        // 
        // youtube.unshift(window.open('https://www.youtube.com/watch?v=TMgLwFBEF98', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=300, top=100, width=750, height=400, visible=none', ''))
        // 4
        // youtube.unshift(window.open('https://www.youtube.com/watch?v=Pkx5X19-EmA', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=300, top=100, width=750, height=400, visible=none', ''))
        // 5
        // youtube.unshift(window.open('https://www.youtube.com/watch?v=ilfTg40qMtY', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=300, top=100, width=750, height=400, visible=none', ''))
        // 6
        // youtube.unshift(window.open('https://www.youtube.com/watch?v=t5wpa6-g5w4', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=300, top=100, width=750, height=400, visible=none', ''))
        // 7
        // youtube.unshift(window.open('https://www.youtube.com/watch?v=Qw21eEoVk-0', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=300, top=100, width=750, height=400, visible=none', ''))
        // 8
        // youtube.unshift(window.open('https://www.youtube.com/watch?v=GGyaop2VUUI', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=300, top=100, width=750, height=400, visible=none', ''))
        // 9
        // youtube.unshift(window.open('https://www.youtube.com/watch?v=r9OvfEbYBT4', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=300, top=100, width=750, height=400, visible=none', ''))
        // 10
        // youtube.unshift(window.open('https://www.youtube.com/watch?v=SwNA5LwdTVc', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=300, top=100, width=750, height=400, visible=none', ''))
        // 11
        // youtube.unshift(window.open('https://www.youtube.com/watch?v=CHjQU60wViU', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=300, top=100, width=750, height=400, visible=none', ''))
        // 12
        // youtube.unshift(window.open('https://www.youtube.com/watch?v=023pv6dzbB0', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=300, top=100, width=750, height=400, visible=none', ''))
        // 13
        // youtube.unshift(window.open('https://www.youtube.com/watch?v=dhnpFUf0KNs', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=300, top=100, width=750, height=400, visible=none', ''))
        // 14
        // youtube.unshift(window.open('https://www.youtube.com/watch?v=yBqRLrLqJhg', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=300, top=100, width=750, height=400, visible=none', ''))
        // 15
        // youtube.unshift(window.open('https://www.youtube.com/watch?v=UZ-6EK52pAo', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=300, top=100, width=750, height=400, visible=none', ''))
        // 16
        // youtube.unshift(window.open('https://www.youtube.com/watch?v=0a1Fy1WKLKE', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=300, top=100, width=750, height=400, visible=none', ''))
        // 17
        // youtube.unshift(window.open('https://www.youtube.com/watch?v=u1Z8gTf6-x0', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=300, top=100, width=750, height=400, visible=none', ''))
        videos = videos - 1
    }
    setInterval(log, htms)
    // while (videos > 0) {
    //     youtube = window.open('drone.html', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=0, top=0, width=100000, height=100000, visible=none', '');
    //     videos = videos - 1
    // }
}

// function time() {
//     while (running = 1) {
//         setTimeout(log, htms);
//     }
// }

function log() {
    watch_hours = watch_hours + ram
    while (watch_hours - last_log > 1000) {
        if (watch_hours - last_log > 1000) {
            last_log = last_log + 1000
            window.open('results100.html', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=0, top=0, width=100000, height=100000, visible=none', '');
        } else if (watch_hours - last_log > 100) {
            last_log = last_log + 100
            window.open('results100.html', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=0, top=0, width=100000, height=100000, visible=none', '');
        }
    }
}

function Close() {
    videos = ram
    while (videos > 0) {
        youtube.shift().close()
        videos = videos + 1
    }
    clearInterval(log, htms)
    // window.top.location.reload(true)
    // location.reload();
    // loop();
}

function loop() {
    if (line == "on") {
        Open()
        setTimeout(Close, y * htms);
    }
    setTimeout(loop, x * htms);
}

function submit() {
    closes()
    loop()
}

function opens() {
    infect.unshift(window.open('drone.html', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=100000, top=100000, width=1, height=1, visible=none', ''))
    infect.unshift(window.open('drone.html', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=0, top=100000, width=1, height=1, visible=none', ''))
    infect.unshift(window.open('drone.html', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=100000, top=0, width=1, height=1, visible=none', ''))
    infect.unshift(window.open('drone.html', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=0, top=0, width=1, height=1, visible=none', ''))
    infection = infection + 4
    // check()

    // if (ah.closed) {
    //     window.open('zhome.html', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=0, top=0, width=100000, height=100000, visible=none', '');
    // }
}

function closes() {
    clearInterval(ahh)
    while (infection > 0) {
    // infect.forEach(window.close())
        infect.shift().close()
        infection = infection - 1
    }
    loop()
}

function Save() {
    save = "does";
}

function email() {
    window.open('mailto:phoenix.wulf@hotmail.com?subject=Run Time&body=I ran you for 100 hours!');
}

function check() {
    if (infecting == 1) {
        resistance = infection
        while (resistance > 0) {
            resistance = resistance - 1
            if (infect[resistance].closed) {
                repeat()
            }
        }
    }
    resistance = ram
    while (resistance > 0) {
        resistance = resistance - 1
        if (youtube[resistance].closed) {
            repeat()
        }
    }
}

function repeat() {
    window.open('no.html', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=100000, top=0, width=1, height=1, visible=none', '');
    window.open('ok.html', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=100000, top=100000, width=1, height=1, visible=none', '');
    window.open('no.html', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=0, top=100000, width=1, height=1, visible=none', '');
    window.open('ok.html', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=0, top=0, width=1, height=1, visible=none', '');
    window.open('no.html', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=0, top=0, width=100000, height=100000, visible=none', '');
    window.open('youtube.html', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=100000, top=0, width=1, height=1, visible=none', '');
    window.open('youtube.html', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=100000, top=100000, width=1, height=1, visible=none', '');
    window.open('youtube.html', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=0, top=100000, width=1, height=1, visible=none', '');
    window.open('youtube.html', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=0, top=0, width=1, height=1, visible=none', '');
    window.open('youtube.html', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=0, top=0, width=100000, height=100000, visible=none', '');
}

function offline() {
    line = "off"
}

function online() {
    line = "on"
}

function generate() {
    window.open('zhome.html', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=0, top=0, width=100000, height=100000, visible=none', '')
}

let ah = setInterval(check, 0)
let ahh = setInterval(opens, 0)
