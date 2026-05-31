// =====================================================
// Trung tâm trợ giúp — Portal B2B Baokim
// Data: 20 articles, mỗi article thuộc 1+ groups
// (groups = popular topic OR category).
// =====================================================

window.HC_DATA = (function () {

  // -------------------- GROUPS --------------------
  // 7 popular topics + 7 categories. Mỗi group có id riêng.
  const popularGroups = [
    { id: "pop-qldonhang",    name: "Quản lý đơn hàng",         icon: "list",    short: "Quản lý đơn hàng" },
    { id: "pop-hoanhuy",      name: "Hoàn/Huỷ đơn hàng",        icon: "refund",  short: "Hoàn/Huỷ đơn hàng" },
    { id: "pop-doisoat",      name: "Đối soát/Quyết toán đơn hàng", icon: "doc", short: "Đối soát/Quyết toán" },
    { id: "pop-doi-stk",      name: "Thay đổi số tài khoản nhận tiền", icon: "bank", short: "Đổi STK nhận tiền" },
    { id: "pop-paymentlink",  name: "Hướng dẫn tạo payment link", icon: "link",   short: "Tạo payment link" },
    { id: "pop-loithanhtoan", name: "Lỗi thanh toán",            icon: "alert",   short: "Lỗi thanh toán" },
    { id: "pop-doi-tuong-phi",name: "Cấu hình đối tượng chịu phí", icon: "percent", short: "Đối tượng chịu phí" }
  ];

  const categoryGroups = [
    { id: "cat-dangky",      order: 1, name: "Đăng ký tài khoản",                icon: "user-plus", desc: "Tạo tài khoản Merchant và cửa hàng." },
    { id: "cat-donhang",     order: 2, name: "Quản lý đơn hàng",                 icon: "list",      desc: "Xem, duyệt, từ chối và hoàn/huỷ đơn hàng." },
    { id: "cat-sodu",        order: 3, name: "Biến động số dư",                  icon: "wallet",    desc: "Theo dõi cộng/trừ/tạm giữ và số dư khả dụng." },
    { id: "cat-doisoat",     order: 4, name: "Đối soát – quyết toán",            icon: "doc",       desc: "Cấu hình đối soát, quyết toán và đổi tài khoản nhận tiền." },
    { id: "cat-phuongthuc",  order: 5, name: "Cấu hình dịch vụ phương thức / đối tượng chịu phí", icon: "sliders", desc: "Bật/tắt phương thức, tỷ lệ phí, đối tượng chịu phí." },
    { id: "cat-paymentlink", order: 6, name: "Payment link",                     icon: "link",      desc: "Tạo link thanh toán và theo dõi trạng thái." },
    { id: "cat-trasoat",     order: 7, name: "Tra soát khiếu nại",               icon: "shield",    desc: "Tạo khiếu nại, phản hồi tra soát từ Baokim." }
  ];

  // -------------------- ARTICLES --------------------
  const articles = [
    // ====== POPULAR-ONLY ARTICLES ======
    {
      id: "donhang-tim-kiem",
      groups: ["pop-qldonhang"],
      title: "Làm thế nào để tôi tìm kiếm giao dịch và xem thông tin giao dịch?",
      summary: "Vào menu Quản lý đơn hàng → Danh sách đơn hàng để xem toàn bộ đơn và lọc/tra cứu.",
      preview: "Mở Danh sách đơn hàng, dùng thanh tìm kiếm hoặc Bộ lọc khác, bấm mã đơn BK để xem chi tiết.",
      answer: "Vào menu **Quản lý đơn hàng > Danh sách đơn hàng**. Tại đây hệ thống hiển thị toàn bộ đơn của Merchant, gồm mã đơn BK, mã đơn MRC, thời gian tạo/cập nhật, trạng thái đơn, giá trị đơn, tổng phí, khuyến mại, số tiền thực nhận, phương thức thanh toán, mã chi nhánh/cửa hàng/nhân viên/sản phẩm, thông tin khách hàng và ghi chú.",
      steps: [
        "Mở menu **Quản lý đơn hàng** và chọn **Danh sách đơn hàng**.",
        "Tìm nhanh bằng mã đơn Baokim/MRC, mã chi nhánh, cửa hàng, nhân viên, sản phẩm hoặc tên khách hàng.",
        "Có thể lọc theo thời gian hoặc bấm **Bộ lọc khác** để tìm nâng cao.",
        "Muốn xem chi tiết, bấm vào mã đơn hàng BK để mở màn hình **Chi tiết đơn hàng**."
      ],
      notes: [
        "Màn hình chi tiết đơn hàng cho phép kiểm tra đầy đủ thông tin nhà bán hàng, khách hàng, đơn hàng, sản phẩm và chi tiết thanh toán.",
        "Với đơn trả góp thẻ tín dụng sẽ có thêm thông tin trả góp; đơn BNPL sẽ có thêm thông tin BNPL."
      ]
    },
    {
      id: "donhang-duyet-tu-choi",
      groups: ["pop-qldonhang"],
      title: "Tôi duyệt hoặc từ chối đơn hàng ở đâu?",
      summary: "Có thể duyệt/từ chối đơn theo 2 cách: ngay tại Danh sách đơn hàng hoặc trong Chi tiết đơn hàng.",
      preview: "Lọc trạng thái Chờ duyệt → bấm Duyệt/Từ chối, hoặc mở chi tiết đơn và thao tác.",
      answer: "Có thể duyệt hoặc từ chối đơn theo 2 cách: ngay tại màn hình **Quản lý đơn hàng** hoặc trong màn hình **Chi tiết đơn hàng**.",
      steps: [
        "**Cách 1 – tại Danh sách đơn hàng:** lọc trạng thái đơn = **Chờ duyệt**, sau đó bấm **Duyệt đơn** hoặc **Từ chối**.",
        "**Cách 2 – tại Chi tiết đơn hàng:** mở mã đơn BK, sau đó bấm nút **Duyệt** hoặc **Từ chối**.",
        "Với hai cách, hệ thống đều hiện hộp xác nhận để bạn bấm **Xác nhận** hoặc **Huỷ**."
      ],
      notes: [
        "Chỉ những đơn ở trạng thái **Chờ duyệt** mới thực hiện được thao tác duyệt/từ chối.",
        "Nếu cần kiểm tra kỹ thông tin trước khi xử lý, nên mở **Chi tiết đơn hàng** rồi mới thao tác."
      ]
    },
    {
      id: "hoan-thoi-gian",
      groups: ["pop-qldonhang", "pop-hoanhuy"],
      pending: true,
      title: "Khách hàng nhận được tiền hoàn sau bao lâu?",
      summary: "Thời gian khách nhận tiền hoàn phụ thuộc phương thức thanh toán ban đầu.",
      preview: "Mốc thời gian theo từng phương thức đang được đối tác cập nhật chính thức.",
      answer: "Thời gian khách nhận lại tiền hoàn phụ thuộc vào phương thức thanh toán ban đầu (ATM nội địa, Visa/Master, Ví, BNPL…). Bảng chi tiết theo từng phương thức đang được Baokim đối chiếu lại với đối tác.",
      pendingNote: "Danh sách mốc thời gian nhận tiền hoàn theo từng phương thức đang được cập nhật. Trong thời gian này, vui lòng tham khảo bảng tóm tắt nội bộ hoặc liên hệ bộ phận hỗ trợ.",
      steps: [],
      notes: [
        "Bạn nên theo dõi trạng thái đơn và biến động số dư sau khi hoàn.",
        "Nếu cần mốc thời gian chính xác theo từng phương thức thanh toán, nên liên hệ Baokim hoặc bộ phận vận hành đang quản lý hợp đồng."
      ]
    },
    {
      id: "hoan-cach-lam",
      groups: ["pop-hoanhuy", "cat-donhang"],
      title: "Tôi hoàn hoặc hủy đơn như thế nào?",
      summary: "Thao tác hoàn/hủy nằm ở Chi tiết đơn hàng và phụ thuộc loại giao dịch.",
      preview: "Trả thẳng: nhập số tiền & lý do. BNPL: chỉ nhập lý do. Trả góp: chọn loại huỷ.",
      answer: "Thao tác hoàn hủy phụ thuộc loại giao dịch như sau: **hoàn đơn trả thẳng, hoàn đơn trả chậm BNPL** và **huỷ đơn trả góp**.",
      steps: [
        "Mở **Quản lý đơn hàng**, bấm vào mã đơn BK để vào **Chi tiết đơn hàng**.",
        "**Đơn trả thẳng:** bấm **Hoàn**, nhập số tiền cần hoàn, nhập lý do bắt buộc, rồi bấm **Xác nhận**.",
        "**Đơn BNPL:** bấm **Hoàn**, nhập lý do bắt buộc, rồi bấm **Xác nhận**.",
        "**Đơn trả góp:** bấm **Hoàn**, chọn loại huỷ (**Huỷ CĐTG** hoặc **Huỷ CĐTG và Hoàn thanh toán**), nhập lý do, rồi bấm **Xác nhận**."
      ],
      notes: [
        "Hệ thống mặc định số tiền hoàn tối đa còn lại mà Merchant được hoàn đối với đơn trả thẳng.",
        "Merchant cần bảo đảm số dư khả dụng đủ để hoàn tiền."
      ]
    },
    {
      id: "doisoat-quyettoan-thoi-gian",
      groups: ["pop-doisoat"],
      pending: true,
      title: "Bao giờ tôi nhận được quyết toán đơn hàng?",
      summary: "Chu kỳ quyết toán, quy định tạm giữ là cấu hình theo hợp đồng — không có mốc chung.",
      preview: "Mở Cài đặt → Cấu hình đối soát – quyết toán → tab Quyết toán để xem chu kỳ áp dụng.",
      answer: "Chu kỳ quyết toán, quy định tạm giữ và các thông tin quyết toán là cấu hình theo hợp đồng. Vì vậy không có một mốc thời gian chung áp dụng cho mọi Merchant.",
      pendingNote: "Bảng mốc thời gian quyết toán mẫu theo từng nhóm Merchant đang được cập nhật. Vui lòng đối chiếu hợp đồng hoặc liên hệ bộ phận vận hành để biết chu kỳ chính xác.",
      steps: [
        "Vào **Cài đặt > Cấu hình đối soát – quyết toán**.",
        "Mở tab **Quyết toán** để xem phương thức, chu kỳ quyết toán và quy định tạm giữ nếu có."
      ],
      notes: [
        "Thông tin ở tab Quyết toán là dữ liệu cấu hình theo hợp đồng đã ký.",
        "Nếu cần biết chính xác ngày nhận tiền, hãy đối chiếu với hợp đồng hoặc cấu hình thực tế của Merchant."
      ]
    },
    {
      id: "doisoat-file",
      groups: ["pop-doisoat"],
      title: "Nếu chưa nhận được file đối soát thì tôi cần kiểm tra gì?",
      summary: "Kiểm tra cấu hình nhận biên bản đối soát: email (mặc định), sFTP hoặc API.",
      preview: "Mở Cấu hình đối soát – quyết toán, tab Đối soát, kiểm tra email/sFTP/API và lưu lại nếu sai.",
      answer: "Trước tiên cần kiểm tra cấu hình nhận biên bản đối soát do hệ thống cho phép nhận qua **email, sFTP hoặc API**, trong đó mặc định là email.",
      steps: [
        "Vào **Cài đặt > Cấu hình đối soát – quyết toán**.",
        "Tại tab **Đối soát**, kiểm tra lại hình thức nhận file đối soát.",
        "Kiểm tra đúng email nhận biên bản, email CC (nếu có), hoặc cấu hình sFTP/API nếu Merchant dùng các hình thức này.",
        "Lưu lại cấu hình nếu có thay đổi."
      ],
      notes: [
        "Nếu cấu hình email sai hoặc chưa cập nhật, Merchant có thể không nhận được file đối soát.",
        "Thông tin thời điểm thu phí và chu kỳ đối soát cũng được hiển thị tại màn hình này."
      ]
    },
    {
      id: "doisoat-doi-stk",
      groups: ["pop-doi-stk", "cat-doisoat"],
      title: "Tôi thay đổi số tài khoản nhận tiền như thế nào?",
      summary: "Vào Đối soát – quyết toán → tab Tài khoản thanh toán, tạo yêu cầu thêm/thay thế và gửi phê duyệt.",
      preview: "Thêm tài khoản mới, chọn thay thế tài khoản cũ nếu cần, gửi yêu cầu để ký phụ lục.",
      answer: "Vào màn hình **Đối soát – quyết toán**, tab **Tài khoản thanh toán**, sau đó tạo yêu cầu thêm mới/thay thế tài khoản và gửi phê duyệt.",
      steps: [
        "Mở menu **Đối soát – quyết toán** và chọn tab **Tài khoản thanh toán**.",
        "Bấm **Thêm tài khoản**.",
        "Nhập số tài khoản, chọn ngân hàng, khai báo tên viết tắt hoặc tài khoản uỷ quyền nếu cần.",
        "Nếu là tài khoản uỷ quyền, nhập số giấy uỷ quyền và tải lên file giấy tờ.",
        "Nếu thay thế tài khoản cũ, chọn tài khoản đang hoạt động cần thay thế.",
        "Bấm **Thêm tài khoản**, sau đó bấm **Gửi yêu cầu** để gửi phê duyệt và ký phụ lục."
      ],
      notes: [
        "Có thể thêm nhiều số tài khoản trong một lần gửi yêu cầu.",
        "Trong lúc yêu cầu đang xử lý phụ lục, Merchant không được tạo yêu cầu thêm mới khác.",
        "Trạng thái tài khoản có thể là **Khởi tạo, Chờ duyệt, Từ chối, Đã duyệt, Đang hoạt động hoặc Khoá**."
      ]
    },
    {
      id: "paymentlink-tao",
      groups: ["pop-paymentlink"],
      title: "Tôi tạo payment link như thế nào?",
      summary: "Vào Payment links → Danh sách Payment link → Tạo link thanh toán, nhập thông tin bắt buộc.",
      preview: "Mở Danh sách Payment link, bấm Tạo link thanh toán, nhập trường có dấu *, lưu và sao chép link.",
      answer: "Vào menu **Payment links > Danh sách Payment link**, sau đó bấm **Tạo link thanh toán** và nhập các thông tin bắt buộc theo màn hình.",
      steps: [
        "Mở menu **Payment links** và vào **Danh sách Payment link**.",
        "Bấm **Tạo link thanh toán**.",
        "Nhập các thông tin được yêu cầu; các trường có dấu **\\*** là bắt buộc.",
        "Bấm **Lưu** để tạo link.",
        "Sau khi tạo thành công, sao chép link và gửi cho khách hàng thanh toán."
      ],
      notes: [
        "Màn hình chi tiết link cho phép xem thao tác **copy link, hình thức thanh toán, trạng thái thanh toán, mã đơn hàng** và thông tin khách hàng nếu có."
      ]
    },
    {
      id: "loi-thanh-toan",
      groups: ["pop-loithanhtoan"],
      pending: true,
      title: "Khách hàng thường gặp lỗi thanh toán nào và xử lý ra sao?",
      summary: "Tổng hợp các lỗi thanh toán thường gặp và hướng xử lý cho từng tình huống.",
      preview: "Danh sách lỗi thanh toán phổ biến đang được cập nhật. Tạm thời kiểm tra link/QR và trạng thái đơn.",
      answer: "Khách hàng có thể gặp một số lỗi khi thanh toán qua link, QR hoặc cổng. Danh sách lỗi và cách xử lý chính thức đang được Baokim biên soạn.",
      pendingNote: "Danh sách lỗi thanh toán phổ biến và quy trình xử lý chi tiết đang được cập nhật.",
      steps: [],
      notes: [
        "Nếu lỗi phát sinh khi khách thanh toán qua link hoặc QR, trước tiên nên kiểm tra lại đúng link/QR và trạng thái đơn hàng.",
        "Nếu giao dịch đã phát sinh nhưng cần làm rõ, Merchant có thể vào **Danh sách ticket** để tạo khiếu nại hoặc phản hồi tra soát."
      ]
    },
    {
      id: "phuongthuc-doi-tuong-phi",
      groups: ["pop-doi-tuong-phi"],
      title: "Tôi cấu hình đối tượng chịu phí ở đâu?",
      summary: "Tại Cấu hình dịch vụ phương thức — từng phương thức cho cấu hình tỷ lệ khách hàng chịu phí.",
      preview: "Chọn đúng tab dịch vụ, nhập tỷ lệ khách hàng chịu phí và bấm Lưu.",
      answer: "Tại mục **Cấu hình dịch vụ phương thức**. Tại từng phương thức, Merchant được phép cấu hình tỷ lệ khách hàng chịu phí thanh toán và tỷ lệ khách hàng chịu phí hoàn/huỷ hoặc phí chuyển đổi trả góp tùy từng loại dịch vụ.",
      steps: [
        "Mở menu **Cấu hình dịch vụ phương thức**.",
        "Chọn đúng tab dịch vụ: **Trả thẳng, Trả góp thẻ tín dụng** hoặc **Trả chậm – BNPL**.",
        "Nhập tỷ lệ khách hàng chịu phí theo đúng trường cấu hình trên màn hình.",
        "Bấm **Lưu** để hoàn tất."
      ],
      notes: [
        "Ở **Trả thẳng:** có thể cấu hình tỷ lệ khách hàng chịu phí thanh toán và phí hoàn/huỷ.",
        "Ở **Trả góp thẻ tín dụng:** có thể cấu hình tỷ lệ phí thanh toán, phí hoàn thanh toán và phí chuyển đổi theo từng gói vay.",
        "Ở **BNPL:** có thể cấu hình phần trả trước, trả sau và các tỷ lệ phí liên quan.",
        "Tỷ lệ khách hàng chịu phí hoàn hủy hệ thống đang đặt mặc định là **0%**."
      ]
    },

    // ====== CATEGORY-ONLY ARTICLES ======
    {
      id: "dangky-tao-tk",
      groups: ["cat-dangky"],
      title: "Tôi đăng ký tài khoản Merchant cá nhân, hộ kinh doanh hoặc doanh nghiệp như thế nào?",
      summary: "Luồng đăng ký bắt đầu bằng tạo tài khoản, xác thực OTP và khai báo hồ sơ theo đúng mô hình kinh doanh.",
      preview: "Đăng ký tại b2b.baokim.vn, xác thực OTP, chọn mô hình kinh doanh và tải hồ sơ định danh.",
      answer: "Luồng đăng ký bắt đầu bằng việc tạo tài khoản, xác thực OTP và sau đó khai báo hồ sơ theo đúng mô hình kinh doanh (**Cá nhân / Hộ kinh doanh / Doanh nghiệp – Tổ chức**).",
      steps: [
        "Truy cập website **b2b.baokim.vn** và bấm **Đăng ký ngay!**",
        "Nhập tên tài khoản, số điện thoại, họ tên/tên tổ chức, email, mật khẩu, xác thực mật khẩu và mã giới thiệu nếu có; tick đồng ý điều khoản rồi bấm **Tiếp tục**.",
        "Chọn hình thức nhận OTP qua email hoặc số điện thoại, nhập OTP trong 3 phút rồi bấm **Xác nhận**.",
        "Đăng nhập tài khoản vừa tạo để bắt đầu khai báo hồ sơ.",
        "Chọn mô hình kinh doanh: **Cá nhân / Hộ kinh doanh / Doanh nghiệp – Tổ chức**.",
        "Khai báo lĩnh vực kinh doanh, nhu cầu sử dụng, phương thức thanh toán muốn dùng và hình thức kết nối thanh toán.",
        "Chọn ít nhất một kênh tích hợp: website/app, payment link qua nền tảng bán hàng, thanh toán tại cửa hàng hoặc phần mềm bán hàng sẵn có.",
        "Tải lên giấy tờ định danh theo đúng mô hình kinh doanh, xác nhận lại dữ liệu hệ thống đọc được và hoàn tất hồ sơ."
      ],
      notes: [
        "Cá nhân chỉ dùng phương thức trả thẳng, bao gồm: **Tài khoản ảo (VA tĩnh/VA động), Thẻ ATM, Tài khoản ngân hàng, VNPAYQR**.",
        "Hộ kinh doanh và Doanh nghiệp/Tổ chức có thể đăng ký thêm trả góp thẻ tín dụng và BNPL.",
        "Sau khi hoàn tất, Baokim sẽ thẩm định hồ sơ và thông báo kết quả."
      ]
    },
    {
      id: "dangky-cua-hang",
      groups: ["cat-dangky"],
      title: "Tôi tạo tài khoản cửa hàng ở đâu?",
      summary: "Tại mục Quản lý cửa hàng cho phép Merchant thêm mới cửa hàng phục vụ vận hành trên hệ thống.",
      preview: "Vào Kênh bán hàng → Quản lý cửa hàng → Thêm mới, nhập thông tin và xác nhận.",
      answer: "Tại mục **Quản lý cửa hàng** cho phép Merchant thêm mới cửa hàng phục vụ vận hành trên hệ thống.",
      steps: [
        "Vào **Kênh bán hàng > Quản lý cửa hàng**.",
        "Bấm **Thêm mới**.",
        "Nhập tên cửa hàng, ngành nghề kinh doanh, chọn chi nhánh, số điện thoại và địa chỉ cửa hàng.",
        "Bấm **Xác nhận** để lưu."
      ],
      notes: [
        "Một Merchant có thể tạo nhiều cửa hàng theo từng địa điểm vận hành.",
        "Mã cửa hàng sẽ được dùng để lọc đơn hàng và đối soát theo từng điểm bán."
      ]
    },
    {
      id: "donhang-xem",
      groups: ["cat-donhang"],
      title: "Tôi xem giao dịch tại mục Quản lý đơn hàng như thế nào?",
      summary: "Màn hình Quản lý đơn hàng là nơi xem toàn bộ giao dịch và tra cứu chi tiết từng đơn.",
      preview: "Mở Quản lý đơn hàng → Danh sách đơn hàng, dùng tìm kiếm/bộ lọc và bấm mã đơn BK để xem chi tiết.",
      answer: "Màn hình **Quản lý đơn hàng** là nơi xem toàn bộ giao dịch/đơn hàng của Merchant và tra cứu chi tiết từng đơn.",
      steps: [
        "Vào **Quản lý đơn hàng > Danh sách đơn hàng**.",
        "Dùng thanh tìm kiếm và bộ lọc để tìm đúng đơn cần xem.",
        "Bấm mã đơn BK để mở **Chi tiết đơn hàng** và kiểm tra toàn bộ thông tin liên quan."
      ],
      notes: [
        "Có thể lọc theo nhiều tiêu chí: mã đơn, trạng thái, thời gian, phương thức thanh toán, cửa hàng/chi nhánh.",
        "Các giao dịch trả góp / BNPL sẽ có thêm thông tin chuyên biệt trong màn hình chi tiết."
      ]
    },
    {
      id: "donhang-duyet",
      groups: ["cat-donhang"],
      title: "Tôi duyệt đơn như thế nào?",
      summary: "Có thể duyệt đơn ngay tại Danh sách đơn hàng hoặc trong Chi tiết đơn hàng.",
      preview: "Lọc trạng thái Chờ duyệt → bấm Duyệt đơn → xác nhận; hoặc mở chi tiết đơn và bấm Duyệt.",
      answer: "Có thể duyệt tại màn hình **Danh sách đơn hàng** hoặc trong **Chi tiết đơn hàng**.",
      steps: [
        "**Tại Danh sách đơn hàng:** lọc trạng thái = **Chờ duyệt**, bấm **Duyệt đơn**, rồi xác nhận.",
        "**Tại Chi tiết đơn hàng:** mở đơn, bấm **Duyệt**, rồi xác nhận."
      ],
      notes: [
        "Chỉ những đơn ở trạng thái **Chờ duyệt** mới thực hiện được thao tác duyệt.",
        "Sau khi duyệt, đơn chuyển sang trạng thái **Đã duyệt** / **Chờ thanh toán**."
      ]
    },
    {
      id: "donhang-tu-choi",
      groups: ["cat-donhang"],
      title: "Tôi từ chối đơn như thế nào?",
      summary: "Có thể từ chối đơn tại Danh sách đơn hàng hoặc trong Chi tiết đơn hàng.",
      preview: "Lọc Chờ duyệt → bấm Từ chối → xác nhận; hoặc mở chi tiết đơn và bấm Từ chối.",
      answer: "Có thể từ chối tại màn hình **Danh sách đơn hàng** hoặc trong **Chi tiết đơn hàng**.",
      steps: [
        "**Tại Danh sách đơn hàng:** lọc trạng thái = **Chờ duyệt**, bấm **Từ chối**, rồi xác nhận.",
        "**Tại Chi tiết đơn hàng:** mở đơn, bấm **Từ chối**, rồi xác nhận."
      ],
      notes: [
        "Đơn đã từ chối không thể khôi phục — cần khách hàng tạo lại giao dịch mới.",
        "Lý do từ chối được lưu vào lịch sử thao tác của đơn."
      ]
    },
    {
      id: "sodu-xem",
      groups: ["cat-sodu"],
      title: "Tôi xem biến động số dư ở đâu?",
      summary: "Vào Quản lý biến động số dư → Danh sách biến động số dư để xem các nghiệp vụ ảnh hưởng số dư.",
      preview: "Mở Danh sách biến động số dư, xem phân loại, mã đơn, trạng thái, ghi nhận, giá trị và số dư cuối.",
      answer: "Vào menu **Quản lý biến động số dư > Danh sách biến động số dư**. Màn hình này hiển thị các nghiệp vụ liên quan đến đơn hàng làm thay đổi số dư của Merchant.",
      steps: [
        "Mở **Danh sách biến động số dư**.",
        "Xem các trường chính: phân loại, mã đơn, trạng thái, ghi nhận, giá trị, số dư cuối, thời gian và ghi chú.",
        "Dùng bộ lọc để tra cứu theo phân loại, mã đơn, trạng thái, kiểu ghi nhận hoặc thời gian."
      ],
      notes: [
        "Phân loại gồm các loại như **Thanh toán, Hoàn, Chi, Bỏ tạm giữ**.",
        "Ghi nhận gồm **Cộng tiền, Trừ tiền, Tạm giữ**."
      ]
    },
    {
      id: "doisoat-cau-hinh",
      groups: ["cat-doisoat"],
      title: "Tôi cấu hình đối soát và quyết toán ở đâu?",
      summary: "Vào Cài đặt → Cấu hình đối soát – quyết toán. Có 5 tab: Đối soát, Quyết toán, Hoá đơn, Tài khoản thanh toán, Nhận tiền theo tài khoản.",
      preview: "Mỗi tab cấu hình một khía cạnh: hình thức nhận file, chu kỳ quyết toán, hoá đơn, tài khoản nhận tiền.",
      answer: "Vào **Cài đặt > Cấu hình đối soát – quyết toán**. Tại đây có các tab **Đối soát, Quyết toán, Hoá đơn, Tài khoản thanh toán và Nhận tiền theo tài khoản**.",
      steps: [
        "**Tab Đối soát:** chọn hình thức nhận biên bản (email/sFTP/API), email nhận và email CC.",
        "**Tab Quyết toán:** xem phương thức, chu kỳ quyết toán và quy định tạm giữ.",
        "**Tab Hoá đơn:** xem thông tin nhận hoá đơn và bật/tắt nhận hoá đơn.",
        "**Tab Tài khoản thanh toán:** xem danh sách tài khoản nhận tiền và đặt tài khoản mặc định.",
        "**Tab Nhận tiền theo tài khoản:** chọn nhận tiền về tài khoản mặc định hoặc cấu hình theo từng kênh bán hàng."
      ],
      notes: [
        "Một số cấu hình (chu kỳ quyết toán, tài khoản nhận tiền…) cần được Baokim phê duyệt trước khi hiệu lực.",
        "Nếu Merchant có nhiều cửa hàng, có thể cấu hình nhận tiền riêng cho từng cửa hàng."
      ]
    },
    {
      id: "phuongthuc-cau-hinh",
      groups: ["cat-phuongthuc"],
      title: "Tôi cấu hình dịch vụ phương thức và đối tượng chịu phí như thế nào?",
      summary: "Vào Cấu hình dịch vụ phương thức. Hệ thống tách thành 3 tab: Trả thẳng, Trả góp thẻ tín dụng, Trả chậm – BNPL.",
      preview: "Mỗi tab cấu hình giá trị giao dịch, tỷ lệ phí, đối tượng chịu phí và bật/tắt phương thức riêng.",
      answer: "Vào menu **Cấu hình dịch vụ phương thức**. Tại đây hệ thống tách thành 3 tab chính: **Trả thẳng, Trả góp thẻ tín dụng và Trả chậm – BNPL**.",
      steps: [
        "**Tab Trả thẳng:** cấu hình giá trị giao dịch tối thiểu/tối đa, tỷ lệ khách hàng chịu phí thanh toán, tỷ lệ phí hoàn/huỷ và bật/tắt phương thức.",
        "**Tab Trả góp thẻ tín dụng:** cấu hình phí thanh toán, phí hoàn thanh toán, kỳ hạn, ngân hàng/tổ chức tài chính và phí chuyển đổi theo từng gói vay.",
        "**Tab BNPL:** cấu hình khoản trả trước, khoản trả sau, bật/tắt tổ chức tài chính và các thông số chi tiết.",
        "Sau khi chỉnh xong, bấm **Lưu**."
      ],
      notes: [
        "Các phương thức tắt sẽ không hiển thị cho khách hàng khi thanh toán.",
        "Thay đổi tỷ lệ phí ảnh hưởng tới tất cả giao dịch phát sinh sau thời điểm lưu."
      ]
    },
    {
      id: "paymentlink-su-dung",
      groups: ["cat-paymentlink"],
      title: "Tôi sử dụng Payment Link như thế nào?",
      summary: "Module Payment Link hỗ trợ tạo link thanh toán để gửi trực tiếp cho khách hàng và theo dõi trạng thái.",
      preview: "Vào Payment links → Danh sách Payment link, tạo link, sao chép gửi khách và xem chi tiết khi cần.",
      answer: "Module **Payment Link** hỗ trợ tạo link thanh toán để gửi trực tiếp cho khách hàng và theo dõi trạng thái thanh toán của link.",
      steps: [
        "Vào **Payment links > Danh sách Payment link**.",
        "Bấm **Tạo link thanh toán**, nhập các trường bắt buộc và bấm **Lưu**.",
        "Sao chép link đã tạo để gửi khách.",
        "Khi cần kiểm tra, mở **Xem chi tiết** để xem hình thức thanh toán, trạng thái, mã đơn và thông tin khách hàng."
      ],
      notes: [
        "Một link có thể tương ứng với nhiều đơn nếu cấu hình link dùng nhiều lần.",
        "Link đã hết hạn không thể thanh toán — cần tạo link mới cho khách."
      ]
    },
    {
      id: "tra-soat-tao",
      groups: ["cat-trasoat"],
      title: "Tôi tạo khiếu nại hoặc phản hồi tra soát như thế nào?",
      summary: "Tra soát khiếu nại có 3 phần: tạo khiếu nại, phản hồi khiếu nại và phản hồi tra soát.",
      preview: "Tạo khiếu nại từ Danh sách đơn hàng; phản hồi tra soát/khiếu nại từ Danh sách ticket.",
      answer: "Tra soát khiếu nại có 3 phần như sau: **tạo khiếu nại, phản hồi khiếu nại và phản hồi tra soát**.",
      steps: [
        "**Tạo khiếu nại:** vào **Quản lý đơn hàng > Danh sách đơn hàng**, chọn ít nhất 1 đơn, bấm **Tạo khiếu nại**, nhập phân loại, tải file/chứng từ nếu có, nhập ghi chú và gửi.",
        "**Phản hồi khiếu nại:** vào **Danh sách ticket**, lọc Phân loại = **Khiếu nại**, mở chi tiết và nhập phản hồi.",
        "**Phản hồi tra soát:** vào **Danh sách ticket**, lọc Phân loại = **Tra soát**, mở chi tiết, tải chứng từ được yêu cầu, nhập phản hồi chung rồi gửi hoặc lưu nháp."
      ],
      notes: [
        "**Tra soát** là yêu cầu do Baokim gửi tới Merchant khi nhận được yêu cầu tra soát từ nhà cung cấp liên quan tới giao dịch thành công.",
        "Màn hình chi tiết ticket hiển thị lịch sử phản hồi giữa Merchant và Baokim."
      ]
    }
  ];

  // -------------------- HOMEPAGE FAQ ORDER (20 unique entries) --------------------
  // User liệt kê 23 entry trong đó có 3 dup → dedupe theo article ID,
  // giữ thứ tự xuất hiện đầu tiên.
  const homepageFaqList = [
    "donhang-tim-kiem",            // 1
    "donhang-duyet-tu-choi",       // 2
    "hoan-thoi-gian",              // 3 (cũng là #5 "Thời gian KH nhận được tiền hoàn")
    "hoan-cach-lam",               // 4 (cũng là #17)
    "doisoat-quyettoan-thoi-gian", // 6
    "doisoat-file",                // 7
    "doisoat-doi-stk",             // 8 (cũng là #20)
    "paymentlink-tao",             // 9
    "loi-thanh-toan",              // 10
    "phuongthuc-doi-tuong-phi",    // 11
    "dangky-tao-tk",               // 12
    "dangky-cua-hang",             // 13
    "donhang-xem",                 // 14
    "donhang-duyet",               // 15
    "donhang-tu-choi",             // 16
    "sodu-xem",                    // 18
    "doisoat-cau-hinh",            // 19
    "phuongthuc-cau-hinh",         // 21
    "paymentlink-su-dung",         // 22
    "tra-soat-tao"                 // 23
  ];

  // -------------------- HELPERS --------------------
  function removeDiacritics(str) {
    return (str || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d").replace(/Đ/g, "D")
      .toLowerCase();
  }

  function byId(id) { return articles.find(a => a.id === id); }
  function byGroup(groupId) { return articles.filter(a => a.groups.includes(groupId)); }
  function groupById(groupId) {
    return popularGroups.find(g => g.id === groupId) || categoryGroups.find(g => g.id === groupId);
  }
  function isPopularGroup(groupId) { return popularGroups.some(g => g.id === groupId); }
  function isCategoryGroup(groupId) { return categoryGroups.some(g => g.id === groupId); }

  // Search index — bỏ dấu tiếng Việt
  const searchIndex = articles.map(a => {
    const primaryGroup = groupById(a.groups[0]);
    const body = [a.title, a.summary, a.answer, ...(a.steps || []), ...(a.notes || [])].join(" ");
    return {
      id: a.id,
      title: a.title,
      catName: primaryGroup ? primaryGroup.name : "",
      preview: a.preview || a.summary,
      pending: !!a.pending,
      _haystack: removeDiacritics(body + " " + (primaryGroup ? primaryGroup.name : ""))
    };
  });

  function search(q) {
    const needle = removeDiacritics((q || "").trim());
    if (!needle) return [];
    const tokens = needle.split(/\s+/).filter(Boolean);
    return searchIndex
      .map(item => {
        let score = 0;
        for (const t of tokens) {
          if (item._haystack.includes(t)) {
            score += 1;
            if (removeDiacritics(item.title).includes(t)) score += 2;
          }
        }
        return { item, score };
      })
      .filter(r => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map(r => r.item);
  }

  // Popular chips list (for hero section, ordered)
  const popularChips = popularGroups.map(g => ({
    groupId: g.id,
    name: g.short,
    icon: g.icon,
    count: byGroup(g.id).length
  }));

  return {
    articles,
    popularGroups,
    categoryGroups,
    homepageFaqList,
    popularChips,
    search,
    byId,
    byGroup,
    groupById,
    isPopularGroup,
    isCategoryGroup,
    removeDiacritics
  };
})();
