// ===========================================================================
// FLASH CARDS  (Thẻ ghi nhớ)  —  visual-first memorization deck.
// Source of truth: PennDOT Sổ Tay Tài Xế (PUB 95, bản tiếng Việt).
// Keep learner-facing text in Vietnamese. Do NOT invent rules.
// ===========================================================================
//
// CARD SCHEMA (one object per card):
//   id            : unique string, e.g. "fc-001"
//   category      : must match a label in FLASHCARD_CATEGORIES below
//   front:
//     image       : filename in /images (e.g. "stop-sign.png") or null
//     title_vi    : short Vietnamese title (keep it short for the front)
//   back:
//     explanation_vi : Vietnamese explanation (1–2 short sentences)
//     english_ref    : optional English term (the official sign/word) or null
//     pronunciation  : optional Việt-friendly cách đọc của từ tiếng Anh or null
//     memory_tip     : one short Vietnamese memory tip ("Mẹo nhớ")
//
// To add a card: copy a block, give it a new id, set the category, and (for
// visual cards) drop the image in /images and set front.image.
// ===========================================================================

// Display order of categories (also used for the category menu).
export const FLASHCARD_CATEGORIES = [
  "Biển báo giao thông",
  "Tín hiệu đèn",
  "Vạch kẻ đường",
  "Luật ưu tiên",
  "Tình huống lái xe",
  "An toàn giao thông"
];

export const FLASHCARDS = [
  // ===== Biển báo giao thông (visual-first) ==============================
  {
    id: "fc-001",
    category: "Biển báo giao thông",
    front: { image: "stop-sign.png", title_vi: "Biển DỪNG LẠI" },
    back: {
      explanation_vi: "Biển hình bát giác (8 cạnh) màu đỏ: phải dừng lại hoàn toàn trước vạch dừng hoặc lối đi bộ, rồi mới đi tiếp khi an toàn.",
      english_ref: "STOP",
      pronunciation: "đọc: xì-tóp",
      memory_tip: "Chỉ duy nhất biển 8 cạnh màu đỏ — thấy là dừng hẳn."
    }
  },
  {
    id: "fc-002",
    category: "Biển báo giao thông",
    front: { image: "do-not-enter.png", title_vi: "Cấm vào" },
    back: {
      explanation_vi: "Đặt ở đầu đường/đường dẫn một chiều. Không được lái xe vào theo hướng này.",
      english_ref: "DO NOT ENTER",
      pronunciation: null,
      memory_tip: "Vòng tròn đỏ + vạch trắng = chặn lối, đừng vào."
    }
  },
  {
    id: "fc-003",
    category: "Biển báo giao thông",
    front: { image: "wrong-way.png", title_vi: "Đi sai đường" },
    back: {
      explanation_vi: "Đặt ở cuối đường một chiều. Nếu thấy biển này nghĩa là bạn đang đi ngược chiều — hãy dừng và quay ra an toàn.",
      english_ref: "WRONG WAY",
      pronunciation: null,
      memory_tip: "Đi kèm với CẤM VÀO; thấy nó là bạn đã đi nhầm chiều."
    }
  },
  {
    id: "fc-004",
    category: "Biển báo giao thông",
    front: { image: "one-way.png", title_vi: "Đường một chiều" },
    back: {
      explanation_vi: "Luồng giao thông chỉ được đi theo hướng mũi tên của biển.",
      english_ref: "ONE WAY",
      pronunciation: null,
      memory_tip: "Đi đúng theo chiều mũi tên đen."
    }
  },
  {
    id: "fc-005",
    category: "Biển báo giao thông",
    front: { image: "no-uturn.png", title_vi: "Cấm quay đầu" },
    back: {
      explanation_vi: "Cấm quay đầu xe (không được rẽ hẳn vào làn ngược chiều) tại vị trí này.",
      english_ref: "NO U-TURN",
      pronunciation: null,
      memory_tip: "Mũi tên chữ U bị gạch chéo = không quay đầu."
    }
  },
  {
    id: "fc-006",
    category: "Biển báo giao thông",
    front: { image: "no-left-turn.png", title_vi: "Cấm rẽ trái" },
    back: {
      explanation_vi: "Không được rẽ trái ở giao lộ có biển này.",
      english_ref: "NO LEFT TURN",
      pronunciation: null,
      memory_tip: "Mũi tên rẽ trái bị gạch chéo đỏ."
    }
  },
  {
    id: "fc-007",
    category: "Biển báo giao thông",
    front: { image: "no-right-turn.png", title_vi: "Cấm rẽ phải" },
    back: {
      explanation_vi: "Không được rẽ phải ở giao lộ có biển này.",
      english_ref: "NO RIGHT TURN",
      pronunciation: null,
      memory_tip: "Biểu tượng bị gạch chéo đỏ = hành vi bị cấm."
    }
  },
  {
    id: "fc-008",
    category: "Biển báo giao thông",
    front: { image: "no-parking.png", title_vi: "Cấm đỗ xe" },
    back: {
      explanation_vi: "Không được đỗ xe tại những vị trí có biển này.",
      english_ref: "NO PARKING",
      pronunciation: null,
      memory_tip: "Chữ P bị gạch chéo = không đỗ."
    }
  },
  {
    id: "fc-009",
    category: "Biển báo giao thông",
    front: { image: "no-trucks.png", title_vi: "Cấm xe tải" },
    back: {
      explanation_vi: "Xe tải không được sử dụng đoạn đường có đặt biển này.",
      english_ref: "NO TRUCKS",
      pronunciation: null,
      memory_tip: "Hình xe tải bị gạch chéo đỏ."
    }
  },
  {
    id: "fc-010",
    category: "Biển báo giao thông",
    front: { image: "no-bicycles.png", title_vi: "Cấm xe đạp" },
    back: {
      explanation_vi: "Xe đạp không được sử dụng lòng đường tại nơi có biển này.",
      english_ref: "NO BICYCLES",
      pronunciation: null,
      memory_tip: "Hình xe đạp bị gạch chéo đỏ."
    }
  },
  {
    id: "fc-011",
    category: "Biển báo giao thông",
    front: { image: "no-pedestrian.png", title_vi: "Cấm người đi bộ qua đường" },
    back: {
      explanation_vi: "Người đi bộ không được băng qua đường tại nơi có biển này.",
      english_ref: "NO PEDESTRIAN CROSSING",
      pronunciation: null,
      memory_tip: "Hình người đi bộ bị gạch chéo đỏ."
    }
  },
  {
    id: "fc-012",
    category: "Biển báo giao thông",
    front: { image: "do-not-pass.png", title_vi: "Cấm vượt" },
    back: {
      explanation_vi: "Cấm vượt các phương tiện khác đi cùng chiều. Thường đi kèm biển vàng hình cờ đuôi nheo 'NO PASSING ZONE'.",
      english_ref: "DO NOT PASS",
      pronunciation: null,
      memory_tip: "Khu vực cấm vượt — giữ nguyên làn."
    }
  },
  {
    id: "fc-013",
    category: "Biển báo giao thông",
    front: { image: "warning-curve.png", title_vi: "Biển cảnh báo (hình thoi vàng)" },
    back: {
      explanation_vi: "Biển hình thoi màu vàng-đen cảnh báo điều kiện hoặc thay đổi phía trước (ví dụ: đoạn đường cong).",
      english_ref: "Warning sign",
      pronunciation: null,
      memory_tip: "Vàng + hình thoi = cảnh báo, hãy giảm tốc và đề phòng."
    }
  },
  {
    id: "fc-014",
    category: "Biển báo giao thông",
    front: { image: "work-zone-sign.png", title_vi: "Khu vực công trường" },
    back: {
      explanation_vi: "Biển hình thoi nền màu cam: khu vực thi công/bảo trì. Hãy giảm tốc, cảnh giác và bật đèn phía trước khi đi qua.",
      english_ref: "ROAD WORK AHEAD",
      pronunciation: null,
      memory_tip: "Màu cam = công trường (khác với vàng là cảnh báo thường)."
    }
  },
  {
    id: "fc-015",
    category: "Biển báo giao thông",
    front: { image: "route-marker-keystone.png", title_vi: "Biển tuyến đường PA" },
    back: {
      explanation_vi: "Biển đánh dấu hình đá đỉnh vòm (keystone) cho biết đây là một tuyến đường tiểu bang của Pennsylvania.",
      english_ref: "PA state route marker",
      pronunciation: null,
      memory_tip: "Hình 'keystone' (đá đỉnh vòm) = đường tiểu bang PA."
    }
  },
  {
    id: "fc-016",
    category: "Biển báo giao thông",
    front: { image: "service-sign-gas.png", title_vi: "Biển báo dịch vụ" },
    back: {
      explanation_vi: "Nền màu xanh dương, biểu tượng trắng: chỉ địa điểm dịch vụ (xăng, bệnh viện, ăn uống, lưu trú...) ở lối rẽ tiếp theo.",
      english_ref: "Service sign",
      pronunciation: null,
      memory_tip: "Xanh dương = dịch vụ tiện ích cho người lái."
    }
  },

  // ===== Tín hiệu đèn =====================================================
  {
    id: "fc-017",
    category: "Tín hiệu đèn",
    front: { image: "school-zone-speed.png", title_vi: "Đèn khu vực trường học" },
    back: {
      explanation_vi: "Khi đèn vàng nhấp nháy trên biển khu vực trường học, tốc độ tối đa là 15 dặm/giờ.",
      english_ref: "SCHOOL SPEED LIMIT 15 WHEN FLASHING",
      pronunciation: null,
      memory_tip: "Đèn vàng nhấp nháy ở trường học → 15 dặm/giờ."
    }
  },
  {
    id: "fc-018",
    category: "Tín hiệu đèn",
    front: { image: null, title_vi: "Đèn đỏ" },
    back: {
      explanation_vi: "Dừng lại hoàn toàn trước vạch dừng hoặc lối đi bộ. Được rẽ phải khi đèn đỏ sau khi dừng hẳn, trừ khi có biển cấm.",
      english_ref: "Red light",
      pronunciation: null,
      memory_tip: "Đỏ = dừng. Rẽ phải khi đỏ phải dừng hẳn trước."
    }
  },
  {
    id: "fc-019",
    category: "Tín hiệu đèn",
    front: { image: null, title_vi: "Đèn vàng" },
    back: {
      explanation_vi: "Đèn sắp chuyển sang đỏ. Chuẩn bị dừng lại nếu có thể dừng an toàn.",
      english_ref: "Yellow light",
      pronunciation: null,
      memory_tip: "Vàng = sắp đỏ, chuẩn bị dừng (không tăng tốc)."
    }
  },
  {
    id: "fc-020",
    category: "Tín hiệu đèn",
    front: { image: null, title_vi: "Đèn xanh" },
    back: {
      explanation_vi: "Được đi nếu phía trước thông thoáng; vẫn phải nhường cho xe và người đi bộ còn trong giao lộ.",
      english_ref: "Green light",
      pronunciation: null,
      memory_tip: "Xanh = được đi, nhưng vẫn quan sát giao lộ."
    }
  },
  {
    id: "fc-021",
    category: "Tín hiệu đèn",
    front: { image: "flashing-red.png", title_vi: "Đèn đỏ nhấp nháy" },
    back: {
      explanation_vi: "Xử lý như biển DỪNG (STOP): dừng hẳn, rồi mới đi khi an toàn.",
      english_ref: "Flashing red",
      pronunciation: null,
      memory_tip: "Đỏ nhấp nháy = biển STOP."
    }
  },
  {
    id: "fc-022",
    category: "Tín hiệu đèn",
    front: { image: "flashing-yellow.png", title_vi: "Đèn vàng nhấp nháy" },
    back: {
      explanation_vi: "Giảm tốc độ và đi qua một cách thận trọng.",
      english_ref: "Flashing yellow",
      pronunciation: null,
      memory_tip: "Vàng nhấp nháy = chậm lại, thận trọng (không phải dừng)."
    }
  },
  {
    id: "fc-023",
    category: "Tín hiệu đèn",
    front: { image: null, title_vi: "Mũi tên xanh" },
    back: {
      explanation_vi: "Được phép đi theo hướng mũi tên; hướng đó đã được bảo vệ.",
      english_ref: "Green arrow",
      pronunciation: null,
      memory_tip: "Mũi tên xanh = rẽ được bảo vệ theo hướng đó."
    }
  },

  // ===== Vạch kẻ đường ===================================================
  {
    id: "fc-024",
    category: "Vạch kẻ đường",
    front: { image: null, title_vi: "Vạch vàng liền" },
    back: {
      explanation_vi: "Phân chia hai chiều xe ngược nhau. Vạch vàng liền nghĩa là cấm vượt.",
      english_ref: "Solid yellow line",
      pronunciation: null,
      memory_tip: "Vàng = hai chiều; LIỀN = cấm vượt."
    }
  },
  {
    id: "fc-025",
    category: "Vạch kẻ đường",
    front: { image: "mark-dashed-yellow.png", title_vi: "Vạch vàng đứt" },
    back: {
      explanation_vi: "Phân chia hai chiều xe; vạch đứt cho phép vượt khi an toàn.",
      english_ref: "Broken yellow line",
      pronunciation: null,
      memory_tip: "ĐỨT = được vượt (khi an toàn)."
    }
  },
  {
    id: "fc-026",
    category: "Vạch kẻ đường",
    front: { image: "mark-double-yellow.png", title_vi: "Vạch vàng kép liền" },
    back: {
      explanation_vi: "Cấm vượt ở cả hai bên — không xe nào được lấn qua để vượt.",
      english_ref: "Double solid yellow",
      pronunciation: null,
      memory_tip: "Hai vạch vàng liền = cả hai chiều đều cấm vượt."
    }
  },
  {
    id: "fc-027",
    category: "Vạch kẻ đường",
    front: { image: "mark-white-lanes.png", title_vi: "Vạch trắng" },
    back: {
      explanation_vi: "Phân chia các làn xe đi cùng một chiều. Vạch trắng đứt cho phép đổi làn; mép đường bên phải là vạch trắng liền.",
      english_ref: "White lines",
      pronunciation: null,
      memory_tip: "Trắng = cùng chiều; vàng = ngược chiều."
    }
  },

  // ===== Luật ưu tiên ====================================================
  {
    id: "fc-028",
    category: "Luật ưu tiên",
    front: { image: null, title_vi: "Giao lộ bốn chiều" },
    back: {
      explanation_vi: "Xe đến trước được đi trước. Nếu đến cùng lúc, xe bên trái nhường cho xe bên phải.",
      english_ref: "4-way stop",
      pronunciation: null,
      memory_tip: "Cùng lúc → nhường bên phải."
    }
  },
  {
    id: "fc-029",
    category: "Luật ưu tiên",
    front: { image: null, title_vi: "Vòng xuyến (bùng binh)" },
    back: {
      explanation_vi: "Khi vào vòng xuyến, phải nhường đường cho các xe đã ở trong vòng xuyến.",
      english_ref: "Roundabout",
      pronunciation: null,
      memory_tip: "Xe trong vòng xuyến được ưu tiên."
    }
  },
  {
    id: "fc-030",
    category: "Luật ưu tiên",
    front: { image: null, title_vi: "Nhường người đi bộ" },
    back: {
      explanation_vi: "Luôn nhường đường cho người đi bộ trên lối qua đường. Khi rẽ mà có người đi bộ băng qua, người lái phải nhường.",
      english_ref: "Yield to pedestrians",
      pronunciation: null,
      memory_tip: "Người đi bộ luôn được ưu tiên."
    }
  },
  {
    id: "fc-031",
    category: "Luật ưu tiên",
    front: { image: null, title_vi: "Xe cấp cứu" },
    back: {
      explanation_vi: "Khi xe cấp cứu hú còi/nhấp đèn tiến đến, hãy tấp vào lề bên phải và dừng lại cho tới khi xe đó đi qua.",
      english_ref: "Emergency vehicle",
      pronunciation: null,
      memory_tip: "Còi/đèn khẩn cấp → tấp phải và dừng."
    }
  },
  {
    id: "fc-032",
    category: "Luật ưu tiên",
    front: { image: null, title_vi: "Rẽ trái nhường đường" },
    back: {
      explanation_vi: "Khi rẽ trái, phải nhường đường cho xe đang đi thẳng tới từ hướng ngược lại.",
      english_ref: "Left turn yield",
      pronunciation: null,
      memory_tip: "Rẽ trái luôn nhường xe đi thẳng ngược chiều."
    }
  },

  // ===== Tình huống lái xe ===============================================
  {
    id: "fc-033",
    category: "Tình huống lái xe",
    front: { image: null, title_vi: "Khoảng cách theo sau" },
    back: {
      explanation_vi: "Dùng quy tắc bốn (4) giây với xe phía trước; nếu vượt qua điểm mốc trong chưa đầy 4 giây là đang đi quá sát. Tăng khoảng cách khi đường xấu.",
      english_ref: "Four-second rule",
      pronunciation: null,
      memory_tip: "Đếm 4 giây tới điểm mốc — ít hơn là quá gần."
    }
  },
  {
    id: "fc-034",
    category: "Tình huống lái xe",
    front: { image: null, title_vi: "Xe bị trượt" },
    back: {
      explanation_vi: "Nhả chân ga và đánh lái nhẹ về hướng bạn muốn xe đi tới (hướng xe đang trượt). Không đạp phanh gấp.",
      english_ref: "Skid recovery",
      pronunciation: null,
      memory_tip: "Đánh lái 'theo' hướng trượt, đừng phanh gấp."
    }
  },
  {
    id: "fc-035",
    category: "Tình huống lái xe",
    front: { image: null, title_vi: "Trượt nước" },
    back: {
      explanation_vi: "Nhả nhẹ chân ga và giữ vô-lăng thẳng cho tới khi lốp bám lại. Giảm tốc độ trên đường ướt để phòng tránh.",
      english_ref: "Hydroplaning",
      pronunciation: null,
      memory_tip: "Trượt nước → nhả ga, giữ lái thẳng."
    }
  },
  {
    id: "fc-036",
    category: "Tình huống lái xe",
    front: { image: null, title_vi: "Lái xe trong sương mù" },
    back: {
      explanation_vi: "Dùng đèn pha luồng sáng thấp (đèn cốt). Đèn chiếu xa làm ánh sáng phản chiếu lại, khó nhìn hơn.",
      english_ref: "Low beams in fog",
      pronunciation: null,
      memory_tip: "Sương mù → đèn cốt, KHÔNG dùng đèn pha cao."
    }
  },
  {
    id: "fc-037",
    category: "Tình huống lái xe",
    front: { image: null, title_vi: "Gạt nước → bật đèn" },
    back: {
      explanation_vi: "Theo luật Pennsylvania, bất cứ khi nào bật cần gạt nước thì phải bật đèn pha (đèn cốt).",
      english_ref: "Wipers on, lights on",
      pronunciation: null,
      memory_tip: "Mưa: bật gạt nước thì bật luôn đèn."
    }
  },

  // ===== An toàn giao thông ==============================================
  {
    id: "fc-038",
    category: "An toàn giao thông",
    front: { image: "school-bus-stop.png", title_vi: "Xe buýt trường học" },
    back: {
      explanation_vi: "Khi xe buýt bật đèn đỏ nhấp nháy và mở thanh chặn, xe ở CẢ HAI chiều phải dừng, cách ít nhất 10 feet, tới khi đèn tắt và thanh chặn rút lại.",
      english_ref: "School bus stop",
      pronunciation: null,
      memory_tip: "Đèn đỏ + thanh chặn = dừng cả hai chiều, cách 10 ft."
    }
  },
  {
    id: "fc-039",
    category: "An toàn giao thông",
    front: { image: null, title_vi: "Dây an toàn" },
    back: {
      explanation_vi: "Thắt dây an toàn là việc hiệu quả nhất để giảm nguy cơ thương tích hoặc tử vong khi va chạm.",
      english_ref: "Seat belt",
      pronunciation: null,
      memory_tip: "Luôn thắt dây an toàn — bảo vệ tốt nhất."
    }
  },
  {
    id: "fc-040",
    category: "An toàn giao thông",
    front: { image: null, title_vi: "Nồng độ cồn (DUI)" },
    back: {
      explanation_vi: "Người từ 21 tuổi: DUI khi BAC ≥ 0,08%. Người dưới 21 tuổi: không khoan nhượng, BAC ≥ 0,02% là vi phạm.",
      english_ref: "DUI / BAC limit",
      pronunciation: "đọc: đi-iu-ai",
      memory_tip: "0,08 (≥21) · 0,02 (<21). An toàn nhất là 0."
    }
  },
  {
    id: "fc-041",
    category: "An toàn giao thông",
    front: { image: null, title_vi: "Nhắn tin khi lái xe" },
    back: {
      explanation_vi: "Pennsylvania cấm nhắn tin khi đang lái xe. Nếu cần dùng điện thoại, hãy dừng xe ở nơi an toàn.",
      english_ref: "Texting ban",
      pronunciation: null,
      memory_tip: "Đang lái = không nhắn tin."
    }
  },
  {
    id: "fc-042",
    category: "An toàn giao thông",
    front: { image: null, title_vi: "Lái xe khi mệt mỏi" },
    back: {
      explanation_vi: "Khi thấy mệt, điều tốt nhất là dừng lái xe. Thiếu ngủ ảnh hưởng tới lái xe tương tự như tác động của rượu.",
      english_ref: "Drowsy driving",
      pronunciation: null,
      memory_tip: "Buồn ngủ ≈ say rượu → dừng nghỉ."
    }
  }
];

// Map each card to its category for quick filtering.
export const FLASHCARDS_BY_CATEGORY = FLASHCARD_CATEGORIES.reduce((acc, c) => {
  acc[c] = FLASHCARDS.filter((card) => card.category === c);
  return acc;
}, {});
