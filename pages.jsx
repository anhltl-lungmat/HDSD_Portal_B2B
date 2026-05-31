// =====================================================
// Pages: Home, Group (popular/category), Article
// =====================================================

const {
  articles,
  popularGroups,
  categoryGroups,
  homepageFaqList,
  popularChips,
  byId,
  byGroup,
  groupById,
  isPopularGroup,
  isCategoryGroup
} = window.HC_DATA;

// ----------------- HOME -----------------
const HomePage = ({ navigate }) => {
  const [openFaq, setOpenFaq] = React.useState(null);

  return (
    <div className="page-fade">
      {/* HERO */}
      <section className="hero">
        <div className="hero-grid"></div>
        <div className="container hero-inner">
          <span className="hero-eyebrow">
            <Icon name="sparkle" size={14} /> Hỗ trợ Merchant — Cập nhật 27.05.2026
          </span>
          <h1>Chúng tôi có thể giúp gì cho bạn?</h1>
          <p className="lead">
            Tìm câu trả lời nhanh chóng cho mọi thao tác trên Portal B2B Baokim — từ đăng ký tài khoản, đối soát đến tạo payment link.
          </p>
          <SearchBox navigate={navigate} />
        </div>
      </section>

      {/* CATEGORY LIST — FOCAL BLOCK */}
      <section className="hc-section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2><span className="accent">Danh mục</span> hướng dẫn</h2>
              <p>Tất cả bài viết được tổ chức theo hành trình Merchant. Bấm vào nhóm để xem danh sách câu hỏi và hướng dẫn chi tiết.</p>
            </div>
          </div>

          <div className="cat-wrap">
            <div className="cat-grid">
              {categoryGroups.map((c) => {
                const count = byGroup(c.id).length;
                return (
                  <button
                    key={c.id}
                    className="cat-row"
                    onClick={() => navigate({ name: "group", id: c.id })}
                  >
                    <div className="num">{String(c.order).padStart(2, "0")}</div>
                    <div className="body">
                      <div className="title-row">
                        <span className="ic"><Icon name={c.icon} size={18} /></span>
                        <span className="name">{c.name}</span>
                      </div>
                      <div className="desc">{c.desc}</div>
                    </div>
                    <div className="right">
                      <span className="count-pill">{count} câu hỏi</span>
                      <span className="chev"><Icon name="chev-right" size={18} /></span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — all 20 unique articles */}
      <section className="hc-section" style={{ paddingTop: 12, paddingBottom: 80 }}>
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Câu hỏi thường gặp</h2>
              <p>Toàn bộ {homepageFaqList.length} câu hỏi. Bấm để xem tóm tắt trả lời, hoặc mở bài viết chi tiết.</p>
            </div>
          </div>
          <div className="faq-list">
            {homepageFaqList.map((id, idx) => {
              const a = byId(id);
              if (!a) return null;
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={"faq-item " + (isOpen ? "is-open" : "")}>
                  <button className="faq-q" onClick={() => setOpenFaq(isOpen ? null : idx)}>
                    <span className="q-mark">{idx + 1}</span>
                    <span className="q-text">
                      {a.title}
                      {a.pending && <span className="pending-badge" style={{ marginLeft: 10 }}><Icon name="clock" size={12} /> Đang cập nhật</span>}
                    </span>
                    <span className="q-toggle"><Icon name="chev-down" size={18} /></span>
                  </button>
                  <div className="faq-body">
                    <div className="inner">
                      <p className="faq-answer">{a.summary}</p>
                      <a
                        className="faq-link"
                        href="#"
                        onClick={(e) => { e.preventDefault(); navigate({ name: "article", id: a.id }); }}
                      >
                        Xem hướng dẫn chi tiết <Icon name="arrow-right" size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

// ----------------- GROUP PAGE (popular topic OR category) -----------------
const GroupPage = ({ groupId, navigate }) => {
  const g = groupById(groupId);
  const list = g ? byGroup(g.id) : [];
  if (!g) {
    return (
      <div className="container" style={{ padding: "80px 0" }}>
        <h1>Không tìm thấy nhóm</h1>
        <button className="btn btn-primary" onClick={() => navigate({ name: "home" })}>Về trang chủ</button>
      </div>
    );
  }
  const isPop = isPopularGroup(groupId);

  return (
    <div className="page-fade">
      <Crumbs
        items={[
          { label: "Trang chủ", to: { name: "home" } },
          { label: isPop ? "Chủ đề phổ biến" : "Danh mục" },
          { label: g.name }
        ]}
        navigate={navigate}
      />
      <div className="container">
        <div className="cat-header">
          <div className="ic-big"><Icon name={g.icon} size={28} /></div>
          <div>
            <span className="cat-eyebrow">
              {isPop ? "Chủ đề phổ biến" : `Danh mục · ${g.order ? String(g.order).padStart(2,"0") + " / 07" : ""}`}
            </span>
            <h1>{g.name}</h1>
            <div className="cat-meta">{list.length} câu hỏi {g.desc ? "· " + g.desc : ""}</div>
          </div>
        </div>

        <div className="article-list">
          {list.map((a, i) => (
            <button
              key={a.id}
              className="article-card"
              onClick={() => navigate({ name: "article", id: a.id, from: g.id })}
            >
              <div className="ac-num">{String(i + 1).padStart(2, "0")}</div>
              <div className="ac-body">
                <div className="ac-title">
                  {a.title}
                  {a.pending && (
                    <span className="pending-badge">
                      <Icon name="clock" size={12} /> Đang cập nhật
                    </span>
                  )}
                </div>
                <div className="ac-preview">{a.preview}</div>
              </div>
              <div className="ac-arrow"><Icon name="chev-right" size={20} /></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// ----------------- ARTICLE DETAIL -----------------
const ArticlePage = ({ id, fromGroup, navigate }) => {
  const a = byId(id);
  const [vote, setVote] = React.useState(null);

  // Resolve sibling group: prefer fromGroup, else first group on article
  const sourceGroupId = (fromGroup && a && a.groups.includes(fromGroup))
    ? fromGroup
    : (a ? a.groups[0] : null);
  const sourceGroup = sourceGroupId ? groupById(sourceGroupId) : null;
  const siblings = sourceGroupId ? byGroup(sourceGroupId) : [];
  const curIdx = siblings.findIndex((x) => x.id === id);
  const prev = curIdx > 0 ? siblings[curIdx - 1] : null;
  const next = curIdx >= 0 && curIdx < siblings.length - 1 ? siblings[curIdx + 1] : null;

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setVote(null);
  }, [id]);

  React.useEffect(() => {
    const onKey = (e) => {
      const tag = (e.target && e.target.tagName) || "";
      if (tag === "INPUT" || tag === "TEXTAREA" || e.target?.isContentEditable) return;
      if (e.key === "ArrowLeft" && prev)  navigate({ name: "article", id: prev.id, from: sourceGroupId });
      if (e.key === "ArrowRight" && next) navigate({ name: "article", id: next.id, from: sourceGroupId });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next, navigate, sourceGroupId]);

  if (!a) {
    return (
      <div className="container" style={{ padding: "80px 0" }}>
        <h1>Không tìm thấy bài viết</h1>
        <button className="btn btn-primary" onClick={() => navigate({ name: "home" })}>Về trang chủ</button>
      </div>
    );
  }

  const isPopSource = sourceGroupId && isPopularGroup(sourceGroupId);

  return (
    <div className="page-fade">
      <Crumbs
        items={[
          { label: "Trang chủ", to: { name: "home" } },
          sourceGroup
            ? { label: isPopSource ? "Chủ đề phổ biến" : "Danh mục" }
            : null,
          sourceGroup ? { label: sourceGroup.name, to: { name: "group", id: sourceGroup.id } } : null,
          { label: a.title }
        ].filter(Boolean)}
        navigate={navigate}
      />
      <div className="container">
        <div className="article-layout">
          {/* Side navigation */}
          <aside className="side-nav">
            {sourceGroup && (
              <>
                <div className="sn-label">{sourceGroup.name}</div>
                {siblings.map((s) => (
                  <button
                    key={s.id}
                    className={s.id === a.id ? "is-active" : ""}
                    onClick={() => navigate({ name: "article", id: s.id, from: sourceGroupId })}
                  >
                    {s.title}
                  </button>
                ))}
              </>
            )}
            {/* Show other groups article belongs to */}
            {a.groups.length > 1 && (
              <div className="sn-also">
                <div className="sn-label" style={{ marginTop: 14 }}>Cũng xuất hiện trong</div>
                {a.groups.filter((gid) => gid !== sourceGroupId).map((gid) => {
                  const og = groupById(gid);
                  if (!og) return null;
                  return (
                    <button
                      key={gid}
                      className="sn-also-btn"
                      onClick={() => navigate({ name: "group", id: gid })}
                    >
                      <Icon name={og.icon} size={14} /> {og.name}
                    </button>
                  );
                })}
              </div>
            )}
          </aside>

          {/* Main article */}
          <article className="article-content">
            <h1>{a.title}</h1>
            <div className="article-meta">
              {sourceGroup && (
                <a href="#" onClick={(e) => { e.preventDefault(); navigate({ name: "group", id: sourceGroup.id }); }}>
                  {sourceGroup.name}
                </a>
              )}
              <span className="dot"></span>
              <span>~3 phút đọc</span>
              {a.pending && (
                <>
                  <span className="dot"></span>
                  <span className="pending-badge">
                    <Icon name="clock" size={12} /> Đang cập nhật
                  </span>
                </>
              )}
            </div>

            {/* Trả lời */}
            <div className="art-section">
              <div className="art-head"><span className="ic"><Icon name="answer" size={16} /></span>Trả lời</div>
              <div className="callout-answer">{renderInline(a.answer)}</div>
            </div>

            {a.pending && a.pendingNote && (
              <div className="pending-banner">
                <span className="ic"><Icon name="info" size={16} /></span>
                <div>
                  <b>Đang cập nhật</b>
                  {a.pendingNote}
                </div>
              </div>
            )}

            {a.steps && a.steps.length > 0 && (
              <div className="art-section">
                <div className="art-head"><span className="ic"><Icon name="play" size={14} /></span>Cách làm nhanh</div>
                <ol className="steps">
                  {a.steps.map((s, i) => (
                    <li key={i}>
                      <span className="step-num">{i + 1}</span>
                      <div className="step-content">
                        <div className="step-text">{renderInline(s)}</div>
                        <StepShot stepNum={i + 1} stepText={s} />
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {a.notes && a.notes.length > 0 && (
              <div className="art-section">
                <div className="art-head"><span className="ic"><Icon name="lightbulb" size={16} /></span>Điểm cần nhớ</div>
                <ul className="notes">
                  {a.notes.map((n, i) => (
                    <li key={i}>
                      <span className="check"><Icon name="check" size={12} stroke={2.5} /></span>
                      <span>{renderInline(n)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Video hướng dẫn — placeholder cuối bài */}
            <VideoBlock articleTitle={a.title} />

            <div className="helpful">
              <span className="label">Bài viết này có hữu ích không?</span>
              <div className="helpful-btns">
                <button
                  className={"helpful-btn " + (vote === "up" ? "active" : "")}
                  onClick={() => setVote("up")}
                >
                  <Icon name="thumb-up" size={16} /> Hữu ích
                </button>
                <button
                  className={"helpful-btn " + (vote === "down" ? "active down" : "")}
                  onClick={() => setVote("down")}
                >
                  <Icon name="thumb-down" size={16} /> Chưa rõ
                </button>
              </div>
              {vote === "up" && <span className="helpful-thanks">Cảm ơn phản hồi của bạn!</span>}
              {vote === "down" && (
                <span className="helpful-thanks" style={{ color: "var(--ink-500)" }}>
                  Bạn có thể bấm Zalo/Webchat ở góc phải để hỏi trực tiếp đội hỗ trợ.
                </span>
              )}
            </div>

            {/* Prev / Next navigation within the source group */}
            {sourceGroup && (siblings.length > 1) && (
              <>
                <div className="prevnext">
                  {prev ? (
                    <button
                      className="pn-card pn-prev"
                      onClick={() => navigate({ name: "article", id: prev.id, from: sourceGroupId })}
                    >
                      <span className="pn-arrow">
                        <span style={{ transform: "rotate(180deg)", display: "inline-flex" }}>
                          <Icon name="chev-right" size={20} stroke={2.2} />
                        </span>
                      </span>
                      <span className="pn-body">
                        <span className="pn-label">← Bài trước</span>
                        <span className="pn-title">{prev.title}</span>
                      </span>
                    </button>
                  ) : (
                    <div className="pn-empty">Đây là bài đầu tiên</div>
                  )}
                  {next ? (
                    <button
                      className="pn-card pn-next"
                      onClick={() => navigate({ name: "article", id: next.id, from: sourceGroupId })}
                    >
                      <span className="pn-body">
                        <span className="pn-label">Bài tiếp theo →</span>
                        <span className="pn-title">{next.title}</span>
                      </span>
                      <span className="pn-arrow">
                        <Icon name="chev-right" size={20} stroke={2.2} />
                      </span>
                    </button>
                  ) : (
                    <div className="pn-empty">Đây là bài cuối cùng</div>
                  )}
                </div>
                <div className="pn-kbd-hint">
                  Mẹo: dùng phím <kbd>←</kbd> <kbd>→</kbd> để chuyển bài trong nhóm <b>{sourceGroup.name}</b>
                </div>
              </>
            )}
          </article>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { HomePage, GroupPage, ArticlePage });

// ----------------- Step Screenshot placeholder -----------------
function StepShot({ stepNum, stepText }) {
  // Pick spotlight position based on step number (cycle through 5 variants)
  const positions = ["pos-sidebar", "pos-toolbar", "pos-row", "pos-button", "pos-modal"];
  const pos = positions[(stepNum - 1) % positions.length];

  // Extract bolded action keyword from step text (e.g., "Mở **Danh sách**" → "Danh sách")
  const match = stepText && stepText.match(/\*\*([^*]+)\*\*/);
  const action = match ? match[1] : "Thao tác trên Portal";
  const actionShort = action.length > 26 ? action.slice(0, 23) + "…" : action;

  // Vary which menu/toolbar/row is highlighted by step
  const activeIdx = (stepNum - 1) % 4; // sidebar item to highlight
  const hlRowIdx  = (stepNum - 1) % 4; // table row to highlight

  return (
    <figure className="step-shot">
      <div className="ss-frame">
        <div className="ss-chrome">
          <span className="ss-dot r"></span>
          <span className="ss-dot y"></span>
          <span className="ss-dot g"></span>
          <span className="ss-url">b2b.baokim.vn / portal</span>
        </div>
        <div className="ss-body">
          <div className="ss-sidebar">
            <div className="ss-sb-logo"></div>
            {[0,1,2,3].map((i) => (
              <div key={i} className={"ss-sb-item" + (i === activeIdx ? " active" : "")}></div>
            ))}
          </div>
          <div className="ss-main">
            <div className="ss-toolbar">
              <div className="ss-pill"></div>
              <div className="ss-pill short"></div>
              <div className="ss-pill btn"></div>
            </div>
            <div className="ss-table">
              {[0,1,2,3].map((i) => (
                <div key={i} className={"ss-row" + (i === hlRowIdx ? " hl" : "")}>
                  <span></span><span></span><span></span><span></span>
                </div>
              ))}
            </div>
            <div className={"ss-spotlight " + pos}>
              <span className="ss-pulse"></span>
              <span className="ss-bubble">
                <span className="ss-bubble-step">B{stepNum}</span>
                <span className="ss-bubble-text">{actionShort}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <figcaption>Ảnh minh hoạ — Bước {stepNum} · sẽ cập nhật ảnh thực tế</figcaption>
    </figure>
  );
}

// ----------------- Video Block placeholder -----------------
function VideoBlock({ articleTitle, duration = "—:—" }) {
  return (
    <div className="art-section video-block">
      <div className="art-head">
        <span className="ic"><Icon name="play" size={14} /></span>Video hướng dẫn
      </div>
      <div className="video-frame" role="button" tabIndex={0}>
        <div className="vf-thumb"></div>
        <div className="vf-pattern"></div>
        <div className="vf-shimmer"></div>
        <div className="vf-corner-badge">
          <span className="live-dot"></span> Video hướng dẫn
        </div>
        <button className="vf-play" aria-label="Phát video hướng dẫn" type="button">
          <svg viewBox="0 0 24 24"><polygon points="7 4 19 12 7 20"></polygon></svg>
        </button>
        <div className="vf-overlay">
          <div className="vf-title">{articleTitle}</div>
          <div className="vf-meta">
            <span className="vf-tag"><Icon name="play" size={11} /> Video</span>
            <span className="vf-duration">{duration}</span>
            <span className="vf-status">Đang sản xuất</span>
          </div>
        </div>
      </div>
      <div className="video-note">
        <span className="ic"><Icon name="info" size={13} /></span>
        Video hướng dẫn cho bài viết này sẽ được Baokim quay và đăng tải trong phiên bản kế tiếp. Khi sẵn sàng, bấm vào khung trên để phát trực tiếp.
      </div>
    </div>
  );
}

Object.assign(window, { StepShot, VideoBlock });
