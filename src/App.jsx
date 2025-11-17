// src/App.jsx
import { useState } from "react";

const availableApps = [
  {
    id: "calendar",
    name: "Calendar",
    category: "productivity",
    description: "Schedule management and event reminders",
    price: "Free",
    link:
      "https://opal.google/?flow=drive:/1PQTReOZDONWfVUhU0cKlRKF_uKY2eMpA&shared&mode=app",
    iconText: "Cal",
  },
  {
    id: "thip2025",
    name: "Graph Analysis",
    category: "quality",
    description: "Industrial transformation initiative",
    price: "Free",
    link:
      "https://opal.google/?flow=drive:/1Is5JeO-QMFM72F01p1jt79ORKyd0h8mq&shared&mode=app",
    iconText: "TH",
  },
  {
    id: "rca",
    name: "RCA assistant",
    category: "safety",
    description: "Root cause analysis with digital tools",
    price: "Free",
    link: "https://toolb1.onrender.com/",
    iconText: "RC",
  },
  {
    id: "sar",
    name: "SAR assistant",
    category: "quality",
    description: "Support for self-assessment reporting",
    price: "Free",
    link: "https://sar2022.onrender.com/",
    iconText: "SAR",
  },
];

function AppCard({ app }) {
  const iconText = app.iconText || app.name[0];

  return (
    <div className="app-card">
      <div className="app-card-header">
        <span className="app-icon">{iconText}</span>
        <span className="app-tag">{app.category}</span>
      </div>

      <h3 className="app-title">{app.name}</h3>
      <p className="app-description">{app.description}</p>

      <div className="app-footer">
        <span className="app-price">{app.price}</span>

        <a
          className="btn-primary"
          href={app.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Click
        </a>
      </div>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState("app");

  const handleTabClick = (tab) => (e) => {
    e.preventDefault();
    setActiveTab(tab);
  };

  return (
    <div className="app-root">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="workspace-logo">Q</div>
          <div>
            <div className="workspace-name">QTBI</div>
            <div className="workspace-plan">Quality to be Improved</div>
          </div>
        </div>

        <nav className="sidebar-nav">
          <a
            href="#"
            className={`nav-item ${activeTab === "app" ? "active" : ""}`}
            onClick={handleTabClick("app")}
          >
            <span className="nav-dot" /> App
          </a>
          <a
            href="#"
            className={`nav-item ${activeTab === "manual" ? "active" : ""}`}
            onClick={handleTabClick("manual")}
          >
            Manual
          </a>
          <a
            href="#"
            className={`nav-item ${activeTab === "contact" ? "active" : ""}`}
            onClick={handleTabClick("contact")}
          >
            Contact
          </a>
        </nav>

        <div className="sidebar-installed">
          <div className="installed-title">Installed Apps</div>
          <div className="installed-item">
            <span className="installed-dot" />
            Opal
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="main">
        {/* ✅ โลโก้ 4 อัน อยู่ตรงกลางด้านบนสุด */}
        <div className="logo-strip">
          <img
            src="https://github.com/HOIARRTool/appqtbi/blob/main/messageImage_1763018987241.jpg?raw=true"
            alt="Logo 1"
            className="logo-img"
          />
          <img
            src="https://github.com/HOIARRTool/appqtbi/blob/main/messageImage_1763018963411.jpg?raw=true"
            alt="Logo 2"
            className="logo-img"
          />
          <img
            src="https://mfu.ac.th/fileadmin/_processed_/6/7/csm_logo_mfu_3d_colour_15e5a7a50f.png"
            alt="Logo 3"
            className="logo-img logo-img-3"
          />
          <img
            src="https://github.com/HOIARRTool/appqtbi/blob/main/logoSHS.png?raw=true"
            alt="Logo 4"
            className="logo-img logo-img-4"
          />
        </div>

        {activeTab === "app" && (
          <>
            <header className="main-header">
              <h2>กรุณาเลือกโปรแกรมที่ต้องการใช้งาน</h2>
              <span className="apps-count">{availableApps.length} apps</span>
            </header>

            <section className="apps-grid">
              {availableApps.map((app) => (
                <AppCard key={app.id} app={app} />
              ))}
            </section>
          </>
        )}

        {activeTab === "manual" && (
          <section className="placeholder-section">
            <h1>Manual</h1>
            <p>เอกสารคู่มือจะถูกเพิ่มในภายหลัง</p>
          </section>
        )}

        {activeTab === "contact" && (
          <section className="contact-section">
            <div className="contact-card">
              <h1 className="contact-title">Contact</h1>
              <p className="contact-text">
                หากต้องการติดต่อทีมงาน กรุณาส่งอีเมลมาที่
              </p>
              <a
                className="contact-email"
                href="mailto:wilasinee.kue@mfu.ac.th"
              >
                wilasinee.kue@mfu.ac.th
              </a>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
