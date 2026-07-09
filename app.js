const STORAGE_KEY = "fullstride-academy-v1";

const lesson = (id, title, duration, summary, objectives, takeaways) => ({
  id, title, duration, summary, objectives, takeaways, videoUrl: `https://videos.fullstride.example/${id}`
});
const question = (question, options, correctAnswer, explanation) => ({ question, options, correctAnswer, explanation });

const courses = [
  {
    id: "foundations", title: "AI-Driven RevOps Foundations", category: "Foundations", level: "Beginner", duration: "42 min",
    description: "Learn how strategy, connected systems, clean data, and human-approved AI work together to create predictable growth.",
    objectives: ["Explain Fullstride’s AI-driven RevOps model", "Recognize the foundations of a reliable revenue engine", "Connect RevOps work to measurable growth outcomes"],
    certificationName: "Fullstride AI-Driven RevOps Foundations", accent: "#246bfd",
    lessons: [
      lesson("foundations-1", "Meet the modern revenue engine", "12 min", "See how sales, marketing, and operations work as one coordinated system.", ["Recognize the parts of an AI-driven RevOps model"], ["Start with a growth outcome", "Align teams around one operating model"]),
      lesson("foundations-2", "Connect strategy, systems, and data", "14 min", "Learn why a clear roadmap, reliable integrations, and clean data must reinforce one another.", ["Identify the foundations of reliable RevOps"], ["Strategy directs the technology", "Clean data makes automation trustworthy"]),
      lesson("foundations-3", "Keep humans in control", "16 min", "Understand how private AI, approval gates, and explainability support safe automation.", ["Explain the role of human-approved AI"], ["Automate repeat work safely", "Keep decisions accountable"])
    ],
    quiz: [
      question("What is the strongest starting point for AI-driven RevOps work?", ["A business outcome", "A favorite dashboard", "A long list of features", "A weekly meeting"], 0, "Starting with the business outcome keeps strategy, systems, and automation aligned."),
      question("Why use a shared operating model?", ["To remove all judgment", "To align teams around the same signals and actions", "To add more process", "To replace every existing tool"], 1, "A shared model improves alignment without pretending judgment is unnecessary."),
      question("What makes automation safer in higher-risk workflows?", ["More speed", "Human approval gates", "More vendors", "Less monitoring"], 1, "Human approval gates preserve accountability where judgment matters."),
      question("Why does clean data matter for AI and automation?", ["It is decorative", "It improves the reliability of outputs and actions", "It hides complexity", "It eliminates collaboration"], 1, "Trustworthy inputs are essential to trustworthy outputs."),
      question("Which behavior builds confidence in a signal?", ["Act immediately", "Validate it against the business outcome", "Ignore its source", "Share it without context"], 1, "Validation ensures the signal is relevant and trustworthy.")
    ]
  },
  {
    id: "readiness", title: "Build Your RevOps Roadmap", category: "Strategy", level: "Beginner", duration: "48 min",
    description: "Turn growth goals into a practical RevOps roadmap with clear priorities, owners, and measurable KPIs.",
    objectives: ["Define a measurable growth outcome", "Prioritize RevOps opportunities", "Build an accountable execution rhythm"],
    certificationName: "Fullstride RevOps Strategy Certified", accent: "#9cf0d0",
    lessons: [
      lesson("readiness-1", "Define the growth outcome", "14 min", "Frame the roadmap around a measurable revenue outcome—not a list of disconnected tools.", ["Write a focused growth outcome"], ["Narrow scope to accelerate value", "Name the accountable owner"]),
      lesson("readiness-2", "Prioritize the highest-leverage gaps", "17 min", "Assess process, system, data, and handoff friction across the revenue journey.", ["Rank RevOps opportunities by impact"], ["Fix bottlenecks before adding tools", "Make tradeoffs visible"]),
      lesson("readiness-3", "Set KPIs and an execution rhythm", "17 min", "Choose measurable KPIs and checkpoints that turn strategy into steady execution.", ["Build a practical operating cadence"], ["Use KPIs to guide decisions", "Review progress consistently"])
    ],
    quiz: [
      question("A strong launch outcome should center on:", ["A specific decision", "Every possible use case", "Visual customization", "Feature volume"], 0, "A specific decision gives the launch a clear purpose."),
      question("What matters most when preparing inputs?", ["Quantity", "Novelty", "Quality and relevance", "Complexity"], 2, "Relevant, trustworthy inputs are more useful than a large volume of weak data."),
      question("Who should own an input source?", ["No one", "A named accountable person or team", "Only IT", "Every learner"], 1, "Clear ownership makes quality and maintenance sustainable."),
      question("What is the best adoption strategy?", ["Create entirely new meetings", "Embed Fullstride in existing decision routines", "Require daily logins", "Send more reminders"], 1, "Existing routines reduce friction and connect use to real work."),
      question("Which launch metric is most meaningful?", ["Logo views", "Actions taken from Fullstride insights", "Number of colors used", "Total browser tabs"], 1, "Outcome-linked action is stronger evidence of adoption than surface activity.")
    ]
  },
  {
    id: "workflows", title: "Connect Your Revenue Stack", category: "Systems", level: "Intermediate", duration: "51 min",
    description: "Design reliable connections and handoffs so data flows across sales, marketing, and operations instead of stalling.",
    objectives: ["Map the revenue technology ecosystem", "Identify integration and handoff failures", "Design a more reliable connected workflow"],
    certificationName: "Fullstride Revenue Systems Practitioner", accent: "#ffd66b",
    lessons: [
      lesson("workflows-1", "Map your revenue technology", "15 min", "Create a clear view of the apps, owners, data, and decisions across your stack.", ["Map a revenue technology ecosystem"], ["Map the flow, not just the tools", "Make ownership visible"]),
      lesson("workflows-2", "Find broken handoffs", "18 min", "Trace where information stalls, duplicates, or loses context between teams and systems.", ["Diagnose an integration or handoff gap"], ["Follow the data end to end", "Validate the source of truth"]),
      lesson("workflows-3", "Design a reliable connection", "18 min", "Define the connector, middleware, rules, and monitoring needed for dependable flow.", ["Specify a reliable connected workflow"], ["Design for exceptions", "Monitor the handoff"])
    ],
    quiz: [
      question("Before exploring, you should first:", ["Choose a chart color", "Frame a decision-ready question", "Invite everyone", "Export all data"], 1, "A well-framed question focuses exploration."),
      question("Disciplined investigation requires attention to:", ["Source, scope, and context", "Speed only", "One data point", "Visual novelty"], 0, "Those three factors prevent overconfident conclusions."),
      question("What should accompany evidence when sharing a finding?", ["A clear recommendation", "More tabs", "A generic summary", "No context"], 0, "Recommendations translate evidence into useful direction."),
      question("Why compare patterns?", ["To delay action", "To avoid conclusions from an isolated signal", "To create more slides", "To remove ownership"], 1, "Comparison tests whether a pattern is meaningful."),
      question("A good workflow ends with:", ["An open browser", "A named next step and checkpoint", "A longer dataset", "A new color palette"], 1, "Ownership and a checkpoint close the loop.")
    ]
  },
  {
    id: "optimization", title: "Clean Data for Confident Automation", category: "Data", level: "Intermediate", duration: "55 min",
    description: "Build the data quality, ownership, and governance habits required for trustworthy AI and automation.",
    objectives: ["Assess revenue data quality", "Define ownership and governance", "Prepare data for safe automation"],
    certificationName: "Fullstride Revenue Data Specialist", accent: "#e293ff",
    lessons: [
      lesson("optimization-1", "Diagnose revenue data quality", "16 min", "Find missing, duplicated, stale, and inconsistent records that weaken decisions.", ["Run a focused data quality review"], ["Start with business-critical fields", "Measure the baseline"]),
      lesson("optimization-2", "Create ownership and standards", "19 min", "Define sources of truth, data owners, and practical rules people can follow.", ["Design lightweight data governance"], ["Ownership keeps data healthy", "Standards should enable work"]),
      lesson("optimization-3", "Prepare data for AI and automation", "20 min", "Validate data before it reaches models, workflows, and customer-facing actions.", ["Create an automation-readiness check"], ["Bad inputs scale bad outcomes", "Validate before automating"])
    ],
    quiz: [
      question("A useful hypothesis is:", ["Vague and broad", "Testable and tied to an outcome", "Always correct", "Based on one opinion"], 1, "Testability and outcome alignment make a hypothesis useful."),
      question("What strengthens a signal?", ["Consistency across relevant comparisons", "A dramatic color", "A single anecdote", "More assumptions"], 0, "Relevant consistency provides stronger evidence."),
      question("Why consider alternate explanations?", ["To avoid every decision", "To reduce confirmation bias", "To increase scope", "To automate judgment"], 1, "Alternatives help test the strength of your preferred explanation."),
      question("A focused improvement cycle should:", ["Change everything", "Change one meaningful variable", "Have no review date", "Ignore outcomes"], 1, "A focused change makes learning easier to interpret."),
      question("When should a cycle be reviewed?", ["At a defined checkpoint", "Never", "Only after success", "Every hour"], 0, "A defined checkpoint creates accountability and space to learn.")
    ]
  },
  {
    id: "insights", title: "Private AI for Revenue Teams", category: "AI", level: "Intermediate", duration: "46 min",
    description: "Learn how private, fine-tuned AI can strengthen your existing stack while preserving control and compliance.",
    objectives: ["Identify high-value RevOps AI use cases", "Explain fine-tuning and privacy considerations", "Define controls for responsible AI use"],
    certificationName: "Fullstride Private AI Practitioner", accent: "#ff9d80",
    lessons: [
      lesson("insights-1", "Choose the right AI use case", "14 min", "Prioritize repeatable, measurable work where AI can improve speed or quality.", ["Evaluate a RevOps AI use case"], ["Start with the workflow", "Define the expected value"]),
      lesson("insights-2", "Understand private, fine-tuned AI", "15 min", "Explore how models can be adapted to your context while keeping data and governance in your control.", ["Explain the value of private fine-tuning"], ["Context improves usefulness", "Privacy is an architecture decision"]),
      lesson("insights-3", "Design responsible controls", "17 min", "Match access, review, explainability, and monitoring to the risk of the task.", ["Define practical AI controls"], ["Use proportional controls", "Keep an audit trail"])
    ],
    quiz: [
      question("Which evidence belongs in an insight story?", ["Everything available", "Evidence relevant to the decision", "Only surprising data", "Only positive results"], 1, "Relevance helps stakeholders focus."),
      question("A strong narrative connects context and finding to:", ["A recommendation", "A decorative visual", "More raw data", "A longer meeting"], 0, "The recommendation makes the narrative actionable."),
      question("What should remain stable across audiences?", ["Font size", "The underlying evidence", "Meeting length", "Every detail"], 1, "Tailoring should not distort the evidence."),
      question("What can change for different stakeholders?", ["The facts", "The level of detail and framing", "The source", "The result"], 1, "Depth and framing can match audience needs."),
      question("Why make an implication explicit?", ["To clarify why the finding matters", "To avoid recommendations", "To add length", "To guarantee agreement"], 0, "Implications connect evidence to stakeholder priorities.")
    ]
  },
  {
    id: "scale", title: "Human-Approved Automation at Scale", category: "Automation", level: "Advanced", duration: "58 min",
    description: "Build safe automations with approval gates, explainability, monitoring, and measurable business impact.",
    objectives: ["Select automation-ready workflows", "Design human approval and exception paths", "Measure automation performance and value"],
    certificationName: "Fullstride Automation Leader", accent: "#63d4ff",
    lessons: [
      lesson("scale-1", "Choose what to automate", "18 min", "Find stable, repeatable work where automation reduces manual effort without hiding critical judgment.", ["Evaluate automation readiness"], ["Standardize before automating", "Keep risky judgment human"]),
      lesson("scale-2", "Build approval and exception paths", "19 min", "Design human checkpoints, explainability, and safe fallback behavior.", ["Plan a human-approved automation"], ["Approval gates should match risk", "Exceptions need clear ownership"]),
      lesson("scale-3", "Measure and improve the system", "21 min", "Track reliability, cycle time, adoption, and business outcomes as automation scales.", ["Create an automation scorecard"], ["Measure value and safety", "Review trends, not snapshots"])
    ],
    quiz: [
      question("Good governance should:", ["Prevent all experimentation", "Protect trust while enabling useful work", "Centralize every action", "Add approval layers"], 1, "Useful guardrails balance trust and momentum."),
      question("Decision rights clarify:", ["Who can decide what", "Which font to use", "How many meetings to hold", "Who logs in first"], 0, "Clear decision rights reduce ambiguity."),
      question("Effective champions need:", ["A real mandate and support", "A title only", "No time allocation", "Identical roles"], 0, "Mandate and support turn enthusiasm into sustained leadership."),
      question("A balanced scorecard combines:", ["Logins only", "Adoption, decision, and outcome indicators", "Anecdotes only", "Revenue only"], 1, "Multiple indicator types show both use and value."),
      question("Why review trends rather than snapshots?", ["Trends reveal direction and sustained change", "Snapshots are always wrong", "Trends need no context", "It removes judgment"], 0, "Trends better reveal whether practice is improving over time.")
    ]
  }
];

const defaultState = { version: 1, learnerName: "", completed: {}, quizAttempts: {}, certificates: {}, lastCourse: null, lastLesson: null };
let state = loadState();
let route = location.hash.slice(1) || (state.learnerName ? "/dashboard" : "/");
let quizSession = null;

function loadState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return parsed?.version === 1 ? { ...defaultState, ...parsed } : { ...defaultState };
  } catch { return { ...defaultState }; }
}
function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function navigate(path) { location.hash = path; }
function getCourse(id) { return courses.find(c => c.id === id); }
function completedIds(courseId) { return state.completed[courseId] || []; }
function isLessonUnlocked(course, index) { return index === 0 || completedIds(course.id).includes(course.lessons[index - 1].id); }
function isCourseComplete(course) { return course.lessons.every(l => completedIds(course.id).includes(l.id)); }
function getProgress(course) { return Math.round((completedIds(course.id).length / course.lessons.length) * 100); }
function hasPassed(courseId) { return (state.quizAttempts[courseId]?.bestScore || 0) >= 80; }
function totalCompleted() { return courses.filter(c => hasPassed(c.id)).length; }
function showToast(message) {
  const el = document.querySelector("#toast"); el.textContent = message; el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 2200);
}
function initials(name) { return name.split(/\s+/).map(x => x[0]).join("").slice(0,2).toUpperCase(); }
function icon(name) {
  const map = { dashboard:"⌂", catalog:"▦", library:"◫", certs:"✦", lock:"⌑", check:"✓", clock:"◷", arrow:"→" };
  return map[name] || "•";
}

function shell(content, active = "") {
  return `<div class="app-shell academy-portal">
    <aside class="academy-sidebar">
      <button class="brand text-link" data-nav="/dashboard" aria-label="Fullstride Academy home"><img src="./assets/fullstride-logo.svg" alt="Fullstride"><span class="academy-label">Academy</span></button>
      <div class="sidebar-context"><span>Learning center</span><strong>Fullstride Academy</strong></div>
      <nav class="nav" aria-label="Primary">
        ${navButton("/dashboard",`${icon("dashboard")} Dashboard`,active==="dashboard")}
        ${navButton("/courses",`${icon("catalog")} Course catalog`,active==="courses")}
        ${navButton("/training-library",`${icon("library")} Training library`,active==="library")}
        ${navButton("/certificates",`${icon("certs")} My certifications`,active==="certs")}
      </nav>
      <div class="sidebar-footer"><div class="profile"><span class="avatar">${initials(state.learnerName)}</span><span><strong>${state.learnerName}</strong><small>Learner profile</small></span></div><span>Progress saves automatically</span></div>
    </aside>
    <main class="main">${content}</main>
    <nav class="mobile-nav" aria-label="Mobile navigation">
      ${mobileNav("/dashboard","⌂","Home",active==="dashboard")}
      ${mobileNav("/courses","▦","Courses",active==="courses")}
      ${mobileNav("/training-library","◫","Library",active==="library")}
      ${mobileNav("/certificates","✦","Certificates",active==="certs")}
    </nav>
  </div>`;
}
function navButton(path,label,isActive){ return `<button data-nav="${path}" class="${isActive?"active":""}">${label}</button>`; }
function mobileNav(path,ico,label,isActive){ return `<button data-nav="${path}" class="${isActive?"active":""}"><span>${ico}</span><span>${label}</span></button>`; }
function courseCard(course, index) {
  const progress = getProgress(course); const passed = hasPassed(course.id);
  const label = passed ? "View course" : progress ? "Continue learning" : "Start course";
  return `<article class="course-card">
    <div class="course-art" style="--accent:${course.accent}"><span class="badge badge-light">${course.category}</span><span class="course-number">0${index+1}</span></div>
    <div class="course-body"><h3>${course.title}</h3>
      <div class="course-meta"><span>${course.level}</span><span>•</span><span>${icon("clock")} ${course.duration}</span><span>•</span><span>3 lessons</span></div>
      <p>${course.description}</p>
      <div class="course-footer"><div class="progress-row"><span>${passed?"Certified":progress?"In progress":"Not started"}</span><strong>${progress}%</strong></div>
      <div class="progress" aria-label="${progress}% complete"><span style="width:${progress}%"></span></div>
      <button class="btn ${progress?"btn-secondary":"btn-primary"}" data-nav="/courses/${course.id}">${label} ${icon("arrow")}</button></div>
    </div></article>`;
}

function onboarding() {
  return `<div class="onboarding">
    <section class="onboard-art"><div class="brand"><img src="./assets/fullstride-logo.svg" alt="Fullstride"><span class="academy-label">Academy</span></div>
      <h1>Learn the strategy.<br>Automate growth.</h1>
      <p>Practical learning for cleaner data, connected systems, private AI, and safer revenue automation.</p>
    </section>
    <section class="onboard-form"><div class="eyebrow">Welcome to the Academy</div><h2>Let’s personalize your learning.</h2>
      <p>Tell us your name. We’ll use it to track your progress and create your certificates on this device.</p>
      <form id="name-form"><div class="field"><label for="learner-name">Your full name</label>
        <input id="learner-name" autocomplete="name" placeholder="e.g. Jordan Lee" maxlength="60" autofocus>
        <small id="name-help">Your progress is saved locally in this browser.</small></div>
        <button class="btn btn-primary btn-wide" type="submit">Enter Fullstride Academy ${icon("arrow")}</button>
      </form>
    </section></div>`;
}

function dashboard() {
  const inProgress = courses.filter(c => getProgress(c)>0 && !hasPassed(c.id));
  const earned = Object.values(state.certificates);
  const recommendation = inProgress[0] || courses.find(c => !hasPassed(c.id)) || courses[0];
  return shell(`<section class="hero"><div class="eyebrow">Your learning home</div><h1>Good to see you, ${state.learnerName.split(" ")[0]}.</h1>
    <p>${inProgress.length ? "You’ve already built momentum. Pick up where you left off and keep moving forward." : "Your Fullstride learning path is ready. Start with the foundations and build from there."}</p>
    <div class="hero-actions"><button class="btn btn-primary" data-nav="/courses/${recommendation.id}">${inProgress.length?"Continue learning":"Start your first course"} ${icon("arrow")}</button><button class="btn btn-secondary" data-nav="/courses">Explore all courses</button></div>
  </section>
  <section class="stat-grid">
    <div class="stat"><div class="stat-label">Courses completed</div><div class="stat-value">${totalCompleted()}<small>/6</small></div><div class="stat-note">${totalCompleted() ? "Keep going" : "Ready when you are"}</div></div>
    <div class="stat"><div class="stat-label">Lessons completed</div><div class="stat-value">${Object.values(state.completed).flat().length}<small>/18</small></div><div class="stat-note">Across all courses</div></div>
    <div class="stat"><div class="stat-label">Certifications</div><div class="stat-value">${earned.length}</div><div class="stat-note">${earned.length ? "Credentials earned" : "Pass a quiz to earn one"}</div></div>
    <div class="stat"><div class="stat-label">Learning progress</div><div class="stat-value">${Math.round(courses.reduce((a,c)=>a+getProgress(c),0)/6)}%</div><div class="stat-note">Academy-wide</div></div>
  </section>
  <div class="section-head"><div><h2>${inProgress.length?"Continue learning":"Recommended for you"}</h2><p>${inProgress.length?"Resume your active courses.":"Start with a high-impact foundation."}</p></div><button class="text-link" data-nav="/courses">View catalog →</button></div>
  <section class="course-grid">${(inProgress.length?inProgress:[recommendation]).slice(0,3).map(c=>courseCard(c,courses.indexOf(c))).join("")}</section>
  ${earned.length ? `<div class="section-head"><div><h2>Recently earned</h2><p>Your Fullstride credentials.</p></div><button class="text-link" data-nav="/certificates">View all →</button></div>${certificateCards(earned.slice(-2))}` : ""}`, "dashboard");
}

function catalog() {
  return shell(`<div class="eyebrow">Course catalog</div><h1 class="page-title">Learn Fullstride.<br>Lead with confidence.</h1>
    <p class="page-lead">Short, practical courses designed to help you get value from Fullstride at every stage.</p>
    <div class="filters"><div class="search"><input id="course-search" type="search" placeholder="Search courses and skills…" aria-label="Search courses"></div>
    <div class="chips" id="category-chips">${["All",...new Set(courses.map(c=>c.category))].map((x,i)=>`<button class="chip ${i===0?"active":""}" data-category="${x}">${x}</button>`).join("")}</div></div>
    <p id="results-count" class="page-lead" style="font-size:14px;margin-bottom:18px">6 courses</p>
    <section class="course-grid" id="catalog-grid">${courses.map(courseCard).join("")}</section>`, "courses");
}

function courseDetail(course) {
  if (!course) return notFound();
  const progress = getProgress(course); const passed = hasPassed(course.id); const allDone = isCourseComplete(course);
  const nextIndex = course.lessons.findIndex(l=>!completedIds(course.id).includes(l.id));
  const cta = passed ? "View certificate" : allDone ? "Take the quiz" : progress ? "Continue course" : "Start course";
  const target = passed ? `/certificates/${state.certificates[course.id].id}` : allDone ? `/courses/${course.id}/quiz` : `/courses/${course.id}/lessons/${course.lessons[Math.max(nextIndex,0)].id}`;
  return shell(`<section class="detail-hero"><div><span class="badge badge-light">${course.category}</span><h1>${course.title}</h1><p>${course.description}</p>
    <div class="detail-meta"><span>${course.level}</span><span>${icon("clock")} ${course.duration}</span><span>3 lessons</span><span>Certificate included</span></div>
    <button class="btn btn-primary" data-nav="${target}">${cta} ${icon("arrow")}</button></div>
    <aside class="detail-side"><h3>Your progress</h3><div class="progress-row"><span>${passed?"Certified":allDone?"Ready for quiz":progress?"In progress":"Not started"}</span><strong>${progress}%</strong></div><div class="progress"><span style="width:${progress}%"></span></div>
    <button class="btn btn-secondary" data-nav="${target}">${cta}</button></aside></section>
    <section class="two-col"><div><div class="panel"><h2>What you’ll learn</h2><ul class="check-list">${course.objectives.map(x=>`<li>${x}</li>`).join("")}</ul></div>
    <div class="panel" style="margin-top:16px"><div class="eyebrow">Credential</div><h2>${course.certificationName}</h2><p class="page-lead" style="font-size:14px">Complete all lessons and score 80% or higher to earn this certification.</p></div></div>
    <div class="panel"><h2>Course curriculum</h2><div class="lesson-list">${course.lessons.map((l,i)=>lessonRow(course,l,i)).join("")}
    ${lessonRow(course,{id:"quiz",title:"Certification quiz",duration:"5 questions"},3,true)}</div></div></section>`, "courses");
}
function lessonRow(course,l,i,isQuiz=false) {
  const done = isQuiz ? hasPassed(course.id) : completedIds(course.id).includes(l.id);
  const unlocked = isQuiz ? isCourseComplete(course) : isLessonUnlocked(course,i);
  const target = isQuiz ? `/courses/${course.id}/quiz` : `/courses/${course.id}/lessons/${l.id}`;
  return `<button class="lesson-row" ${unlocked?`data-nav="${target}"`:"disabled"}><span class="lesson-icon ${done?"done":unlocked?"":"locked"}">${done?icon("check"):unlocked?(isQuiz?"?":i+1):icon("lock")}</span>
    <span class="lesson-info"><strong>${l.title}</strong><small>${l.duration}${!unlocked?" · Complete the previous lesson to unlock":""}</small></span><span>${unlocked?"→":""}</span></button>`;
}

function lessonPlayer(course, lessonId) {
  if (!course) return notFound();
  const index = course.lessons.findIndex(l=>l.id===lessonId); const l = course.lessons[index];
  if (!l || !isLessonUnlocked(course,index)) return lockedScreen(course);
  state.lastCourse=course.id; state.lastLesson=l.id; saveState();
  const done = completedIds(course.id).includes(l.id);
  return shell(`<div class="player-layout"><div><div class="video" role="img" aria-label="Video placeholder for ${l.title}"><span class="video-label">Fullstride video placeholder · ${l.duration}</span></div>
    <article class="lesson-content"><div class="eyebrow">${course.title} · Lesson ${index+1} of 3</div><h1>${l.title}</h1><p class="lede">${l.summary}</p>
    <section class="two-col"><div class="panel"><h2>Objectives</h2><ul class="check-list">${l.objectives.map(x=>`<li>${x}</li>`).join("")}</ul></div>
    <div class="panel"><h2>Key takeaways</h2><ul class="check-list">${l.takeaways.map(x=>`<li>${x}</li>`).join("")}</ul></div></section>
    <div class="lesson-actions"><button class="btn btn-secondary" ${index?`data-nav="/courses/${course.id}/lessons/${course.lessons[index-1].id}"`:`data-nav="/courses/${course.id}"`}>← ${index?"Previous lesson":"Course overview"}</button>
    <button id="complete-lesson" class="btn ${done?"btn-secondary":"btn-primary"}" data-course="${course.id}" data-lesson="${l.id}" data-index="${index}">${done?"Completed ✓":"Mark complete & continue →"}</button></div></article></div>
    <aside class="panel side-lessons"><div class="progress-row"><strong>Course progress</strong><span>${getProgress(course)}%</span></div><div class="progress"><span style="width:${getProgress(course)}%"></span></div>
    <div class="lesson-list" style="margin-top:20px">${course.lessons.map((x,i)=>lessonRow(course,x,i)).join("")}</div></aside></div>`, "courses");
}
function lockedScreen(course) {
  return shell(`<div class="empty"><div class="empty-icon">${icon("lock")}</div><h1>That lesson is still locked</h1><p>Complete the earlier lessons in order to continue.</p><button class="btn btn-primary" data-nav="/courses/${course.id}">Return to course</button></div>`,"courses");
}

function quizPage(course) {
  if (!course) return notFound();
  if (!isCourseComplete(course)) return shell(`<div class="empty"><div class="empty-icon">${icon("lock")}</div><h1>Quiz locked</h1><p>Complete all three lessons before taking the certification quiz.</p><button class="btn btn-primary" data-nav="/courses/${course.id}">Back to course</button></div>`,"courses");
  if (hasPassed(course.id) && !quizSession) {
    const cert = state.certificates[course.id];
    return shell(`<div class="result"><div class="empty-icon">✦</div><div class="eyebrow">Certification earned</div><h1>You’ve already passed.</h1><p>Your certificate is ready whenever you need it.</p><button class="btn btn-primary" data-nav="/certificates/${cert.id}">View certificate</button><button class="btn btn-secondary" id="retake-quiz" data-course="${course.id}">Retake for practice</button></div>`,"courses");
  }
  if (!quizSession || quizSession.courseId!==course.id) quizSession={courseId:course.id,index:0,answers:Array(5).fill(null),result:null};
  if (quizSession.result) return quizResult(course);
  const i=quizSession.index, q=course.quiz[i];
  return shell(`<div class="quiz-wrap"><div class="quiz-head"><div class="eyebrow">${course.title}</div><h1 class="page-title">Certification quiz</h1><p class="page-lead">Score 80% or higher to pass. You can retry if needed.</p>
    <div class="progress-row" style="margin-top:24px"><span>Question ${i+1} of 5</span><strong>${Math.round((i+1)/5*100)}%</strong></div><div class="progress"><span style="width:${(i+1)/5*100}%"></span></div></div>
    <section class="question-card"><div class="question-kicker">Question ${i+1}</div><h2>${q.question}</h2><div class="options">${q.options.map((o,oi)=>`<button class="option ${quizSession.answers[i]===oi?"selected":""}" data-answer="${oi}"><span class="option-marker"></span><span>${o}</span></button>`).join("")}</div>
    <div class="quiz-nav"><button class="btn btn-secondary" id="quiz-prev" ${i===0?"disabled":""}>← Previous</button><button class="btn btn-primary" id="quiz-next" ${quizSession.answers[i]===null?"disabled":""}>${i===4?"Submit quiz":"Next question →"}</button></div></section></div>`,"courses");
}
function quizResult(course) {
  const { score, passed } = quizSession.result;
  return shell(`<div class="quiz-wrap"><section class="result"><div class="score-ring" style="--score:${score}%"><strong>${score}%</strong></div>
    <div class="eyebrow">${passed?"Quiz passed":"Not quite yet"}</div><h1>${passed?"Excellent work.":"You’re close."}</h1>
    <p>${passed?"You demonstrated a strong understanding and unlocked your Fullstride certificate.":"Review the explanations below, then try again when you’re ready. Your lesson progress is safe."}</p>
    <div>${passed?`<button class="btn btn-primary" data-nav="/certificates/${state.certificates[course.id].id}">View your certificate ✦</button>`:`<button class="btn btn-primary" id="retry-quiz" data-course="${course.id}">Retry quiz</button>`}<button class="btn btn-secondary" data-nav="/courses/${course.id}">Back to course</button></div>
    <div class="review">${course.quiz.map((q,i)=>{const correct=quizSession.answers[i]===q.correctAnswer;return `<div class="review-item ${correct?"correct":"wrong"}"><strong>${correct?"✓ Correct":"✕ Review"}: ${q.question}</strong><p>${q.explanation}</p></div>`}).join("")}</div>
  </section></div>`,"courses");
}

function issueCertificate(course) {
  if (state.certificates[course.id]) return state.certificates[course.id];
  const suffix = Math.random().toString(36).slice(2,8).toUpperCase();
  state.certificates[course.id] = { id:`FSA-${new Date().getFullYear()}-${suffix}`, courseId:course.id, certificationName:course.certificationName, learnerName:state.learnerName, date:new Date().toISOString() };
  saveState(); return state.certificates[course.id];
}
function certificateCards(certs) {
  return `<section class="cert-grid">${certs.map(cert=>`<article class="cert-card"><div class="cert-card-top"><div><span class="badge badge-success">Verified credential</span><h3 style="margin-top:13px">${cert.certificationName}</h3></div><div class="cert-card-icon">✦</div></div><p>Earned ${formatDate(cert.date)} · ${cert.id}</p><button class="btn btn-secondary" data-nav="/certificates/${cert.id}">View certificate →</button></article>`).join("")}</section>`;
}
function certifications() {
  const certs=Object.values(state.certificates);
  return shell(`<div class="eyebrow">Your credentials</div><h1 class="page-title">My Certifications</h1><p class="page-lead">A record of the Fullstride expertise you’ve earned.</p>
    <div class="section-head"><div><h2>${certs.length?`${certs.length} credential${certs.length===1?"":"s"} earned`:"Your collection starts here"}</h2></div></div>
    ${certs.length?certificateCards(certs):`<div class="empty"><div class="empty-icon">✦</div><h2>No certifications yet</h2><p>Complete a course and score 80% or higher on its quiz to earn your first credential.</p><button class="btn btn-primary" data-nav="/courses">Explore courses</button></div>`}`, "certs");
}
function certificatePage(id) {
  const cert=Object.values(state.certificates).find(x=>x.id===id); if(!cert) return notFound();
  return shell(`<div class="certificate-shell"><div class="certificate"><div class="certificate-inner">
    <div class="cert-corner" aria-hidden="true"></div>
    <div class="cert-top">
      <div class="brand"><img src="./assets/fullstride-logo.svg" alt="Fullstride"><span class="academy-label">Academy</span></div>
      <span class="cert-verified"><i></i> Verified credential</span>
    </div>
    <div class="cert-body">
      <div class="certificate-label">Certificate of completion</div>
      <h1>Fullstride certified</h1>
      <div class="presented">This credential is awarded to</div>
      <div class="learner-name">${cert.learnerName}</div>
      <div class="presented">for successfully demonstrating proficiency in</div>
      <div class="cert-name">${cert.certificationName}</div>
    </div>
    <div class="cert-footer">
      <div class="cert-meta">
        <div><span>Issued</span><strong>${formatDate(cert.date)}</strong></div>
        <div><span>Credential ID</span><strong>${cert.id}</strong></div>
      </div>
      <div class="cert-authority"><span>Issued by</span><strong>Fullstride Academy</strong><small>AI-driven RevOps learning</small></div>
      <div class="cert-seal" aria-label="Fullstride Academy verified"><span>F</span><small>Verified</small></div>
    </div>
  </div></div><div class="certificate-actions"><button class="btn btn-primary" id="print-cert">Print / Save as PDF</button><button class="btn btn-secondary" data-nav="/certificates">All certifications</button><button class="btn btn-secondary" data-nav="/dashboard">Return to dashboard</button></div></div>`, "certs");
}
function formatDate(date){ return new Intl.DateTimeFormat("en-US",{month:"long",day:"numeric",year:"numeric"}).format(new Date(date)); }

function library() {
  return shell(`<section class="library-banner"><div class="eyebrow" style="color:var(--mint)">Training library preview</div><h1 class="page-title">One place to keep<br>your practice moving.</h1><p>Explore structured courses today—and preview the expanding collection of playbooks, short lessons, and role-based learning paths ahead.</p><button class="btn btn-primary" data-nav="/courses">Browse available courses →</button></section>
    <div class="section-head"><div><h2>Learning paths</h2><p>Focused development for the work you do.</p></div></div>
    <section class="path-grid">
      <article class="path-card"><div class="path-icon">◎</div><span class="badge badge-success">Available now</span><h3 style="margin-top:13px">Fullstride Practitioner</h3><p>Build fluency from foundations through confident workflow execution.</p><button class="text-link" data-nav="/courses">Explore path →</button></article>
      <article class="path-card"><div class="path-icon">◇</div><span class="badge badge-lock">Coming soon</span><h3 style="margin-top:13px">People Leader</h3><p>Use workforce signals to align teams and make clearer talent decisions.</p></article>
      <article class="path-card"><div class="path-icon">✦</div><span class="badge badge-lock">Coming soon</span><h3 style="margin-top:13px">Executive Sponsor</h3><p>Connect Fullstride practice to strategic priorities and measurable value.</p></article>
    </section>
    <div class="section-head"><div><h2>Coming to the library</h2><p>More ways to learn in the flow of work.</p></div></div>
    <section class="path-grid">
      <article class="panel"><span class="badge badge-lock">Preview</span><h3 style="margin-top:15px">Five-minute skill builders</h3><p class="page-lead" style="font-size:14px">Fast answers for common Fullstride moments.</p></article>
      <article class="panel"><span class="badge badge-lock">Preview</span><h3 style="margin-top:15px">Facilitator playbooks</h3><p class="page-lead" style="font-size:14px">Guides for turning insight into aligned discussion.</p></article>
      <article class="panel"><span class="badge badge-lock">Preview</span><h3 style="margin-top:15px">Customer stories</h3><p class="page-lead" style="font-size:14px">See how teams put Fullstride into practice.</p></article>
    </section>`, "library");
}
function notFound(){ return shell(`<div class="empty"><div class="empty-icon">?</div><h1>We couldn’t find that page</h1><p>Let’s get you back to your learning.</p><button class="btn btn-primary" data-nav="/dashboard">Go to dashboard</button></div>`); }

function render() {
  route=location.hash.slice(1)||(state.learnerName?"/dashboard":"/");
  if (!state.learnerName && route!=="/") { navigate("/"); return; }
  const parts=route.split("/").filter(Boolean); let html;
  if(route==="/") html=onboarding();
  else if(route==="/dashboard") html=dashboard();
  else if(route==="/courses") html=catalog();
  else if(route==="/certificates") html=certifications();
  else if(route==="/training-library") html=library();
  else if(parts[0]==="courses"&&parts.length===2) html=courseDetail(getCourse(parts[1]));
  else if(parts[0]==="courses"&&parts[2]==="lessons") html=lessonPlayer(getCourse(parts[1]),parts[3]);
  else if(parts[0]==="courses"&&parts[2]==="quiz") html=quizPage(getCourse(parts[1]));
  else if(parts[0]==="certificates"&&parts[1]) html=certificatePage(parts[1]);
  else html=notFound();
  document.querySelector("#app").innerHTML=html; window.scrollTo(0,0); bind();
}

function bind(){
  document.querySelectorAll("[data-nav]").forEach(el=>el.addEventListener("click",()=>navigate(el.dataset.nav)));
  document.querySelector("#name-form")?.addEventListener("submit",e=>{
    e.preventDefault(); const input=document.querySelector("#learner-name"); const name=input.value.trim();
    if(name.length<2){document.querySelector("#name-help").textContent="Please enter at least two characters.";document.querySelector("#name-help").classList.add("error");input.focus();return;}
    state.learnerName=name;saveState();navigate("/dashboard");
  });
  let selectedCategory="All";
  const filter=()=>{
    const query=(document.querySelector("#course-search")?.value||"").toLowerCase();
    const filtered=courses.filter(c=>(selectedCategory==="All"||c.category===selectedCategory)&&`${c.title} ${c.description} ${c.objectives.join(" ")}`.toLowerCase().includes(query));
    const grid=document.querySelector("#catalog-grid"); if(!grid)return;
    grid.innerHTML=filtered.length?filtered.map(c=>courseCard(c,courses.indexOf(c))).join(""):`<div class="empty" style="grid-column:1/-1"><div class="empty-icon">⌕</div><h2>No matching courses</h2><p>Try a broader search or another category.</p></div>`;
    document.querySelector("#results-count").textContent=`${filtered.length} course${filtered.length===1?"":"s"}`;
    grid.querySelectorAll("[data-nav]").forEach(el=>el.addEventListener("click",()=>navigate(el.dataset.nav)));
  };
  document.querySelector("#course-search")?.addEventListener("input",filter);
  document.querySelectorAll("[data-category]").forEach(el=>el.addEventListener("click",()=>{
    selectedCategory=el.dataset.category;document.querySelectorAll("[data-category]").forEach(x=>x.classList.toggle("active",x===el));filter();
  }));
  document.querySelector("#complete-lesson")?.addEventListener("click",e=>{
    const {course:courseId,lesson:lessonId,index}=e.currentTarget.dataset; const course=getCourse(courseId);
    state.completed[courseId]=[...new Set([...completedIds(courseId),lessonId])];saveState();showToast("Lesson complete. Your progress is saved.");
    const next=course.lessons[Number(index)+1]; setTimeout(()=>navigate(next?`/courses/${courseId}/lessons/${next.id}`:`/courses/${courseId}`),500);
  });
  document.querySelectorAll("[data-answer]").forEach(el=>el.addEventListener("click",()=>{
    quizSession.answers[quizSession.index]=Number(el.dataset.answer);render();
  }));
  document.querySelector("#quiz-prev")?.addEventListener("click",()=>{quizSession.index--;render();});
  document.querySelector("#quiz-next")?.addEventListener("click",()=>{
    if(quizSession.index<4){quizSession.index++;render();return;}
    const course=getCourse(quizSession.courseId); const correct=course.quiz.filter((q,i)=>q.correctAnswer===quizSession.answers[i]).length; const score=correct*20; const passed=score>=80;
    const old=state.quizAttempts[course.id]||{attempts:0,bestScore:0}; state.quizAttempts[course.id]={attempts:old.attempts+1,bestScore:Math.max(old.bestScore,score),lastScore:score}; if(passed)issueCertificate(course);saveState();quizSession.result={score,passed};render();
  });
  document.querySelector("#retry-quiz")?.addEventListener("click",e=>{quizSession={courseId:e.currentTarget.dataset.course,index:0,answers:Array(5).fill(null),result:null};render();});
  document.querySelector("#retake-quiz")?.addEventListener("click",e=>{quizSession={courseId:e.currentTarget.dataset.course,index:0,answers:Array(5).fill(null),result:null};render();});
  document.querySelector("#print-cert")?.addEventListener("click",()=>window.print());
}
window.addEventListener("hashchange",render);
render();
