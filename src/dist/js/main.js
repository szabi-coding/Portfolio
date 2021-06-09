// Navmenu show Y hidden
const burgerTransform = document.getElementById('nav-toggle')
const navShow = document.getElementById('nav-menu')
const navLink = document.getElementsByClassName('.nav-button__link')

burgerTransform.addEventListener("click", () => {
    burgerTransform.classList.toggle("is-clicked");
    navShow.classList.toggle("is-active");
});

var twReact = document.getElementById('twReact')
var typewriter = new Typewriter(twReact, {
    delay: 25,
});

typewriter.typeString(`<span class="t-prog5">class</span> <span class="t-prog3">HelloMessage</span> <span class="t-prog5">extends</span> <span class="t-prog3">React</span><span class="t-prog2">.</span><span class="t-prog3">Component</span> <span class="t-prog2">{</span><br>`)
    .typeString(`<span class="js-type-letters"><span class="t-prog4" style="margin-left: 1rem;">render</span><span class="t-prog2">() {</span></span><br>`)
    .typeString(`<span class="js-type-letters"><span class="t-prog5" style="margin-left: 2rem;">return</span> <span class="t-prog2">(</span></span><br>`)
    .typeString(`<span class="t-prog1 less great" style="margin-left: 3rem;">div</span><br>`)
    .typeString(`<span style="margin-left: 4rem;">Hello</span> <span class="t-prog2">{</span><span class="t-prog5">this</span><span class="t-prog2">.</span><span>props</span><span class="t-prog2">.</span><span>name</span><span class="t-prog2">}</span><br>`)
    .typeString(`<span class="t-prog2 less" style="margin-left: 3rem;">/</span><span class="t-prog1 great">div</span><br>`)
    .typeString(`<span class="t-prog2" style="margin-left: 2rem;">);</span><br><span class="t-prog2" style="margin-left: 1rem;">}</span><br><span class="t-prog2">}</span><br><br>`)
    .typeString(`<span>ReactDOM</span><span class="t-prog2">.</span><span class="t-prog4">render</span><span class="t-prog2">(</span><br>`)
    .typeString(`<span class="t-prog1 less" style="margin-left: 1rem;">HelloMessage</span> <span class="t-prog5 equal">name</span><span class="t-prog2">"</span><span>World</span><span class="t-prog2 great">"/</span><br>`)
    .typeString(`<span style="margin-left: 1rem;">document</span><span class="t-prog1">.</span><span class="t-prog4">getElementById</span><span class="t-prog2">('hello-world')<br>);</span>`)
    .start();



// //Moving Text in hero section
// var textPath = document.querySelector('#text-path');

// function updateTextPathOffset(offset) {
//     textPath.setAttribute('startOffset', offset)
// }

// function onScroll() {
//     requestAnimationFrame(function () {
//         updateTextPathOffset(window.scrollY * .5)
//     })
// }



// window.addEventListener('scroll', onScroll);
// const titles = document.querySelectorAll('.anim');
// observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting == true) {
//             entry.target.classList.add('animate');
//         } else {
//             entry.target.classList.remove('animate');
//         }
//     })
// })


const logo = document.querySelectorAll("#design-logo path");
for (let i = 0; i < logo.length; i++) {
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`)
}