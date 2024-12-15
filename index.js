document.getElementById("login-button").addEventListener("click", function(event) {
    event.preventDefault();  // Ngừng gửi form và reload trang

    var username = document.getElementById("userName").value;
    var password = document.getElementById("password").value;

    // Kiểm tra tài khoản và mật khẩu
    if (username === "12356" && password === "7827") {
        $("form").fadeOut(500); // Ẩn form
        setTimeout(function() {
            $(".wrapper").addClass("form-success"); 
        }, 500); 

        // Sau 2.5 giây chuyển hướng đến trang khác
        setTimeout(function() {
            location.href = "christmastree.html"; 
        }, 2500); 
    } else {
        var modal = document.querySelector(".modal");
        modal.classList.remove("hide");
        modal.classList.add("show");

        // Đóng modal khi nhấn nút Đóng hoặc dấu X
        document.querySelector(".modal__footer button").addEventListener("click", function() {
            modal.classList.remove("show");
            modal.classList.add("hide");
        });

        document.querySelector(".modal__header .fa-xmark").addEventListener("click", function() {
            modal.classList.remove("show");
            modal.classList.add("hide");
        });
    }
});
