import React, { useEffect, useState } from 'react';
import { LangProvider, useLang } from './LangContext';
import Projects from './components/Projects';
import './App.css';

const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    const stars = [];
    for (let i = 0; i < fullStars; i++) stars.push(<i key={`f-${i}`} className="bi bi-star-fill text-warning me-1"></i>);
    if (hasHalfStar) stars.push(<i key="half" className="bi bi-star-half text-warning me-1"></i>);
    for (let i = 0; i < emptyStars; i++) stars.push(<i key={`e-${i}`} className="bi bi-star text-secondary opacity-50 me-1"></i>);

    return <span className="star-rating">{stars}</span>;
};

const Navbar = () => {
    const { lang, toggleLang, t } = useLang();
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                document.querySelector('.navbar').classList.add('scrolled', 'shadow-sm');
            } else {
                document.querySelector('.navbar').classList.remove('scrolled', 'shadow-sm');
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top custom-navbar">
            <div className="container">
                <a className="navbar-brand fw-bold fs-4" href="#">Hien<span className="text-primary">Tran</span></a>
                
                <div className="d-flex align-items-center order-lg-last ms-auto">
                    <div className="btn-group me-2">
                        <button className={`btn btn-sm btn-outline-primary ${lang === 'vi' ? 'active' : ''}`} onClick={() => toggleLang('vi')}>VI</button>
                        <button className={`btn btn-sm btn-outline-primary ${lang === 'en' ? 'active' : ''}`} onClick={() => toggleLang('en')}>EN</button>
                    </div>
                    <button className="navbar-toggler border-0 shadow-none ps-2 pe-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item"><a className="nav-link" href="#about">{t("Giới thiệu", "About")}</a></li>
                        <li className="nav-item"><a className="nav-link" href="#skills">{t("Kỹ năng", "Skills")}</a></li>
                        <li className="nav-item"><a className="nav-link" href="#projects">{t("Dự án", "Projects")}</a></li>
                        <li className="nav-item"><a className="nav-link" href="#certificates">{t("Chứng chỉ & Điểm", "Certificates")}</a></li>
                        <li className="nav-item ms-lg-3 mt-3 mt-lg-0 mb-3 mb-lg-0">
                            <a className="nav-link btn btn-primary px-4 py-2 text-white rounded-pill shadow-sm" href="#hero">{t("Liên hệ", "Contact")}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

const Hero = () => {
    const { t } = useLang();
    return (
        <section id="hero" className="d-flex align-items-center min-vh-100 bg-light-gradient">
            <div className="container position-relative z-1 pt-5">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-6 hero-text text-start order-2 order-lg-1 mt-5 mt-lg-0">
                        <p className="text-primary fw-semibold mb-2 fs-5 tracking-wide text-uppercase">{t("Xin chào, Tôi là", "Hello, I am")}</p>
                        <h1 className="display-3 fw-bold mb-3 text-dark">TRẦN QUANG <span className="text-gradient">HIỂN</span></h1>
                        <h2 className="h4 text-secondary mb-4">Software Engineer</h2>
                        
                        {/* Contact Info Block */}
                        <div className="bg-white p-4 rounded-4 shadow-sm border border-light mb-4">
                            <ul className="list-unstyled mb-0 row">
                                <li className="col-md-6 mb-2"><strong>{t("DOB:", "DOB:")}</strong> 14/06/2004</li>
                                <li className="col-md-6 mb-2"><strong>{t("Điện thoại:", "Phone:")}</strong> 0817504769</li>
                                <li className="col-12 mb-2"><strong>{t("Email:", "Email:")}</strong> hienquangtranht1@gmail.com</li>
                                <li className="col-12 mb-2"><strong>{t("Địa chỉ:", "Address:")}</strong> Phuoc Long B, Thu Duc, Ho Chi Minh City</li>
                                <li className="col-12 mb-2"><strong>{t("Đại học:", "University:")}</strong> Ho Chi Minh City University of Technology (HUTECH)</li>
                                <li className="col-md-6 mb-2"><strong>{t("Chuyên ngành:", "Major:")}</strong> Software Engineering</li>
                                <li className="col-md-6 mb-2"><strong>{t("GPA:", "GPA:")}</strong> 3.21 / 4.0</li>
                                <li className="col-12 mb-0"><strong>{t("Graduation:", "Graduation:")}</strong> Expected 08/2026</li>
                            </ul>
                        </div>

                        <div className="d-flex gap-3 flex-wrap">
                            <a href="#projects" className="btn btn-primary btn-lg rounded-pill px-4 shadow-primary">
                                {t("Xem Dự Án", "View Projects")} <i className="bi bi-arrow-right ms-2"></i>
                            </a>
                            <a href="https://github.com/hienquangtranht1" target="_blank" rel="noreferrer" className="btn btn-outline-dark btn-lg rounded-pill px-4 shadow-sm">
                                <i className="bi bi-github me-2"></i> GitHub
                            </a>
                            <a href="https://linkedin.com/in/trần-quang-hiển-49a3723ba" target="_blank" rel="noreferrer" className="btn btn-outline-primary btn-lg rounded-pill px-4 shadow-sm">
                                <i className="bi bi-linkedin me-2"></i> LinkedIn
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-5 order-1 order-lg-2 text-center position-relative">
                        <div className="blob-bg"></div>
                        <img src="/avatar.jpg" alt="Trần Quang Hiển" className="img-fluid hero-avatar position-relative z-2" />
                    </div>
                </div>
            </div>
        </section>
    );
};

const About = () => {
    const { t } = useLang();
    return (
        <section id="about" className="py-5 section-padding">
            <div className="container">
                <div className="text-center mb-5">
                    <span className="text-primary fw-bold text-uppercase tracking-wide small">{t("Giới Thiệu", "About Me")}</span>
                    <h2 className="display-6 fw-bold mt-2 text-dark">{t("Về Bản Thân Tôi", "About Myself")}</h2>
                    <div className="divider mx-auto mt-3"></div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <div className="bg-white p-4 p-lg-5 rounded-4 shadow-sm border border-light">
                            <div className="d-flex align-items-center mb-4">
                                <img src="/avatar.jpg" alt="Trần Quang Hiển"
                                    className="rounded-circle me-4 border border-3 border-primary shadow-sm"
                                    style={{width: '80px', height: '80px', objectFit: 'cover'}} />
                                <div>
                                    <h4 className="fw-bold text-dark mb-1">Trần Quang Hiển</h4>
                                    <p className="text-primary fw-medium mb-0 small">Software Engineer · HUTECH · GPA 3.21/4.0</p>
                                </div>
                            </div>
                            <p className="text-muted line-height-lg mb-4">
                                {t(
                                    "Tôi là sinh viên năm cuối ngành Kỹ thuật phần mềm tại HUTECH. Trong suốt quá trình học, tôi đã tích lũy được kinh nghiệm thực chiến qua nhiều dự án nhóm và cá nhân. Về Backend, tôi có kinh nghiệm phát triển hệ thống với đa dạng ngôn ngữ như C# (.NET Core), Java (Spring Boot), JavaScript (Node.js) và PHP. Về Frontend, tôi xây dựng giao diện responsive với HTML5, CSS3, JavaScript, Bootstrap và ReactJS. Đặc biệt, tôi có kiến thức nền tảng vững chắc về Testing & QA, mong muốn áp dụng tư duy phân tích và kỹ năng lập trình để đảm bảo chất lượng phần mềm và thực hiện kiểm thử nghiêm ngặt.",
                                    "I am a final-year Software Engineering student at HUTECH with hands-on experience through multiple group and individual projects. On the Backend side, I have experience developing systems using various languages such as C# (.NET Core), Java (Spring Boot), JavaScript (Node.js), and PHP. On the Frontend side, I craft responsive interfaces. Most importantly, I have a strong foundation in Testing & QA, eager to apply analytical thinking and programming skills to ensure software quality and perform rigorous testing."
                                )}
                            </p>
                            <div className="bg-light-alt p-4 rounded-3">
                                <p className="mb-1 fw-semibold text-dark">
                                    <i className="bi bi-fire text-warning me-2"></i>{t("Mục tiêu:", "Objective:")}
                                </p>
                                <p className="text-muted mb-0">
                                    {t(
                                        "Tìm kiếm cơ hội thực tập / việc làm tại vị trí ",
                                        "Seeking internship or full-time position as "
                                    )}
                                    <span className="text-primary fw-bold">QA/QC Intern</span>
                                    {t(" hoặc ", " or ")}
                                    <span className="text-primary fw-bold">Backend Developer</span>
                                    {t(
                                        " để áp dụng kỹ năng kỹ thuật vào kiểm thử và phát triển hệ thống.",
                                        " to apply technical skills in system testing and development."
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


const Skills = () => {
    const { t } = useLang();
    return (
        <section id="skills" className="py-5 section-padding bg-light-alt">
            <div className="container">
                <div className="text-center mb-5">
                    <span className="text-primary fw-bold text-uppercase tracking-wide small">{t("Chuyên Môn & Kỹ Năng Mềm", "Expertise & Soft Skills")}</span>
                    <h2 className="display-6 fw-bold mt-2 text-dark">{t("Năng Lực Phân Tích", "Competency Analysis")}</h2>
                    <div className="divider mx-auto mt-3"></div>
                </div>
                
                <div className="row g-4">
                    {/* Technical Skills - Exact Match to Spec */}
                    <div className="col-lg-12 mb-4">
                        <div className="card border-0 shadow-sm rounded-4 h-100">
                            <div className="card-body p-4 p-md-5">
                                <h4 className="fw-bold fs-5 text-dark border-bottom pb-3 mb-4">
                                    <i className="bi bi-laptop text-primary me-2"></i>{t("Kỹ năng Chuyên môn (Technical Skills)", "Technical Skills")}
                                </h4>
                                <div className="row g-4 text-muted">

                                    {/* Frontend */}
                                    <div className="col-md-4">
                                        <div className="p-3 rounded-3 border border-primary border-opacity-25 bg-primary bg-opacity-10 h-100">
                                            <h6 className="fw-bold text-primary mb-3"><i className="bi bi-browser-chrome me-1"></i>Frontend</h6>
                                            <div className="d-flex flex-wrap gap-2">
                                                {["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "ReactJS"].map(s => (
                                                    <span key={s} className="badge bg-white border border-primary-subtle text-primary-emphasis px-2 py-1 rounded-pill small">{s}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Backend */}
                                    <div className="col-md-4">
                                        <div className="p-3 rounded-3 border border-success border-opacity-25 bg-success bg-opacity-10 h-100">
                                            <h6 className="fw-bold text-success mb-3"><i className="bi bi-server me-1"></i>Backend</h6>
                                            <div className="d-flex flex-wrap gap-2">
                                                {["C# / .NET Core", "Java / Spring Boot", "JavaScript / Node.js", "PHP", "REST API"].map(s => (
                                                    <span key={s} className="badge bg-white border border-success-subtle text-success-emphasis px-2 py-1 rounded-pill small">{s}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Testing & QA */}
                                    <div className="col-md-4">
                                        <div className="p-3 rounded-3 border border-danger border-opacity-25 bg-danger bg-opacity-10 h-100">
                                            <h6 className="fw-bold text-danger mb-3"><i className="bi bi-bug me-1"></i>Testing & QA</h6>
                                            <div className="d-flex flex-wrap gap-2">
                                                {["API Testing (Postman)", "Database Testing", "Integration Testing", "System Logic Validation"].map(s => (
                                                    <span key={s} className="badge bg-white border border-danger-subtle text-danger-emphasis px-2 py-1 rounded-pill small">{s}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mobile */}
                                    <div className="col-md-4">
                                        <div className="p-3 rounded-3 border border-info border-opacity-25 bg-info bg-opacity-10 h-100">
                                            <h6 className="fw-bold text-info mb-3"><i className="bi bi-phone me-1"></i>Mobile</h6>
                                            <div className="d-flex flex-wrap gap-2">
                                                {["Flutter (Dart)", "Cross-Platform"].map(s => (
                                                    <span key={s} className="badge bg-white border border-info-subtle text-info-emphasis px-2 py-1 rounded-pill small">{s}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Database */}
                                    <div className="col-md-4">
                                        <div className="p-3 rounded-3 border border-warning border-opacity-25 bg-warning bg-opacity-10 h-100">
                                            <h6 className="fw-bold text-warning mb-3"><i className="bi bi-database me-1"></i>Database</h6>
                                            <div className="d-flex flex-wrap gap-2">
                                                {["MySQL", "SQL Server", "MongoDB", "Entity Framework"].map(s => (
                                                    <span key={s} className="badge bg-white border border-warning-subtle text-warning-emphasis px-2 py-1 rounded-pill small">{s}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tools & Concepts */}
                                    <div className="col-md-4">
                                        <div className="p-3 rounded-3 border border-secondary border-opacity-25 bg-secondary bg-opacity-10 h-100">
                                            <h6 className="fw-bold text-secondary mb-3"><i className="bi bi-tools me-1"></i>Tools & Concepts</h6>
                                            <div className="d-flex flex-wrap gap-2">
                                                {["Git / GitHub", "Docker", "Postman", "Figma (UI/UX review)", "OOP", "MVC"].map(s => (
                                                    <span key={s} className="badge bg-white border border-secondary-subtle text-secondary-emphasis px-2 py-1 rounded-pill small">{s}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Soft Skills */}
                    <div className="col-lg-6">
                        <div className="card border-0 shadow-sm rounded-4 h-100">
                            <div className="card-body p-4 p-md-5">
                                <h4 className="fw-bold fs-5 text-dark border-bottom pb-3 mb-4"><i className="bi bi-people-fill text-info me-2"></i>{t("Kỹ năng Khác (Soft Skills)", "Soft Skills")}</h4>
                                <ul className="list-unstyled mb-0">
                                    <li className="d-flex justify-content-between align-items-center mb-3">
                                        <span className="text-muted fw-medium">{t("Giao tiếp (Communication)", "Communication")}</span>
                                        <StarRating rating={4} />
                                    </li>
                                    <li className="d-flex justify-content-between align-items-center mb-3">
                                        <span className="text-muted fw-medium">{t("Làm việc nhóm (Teamwork)", "Teamwork")}</span>
                                        <StarRating rating={4} />
                                    </li>
                                    <li className="d-flex justify-content-between align-items-center mb-3">
                                        <span className="text-muted fw-medium">{t("Học hỏi nhanh (Fast-learning)", "Fast-learning")}</span>
                                        <StarRating rating={4.5} />
                                    </li>
                                    <li className="d-flex justify-content-between align-items-center mb-3">
                                        <span className="text-muted fw-medium">{t("Đọc hiểu Tiếng Anh chuyên ngành", "English Document Reading")}</span>
                                        <StarRating rating={3} />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Hobbies */}
                    <div className="col-lg-6">
                        <div className="card border-0 shadow-sm rounded-4 h-100">
                            <div className="card-body p-4 p-md-5">
                                <h4 className="fw-bold fs-5 text-dark border-bottom pb-3 mb-4"><i className="bi bi-controller text-warning me-2"></i>{t("Sở Thích (Hobbies)", "Hobbies")}</h4>
                                <p className="text-muted small mb-4">{t("Sức khỏe tốt và năng lượng dồi dào là lợi thế để chịu áp lực cao trong ngành IT.", "Good health and energy are great advantages to bear high pressure in IT.")}</p>
                                <ul className="list-unstyled mb-0">
                                    <li className="d-flex justify-content-between align-items-center mb-3">
                                        <span className="text-muted fw-medium">{t("Cầu lông (Badminton)", "Badminton")}</span>
                                        <StarRating rating={4.5} />
                                    </li>
                                    <li className="d-flex justify-content-between align-items-center mb-3">
                                        <span className="text-muted fw-medium">{t("Tập Gym (Gym & Fitness)", "Gym & Fitness")}</span>
                                        <StarRating rating={5} />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


const Certificates = () => {
    const { t } = useLang();
    const [lightbox, setLightbox] = useState(null);

    const certs = [
        { img: "/bang diem1.jpg", title: "Bảng điểm 1" },
        { img: "/bang diem 2.jpg", title: "Bảng điểm 2" },
        { img: "/bang diem 3.jpg", title: "Bảng điểm 3" },
        { img: "/cert1.jpg", title: "CEF B1 English" },
        { img: "/cert2.jpg", title: t("Giao Tiếp & LV Nhóm", "Communication & Teamwork") },
    ];

    return (
        <section id="certificates" className="py-5 section-padding bg-light-alt">
            <div className="container">
                <div className="text-center mb-5">
                    <span className="text-primary fw-bold text-uppercase tracking-wide small">{t("Thành tựu & Kết quả Học Tập", "Achievements & Study Records")}</span>
                    <h2 className="display-6 fw-bold mt-2 text-dark">{t("Chứng Chỉ & Bảng Điểm", "Certificates & Transcripts")}</h2>
                    <p className="text-muted small mt-2">{t("Nhấp vào ảnh để xem phóng to", "Click an image to view fullscreen")}</p>
                    <div className="divider mx-auto mt-3"></div>
                </div>

                <div className="row justify-content-center text-center g-4">
                    {certs.map((c, i) => (
                        <div key={i} className="col-12 col-md-6 col-lg-4">
                            <div
                                className="cert-card bg-white p-3 rounded-4 shadow-sm h-100 group-hover"
                                style={{ cursor: 'pointer' }}
                                onClick={() => setLightbox(c)}
                            >
                                <div className="cert-img-wrapper mb-3 overflow-hidden rounded-3 position-relative">
                                    <img src={c.img} className="img-fluid cert-img w-100" alt={c.title} />
                                    <div className="cert-zoom-hint position-absolute bottom-0 start-0 end-0 d-flex align-items-center justify-content-center">
                                        <i className="bi bi-zoom-in fs-4 text-white"></i>
                                    </div>
                                </div>
                                <h6 className="fw-bold text-dark m-0 pb-2">{c.title}</h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Overlay */}
            {lightbox && (
                <div
                    className="lightbox-overlay"
                    onClick={() => setLightbox(null)}
                >
                    <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                        <button
                            className="lightbox-close btn btn-light rounded-circle shadow"
                            onClick={() => setLightbox(null)}
                        >
                            <i className="bi bi-x-lg fs-5"></i>
                        </button>
                        <img src={lightbox.img} alt={lightbox.title} className="lightbox-img" />
                        <p className="lightbox-title">{lightbox.title}</p>
                    </div>
                </div>
            )}
        </section>
    );
};

const Footer = () => {
    const { t } = useLang();
    return (
        <footer id="contact" className="py-5 bg-dark text-white">
            <div className="container text-center py-4">
                <h2 className="fw-bold mb-4">{t("Sẵn Sàng Hợp Tác?", "Ready To Collaborate?")}</h2>
                <div className="d-flex justify-content-center gap-4 mb-5">
                    <a href="https://github.com/hienquangtranht1" target="_blank" rel="noreferrer" className="social-icon text-white"><i className="bi bi-github"></i></a>
                    <a href="mailto:hienquangtranht1@gmail.com" className="social-icon text-white"><i className="bi bi-envelope-fill"></i></a>
                    <a href="https://linkedin.com/in/trần-quang-hiển-49a3723ba" target="_blank" rel="noreferrer" className="social-icon text-white"><i className="bi bi-linkedin"></i></a>
                </div>
                <hr className="border-secondary opacity-25" />
                <p className="text-muted small m-0 mt-4">&copy; 2026 Trần Quang Hiển. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

function App() {
    return (
        <LangProvider>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Certificates />
            <Footer />
        </LangProvider>
    );
}

export default App;
