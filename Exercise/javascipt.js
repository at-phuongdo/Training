$(document).ready(function(){
    var setHeight = $(".main-top-left").height();
    console.log(setHeight);
    $('.tabcontent').css({'height': setHeight});
});

// var setHeight = document.getElementById('main-top-left').clientHeight;
// document.getElementsByClassName('tabcontent').style.height  = setHeight +"px";

//lấy các thẻ a đại diện cho các tab
var buttons = document.getElementsByClassName('tablinks');
//lấy các phần nội dung
var contents = document.getElementsByClassName('tabcontent');
//Định nghĩa hàm hiển thị nội dung theo id
function showContent(id){
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }
    var content = document.getElementById(id);
    content.style.display = 'block';
}
//lặp qua các tab và gán sự kiện click
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(){
        //lấy văn bản trong thẻ a đại diện cho id của nội dung
        var id = this.textContent;
        //bỏ active tất cả các tab
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("active");
        }
    //active tab được click
    this.className += " active";
    //show nội dung theo id lấy được
    
    console.log(id);
    showContent(id);
});
}
//mặc định hiển thị tab HTML
showContent('HTML');

