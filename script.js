// 获取container
const container = document.querySelector(".container");
// 获取除occupied类名外seat
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
// 获取座位数
const count = document.getElementById("count");
// 获取总计票价
const total = document.getElementById("total");
// 获取影片下拉框
const movieSelect = document.getElementById("movie");


populateUI();
// 更新座位数及总票价
function updateSelectedCount(){
    // 获取下拉框影片票价
    let ticketPrice = +movieSelect.value;
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    localStorage.setItem("selectedSeats",JSON.stringify(seatsIndex));
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

// 保存电影索引值和票价
function setMovieData(movieIndex, moviePrice){
    localStorage.setItem("selectedMovieIndex", movieIndex);
    localStorage.setItem("selectedMoviePrice", moviePrice);
}

// 获取本地数据并渲染样式
function populateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
    if(selectedSeats !== null && selectedSeats.length > 0){
        seats.forEach((seat,index) => {
            if(selectedSeats.indexOf(index) > -1){
                seat.classList.add("selected");
            }
        });
    }
    const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");
    if(selectedMovieIndex !== null){
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}

// 电影下拉框事件监听
movieSelect.addEventListener("change", e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
});

// 座位点击事件
container.addEventListener("click", e => {
    if(e.target.classList.contains("seat") && !e.target.classList.contains("occupied")){
        e.target.classList.toggle("selected");
        updateSelectedCount();
    }
});

// 设置初始座位和总票价
updateSelectedCount();
