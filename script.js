const synth = window.speechSynthesis;
const speech = new SpeechSynthesisUtterance(); //speech constructor
const btn = document.querySelector("button");
const select = document.querySelector("select");

// setTimeout(()=>{
//     console.log(synth.getVoices())         //to see the output in console we should pass it inside setTimeout as when a page is loaded, 
//     // it takes some amount of time to populate the voices array as it does so, asynchronously. 
//     // Due to which when the array is logged into the console immediately after the page loads
// },2000);



synth.onvoiceschanged = ()=>{
    voices = synth.getVoices();
    speech.voice = voices[0];
    
    voices.forEach( (voice,i) => {
        select[i] = new Option(`${voice.name} (${voice.lang})`,i)
    });
};

select.addEventListener("change",()=>{
    speech.voice = voices[select.value];
})

btn.addEventListener("click", ()=>{


    speech.text = document.querySelector("textarea").value;

    // The speechSynthesis read-only property of the Window object returns a SpeechSynthesis object,
    //  which is the entry point into using Web Speech API speech synthesis functionality.

    synth.speak(speech);

})

