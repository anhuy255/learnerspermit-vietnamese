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
    image: "stop-sign.png",
    source_ref: "PUB 95 – Chương 2, mục BIỂN BÁO HIỆU LỆNH (trang in 10)"
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
      "Biển màu vàng hình thoi là biển cảnh báo, báo cho bạn biết có tình huống nguy hiểm hoặc thay đổi phía trước (ví dụ: đoạn đường cong).",
    image: "warning-curve.png",
    source_ref: "PUB 95 – Chương 2, mục BIỂN CẢNH BÁO (trang in 13)"
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
    source_ref: "PUB 95 – Chương 3, quy tắc bốn (4) giây (trang in 36)"
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
    source_ref: "PUB 95 – Chương 3, bắt buộc dùng đèn khi bật gạt nước (trang in 40)"
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
    source_ref: "PUB 95 – Chương 3, hạ đèn chiếu xa trong 500 feet (trang in 40)"
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
    image: "school-bus-stop.png",
    source_ref: "PUB 95 – Chương 3, xe buýt trường học (trang in 58)"
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
    source_ref: "PUB 95 – Chương 3, nơi cấm đỗ xe — cách cột nước cứu hỏa 15 feet (trang in 53)"
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
    source_ref: "PUB 95 – Chương 3, RƯỢU BIA VÀ LÁI XE (trang in 33–34); hình phạt: Chương 4"
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
    source_ref: "PUB 95 – Chương 4, hình phạt với người dưới 21 tuổi (trang in 82); xem thêm Chương 3 (trang in 34)"
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
    source_ref: "PUB 95 – Chương 3 & Chương 5, cấm nhắn tin khi lái xe"
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
      "Khi lái xe ở Pennsylvania, bạn đã ngầm đồng ý xét nghiệm nồng độ cồn. Từ chối xét nghiệm sẽ bị treo bằng lái (1 năm cho lần đầu).",
    image: null,
    source_ref: "PUB 95 – Chương 4, Luật Đồng Ý Ngầm Định (trang in 82)"
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
    source_ref: "PUB 95 – Chương 4, hệ thống điểm — kỳ kiểm tra đặc biệt khi lần đầu đạt 6 điểm (trang in 79)"
  },

  // ---- Câu hỏi hình ảnh bổ sung (biển báo thực tế từ handbook) -----------
  {
    id: "q-021",
    topic: "signs-signals",
    question_vi: "Biển báo hình thoi màu cam (chữ đen) như trong hình cho biết điều gì?",
    choices_vi: [
      "Khu vực trường học phía trước",
      "Khu vực công trường — hãy giảm tốc và cảnh giác",
      "Khu vực cấm đỗ xe",
      "Lối qua đường dành cho người đi bộ"
    ],
    correct_answer: 1,
    explanation_vi:
      "Biển khu vực công trường có hình thoi, nền màu cam với chữ màu đen. Chúng cho biết khu vực bảo trì/xây dựng — hãy cảnh giác và đi chậm lại. Nhớ bật đèn phía trước khi đi qua khu vực công trường.",
    image: "work-zone-sign.png",
    source_ref: "PUB 95 – Chương 2, CÁC BIỂN BÁO KHU VỰC CÔNG TRƯỜNG (trang in 18)"
  },
  {
    id: "q-022",
    topic: "signs-signals",
    question_vi: "Biển đánh dấu hình đá đỉnh vòm (keystone) như trong hình cho biết điều gì?",
    choices_vi: [
      "Đây là xa lộ liên tiểu bang",
      "Đây là tuyến đường tiểu bang của Pennsylvania",
      "Đây là biển báo dịch vụ",
      "Đây là khu vực công trường"
    ],
    correct_answer: 1,
    explanation_vi:
      "Biển đánh dấu hình đá đỉnh vòm (keystone) cho biết con đường đó là một tuyến đường tiểu bang của Pennsylvania.",
    image: "route-marker-keystone.png",
    source_ref: "PUB 95 – Chương 2, BIỂN ĐÁNH DẤU TUYẾN ĐƯỜNG (trang in 21)"
  },
  {
    id: "q-023",
    topic: "signs-signals",
    question_vi: "Biển báo nền màu xanh dương với biểu tượng màu trắng như trong hình là loại biển gì?",
    choices_vi: [
      "Biển cảnh báo nguy hiểm",
      "Biển báo hiệu lệnh bắt buộc",
      "Biển báo dịch vụ (chỉ địa điểm dịch vụ như trạm xăng)",
      "Biển báo khu vực công trường"
    ],
    correct_answer: 2,
    explanation_vi:
      "Biển báo dịch vụ có nền màu xanh dương với chữ hoặc biểu tượng màu trắng, chỉ báo địa điểm của các dịch vụ (trạm xăng, bệnh viện, ăn uống, lưu trú...) ở lối rẽ tiếp theo.",
    image: "service-sign-gas.png",
    source_ref: "PUB 95 – Chương 2, BIỂN BÁO DỊCH VỤ (trang in 21)"
  },

  // ===== Câu hỏi ôn tập bổ sung (lấy từ phần CÂU HỎI ÔN TẬP của handbook) =====
  {
    id: "q-024",
    topic: "signs-signals",
    question_vi: "Các biển chỉ dẫn trên xa lộ và đường cao tốc:",
    choices_vi: ["Nền màu cam với chữ đen", "Nền màu xanh lá cây với chữ trắng", "Nền màu vàng với chữ đen", "Nền màu đỏ với chữ trắng"],
    correct_answer: 1,
    explanation_vi: "Biển chỉ dẫn trên xa lộ và đường cao tốc có nền màu xanh lá cây với chữ màu trắng.",
    image: null,
    source_ref: "PUB 95 – Chương 2, câu hỏi ôn tập #12 (trang in 23–29)"
  },
  {
    id: "q-025",
    topic: "signs-signals",
    question_vi: "Biển báo hình thoi màu vàng và đen:",
    choices_vi: ["Cảnh báo cho quý vị biết về các điều kiện ở trên mặt đường hoặc gần đường", "Chỉ đường đi đến các thành phố và thị trấn ở phía trước", "Hướng dẫn cho quý vị biết về luật và quy định giao thông", "Cho biết phía trước có công trình xây dựng đường bộ"],
    correct_answer: 0,
    explanation_vi: "Biển hình thoi màu vàng-đen là biển cảnh báo về điều kiện trên hoặc gần mặt đường phía trước.",
    image: null,
    source_ref: "PUB 95 – Chương 2, câu hỏi ôn tập #17 (trang in 23–29)"
  },
  {
    id: "q-026",
    topic: "signs-signals",
    question_vi: "Đâu là thứ tự phù hợp từ trên xuống dưới của màu đèn giao thông:",
    choices_vi: ["Đỏ, vàng, xanh", "Đỏ, xanh, vàng", "Xanh, đỏ, vàng", "Xanh, vàng, đỏ"],
    correct_answer: 0,
    explanation_vi: "Trên đèn giao thông dọc, thứ tự từ trên xuống là: đỏ, vàng, xanh.",
    image: null,
    source_ref: "PUB 95 – Chương 2, câu hỏi ôn tập #26 (trang in 23–29)"
  },
  {
    id: "q-027",
    topic: "signs-signals",
    question_vi: "Nếu một mũi tên màu xanh chuyển thành đèn xanh, quý vị:",
    choices_vi: ["Vẫn có thể rẽ, tuy nhiên quý vị phải nhường đường cho luồng giao thông đang đi tới", "Không rẽ được và phải tiếp tục đi thẳng", "Vẫn có quyền rẽ", "Không còn phải rẽ theo hướng chỉ của mũi tên"],
    correct_answer: 0,
    explanation_vi: "Khi mũi tên xanh chuyển thành đèn xanh tròn, bạn vẫn được rẽ nhưng phải nhường đường cho luồng xe đang tới.",
    image: null,
    source_ref: "PUB 95 – Chương 2, câu hỏi ôn tập #27 (trang in 23–29)"
  },
  {
    id: "q-028",
    topic: "signs-signals",
    question_vi: "Mũi tên màu vàng nhấp nháy có nghĩa là quý vị:",
    choices_vi: ["Nên dừng lại và tiếp tục rẽ khi mũi tên chuyển sang màu xanh", "Nên giảm tốc độ và chuẩn bị dừng lại", "Có thể rẽ, nhưng trước tiên phải nhường đường cho xe đang chạy tới và người đi bộ", "Được quyền rẽ"],
    correct_answer: 2,
    explanation_vi: "Mũi tên vàng nhấp nháy: được rẽ nhưng phải nhường đường cho xe đang tới và người đi bộ.",
    image: null,
    source_ref: "PUB 95 – Chương 2, câu hỏi ôn tập #29 (trang in 23–29)"
  },
  {
    id: "q-029",
    topic: "signs-signals",
    question_vi: "Đèn vàng nhấp nháy có nghĩa là quý vị nên:",
    choices_vi: ["Đi chậm lại và tiếp tục đi một cách thận trọng", "Tiếp tục đi qua nếu đường thông thoáng", "Dừng lại và đi tiếp khi đèn xanh", "Dừng lại và đi tiếp khi đường thông thoáng"],
    correct_answer: 0,
    explanation_vi: "Đèn vàng nhấp nháy: đi chậm lại và tiếp tục đi một cách thận trọng.",
    image: null,
    source_ref: "PUB 95 – Chương 2, câu hỏi ôn tập #30 (trang in 23–29)"
  },
  {
    id: "q-030",
    topic: "signs-signals",
    question_vi: "Đèn xanh bật sáng tại một giao lộ có nghĩa là quý vị:",
    choices_vi: ["Phải giảm tốc độ và chuẩn bị dừng lại", "Phải dừng lại và quan sát luồng giao thông đi tới trước khi đi tiếp", "Có thể lái xe đi qua giao lộ đó nếu đường thông thoáng", "Không được rẽ phải"],
    correct_answer: 2,
    explanation_vi: "Đèn xanh: được lái qua giao lộ nếu phía trước thông thoáng.",
    image: null,
    source_ref: "PUB 95 – Chương 2, câu hỏi ôn tập #32 (trang in 23–29)"
  },
  {
    id: "q-031",
    topic: "signs-signals",
    question_vi: "Đèn vàng bật sáng có nghĩa là đèn ___ sắp xuất hiện.",
    choices_vi: ["Màu vàng nhấp nháy", "Màu xanh", "Màu đỏ", "Đỏ nhấp nháy"],
    correct_answer: 2,
    explanation_vi: "Đèn vàng báo hiệu đèn đỏ sắp xuất hiện.",
    image: null,
    source_ref: "PUB 95 – Chương 2, câu hỏi ôn tập #33 (trang in 23–29)"
  },
  {
    id: "q-032",
    topic: "signs-signals",
    question_vi: "Quý vị có thể rẽ trái tại đèn đỏ nếu:",
    choices_vi: ["Không có luồng xe đi tới từ hướng ngược lại", "Quý vị đang rẽ từ đường hai chiều sang đường một chiều", "Quý vị đang rẽ từ đường một chiều sang đường một chiều khác", "Xe phía trước quý vị rẽ trái"],
    correct_answer: 2,
    explanation_vi: "Được rẽ trái khi đèn đỏ chỉ khi đi từ đường một chiều sang một đường một chiều khác (và đã dừng hẳn).",
    image: null,
    source_ref: "PUB 95 – Chương 2, câu hỏi ôn tập #35 (trang in 23–29)"
  },
  {
    id: "q-033",
    topic: "signs-signals",
    question_vi: "Nếu đèn tín hiệu giao thông bị hỏng hoặc không hoạt động, quý vị nên:",
    choices_vi: ["Dừng lại và đợi đến khi đèn tín hiệu được sửa xong", "Dừng lại và đợi cảnh sát đến", "Tiếp tục đi và coi đó là biển báo dừng bốn hướng", "Tiếp tục đi như bình thường"],
    correct_answer: 2,
    explanation_vi: "Khi đèn tín hiệu bị hỏng, hãy coi giao lộ như có biển DỪNG bốn hướng.",
    image: null,
    source_ref: "PUB 95 – Chương 2, câu hỏi ôn tập #36 (trang in 23–29)"
  },
  {
    id: "q-034",
    topic: "signs-signals",
    question_vi: "Quý vị có thể rẽ phải tại đèn đỏ nếu quý vị:",
    choices_vi: ["Dừng lại trước và sau đó kiểm tra luồng phương tiện cũng như người đi bộ", "Nhìn thấy mũi tên đỏ rẽ phải", "Đang ở làn bên trái", "Giảm tốc độ trước"],
    correct_answer: 0,
    explanation_vi: "Được rẽ phải khi đèn đỏ nếu bạn dừng hẳn trước, rồi kiểm tra xe và người đi bộ (trừ khi có biển cấm).",
    image: null,
    source_ref: "PUB 95 – Chương 2, câu hỏi ôn tập #37 (trang in 23–29)"
  },
  {
    id: "q-035",
    topic: "signs-signals",
    question_vi: "Giới hạn tốc độ là ___ dặm một giờ khi đèn vàng đang nhấp nháy phía trên biển báo hạn chế tốc độ tại khu vực có trường học.",
    choices_vi: ["25", "15", "20", "35"],
    correct_answer: 1,
    explanation_vi: "Khi đèn vàng nhấp nháy phía trên biển báo khu vực trường học, giới hạn tốc độ là 15 dặm/giờ.",
    image: null,
    source_ref: "PUB 95 – Chương 2, câu hỏi ôn tập #39 (trang in 23–29)"
  },
  {
    id: "q-036",
    topic: "signs-signals",
    question_vi: "Quý vị không được vượt xe khác ở cả hai bên của vạch kẻ giữa ___ .",
    choices_vi: ["Kết hợp đường vạch kẻ màu vàng nét liền và màu vàng nét đứt quãng", "Là vạch kẻ đơn màu vàng, nét đứt quãng", "Là vạch kẻ kép màu vàng, nét liền", "Là vạch kẻ đơn màu trắng, nét đứt quãng"],
    correct_answer: 2,
    explanation_vi: "Cấm vượt ở cả hai bên khi vạch giữa là vạch kép màu vàng nét liền.",
    image: null,
    source_ref: "PUB 95 – Chương 2, câu hỏi ôn tập #48 (trang in 23–29)"
  },
  {
    id: "q-037",
    topic: "driving-skills",
    question_vi: "Vào ban đêm, rất khó nhìn thấy:",
    choices_vi: ["Biển báo", "Người đi bộ", "Những người lái xe khác", "Đèn đường"],
    correct_answer: 1,
    explanation_vi: "Vào ban đêm, người đi bộ là đối tượng khó nhìn thấy nhất.",
    image: null,
    source_ref: "PUB 95 – Chương 3, câu hỏi ôn tập #13 (trang in 65–77)"
  },
  {
    id: "q-038",
    topic: "driving-skills",
    question_vi: "Điểm mù của quý vị là khu vực trên đường:",
    choices_vi: ["Quý vị không thể nhìn thấy nếu không quay đầu lại quan sát", "Ngay phía sau xe của quý vị", "Quý vị nhìn thấy trong kính chiếu hậu phía sau của quý vị", "Quý vị nhìn thấy trong kính chiếu hậu hai bên của quý vị"],
    correct_answer: 0,
    explanation_vi: "Điểm mù là khu vực bạn không thể thấy nếu không quay đầu lại quan sát.",
    image: null,
    source_ref: "PUB 95 – Chương 3, câu hỏi ôn tập #24 (trang in 65–77)"
  },
  {
    id: "q-039",
    topic: "driving-skills",
    question_vi: "Trước khi chuyển làn trên đường cao tốc nhiều làn, quý vị nên:",
    choices_vi: ["Bấm còi", "Bật đèn pha", "Giảm tốc độ", "Kiểm tra kính chiếu hậu và điểm mù"],
    correct_answer: 3,
    explanation_vi: "Trước khi chuyển làn trên đường nhiều làn, hãy kiểm tra kính chiếu hậu và điểm mù.",
    image: null,
    source_ref: "PUB 95 – Chương 3, câu hỏi ôn tập #26 (trang in 65–77)"
  },
  {
    id: "q-040",
    topic: "driving-skills",
    question_vi: "Trước khi lùi xe, quý vị nên:",
    choices_vi: ["Nhìn vào kính chiếu hậu để chắc chắn phía sau không có chiếc xe nào", "Nhấp nháy đèn xe", "Mở cửa để chắc chắn phía sau không có chiếc xe nào", "Quay đầu lại và nhìn qua cửa sổ phía sau"],
    correct_answer: 3,
    explanation_vi: "Trước khi lùi xe, hãy quay đầu lại và nhìn qua cửa sổ phía sau.",
    image: null,
    source_ref: "PUB 95 – Chương 3, câu hỏi ôn tập #28 (trang in 65–77)"
  },
  {
    id: "q-041",
    topic: "driving-skills",
    question_vi: "Đèn phanh của quý vị cho người lái xe khác biết rằng quý vị:",
    choices_vi: ["Đang chuẩn bị rẽ", "Đang sử dụng phanh khẩn cấp", "Đang chuyển làn", "Đang giảm tốc độ hoặc dừng lại"],
    correct_answer: 3,
    explanation_vi: "Đèn phanh cho người sau biết bạn đang giảm tốc độ hoặc dừng lại.",
    image: null,
    source_ref: "PUB 95 – Chương 3, câu hỏi ôn tập #38 (trang in 65–77)"
  },
  {
    id: "q-042",
    topic: "driving-skills",
    question_vi: "Trên đường hai làn, hai chiều hoặc đường cao tốc, quý vị nên bắt đầu rẽ trái:",
    choices_vi: ["Gần với vạch trung tâm", "Gần với vạch phía ngoài", "Ở giữa làn đường", "Bất cứ vị trí nào trong làn đường"],
    correct_answer: 0,
    explanation_vi: "Trên đường hai làn hai chiều, bắt đầu rẽ trái từ vị trí gần vạch trung tâm.",
    image: null,
    source_ref: "PUB 95 – Chương 3, câu hỏi ôn tập #61 (trang in 65–77)"
  },
  {
    id: "q-043",
    topic: "driving-skills",
    question_vi: "Để rẽ trái trên đường nhiều làn và đường cao tốc, quý vị nên bắt đầu từ:",
    choices_vi: ["Giữa giao lộ", "Làn bên phải", "Làn bên trái", "Bất kỳ làn nào"],
    correct_answer: 2,
    explanation_vi: "Để rẽ trái trên đường nhiều làn, bắt đầu từ làn bên trái.",
    image: null,
    source_ref: "PUB 95 – Chương 3, câu hỏi ôn tập #62 (trang in 65–77)"
  },
  {
    id: "q-044",
    topic: "driving-skills",
    question_vi: "Điều quan trọng nhất cần nhớ về kiểm soát tốc độ và khúc cua là:",
    choices_vi: ["Lái xe ở tốc độ giới hạn cho phép khi quý vị đi vào khúc cua, sau đó giảm tốc độ ở đoạn cua gắt nhất", "Giảm tốc độ trước khi quý vị đi vào khúc cua", "Tăng tốc độ nhẹ nhàng trước khi vào khúc cua", "Lái xe với tốc độ cho phép trước, trong và sau khúc cua"],
    correct_answer: 1,
    explanation_vi: "Hãy giảm tốc độ trước khi đi vào khúc cua.",
    image: null,
    source_ref: "PUB 95 – Chương 3, câu hỏi ôn tập #66 (trang in 65–77)"
  },
  {
    id: "q-045",
    topic: "driving-skills",
    question_vi: "Khi rẽ, quý vị phải ___ tốc độ của quý vị.",
    choices_vi: ["Gia tăng", "Giữ nguyên", "Thay đổi", "Giảm bớt"],
    correct_answer: 3,
    explanation_vi: "Khi rẽ, bạn phải giảm bớt tốc độ.",
    image: null,
    source_ref: "PUB 95 – Chương 3, câu hỏi ôn tập #82 (trang in 65–77)"
  },
  {
    id: "q-046",
    topic: "driving-skills",
    question_vi: "Giới hạn tốc độ tối đa ở tiểu bang này là ___ dặm một giờ.",
    choices_vi: ["55", "50", "60", "70"],
    correct_answer: 3,
    explanation_vi: "Giới hạn tốc độ tối đa ở tiểu bang này là 70 dặm/giờ.",
    image: null,
    source_ref: "PUB 95 – Chương 3, câu hỏi ôn tập #84 (trang in 65–77)"
  },
  {
    id: "q-047",
    topic: "driving-skills",
    question_vi: "Ở tốc độ đường cao tốc, trên đường khô, khoảng cách an toàn tối thiểu với xe phía trước là:",
    choices_vi: ["khoảng cách 3 giây từ xe phía trước của quý vị", "khoảng cách 2 giây từ xe phía trước của quý vị", "khoảng cách 4 giây từ xe phía trước của quý vị", "khoảng cách 2 chiều dài ô tô từ xe phía trước của quý vị"],
    correct_answer: 2,
    explanation_vi: "Ở tốc độ đường cao tốc trên đường khô, giữ khoảng cách tối thiểu 4 giây với xe phía trước.",
    image: null,
    source_ref: "PUB 95 – Chương 3, câu hỏi ôn tập #90 (trang in 65–77)"
  },
  {
    id: "q-048",
    topic: "driving-skills",
    question_vi: "Nếu đuôi xe của quý vị bắt đầu trượt sang bên trái, quý vị nên:",
    choices_vi: ["Đánh lái sang bên trái", "Đạp phanh", "Tăng tốc", "Đánh lái sang bên phải"],
    correct_answer: 0,
    explanation_vi: "Khi đuôi xe trượt sang trái, hãy đánh lái sang trái (về hướng xe trượt).",
    image: null,
    source_ref: "PUB 95 – Chương 3, câu hỏi ôn tập #94 (trang in 65–77)"
  },
  {
    id: "q-049",
    topic: "driving-skills",
    question_vi: "Khi lái xe trên đường trơn, quý vị nên:",
    choices_vi: ["Rẽ chậm hơn", "Chuyển làn nhanh chóng", "Tăng tốc nhanh chóng", "Phanh gấp"],
    correct_answer: 0,
    explanation_vi: "Trên đường trơn, hãy rẽ chậm hơn.",
    image: null,
    source_ref: "PUB 95 – Chương 3, câu hỏi ôn tập #96 (trang in 65–77)"
  },
  {
    id: "q-050",
    topic: "driving-skills",
    question_vi: "Khi lái xe trong sương mù, quý vị nên sử dụng ___ của quý vị.",
    choices_vi: ["Đèn pha luồng sáng thấp", "Đèn pha luồng sáng cao", "Đèn đậu xe", "Đèn nháy cảnh báo nguy hiểm"],
    correct_answer: 0,
    explanation_vi: "Khi lái xe trong sương mù, dùng đèn pha luồng sáng thấp (đèn cốt).",
    image: null,
    source_ref: "PUB 95 – Chương 3, câu hỏi ôn tập #105 (trang in 65–77)"
  },
  {
    id: "q-051",
    topic: "yield-park-safety",
    question_vi: "Khi vượt xe đạp, quý vị nên:",
    choices_vi: ["Bấm còi để cảnh báo người đi xe đạp", "Di chuyển càng xa sang bên trái càng tốt", "Duy trì ở giữa làn đường", "Bật đèn nháy bốn chiều"],
    correct_answer: 1,
    explanation_vi: "Khi vượt người đi xe đạp, hãy dịch sang trái nhiều nhất có thể để chừa khoảng trống an toàn.",
    image: null,
    source_ref: "PUB 95 – Chương 3, câu hỏi ôn tập #5 (trang in 65–77)"
  },
  {
    id: "q-052",
    topic: "yield-park-safety",
    question_vi: "Khi quý vị lái xe qua một khu vực có trẻ em đang chơi, quý vị sẽ hy vọng trẻ em:",
    choices_vi: ["Biết thời điểm an toàn để băng qua đường", "Dừng lại ở lề đường trước khi băng qua đường", "Chạy ra trước mặt quý vị mà không quan sát", "Không băng qua đường trừ khi đi cùng người lớn"],
    correct_answer: 2,
    explanation_vi: "Ở khu vực có trẻ em đang chơi, hãy đề phòng trẻ có thể chạy ra đường mà không quan sát.",
    image: null,
    source_ref: "PUB 95 – Chương 3, câu hỏi ôn tập #6 (trang in 65–77)"
  },
  {
    id: "q-053",
    topic: "yield-park-safety",
    question_vi: "Quý vị cần phải đặc biệt thận trọng khi lái xe gần một người đi bộ sử dụng gậy trắng vì:",
    choices_vi: ["Họ bị khiếm thính", "Họ bị thiểu năng trí tuệ", "Họ bị khiếm thị", "Họ có vấn đề về đi lại"],
    correct_answer: 2,
    explanation_vi: "Người đi bộ cầm gậy trắng là người khiếm thị — hãy đặc biệt thận trọng.",
    image: null,
    source_ref: "PUB 95 – Chương 3, câu hỏi ôn tập #9 (trang in 65–77)"
  },
  {
    id: "q-054",
    topic: "yield-park-safety",
    question_vi: "Ai phải nhường đường khi người lái xe đang rẽ và người đi bộ băng qua đường mà không có đèn tín hiệu giao thông?",
    choices_vi: ["Người bắt đầu sau", "Người lái xe", "Người đi chậm hơn", "Người đi bộ"],
    correct_answer: 1,
    explanation_vi: "Khi rẽ và có người đi bộ băng qua đường không có đèn tín hiệu, người lái xe phải nhường đường.",
    image: null,
    source_ref: "PUB 95 – Chương 3, câu hỏi ôn tập #11 (trang in 65–77)"
  },
  {
    id: "q-055",
    topic: "yield-park-safety",
    question_vi: "Nếu quý vị dừng lại ở điểm giao nhau đường sắt có nhiều hơn một đường ray",
    choices_vi: ["Chờ cho đến khi quý vị nhìn rõ cả hai đường ray", "Dừng lại trên đường ray và quan sát chuyến tàu khác", "Đi qua ngay khi tàu chạy qua", "Đi qua khi một trong các đường ray đã trống"],
    correct_answer: 0,
    explanation_vi: "Tại đường sắt có nhiều đường ray, hãy chờ tới khi nhìn rõ cả hai phía đường ray rồi mới qua.",
    image: null,
    source_ref: "PUB 95 – Chương 3, câu hỏi ôn tập #16 (trang in 65–77)"
  },
  {
    id: "q-056",
    topic: "yield-park-safety",
    question_vi: "Sau khi tàu hỏa đã đi qua, quý vị nên:",
    choices_vi: ["Kiểm tra xem có đoàn tàu nào đang đến gần không và lái xe một cách thận trọng", "Chờ đèn xanh", "Lái xe qua các đường ray", "Bấm còi và lái xe đi"],
    correct_answer: 0,
    explanation_vi: "Sau khi tàu đi qua, hãy kiểm tra xem có tàu khác đang tới không rồi mới qua một cách thận trọng.",
    image: null,
    source_ref: "PUB 95 – Chương 3, câu hỏi ôn tập #20 (trang in 65–77)"
  },
  {
    id: "q-057",
    topic: "yield-park-safety",
    question_vi: "Khi quý vị nghe thấy tiếng còi xe cứu hỏa, quý vị phải:",
    choices_vi: ["Giảm tốc độ cho đến khi xe cứu hỏa vượt qua quý vị", "Bật đèn nháy", "Tấp vào lề đường và dừng lại", "Tăng tốc và đi theo lối ra gần nhất"],
    correct_answer: 2,
    explanation_vi: "Khi nghe tiếng còi xe cứu hỏa, hãy tấp vào lề và dừng lại.",
    image: null,
    source_ref: "PUB 95 – Chương 3, câu hỏi ôn tập #53 (trang in 65–77)"
  },
  {
    id: "q-058",
    topic: "yield-park-safety",
    question_vi: "Người lái xe đi vào vòng xuyến hoặc bùng binh:",
    choices_vi: ["Phải dừng xe trước khi lái vào", "Phải nhường đường cho những người lái xe ở trong bùng binh hoặc vòng xuyến", "Được quyền ưu tiên nếu họ đến trước", "Được quyền ưu tiên nếu có hai làn đường"],
    correct_answer: 1,
    explanation_vi: "Khi vào vòng xuyến (bùng binh), phải nhường đường cho xe đã ở trong vòng xuyến.",
    image: null,
    source_ref: "PUB 95 – Chương 3, câu hỏi ôn tập #67 (trang in 65–77)"
  },
  {
    id: "q-059",
    topic: "yield-park-safety",
    question_vi: "Tại giao lộ có biển báo dừng, quý vị phải dừng xe và:",
    choices_vi: ["Kiểm tra kính chiếu hậu xem có xe nào đi phía sau không", "Di chuyển khi xe phía trước quý vị di chuyển", "Nhìn sang phải trước, rồi sang trái, sau đó lại nhìn sang phải", "Nhìn sang trái trước, rồi sang phải, sau đó lại nhìn sang trái"],
    correct_answer: 3,
    explanation_vi: "Tại giao lộ có biển DỪNG, hãy dừng và nhìn trái, rồi phải, rồi lại nhìn trái.",
    image: null,
    source_ref: "PUB 95 – Chương 3, câu hỏi ôn tập #69 (trang in 65–77)"
  },
  {
    id: "q-060",
    topic: "yield-park-safety",
    question_vi: "Khi không có biển báo, tín hiệu hoặc cảnh sát làm nhiệm vụ chỉ dẫn tại giao lộ, luật quy định rằng:",
    choices_vi: ["Người lái xe bên phải phải nhường đường cho người lái xe bên trái", "Không có luật nào quy định ai phải nhường đường", "Người lái xe đi thẳng phải nhường đường cho người lái xe rẽ trái tại giao lộ", "Người lái xe rẽ trái phải nhường đường cho người lái xe đi thẳng qua giao lộ"],
    correct_answer: 3,
    explanation_vi: "Khi không có biển báo/tín hiệu, người rẽ trái phải nhường cho người đi thẳng qua giao lộ.",
    image: null,
    source_ref: "PUB 95 – Chương 3, câu hỏi ôn tập #75 (trang in 65–77)"
  },
  {
    id: "q-061",
    topic: "yield-park-safety",
    question_vi: "Việc hiệu quả nhất quý vị có thể làm để giảm thiểu nguy cơ thương tích hoặc tử vong trong một vụ va chạm giao thông là:",
    choices_vi: ["Thắt dây an toàn của quý vị", "Chỉ lái xe vào các ngày trong tuần", "Đi đúng làn đường bên phải trên đường cao tốc nhiều làn", "Chỉ lái xe trong khoảng thời gian từ 3 giờ chiều đến 6 giờ chiều"],
    correct_answer: 0,
    explanation_vi: "Thắt dây an toàn là việc hiệu quả nhất để giảm nguy cơ thương tích hoặc tử vong khi va chạm.",
    image: null,
    source_ref: "PUB 95 – Chương 3, câu hỏi ôn tập #95 (trang in 65–77)"
  },
  {
    id: "q-062",
    topic: "yield-park-safety",
    question_vi: "Khi đến gần một xe buýt trường học có đèn nhấp nháy và thanh chặn mở rộng, quý vị phải:",
    choices_vi: ["Dừng cách xe buýt 5 feet", "Chỉ dừng xe nếu quý vị thấy có trẻ em trên xe", "Dừng xe và tiếp tục dừng cho đến khi có vẻ an toàn để đi tiếp", "Dừng xe và tiếp tục dừng cho đến khi đèn đỏ ngừng nhấp nháy và thanh chặn đã được rút lại"],
    correct_answer: 3,
    explanation_vi: "Khi gặp xe buýt trường học bật đèn đỏ nhấp nháy và mở thanh chặn, hãy dừng cho tới khi đèn tắt và thanh chặn được rút lại.",
    image: null,
    source_ref: "PUB 95 – Chương 3, câu hỏi ôn tập #110 (trang in 65–77)"
  },
  {
    id: "q-063",
    topic: "yield-park-safety",
    question_vi: "Nếu xe quý vị bị nổ lốp, quý vị nên:",
    choices_vi: ["Để vô lăng di chuyển tự do", "Cho xe chạy chậm lại đến điểm dừng", "Tiếp tục lái xe cho đến khi quý vị đến ga ra", "Phanh gấp để dừng xe ngay lập tức"],
    correct_answer: 1,
    explanation_vi: "Nếu nổ lốp, hãy giữ vô-lăng và cho xe chậm lại dần đến điểm dừng (không phanh gấp).",
    image: null,
    source_ref: "PUB 95 – Chương 3, câu hỏi ôn tập #54 (trang in 65–77)"
  },
  {
    id: "q-064",
    topic: "dui-distracted",
    question_vi: "Nếu quý vị bắt đầu cảm thấy mệt mỏi khi lái xe, điều tốt nhất cần làm là:",
    choices_vi: ["Uống chút cà phê", "Mở cửa sổ xe", "Dừng lái xe", "Bật radio"],
    correct_answer: 2,
    explanation_vi: "Khi bắt đầu thấy mệt mỏi, điều tốt nhất là dừng việc lái xe.",
    image: null,
    source_ref: "PUB 95 – Chương 3, câu hỏi ôn tập #43 (trang in 65–77)"
  },
  {
    id: "q-065",
    topic: "dui-distracted",
    question_vi: "Tác động của việc thiếu ngủ đối với khả năng lái xe an toàn cũng giống như:",
    choices_vi: ["Tác động của rượu", "Tác động của amphetamine", "Tác động của cơn giận dữ", "Tác động của việc lái xe đối với thanh thiếu niên"],
    correct_answer: 0,
    explanation_vi: "Thiếu ngủ ảnh hưởng đến khả năng lái xe tương tự như tác động của rượu.",
    image: null,
    source_ref: "PUB 95 – Chương 3, câu hỏi ôn tập #44 (trang in 65–77)"
  },
  {
    id: "q-066",
    topic: "dui-distracted",
    question_vi: "Đối với một người bình thường, cơ thể cần bao nhiêu phút để 1 cốc rượu hết tác dụng?",
    choices_vi: ["15", "60", "90", "30"],
    correct_answer: 1,
    explanation_vi: "Cơ thể một người bình thường cần khoảng 60 phút để xử lý lượng cồn trong một cốc rượu.",
    image: null,
    source_ref: "PUB 95 – Chương 3, câu hỏi ôn tập #48 (trang in 65–77)"
  },
  {
    id: "q-067",
    topic: "dui-distracted",
    question_vi: "___ hạn chế khả năng tập trung, suy nghĩ, phán đoán và ghi nhớ của quý vị.",
    choices_vi: ["Chỉ khi nồng độ cồn trong máu lớn hơn giới hạn theo quy định", "Rượu không gây nên tác động này", "Ngay cả với lượng rượu nhỏ nhất", "Chỉ khi nồng độ cồn trong máu lớn hơn 0,05"],
    correct_answer: 2,
    explanation_vi: "Rượu làm giảm khả năng tập trung, suy nghĩ, phán đoán và ghi nhớ — ngay cả với lượng nhỏ nhất.",
    image: null,
    source_ref: "PUB 95 – Chương 3, câu hỏi ôn tập #49 (trang in 65–77)"
  },
  {
    id: "q-068",
    topic: "dui-distracted",
    question_vi: "Dùng thuốc cùng với rượu:",
    choices_vi: ["Tăng nguy cơ gây ra va chạm", "Không nguy hiểm hơn so với khi chỉ uống rượu", "Giảm tác động của rượu đến khả năng lái xe của quý vị", "Không ảnh hưởng đến khả năng lái xe tổng thể của quý vị"],
    correct_answer: 0,
    explanation_vi: "Dùng thuốc cùng với rượu làm tăng nguy cơ gây va chạm.",
    image: null,
    source_ref: "PUB 95 – Chương 3, câu hỏi ôn tập #50 (trang in 65–77)"
  },
  {
    id: "q-069",
    topic: "dui-distracted",
    question_vi: "Nếu nông độ cồn trong máu của quý vị là 0,04, quý vị:",
    choices_vi: ["Có nguy cơ xảy ra va chạm cao gấp 2 - 7 lần so với người không uống rượu", "Trên giới hạn nồng độ cồn trong máu theo quy định nhưng vẫn lái xe được", "Chắc chắn rằng quý vị vẫn có thể lái xe an toàn", "Nên uống thêm nhiều cà phê trước khi ngồi sau vô lăng ô tô"],
    correct_answer: 0,
    explanation_vi: "Với BAC 0,04, nguy cơ va chạm cao gấp 2–7 lần so với người không uống rượu.",
    image: null,
    source_ref: "PUB 95 – Chương 3, câu hỏi ôn tập #52 (trang in 65–77)"
  },
  {
    id: "q-070",
    topic: "dui-distracted",
    question_vi: "Những người lái xe bị sao lãng có nguy cơ xảy ra va chạm lớn hơn khi họ đang sử dụng những điều sau đây:",
    choices_vi: ["Máy nghe đĩa CD", "Radio", "Điện thoại di động", "Tất cả các đáp án trên"],
    correct_answer: 3,
    explanation_vi: "Điện thoại di động, radio và máy nghe nhạc đều có thể gây sao lãng và tăng nguy cơ va chạm.",
    image: null,
    source_ref: "PUB 95 – Chương 3, câu hỏi ôn tập #108 (trang in 65–77)"
  },
  {
    id: "q-071",
    topic: "dui-distracted",
    question_vi: "Độ tuổi tối thiểu được phép uống rượu ở tiểu bang này là ___ tuổi.",
    choices_vi: ["9", "20", "21", "18"],
    correct_answer: 2,
    explanation_vi: "Độ tuổi tối thiểu được phép uống rượu ở tiểu bang này là 21 tuổi.",
    image: null,
    source_ref: "PUB 95 – Chương 4, câu hỏi ôn tập #1 (trang in 86–87)"
  },
  {
    id: "q-072",
    topic: "dui-distracted",
    question_vi: "Nếu một sĩ quan cảnh sát yêu cầu quý vị làm xét nghiệm máu, hơi thở, hoặc nước tiểu, quý vị:",
    choices_vi: ["Có thể chọn loại xét nghiệm quý vị muốn", "Phải ký vào mẫu chấp thuận", "Có thể từ chối nếu chưa đủ tuổi", "Phải làm xét nghiệm, nếu không quý vị sẽ bị đình chỉ bằng lái xe"],
    correct_answer: 3,
    explanation_vi: "Khi cảnh sát yêu cầu xét nghiệm máu/hơi thở/nước tiểu, bạn phải làm, nếu không sẽ bị đình chỉ bằng lái.",
    image: null,
    source_ref: "PUB 95 – Chương 4, câu hỏi ôn tập #10 (trang in 86–87)"
  },
  {
    id: "q-073",
    topic: "dui-distracted",
    question_vi: "Nếu quý vị dưới 21 tuổi và bị kết tội lái xe dưới tác động của rượu bia, quý vị sẽ bị đình chỉ bằng lái xe ___ cho lần kết tội đầu tiên.",
    choices_vi: ["60 ngày", "30 ngày", "6 tháng", "1 năm"],
    correct_answer: 3,
    explanation_vi: "Người dưới 21 tuổi bị kết tội DUI sẽ bị đình chỉ bằng lái 1 năm cho lần đầu.",
    image: null,
    source_ref: "PUB 95 – Chương 4, câu hỏi ôn tập #13 (trang in 86–87)"
  }
];
