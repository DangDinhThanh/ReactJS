/**
 * DOM là viết tắt của mô hình tài liệu đối tượng và là một sự triù tượng của một văn bản có cấu trúc.
 * Với lập trình web thì DOM là mã HTML và DOM được gọi là HTML DOM. các phần tử  của HTML là các nút trong DOM.
 * DOM biểu diễn trong bộ nhớ của văn bản của HTML.
 *
 * HTML DOM cung cấp giao diện(API) để di chuyển và sửa đổi các nút. nó chứa các phương phức như GetEuityById hoặc RippeChild. DOM thường được sử dụng để làm việc trong JS
 * Để thay đổi nội dung của trang web ta làm như sau:
 */
var item = document.getElementById("myLI")
item.parentNode.removeChild(item)

/**
 * document là một sự trừu tượng của nút gốc. trong khi getEuityById. ParentNode và RippeChilad là các phương thức từ API DOM HTML.
 */

/**
 * HTML DOM có cấu trúc cây( được cho phép của cấu trúc HTML)
 * Nhưng những cây ngày nay rất lớn. vì chúng ta ngày càng được đẩy về các ứng dụng web động. Chúng ta cần sửa đổi cây DOM không ngừng.
 */

/** Virtual DOM
 * là một sự trừu tượng của HTML DOM. Nó nhẹ và tách ra khỏi các chi tiết triển khai dành riêng cho trình duyệt.
 * VirDOM cho phép thực hiện các tính toán và bỏ qua các hoạt động DOM thực, thường chậm và dàng riêng cho trình duyệt.
 */