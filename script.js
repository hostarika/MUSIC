

const prev =document.getElementById("prev")

const next =document.getElementById("next")

const playbtn =document.getElementById("play")

const play =document.getElementById("playing")

const pause =document.getElementById("pause")




const rasm =document.getElementById("rasm")

const nomi =document.getElementById("nomi")

const singer =document.getElementById("singer")

const select =document.getElementById("select")

const progress =document.getElementById("progress")

const audio =document.getElementById("audio")





playbtn.addEventListener("click",()=>{


    if(select.value=="music1"){
        audio.src=musicsData[0].music

        if (play.style.display== "none") {
            audio.pause();
        }
        else{
            audio.play();
        }
    }
    else if(select.value=="music2"){
        audio.src=musicsData[1].music

        if (play.style.display== "none") {
            audio.pause();
        }
        else{
            audio.play();
        }
    }
    else if(select.value=="music3"){
        audio.src=musicsData[2].music

        if (play.style.display== "none") {
            audio.pause();
        }
        else{
            audio.play();
        }
    }
    else if(select.value=="music4"){
        audio.src=musicsData[3].music

        if (play.style.display== "none") {
            audio.pause();
        }
        else{
            audio.play();
        }
    }
    else if(select.value=="music5"){
        audio.src=musicsData[4].music

        if (play.style.display== "none") {
            audio.pause();
        }
        else{
            audio.play();
        }
    }

    if (play.style.display== "none") {
        play.style.display= "block";
        pause.style.display="none";
        playbtn.style.backgroundColor="blue"
    } else {
        play.style.display= "none";
        pause.style.display="block";
        playbtn.style.backgroundColor="red"
    }
});




const musicsData=[
    {
        name:"Atirgullar ochdi Chiroy",
        rasmi:"./img/bahor.jpg",
        singer:"Jasur Jabborov",
        music:"./music/bahor.mp3"
    },
    {
        name:"Doner Kebab Nacho",
        rasmi:"./img/donerkebab.jpg",
        singer:"TubeRipper",
        music:"./music/donerk.mp3"
    },
    {
        name:"Shape of You",
        rasmi:"./img/shapeyou.jpg",
        singer:"Ed Sheeran",
        music:"./music/shapeofyou.mp3"
    },
    {
        name:"Happy",
        rasmi:"./img/happy.jpg",
        singer:"Pharrell Williams",
        music:"./music/happy.mp3"
    },
    {
        name:"Lalala",
        rasmi:"./img/alfarruq.jpg",
        singer:"Alfarruq ustoz",
        music:"./music/noname.mp3"
    }
]




select.addEventListener("change",()=>{
    if (select.value=="music1") {
        rasm.src=musicsData[0].rasmi
        nomi.textContent=musicsData[0].name
        singer.textContent=musicsData[0].singer
    } else if(select.value=="music2") {
        rasm.src=musicsData[1].rasmi
        nomi.textContent=musicsData[1].name
        singer.textContent=musicsData[1].singer
    }
    else if(select.value=="music3") {
        rasm.src=musicsData[2].rasmi
        nomi.textContent=musicsData[2].name
        singer.textContent=musicsData[2].singer
    }
    else if(select.value=="music4") {
        rasm.src=musicsData[3].rasmi
        nomi.textContent=musicsData[3].name
        singer.textContent=musicsData[3].singer
    }
    else if(select.value=="music5") {
        rasm.src=musicsData[4].rasmi
        nomi.textContent=musicsData[4].name
        singer.textContent=musicsData[4].singer
    }
})