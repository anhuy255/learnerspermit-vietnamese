// Study topics in Vietnamese.
// Content is paraphrased lightly from PennDOT PUB 95 (bản tiếng Việt) for readability.
// Do NOT add rules that are not in the handbook.
//
// These sections are written to cover the material tested by the practice-test
// question bank (data/questions.js). When you add quiz questions, add the
// matching study point here too.
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
          "Trên đèn dọc, thứ tự từ trên xuống là: đỏ – vàng – xanh.",
          "Đèn đỏ: dừng lại hoàn toàn trước vạch dừng hoặc lối đi bộ.",
          "Đèn vàng: đèn sắp chuyển sang đỏ — chuẩn bị dừng lại nếu có thể dừng an toàn.",
          "Đèn xanh: được đi nếu đường phía trước thông thoáng; vẫn phải nhường cho xe và người đi bộ còn trong giao lộ.",
          "Đèn đỏ nhấp nháy: xử lý như biển DỪNG (STOP) — dừng hẳn rồi mới đi.",
          "Đèn vàng nhấp nháy: giảm tốc độ và đi qua một cách thận trọng.",
          "Nếu đèn tín hiệu bị hỏng hoặc không hoạt động: coi giao lộ như có biển DỪNG bốn hướng.",
          "Mũi tên xanh: được đi/rẽ theo hướng mũi tên; hướng đó đã được bảo vệ.",
          "Mũi tên vàng nhấp nháy: được rẽ, nhưng trước tiên phải nhường đường cho xe đang tới và người đi bộ."
        ],
        source_ref: "PUB 95 – Chương 2: Đèn giao thông"
      },
      {
        heading_vi: "Rẽ khi đèn đỏ",
        points_vi: [
          "Rẽ phải khi đèn đỏ: được phép sau khi dừng hẳn và nhường đường cho xe cùng người đi bộ — trừ khi có biển cấm hoặc mũi tên đỏ.",
          "Rẽ trái khi đèn đỏ: chỉ được phép khi rẽ từ một đường một chiều sang một đường một chiều khác (sau khi dừng hẳn).",
          "Khi rẽ phải lúc đèn xanh, vẫn phải nhường đường cho người đi bộ đang băng qua."
        ],
        source_ref: "PUB 95 – Chương 2: Rẽ tại đèn tín hiệu"
      },
      {
        heading_vi: "Khu vực trường học",
        points_vi: [
          "Khi đèn vàng nhấp nháy phía trên biển giới hạn tốc độ khu vực trường học, tốc độ tối đa là 15 dặm/giờ.",
          "Vượt quá tốc độ trong khu vực trường học bị tính 3 điểm phạt và bị phạt tiền."
        ],
        source_ref: "PUB 95 – Chương 2: Đèn tín hiệu khu vực trường học"
      },
      {
        heading_vi: "Hình dạng và màu biển báo",
        points_vi: [
          "Hình bát giác (8 cạnh) màu đỏ: biển DỪNG (STOP).",
          "Hình tam giác ngược màu đỏ-trắng: NHƯỜNG ĐƯỜNG (YIELD).",
          "Hình thoi màu vàng-đen: biển cảnh báo điều kiện trên hoặc gần mặt đường phía trước.",
          "Hình thoi màu cam (chữ đen): khu vực công trường — giảm tốc và cảnh giác.",
          "Hình ngũ giác: khu vực trường học hoặc lối qua đường của học sinh.",
          "Hình tròn: cảnh báo có đường ray xe lửa phía trước.",
          "Vòng tròn đỏ có gạch chéo: biển cấm (cấm quay đầu, cấm rẽ, cấm đỗ...).",
          "Biển chỉ dẫn trên xa lộ/đường cao tốc: nền màu xanh lá cây, chữ trắng.",
          "Biển báo dịch vụ: nền màu xanh dương, biểu tượng trắng (xăng, bệnh viện, ăn uống, lưu trú...).",
          "Biển đánh dấu hình đá đỉnh vòm (keystone): tuyến đường tiểu bang của Pennsylvania."
        ],
        source_ref: "PUB 95 – Chương 2: Hình dạng và màu biển báo"
      },
      {
        heading_vi: "Vạch kẻ đường",
        points_vi: [
          "Vạch vàng phân chia hai chiều xe chạy ngược nhau; vạch trắng phân chia các làn xe đi cùng một chiều.",
          "Vạch vàng liền: cấm vượt (cấm lấn sang làn ngược chiều).",
          "Vạch vàng đứt: được vượt khi an toàn.",
          "Vạch vàng kép liền: cấm vượt ở cả hai chiều.",
          "Mép đường bên phải được đánh dấu bằng vạch trắng liền; vạch trắng đứt cho phép đổi làn."
        ],
        source_ref: "PUB 95 – Chương 2: Vạch kẻ đường"
      }
    ]
  },
  {
    id: "driving-skills",
    title_vi: "Kỹ năng lái xe",
    blurb_vi: "Khoảng cách an toàn, quan sát, rẽ và khúc cua, đèn pha, xử lý trơn trượt.",
    sections: [
      {
        heading_vi: "Khoảng cách theo sau",
        points_vi: [
          "Dùng quy tắc bốn (4) giây: chọn một vật cố định bên đường; khi xe phía trước đi qua, đếm bốn giây trước khi xe bạn tới vật đó. Chưa đầy 4 giây là đang đi quá sát.",
          "Ở tốc độ đường cao tốc trên đường khô, khoảng cách tối thiểu là 4 giây.",
          "Tăng khoảng cách khi trời mưa, đường trơn, sương mù, hoặc khi chạy nhanh.",
          "Giữ khoảng cách giúp bạn có đủ thời gian phản ứng và tránh phải phanh gấp."
        ],
        source_ref: "PUB 95 – Chương 3: Khoảng cách theo sau"
      },
      {
        heading_vi: "Quan sát, điểm mù và chuyển làn",
        points_vi: [
          "Vào ban đêm, người đi bộ là đối tượng khó nhìn thấy nhất.",
          "Điểm mù là khu vực bạn không thể nhìn thấy nếu không quay đầu lại quan sát.",
          "Trước khi chuyển làn: kiểm tra kính chiếu hậu và ngoái nhìn điểm mù.",
          "Trước khi lùi xe: quay đầu lại và nhìn qua cửa sổ phía sau.",
          "Bật đèn xi nhan đủ sớm để người khác biết ý định của bạn.",
          "Đèn phanh cho người phía sau biết bạn đang giảm tốc độ hoặc dừng lại."
        ],
        source_ref: "PUB 95 – Chương 3: Quan sát và giao tiếp trên đường"
      },
      {
        heading_vi: "Rẽ, khúc cua và tốc độ",
        points_vi: [
          "Giảm tốc độ trước khi đi vào khúc cua.",
          "Khi rẽ, phải giảm bớt tốc độ.",
          "Trên đường hai làn hai chiều, bắt đầu rẽ trái từ vị trí gần vạch trung tâm.",
          "Trên đường nhiều làn, rẽ trái bắt đầu từ làn bên trái.",
          "Giới hạn tốc độ tối đa ở Pennsylvania là 70 dặm/giờ; luôn lái theo dòng xe và điều kiện đường."
        ],
        source_ref: "PUB 95 – Chương 3: Rẽ và kiểm soát tốc độ"
      },
      {
        heading_vi: "Đèn pha và tầm nhìn",
        points_vi: [
          "Theo luật Pennsylvania, khi bật cần gạt nước thì phải bật đèn (đèn chiếu gần).",
          "Hạ đèn chiếu xa khi còn cách xe ngược chiều khoảng 500 feet.",
          "Hạ đèn chiếu xa khi đi sau một xe khác trong khoảng 300 feet.",
          "Khi lái xe trong sương mù, dùng đèn chiếu gần (luồng sáng thấp) — đèn chiếu xa sẽ phản chiếu lại gây khó nhìn.",
          "Bật đèn lúc hoàng hôn, bình minh, và khi tầm nhìn kém."
        ],
        source_ref: "PUB 95 – Chương 3: Đèn xe và tầm nhìn"
      },
      {
        heading_vi: "Xử lý trơn trượt và trượt nước",
        points_vi: [
          "Khi xe bị trượt, nhả chân ga và đánh lái nhẹ về hướng bạn muốn xe đi tới (hướng xe đang trượt). Không đạp phanh gấp.",
          "Trượt nước (hydroplaning): nhả nhẹ chân ga và giữ vô-lăng thẳng cho tới khi lốp bám lại mặt đường.",
          "Trên đường trơn hoặc ướt: rẽ chậm hơn, giảm tốc độ và tăng khoảng cách với xe phía trước."
        ],
        source_ref: "PUB 95 – Chương 3: Lái xe trong điều kiện xấu"
      }
    ]
  },
  {
    id: "yield-park-safety",
    title_vi: "Nhường đường, đỗ xe, an toàn",
    blurb_vi: "Nhường quyền ưu tiên, chia sẻ đường, đỗ xe, xe buýt trường học và an toàn.",
    sections: [
      {
        heading_vi: "Nhường quyền ưu tiên",
        points_vi: [
          "Luôn nhường đường cho người đi bộ trên lối qua đường; khi rẽ mà có người đi bộ băng qua (không có đèn tín hiệu), người lái phải nhường.",
          "Nhường đường cho xe cấp cứu đang hú còi/nhấp đèn: tấp vào lề phải và dừng lại.",
          "Tại giao lộ bốn chiều: xe đến trước đi trước; nếu đến cùng lúc, nhường cho xe bên phải.",
          "Khi vào vòng xuyến (bùng binh): nhường đường cho các xe đã ở trong vòng xuyến.",
          "Khi rẽ trái: nhường đường cho xe đang đi thẳng tới từ hướng ngược lại.",
          "Khi không có biển báo/tín hiệu, người rẽ trái phải nhường cho người đi thẳng qua giao lộ."
        ],
        source_ref: "PUB 95 – Chương 3: Nhường quyền ưu tiên"
      },
      {
        heading_vi: "Chia sẻ đường & người dễ bị tổn thương",
        points_vi: [
          "Khi vượt người đi xe đạp, dịch sang trái nhiều nhất có thể để chừa khoảng trống an toàn.",
          "Ở khu vực có trẻ em đang chơi, hãy đề phòng trẻ có thể chạy ra đường mà không quan sát.",
          "Người đi bộ cầm gậy trắng (hoặc có chó dẫn đường) là người khiếm thị — giảm tốc, luôn nhường và sẵn sàng dừng lại."
        ],
        source_ref: "PUB 95 – Chương 3: Chia sẻ đường"
      },
      {
        heading_vi: "Giao lộ và đường sắt",
        points_vi: [
          "Tại giao lộ có biển DỪNG: dừng hẳn, nhìn sang trái trước, rồi sang phải, sau đó lại nhìn sang trái trước khi đi.",
          "Tại điểm giao với đường sắt có nhiều đường ray: chờ đến khi nhìn rõ cả hai phía đường ray rồi mới qua.",
          "Sau khi một đoàn tàu đi qua: kiểm tra xem có tàu khác đang tới không, rồi mới đi qua một cách thận trọng."
        ],
        source_ref: "PUB 95 – Chương 3: Giao lộ và đường sắt"
      },
      {
        heading_vi: "Đỗ xe",
        points_vi: [
          "Đỗ xe cách lề đường không quá 12 inch.",
          "Không đỗ trong vòng 15 feet tính từ cột nước cứu hỏa.",
          "Không đỗ trên lối qua đường, trên vỉa hè, hoặc chắn lối xe.",
          "Khi đỗ trên dốc có lề đường, quay bánh xe để xe không trôi ra đường nếu phanh hỏng."
        ],
        source_ref: "PUB 95 – Chương 3: Đỗ xe"
      },
      {
        heading_vi: "Xe buýt trường học, dây an toàn & tình huống khẩn cấp",
        points_vi: [
          "Khi xe buýt trường học bật đèn đỏ nhấp nháy và mở thanh chặn, xe ở CẢ HAI chiều phải dừng lại, cách ít nhất 10 feet.",
          "Chỉ đi tiếp khi đèn đỏ ngừng nhấp nháy và thanh chặn đã được rút lại.",
          "Thắt dây an toàn là việc hiệu quả nhất để giảm nguy cơ thương tích hoặc tử vong khi va chạm.",
          "Nếu nổ lốp: giữ chắc vô-lăng, nhả chân ga và cho xe chạy chậm lại đến điểm dừng — không phanh gấp.",
          "Nếu xe hỏng trên đường cao tốc: bật đèn nháy khẩn cấp bốn chiều để cảnh báo xe khác."
        ],
        source_ref: "PUB 95 – Chương 3: Xe buýt trường học và an toàn"
      }
    ]
  },
  {
    id: "dui-distracted",
    title_vi: "DUI, nhắn tin khi lái xe, và các quy định liên quan",
    blurb_vi: "Nồng độ cồn, lái xe khi mệt, mất tập trung, đồng ý ngầm và hệ thống điểm phạt.",
    sections: [
      {
        heading_vi: "Lái xe khi say (DUI)",
        points_vi: [
          "Độ tuổi tối thiểu được phép uống rượu ở tiểu bang này là 21 tuổi.",
          "Người từ 21 tuổi trở lên: phạm tội DUI khi nồng độ cồn trong máu (BAC) từ 0,08% trở lên.",
          "Người dưới 21 tuổi: áp dụng quy định không khoan nhượng — BAC từ 0,02% là vi phạm.",
          "Tài xế xe thương mại: giới hạn BAC là 0,04%.",
          "Rượu làm giảm khả năng tập trung, suy nghĩ, phán đoán và ghi nhớ — ngay cả với lượng nhỏ nhất.",
          "Với BAC 0,04, nguy cơ va chạm cao gấp 2–7 lần so với người không uống rượu.",
          "Dùng thuốc cùng với rượu làm tăng nguy cơ va chạm.",
          "Cơ thể một người bình thường cần khoảng 60 phút để xử lý lượng cồn trong một cốc rượu; chỉ có thời gian mới giúp tỉnh táo."
        ],
        source_ref: "PUB 95 – Chương 3: RƯỢU BIA VÀ LÁI XE (trang in 33–34); hình phạt: Chương 4"
      },
      {
        heading_vi: "Đồng ý ngầm & hình phạt DUI",
        points_vi: [
          "Khi lái xe ở Pennsylvania, bạn đã ngầm đồng ý xét nghiệm nồng độ cồn (Luật Đồng Ý Ngầm Định).",
          "Nếu cảnh sát yêu cầu xét nghiệm máu/hơi thở/nước tiểu, bạn phải làm; từ chối sẽ bị đình chỉ bằng lái (1 năm cho lần đầu).",
          "Người dưới 21 tuổi bị kết tội DUI sẽ bị đình chỉ bằng lái 1 năm cho lần kết tội đầu tiên."
        ],
        source_ref: "PUB 95 – Chương 4: Luật Đồng Ý Ngầm Định (trang in 82)"
      },
      {
        heading_vi: "Mệt mỏi khi lái xe",
        points_vi: [
          "Khi bắt đầu thấy mệt mỏi, điều tốt nhất cần làm là dừng việc lái xe.",
          "Thiếu ngủ ảnh hưởng đến khả năng lái xe an toàn tương tự như tác động của rượu.",
          "Thanh thiếu niên nên ngủ đủ (ít nhất 8 tiếng) để tránh nguy cơ ngủ gật khi lái."
        ],
        source_ref: "PUB 95 – Chương 3: Mệt mỏi khi lái xe"
      },
      {
        heading_vi: "Nhắn tin và lái xe mất tập trung",
        points_vi: [
          "Pennsylvania cấm nhắn tin (gửi, đọc, soạn tin) khi đang lái xe.",
          "Các thiết bị gây sao lãng như điện thoại di động, radio, máy nghe nhạc đều làm tăng nguy cơ va chạm.",
          "Dừng xe ở nơi an toàn nếu cần dùng điện thoại."
        ],
        source_ref: "PUB 95 – Chương 3 & Chương 5: cấm nhắn tin khi lái xe"
      },
      {
        heading_vi: "Hệ thống điểm phạt",
        points_vi: [
          "PennDOT cộng điểm phạt vào hồ sơ lái xe khi bạn vi phạm một số luật giao thông.",
          "Khi lần đầu đạt 6 điểm trở lên, bạn phải làm một bài kiểm tra viết đặc biệt.",
          "Tích lũy quá nhiều điểm có thể dẫn đến treo bằng lái."
        ],
        source_ref: "PUB 95 – Chương 4: Hệ thống điểm phạt (trang in 79)"
      }
    ]
  }
];

export const TOPIC_BY_ID = Object.fromEntries(TOPICS.map((t) => [t.id, t]));
