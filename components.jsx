// =====================================================
// Icons + shared chrome (Header, Footer, Breadcrumb)
// =====================================================

const Icon = ({ name, size = 20, stroke = 1.8 }) => {
  const s = { width: size, height: size, strokeWidth: stroke };
  const common = {
    width: size, height: size, viewBox: "0 0 24 24",
    fill: "none", stroke: "currentColor",
    strokeWidth: stroke, strokeLinecap: "round", strokeLinejoin: "round"
  };
  switch (name) {
    case "search":
      return (<svg {...common}><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>);
    case "arrow-right":
      return (<svg {...common}><path d="M5 12h14"></path><path d="m13 6 6 6-6 6"></path></svg>);
    case "chev-right":
      return (<svg {...common}><path d="m9 6 6 6-6 6"></path></svg>);
    case "chev-down":
      return (<svg {...common}><path d="m6 9 6 6 6-6"></path></svg>);
    case "user-plus":
      return (<svg {...common}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M19 8v6"></path><path d="M22 11h-6"></path></svg>);
    case "list":
      return (<svg {...common}><path d="M8 6h13"></path><path d="M8 12h13"></path><path d="M8 18h13"></path><circle cx="4" cy="6" r="1.2" fill="currentColor"></circle><circle cx="4" cy="12" r="1.2" fill="currentColor"></circle><circle cx="4" cy="18" r="1.2" fill="currentColor"></circle></svg>);
    case "refund":
      return (<svg {...common}><path d="M3 7v6h6"></path><path d="M3 13a9 9 0 1 0 3-7.7L3 7"></path></svg>);
    case "wallet":
      return (<svg {...common}><path d="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2"></path><path d="M16 12h6v4h-6a2 2 0 0 1 0-4z"></path></svg>);
    case "doc":
      return (<svg {...common}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"></path><path d="M14 3v5h5"></path><path d="M9 13h6"></path><path d="M9 17h4"></path></svg>);
    case "sliders":
      return (<svg {...common}><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>);
    case "link":
      return (<svg {...common}><path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.5 1.5"></path><path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.5-1.5"></path></svg>);
    case "shield":
      return (<svg {...common}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>);
    case "bank":
      return (<svg {...common}><path d="M3 10h18"></path><path d="m12 3 9 5H3z"></path><path d="M5 10v8"></path><path d="M9 10v8"></path><path d="M15 10v8"></path><path d="M19 10v8"></path><path d="M3 21h18"></path></svg>);
    case "alert":
      return (<svg {...common}><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>);
    case "percent":
      return (<svg {...common}><line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>);
    case "check":
      return (<svg {...common}><polyline points="20 6 9 17 4 12"></polyline></svg>);
    case "info":
      return (<svg {...common}><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>);
    case "clock":
      return (<svg {...common}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>);
    case "answer":
      return (<svg {...common}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>);
    case "play":
      return (<svg {...common}><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>);
    case "lightbulb":
      return (<svg {...common}><path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M12 2a7 7 0 0 0-4 12.7c1.2 1 1.5 1.8 1.5 3.3h5c0-1.5.3-2.3 1.5-3.3A7 7 0 0 0 12 2z"></path></svg>);
    case "thumb-up":
      return (<svg {...common}><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H7v-9.85L13.5 2A2.93 2.93 0 0 1 16 5.88z"></path></svg>);
    case "thumb-down":
      return (<svg {...common} style={{transform: "rotate(180deg)"}}><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H7v-9.85L13.5 2A2.93 2.93 0 0 1 16 5.88z"></path></svg>);
    case "headset":
      return (<svg {...common}><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1v-7h3z"></path><path d="M3 19a2 2 0 0 0 2 2h1v-7H3z"></path></svg>);
    case "ticket":
      return (<svg {...common}><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"></path><path d="M13 5v2"></path><path d="M13 11v2"></path><path d="M13 17v2"></path></svg>);
    case "x":
      return (<svg {...common}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>);
    case "sparkle":
      return (<svg {...common}><path d="M12 3v3"></path><path d="M12 18v3"></path><path d="M5.6 5.6l2.1 2.1"></path><path d="M16.3 16.3l2.1 2.1"></path><path d="M3 12h3"></path><path d="M18 12h3"></path><path d="M5.6 18.4l2.1-2.1"></path><path d="M16.3 7.7l2.1-2.1"></path></svg>);
    default:
      return (<svg {...common}><circle cx="12" cy="12" r="9"></circle></svg>);
  }
};

// ----------------- Header -----------------
const Header = ({ route, navigate }) => {
  return (
    <header className="hc-header">
      <div className="container hc-header-inner">
        <button
          className="hc-logo"
          onClick={() => navigate({ name: "home" })}
          style={{ background: "transparent", border: 0, padding: 0, cursor: "pointer" }}
        >
          <div className="hc-logo-mark">BK</div>
          <div className="hc-logo-text">
            <span className="brand">Baokim · Portal B2B</span>
            <span className="product">Trung tâm trợ giúp</span>
          </div>
        </button>

        <nav className="hc-nav">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); navigate({ name: "home" }); }}
            className={route.name === "home" ? "is-active" : ""}
          >Trang chủ</a>
        </nav>

        <a className="btn btn-primary" href="Trang chủ B2B.html">
          Đến Portal B2B
          <Icon name="arrow-right" size={16} />
        </a>
      </div>
    </header>
  );
};

// ----------------- Footer -----------------
const Footer = ({ navigate }) => {
  const cats = window.HC_DATA.categoryGroups;
  return (
    <footer className="hc-footer">
      <div className="container">
        <div className="hc-footer-top">
          <div className="brand-block">
            <div className="hc-logo">
              <div className="hc-logo-mark">BK</div>
              <div className="hc-logo-text">
                <span className="brand">Baokim · Portal B2B</span>
                <span className="product">Trung tâm trợ giúp</span>
              </div>
            </div>
            <p>Cổng thông tin hướng dẫn dành cho Merchant đang sử dụng dịch vụ thanh toán Baokim. Mọi câu hỏi gốc đều được lưu duy nhất tại Danh mục.</p>
          </div>
          <div className="col">
            <h5>Danh mục chính</h5>
            <ul>
              {cats.slice(0, 4).map((c) => (
                <li key={c.id}>
                  <a href="#" onClick={(e) => { e.preventDefault(); navigate({ name: "group", id: c.id }); }}>{c.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col">
            <h5>Danh mục khác</h5>
            <ul>
              {cats.slice(4).map((c) => (
                <li key={c.id}>
                  <a href="#" onClick={(e) => { e.preventDefault(); navigate({ name: "group", id: c.id }); }}>{c.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col">
            <h5>Hỗ trợ Merchant</h5>
            <ul>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Hotline: 1900 545 466</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Email: hotro@baokim.vn</a></li>
              <li><a href="Trang chủ B2B.html">Quay lại Portal B2B</a></li>
            </ul>
          </div>
        </div>
        <div className="hc-footer-bottom">
          <div>© 2026 Công ty Cổ phần Thương mại điện tử Bảo Kim. Tất cả các quyền được bảo lưu.</div>
          <div>v1.0 · Cập nhật 27.05.2026</div>
        </div>
      </div>
    </footer>
  );
};

// ----------------- Breadcrumb -----------------
const Crumbs = ({ items, navigate }) => {
  return (
    <nav className="crumbs container">
      {items.map((it, i) => (
        <React.Fragment key={i}>
          {it.to ? (
            <a href="#" onClick={(e) => { e.preventDefault(); navigate(it.to); }}>{it.label}</a>
          ) : (
            <span className="here">{it.label}</span>
          )}
          {i < items.length - 1 && <span className="sep">›</span>}
        </React.Fragment>
      ))}
    </nav>
  );
};

// ----------------- Live Search Box -----------------
const SearchBox = ({ navigate, autoFocus = false }) => {
  const [q, setQ] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [activeIdx, setActiveIdx] = React.useState(0);
  const wrapRef = React.useRef(null);
  const inputRef = React.useRef(null);

  const results = React.useMemo(() => window.HC_DATA.search(q), [q]);

  React.useEffect(() => {
    if (autoFocus && inputRef.current) inputRef.current.focus();
  }, [autoFocus]);

  React.useEffect(() => {
    const onClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  React.useEffect(() => { setActiveIdx(0); }, [q]);

  const goToResult = (item) => {
    setOpen(false);
    setQ("");
    navigate({ name: "article", id: item.id });
  };

  const onKeyDown = (e) => {
    if (!open || results.length === 0) return;
    if (e.key === "ArrowDown") { e.preventDefault(); setActiveIdx((i) => Math.min(i + 1, results.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActiveIdx((i) => Math.max(i - 1, 0)); }
    else if (e.key === "Enter") { e.preventDefault(); goToResult(results[activeIdx]); }
    else if (e.key === "Escape") setOpen(false);
  };

  const popularChips = window.HC_DATA.popularChips.map((p) => ({
    name: p.name,
    icon: p.icon,
    target: { name: "group", id: p.groupId }
  }));

  return (
    <div className="search-wrap" ref={wrapRef}>
      <div className="search-box">
        <span className="icon-search"><Icon name="search" size={20} /></span>
        <input
          ref={inputRef}
          type="text"
          placeholder="Tìm từ khoá, câu hỏi hoặc tên màn hình…"
          value={q}
          onChange={(e) => { setQ(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
        />
        <button className="btn-search" onClick={() => { if (results[0]) goToResult(results[0]); }}>
          Tìm kiếm
        </button>
      </div>

      {open && q.trim() && (
        <div className="search-results">
          <div className="search-results-header">
            {results.length > 0
              ? `${results.length} kết quả phù hợp · Enter để mở`
              : "Không tìm thấy bài viết phù hợp"}
          </div>
          {results.length === 0 ? (
            <div className="search-empty">
              Thử lại với từ khoá khác, hoặc duyệt theo <a href="#" onClick={(e) => { e.preventDefault(); setOpen(false); }}>Danh mục</a>.
            </div>
          ) : (
            results.map((r, i) => (
              <button
                key={r.id}
                className={"search-result-item " + (i === activeIdx ? "is-active" : "")}
                onMouseEnter={() => setActiveIdx(i)}
                onClick={() => goToResult(r)}
              >
                <span className="sri-cat">{r.catName}{r.pending ? " · Đang cập nhật" : ""}</span>
                <span className="sri-title">{r.title}</span>
                <span className="sri-preview">{r.preview}</span>
              </button>
            ))
          )}
        </div>
      )}

      <div className="search-suggest">
        <span className="label">Chủ đề phổ biến:</span>
        {popularChips.map((s, i) => (
          <button key={i} onClick={() => navigate(s.target)}>
            <span className="chip-ic"><Icon name={s.icon} size={13} stroke={2} /></span>
            {s.name}
          </button>
        ))}
      </div>
    </div>
  );
};

// Markdown-lite: chỉ render **bold** trong nội dung article
const renderInline = (text) => {
  if (!text) return null;
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) => {
    if (p.startsWith("**") && p.endsWith("**")) {
      return <strong key={i}>{p.slice(2, -2)}</strong>;
    }
    return <React.Fragment key={i}>{p}</React.Fragment>;
  });
};

// ----------------- Floating chat (Zalo + Webchat Baokim) -----------------
const FloatingChat = () => {
  return (
    <div className="hc-floats">
      <button className="hcf-btn hcf-zalo" type="button" aria-label="Chat Zalo">
        <span>Zalo</span>
        <span className="hcf-tooltip">Chat qua Zalo</span>
      </button>
      <button className="hcf-btn hcf-baokim" type="button" aria-label="Chat Baokim">
        <span className="hcf-bk-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </span>
        <span className="hcf-tooltip">Webchat Baokim</span>
      </button>
    </div>
  );
};

// Export to window
Object.assign(window, { Icon, Header, Footer, Crumbs, SearchBox, FloatingChat, renderInline });
