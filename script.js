let page = document.getElementById('loopy');
let lister = ''
let tekst;
let aTeller = 0;
let eTeller = 0;
let iTeller = 0;
let oTeller = 0;
let uTeller = 0;
let æTeller = 0;
let øTeller = 0;
let åTeller = 0;
let vokalAntall = 0;
let reversTekst = '';
let kort1 = 0;
let kort2 = 0;
let kortResult = '';
let trekk1 = '';
let trekk2 = '';


startPage();
function startPage(slett) {
    if (slett == 'slett') sletter();
    page.innerHTML = `
    <button onclick="toGangPage()">start 2ganger'n</button>
    <button onclick="vokalTellerPage()">start vokalteller'n</button>
    <button onclick="textReverserPage()">start tekstreverserer'n</button>
    <button onclick="krigPage()">start kortkriger'n</button>

    `;
}
function toGangPage() {
    page.innerHTML = `
    <button onclick="startPage('slett')">tilbake til valg</button>
    <p>trykk knappen under for å vise 2gangern</p>
    <button onclick="toGangLoop()">Partall to me baby</button>
    <button onclick="sletter('toGang')">fjern tekst</button>
    <ul> ${lister} </ul>
    `;
}
function vokalTellerPage() {
    page.innerHTML = `
    <button onclick="startPage('nullstill')">tilbake til valg</button>
    <p>Skriv noe i boksen under<br>kun små bokstaver fordi jeg er lat</p>
    <input type:"text" id="tekstboks">
    <button onclick="vokalTellerLoop()">tell vokaler </button>
    <button onclick="sletter('vokal')">fjern tekst</button>
    <p>det er ${vokalAntall} vokaler </p>
    `;

}
function textReverserPage() {
    page.innerHTML = `
    <button onclick="startPage('nullstill')">tilbake til valg</button>
    <p>Skriv noe i boksen under</p>
    <input type:"text" id="tekstboks">
    <button onclick="textReverserLoop()">reverser tekst </button>
    <p>${reversTekst}</p>
    <button onclick="sletter('reverse')">fjern tekst</button>
    `;
}
function krigPage() {
    page.innerHTML = `
    <button onclick="startPage('nullstill')">tilbake til valg</button>
    <p>trykk på knappen for å starte krig.<br>se så for deg hvor kult det hadde vært,<br>om jeg hadde giddi å legge til bilder av kortstokk</p>
    <button onclick="krigLoop()">krig!</button> 
    <div style="display: flex; flex-direction: row;"> <ul> ${trekk1} </ul><ul> ${trekk2} </ul> </div>
    <p>${kortResult}</p>
    <button onclick="sletter('kort')">fjern tekst</button>
    `;
}


function toGangLoop() {
    for (let count = 2; count < 21; count = count + 2) {
        lister += '<li>' + count + '</li>';
        console.log(count);
    }
    toGangPage();
}
function vokalTellerLoop() {
    tekst = document.getElementById('tekstboks').value;
    for (let i = 0; i < tekst.length; i++) {
        if (tekst.charAt(i) == 'a') aTeller++
        if (tekst.charAt(i) == 'e') eTeller++
        if (tekst.charAt(i) == 'i') iTeller++
        if (tekst.charAt(i) == 'o') oTeller++
        if (tekst.charAt(i) == 'u') uTeller++
        if (tekst.charAt(i) == 'æ') æTeller++
        if (tekst.charAt(i) == 'ø') øTeller++
        if (tekst.charAt(i) == 'å') åTeller++

    }
    vokalAntall = aTeller +
        eTeller +
        iTeller +
        oTeller +
        uTeller +
        æTeller +
        øTeller +
        åTeller;
    console.log(tekst);
    vokalTellerPage();
}
function textReverserLoop() {
    tekst = document.getElementById('tekstboks').value;
    for (let i = tekst.length; i >= 0; i--) {
        reversTekst = reversTekst + tekst.charAt(i);

    }
    textReverserPage();
}
function krigLoop() {
    kort1 = 1;
    kort2 = 2;
    while (kort1 !== kort2) {
        kort1 = Math.floor(Math.random() * 14) + 1;
        kort2 = Math.floor(Math.random() * 14) + 1;
        trekk1 += '<li>' + kort1 + '</li>' 
        trekk2 += '<li>' + kort2 + '</li>' 
    }
    kortResult = kort1 + 'Equal numbers found' + kort2;
    krigPage();

}

function sletter(page) {
    lister = '';
    aTeller = 0;
    eTeller = 0;
    iTeller = 0;
    oTeller = 0;
    uTeller = 0;
    æTeller = 0;
    øTeller = 0;
    åTeller = 0;
    vokalAntall = 0;
    reversTekst = '';
    kortResult = '';
    let trekk1 = '';
    let trekk2 = '';

    if (page == 'reverse') textReverserPage();
    if (page == 'toGang') toGangPage();
    if (page == 'vokal') vokalTellerPage();
    if (page == 'kort') krigPage();
}