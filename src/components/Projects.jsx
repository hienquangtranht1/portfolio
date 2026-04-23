import React from 'react';
import { useLang } from '../LangContext';

const Projects = () => {
    const { t } = useLang();

    const personalProjects = [
        {
            title: "P2P Chat App",
            url: "https://github.com/hienquangtranht1/P2P_CHAT",
            color: "primary",
            descVi: "Ứng dụng trò chuyện Real-time theo giao thức Peer-to-Peer. Trao đổi dữ liệu trực tiếp không qua trung gian server, bảo mật đầu cuối, xử lý kết nối socket đồng thời nhiều clients.",
            descEn: "Real-time chat app using P2P protocol. Direct secure data exchange bypassing central servers, end-to-end encryption, multi-client socket management.",
            noteVi: "Kết nối thời gian thực & bảo mật đầu cuối.",
            noteEn: "Real-time websockets & End-to-end security."
        },
        {
            title: "Smart English Learning",
            url: "https://github.com/hienquangtranht1/Smart-English-Learning-Application",
            color: "info",
            descVi: "Ứng dụng học tiếng Anh thông minh với bài tập từ vựng, ngữ pháp tương tác. Tích hợp thuật toán gợi ý bài học dựa trên mức độ thành thạo của từng người dùng.",
            descEn: "Smart English learning app with interactive exercises. Features an algorithmic lesson recommendation system based on individual proficiency.",
            noteVi: "Tối ưu UX & thuật toán bài tập thích ứng.",
            noteEn: "Optimized UX & algorithm-driven exercises."
        },
        {
            title: "Medical MongoApp",
            url: "https://github.com/hienquangtranht1/MEDICAL_MongoApp_Demo_CSDL_NC",
            color: "success",
            descVi: "Ứng dụng quản lý CSDL nâng cao sử dụng NoSQL MongoDB. Nghiên cứu và tối ưu pipeline truy vấn dữ liệu y tế phức tạp, phân tích hiệu năng Aggregation so với SQL.",
            descEn: "Advanced database app using NoSQL MongoDB. Research and benchmark complex medical data query pipelines and Aggregation performance.",
            noteVi: "NoSQL Aggregation & Tối ưu hiệu năng DB.",
            noteEn: "NoSQL aggregation & Performance benchmarking."
        },
        {
            title: "Racing Game",
            url: "https://github.com/hienquangtranht1/Racing_Game",
            color: "warning",
            descVi: "Trò chơi đua xe tương tác viết bằng JavaScript thuần. Áp dụng xử lý va chạm (collision detection), vòng lặp đồ hoạ (game loop) và quản lý sự kiện bàn phím.",
            descEn: "Interactive racing game in pure JavaScript. Applies collision detection, game loop rendering, physics-based movement and keyboard event handling.",
            noteVi: "Vật lý chuyển động & Canvas Game Loop.",
            noteEn: "Physics emulation & Canvas Game Loop."
        }
    ];

    return (
        <section id="projects" className="py-5 section-padding">
            <div className="container">
                <div className="text-center mb-5">
                    <span className="text-primary fw-bold text-uppercase tracking-wide small">
                        {t("Kinh nghiệm thực tiễn", "Practical Experience")}
                    </span>
                    <h2 className="display-6 fw-bold mt-2 text-dark">
                        {t("Dự Án Tiêu Biểu", "Showcase Projects")}
                    </h2>
                    <div className="divider mx-auto mt-3"></div>
                </div>

                {/* ===== CÁ NHÂN NỔI BẬT - SMART TOUR (từ CV thật) ===== */}
                <div className="mb-5">
                    <div className="d-flex align-items-center mb-4">
                        <h3 className="h4 fw-bold text-dark m-0">
                            <i className="bi bi-star-fill text-warning me-2"></i>
                            {t("Dự Án Cá Nhân Nổi Bật", "Featured Personal Project")}
                        </h3>
                    </div>
                    <div className="project-card bg-white rounded-4 p-4 p-lg-5 shadow-sm position-relative overflow-hidden border-start border-primary border-5">
                        <span className="position-absolute top-0 end-0 bg-primary text-white px-4 py-2 fw-bold shadow-sm"
                            style={{ borderBottomLeftRadius: '12px', fontSize: '0.8rem', letterSpacing: '0.05em' }}>
                            🌐 LIVE: smarttour.site
                        </span>
                        <div className="d-flex justify-content-between align-items-start mb-3 pt-3 flex-wrap gap-2">
                            <div>
                                <h3 className="fw-bold text-dark text-uppercase m-0">Smart Tour Da Lat</h3>
                                <p className="text-muted small mb-0 mt-1">
                                    Java · Spring Boot · MySQL · JavaScript · HTML5/CSS3 · WebSocket · VNPay · Gemini AI
                                </p>
                            </div>
                            <div className="d-flex gap-2 align-items-center flex-wrap">
                                <a href="https://smarttour.site/" target="_blank" rel="noreferrer"
                                    className="btn btn-sm btn-primary rounded-pill px-3">
                                    <i className="bi bi-globe me-1"></i>Live Demo
                                </a>
                                <a href="https://github.com/hienquangtranht1/Smart-Tour-DLat" target="_blank" rel="noreferrer"
                                    className="btn btn-sm btn-outline-dark rounded-pill px-3">
                                    <i className="bi bi-github me-1"></i>GitHub
                                </a>
                                <span className="badge bg-success-subtle text-success border border-success-subtle px-3 py-2 rounded-pill">
                                    <i className="bi bi-person-fill me-1"></i>{t("Full-Stack Developer", "Full-Stack Developer")}
                                </span>
                            </div>
                        </div>

                        <p className="text-muted fs-6 mb-4">
                            {t(
                                "Xây dựng nền tảng quản lý du lịch Đà Lạt toàn diện, cung cấp gợi ý lịch trình thông minh, thanh toán trực tuyến an toàn, tương tác thời gian thực và triển khai thực tế trên domain sống (https://smarttour.site/).",
                                "Built a comprehensive Dalat tourism management platform offering intelligent itinerary suggestions, secure online payments, real-time interactions, and a fully functional live deployment at https://smarttour.site/."
                            )}
                        </p>

                        <h6 className="fw-bold text-dark mb-3">{t("Trách nhiệm đảm nhận:", "Responsibilities:")}</h6>
                        <ul className="text-muted small mb-4 tech-list">
                            <li>{t("Thiết kế schema MySQL chuẩn hóa và xây dựng RESTful API mạnh mẽ để quản lý tour, booking và hồ sơ người dùng hiệu quả.", "Designed a normalized MySQL schema and built robust RESTful APIs to efficiently manage tours, bookings, and user profiles.")}</li>
                            <li>{t("Xây dựng hệ thống xác thực bảo mật với OTP/email và tích hợp cổng thanh toán VNPay cho giao dịch trực tuyến liền mạch.", "Implemented a secure authentication system with OTP/email notifications and integrated the VNPay gateway for seamless online transactions.")}</li>
                            <li>{t("Phát triển giao diện web responsive và tương tác bằng HTML5, CSS3 và JavaScript; tối ưu layout hiển thị lịch trình AI và luồng thanh toán VNPay.", "Developed a responsive and interactive web interface using HTML5, CSS3, and JavaScript; optimized layout for AI-generated itineraries and VNPay transaction flow.")}</li>
                            <li>{t("Tích hợp Frontend với WebSocket để hiển thị thông báo tức thì và cập nhật UI thời gian thực, nâng cao trải nghiệm người dùng.", "Handled frontend integration with WebSocket to display instant notifications and real-time UI updates, enhancing user engagement.")}</li>
                            <li>{t("Ứng dụng Gemini AI để tự động tạo lịch trình du lịch cá nhân hóa và thông minh dựa trên sở thích người dùng.", "Leveraged Gemini AI to automatically generate personalized and intelligent travel itineraries based on user preferences.")}</li>
                            <li>{t("Cấu hình và triển khai môi trường production trên Linux Cloud VPS, hosting thành công ứng dụng trên live domain.", "Configured and deployed the production environment on a Linux Cloud VPS, successfully hosting the application on a live domain.")}</li>
                        </ul>
                        <div className="pt-3 border-top border-light">
                            {["Spring Boot / Java", "MySQL", "VNPay Integration", "Gemini AI", "WebSocket", "Docker/VPS Deployment"].map(tag => (
                                <span key={tag} className="badge bg-primary-subtle text-primary border border-primary-subtle px-3 py-2 me-2 mb-2 rounded-pill">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ===== DỰ ÁN NHÓM ===== */}
                <div className="mb-5 pb-5 border-bottom">
                    <div className="d-flex align-items-center mb-4">
                        <h3 className="h4 fw-bold text-dark m-0">
                            <i className="bi bi-people-fill text-primary me-2"></i>
                            {t("Dự Án Nhóm", "Team Projects")}
                        </h3>
                    </div>
                    <div className="row g-4">
                        {/* Hospital Booking - dữ liệu thật từ CV */}
                        <div className="col-lg-12">
                            <div className="project-card bg-white rounded-4 p-4 p-lg-5 shadow-sm border-start border-warning border-4">
                                <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-3">
                                    <div>
                                        <h4 className="fw-bold m-0 text-dark">
                                            Hospital Booking System
                                        </h4>
                                        <p className="text-muted small mb-0 mt-1">
                                            PHP → C# .NET Core · ASP.NET Core MVC · Flutter (Dart) · SQL Server · REST API · SignalR
                                        </p>
                                    </div>
                                    <div className="d-flex gap-2 align-items-center flex-wrap">
                                        <a href="https://github.com/hienquangtranht1/Hospital-Bookin-System" target="_blank" rel="noreferrer" className="text-warning fs-3 git-icon">
                                            <i className="bi bi-github"></i>
                                        </a>
                                        <span className="badge bg-warning-subtle text-warning border border-warning-subtle px-3 py-2 rounded-pill">
                                            <i className="bi bi-code-slash me-1"></i>{t("Web: Backend Developer | Mobile: Full-Stack Developer", "Web: Backend Developer | Mobile: Full-Stack Developer")}
                                        </span>
                                    </div>
                                </div>

                                <p className="text-muted fs-6 mb-4">
                                    {t(
                                        "Hệ thống đặt lịch khám bệnh viện đa nền tảng (Web & Mobile). Bên Web: tôi đảm nhận vai trò Backend, xây dựng toàn bộ API và logic hệ thống. Bên Mobile (Flutter): tôi đảm nhận Full-stack, tự thiết kế giao diện và kết nối API hoàn chỉnh.",
                                        "Cross-platform hospital appointment system (Web & Mobile). Web side: I took the Backend role, building all APIs and system logic. Mobile side (Flutter): I handled Full-stack, designing the UI and fully integrating the API."
                                    )}
                                </p>

                                <h6 className="fw-bold text-dark mb-3">{t("Trách nhiệm đảm nhận:", "Responsibilities:")}</h6>
                                <ul className="text-muted small mb-4 tech-list">
                                    <li>{t("Thiết kế UI/UX mockup và prototype tương tác trên Figma cho cả web và mobile trước khi triển khai, đảm bảo giao diện nhất quán và thân thiện người dùng.", "Designed high-fidelity UI/UX mockups and interactive prototypes on Figma for both web and mobile before implementation, ensuring consistent and user-friendly interfaces.")}</li>
                                    <li>{t("Migrate và tái thiết kế dự án từ PHP demo sang hệ thống đa nền tảng: web admin C# .NET và mobile app Flutter; độc lập phát triển toàn bộ backend cho mobile.", "Migrated and redesigned the project from PHP demo into a cross-platform system: C# .NET admin web and Flutter mobile app, independently developing the full backend for mobile.")}</li>
                                    <li>{t("Thiết kế schema SQL Server chuẩn hóa, áp dụng Entity Framework; xây dựng REST API đồng bộ dữ liệu liền mạch giữa web và mobile, render động các UI component (hồ sơ bác sĩ, lịch hẹn).", "Designed normalized SQL Server schema with Entity Framework; built REST APIs to synchronize data between web and mobile, dynamically rendering UI components (doctor profiles, appointment schedules).")}</li>
                                    <li>{t("Sử dụng SignalR để kích hoạt tính năng thời gian thực: chat hỗ trợ bệnh nhân, Q&A bác sĩ và cập nhật trạng thái lịch hẹn tức thì; tích hợp chatbot Q&A AI.", "Used SignalR to enable real-time features: patient support chat, doctor Q&A, and instant appointment updates; integrated an AI-powered Q&A chatbot.")}</li>
                                </ul>
                                <div className="pt-3 border-top border-light">
                                    {["C# .NET Core", "ASP.NET Core MVC", "Flutter (Dart)", "SQL Server + EF", "REST API", "SignalR", "Figma", "AI Chatbot"].map(tag => (
                                        <span key={tag} className="badge bg-warning-subtle text-warning border border-warning-subtle px-3 py-2 me-2 mb-2 rounded-pill">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Task Manager */}
                        <div className="col-lg-12">
                            <div className="project-card bg-white rounded-4 p-4 p-lg-5 shadow-sm border-start border-info border-4">
                                <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
                                    <div>
                                        <h4 className="fw-bold m-0 text-dark">
                                            <a href="https://github.com/hienquangtranht1/MANGER_TASK_PROJECT" target="_blank" rel="noreferrer"
                                                className="text-decoration-none text-dark hover-primary">Task Manager System</a>
                                        </h4>
                                        <p className="text-muted small mb-0 mt-1">Node.js · JWT · WebSocket · MongoDB · REST API</p>
                                    </div>
                                    <a href="https://github.com/hienquangtranht1/MANGER_TASK_PROJECT" target="_blank" rel="noreferrer" className="text-info fs-3 git-icon">
                                        <i className="bi bi-github"></i>
                                    </a>
                                </div>
                                <p className="text-muted fs-6 mb-4">
                                    {t("Hệ thống quản lý dự án và phân công nhiệm vụ cho tổ chức. Tích hợp nhắn tin thời gian thực và bảo mật xác thực JWT.", "Project and task management system for organizations. Integrated real-time messaging and modern JWT-based security.")}
                                </p>
                                <h6 className="fw-bold text-dark mb-3">{t("Phụ trách Backend chính:", "Core Backend Responsibilities:")}</h6>
                                <ul className="text-muted small mb-4 tech-list">
                                    <li><strong>Auth:</strong> Đăng ký (<code>POST /api/v1/auth/register</code>), Đăng nhập JWT (<code>POST /api/v1/auth/login</code>), Đổi mật khẩu (<code>POST /api/v1/auth/changepassword</code>).</li>
                                    <li><strong>{t("Quản lý thực thể:", "Entity Management:")}</strong> CRUD Users (<code>GET /api/v1/users</code>), Roles (<code>/api/v1/roles</code>), Departments (<code>/api/v1/departments</code>).</li>
                                    <li><strong>Security & Realtime:</strong> {t("Triển khai WebSocket nhắn tin realtime và mã hoá bất đối xứng bảo vệ dữ liệu.", "Implemented WebSocket real-time messaging and asymmetric encryption for data protection.")}</li>
                                </ul>
                                <div className="pt-3 border-top border-light">
                                    {["Node.js", "JWT Auth", "WebSocket", "REST API", "MongoDB"].map(tag => (
                                        <span key={tag} className="badge bg-info-subtle text-info border border-info-subtle px-3 py-2 me-2 mb-2 rounded-pill">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ===== DỰ ÁN CÁ NHÂN KHÁC ===== */}
                <div>
                    <div className="d-flex align-items-center mb-4">
                        <h3 className="h4 fw-bold text-dark m-0">
                            <i className="bi bi-person-fill text-success me-2"></i>
                            {t("Dự Án Cá Nhân Khác", "Other Individual Projects")}
                        </h3>
                    </div>
                    <div className="row g-4">
                        {personalProjects.map((proj, i) => (
                            <div key={i} className="col-md-6">
                                <div className={`project-card bg-white rounded-4 p-4 shadow-sm border-start border-${proj.color} border-4 h-100 d-flex flex-column`}>
                                    <h5 className="fw-bold mb-3 d-flex justify-content-between align-items-center">
                                        <a href={proj.url} target="_blank" rel="noreferrer" className="text-dark text-decoration-none hover-primary">{proj.title}</a>
                                        <a href={proj.url} target="_blank" rel="noreferrer" className={`text-${proj.color}`}><i className="bi bi-box-arrow-up-right fs-6"></i></a>
                                    </h5>
                                    <p className="text-muted small flex-grow-1 mb-3">{t(proj.descVi, proj.descEn)}</p>
                                    <p className={`small text-${proj.color} fw-medium mb-0`}>
                                        <i className="bi bi-check2-circle me-1"></i>{t(proj.noteVi, proj.noteEn)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
