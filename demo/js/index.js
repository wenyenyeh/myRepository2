//取得所有class名稱為tab的元素

console.log('document.querySelectorAll(".tab") =>', document.querySelectorAll(".tab"));

document.querySelectorAll(".tab").forEach(
  //為每一個元素加上(當滑鼠移過去)的事件
  function (tab, index) {
    console.log('tab =>', tab);
    console.log('index =>', index);
    tab.addEventListener("mouseover", function () {

      //=========切換tab===========
      document.querySelector(".tab.active").classList.remove("active");
      tab.classList.add("active");

     //=========切換圖片與文字區塊===
      document.querySelector(".box.active").classList.remove("active");
      document.querySelectorAll(".box")[index].classList.add("active");

      //===========================
    });
  }
);
