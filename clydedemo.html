import { useState, useRef, useEffect } from "react";

// ── CLYDE KITCHENS REAL BRAND COLOURS ─────────────────────────────
const NAVY     = "#1a3a5c";   // deep navy – logo, primary text
const NAVY_D   = "#122840";   // darker navy – hover states
const NAVY_L   = "#2a5280";   // lighter navy – accents
const WHITE    = "#ffffff";
const OFF_W    = "#f7f9fc";   // page background
const SAGE     = "#5a8a6a";   // green CTA block
const SAGE_L   = "#6fa37f";
const STEEL    = "#4a7096";   // blue CTA block
const AMBER    = "#e8a030";   // gold/amber CTA block
const AMBER_L  = "#f0b445";
const TXT      = "#1a2e42";   // body text
const TXT_L    = "#4a6278";   // muted text
const TXT_D    = "#a0b4c4";   // dim text
const BDR      = "#d0dce8";   // border
const BDR_F    = "#4a7096";   // focused border

const SYSTEM = `You are a warm, friendly design consultant for Clyde Kitchens — Glasgow's trusted kitchen and bathroom specialist, Built to Last, with over 50 years of combined experience.

Your goal: have a natural qualifying conversation, then invite the customer to book a FREE design visit at the showroom in Airdrie.

Gather these 5 things conversationally — one topic at a time, never fire them all at once:
1. Room: kitchen / bathroom / bedroom / combination
2. Style: modern/handleless / traditional / painted/shaker / gloss / contemporary
3. Budget: under £5k / £5k-£10k / £10k-£20k / £20k+
4. Timeline: just browsing / 1-3 months / 3-6 months / ready now
5. Location: where in Scotland they are based

Lead scoring:
- HOT: budget £10k+ AND timeline under 6 months
- WARM: budget £5k-£10k OR timeline 3-6 months
- COOL: budget under £5k or just browsing

Key facts to weave in naturally when relevant:
- Free design visit with full CAD kitchen planning — no obligation whatsoever
- Quotebuster guarantee: beat any like-for-like quote or give the customer £100 cash
- 25% off all kitchens plus FREE fitting right now
- Finance available with flexible no deposit options
- Fully project managed: electrics, plumbing, tiling, flooring — they handle everything
- Rated Excellent on Trustpilot by hundreds of Scottish customers
- They have an STV TV advert — well established, trusted Glasgow brand
- Showroom: Chapelhall Industrial Estate, Airdrie ML6 8QH
- Open Mon-Sat 10am-5pm, Sun 12-5pm. Phone: 0141 538 2000

Tone: warm, approachable, knowledgeable. A friendly Scottish expert. Short messages — 2-3 sentences max. Human, never robotic.

Once you have 3+ data points AND the customer seems interested, naturally offer to book a free design visit.

IMPORTANT — when the customer agrees to book, output this exact marker alone on its own line:
%%BOOKING%%

After EVERY response, on a new line, output lead data in this exact format:
%%LEAD{"room":"","style":"","budget":"","timeline":"","location":"","score":""}%%

Only include fields you have confirmed. Score = HOT, WARM, or COOL (only when you have enough to judge).

Start: warmly greet the customer and ask which room they are thinking of transforming.`;

const CHIP_SETS = {
  room:     ["Kitchen","Bathroom","Bedroom","Kitchen & Bathroom"],
  style:    ["Modern / Handleless","Traditional","Painted / Shaker","Gloss / Contemporary"],
  budget:   ["Under £5,000","£5,000–£10,000","£10,000–£20,000","£20,000+"],
  timeline: ["Just browsing","1–3 months","3–6 months","Ready now!"],
};

function guessChips(text, lead) {
  const t = text.toLowerCase();
  if (!lead.room && (t.includes("room") || t.includes("transform") || t.includes("looking") || t.includes("project") || t.includes("which")))
    return CHIP_SETS.room;
  if (!lead.style && (t.includes("style") || t.includes("design") || t.includes("look") || t.includes("taste") || t.includes("mind")))
    return CHIP_SETS.style;
  if (!lead.budget && (t.includes("budget") || t.includes("spend") || t.includes("invest") || t.includes("cost") || t.includes("price")))
    return CHIP_SETS.budget;
  if (!lead.timeline && (t.includes("when") || t.includes("timeline") || t.includes("timescale") || t.includes("planning") || t.includes("soon") || t.includes("months")))
    return CHIP_SETS.timeline;
  return [];
}

// ── WAVE SVG ──────────────────────────────────────────────────────
const WaveSVG = ({ color = STEEL, width = 120, height = 22 }) => (
  <svg width={width} height={height} viewBox="0 0 120 22" fill="none">
    <path d="M4 16 C20 6, 36 20, 52 12 S84 4, 100 14 S116 20, 120 16" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <path d="M0 19 C18 10, 34 22, 50 15 S80 7, 98 17 S114 22, 120 19" stroke={color} strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.5"/>
  </svg>
);

// ── SCORE BADGE ───────────────────────────────────────────────────
function Badge({ score }) {
  if (!score) return null;
  const cfg = {
    HOT:  { bg:"#fff3e0", bd:"#e8a030", col:"#b36800", icon:"🔥" },
    WARM: { bg:"#e8f4fd", bd:"#4a7096", col:"#2a5280", icon:"✨" },
    COOL: { bg:"#f0f4f8", bd:"#a0b4c4", col:"#4a6278", icon:"💬" },
  }[score];
  if (!cfg) return null;
  return (
    <span style={{ display:"inline-flex", alignItems:"center", gap:5, padding:"3px 11px", borderRadius:20, fontSize:11, fontWeight:700, letterSpacing:"0.07em", textTransform:"uppercase", background:cfg.bg, border:`1px solid ${cfg.bd}`, color:cfg.col }}>
      {cfg.icon} {score} Lead
    </span>
  );
}

// ── LEAD PANEL ────────────────────────────────────────────────────
function LeadPanel({ lead, pct, show }) {
  const fields = [["🏠","Room",lead.room],["🎨","Style",lead.style],["💷","Budget",lead.budget],["📅","Timeline",lead.timeline],["📍","Location",lead.location]];
  return (
    <div style={{
      width: show ? 220 : 0, flexShrink:0, overflow:"hidden",
      transition:"width 0.3s ease",
      borderLeft: show ? `1px solid ${BDR}` : "none",
      background:WHITE, display:"flex", flexDirection:"column"
    }}>
      <div style={{ padding:"18px 16px", flex:1, overflowY:"auto" }}>
        <div style={{ background:NAVY, borderRadius:8, padding:"10px 12px", marginBottom:16 }}>
          <div style={{ fontSize:9, fontWeight:700, color:"rgba(255,255,255,0.6)", letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:2 }}>Live Lead Intelligence</div>
          <div style={{ fontSize:12, color:"rgba(255,255,255,0.85)" }}>Updates in real time</div>
        </div>

        <div style={{ marginBottom:16 }}>
          <div style={{ display:"flex", justifyContent:"space-between", fontSize:11, color:TXT_L, marginBottom:5 }}>
            <span>Qualification</span><span style={{ fontWeight:600, color:NAVY }}>{pct}%</span>
          </div>
          <div style={{ height:6, background:"#e8eef4", borderRadius:6, overflow:"hidden" }}>
            <div style={{ height:"100%", width:`${pct}%`, background:`linear-gradient(90deg,${STEEL},${NAVY_L})`, borderRadius:6, transition:"width 0.6s ease" }}/>
          </div>
        </div>

        {lead.score && <div style={{ marginBottom:14 }}><Badge score={lead.score}/></div>}

        {fields.map(([icon,label,val]) => (
          <div key={label} style={{ display:"flex", gap:9, marginBottom:12, alignItems:"flex-start" }}>
            <span style={{ fontSize:14, marginTop:1 }}>{icon}</span>
            <div style={{ minWidth:0 }}>
              <div style={{ fontSize:9, fontWeight:700, color:TXT_D, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:2 }}>{label}</div>
              <div style={{ fontSize:12, color:val?TXT:TXT_D, fontStyle:val?"normal":"italic", fontWeight:val?500:400, lineHeight:1.3 }}>
                {val || "not yet gathered"}
              </div>
            </div>
          </div>
        ))}

        <div style={{ marginTop:16, background:OFF_W, border:`1px solid ${BDR}`, borderRadius:8, padding:"11px 12px", fontSize:11, color:TXT_L, lineHeight:1.7 }}>
          <div style={{ color:AMBER, fontWeight:700, marginBottom:3, fontSize:11 }}>⚡ Demo Mode</div>
          AI-powered qualifier. The lead score and data update as the conversation progresses.
        </div>

        <div style={{ marginTop:14, fontSize:11, color:TXT_L, lineHeight:2 }}>
          <div style={{ fontWeight:600, color:TXT, marginBottom:2 }}>Showroom</div>
          Chapelhall Ind. Estate<br/>Airdrie ML6 8QH<br/>
          <a href="tel:01415382000" style={{ color:NAVY, fontWeight:600, textDecoration:"none" }}>0141 538 2000</a>
        </div>
      </div>
    </div>
  );
}

// ── MAIN APP ──────────────────────────────────────────────────────
export default function App() {
  const [stage, setStage]        = useState("loading");
  const [msgs,  setMsgs]         = useState([]);
  const [input, setInput]        = useState("");
  const [busy,  setBusy]         = useState(false);
  const [chips, setChips]        = useState([]);
  const [lead,  setLead]         = useState({});
  const [showPanel, setShowPanel] = useState(true);
  const [form, setForm]          = useState({ fname:"",lname:"",phone:"",email:"",date:"",time:"",notes:"" });
  const [confirmed, setConfirmed] = useState(null);

  const histRef   = useRef([]);
  const leadRef   = useRef({});
  const bottomRef = useRef(null);
  const inputRef  = useRef(null);

  useEffect(() => { boot(); }, []);
  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior:"smooth" }); }, [msgs, busy, stage]);

  async function boot() {
    setBusy(true);
    // Send initial invisible prompt to wake up the AI
    await callAI("Hi! I am a customer on the Clyde Kitchens website. Please introduce yourself warmly and start the qualification process.");
    setStage("chat");
    setBusy(false);
    setTimeout(() => inputRef.current?.focus(), 100);
  }

  async function callAI(userText) {
    if (userText !== null) {
      histRef.current = [...histRef.current, { role:"user", content: userText }];
    }

    try {
      // Build the OpenAI message array with the system prompt at the start
      const apiMessages = [
        { role: "system", content: SYSTEM },
        ...histRef.current
      ];

      // Fetch the API key securely from environment variables (Supports Vite, CRA, or Next.js)
      const apiKey = import.meta.env?.VITE_OPENAI_API_KEY || process.env.REACT_APP_OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY || "YOUR_OPENAI_API_KEY_HERE";

      const resp = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: apiMessages,
          temperature: 0.7, // Adds natural warmth to the responses
        }),
      });

      if (!resp.ok) {
        const err = await resp.json().catch(() => ({}));
        throw new Error(err?.error?.message || `HTTP ${resp.status}`);
      }
      
      const data = await resp.json();
      // Adjust parsing for OpenAI's response structure
      let raw = data?.choices?.[0]?.message?.content || "";
      if (!raw) throw new Error("Empty response");

      // Parse lead data
      const lm = raw.match(/%%LEAD(\{[\s\S]*?\})%%/);
      let updLead = leadRef.current;
      if (lm) {
        try {
          const parsed = JSON.parse(lm[1]);
          updLead = { ...leadRef.current };
          Object.entries(parsed).forEach(([k,v]) => { if (v && v !== "") updLead[k] = v; });
          leadRef.current = updLead;
          setLead({ ...updLead });
        } catch(_) {}
        raw = raw.replace(/%%LEAD[\s\S]*?%%/g, "").trim();
      }

      // Booking trigger
      const triggerBooking = raw.includes("%%BOOKING%%");
      const displayText = raw.replace(/%%BOOKING%%/g,"").trim();
      histRef.current = [...histRef.current, { role:"assistant", content: raw }];

      if (triggerBooking) {
        if (displayText) setMsgs(m => [...m, { role:"ai", text: displayText }]);
        setChips([]);
        setStage("booking");
        return;
      }
      setMsgs(m => [...m, { role:"ai", text: displayText }]);
      setChips(guessChips(displayText, updLead));
    } catch(e) {
      console.error(e);
      setMsgs(m => [...m, { role:"ai", text:`Apologies — I hit a snag (${e.message}). Please try again.` }]);
    }
  }

  async function send(text) {
    const t = (text ?? input).trim();
    if (!t || busy) return;
    setChips([]);
    setInput("");
    setMsgs(m => [...m, { role:"user", text: t }]);
    setBusy(true);
    await callAI(t);
    setBusy(false);
    inputRef.current?.focus();
  }

  function submitBooking() {
    const { fname,lname,phone,email,date,time } = form;
    if (!fname||!lname||!phone||!email||!date||!time) {
      alert("Please fill in all required fields."); return;
    }
    const payload = { ...form, lead: leadRef.current, submittedAt: new Date().toISOString() };
    console.log("📋 CLYDE KITCHENS LEAD:", JSON.stringify(payload, null, 2));
    setConfirmed(payload);
    setStage("done");
  }

  const minDate = () => { const d = new Date(); d.setDate(d.getDate()+1); return d.toISOString().split("T")[0]; };
  const pct = (() => {
    if (stage==="done")    return 100;
    if (stage==="booking") return 82;
    return Math.max(5, Math.round((["room","style","budget","timeline","location"].filter(k=>lead[k]).length/5)*70));
  })();

  // ── FIELD HELPER ──
  const Field = ({ id, label, type="text", placeholder="", span=false }) => (
    <div style={{ gridColumn: span?"1/-1":"auto" }}>
      <label style={{ display:"block", fontSize:11, fontWeight:700, color:NAVY, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:5 }}>{label}</label>
      <input type={type} value={form[id]} placeholder={placeholder}
        min={type==="date" ? minDate() : undefined}
        onChange={e => setForm(f=>({...f,[id]:e.target.value}))}
        style={{ width:"100%", background:WHITE, border:`1.5px solid ${BDR}`, borderRadius:7, padding:"10px 13px", color:TXT, fontSize:14, outline:"none", transition:"border-color 0.2s" }}
        onFocus={e=>e.target.style.borderColor=STEEL}
        onBlur={e=>e.target.style.borderColor=BDR}
      />
    </div>
  );

  // ── LOADING ──────────────────────────────────────────────────────
  if (stage === "loading") return (
    <div style={{ height:"100vh", background:OFF_W, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"system-ui,sans-serif" }}>
      <div style={{ textAlign:"center" }}>
        <div style={{ fontFamily:"Georgia,serif", fontSize:28, fontWeight:700, color:NAVY, letterSpacing:"0.02em" }}>CLYDE KITCHENS</div>
        <div style={{ marginTop:4, marginBottom:20 }}><WaveSVG color={STEEL} width={160} height={20}/></div>
        <div style={{ fontSize:11, color:TXT_L, letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:14 }}>Connecting your consultant…</div>
        <div style={{ display:"flex", gap:7, justifyContent:"center" }}>
          {[0,1,2].map(i => <div key={i} style={{ width:9,height:9,borderRadius:"50%",background:NAVY,animation:`pp 1.2s ${i*150}ms infinite ease-in-out` }}/>)}
        </div>
      </div>
      <style>{`@keyframes pp{0%,80%,100%{opacity:.15;transform:scale(.8)}40%{opacity:1;transform:scale(1)}}`}</style>
    </div>
  );

  return (
    <div style={{ height:"100vh", background:OFF_W, display:"flex", flexDirection:"column", fontFamily:"system-ui,-apple-system,sans-serif", overflow:"hidden", color:TXT }}>
      <style>{`
        @keyframes up  { from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)} }
        @keyframes pp  { 0%,80%,100%{opacity:.15;transform:scale(.8)}40%{opacity:1;transform:scale(1)} }
        * { box-sizing:border-box; }
        textarea,input,select { font-family:inherit; }
        textarea { resize:none; }
        ::-webkit-scrollbar { width:4px; }
        ::-webkit-scrollbar-track { background:transparent; }
        ::-webkit-scrollbar-thumb { background:${BDR};border-radius:2px; }
        input::placeholder,textarea::placeholder { color:${TXT_D}; }
        select option { background:${WHITE};color:${TXT}; }
      `}</style>

      {/* ── HEADER ── */}
      <div style={{ flexShrink:0, background:NAVY, borderBottom:`3px solid ${AMBER}`, padding:"0 20px" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"8px 0", borderBottom:"1px solid rgba(255,255,255,0.1)", fontSize:12 }}>
          <div style={{ display:"flex", gap:16, alignItems:"center" }}>
            <span style={{ color:"rgba(255,255,255,0.7)" }}>
              ⭐ <span style={{ color:WHITE, fontWeight:600 }}>Excellent</span> on Trustpilot
            </span>
            <span style={{ color:"rgba(255,255,255,0.4)" }}>|</span>
            <span style={{ color:"rgba(255,255,255,0.7)" }}>📺 As seen on STV</span>
          </div>
          <a href="tel:01415382000" style={{ color:AMBER_L, textDecoration:"none", fontSize:13, fontWeight:700, letterSpacing:"0.04em" }}>
            📞 0141 538 2000
          </a>
        </div>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"12px 0" }}>
          <div>
            <div style={{ fontFamily:"Georgia,serif", fontSize:22, fontWeight:700, color:WHITE, letterSpacing:"0.06em" }}>CLYDE KITCHENS</div>
            <WaveSVG color="rgba(255,255,255,0.5)" width={140} height={14}/>
            <div style={{ fontSize:9, color:"rgba(255,255,255,0.5)", letterSpacing:"0.2em", textTransform:"uppercase", marginTop:2 }}>Built to Last</div>
          </div>
          <button onClick={() => setShowPanel(s=>!s)} style={{
            padding:"6px 13px", borderRadius:5, cursor:"pointer",
            border:`1px solid rgba(255,255,255,0.25)`,
            background: showPanel ? "rgba(255,255,255,0.12)" : "transparent",
            color: showPanel ? WHITE : "rgba(255,255,255,0.6)",
            fontSize:11, fontWeight:600, letterSpacing:"0.06em", transition:"all 0.2s",
            textTransform:"uppercase"
          }}>
            {showPanel ? "▶ Hide Panel" : "◀ Lead Panel"}
          </button>
        </div>
        <div style={{ display:"flex", margin:"0 -20px", borderTop:"1px solid rgba(255,255,255,0.1)" }}>
          {[["Design Visit",SAGE],["Call Back",STEEL],["Brochure",AMBER]].map(([label,col]) => (
            <div key={label} style={{ flex:1, background:col, padding:"10px 12px", textAlign:"center", cursor:"pointer", transition:"opacity 0.15s" }}
              onMouseEnter={e=>e.currentTarget.style.opacity="0.88"}
              onMouseLeave={e=>e.currentTarget.style.opacity="1"}
            >
              <span style={{ color:WHITE, fontSize:12, fontWeight:600, letterSpacing:"0.06em", textTransform:"uppercase" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── PROGRESS ── */}
      <div style={{ flexShrink:0, height:3, background:"#dde6ee" }}>
        <div style={{ height:"100%", background:`linear-gradient(90deg,${STEEL},${NAVY_L})`, width:`${pct}%`, transition:"width 0.7s ease" }}/>
      </div>

      {/* ── BODY ── */}
      <div style={{ flex:1, display:"flex", overflow:"hidden" }}>
        {/* ── CHAT ── */}
        <div style={{ flex:1, display:"flex", flexDirection:"column", overflow:"hidden", minWidth:0 }}>
          <div style={{ flex:1, overflowY:"auto", padding:"20px 16px 12px", background:OFF_W }}>
            <div style={{ maxWidth:600, margin:"0 auto" }}>

              {msgs.map((m,i) => (
                <div key={i} style={{
                  display:"flex", gap:10, marginBottom:14,
                  flexDirection: m.role==="user" ? "row-reverse" : "row",
                  animation:"up 0.3s ease both"
                }}>
                  <div style={{
                    width:34, height:34, borderRadius:"50%", flexShrink:0,
                    display:"flex", alignItems:"center", justifyContent:"center",
                    fontSize:10, fontWeight:700, letterSpacing:"0.04em",
                    background: m.role==="ai" ? NAVY : STEEL,
                    color: WHITE, boxShadow:"0 2px 6px rgba(0,0,0,0.15)"
                  }}>
                    {m.role==="ai" ? "CK" : "ME"}
                  </div>
                  <div style={{
                    maxWidth:"76%", padding:"11px 15px", fontSize:14, lineHeight:1.7,
                    background: m.role==="ai" ? WHITE : NAVY,
                    color: m.role==="ai" ? TXT : WHITE,
                    border: `1.5px solid ${m.role==="ai" ? BDR : NAVY_D}`,
                    borderRadius:12,
                    borderTopLeftRadius:  m.role==="ai"   ? 3 : 12,
                    borderTopRightRadius: m.role==="user" ? 3 : 12,
                    boxShadow:"0 1px 4px rgba(0,0,0,0.06)",
                    whiteSpace:"pre-wrap"
                  }}>
                    {m.text}
                  </div>
                </div>
              ))}

              {busy && (
                <div style={{ display:"flex", gap:10, marginBottom:14, animation:"up 0.3s ease both" }}>
                  <div style={{ width:34,height:34,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:700,background:NAVY,color:WHITE,boxShadow:"0 2px 6px rgba(0,0,0,0.15)" }}>CK</div>
                  <div style={{ padding:"12px 16px", borderRadius:12, borderTopLeftRadius:3, background:WHITE, border:`1.5px solid ${BDR}`, boxShadow:"0 1px 4px rgba(0,0,0,0.06)", display:"flex", gap:5, alignItems:"center" }}>
                    {[0,1,2].map(i => <div key={i} style={{ width:7,height:7,borderRadius:"50%",background:NAVY,animation:`pp 1.2s ${i*150}ms infinite ease-in-out` }}/>)}
                  </div>
                </div>
              )}

              {!busy && chips.length > 0 && stage==="chat" && (
                <div style={{ display:"flex", flexWrap:"wrap", gap:8, paddingLeft:44, marginBottom:14, animation:"up 0.3s 0.1s ease both" }}>
                  {chips.map(c => (
                    <button key={c} onClick={() => { setChips([]); send(c); }} style={{
                      padding:"7px 15px", borderRadius:5, cursor:"pointer",
                      border:`1.5px solid ${STEEL}`, background:WHITE,
                      color:NAVY, fontSize:13, fontWeight:500, transition:"all 0.15s",
                      boxShadow:"0 1px 3px rgba(0,0,0,0.08)"
                    }}
                      onMouseEnter={e=>{e.currentTarget.style.background=STEEL;e.currentTarget.style.color=WHITE;}}
                      onMouseLeave={e=>{e.currentTarget.style.background=WHITE;e.currentTarget.style.color=NAVY;}}
                    >{c}</button>
                  ))}
                </div>
              )}

              {stage === "booking" && (
                <div style={{ background:WHITE, border:`1.5px solid ${BDR}`, borderRadius:10, padding:22, marginTop:4, animation:"up 0.4s ease both", boxShadow:"0 2px 12px rgba(0,0,0,0.08)" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:6 }}>
                    <div style={{ width:4, height:28, background:SAGE, borderRadius:2 }}/>
                    <div style={{ fontFamily:"Georgia,serif", fontSize:17, fontWeight:700, color:NAVY }}>Book Your Free Design Visit</div>
                  </div>
                  <div style={{ fontSize:13, color:TXT_L, marginBottom:18 }}>No obligation — our designers come to you, or visit our award-winning showroom in Airdrie.</div>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:14 }}>
                    <Field id="fname" label="First Name" placeholder="e.g. Sarah"/>
                    <Field id="lname" label="Last Name" placeholder="e.g. MacLeod"/>
                    <Field id="phone" label="Phone Number" type="tel" placeholder="07xxx xxxxxx"/>
                    <Field id="email" label="Email Address" type="email" placeholder="you@email.com"/>
                    <Field id="date"  label="Preferred Date" type="date"/>
                    <div>
                      <label style={{ display:"block", fontSize:11, fontWeight:700, color:NAVY, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:5 }}>Preferred Time</label>
                      <select value={form.time} onChange={e=>setForm(f=>({...f,time:e.target.value}))}
                        style={{ width:"100%", background:WHITE, border:`1.5px solid ${BDR}`, borderRadius:7, padding:"10px 13px", color:form.time?TXT:TXT_D, fontSize:14, outline:"none" }}
                        onFocus={e=>e.target.style.borderColor=STEEL}
                        onBlur={e=>e.target.style.borderColor=BDR}
                      >
                        <option value="">Select a time</option>
                        <option>Morning (10am–12pm)</option>
                        <option>Afternoon (12pm–3pm)</option>
                        <option>Late afternoon (3pm–5pm)</option>
                      </select>
                    </div>
                    <Field id="notes" label="Notes (optional)" placeholder="Anything specific you'd like to see…" span/>
                  </div>
                  <button onClick={submitBooking} style={{
                    width:"100%", padding:"13px", border:"none", borderRadius:7, cursor:"pointer",
                    background:SAGE, color:WHITE, fontSize:15, fontWeight:700,
                    letterSpacing:"0.02em", transition:"all 0.2s",
                    boxShadow:"0 3px 10px rgba(90,138,106,0.35)"
                  }}
                    onMouseEnter={e=>{e.currentTarget.style.background=SAGE_L;e.currentTarget.style.transform="translateY(-1px)";}}
                    onMouseLeave={e=>{e.currentTarget.style.background=SAGE;e.currentTarget.style.transform="none";}}
                  >
                    Confirm My Design Visit →
                  </button>
                </div>
              )}

              {stage === "done" && confirmed && (
                <div style={{ animation:"up 0.5s ease both" }}>
                  <div style={{ background:SAGE, borderRadius:10, padding:"22px 24px", marginBottom:16, textAlign:"center" }}>
                    <div style={{ fontSize:28, marginBottom:8 }}>✓</div>
                    <div style={{ fontFamily:"Georgia,serif", fontSize:20, color:WHITE, fontWeight:700, marginBottom:4 }}>
                      You're booked in, {confirmed.fname}!
                    </div>
                    <div style={{ color:"rgba(255,255,255,0.85)", fontSize:13 }}>
                      We'll be in touch shortly to confirm your visit. We can't wait to show you what's possible!
                    </div>
                  </div>
                  <div style={{ background:WHITE, border:`1.5px solid ${BDR}`, borderRadius:10, padding:"18px 20px", fontSize:13, color:TXT_L, lineHeight:2.1 }}>
                    <div><strong style={{color:TXT}}>📅 {new Date(confirmed.date+"T12:00:00").toLocaleDateString("en-GB",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}</strong></div>
                    <div><strong style={{color:TXT}}>🕐 {confirmed.time}</strong></div>
                    <div><strong style={{color:TXT}}>📍 Chapelhall Industrial Estate, Airdrie ML6 8QH</strong></div>
                    {confirmed.lead?.room   && <div style={{marginTop:6}}><strong style={{color:TXT}}>Room:</strong> {confirmed.lead.room}</div>}
                    {confirmed.lead?.style  && <div><strong style={{color:TXT}}>Style:</strong> {confirmed.lead.style}</div>}
                    {confirmed.lead?.budget && <div><strong style={{color:TXT}}>Budget:</strong> {confirmed.lead.budget}</div>}
                    <div style={{marginTop:10}}><Badge score={confirmed.lead?.score}/></div>
                  </div>
                  <div style={{ textAlign:"center", marginTop:14, fontSize:12, color:TXT_D }}>
                    Questions? <a href="tel:01415382000" style={{color:NAVY,fontWeight:700,textDecoration:"none"}}>0141 538 2000</a>
                    {" · "}
                    <a href="mailto:sales@clydekitchens.co.uk" style={{color:NAVY,fontWeight:600,textDecoration:"none"}}>sales@clydekitchens.co.uk</a>
                  </div>
                </div>
              )}
              <div ref={bottomRef}/>
            </div>
          </div>

          {stage === "chat" && (
            <div style={{ flexShrink:0, borderTop:`2px solid ${BDR}`, padding:"12px 16px", background:WHITE }}>
              <div style={{ maxWidth:600, margin:"0 auto", display:"flex", gap:10, alignItems:"flex-end" }}>
                <div style={{
                  flex:1, background:WHITE, border:`1.5px solid ${BDR}`, borderRadius:8,
                  padding:"10px 14px", transition:"border-color 0.2s", boxShadow:"0 1px 4px rgba(0,0,0,0.05)"
                }}
                  onFocusCapture={e=>e.currentTarget.style.borderColor=STEEL}
                  onBlurCapture={e=>e.currentTarget.style.borderColor=BDR}
                >
                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={e => {
                      setInput(e.target.value);
                      e.target.style.height="auto";
                      e.target.style.height=Math.min(e.target.scrollHeight,120)+"px";
                    }}
                    onKeyDown={e => { if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();send(input);} }}
                    placeholder="Type your message here…"
                    rows={1}
                    disabled={busy}
                    style={{ display:"block", width:"100%", background:"transparent", border:"none", outline:"none", color:TXT, fontSize:15, lineHeight:1.55, minHeight:24, maxHeight:120, padding:0 }}
                  />
                </div>
                <button
                  onClick={() => send(input)}
                  disabled={busy || !input.trim()}
                  style={{
                    width:44, height:44, borderRadius:8, border:"none", flexShrink:0,
                    cursor: busy||!input.trim() ? "default" : "pointer",
                    background: busy||!input.trim() ? "#c8d8e8" : NAVY,
                    display:"flex", alignItems:"center", justifyContent:"center",
                    transition:"all 0.2s", boxShadow: busy||!input.trim() ? "none" : "0 2px 8px rgba(26,58,92,0.3)"
                  }}
                  onMouseEnter={e=>{ if(!busy&&input.trim()) e.currentTarget.style.background=NAVY_D; }}
                  onMouseLeave={e=>{ if(!busy&&input.trim()) e.currentTarget.style.background=NAVY; }}
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill={busy||!input.trim() ? "#8aabb8" : WHITE}>
                    <path d="M2 21l21-9L2 3v7l15 2-15 2z"/>
                  </svg>
                </button>
              </div>
              <div style={{ maxWidth:600, margin:"5px auto 0", fontSize:11, color:TXT_D, textAlign:"center" }}>
                Enter to send · Shift+Enter for new line
              </div>
            </div>
          )}
        </div>
        <LeadPanel lead={lead} pct={pct} show={showPanel}/>
      </div>
    </div>
  );
}