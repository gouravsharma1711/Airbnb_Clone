const container = document.querySelector('.allHomeCards');
const scrollAmount = 200; // Amount to scroll in one step
const scrollSpeed = 1; // Speed of continuous scrolling
let isScrolling = true;
let startPosition = 0;
let maxScrollLeft = 0;
let resetTimeout;

function initialize() {
    startPosition = container.scrollLeft;
    maxScrollLeft = container.scrollWidth - container.clientWidth;
}

function scrollContinuously() {
    if (isScrolling) {
        if (container.scrollLeft >= maxScrollLeft) {
            // Stop scrolling and reset position
            isScrolling = false;
            clearTimeout(resetTimeout);
            resetTimeout = setTimeout(() => {
                container.scrollLeft = startPosition;
                isScrolling = true;
            }, 500); // Delay before starting scrolling again
        } else {
            container.scrollBy({
                left: scrollSpeed,
                behavior: 'smooth'
            });
        }
    }
}



// Initialize positions and dimensions
initialize();

// Set interval for continuous scrolling
setInterval(scrollContinuously, 20);

// Stop scrolling on mouse enter, resume on mouse leave
container.addEventListener('mouseenter', () => {
    isScrolling = false;
});

container.addEventListener('mouseleave', () => {
    isScrolling = true;
});
// suggestions 
document.querySelector('.allHomeCards').addEventListener('click',(e)=>{
    window.location.href=`listing/${e.target.id}`
})

//input search
let searchButton=document.querySelector(".searchButton");

searchButton.addEventListener('click',(e)=>{
    e.preventDefault();
    let searchDiv=document.querySelector('.inputSearch');
    window.location.href=`/listing/${searchDiv.value}`
    
})