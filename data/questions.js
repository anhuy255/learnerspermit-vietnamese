// ===========================================================================
// PRACTICE TEST QUESTIONS  —  edit this file to add / change questions.
// Source of truth: PennDOT Sổ Tay Tài Xế (PUB 95, bản tiếng Việt).
// Keep all learner-facing text in Vietnamese. Do NOT invent rules.
// ===========================================================================
//
// QUESTION SCHEMA (one object per question):
//   id              : unique string, e.g. "q-001"
//   topic           : must match a TOPIC id in data/topics.js
//                     ("signs-signals" | "driving-skills" |
//                      "yield-park-safety" | "dui-distracted")
//   question_vi     : the question text in Vietnamese
//   choices_vi      : array of EXACTLY 4 answer strings in Vietnamese
//   correct_answer  : index (0-3) of the correct entry in choices_vi
//   explanation_vi  : short Vietnamese explanation shown after submitting
//   image           : OPTIONAL filename in /images (e.g. "stop-sign.png"),
//                     or null if there is no image. See images/README.md.
//   source_ref      : where in the handbook this comes from (for editors)
//
// To add a question: copy a block, give it a new `id`, fill in the fields.
// To add an image question: drop the file in /images and set `image`.
// ===========================================================================

export const QUESTIONS = [
  // ---- Topic: Đèn tín hiệu, biển báo và vạch kẻ đường --------------------
  {
    id: "q-001",
    topic: "signs-signals",
    question_vi: "Biển báo hình bát giác (tám cạnh) màu đỏ có ý nghĩa gì?",
    choices_vi: ["Nhường đường", "Dừng lại hoàn toàn", "Giảm tốc độ", "Cấm rẽ"],
    correct_answer: 1,
    explanation_vi:
      "Biển hình bát giác màu đỏ luôn là biển DỪNG (STOP). Bạn phải dừng lại hoàn toàn trước vạch dừng hoặc lối đi bộ.",
    image: "stop-sign.svg",
    source_ref: "PUB 95 – Chương 2 (Câu hỏi ôn tập: hình dạng biển báo)"
  },
  {
    id: "q-002",
    topic: "signs-signals",
    question_vi: "Khi đèn giao thông màu vàng đang sáng, bạn nên làm gì?",
    choices_vi: [
      "Tăng tốc để vượt qua giao lộ",
      "Dừng lại nếu có thể dừng an toàn vì đèn sắp đỏ",
      "Tiếp tục đi như bình thường",
      "Bấm còi và đi tiếp"
    ],
    correct_answer: 1,
    explanation_vi:
      "Đèn vàng báo hiệu đèn sắp chuyển sang đỏ. Hãy chuẩn bị dừng lại nếu bạn có thể dừng một cách an toàn.",
    image: null,
    source_ref: "PUB 95 – Chương 2 (Đèn giao thông)"
  },
  {
    id: "q-003",
    topic: "signs-signals",
    question_vi: "Biển báo màu vàng hình thoi thường cho biết điều gì?",
    choices_vi: [
      "Khu vực thi công",
      "Cảnh báo nguy hiểm phía trước",
      "Bắt buộc dừng lại",
      "Khu vực đỗ xe"
    ],
    correct_answer: 1,
    explanation_vi:
      "Biển màu vàng hình thoi là biển cảnh báo, báo cho bạn biết có tình huống nguy hiểm hoặc thay đổi phía trước.",
    image: "warning-sign.svg",
    source_ref: "PUB 95 – Chương 2 (Màu và hình dạng biển báo)"
  },
  {
    id: "q-004",
    topic: "signs-signals",
    question_vi: "Vạch vàng liền nằm giữa đường có ý nghĩa gì?",
    choices_vi: [
      "Được phép vượt khi an toàn",
      "Cấm vượt (cấm lấn sang làn ngược chiều)",
      "Làn dành cho xe đạp",
      "Khu vực dừng xe khẩn cấp"
    ],
    correct_answer: 1,
    explanation_vi:
      "Vạch vàng liền phân chia hai chiều xe và có nghĩa là cấm vượt. Vạch vàng đứt mới cho phép vượt khi an toàn.",
    image: null,
    source_ref: "PUB 95 – Chương 2 (Vạch kẻ đường)"
  },
  {
    id: "q-005",
    topic: "signs-signals",
    question_vi: "Đèn đỏ nhấp nháy tại giao lộ yêu cầu bạn làm gì?",
    choices_vi: [
      "Đi chậm lại rồi đi tiếp",
      "Dừng lại hoàn toàn rồi mới đi như biển DỪNG",
      "Không cần làm gì",
      "Chỉ dừng khi có xe khác"
    ],
    correct_answer: 1,
    explanation_vi:
      "Đèn đỏ nhấp nháy được xử lý giống như biển DỪNG: bạn phải dừng hẳn, rồi mới tiếp tục khi an toàn.",
    image: null,
    source_ref: "PUB 95 – Chương 2 (Đèn nhấp nháy)"
  },

  // ---- Topic: Kỹ năng lái xe ---------------------------------------------
  {
    id: "q-006",
    topic: "driving-skills",
    question_vi: "Quy tắc khoảng cách theo sau an toàn được khuyến nghị là bao nhiêu giây?",
    choices_vi: ["Một giây", "Hai giây", "Bốn giây", "Mười giây"],
    correct_answer: 2,
    explanation_vi:
      "Sổ tay khuyến nghị quy tắc bốn giây để giữ khoảng cách an toàn với xe phía trước. Hãy tăng khoảng cách khi đường xấu.",
    image: null,
    source_ref: "PUB 95 – Chương 3 (Khoảng cách theo sau)"
  },
  {
    id: "q-007",
    topic: "driving-skills",
    question_vi: "Theo luật Pennsylvania, khi nào bạn bắt buộc phải bật đèn pha?",
    choices_vi: [
      "Chỉ vào ban đêm",
      "Bất cứ khi nào bạn bật cần gạt nước",
      "Chỉ khi trời tối hẳn",
      "Khi đi trên đường cao tốc"
    ],
    correct_answer: 1,
    explanation_vi:
      "Ở Pennsylvania, khi bạn bật cần gạt nước (trời mưa, tuyết) thì luật yêu cầu phải bật đèn pha.",
    image: null,
    source_ref: "PUB 95 – Chương 3 (Đèn xe)"
  },
  {
    id: "q-008",
    topic: "driving-skills",
    question_vi: "Nếu xe của bạn bắt đầu bị trượt, bạn nên làm gì?",
    choices_vi: [
      "Đạp phanh thật mạnh",
      "Nhả chân ga và đánh lái về hướng bạn muốn xe đi tới",
      "Đánh lái ngược hướng trượt",
      "Tăng ga để lấy lại lực kéo"
    ],
    correct_answer: 1,
    explanation_vi:
      "Khi bị trượt, hãy nhả chân ga và nhẹ nhàng đánh lái về hướng bạn muốn xe đi. Không đạp phanh gấp.",
    image: null,
    source_ref: "PUB 95 – Chương 3 (Xử lý trơn trượt)"
  },
  {
    id: "q-009",
    topic: "driving-skills",
    question_vi: "Khi xe bị trượt nước (hydroplaning), cách xử lý đúng là gì?",
    choices_vi: [
      "Đạp phanh gấp để dừng lại",
      "Nhả nhẹ chân ga và giữ vô-lăng thẳng",
      "Tăng tốc để thoát khỏi vũng nước",
      "Đánh lái mạnh sang một bên"
    ],
    correct_answer: 1,
    explanation_vi:
      "Khi trượt nước, hãy nhả nhẹ chân ga và giữ vô-lăng thẳng cho tới khi lốp bám lại mặt đường. Giảm tốc độ trên đường ướt để phòng tránh.",
    image: null,
    source_ref: "PUB 95 – Chương 3 (Lái xe trên đường ướt)"
  },
  {
    id: "q-010",
    topic: "driving-skills",
    question_vi:
      "Bạn phải hạ đèn pha (đèn chiếu xa) khi cách xe ngược chiều khoảng bao xa?",
    choices_vi: ["100 feet", "200 feet", "500 feet", "1.000 feet"],
    correct_answer: 2,
    explanation_vi:
      "Hãy hạ đèn pha khi còn cách xe ngược chiều khoảng 500 feet, và khi đi sau xe khác trong khoảng 300 feet, để không làm chói mắt người lái khác.",
    image: null,
    source_ref: "PUB 95 – Chương 3 (Sử dụng đèn pha)"
  },

  // ---- Topic: Nhường đường, đỗ xe, an toàn -------------------------------
  {
    id: "q-011",
    topic: "yield-park-safety",
    question_vi: "Khi một xe cấp cứu đang hú còi tiến đến từ phía sau, bạn nên làm gì?",
    choices_vi: [
      "Tăng tốc để tránh đường",
      "Tấp vào lề phải và dừng lại",
      "Dừng ngay giữa đường",
      "Tiếp tục đi như bình thường"
    ],
    correct_answer: 1,
    explanation_vi:
      "Khi xe cấp cứu hú còi, hãy tấp vào lề bên phải và dừng lại cho tới khi xe đó đi qua.",
    image: null,
    source_ref: "PUB 95 – Chương 3 (Nhường đường cho xe ưu tiên)"
  },
  {
    id: "q-012",
    topic: "yield-park-safety",
    question_vi:
      "Khi xe buýt trường học bật đèn đỏ nhấp nháy và mở biển dừng, bạn phải làm gì?",
    choices_vi: [
      "Chỉ chạy chậm lại",
      "Dừng lại, kể cả khi bạn đi ngược chiều",
      "Vượt qua nhanh chóng",
      "Chỉ dừng nếu thấy học sinh"
    ],
    correct_answer: 1,
    explanation_vi:
      "Khi xe buýt trường học bật đèn đỏ nhấp nháy và mở biển dừng, xe ở cả hai chiều phải dừng lại và dừng cách ít nhất 10 feet.",
    image: "school-bus.svg",
    source_ref: "PUB 95 – Chương 3 (Xe buýt trường học)"
  },
  {
    id: "q-013",
    topic: "yield-park-safety",
    question_vi: "Bạn không được đỗ xe trong vòng bao nhiêu feet tính từ vòi nước chữa cháy?",
    choices_vi: ["5 feet", "10 feet", "15 feet", "25 feet"],
    correct_answer: 2,
    explanation_vi:
      "Không được đỗ xe trong vòng 15 feet tính từ vòi nước chữa cháy để xe cứu hỏa có thể tiếp cận.",
    image: null,
    source_ref: "PUB 95 – Chương 3 (Quy định đỗ xe)"
  },
  {
    id: "q-014",
    topic: "yield-park-safety",
    question_vi: "Khi đỗ xe song song với lề, bánh xe nên cách lề bao xa?",
    choices_vi: [
      "Không quá 12 inch",
      "Khoảng 2 feet",
      "Càng xa lề càng tốt",
      "Không có quy định"
    ],
    correct_answer: 0,
    explanation_vi:
      "Khi đỗ xe sát lề, bánh xe nên cách lề không quá 12 inch để không cản trở giao thông.",
    image: null,
    source_ref: "PUB 95 – Chương 3 (Đỗ xe sát lề)"
  },
  {
    id: "q-015",
    topic: "yield-park-safety",
    question_vi: "Tại giao lộ bốn chiều có biển DỪNG, ai được đi trước khi hai xe đến cùng lúc?",
    choices_vi: [
      "Xe lớn hơn",
      "Xe bên trái",
      "Xe bên phải",
      "Xe chạy nhanh hơn"
    ],
    correct_answer: 2,
    explanation_vi:
      "Khi hai xe đến giao lộ bốn chiều cùng lúc, xe bên trái phải nhường cho xe bên phải.",
    image: null,
    source_ref: "PUB 95 – Chương 3 (Nhường quyền ưu tiên tại giao lộ)"
  },

  // ---- Topic: DUI, nhắn tin khi lái xe, và các quy định liên quan --------
  {
    id: "q-016",
    topic: "dui-distracted",
    question_vi:
      "Đối với người từ 21 tuổi trở lên, nồng độ cồn trong máu (BAC) bao nhiêu thì bị coi là DUI?",
    choices_vi: ["0.02%", "0.05%", "0.08%", "0.10%"],
    correct_answer: 2,
    explanation_vi:
      "Người từ 21 tuổi trở lên phạm tội DUI khi BAC từ 0.08% trở lên. Với người dưới 21 tuổi, giới hạn là 0.02%.",
    image: null,
    source_ref: "PUB 95 – Chương 4 (Rượu và lái xe)"
  },
  {
    id: "q-017",
    topic: "dui-distracted",
    question_vi:
      "Đối với người lái dưới 21 tuổi, nồng độ cồn nào sẽ vi phạm quy định không khoan nhượng?",
    choices_vi: ["0.02% trở lên", "0.05% trở lên", "0.08% trở lên", "Chỉ khi 0.10%"],
    correct_answer: 0,
    explanation_vi:
      "Pennsylvania áp dụng quy định không khoan nhượng cho người dưới 21 tuổi: BAC từ 0.02% trở lên đã là vi phạm.",
    image: null,
    source_ref: "PUB 95 – Chương 4 (Quy định không khoan nhượng)"
  },
  {
    id: "q-018",
    topic: "dui-distracted",
    question_vi: "Luật Pennsylvania quy định thế nào về việc nhắn tin khi lái xe?",
    choices_vi: [
      "Được phép nếu dừng đèn đỏ",
      "Bị cấm khi đang lái xe",
      "Chỉ cấm với người dưới 18 tuổi",
      "Được phép trên đường cao tốc"
    ],
    correct_answer: 1,
    explanation_vi:
      "Pennsylvania cấm nhắn tin khi đang lái xe. Nếu cần dùng điện thoại, hãy dừng xe ở nơi an toàn.",
    image: null,
    source_ref: "PUB 95 – Chương 4 (Lái xe mất tập trung)"
  },
  {
    id: "q-019",
    topic: "dui-distracted",
    question_vi:
      "Theo luật đồng ý ngầm (implied consent), điều gì xảy ra nếu bạn từ chối xét nghiệm nồng độ cồn?",
    choices_vi: [
      "Không có hậu quả gì",
      "Chỉ bị cảnh cáo",
      "Bằng lái của bạn sẽ bị treo",
      "Phải nộp phạt nhỏ"
    ],
    correct_answer: 2,
    explanation_vi:
      "Khi lái xe ở Pennsylvania, bạn đã ngầm đồng ý xét nghiệm nồng độ cồn. Từ chối xét nghiệm sẽ bị treo bằng lái.",
    image: null,
    source_ref: "PUB 95 – Chương 4 (Luật đồng ý ngầm)"
  },
  {
    id: "q-020",
    topic: "dui-distracted",
    question_vi:
      "Khi lần đầu tích lũy đạt 6 điểm phạt trở lên, người lái phải làm gì?",
    choices_vi: [
      "Bị treo bằng ngay lập tức",
      "Làm một bài kiểm tra viết đặc biệt",
      "Học lại toàn bộ khóa lái xe",
      "Không phải làm gì cả"
    ],
    correct_answer: 1,
    explanation_vi:
      "Khi lần đầu đạt 6 điểm phạt trở lên, bạn phải làm bài kiểm tra viết đặc biệt. Tích lũy quá nhiều điểm có thể dẫn tới treo bằng.",
    image: null,
    source_ref: "PUB 95 – Chương 4 (Hệ thống điểm phạt)"
  }
];
