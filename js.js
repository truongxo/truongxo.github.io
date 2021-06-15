var game = document.getElementById("game");
var arr = new Array();
var arr2 = new Array();
var checkXO = 0;
var hoa = 0;

var demhangx = 0;
var demhango = 0;
var demcotx = 0;
var demcoto = 0;
var demduoicheochinhx1 = 0;
var demtrencheochinhx1 = 0;
var demduoicheochinho1 = 0;
var demtrencheochinho1 = 0;
var demtrencheophux2 = 0;
var demduoicheophux2 = 0;
var demtrencheophuo2 = 0;
var demduoicheophuo2 = 0;

var dongx = [];
var cotx = [];
var dongo = [];
var coto = [];

function getOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;

    if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'IOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'Windows';
    } else if (/Android/.test(userAgent)) {
        os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
        os = 'Linux';
    }
    return os;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function createListItem(text, tag, clazz, id) {
    var ilm = document.createElement(tag);
    ilm.textContent = text;
    ilm.className = clazz;
    ilm.id = id;
    return ilm;
}

function createButton(len) { // tao cac o
    for (var i = 0; i < len; i++) {
        arr[i] = new Array();
        arr2[i] = new Array();
        for (var j = 0; j < len; j++) {
            game.appendChild(createListItem("+", "button", "", "btn" + i.toString() + j.toString()));
            arr[i].push(0);
            arr2[i].push(0);
        }
        game.appendChild(createListItem("", "br", "", ""));
    }
}

function changeBG(i, j) { // event cac o
    document.getElementById("btn" + i.toString() + j.toString()).style.backgroundColor = "white";
}

function setClickBtn(i, j) { // event cac o
    /*document.getElementById("btn" + i.toString() + j.toString()).onclick = function() {
            document.getElementById("btn" + i.toString() + j.toString()).style.backgroundColor = "gray";
            var x = i,
                y = j;
            for (var a = 0; a < dongcot; a++) {
                for (var b = 0; b < dongcot; b++) {
                    if (a != x || b != y) {
                        changeBG(a, b);
                    }
                }

            }
        }*/
    document.getElementById("btn" + i.toString() + j.toString()).addEventListener("mousedown", function cc() {
        document.getElementById("btn" + i.toString() + j.toString()).style.backgroundColor = "rgb(207, 207, 207)";
    });
    document.getElementById("btn" + i.toString() + j.toString()).addEventListener("mouseout", function lol() {
        document.getElementById("btn" + i.toString() + j.toString()).style.backgroundColor = "white";
    });

    if (getOS() === "Windows") {
        document.getElementById("btn" + i.toString() + j.toString()).ondblclick = function() {
            if (arr2[i][j] == 0) {
                hoa++;
                if (checkXO == 0) {
                    document.getElementById("btn" + i.toString() + j.toString()).style.color = "blue";
                    document.getElementById("btn" + i.toString() + j.toString()).innerText = "X";
                    arr[i][j] = 1;
                    checkXO = 1;
                    document.getElementById("luot").innerText = "Đến Lượt O";
                    document.getElementById("luot").style.display = "block";
                    sleep(500).then(() => {
                        document.getElementById("luot").style.display = "none";
                    });
                } else {
                    document.getElementById("btn" + i.toString() + j.toString()).style.color = "red";
                    document.getElementById("btn" + i.toString() + j.toString()).innerText = "O";
                    arr[i][j] = 2;
                    checkXO = 0;
                    document.getElementById("luot").innerText = "Đến Lượt X";
                    document.getElementById("luot").style.display = "block";
                    sleep(500).then(() => {
                        document.getElementById("luot").style.display = "none";
                    });
                }
                checkWinner(dongcot);
                arr2[i][j] = 1;
                if (hoa == dongcot * dongcot) showMessenger("Hòa!!!");
            }
        }
    } else {
        document.getElementById("btn" + i.toString() + j.toString()).onclick = function() {

            if (arr2[i][j] == 0) {
                hoa++;
                if (checkXO == 0) {
                    document.getElementById("btn" + i.toString() + j.toString()).style.color = "blue";
                    document.getElementById("btn" + i.toString() + j.toString()).innerText = "X";
                    arr[i][j] = 1;
                    checkXO = 1;
                    document.getElementById("luot").innerText = "Đến Lượt O";
                    document.getElementById("luot").style.display = "block";
                    sleep(500).then(() => {
                        document.getElementById("luot").style.display = "none";
                    });
                } else {
                    document.getElementById("btn" + i.toString() + j.toString()).style.color = "red";
                    document.getElementById("btn" + i.toString() + j.toString()).innerText = "O";
                    arr[i][j] = 2;
                    checkXO = 0;
                    document.getElementById("luot").innerText = "Đến Lượt X";
                    document.getElementById("luot").style.display = "block";
                    sleep(500).then(() => {
                        document.getElementById("luot").style.display = "none";
                    });
                }
                checkWinner(dongcot);
                arr2[i][j] = 1;
                if (hoa == dongcot * dongcot) showMessenger("Hòa!!!");
            }
        }
    }

}

function setClickBtnAfterWin(i, j) { // event cac o
    document.getElementById("btn" + i.toString() + j.toString()).onclick = function() {

    }
    document.getElementById("btn" + i.toString() + j.toString()).ondblclick = function() {

    }
}

function checkbtnAfterWin(len) { // check cac o
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len; j++) {
            setClickBtnAfterWin(i, j);
        }

    }
}


function checkbtn(len) { // check cac o
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len; j++) {
            setClickBtn(i, j);
        }

    }
}


function showMessenger(str) {
    sleep(1000).then(() => {
        checkbtnAfterWin(dongcot);
        document.getElementById("mess").style.display = "flex";
        document.getElementById("userwin").innerText = str;
        document.getElementById("playagain").onclick = function() {
            location.reload();
        }
    });

}

function checkWinner(dongcot) {
    for (var i = 0; i < dongcot; i++) { // check hang
        for (var j = 0; j < dongcot - 1; j++) {
            demhangx = 0;
            demhango = 0;
            dongx = [];
            cotx = [];
            dongo = [];
            coto = [];
            for (var k = j + 1; k < dongcot; k++) {
                if (arr[i][j] === arr[i][k] && arr[i][j] === 1 && arr[i][k] === 1) {
                    demhangx++;
                    dongx.push(i);
                    cotx.push(k);
                    if (demhangx === 4) {
                        dongx.push(i);
                        cotx.unshift(k - 4);
                        showMessenger("X win !!!");
                        for (var l = 0; l < 5; l++) {
                            document.getElementById("btn" + dongx[l].toString() + cotx[l].toString()).style.backgroundColor = "yellow";
                        }
                    }
                } else {
                    demhangx = -1;
                    dongx = [];
                    cotx = [];
                }
                if (arr[i][j] === arr[i][k] && arr[i][j] === 2 && arr[i][k] === 2) {
                    demhango++;
                    dongo.push(i);
                    coto.push(k);
                    if (demhango === 4) {
                        dongo.push(i);
                        coto.unshift(k - 4);
                        showMessenger("O win !!!");
                        for (var l = 0; l < 5; l++) {
                            document.getElementById("btn" + dongo[l].toString() + coto[l].toString()).style.backgroundColor = "yellow";
                        }
                    }
                } else {
                    demhango = -1;
                    dongo = [];
                    coto = [];
                }
            }
        }
    }
    for (var i = 0; i < dongcot; i++) { // check cot
        for (var j = 0; j < dongcot - 1; j++) {
            demcotx = 0;
            demcoto = 0;
            dongx = [];
            cotx = [];
            dongo = [];
            coto = [];
            for (var k = j + 1; k < dongcot; k++) {
                if (arr[j][i] === arr[k][i] && arr[j][i] === 1 && arr[k][i] === 1) {
                    demcotx++;
                    dongx.push(k);
                    cotx.push(i);
                    if (demcotx === 4) {
                        dongx.unshift(k - 4);
                        cotx.push(i);
                        showMessenger("X win !!!");
                        for (var l = 0; l < 5; l++) {
                            document.getElementById("btn" + dongx[l].toString() + cotx[l].toString()).style.backgroundColor = "yellow";
                        }
                    }
                } else {
                    demcotx = -1;
                    dongx = [];
                    cotx = [];
                }
                if (arr[j][i] === arr[k][i] && arr[j][i] === 2 && arr[k][i] === 2) {
                    demcoto++;
                    dongo.push(k);
                    coto.push(i);
                    if (demcoto === 4) {
                        dongo.unshift(k - 4);
                        coto.push(i);
                        showMessenger("O win !!!");
                        for (var l = 0; l < 5; l++) {
                            document.getElementById("btn" + dongo[l].toString() + coto[l].toString()).style.backgroundColor = "yellow";
                        }
                    }
                } else {
                    demcoto = -1;
                    dongo = [];
                    coto = [];
                }
            }
        }
    }
    for (var i = -1; i < dongcot; i++) { // check duoi duong cheo chinh x1
        demduoicheochinhx1 = -1;
        dongx = [];
        cotx = [];
        for (var j = 1; j < dongcot - i; j++) {
            if (arr[j + i][j - 1] === 1) {
                demduoicheochinhx1++;
                dongx.push(j + i);
                cotx.push(j - 1);
                if (demduoicheochinhx1 === 4) {
                    showMessenger("X win !!!");
                    for (var l = 0; l < 5; l++) {
                        document.getElementById("btn" + dongx[l].toString() + cotx[l].toString()).style.backgroundColor = "yellow";
                    }
                }
            } else {
                demduoicheochinhx1 = -1;
                dongx = [];
                cotx = [];
            }
        }
    }
    for (var i = 0; i < dongcot; i++) { // check tren duong cheo chinh x1
        demtrencheochinhx1 = -1;
        dongx = [];
        cotx = [];
        for (var j = i; j < dongcot; j++) {
            if (arr[j - i][j] === 1) {
                demtrencheochinhx1++;
                dongx.push(j - i);
                cotx.push(j);
                if (demtrencheochinhx1 === 4) {
                    showMessenger("X win !!!");
                    for (var l = 0; l < 5; l++) {
                        document.getElementById("btn" + dongx[l].toString() + cotx[l].toString()).style.backgroundColor = "yellow";
                    }
                }
            } else {
                demtrencheochinhx1 = -1;
                dongx = [];
                cotx = [];
            }
        }
    }
    ////
    for (var i = -1; i < dongcot; i++) { // check duoi duong cheo chinh o1
        demduoicheochinho1 = -1;
        dongo = [];
        coto = [];
        for (var j = 1; j < dongcot - i; j++) {
            if (arr[j + i][j - 1] === 2) {
                demduoicheochinho1++;
                dongo.push(j + i);
                coto.push(j - 1);
                if (demduoicheochinho1 === 4) {
                    showMessenger("O win !!!");
                    for (var l = 0; l < 5; l++) {
                        document.getElementById("btn" + dongo[l].toString() + coto[l].toString()).style.backgroundColor = "yellow";
                    }
                }
            } else {
                demduoicheochinho1 = -1;
                dongo = [];
                coto = [];
            }
        }
    }
    for (var i = 0; i < dongcot; i++) { // check tren duong cheo chinh o1
        demtrencheochinho1 = -1;
        dongo = [];
        coto = [];
        for (var j = i; j < dongcot; j++) {
            if (arr[j - i][j] === 2) {
                demtrencheochinho1++;
                dongo.push(j - i);
                coto.push(j);
                if (demtrencheochinho1 === 4) {
                    showMessenger("O win !!!");
                    for (var l = 0; l < 5; l++) {
                        document.getElementById("btn" + dongo[l].toString() + coto[l].toString()).style.backgroundColor = "yellow";
                    }
                }
            } else {
                demtrencheochinho1 = -1;
                dongo = [];
                coto = [];
            }
        }
    }
    //
    for (var i = dongcot - 1; i >= 0; i--) { // check tren duong cheo phu x2
        demtrencheophux2 = -1;
        dongx = [];
        cotx = [];
        for (var j = 0; j <= i; j++) {
            if (arr[i - j][j] === 1) {
                demtrencheophux2++;
                dongx.push(i - j);
                cotx.push(j);
                if (demtrencheophux2 === 4) {
                    showMessenger("X win !!!");
                    for (var l = 0; l < 5; l++) {
                        document.getElementById("btn" + dongx[l].toString() + cotx[l].toString()).style.backgroundColor = "yellow";
                    }
                }
            } else {
                demtrencheophux2 = -1;
                dongx = [];
                cotx = [];
            }
        }
    }
    for (var i = 0; i < dongcot; i++) { // check duoi duong cheo phu x2
        demduoicheophux2 = -1;
        dongx = [];
        cotx = [];
        for (var j = dongcot - 1; j >= i; j--) {
            if (arr[dongcot - 1 + i - j][j] === 1) {
                demduoicheophux2++;
                dongx.push(dongcot - 1 + i - j);
                cotx.push(j);
                if (demduoicheophux2 === 4) {
                    showMessenger("X win !!!");
                    for (var l = 0; l < 5; l++) {
                        document.getElementById("btn" + dongx[l].toString() + cotx[l].toString()).style.backgroundColor = "yellow";
                    }
                }
            } else {
                demduoicheophux2 = -1;
                dongx = [];
                cotx = [];
            }
        }
    }
    ///
    for (var i = dongcot - 1; i >= 0; i--) { // check tren duong cheo phu o2
        demtrencheophuo2 = -1;
        dongo = [];
        coto = [];
        for (var j = 0; j <= i; j++) {
            if (arr[i - j][j] === 2) {
                demtrencheophuo2++;
                dongo.push(i - j);
                coto.push(j);
                if (demtrencheophuo2 === 4) {
                    showMessenger("O win !!!");
                    for (var l = 0; l < 5; l++) {
                        document.getElementById("btn" + dongo[l].toString() + coto[l].toString()).style.backgroundColor = "yellow";
                    }
                }
            } else {
                demtrencheophuo2 = -1;
                dongo = [];
                coto = [];
            }
        }
    }
    for (var i = 0; i < dongcot; i++) { // check duoi duong cheo phu o2
        demduoicheophuo2 = -1;
        dongo = [];
        coto = [];
        for (var j = dongcot - 1; j >= i; j--) {
            if (arr[dongcot - 1 + i - j][j] === 2) {
                demduoicheophuo2++;
                dongo.push(dongcot - 1 + i - j);
                coto.push(j);
                if (demduoicheophuo2 === 4) {
                    showMessenger("O win !!!");
                    for (var l = 0; l < 5; l++) {
                        document.getElementById("btn" + dongo[l].toString() + coto[l].toString()).style.backgroundColor = "yellow";
                    }
                }
            } else {
                demduoicheophuo2 = -1;
                dongo = [];
                coto = [];
            }
        }
    }
}

function main() {
    try {
        dongcot = parseInt(document.getElementById("soluong").value);
        if (dongcot <= 40) {
            if (dongcot < 5) {
                alert("số ô quá ít!!!");
            } else {
                document.getElementById("html").onclick = function() {
                    document.getElementById("mp3").play();
                    document.getElementById("nhacnen").play();
                }
                game.style.width = 50 * dongcot.toString() + "px";
                createButton(dongcot);
                checkbtn(dongcot);
            }
        } else alert("chơi đồ ít thôi số hàng cột <=40 !!!");
    } catch {
        alert("Số hàng x cột phải là số!!!");
    }
}
// ===========
var checkgame;
var dongcot;
document.getElementById("solo").onclick = function() {
    document.getElementsByClassName("question")[0].style.display = "none";
    document.getElementsByClassName("question2")[0].style.display = "block";
    checkgame = 1;

}
document.getElementById("bot").onclick = function() {
    document.getElementsByClassName("question")[0].style.display = "none";
    document.getElementsByClassName("question2")[0].style.display = "block";
    checkgame = 0;
}
document.getElementById("play").onclick = function() {
    main();
    document.getElementsByClassName("question2")[0].style.display = "none";
}