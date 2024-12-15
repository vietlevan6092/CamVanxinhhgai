// Danh sách phần thưởng (có thể thay đổi tùy theo nhu cầu)
const prizes = [
    "1 set 6 box Thỏ thị trấn",
    "2,000,000vnđ",
    "1 ngày shopping với trị giá 2 triệu đồng",
    "1 chai nước hoa tuỳ chọn",
    "Baby three 400%",
    "1 gói chụp ảnh concert Tết"
];

// Số lượng hộp có thể mở tối đa
const maxOpen = 2;
let openCount = 0; // Số lần hộp đã được mở
const prizeList = []; // Mảng chứa các phần thưởng đã mở

// Hàm để chọn phần thưởng không trùng lặp
function getUniquePrize() {
    let prize;
    do {
        prize = prizes[Math.floor(Math.random() * prizes.length)];
    } while (prizeList.includes(prize)); // Kiểm tra phần thưởng đã được chọn chưa

    return prize;
}

// Hàm mở hộp và hiển thị phần thưởng với hiệu ứng
function openBox(boxId) {
    // Kiểm tra số lần mở hộp
    if (openCount >= maxOpen) {
        document.getElementById("warningMessage").style.display = 'block'; // Hiển thị cảnh báo
        return;
    }

    const box = document.getElementById(boxId);
    const prize = getUniquePrize(); // Lấy phần thưởng không trùng lặp

    // Loại bỏ lớp "opened" và hiệu ứng xoay
    box.style.backgroundColor = "transparent"; // Loại bỏ màu nền
    box.style.transform = "none"; // Loại bỏ hiệu ứng xoay

    box.innerHTML = '';  // Hiển thị thông báo mở hộp

    // Sau khi hiệu ứng hoàn thành (1 giây), hiển thị phần thưởng
    setTimeout(() => {
        // Thêm phần thưởng vào danh sách
        prizeList.push(prize);

        // Cập nhật kết quả
        document.getElementById("result").innerHTML = `Phần quà của bé là: ${prize}`;
        document.getElementById("result").classList.add('show');

        // Cập nhật danh sách phần thưởng
        const prizeListElement = document.getElementById("prizeList");
        const listItem = document.createElement("li");
        listItem.textContent = prize;
        prizeListElement.appendChild(listItem);

        // Tăng số lần mở hộp
        openCount++;

        // Nếu đã mở đủ số hộp, ẩn các hộp còn lại và hiển thị dòng thông báo hoàn thành
        if (openCount >= maxOpen) {
            const boxes = document.querySelectorAll('.gift-animation');
            boxes.forEach(box => box.style.pointerEvents = 'none');
            
            // Hiển thị thông báo hoàn thành
            document.getElementById("completionMessage").style.display = 'block';
        }
    }, 1000);  // Đợi 1 giây để hoàn thành hiệu ứng mở hộp
}

// Gán sự kiện click cho mỗi hộp
document.getElementById("box1").addEventListener("click", () => openBox("box1"));
document.getElementById("box2").addEventListener("click", () => openBox("box2"));
document.getElementById("box3").addEventListener("click", () => openBox("box3"));
document.getElementById("box4").addEventListener("click", () => openBox("box4"));
document.getElementById("box5").addEventListener("click", () => openBox("box5"));
document.getElementById("box6").addEventListener("click", () => openBox("box6"));
