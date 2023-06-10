var modal = document.getElementById('myModal');
var img = document.querySelectorAll('.myImg');
var modalImg = document.getElementById('img01');
var captionText = document.getElementById('caption');


img.forEach((i) => {
    i.onclick = function () {
        modal.style.display = 'block';
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        console.log(this.alt);
    }
});



var span = document.querySelector('.close');
span.onclick = (() => {
    modal.style.display = "none";
})
// console.log(modal);