# HTML Notes + Attributes

Tổng hợp các thẻ HTML cơ bản, thuộc tính phổ biến, mô tả và ví dụ.

---

## 📌 Ghi chú HTML cơ bản


### Tiêu đề web
```html
<title>pham hai phu</title>
```

### Đoạn văn
```html
<p>Đây là một đoạn văn</p>
```

### In đậm
```html
<strong>Chữ in đậm</strong>
<b>Chữ in đậm</b>
```

### In nghiêng
```html
<em>Chữ in nghiêng</em>
<i>Chữ in nghiêng</i>
```

### Gạch chân
```html
<u>Gạch chân chữ</u>
```

### Xuống dòng
```html
<br>
```

### Dòng kẻ ngang
```html
<hr>
```


### Danh sách
#### Không thứ tự
```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>
```
#### Có thứ tự
```html
<ol>
    <li>Item 1</li>
    <li>Item 2</li>
</ol>
```

### Nối CSS
```html
<link rel="stylesheet" href="style.css">
```

### Nối JavaScript
```html
<script src="script.js"></script>
```

### Giữ nguyên định dạng chữ
```html
<pre>Giữ nguyên      dấu cách và xuống dòng</pre>
```

### Highlight code (search google prismjs.com)
```html
<pre><code class="language-html">&lt;p&gt;Hello World&lt;/p&gt;</code></pre>
```

---

## 📌 HTML Attributes Cheat Sheet

### 1. Thuộc tính chung

| Thuộc tính | Mô tả | Ví dụ |
|------------|-------|-------|
| `id` | Định danh duy nhất cho phần tử | `<p id="intro">Hello</p>` |
| `class` | Gán lớp CSS cho phần tử | `<div class="box"></div>` |
| `style` | CSS inline cho phần tử | `<p style="color:red;">Chữ đỏ</p>` |
| `title` | Tooltip khi hover chuột | `<span title="Gợi ý">Hover me</span>` |
| `hidden` | Ẩn phần tử | `<p hidden>Ẩn</p>` |
| `tabindex` | Thứ tự tab | `<input tabindex="1">` |
| `contenteditable` | Cho phép chỉnh sửa nội dung | `<div contenteditable="true">Sửa tôi</div>` |
| `draggable` | Cho phép kéo thả | `<img src="a.jpg" draggable="true">` |
| `lang` | Ngôn ngữ nội dung | `<html lang="vi">` |

---

### 2. Liên kết (`<a>`)

| Thuộc tính | Mô tả | Ví dụ |
|------------|-------|-------|
| `href` | Đường dẫn liên kết | `<a href="https://example.com">Link</a>` |
| `target` | Cách mở liên kết | `<a href="a.html" target="_blank">Mở tab mới</a>` |
| `download` | Tải file khi click | `<a href="file.zip" download>Download</a>` |
| `rel` | Quan hệ link | `<a href="a.html" rel="nofollow">Link</a>` |

---

### 3. Hình ảnh (`<img>`)

| Thuộc tính | Mô tả | Ví dụ |
|------------|-------|-------|
| `src` | Nguồn ảnh | `<img src="a.jpg">` |
| `alt` | Văn bản thay thế | `<img src="a.jpg" alt="Mô tả">` |
| `width` | Chiều rộng | `<img src="a.jpg" width="200">` |
| `height` | Chiều cao | `<img src="a.jpg" height="100">` |
| `loading` | Cách tải | `<img src="a.jpg" loading="lazy">` |
| `srcset` | Ảnh đa kích thước | `<img src="a.jpg" srcset="a-2x.jpg 2x">` |

---

### 4. Bảng (`<table>`)

| Thuộc tính | Mô tả | Ví dụ |
|------------|-------|-------|
| `border` | Viền bảng | `<table border="1">` |
| `cellpadding` | Khoảng cách trong ô | `<table cellpadding="5">` |
| `cellspacing` | Khoảng cách giữa ô | `<table cellspacing="2">` |
| `colspan` | Gộp cột | `<td colspan="2">Gộp 2 cột</td>` |
| `rowspan` | Gộp hàng | `<td rowspan="2">Gộp 2 hàng</td>` |

---

### 5. Form (`<input>`, `<form>`...)

| Thuộc tính | Mô tả | Ví dụ |
|------------|-------|-------|
| `type` | Loại input | `<input type="text">` |
| `name` | Tên trường | `<input name="username">` |
| `value` | Giá trị mặc định | `<input value="Phú">` |
| `placeholder` | Gợi ý nhập | `<input placeholder="Nhập tên">` |
| `required` | Bắt buộc nhập | `<input required>` |
| `readonly` | Chỉ đọc | `<input readonly>` |
| `disabled` | Vô hiệu hóa | `<input disabled>` |
| `checked` | Mặc định chọn | `<input type="checkbox" checked>` |
| `maxlength` | Giới hạn ký tự | `<input maxlength="10">` |
| `min` / `max` | Giá trị nhỏ/ lớn | `<input type="number" min="1" max="10">` |
| `step` | Bước tăng giá trị | `<input type="number" step="2">` |
| `multiple` | Chọn nhiều | `<input type="file" multiple>` |
| `pattern` | Regex kiểm tra | `<input pattern="[0-9]{3}">` |

---

### 6. Media (`<video>`, `<audio>`)

| Thuộc tính | Mô tả | Ví dụ |
|------------|-------|-------|
| `src` | Nguồn file | `<video src="a.mp4"></video>` |
| `controls` | Hiển thị điều khiển | `<video controls>` |
| `autoplay` | Tự phát | `<video autoplay>` |
| `muted` | Tắt tiếng | `<video muted>` |
| `loop` | Lặp lại | `<video loop>` |
| `poster` | Ảnh đại diện video | `<video poster="thumb.jpg">` |

---

### 7. Đặc biệt

| Thuộc tính | Mô tả | Ví dụ |
|------------|-------|-------|
| `data-*` | Thuộc tính tùy biến | `<div data-id="123">` |
| `aria-*` | Hỗ trợ Accessibility | `<button aria-label="Đóng">X</button>` |
| `spellcheck` | Kiểm tra chính tả | `<textarea spellcheck="false">` |
| `translate` | Cho phép dịch | `<p translate="no">No translate</p>` |
