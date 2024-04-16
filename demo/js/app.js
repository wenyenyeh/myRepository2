const imgs = document.querySelectorAll('img');

// 為每個圖片建立滑鼠移入事件
imgs.forEach(function (img) {
    img.addEventListener('mouseover', function () {
  
        addAllDark();

        this.classList.remove('dark');
    });
    img.addEventListener('mouseout', function () {
 
        removeAllDark();
    });
});


function addAllDark() {
    imgs.forEach(function (img) { img.classList.add('dark'); });
}


function removeAllDark() {
    imgs.forEach(function (img) { img.classList.remove('dark'); });
}