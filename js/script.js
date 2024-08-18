function test() {
    console.log("The javascript works!");
}

function ravenLyrics() {
    console.log("Raven function called");
    document.querySelector(".example_detail")
        .innerHTML +=
        `<div class= "song">
        <h3>Song lyrics</strong></h3>
            <p>Krummi svaf í klettagjá,<br>
            kaldri vetrarnóttu á,<br>
            verður margt að meini<br>
            verður margt að meini<br>
            Fyrr en dagur fagur rann,<br>
            freðið nefið dregur hann<br>
            undan stórum steini<br>
            undan stórum steini.</p>
            </div>`;

    const element = document.querySelector(".example_detail button");
            element.remove();
}

function ravenSong(element) {
    console.log("Raven song called");
    element.innerHTML =
        `<audio controls>
        <source src="raven_music.m4a">
        </audio>
        `;
}

function foxLyrics() {
    console.log("Fox function called");
    document.querySelector(".example_detail")
        .innerHTML +=
        `<div class= "song">
        <h3>Song lyrics</strong></h3>
            <p>Siggi var úti með ærnar í haga,<br>
            allar hann hafði þær suður í mó.<br>
            vissi‘ hann að lágfóta dældirnar smó.<br>
            Gagg gagg gagg, segir tófan á grjóti.<br>
            Gagg gagg gagg, segir tófan á grjóti.<br>
            Gráum augunum trúi ég hún gjóti,<br>
            aumingja Siggi hann þorir ekki heim.</p>
            </div>`;
    
    const element = document.querySelector(".example_detail button");
            element.remove();
}

function foxSong(element) {
    console.log("Fox song called");
    element.innerHTML =
        `<audio controls>
        <source src="fox_music.m4a">
        </audio>
        `;
}

function horseLyrics() {
    console.log("Horse function called");
    document.querySelector(".example_detail")
        .innerHTML +=
        `<div class= "song">
        <h3>Song lyrics</strong></h3>
            <p>Ríðum, ríðum og rekum yfir sandinn,<br>
            rennur sól á bak við Arnarfell.<br>
            Hér á reiki er margur óhreinn andinn,<br>
            úr því fer að skyggja á jökulsvell.<br>
            Drottinn leiði drösulinn minn,<br>
            drjúgur verður síðasti áfanginn,<br>
            Drottinn leiði drösulinn minn,<br>
            drjúgur verður síðasti áfanginn.</p>
            </div>`;
    
    const element = document.querySelector(".example_detail button");
            element.remove();
}

function horseSong(element) {
    console.log("Horse song called");
    element.innerHTML =
        `<audio controls>
        <source src="horse_music.m4a">
        </audio>
        `;
}
