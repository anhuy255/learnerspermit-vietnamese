# penndot-vietnamese-study-guide

Hướng dẫn học thi bằng lái xe tạm thời (learner's permit) của Pennsylvania,
bằng **tiếng Việt**. Nội dung dựa trên Sổ Tay Tài Xế PennDOT — **PUB 95
(bản tiếng Việt)**.

> Công cụ học tập, không phải tài liệu pháp lý chính thức.

## Chức năng (v1)

- Trang chủ với các chủ đề ôn tập.
- Trang chủ đề ôn tập bằng tiếng Việt (4 chủ đề).
- Bài thi thử trắc nghiệm 20 câu (mỗi câu 4 lựa chọn).
- Hỗ trợ hình ảnh tùy chọn cho từng câu (biển báo, hình minh họa).
- Hiện đáp án đúng + giải thích ngắn bằng tiếng Việt sau khi nộp.
- Theo dõi điểm số, trang kết quả, và nút làm lại.

## Chạy thử

Đây là web app tĩnh, **không cần build**. Vì dùng ES modules, hãy phục vụ
qua một web server tĩnh (mở trực tiếp `file://` sẽ bị chặn module):

```bash
# Cách 1: Python
python3 -m http.server 8000

# Cách 2: Node
npx serve .
```

Rồi mở http://localhost:8000 trên điện thoại hoặc trình duyệt.

## Cấu trúc

```
index.html          # khung trang + nạp app
css/styles.css      # giao diện tối giản, ưu tiên di động
js/app.js           # router + các thành phần UI dùng chung (home/topic/quiz/results)
data/topics.js      # NỘI DUNG ôn tập theo chủ đề
data/questions.js   # NGÂN HÀNG CÂU HỎI (sửa file này để thêm câu)
images/             # hình cho câu hỏi (+ README.md hướng dẫn)
SEED_SOURCES.md     # các phần handbook dùng để tạo 20 câu hỏi gốc
```

Nội dung tách rời khỏi UI: thêm câu hỏi / chủ đề **không cần** sửa
`js/app.js`.

## Thêm câu hỏi, đáp án, giải thích, hình ảnh

Sửa `data/questions.js`. Mỗi câu hỏi theo schema:

| Trường           | Ý nghĩa                                                    |
|------------------|------------------------------------------------------------|
| `id`             | mã duy nhất, vd `"q-021"`                                  |
| `topic`          | khớp với một `id` trong `data/topics.js`                    |
| `question_vi`    | nội dung câu hỏi (tiếng Việt)                               |
| `choices_vi`     | mảng **đúng 4** lựa chọn (tiếng Việt)                       |
| `correct_answer` | chỉ số (0–3) của đáp án đúng trong `choices_vi`             |
| `explanation_vi` | giải thích ngắn (tiếng Việt)                                |
| `image`          | tên file trong `/images` (vd `"stop-sign.svg"`) hoặc `null` |
| `source_ref`     | phần handbook tham chiếu (để người soạn kiểm chứng)         |

Ví dụ:

```js
{
  id: "q-021",
  topic: "signs-signals",
  question_vi: "Biển màu cam thường báo hiệu điều gì?",
  choices_vi: ["Khu vực trường học", "Khu vực thi công", "Cấm đỗ xe", "Đường một chiều"],
  correct_answer: 1,
  explanation_vi: "Biển màu cam báo hiệu khu vực thi công, công trường.",
  image: null,
  source_ref: "PUB 95 – Chương 2"
}
```

### Thêm chủ đề ôn tập
Sửa `data/topics.js` (mỗi chủ đề có `id`, `title_vi`, `blurb_vi`, `sections`).
Dùng `id` đó cho trường `topic` của câu hỏi.

### Thêm hình ảnh
Xem `images/README.md`. Bỏ file vào `/images` rồi đặt `image: "tên-file"`.
Nếu thiếu file, app tự ẩn hình (câu hỏi vẫn chạy).

## Quy tắc nội dung

- Chỉ dùng handbook chính thức PUB 95 (bản tiếng Việt) làm nguồn.
- Toàn bộ chữ hướng tới người học giữ bằng **tiếng Việt**.
- **Không** bịa ra luật không có trong handbook.
- Ưu tiên cách diễn đạt của handbook, viết lại nhẹ cho dễ đọc.
