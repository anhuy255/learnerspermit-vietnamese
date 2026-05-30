// Study topics in Vietnamese.
// Content is paraphrased lightly from PennDOT PUB 95 (bản tiếng Việt) for readability.
// Do NOT add rules that are not in the handbook.
//
// Schema for each topic:
//   id:        slug used in the URL hash (#/topic/<id>) and in questions.js `topic`
//   title_vi:  topic name shown to the learner (Vietnamese)
//   blurb_vi:  one-line description for the home page
//   sections:  array of { heading_vi, points_vi: string[], source_ref }
//
// `source_ref` points loosely at the handbook chapter so editors can verify wording.

export const TOPICS = [
  {
    id: "signs-signals",
    title_vi: "Đèn tín hiệu, biển báo và vạch kẻ đường",
    blurb_vi: "Ý nghĩa của đèn giao thông, hình dạng và màu biển báo, vạch kẻ đường.",
    sections: [
      {
        heading_vi: "Đèn giao thông",
        points_vi: [
          "Đèn đỏ: dừng lại hoàn toàn trước vạch dừng hoặc lối đi bộ. Có thể rẽ phải khi đèn đỏ sau khi dừng hẳn, trừ khi có biển cấm.",
          "Đèn vàng: đèn sắp chuyển sang đỏ — chuẩn bị dừng lại nếu có thể dừng an toàn.",
          "Đèn xanh: được đi nếu đường phía trước thông thoáng; vẫn phải nhường đường cho xe và người đi bộ còn trong giao lộ.",
          "Đèn đỏ nhấp nháy: xử lý như biển DỪNG (STOP) — dừng hẳn rồi mới đi.",
          "Đèn vàng nhấp nháy: giảm tốc độ và đi qua một cách thận trọng.",
          "Mũi tên xanh: được phép đi theo hướng mũi tên, hướng đó đã được bảo vệ."
        ],
        source_ref: "PUB 95 – Chương 2: Tín hiệu, biển báo và vạch kẻ đường"
      },
      {
        heading_vi: "Hình dạng và màu biển báo",
        points_vi: [
          "Hình bát giác (8 cạnh) màu đỏ: biển DỪNG (STOP).",
          "Hình tam giác ngược màu đỏ-trắng: NHƯỜNG ĐƯỜNG (YIELD).",
          "Màu vàng, hình thoi: biển cảnh báo nguy hiểm phía trước.",
          "Màu cam: khu vực thi công, công trường.",
          "Hình ngũ giác: khu vực trường học hoặc lối qua đường của học sinh.",
          "Hình tròn: cảnh báo có đường ray xe lửa phía trước."
        ],
        source_ref: "PUB 95 – Chương 2: Hình dạng và màu biển báo"
      },
      {
        heading_vi: "Vạch kẻ đường",
        points_vi: [
          "Vạch vàng phân chia hai chiều xe chạy ngược nhau.",
          "Vạch vàng liền: cấm vượt (cấm lấn sang làn ngược chiều).",
          "Vạch vàng đứt: được vượt khi an toàn.",
          "Vạch trắng phân chia các làn xe đi cùng một chiều.",
          "Vạch trắng liền không khuyến khích đổi làn; vạch trắng đứt cho phép đổi làn."
        ],
        source_ref: "PUB 95 – Chương 2: Vạch kẻ đường"
      }
    ]
  },
  {
    id: "driving-skills",
    title_vi: "Kỹ năng lái xe",
    blurb_vi: "Khoảng cách an toàn, xử lý trơn trượt, đèn pha, và kiểm soát xe.",
    sections: [
      {
        heading_vi: "Khoảng cách theo sau",
        points_vi: [
          "Dùng quy tắc bốn giây: chọn một vật cố định bên đường; khi xe phía trước đi qua, đếm bốn giây trước khi xe bạn tới vật đó.",
          "Tăng khoảng cách khi trời mưa, đường trơn, sương mù hoặc khi chạy nhanh.",
          "Giữ khoảng cách giúp bạn có đủ thời gian để phản ứng và phanh."
        ],
        source_ref: "PUB 95 – Chương 3: Kỹ năng lái xe an toàn"
      },
      {
        heading_vi: "Đèn pha và tầm nhìn",
        points_vi: [
          "Theo luật Pennsylvania, khi bật cần gạt nước thì phải bật đèn pha.",
          "Hạ đèn pha (đèn chiếu xa) khi còn cách xe ngược chiều khoảng 500 feet.",
          "Hạ đèn pha khi đi sau một xe khác trong khoảng 300 feet.",
          "Bật đèn pha lúc hoàng hôn, bình minh, và khi tầm nhìn kém."
        ],
        source_ref: "PUB 95 – Chương 3: Đèn xe và tầm nhìn"
      },
      {
        heading_vi: "Xử lý trơn trượt và trượt nước",
        points_vi: [
          "Khi xe bị trượt, nhả chân ga và đánh lái về hướng bạn muốn xe đi tới.",
          "Không đạp phanh gấp khi đang trượt.",
          "Hiện tượng trượt nước (hydroplaning): nhả nhẹ chân ga và giữ vô-lăng thẳng cho tới khi lốp bám lại mặt đường.",
          "Giảm tốc độ trên đường ướt để tránh trượt nước."
        ],
        source_ref: "PUB 95 – Chương 3: Lái xe trong điều kiện xấu"
      }
    ]
  },
  {
    id: "yield-park-safety",
    title_vi: "Nhường đường, đỗ xe, an toàn",
    blurb_vi: "Quy tắc nhường đường, đỗ xe đúng cách, dây an toàn và xe buýt trường học.",
    sections: [
      {
        heading_vi: "Nhường đường",
        points_vi: [
          "Luôn nhường đường cho người đi bộ trên lối qua đường.",
          "Nhường đường cho xe cấp cứu đang hú còi: tấp vào lề phải và dừng lại.",
          "Tại giao lộ bốn chiều, xe đến trước được đi trước; nếu đến cùng lúc, nhường cho xe bên phải.",
          "Khi nhập vào dòng xe, nhường đường cho xe đang chạy trên đường chính."
        ],
        source_ref: "PUB 95 – Chương 3: Nhường quyền ưu tiên"
      },
      {
        heading_vi: "Đỗ xe",
        points_vi: [
          "Đỗ xe cách lề đường không quá 12 inch.",
          "Không đỗ trong vòng 15 feet tính từ vòi nước chữa cháy.",
          "Không đỗ trên lối qua đường, trên vỉa hè, hoặc chắn lối xe.",
          "Khi đỗ trên dốc có lề đường, quay bánh xe để xe không trôi ra đường nếu phanh hỏng."
        ],
        source_ref: "PUB 95 – Chương 3: Đỗ xe"
      },
      {
        heading_vi: "Xe buýt trường học và dây an toàn",
        points_vi: [
          "Khi xe buýt trường học bật đèn đỏ nhấp nháy và mở biển dừng, xe ở cả hai chiều phải dừng lại.",
          "Dừng cách xe buýt trường học ít nhất 10 feet.",
          "Chỉ đi tiếp khi đèn đỏ tắt và biển dừng đã thu lại.",
          "Người lái và hành khách phải thắt dây an toàn; trẻ nhỏ phải dùng ghế an toàn theo quy định."
        ],
        source_ref: "PUB 95 – Chương 3: Xe buýt trường học và an toàn"
      }
    ]
  },
  {
    id: "dui-distracted",
    title_vi: "DUI, nhắn tin khi lái xe, và các quy định liên quan",
    blurb_vi: "Nồng độ cồn, lái xe mất tập trung, đồng ý ngầm và hệ thống điểm phạt.",
    sections: [
      {
        heading_vi: "Lái xe khi say (DUI)",
        points_vi: [
          "Người từ 21 tuổi trở lên: phạm tội DUI khi nồng độ cồn trong máu (BAC) từ 0.08% trở lên.",
          "Người dưới 21 tuổi: áp dụng quy định không khoan nhượng — BAC từ 0.02% là vi phạm.",
          "Tài xế xe thương mại: giới hạn BAC là 0.04%.",
          "Rượu làm giảm khả năng phán đoán, phản xạ và sự tập trung."
        ],
        source_ref: "PUB 95 – Chương 1 & 4: Rượu, ma túy và lái xe"
      },
      {
        heading_vi: "Đồng ý ngầm (Implied Consent)",
        points_vi: [
          "Khi lái xe ở Pennsylvania, bạn đã ngầm đồng ý xét nghiệm nồng độ cồn nếu bị nghi ngờ DUI.",
          "Từ chối xét nghiệm sẽ bị treo bằng lái, ngoài các hình phạt khác."
        ],
        source_ref: "PUB 95 – Chương 4: Luật đồng ý ngầm"
      },
      {
        heading_vi: "Nhắn tin và lái xe mất tập trung",
        points_vi: [
          "Pennsylvania cấm nhắn tin (gửi, đọc, soạn tin) khi đang lái xe.",
          "Lái xe mất tập trung làm tăng nguy cơ tai nạn — hãy tránh dùng điện thoại khi lái.",
          "Dừng xe ở nơi an toàn nếu cần dùng điện thoại."
        ],
        source_ref: "PUB 95 – Chương 4: Lái xe mất tập trung"
      },
      {
        heading_vi: "Hệ thống điểm phạt",
        points_vi: [
          "PennDOT cộng điểm phạt vào hồ sơ lái xe khi bạn vi phạm một số luật giao thông.",
          "Khi lần đầu đạt 6 điểm trở lên, bạn phải làm bài kiểm tra viết đặc biệt.",
          "Tích lũy quá nhiều điểm có thể dẫn đến treo bằng lái."
        ],
        source_ref: "PUB 95 – Chương 4: Hệ thống điểm phạt"
      }
    ]
  }
];

export const TOPIC_BY_ID = Object.fromEntries(TOPICS.map((t) => [t.id, t]));
