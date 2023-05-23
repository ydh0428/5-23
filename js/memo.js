// DOM 요소
const $modalWrap = document.querySelector(".modal-wrap");
const $newbtn = document.querySelector(".new-btn");
const $closebtn = document.querySelector(".close-btn");
const $openbtn = document.querySelector(".open-btn");
const $deletebtn = document.querySelector(".delete-btn");
const $title = document.querySelector(".title");

$title.classList.add("change-color");


const remove = () => {
    $modalWrap.classList.remove("hidden");
    
};
const add = () => {
    $modalWrap.classList.add("hidden")
};


// .new-btn 클릭시, .modal-wrap의 hidden 클래스 없애기
$newbtn.addEventListener("click", () => {
    remove();

});

$closebtn.addEventListener("click", () => {
    add();
});

$openbtn.addEventListener("click", () => {
    remove();
});
$deletebtn.addEventListener("click",()=> {
    confirm("정말 삭제하실건가요?");
});


// .close-btn 클릭시, .modal-wrap에 hidden 클래스 추가
// 힌트) remove대신 add 사용하기


// .open-btn 클릭시, .modal-wrap의 hidden 클래스 없애기

// .delete-btn 클릭시, 삭제 여부 물어보는 창 띄워주기
