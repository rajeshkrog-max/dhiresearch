import FormWizard from './components/FormWizard'
import './styles/dhi.css'

function App() {
  return (
    <div>
      {/* ===== TEAL HEADER ===== */}
      <section id="top-area">
        <h1>DhiRise Research Study</h1>
        <p>A 1-Month Research Study on Student Focus, Peer Support & Wellbeing</p>
      </section>

      {/* ===== THE FORM ===== */}
      <FormWizard />

      {/* ===== WHY THIS RESEARCH MATTERS ===== */}
      <section className="trust-area">
        <h2>Why This Research Matters</h2>
        <p>
          We are studying how structured peer support can improve academic confidence
          and mental wellbeing in students aged 13–19.
        </p>

        <div className="trust-grid">
          <div className="trust-box">
            <h4>Guided by Experts</h4>
            <p>
              Conducted under the guidance of a PhD-qualified counselor and affiliated
              with the American School Counselor Association (ASCA).
            </p>
          </div>

          <div className="trust-box">
            <h4>Limited to 20 Students</h4>
            <p>
              Only 20 carefully selected students will be chosen so that every participant
              receives proper attention and support.
            </p>
          </div>

          <div className="trust-box">
            <h4>Academic Value</h4>
            <p>
              Participants who complete the study and contribute meaningful data will
              receive a research participation voucher.
            </p>
          </div>
        </div>
      </section>

      {/* ===== QUESTION AND ANSWER ===== */}
      <section className="qa-section">
        <h2>Question and Answer</h2>
        <p className="section-subtitle">
          Common questions students ask about this research study
        </p>

        <div className="qa-grid">
          <div className="qa-item">
            <div className="qa-icon">?</div>
            <h4>Who can apply for this research?</h4>
            <p>
              Students aged 13–19 who are currently studying and want to improve their
              focus, academic confidence, or peer learning habits can apply.
            </p>
          </div>

          <div className="qa-item">
            <div className="qa-icon">?</div>
            <h4>How many students will be selected?</h4>
            <p>
              Only 20 students will be selected for this pilot research. Selection is based
              on the application you submit.
            </p>
          </div>

          <div className="qa-item">
            <div className="qa-icon">?</div>
            <h4>Is this free to join?</h4>
            <p>
              Yes. This is a research study. There is no fee to participate. Selected
              students may also receive a research participation voucher.
            </p>
          </div>

          <div className="qa-item">
            <div className="qa-icon">?</div>
            <h4>What will I have to do if selected?</h4>
            <p>
              You will take part in short guided sessions over 4 weeks. The process is
              designed to be light and supportive, not stressful.
            </p>
          </div>

          <div className="qa-item">
            <div className="qa-icon">?</div>
            <h4>Will my information be private?</h4>
            <p>
              Yes. All information is confidential and used only for research purposes
              under professional guidance.
            </p>
          </div>

          <div className="qa-item">
            <div className="qa-icon">?</div>
            <h4>Can I leave the study if I want?</h4>
            <p>
              Yes. You can withdraw at any time. Your comfort and wellbeing come first.
            </p>
          </div>
        </div>
      </section>

      {/* ===== RESEARCH INSIGHTS ===== */}
      <section className="research-section">
        <h2>Research Insights</h2>
        <p className="section-subtitle">
          Recent reports on academic stress and student mental health in India
        </p>

        <div className="research-grid">
          {/* Card 1 */}
          <a
            href="https://www.theweek.in/news/india/2026/03/02/academic-stress-in-india-its-not-the-student-its-the-system.html"
            target="_blank"
            rel="noopener noreferrer"
            className="research-card"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <img
              src="/image1.png"
              alt="Academic Stress in India"
              className="research-image"
            />
            <h4>Academic Stress in India</h4>
            <p>It is not the student, it is the system — why academic pressure is a structural problem (The Week, 2026)</p>
          </a>

          {/* Card 2 */}
          <a
            href="https://beincareer.com/what-is-stressing-indian-students-2026/"
            target="_blank"
            rel="noopener noreferrer"
            className="research-card"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <img
              src="/image2.png"
              alt="What's Stressing Indian Students"
              className="research-image"
            />
            <h4>What's Stressing Indian Students in 2026</h4>
            <p>Exam pressure, career anxiety, family expectations and the rising mental load on students</p>
          </a>

          {/* Card 3 */}
          <a
            href="https://www.notesly.in/article/699-of-indian-students-have-high-anxiety-the-mental-health-crisis-no-ones-fixing"
            target="_blank"
            rel="noopener noreferrer"
            className="research-card"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <img
              src="/image3.png"
              alt="69.9% of Students Have High Anxiety"
              className="research-image"
            />
            <h4>69.9% of Students Have High Anxiety</h4>
            <p>The mental health crisis no one’s fixing — data from major Indian cities</p>
          </a>
        </div>
      </section>

      {/* ===== ABOUT US ===== */}
      <section className="about-section">
        <h2>About Us</h2>
        <p className="section-subtitle">
          Building safer and more supportive learning environments for students
        </p>

        <div className="about-content">
          <div className="about-text">
            <h4>Our Purpose</h4>
            <p>
              DhiRise is a research-driven initiative focused on improving academic performance
              and mental wellbeing among students in India. Through structured peer support models
              and AI-assisted insights, we aim to build scalable solutions that reduce academic stress
              and strengthen student resilience.
            </p>

            <h4>Our Approach</h4>
            <p>
              We follow an evidence-based and internationally aligned approach to student support.
              This pilot research study is designed to generate reliable data on how guided peer
              interaction can positively influence focus, confidence, and emotional wellbeing —
              forming the foundation for future technology-enabled interventions.
            </p>
          </div>

          <div className="about-people">
            {/* Card 1 - PhD Counselor */}
            <div className="person-card">
              <img src="/PHD.png" alt="PhD Qualified Counselor" className="person-photo" />
              <div className="person-info">
                <strong>PhD-Qualified Counselor</strong>
                <span>Research Guidance</span>
              </div>
            </div>

            {/* Card 2 - ASCA */}
            <div className="person-card">
              <img src="/ascs.png" alt="ASCA Affiliated" className="person-photo" />
              <div className="person-info">
                <strong>ASCA Affiliated</strong>
                <span>Professional Standards</span>
              </div>
            </div>

            {/* Card 3 - Co Founder */}
            <div className="person-card">
              <img src="/cofounder.png" alt="Co Founder Shubham Raj" className="person-photo" />
              <div className="person-info">
                <strong>Shubham Raj</strong>
                <span>Co Founder</span>
              </div>
            </div>

            {/* Card 4 - Lead Counselor */}
            <div className="person-card">
              <img src="/HEAD.jpeg" alt="Lead Counselor Rajesh Das" className="person-photo" />
              <div className="person-info">
                <strong>Rajesh Das</strong>
                <span>Lead Counselor</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="dhi-footer">
        <div className="footer-content">
          <div className="footer-about">
            <h4>About DhiRise</h4>
            <p>
              DhiRise is building AI-driven solutions to enhance mental wellness and academic
              outcomes for students across India. Our work combines research, technology, and
              practical support systems to create healthier learning environments.
            </p>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <p>For research-related queries or collaboration, please reach out to us.</p>
            <p style={{ marginTop: '10px' }}>
              Email: admin@dhirise.com
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 DhiRise Research Study. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App