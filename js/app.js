/* ================================================
   STUDYSNAP — Main Application JavaScript
   Premium EdTech SaaS UI Prototype
   ================================================ */

// ============ SAMPLE DATA ============

const studentData = {
  name: 'Aryan Yadav',
  firstName: 'Aryan',
  initials: 'AY',
  role: 'BCA Student',
  university: 'The NorthCap University',
  cgpa: 9.81,
  assignmentsDue: 5,
  attendance: 82,
  revisionSheets: 23,
  productivityScore: 91,
};

const assignments = [
  { id: 1, title: 'Java Lab Assignment', subject: 'Java Programming', due: 'June 16, 2026', priority: 'high', status: 'todo', progress: 35 },
  { id: 2, title: 'AI Presentation', subject: 'Artificial Intelligence', due: 'June 18, 2026', priority: 'medium', status: 'progress', progress: 60 },
  { id: 3, title: 'DBMS Mini Project', subject: 'Database Systems', due: 'June 20, 2026', priority: 'high', status: 'todo', progress: 15 },
  { id: 4, title: 'Research Paper Review', subject: 'Research Methodology', due: 'June 22, 2026', priority: 'medium', status: 'progress', progress: 50 },
  { id: 5, title: 'Cloud Computing Report', subject: 'Cloud Computing', due: 'June 12, 2026', priority: 'low', status: 'done', progress: 100 },
];

const subjects = [
  { name: 'Data Structures', code: 'CS201', attendance: 88, total: 40, attended: 35, color: '#6366F1' },
  { name: 'Java Programming', code: 'CS202', attendance: 81, total: 42, attended: 34, color: '#8B5CF6' },
  { name: 'DBMS', code: 'CS203', attendance: 76, total: 38, attended: 29, color: '#F59E0B' },
  { name: 'Mathematics', code: 'MA201', attendance: 92, total: 36, attended: 33, color: '#10B981' },
  { name: 'Computer Networks', code: 'CS204', attendance: 71, total: 38, attended: 27, color: '#EF4444', warning: true },
];

const weeklyProgress = [
  { day: 'Mon', tasks: 4, hours: 5.2 },
  { day: 'Tue', tasks: 3, hours: 4.1 },
  { day: 'Wed', tasks: 5, hours: 6.0 },
  { day: 'Thu', tasks: 2, hours: 3.5 },
  { day: 'Fri', tasks: 6, hours: 7.2 },
  { day: 'Sat', tasks: 4, hours: 4.8 },
  { day: 'Sun', tasks: 1, hours: 2.0 },
];

// ============ ROUTER ============

class Router {
  constructor() {
    this.routes = {};
    this.currentPage = '';
    window.addEventListener('hashchange', () => this.handleRoute());
  }

  on(route, handler) {
    this.routes[route] = handler;
    return this;
  }

  navigate(route) {
    window.location.hash = route;
  }

  handleRoute() {
    const hash = window.location.hash.slice(1) || 'landing';
    if (this.routes[hash]) {
      this.currentPage = hash;
      this.routes[hash]();
      this.updateActiveNav();
    }
  }

  updateActiveNav() {
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.toggle('active', item.dataset.page === this.currentPage);
    });
  }

  start() {
    this.handleRoute();
  }
}

// ============ APP ============

const app = document.getElementById('app');
const router = new Router();

router
  .on('landing', renderLanding)
  .on('dashboard', renderDashboard)
  .on('assignments', renderAssignments)
  .on('attendance', renderAttendance)
  .on('revision', renderRevision)
  .on('profile', renderProfile)
  .start();

// ============ LANDING PAGE ============

function renderLanding() {
  app.innerHTML = `
    <div class="landing-page">
      <!-- Navbar -->
      <nav class="landing-nav" id="landing-navbar">
        <div class="nav-logo">
          <div class="nav-logo-icon"><i class="ri-flashlight-fill"></i></div>
          Study<span style="color: var(--primary)">Snap</span>
        </div>
        <div class="nav-links">
          <a class="nav-link" href="#landing">Home</a>
          <a class="nav-link" onclick="document.getElementById('features-section').scrollIntoView({behavior:'smooth'})">Features</a>
          <a class="nav-link" onclick="document.getElementById('stats-section').scrollIntoView({behavior:'smooth'})">About</a>
          <a class="nav-link" onclick="document.getElementById('testimonials-section').scrollIntoView({behavior:'smooth'})">Reviews</a>
        </div>
        <div class="nav-cta">
          <a class="btn btn-ghost" href="#dashboard">Log In</a>
          <a class="btn btn-primary" href="#dashboard">Get Started</a>
        </div>
      </nav>

      <!-- Hero -->
      <section class="hero-section">
        <div class="hero-bg-orb orb1"></div>
        <div class="hero-bg-orb orb2"></div>
        <div class="hero-bg-orb orb3"></div>
        <div class="hero-content">
          <div class="hero-badge">
            <span class="dot"></span>
            AI-Powered Academic Assistant
          </div>
          <h1 class="hero-title">
            Study Smarter with<br>
            <span class="gradient-text">AI-Powered Tools</span>
          </h1>
          <p class="hero-subtitle">
            Your all-in-one academic companion for smart assignment management,
            real-time attendance tracking, and AI-powered revision assistance.
            Built for students who aim higher.
          </p>
          <div class="hero-cta">
            <a class="btn btn-primary btn-lg" href="#dashboard">
              <i class="ri-rocket-2-line"></i>
              Get Started Free
            </a>
            <a class="btn btn-secondary btn-lg" href="#dashboard">
              <i class="ri-play-circle-line"></i>
              View Demo
            </a>
          </div>
        </div>

        <!-- Dashboard Preview -->
        <div class="hero-image">
          <div class="hero-dashboard-preview">
            <div class="preview-bar">
              <span class="preview-dot red"></span>
              <span class="preview-dot yellow"></span>
              <span class="preview-dot green"></span>
            </div>
            <div class="preview-body">
              <div class="preview-body-content">
                <div class="preview-sidebar-mock">
                  <div style="display:flex;align-items:center;gap:8px;margin-bottom:20px;">
                    <div style="width:24px;height:24px;background:rgba(255,255,255,0.3);border-radius:6px;"></div>
                    <div class="mock-line" style="width:70%;margin:0;"></div>
                  </div>
                  <div class="mock-line active"></div>
                  <div class="mock-line"></div>
                  <div class="mock-line"></div>
                  <div class="mock-line short"></div>
                  <div style="margin-top:20px;"></div>
                  <div class="mock-line" style="width:40%;height:6px;opacity:0.3;"></div>
                  <div class="mock-line"></div>
                  <div class="mock-line"></div>
                </div>
                <div class="preview-main-mock">
                  <div class="mock-stat-card">
                    <div class="mock-icon" style="background:#EEF2FF;"></div>
                    <div class="mock-value"></div>
                    <div class="mock-label"></div>
                  </div>
                  <div class="mock-stat-card">
                    <div class="mock-icon" style="background:#F5F3FF;"></div>
                    <div class="mock-value"></div>
                    <div class="mock-label"></div>
                  </div>
                  <div class="mock-stat-card">
                    <div class="mock-icon" style="background:#D1FAE5;"></div>
                    <div class="mock-value"></div>
                    <div class="mock-label"></div>
                  </div>
                  <div class="mock-stat-card">
                    <div class="mock-icon" style="background:#FEF3C7;"></div>
                    <div class="mock-value"></div>
                    <div class="mock-label"></div>
                  </div>
                  <div class="mock-chart">
                    <div style="height:8px;width:40%;background:#E2E8F0;border-radius:4px;margin-bottom:16px;"></div>
                    <div style="display:flex;align-items:flex-end;gap:8px;height:100px;">
                      <div style="width:100%;height:60%;background:linear-gradient(180deg,#6366F1,#818CF8);border-radius:6px 6px 0 0;"></div>
                      <div style="width:100%;height:40%;background:linear-gradient(180deg,#6366F1,#818CF8);border-radius:6px 6px 0 0;"></div>
                      <div style="width:100%;height:80%;background:linear-gradient(180deg,#6366F1,#818CF8);border-radius:6px 6px 0 0;"></div>
                      <div style="width:100%;height:55%;background:linear-gradient(180deg,#6366F1,#818CF8);border-radius:6px 6px 0 0;"></div>
                      <div style="width:100%;height:90%;background:linear-gradient(180deg,#6366F1,#818CF8);border-radius:6px 6px 0 0;"></div>
                      <div style="width:100%;height:70%;background:linear-gradient(180deg,#6366F1,#818CF8);border-radius:6px 6px 0 0;"></div>
                      <div style="width:100%;height:30%;background:linear-gradient(180deg,#6366F1,#818CF8);border-radius:6px 6px 0 0;"></div>
                    </div>
                  </div>
                  <div class="mock-list">
                    <div style="height:8px;width:50%;background:#E2E8F0;border-radius:4px;margin-bottom:16px;"></div>
                    <div style="display:flex;flex-direction:column;gap:10px;">
                      <div style="display:flex;gap:8px;align-items:center;">
                        <div style="width:8px;height:8px;border-radius:50%;background:#EF4444;"></div>
                        <div style="flex:1;height:8px;background:#E2E8F0;border-radius:4px;"></div>
                      </div>
                      <div style="display:flex;gap:8px;align-items:center;">
                        <div style="width:8px;height:8px;border-radius:50%;background:#F59E0B;"></div>
                        <div style="flex:1;height:8px;background:#E2E8F0;border-radius:4px;"></div>
                      </div>
                      <div style="display:flex;gap:8px;align-items:center;">
                        <div style="width:8px;height:8px;border-radius:50%;background:#EF4444;"></div>
                        <div style="flex:1;height:8px;background:#E2E8F0;border-radius:4px;"></div>
                      </div>
                      <div style="display:flex;gap:8px;align-items:center;">
                        <div style="width:8px;height:8px;border-radius:50%;background:#10B981;"></div>
                        <div style="flex:1;height:8px;background:#E2E8F0;border-radius:4px;"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Features -->
      <section class="features-section" id="features-section">
        <div class="section-header">
          <div class="section-badge"><i class="ri-sparkling-line"></i> Core Features</div>
          <h2 class="section-title">Everything you need to<br>excel academically</h2>
          <p class="section-subtitle">
            Powerful AI-driven tools designed to streamline your academic journey and boost productivity.
          </p>
        </div>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon blue"><i class="ri-task-line"></i></div>
            <h3 class="feature-title">Smart Assignment Tracker</h3>
            <p class="feature-desc">Organize assignments with smart priorities, deadlines, and Kanban-style task management. Never miss a submission again.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon purple"><i class="ri-pie-chart-line"></i></div>
            <h3 class="feature-title">Attendance Monitor</h3>
            <p class="feature-desc">Track your attendance across all subjects with real-time analytics and smart alerts when you're falling below thresholds.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon cyan"><i class="ri-robot-2-line"></i></div>
            <h3 class="feature-title">AI Quick Revision</h3>
            <p class="feature-desc">Upload your notes and get AI-generated summaries, key topics, and important questions for exam preparation.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon green"><i class="ri-line-chart-line"></i></div>
            <h3 class="feature-title">Academic Analytics</h3>
            <p class="feature-desc">Visualize your academic progress with insightful charts, productivity trends, and personalized study recommendations.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon orange"><i class="ri-calendar-schedule-line"></i></div>
            <h3 class="feature-title">Smart Scheduling</h3>
            <p class="feature-desc">AI-powered scheduling that optimizes your study time based on assignment deadlines and revision priorities.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon pink"><i class="ri-shield-check-line"></i></div>
            <h3 class="feature-title">Secure & Private</h3>
            <p class="feature-desc">Your data is encrypted and secure. We prioritize privacy while delivering a seamless academic experience.</p>
          </div>
        </div>
      </section>

      <!-- Stats -->
      <section class="stats-section" id="stats-section">
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number" data-count="15000">15,000+</div>
            <div class="stat-text">Active Students</div>
          </div>
          <div class="stat-item">
            <div class="stat-number" data-count="50000">50,000+</div>
            <div class="stat-text">Assignments Tracked</div>
          </div>
          <div class="stat-item">
            <div class="stat-number" data-count="120">120+</div>
            <div class="stat-text">Universities</div>
          </div>
          <div class="stat-item">
            <div class="stat-number" data-count="98">98%</div>
            <div class="stat-text">Student Satisfaction</div>
          </div>
        </div>
      </section>

      <!-- Testimonials -->
      <section class="testimonials-section" id="testimonials-section">
        <div class="section-header">
          <div class="section-badge"><i class="ri-heart-line"></i> Testimonials</div>
          <h2 class="section-title">Loved by students<br>everywhere</h2>
          <p class="section-subtitle">
            See what students from top universities have to say about StudySnap.
          </p>
        </div>
        <div class="testimonials-grid">
          <div class="testimonial-card">
            <div class="testimonial-stars">
              <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i>
            </div>
            <p class="testimonial-text">"StudySnap completely changed how I manage my semester. The AI revision generator saved me hours of study time before my finals!"</p>
            <div class="testimonial-author">
              <div class="testimonial-avatar" style="background: linear-gradient(135deg, #6366F1, #818CF8)">PS</div>
              <div>
                <div class="testimonial-name">Priya Sharma</div>
                <div class="testimonial-role">B.Tech CS, IIT Delhi</div>
              </div>
            </div>
          </div>
          <div class="testimonial-card">
            <div class="testimonial-stars">
              <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i>
            </div>
            <p class="testimonial-text">"The attendance monitor helped me identify which classes I was falling behind in. I managed to bring my attendance above 75% in all subjects!"</p>
            <div class="testimonial-author">
              <div class="testimonial-avatar" style="background: linear-gradient(135deg, #8B5CF6, #A78BFA)">RK</div>
              <div>
                <div class="testimonial-name">Rahul Kumar</div>
                <div class="testimonial-role">BCA, BITS Pilani</div>
              </div>
            </div>
          </div>
          <div class="testimonial-card">
            <div class="testimonial-stars">
              <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-fill"></i>
            </div>
            <p class="testimonial-text">"A must-have for every college student. The smart assignment tracker with Kanban view is so intuitive. Feels like using Notion but built for students!"</p>
            <div class="testimonial-author">
              <div class="testimonial-avatar" style="background: linear-gradient(135deg, #06B6D4, #67E8F9)">AM</div>
              <div>
                <div class="testimonial-name">Ananya Mehta</div>
                <div class="testimonial-role">M.Sc CS, NIT Trichy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="cta-section">
        <div class="cta-content">
          <h2 class="cta-title">Ready to study smarter?</h2>
          <p class="cta-subtitle">Join thousands of students already using StudySnap to ace their academics.</p>
          <div style="display:flex;gap:16px;justify-content:center;">
            <a class="btn btn-primary btn-lg" href="#dashboard">
              <i class="ri-rocket-2-line"></i>
              Start for Free
            </a>
            <a class="btn btn-secondary btn-lg" href="#dashboard">
              Learn More
            </a>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="landing-footer">
        <div class="footer-grid">
          <div>
            <div class="footer-brand">
              <div class="nav-logo-icon" style="width:30px;height:30px;font-size:14px;border-radius:8px;"><i class="ri-flashlight-fill"></i></div>
              StudySnap
            </div>
            <p class="footer-desc">AI-powered academic companion helping students study smarter, track better, and achieve more.</p>
          </div>
          <div class="footer-col">
            <h4>Product</h4>
            <a href="#dashboard">Dashboard</a>
            <a href="#assignments">Assignments</a>
            <a href="#attendance">Attendance</a>
            <a href="#revision">AI Revision</a>
          </div>
          <div class="footer-col">
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>
          <div class="footer-col">
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
        <div class="footer-bottom">
          &copy; 2026 StudySnap. All rights reserved. Built with ❤️ for students.
        </div>
      </footer>
    </div>
  `;

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('landing-navbar');
    if (nav) {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    }
  });
}


// ============ APP SHELL (Sidebar + Content) ============

function renderAppShell(pageId, content) {
  app.innerHTML = `
    <div class="app-layout">
      <!-- Sidebar -->
      <aside class="sidebar" id="app-sidebar">
        <div class="sidebar-header">
          <div class="sidebar-logo"><i class="ri-flashlight-fill"></i></div>
          <div class="sidebar-brand">Study<span>Snap</span></div>
        </div>

        <nav class="sidebar-nav">
          <div class="sidebar-section-label">Main Menu</div>
          <div class="nav-item ${pageId === 'dashboard' ? 'active' : ''}" data-page="dashboard" onclick="router.navigate('dashboard')">
            <i class="ri-dashboard-3-line"></i> Dashboard
          </div>
          <div class="nav-item ${pageId === 'assignments' ? 'active' : ''}" data-page="assignments" onclick="router.navigate('assignments')">
            <i class="ri-task-line"></i> Assignments
            <span class="nav-badge">5</span>
          </div>
          <div class="nav-item ${pageId === 'attendance' ? 'active' : ''}" data-page="attendance" onclick="router.navigate('attendance')">
            <i class="ri-pie-chart-line"></i> Attendance
          </div>
          <div class="nav-item ${pageId === 'revision' ? 'active' : ''}" data-page="revision" onclick="router.navigate('revision')">
            <i class="ri-robot-2-line"></i> AI Revision
          </div>

          <div class="sidebar-section-label">Account</div>
          <div class="nav-item ${pageId === 'profile' ? 'active' : ''}" data-page="profile" onclick="router.navigate('profile')">
            <i class="ri-user-3-line"></i> Profile
          </div>
          <div class="nav-item" onclick="router.navigate('landing')">
            <i class="ri-logout-box-r-line"></i> Sign Out
          </div>
        </nav>

        <div class="sidebar-footer">
          <div class="sidebar-user" onclick="router.navigate('profile')">
            <div class="sidebar-avatar">${studentData.initials}</div>
            <div class="sidebar-user-info">
              <div class="sidebar-user-name">${studentData.name}</div>
              <div class="sidebar-user-role">${studentData.role}</div>
            </div>
          </div>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="main-content">
        ${content}
      </main>
    </div>
  `;
}


// ============ DASHBOARD PAGE ============

function renderDashboard() {
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateStr = today.toLocaleDateString('en-IN', options);

  const content = `
    <div class="page-header">
      <div class="page-header-top">
        <div>
          <h1 class="page-title">Dashboard</h1>
          <p class="page-subtitle">Your academic overview at a glance</p>
        </div>
        <div class="page-actions">
          <div class="search-input-wrapper">
            <i class="ri-search-line"></i>
            <input type="text" class="input" placeholder="Search anything..." style="width: 240px;">
          </div>
          <button class="btn btn-icon btn-secondary" style="position:relative;">
            <i class="ri-notification-3-line"></i>
            <span class="notification-dot"></span>
          </button>
        </div>
      </div>
    </div>

    <div class="page-body page-enter">
      <!-- Welcome Banner -->
      <div class="welcome-banner">
        <div class="welcome-text" style="position:relative;z-index:1;">
          <h2>Welcome back, ${studentData.firstName} 👋</h2>
          <p>You have ${studentData.assignmentsDue} assignments due this week. Keep up the great work!</p>
          <div class="welcome-date">${dateStr}</div>
        </div>
      </div>

      <!-- Stats Row -->
      <div class="stats-row">
        <div class="stat-card blue" style="opacity:0;animation: fadeInUp 0.5s var(--ease) 0.1s forwards;">
          <div class="stat-icon blue"><i class="ri-file-list-3-line"></i></div>
          <div class="stat-value">${studentData.assignmentsDue}</div>
          <div class="stat-label">Assignments Due</div>
          <div class="stat-change up"><i class="ri-arrow-up-s-line"></i> 2 this week</div>
        </div>
        <div class="stat-card purple" style="opacity:0;animation: fadeInUp 0.5s var(--ease) 0.15s forwards;">
          <div class="stat-icon purple"><i class="ri-pie-chart-2-line"></i></div>
          <div class="stat-value">${studentData.attendance}%</div>
          <div class="stat-label">Overall Attendance</div>
          <div class="stat-change up"><i class="ri-arrow-up-s-line"></i> +3% from last month</div>
        </div>
        <div class="stat-card green" style="opacity:0;animation: fadeInUp 0.5s var(--ease) 0.2s forwards;">
          <div class="stat-icon green"><i class="ri-file-paper-2-line"></i></div>
          <div class="stat-value">${studentData.revisionSheets}</div>
          <div class="stat-label">Revision Sheets</div>
          <div class="stat-change up"><i class="ri-arrow-up-s-line"></i> 5 this month</div>
        </div>
        <div class="stat-card orange" style="opacity:0;animation: fadeInUp 0.5s var(--ease) 0.25s forwards;">
          <div class="stat-icon orange"><i class="ri-speed-line"></i></div>
          <div class="stat-value">${studentData.productivityScore}%</div>
          <div class="stat-label">Productivity Score</div>
          <div class="stat-change up"><i class="ri-arrow-up-s-line"></i> Excellent</div>
        </div>
      </div>

      <!-- Widgets -->
      <div class="dashboard-widgets">
        <!-- Left: Weekly Progress Chart -->
        <div>
          <div class="widget" style="margin-bottom:24px;">
            <div class="widget-header">
              <div class="widget-title"><i class="ri-bar-chart-grouped-line"></i> Weekly Academic Progress</div>
              <div class="tabs">
                <div class="tab active">Tasks</div>
                <div class="tab">Hours</div>
              </div>
            </div>
            <div class="widget-body">
              <div class="chart-container">
                <canvas id="weeklyChart"></canvas>
              </div>
            </div>
          </div>

          <!-- AI Revision Activity -->
          <div class="widget">
            <div class="widget-header">
              <div class="widget-title"><i class="ri-robot-2-line"></i> AI Revision Activity</div>
              <a class="btn btn-sm btn-ghost" href="#revision">View All</a>
            </div>
            <div class="widget-body">
              <div style="display:flex;flex-direction:column;gap:12px;">
                <div style="display:flex;align-items:center;gap:14px;padding:12px;background:var(--bg-secondary);border-radius:var(--r-md);">
                  <div style="width:40px;height:40px;border-radius:var(--r-sm);background:var(--primary-50);color:var(--primary);display:flex;align-items:center;justify-content:center;font-size:18px;"><i class="ri-file-text-line"></i></div>
                  <div style="flex:1;">
                    <div style="font-size:13px;font-weight:600;color:var(--text-primary);">DBMS Unit 4 Summary</div>
                    <div style="font-size:12px;color:var(--text-tertiary);">Generated 2 hours ago</div>
                  </div>
                  <span class="badge badge-success">Completed</span>
                </div>
                <div style="display:flex;align-items:center;gap:14px;padding:12px;background:var(--bg-secondary);border-radius:var(--r-md);">
                  <div style="width:40px;height:40px;border-radius:var(--r-sm);background:#F5F3FF;color:var(--secondary);display:flex;align-items:center;justify-content:center;font-size:18px;"><i class="ri-file-text-line"></i></div>
                  <div style="flex:1;">
                    <div style="font-size:13px;font-weight:600;color:var(--text-primary);">Data Structures — Trees</div>
                    <div style="font-size:12px;color:var(--text-tertiary);">Generated yesterday</div>
                  </div>
                  <span class="badge badge-success">Completed</span>
                </div>
                <div style="display:flex;align-items:center;gap:14px;padding:12px;background:var(--bg-secondary);border-radius:var(--r-md);">
                  <div style="width:40px;height:40px;border-radius:var(--r-sm);background:#ECFEFF;color:var(--accent);display:flex;align-items:center;justify-content:center;font-size:18px;"><i class="ri-file-text-line"></i></div>
                  <div style="flex:1;">
                    <div style="font-size:13px;font-weight:600;color:var(--text-primary);">CN — OSI Model Notes</div>
                    <div style="font-size:12px;color:var(--text-tertiary);">Generated 3 days ago</div>
                  </div>
                  <span class="badge badge-success">Completed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div>
          <!-- Upcoming Assignments -->
          <div class="widget" style="margin-bottom:24px;">
            <div class="widget-header">
              <div class="widget-title"><i class="ri-calendar-todo-line"></i> Upcoming Assignments</div>
              <a class="btn btn-sm btn-ghost" href="#assignments">View All</a>
            </div>
            <div class="widget-body">
              ${assignments.filter(a => a.status !== 'done').map(a => `
                <div class="assignment-item">
                  <div class="assignment-dot ${a.priority}"></div>
                  <div class="assignment-info">
                    <div class="assignment-name">${a.title}</div>
                    <div class="assignment-due">${a.subject} • Due ${a.due}</div>
                  </div>
                  <span class="badge badge-${a.priority === 'high' ? 'danger' : a.priority === 'medium' ? 'warning' : 'success'}">${a.priority}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Attendance Summary -->
          <div class="widget">
            <div class="widget-header">
              <div class="widget-title"><i class="ri-donut-chart-line"></i> Attendance Summary</div>
              <a class="btn btn-sm btn-ghost" href="#attendance">Details</a>
            </div>
            <div class="widget-body">
              <div class="chart-container" style="height:220px;">
                <canvas id="attendanceDonut"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  renderAppShell('dashboard', content);

  // Initialize Charts
  setTimeout(() => {
    initWeeklyChart();
    initAttendanceDonut();
  }, 100);
}

function initWeeklyChart() {
  const ctx = document.getElementById('weeklyChart');
  if (!ctx) return;
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: weeklyProgress.map(d => d.day),
      datasets: [{
        label: 'Tasks Completed',
        data: weeklyProgress.map(d => d.tasks),
        backgroundColor: 'rgba(99, 102, 241, 0.8)',
        borderRadius: 8,
        borderSkipped: false,
        barThickness: 28,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#1E293B',
          titleFont: { family: 'Inter', size: 12 },
          bodyFont: { family: 'Inter', size: 12 },
          cornerRadius: 8,
          padding: 12,
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { font: { family: 'Inter', size: 12, weight: 500 }, color: '#94A3B8' }
        },
        y: {
          grid: { color: '#F1F5F9' },
          ticks: { font: { family: 'Inter', size: 12 }, color: '#94A3B8', stepSize: 2 },
          border: { display: false }
        }
      }
    }
  });
}

function initAttendanceDonut() {
  const ctx = document.getElementById('attendanceDonut');
  if (!ctx) return;
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: subjects.map(s => s.name),
      datasets: [{
        data: subjects.map(s => s.attendance),
        backgroundColor: subjects.map(s => s.color),
        borderWidth: 0,
        spacing: 3,
        borderRadius: 4,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '65%',
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            font: { family: 'Inter', size: 11, weight: 500 },
            color: '#64748B',
            padding: 12,
            usePointStyle: true,
            pointStyleWidth: 8,
          }
        },
        tooltip: {
          backgroundColor: '#1E293B',
          titleFont: { family: 'Inter', size: 12 },
          bodyFont: { family: 'Inter', size: 12 },
          cornerRadius: 8,
          padding: 12,
          callbacks: {
            label: function(context) {
              return context.label + ': ' + context.parsed + '%';
            }
          }
        }
      }
    }
  });
}


// ============ ASSIGNMENTS PAGE ============

function renderAssignments() {
  const todoItems = assignments.filter(a => a.status === 'todo');
  const progressItems = assignments.filter(a => a.status === 'progress');
  const doneItems = assignments.filter(a => a.status === 'done');

  // Generate calendar days for June 2026
  const calendarDays = generateCalendarDays(2026, 5); // June = month index 5

  const content = `
    <div class="page-header">
      <div class="page-header-top">
        <div>
          <h1 class="page-title">Smart Assignment Tracker</h1>
          <p class="page-subtitle">Manage your assignments with AI-powered prioritization</p>
        </div>
        <div class="page-actions">
          <button class="btn btn-primary btn-sm"><i class="ri-add-line"></i> New Assignment</button>
        </div>
      </div>
    </div>

    <div class="page-body page-enter">
      <!-- Toolbar -->
      <div class="assignments-toolbar">
        <div class="tabs" id="assignment-view-tabs">
          <div class="tab active" onclick="showAssignmentView('kanban')">Kanban</div>
          <div class="tab" onclick="showAssignmentView('calendar')">Calendar</div>
        </div>
        <div style="display:flex;gap:10px;align-items:center;">
          <div class="search-input-wrapper">
            <i class="ri-search-line"></i>
            <input type="text" class="input" placeholder="Search assignments..." style="width: 220px;">
          </div>
          <button class="btn btn-secondary btn-sm"><i class="ri-filter-3-line"></i> Filter</button>
        </div>
      </div>

      <!-- Kanban View -->
      <div id="kanban-view">
        <div class="kanban-board">
          <!-- To Do Column -->
          <div class="kanban-column">
            <div class="kanban-column-header todo">
              <div class="kanban-column-title">
                <i class="ri-circle-line" style="color:var(--primary);"></i>
                To Do
              </div>
              <div class="kanban-count">${todoItems.length}</div>
            </div>
            ${todoItems.map(a => renderKanbanCard(a)).join('')}
          </div>

          <!-- In Progress Column -->
          <div class="kanban-column">
            <div class="kanban-column-header progress">
              <div class="kanban-column-title">
                <i class="ri-loader-4-line" style="color:var(--warning);"></i>
                In Progress
              </div>
              <div class="kanban-count">${progressItems.length}</div>
            </div>
            ${progressItems.map(a => renderKanbanCard(a)).join('')}
          </div>

          <!-- Done Column -->
          <div class="kanban-column">
            <div class="kanban-column-header done">
              <div class="kanban-column-title">
                <i class="ri-checkbox-circle-line" style="color:var(--success);"></i>
                Completed
              </div>
              <div class="kanban-count">${doneItems.length}</div>
            </div>
            ${doneItems.map(a => renderKanbanCard(a)).join('')}
          </div>
        </div>
      </div>

      <!-- Calendar View -->
      <div id="calendar-view" style="display:none;">
        <div class="calendar-view">
          <div class="calendar-header-bar">
            <div class="calendar-month">June 2026</div>
            <div class="calendar-nav-btns">
              <button class="btn btn-icon btn-secondary sm"><i class="ri-arrow-left-s-line"></i></button>
              <button class="btn btn-icon btn-secondary sm"><i class="ri-arrow-right-s-line"></i></button>
            </div>
          </div>
          <div class="calendar-grid">
            <div class="calendar-day-name">Sun</div>
            <div class="calendar-day-name">Mon</div>
            <div class="calendar-day-name">Tue</div>
            <div class="calendar-day-name">Wed</div>
            <div class="calendar-day-name">Thu</div>
            <div class="calendar-day-name">Fri</div>
            <div class="calendar-day-name">Sat</div>
            ${calendarDays}
          </div>
        </div>

        <!-- Assignment List below calendar -->
        <div style="margin-top:24px;">
          <div class="widget">
            <div class="widget-header">
              <div class="widget-title"><i class="ri-list-check-2"></i> All Assignments</div>
            </div>
            <div class="widget-body">
              ${assignments.map(a => `
                <div class="assignment-item">
                  <div class="assignment-dot ${a.priority}"></div>
                  <div class="assignment-info">
                    <div class="assignment-name">${a.title}</div>
                    <div class="assignment-due">${a.subject} • Due ${a.due}</div>
                  </div>
                  <div style="width:120px;margin-right:16px;">
                    <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
                      <span style="font-size:11px;color:var(--text-tertiary);">Progress</span>
                      <span style="font-size:11px;font-weight:600;color:var(--text-primary);">${a.progress}%</span>
                    </div>
                    <div class="progress-bar-wrapper">
                      <div class="progress-bar" style="width:${a.progress}%;"></div>
                    </div>
                  </div>
                  <span class="badge badge-${a.priority === 'high' ? 'danger' : a.priority === 'medium' ? 'warning' : 'success'}">${a.priority}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  renderAppShell('assignments', content);
}

function renderKanbanCard(a) {
  return `
    <div class="kanban-card">
      <div style="display:flex;justify-content:space-between;align-items:start;">
        <span class="badge badge-${a.priority === 'high' ? 'danger' : a.priority === 'medium' ? 'warning' : 'success'}" style="font-size:11px;">${a.priority === 'high' ? '🔴 High' : a.priority === 'medium' ? '🟡 Medium' : '🟢 Low'}</span>
        <button class="btn btn-ghost btn-icon sm"><i class="ri-more-2-fill"></i></button>
      </div>
      <div class="kanban-card-title" style="margin-top:8px;">${a.title}</div>
      <div style="font-size:12px;color:var(--text-tertiary);margin-bottom:10px;">${a.subject}</div>
      <div style="margin-bottom:4px;display:flex;justify-content:space-between;">
        <span style="font-size:11px;color:var(--text-tertiary);">Progress</span>
        <span style="font-size:11px;font-weight:600;color:var(--text-primary);">${a.progress}%</span>
      </div>
      <div class="progress-bar-wrapper">
        <div class="progress-bar" style="width:${a.progress}%;${a.status === 'done' ? 'background:linear-gradient(90deg,#10B981,#34D399);' : ''}"></div>
      </div>
      <div class="kanban-card-meta">
        <div class="kanban-card-date"><i class="ri-calendar-line"></i> ${a.due}</div>
      </div>
    </div>
  `;
}

function generateCalendarDays(year, month) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = 14; // June 14

  // Assignment due dates
  const eventDays = [12, 16, 18, 20, 22];

  let html = '';

  // Previous month padding
  const prevMonthDays = new Date(year, month, 0).getDate();
  for (let i = firstDay - 1; i >= 0; i--) {
    html += `<div class="calendar-day other-month">${prevMonthDays - i}</div>`;
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const isToday = day === today;
    const hasEvent = eventDays.includes(day);
    html += `<div class="calendar-day ${isToday ? 'today' : ''} ${hasEvent ? 'has-event' : ''}">${day}</div>`;
  }

  // Next month padding
  const totalCells = firstDay + daysInMonth;
  const remaining = 7 - (totalCells % 7);
  if (remaining < 7) {
    for (let i = 1; i <= remaining; i++) {
      html += `<div class="calendar-day other-month">${i}</div>`;
    }
  }

  return html;
}

// Toggle assignment views
window.showAssignmentView = function(view) {
  const kanban = document.getElementById('kanban-view');
  const calendar = document.getElementById('calendar-view');
  const tabs = document.querySelectorAll('#assignment-view-tabs .tab');

  if (view === 'kanban') {
    kanban.style.display = 'block';
    calendar.style.display = 'none';
    tabs[0].classList.add('active');
    tabs[1].classList.remove('active');
  } else {
    kanban.style.display = 'none';
    calendar.style.display = 'block';
    tabs[0].classList.remove('active');
    tabs[1].classList.add('active');
  }
};


// ============ ATTENDANCE PAGE ============

function renderAttendance() {
  const content = `
    <div class="page-header">
      <div class="page-header-top">
        <div>
          <h1 class="page-title">Attendance Monitor</h1>
          <p class="page-subtitle">Track your attendance across all subjects</p>
        </div>
        <div class="page-actions">
          <button class="btn btn-secondary btn-sm"><i class="ri-download-2-line"></i> Export Report</button>
        </div>
      </div>
    </div>

    <div class="page-body page-enter">
      <!-- Alert Card -->
      <div class="alert-card" style="margin-bottom:24px;">
        <div class="alert-icon">⚠️</div>
        <div class="alert-content">
          <h4>Attendance Alert — Computer Networks</h4>
          <p>Attend <strong>3 more Computer Networks classes</strong> to reach the minimum 75% attendance requirement.</p>
        </div>
        <button class="btn btn-sm btn-secondary" style="margin-left:auto;">View Details</button>
      </div>

      <!-- Subject Cards -->
      <div class="attendance-grid">
        ${subjects.map(s => `
          <div class="attendance-subject-card ${s.warning ? 'warning' : ''}">
            <div class="circle-progress">
              <svg width="80" height="80">
                <circle class="track" cx="40" cy="40" r="34"></circle>
                <circle class="fill" cx="40" cy="40" r="34"
                  stroke="${s.color}"
                  stroke-dasharray="${2 * Math.PI * 34}"
                  stroke-dashoffset="${2 * Math.PI * 34 * (1 - s.attendance / 100)}"
                ></circle>
              </svg>
              <div class="value">${s.attendance}<small>%</small></div>
            </div>
            <div class="subject-details">
              <div class="subject-name">
                ${s.name}
                ${s.warning ? '<span class="badge badge-danger" style="margin-left:8px;">Low</span>' : s.attendance >= 85 ? '<span class="badge badge-success" style="margin-left:8px;">Good</span>' : '<span class="badge badge-warning" style="margin-left:8px;">Average</span>'}
              </div>
              <div class="subject-classes">${s.code} • ${s.attended}/${s.total} classes attended</div>
              <div class="progress-bar-wrapper" style="height:6px;">
                <div class="progress-bar" style="width:${s.attendance}%;background:${s.attendance >= 75 ? `linear-gradient(90deg, ${s.color}, ${s.color}88)` : 'linear-gradient(90deg, #EF4444, #FCA5A5)'};"></div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Analytics Row -->
      <div style="display:grid;grid-template-columns:1.3fr 1fr;gap:24px;">
        <!-- Attendance Trend Chart -->
        <div class="widget">
          <div class="widget-header">
            <div class="widget-title"><i class="ri-line-chart-line"></i> Attendance Trend</div>
            <div class="tabs">
              <div class="tab active">Monthly</div>
              <div class="tab">Weekly</div>
            </div>
          </div>
          <div class="widget-body">
            <div class="chart-container">
              <canvas id="attendanceTrendChart"></canvas>
            </div>
          </div>
        </div>

        <!-- Insights Card -->
        <div class="widget">
          <div class="widget-header">
            <div class="widget-title"><i class="ri-lightbulb-line"></i> Attendance Insights</div>
          </div>
          <div class="widget-body">
            <div style="display:flex;flex-direction:column;gap:14px;">
              <div style="display:flex;align-items:center;gap:12px;padding:14px;background:var(--success-light);border-radius:var(--r-md);">
                <i class="ri-award-line" style="font-size:22px;color:var(--success);"></i>
                <div>
                  <div style="font-size:13px;font-weight:600;color:var(--text-primary);">Best Subject</div>
                  <div style="font-size:12px;color:var(--text-secondary);">Mathematics — 92% attendance</div>
                </div>
              </div>
              <div style="display:flex;align-items:center;gap:12px;padding:14px;background:var(--danger-light);border-radius:var(--r-md);">
                <i class="ri-alert-line" style="font-size:22px;color:var(--danger);"></i>
                <div>
                  <div style="font-size:13px;font-weight:600;color:var(--text-primary);">Needs Attention</div>
                  <div style="font-size:12px;color:var(--text-secondary);">Computer Networks — 71% (below 75%)</div>
                </div>
              </div>
              <div style="display:flex;align-items:center;gap:12px;padding:14px;background:var(--primary-50);border-radius:var(--r-md);">
                <i class="ri-bar-chart-box-line" style="font-size:22px;color:var(--primary);"></i>
                <div>
                  <div style="font-size:13px;font-weight:600;color:var(--text-primary);">Overall Average</div>
                  <div style="font-size:12px;color:var(--text-secondary);">82% — Good standing</div>
                </div>
              </div>
              <div style="display:flex;align-items:center;gap:12px;padding:14px;background:var(--warning-light);border-radius:var(--r-md);">
                <i class="ri-calendar-check-line" style="font-size:22px;color:var(--warning);"></i>
                <div>
                  <div style="font-size:13px;font-weight:600;color:var(--text-primary);">This Week</div>
                  <div style="font-size:12px;color:var(--text-secondary);">Attended 14 out of 16 classes</div>
                </div>
              </div>
              <div style="display:flex;align-items:center;gap:12px;padding:14px;background:#F5F3FF;border-radius:var(--r-md);">
                <i class="ri-trophy-line" style="font-size:22px;color:var(--secondary);"></i>
                <div>
                  <div style="font-size:13px;font-weight:600;color:var(--text-primary);">Streak</div>
                  <div style="font-size:12px;color:var(--text-secondary);">12 days full attendance streak 🔥</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  renderAppShell('attendance', content);

  setTimeout(initAttendanceTrend, 100);
}

function initAttendanceTrend() {
  const ctx = document.getElementById('attendanceTrendChart');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Data Structures',
          data: [82, 85, 84, 87, 86, 88],
          borderColor: '#6366F1',
          backgroundColor: 'rgba(99,102,241,0.08)',
          fill: true,
          tension: 0.4,
          borderWidth: 2.5,
          pointRadius: 4,
          pointBackgroundColor: '#6366F1',
        },
        {
          label: 'Computer Networks',
          data: [78, 75, 73, 72, 70, 71],
          borderColor: '#EF4444',
          backgroundColor: 'rgba(239,68,68,0.06)',
          fill: true,
          tension: 0.4,
          borderWidth: 2.5,
          pointRadius: 4,
          pointBackgroundColor: '#EF4444',
        },
        {
          label: 'Mathematics',
          data: [88, 90, 89, 91, 93, 92],
          borderColor: '#10B981',
          backgroundColor: 'rgba(16,185,129,0.06)',
          fill: true,
          tension: 0.4,
          borderWidth: 2.5,
          pointRadius: 4,
          pointBackgroundColor: '#10B981',
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            font: { family: 'Inter', size: 11, weight: 500 },
            color: '#64748B',
            padding: 16,
            usePointStyle: true,
            pointStyleWidth: 8,
          }
        },
        tooltip: {
          backgroundColor: '#1E293B',
          titleFont: { family: 'Inter', size: 12 },
          bodyFont: { family: 'Inter', size: 12 },
          cornerRadius: 8,
          padding: 12,
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { font: { family: 'Inter', size: 12 }, color: '#94A3B8' }
        },
        y: {
          min: 60,
          max: 100,
          grid: { color: '#F1F5F9' },
          ticks: {
            font: { family: 'Inter', size: 12 },
            color: '#94A3B8',
            callback: v => v + '%'
          },
          border: { display: false }
        }
      },
      interaction: {
        intersect: false,
        mode: 'index',
      }
    }
  });
}


// ============ AI REVISION PAGE ============

function renderRevision() {
  const content = `
    <div class="page-header">
      <div class="page-header-top">
        <div>
          <h1 class="page-title">AI Quick Revision Generator</h1>
          <p class="page-subtitle">Upload your notes and get AI-powered study material instantly</p>
        </div>
        <div class="page-actions">
          <button class="btn btn-secondary btn-sm"><i class="ri-history-line"></i> History</button>
        </div>
      </div>
    </div>

    <div class="page-body page-enter">
      <div class="revision-layout">
        <!-- Left: Upload Panel -->
        <div>
          <div class="widget">
            <div class="widget-header">
              <div class="widget-title"><i class="ri-upload-cloud-2-line"></i> Upload Notes</div>
            </div>
            <div class="widget-body">
              <div class="upload-zone" id="upload-zone">
                <div class="upload-icon"><i class="ri-file-upload-line"></i></div>
                <div class="upload-title">Drop your notes here</div>
                <div class="upload-desc">Supports PDF, DOCX, TXT (max 25MB)</div>
              </div>

              <!-- Uploaded File -->
              <div class="uploaded-file">
                <div class="file-icon"><i class="ri-file-pdf-2-line"></i></div>
                <div style="flex:1;">
                  <div class="file-name">DBMS Unit 4 Notes.pdf</div>
                  <div class="file-size">2.4 MB • Uploaded just now</div>
                </div>
                <span class="badge badge-success"><i class="ri-check-line"></i> Uploaded</span>
              </div>
            </div>
          </div>

          <!-- Generation Settings -->
          <div class="widget" style="margin-top:20px;">
            <div class="widget-header">
              <div class="widget-title"><i class="ri-settings-4-line"></i> Generation Settings</div>
            </div>
            <div class="widget-body">
              <div style="display:flex;flex-direction:column;gap:16px;">
                <div class="input-group">
                  <label>Summary Length</label>
                  <div class="tabs" style="width:100%;">
                    <div class="tab">Brief</div>
                    <div class="tab active">Standard</div>
                    <div class="tab">Detailed</div>
                  </div>
                </div>
                <div class="input-group">
                  <label>Output Format</label>
                  <div class="tabs" style="width:100%;">
                    <div class="tab active">Cards</div>
                    <div class="tab">List</div>
                    <div class="tab">Flashcards</div>
                  </div>
                </div>
                <button class="btn btn-primary" style="width:100%;margin-top:4px;">
                  <i class="ri-sparkling-2-line"></i>
                  Generate Revision Sheet
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: AI Generated Output -->
        <div class="ai-output-section">
          <!-- Status indicator -->
          <div style="display:flex;align-items:center;gap:10px;padding:14px 20px;background:var(--success-light);border-radius:var(--r-lg);border:1px solid rgba(16,185,129,0.2);">
            <i class="ri-checkbox-circle-fill" style="color:var(--success);font-size:20px;"></i>
            <div>
              <span style="font-size:13px;font-weight:600;color:var(--success);">AI Generation Complete</span>
              <span style="font-size:12px;color:var(--text-tertiary);margin-left:8px;">Generated in 4.2 seconds</span>
            </div>
          </div>

          <!-- Summary Card -->
          <div class="ai-card">
            <div class="ai-card-header">
              <i class="ri-file-text-line"></i>
              <h3>AI-Generated Summary</h3>
              <span class="badge badge-purple" style="margin-left:auto;">150 words</span>
            </div>
            <div class="ai-card-body">
              <p class="ai-summary-text">
                Unit 4 covers the critical concepts of Database Management Systems including <strong>normalization</strong>, which reduces data redundancy through 1NF, 2NF, 3NF, and BCNF forms. <strong>Transaction management</strong> ensures database consistency using ACID properties — Atomicity, Consistency, Isolation, and Durability. The unit also explores <strong>indexing</strong> techniques including clustered and non-clustered indexes that optimize query performance. <strong>Concurrency control</strong> mechanisms like lock-based and timestamp-based protocols prevent conflicts in multi-user environments. Key formulas include closure of functional dependencies and canonical covers for determining minimal sets of FDs. Understanding these concepts is essential for designing efficient, reliable database systems.
              </p>
            </div>
          </div>

          <!-- Key Topics -->
          <div class="ai-card">
            <div class="ai-card-header">
              <i class="ri-bookmark-3-line"></i>
              <h3>Key Topics Identified</h3>
              <span class="badge badge-info" style="margin-left:auto;">4 topics</span>
            </div>
            <div class="ai-card-body">
              <div class="key-topics-grid">
                <div class="topic-chip"><i class="ri-database-2-line"></i> Normalization (1NF–BCNF)</div>
                <div class="topic-chip"><i class="ri-exchange-line"></i> Transactions & ACID</div>
                <div class="topic-chip"><i class="ri-list-ordered-2"></i> Indexing Techniques</div>
                <div class="topic-chip"><i class="ri-lock-2-line"></i> Concurrency Control</div>
              </div>
            </div>
          </div>

          <!-- Important Questions -->
          <div class="ai-card">
            <div class="ai-card-header">
              <i class="ri-question-line"></i>
              <h3>Important Questions</h3>
              <span class="badge badge-warning" style="margin-left:auto;">Predicted</span>
            </div>
            <div class="ai-card-body">
              <div class="question-item">
                <div class="question-number">1</div>
                <div class="question-text">Explain Third Normal Form (3NF) with a suitable example. How does it differ from BCNF?</div>
              </div>
              <div class="question-item">
                <div class="question-number">2</div>
                <div class="question-text">What are ACID properties in transaction management? Explain each property with real-world analogies.</div>
              </div>
              <div class="question-item">
                <div class="question-number">3</div>
                <div class="question-text">Differentiate between clustered and non-clustered indexing. When would you prefer one over the other?</div>
              </div>
              <div class="question-item">
                <div class="question-number">4</div>
                <div class="question-text">Discuss lock-based concurrency control protocols. Explain Two-Phase Locking with its advantages and limitations.</div>
              </div>
              <div class="question-item">
                <div class="question-number">5</div>
                <div class="question-text">What is a canonical cover? How do you compute the minimal set of functional dependencies?</div>
              </div>
            </div>
          </div>

          <!-- Download Button -->
          <div style="display:flex;gap:12px;">
            <button class="btn btn-primary" style="flex:1;"><i class="ri-download-2-line"></i> Download Revision Sheet (PDF)</button>
            <button class="btn btn-secondary"><i class="ri-share-line"></i> Share</button>
            <button class="btn btn-secondary"><i class="ri-printer-line"></i> Print</button>
          </div>
        </div>
      </div>
    </div>
  `;

  renderAppShell('revision', content);
}


// ============ PROFILE PAGE ============

function renderProfile() {
  const content = `
    <div class="page-header">
      <div class="page-header-top">
        <div>
          <h1 class="page-title">Profile</h1>
          <p class="page-subtitle">Manage your account and preferences</p>
        </div>
        <div class="page-actions">
          <button class="btn btn-primary btn-sm"><i class="ri-edit-line"></i> Edit Profile</button>
        </div>
      </div>
    </div>

    <div class="page-body page-enter">
      <div class="profile-layout">
        <!-- Left: Profile Card -->
        <div>
          <div class="profile-card-main">
            <div class="profile-cover"></div>
            <div class="profile-avatar-large">${studentData.initials}</div>
            <div style="padding:0 24px;">
              <div class="profile-name">${studentData.name}</div>
              <div class="profile-role">${studentData.role}</div>
              <div class="profile-university">${studentData.university}</div>
            </div>
            <div class="profile-stats-row">
              <div class="profile-stat">
                <div class="profile-stat-value">${studentData.cgpa}</div>
                <div class="profile-stat-label">CGPA</div>
              </div>
              <div class="profile-stat">
                <div class="profile-stat-value">${studentData.attendance}%</div>
                <div class="profile-stat-label">Attendance</div>
              </div>
              <div class="profile-stat">
                <div class="profile-stat-value">${studentData.revisionSheets}</div>
                <div class="profile-stat-label">Revisions</div>
              </div>
            </div>
          </div>

          <!-- Quick Info -->
          <div class="widget" style="margin-top:20px;">
            <div class="widget-header">
              <div class="widget-title"><i class="ri-information-line"></i> Quick Info</div>
            </div>
            <div class="widget-body">
              <div style="display:flex;flex-direction:column;gap:12px;">
                <div style="display:flex;justify-content:space-between;align-items:center;">
                  <span style="font-size:13px;color:var(--text-tertiary);">Semester</span>
                  <span style="font-size:13px;font-weight:600;color:var(--text-primary);">6th Semester</span>
                </div>
                <div style="display:flex;justify-content:space-between;align-items:center;">
                  <span style="font-size:13px;color:var(--text-tertiary);">Enrollment</span>
                  <span style="font-size:13px;font-weight:600;color:var(--text-primary);">NCU/BCA/2023/0142</span>
                </div>
                <div style="display:flex;justify-content:space-between;align-items:center;">
                  <span style="font-size:13px;color:var(--text-tertiary);">Joined</span>
                  <span style="font-size:13px;font-weight:600;color:var(--text-primary);">August 2023</span>
                </div>
                <div style="display:flex;justify-content:space-between;align-items:center;">
                  <span style="font-size:13px;color:var(--text-tertiary);">Batch</span>
                  <span style="font-size:13px;font-weight:600;color:var(--text-primary);">2023–2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Details -->
        <div class="profile-details-col">
          <!-- Academic Achievements -->
          <div class="widget">
            <div class="widget-header">
              <div class="widget-title"><i class="ri-trophy-line"></i> Academic Achievements</div>
            </div>
            <div class="achievements-grid">
              <div class="achievement-item">
                <div class="achievement-icon">🏆</div>
                <div>
                  <div class="achievement-label">Dean's List</div>
                  <div class="achievement-desc">3 consecutive semesters</div>
                </div>
              </div>
              <div class="achievement-item">
                <div class="achievement-icon">⭐</div>
                <div>
                  <div class="achievement-label">Top Performer</div>
                  <div class="achievement-desc">CGPA above 9.5</div>
                </div>
              </div>
              <div class="achievement-item">
                <div class="achievement-icon">🔥</div>
                <div>
                  <div class="achievement-label">Streak Master</div>
                  <div class="achievement-desc">30-day study streak</div>
                </div>
              </div>
              <div class="achievement-item">
                <div class="achievement-icon">📚</div>
                <div>
                  <div class="achievement-label">AI Scholar</div>
                  <div class="achievement-desc">23+ revision sheets</div>
                </div>
              </div>
              <div class="achievement-item">
                <div class="achievement-icon">💻</div>
                <div>
                  <div class="achievement-label">Code Champion</div>
                  <div class="achievement-desc">Won inter-college hackathon</div>
                </div>
              </div>
              <div class="achievement-item">
                <div class="achievement-icon">📊</div>
                <div>
                  <div class="achievement-label">Consistent Achiever</div>
                  <div class="achievement-desc">82%+ attendance record</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Profile Statistics -->
          <div class="widget">
            <div class="widget-header">
              <div class="widget-title"><i class="ri-bar-chart-2-line"></i> Profile Statistics</div>
            </div>
            <div class="widget-body">
              <div class="chart-container" style="height:220px;">
                <canvas id="profileStatsChart"></canvas>
              </div>
            </div>
          </div>

          <!-- Notification Settings -->
          <div class="widget">
            <div class="widget-header">
              <div class="widget-title"><i class="ri-notification-3-line"></i> Notification Settings</div>
            </div>
            <div class="settings-group">
              <div class="setting-item">
                <div class="setting-info">
                  <div class="setting-icon blue"><i class="ri-calendar-line"></i></div>
                  <div>
                    <div class="setting-label">Assignment Reminders</div>
                    <div class="setting-desc">Get notified before deadlines</div>
                  </div>
                </div>
                <div class="toggle active" onclick="this.classList.toggle('active')"></div>
              </div>
              <div class="setting-item">
                <div class="setting-info">
                  <div class="setting-icon purple"><i class="ri-pie-chart-line"></i></div>
                  <div>
                    <div class="setting-label">Attendance Alerts</div>
                    <div class="setting-desc">Alerts when below 75%</div>
                  </div>
                </div>
                <div class="toggle active" onclick="this.classList.toggle('active')"></div>
              </div>
              <div class="setting-item">
                <div class="setting-info">
                  <div class="setting-icon green"><i class="ri-robot-line"></i></div>
                  <div>
                    <div class="setting-label">AI Revision Updates</div>
                    <div class="setting-desc">Notify when sheets are ready</div>
                  </div>
                </div>
                <div class="toggle active" onclick="this.classList.toggle('active')"></div>
              </div>
              <div class="setting-item">
                <div class="setting-info">
                  <div class="setting-icon orange"><i class="ri-mail-line"></i></div>
                  <div>
                    <div class="setting-label">Email Notifications</div>
                    <div class="setting-desc">Weekly progress digest</div>
                  </div>
                </div>
                <div class="toggle" onclick="this.classList.toggle('active')"></div>
              </div>
            </div>
          </div>

          <!-- Theme Settings -->
          <div class="widget">
            <div class="widget-header">
              <div class="widget-title"><i class="ri-palette-line"></i> Theme Settings</div>
            </div>
            <div class="widget-body">
              <div style="display:flex;gap:12px;">
                <div style="flex:1;padding:16px;background:var(--bg-secondary);border-radius:var(--r-lg);border:2px solid var(--primary);cursor:pointer;text-align:center;">
                  <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#F8FAFC,#E2E8F0);margin:0 auto 8px;border:2px solid var(--border);"></div>
                  <div style="font-size:12px;font-weight:600;color:var(--text-primary);">Light</div>
                  <div style="font-size:10px;color:var(--primary);margin-top:2px;">Active</div>
                </div>
                <div style="flex:1;padding:16px;background:var(--bg-secondary);border-radius:var(--r-lg);border:2px solid transparent;cursor:pointer;text-align:center;opacity:0.7;">
                  <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#1E293B,#0F172A);margin:0 auto 8px;border:2px solid var(--border);"></div>
                  <div style="font-size:12px;font-weight:600;color:var(--text-primary);">Dark</div>
                </div>
                <div style="flex:1;padding:16px;background:var(--bg-secondary);border-radius:var(--r-lg);border:2px solid transparent;cursor:pointer;text-align:center;opacity:0.7;">
                  <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#F8FAFC,#1E293B);margin:0 auto 8px;border:2px solid var(--border);"></div>
                  <div style="font-size:12px;font-weight:600;color:var(--text-primary);">System</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  renderAppShell('profile', content);

  setTimeout(initProfileChart, 100);
}

function initProfileChart() {
  const ctx = document.getElementById('profileStatsChart');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Assignments', 'Attendance', 'Revision', 'Productivity', 'Consistency', 'Engagement'],
      datasets: [{
        label: 'Your Performance',
        data: [85, 82, 90, 91, 78, 88],
        backgroundColor: 'rgba(99, 102, 241, 0.15)',
        borderColor: '#6366F1',
        borderWidth: 2.5,
        pointBackgroundColor: '#6366F1',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 5,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#1E293B',
          titleFont: { family: 'Inter', size: 12 },
          bodyFont: { family: 'Inter', size: 12 },
          cornerRadius: 8,
          padding: 12,
          callbacks: {
            label: function(context) {
              return context.label + ': ' + context.parsed.r + '%';
            }
          }
        }
      },
      scales: {
        r: {
          grid: { color: '#E2E8F0' },
          angleLines: { color: '#E2E8F0' },
          pointLabels: {
            font: { family: 'Inter', size: 11, weight: 500 },
            color: '#64748B',
          },
          ticks: {
            display: false,
            stepSize: 20,
          },
          suggestedMin: 0,
          suggestedMax: 100,
        }
      }
    }
  });
}
