// ==========================================================================
// Terracotta Interactive Logic: IMCA Exit Guide
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initReadingProgressBar();
  initEligibilityChecker();
  initCopyApplication();
  initFaqAccordion();
  initChecklistTracker();
  initShareAndPrint();
});

/* --------------------------------------------------------------------------
   1. Reading Progress Bar
   -------------------------------------------------------------------------- */
function initReadingProgressBar() {
  const progressBar = document.getElementById('readingProgress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const scrollPercent = (window.scrollY / totalHeight) * 100;
      progressBar.style.width = Math.min(100, Math.max(0, scrollPercent)) + '%';
    }
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   2. Interactive Exit Eligibility Checker
   -------------------------------------------------------------------------- */
function initEligibilityChecker() {
  const semSelect = document.getElementById('semSelect');
  const cgpaInput = document.getElementById('cgpaInput');
  const backlogSelect = document.getElementById('backlogSelect');
  const resultBox = document.getElementById('eligibilityResult');

  if (!semSelect || !cgpaInput || !backlogSelect || !resultBox) return;

  function updateEligibility() {
    const sem = parseInt(semSelect.value, 10);
    const cgpa = parseFloat(cgpaInput.value) || 0;
    const hasBacklog = backlogSelect.value === 'yes';

    resultBox.className = 'result-box';

    // Case 1: Backlog present
    if (hasBacklog) {
      resultBox.classList.add('result-danger');
      resultBox.innerHTML = `
        <div class="result-heading" style="color: var(--color-danger);">
          <span>❌ Exit Filhal Possible Nahi Hai (Backlog Pending)</span>
        </div>
        <p class="result-text">
          Ordinance ke rules ke mutabiq, exit lene ke liye 1st se lekar aapke exit semester tak <strong>zero backlog (sabhi subjects pass)</strong> hona anivarya hai. Pehle special exam ya supplementary dekar ATKT clear karein, tabhi aapki BCA degree process hogi.
        </p>
      `;
      return;
    }

    // Case 2: Semesters < 6
    if (sem < 6) {
      resultBox.classList.add('result-warning');
      resultBox.innerHTML = `
        <div class="result-heading" style="color: var(--color-warning);">
          <span>⚠️ 6 Semesters (3 Saal) Pura Karna Zaroori Hai</span>
        </div>
        <p class="result-text">
          Aapne abhi sirf ${sem} semesters kiye hain. Clause 5.8 ke anusar BCA degree sirf <strong>6 semesters (3rd year)</strong> successfully complete hone par hi award hoti hai. 6th semester ke exams hone tak wait karein.
        </p>
      `;
      return;
    }

    // Case 3: CGPA < 5.0
    if (cgpa < 5.0) {
      resultBox.classList.add('result-warning');
      resultBox.innerHTML = `
        <div class="result-heading" style="color: var(--color-warning);">
          <span>⚠️ Minimum 5.0 CGPA Requirement Not Met</span>
        </div>
        <p class="result-text">
          Aapka estimated CGPA <strong>${cgpa.toFixed(1)}</strong> hai, jabki Ordinance 33, Clause 5.8 strictly <strong>minimum 5.0 CGPA</strong> maangta hai. Agar result mein CGPA 5.0 se kam rehta hai, toh University degree confer nahi karegi. Marks improve karne par dhyan dein.
        </p>
      `;
      return;
    }

    // Case 4: 6 or 7 Semesters completed with CGPA >= 5.0 & No Backlog -> Eligible for BCA
    if (sem >= 6 && sem < 8) {
      resultBox.classList.add('result-success');
      resultBox.innerHTML = `
        <div class="result-heading" style="color: var(--color-success);">
          <span>✅ 100% Eligible: Aap BCA Degree Lekar Exit Kar Sakte Hain!</span>
        </div>
        <p class="result-text">
          <strong>Clause 5.8 ke tehat:</strong> Aap 6 semesters pass kar chuke hain aur aapka CGPA (${cgpa.toFixed(1)}) 5.0 se upar hai. Aapko <strong>Bachelor of Computer Applications (BCA)</strong> ki degree milegi.<br>
          <strong>Bonus Re-entry Rule (Clause 5.9):</strong> Agar future mein kabhi MCA pura karne ka mann bane, toh bina shuru se shuru kiye seedhe <strong>7th semester</strong> mein wapas admission mil jayega (MCA degree lene par BCA surrender karni hogi).
        </p>
      `;
      return;
    }

    // Case 5: 8 Semesters completed with CGPA >= 5.0 & No Backlog -> Eligible for BCA (Honours)
    if (sem >= 8 && sem < 10) {
      resultBox.classList.add('result-success');
      resultBox.innerHTML = `
        <div class="result-heading" style="color: var(--color-success);">
          <span>🎖️ 100% Eligible: Aap BCA (Honours) Degree Ke Haqdaar Hain!</span>
        </div>
        <p class="result-text">
          <strong>Clause 5.8 ke tehat:</strong> 8 semesters (4 saal) complete karne aur 5.0+ CGPA hone par aapko 4-year undergraduate <strong>BCA with Honours</strong> degree milegi.<br>
          <strong>Re-entry Rule (Clause 5.9):</strong> Future mein direct <strong>9th semester (Final 5th year)</strong> mein admission lekar 1 saal mein MCA poora kar sakte hain.
        </p>
      `;
      return;
    }

    // Case 6: 10 Semesters -> Full MCA
    if (sem >= 10) {
      resultBox.classList.add('result-success');
      resultBox.innerHTML = `
        <div class="result-heading" style="color: var(--color-primary);">
          <span>🎓 Pura 5-Year Course Complete: Final Master of Computer Applications (MCA)</span>
        </div>
        <p class="result-text">
          Agar aapne sabhi 10 semesters clear kar liye hain, toh aapko exit lene ki zaroorat nahi hai. Aapko poori <strong>MCA Master's Degree</strong> pradan ki jayegi!
        </p>
      `;
      return;
    }
  }

  semSelect.addEventListener('change', updateEligibility);
  cgpaInput.addEventListener('input', updateEligibility);
  backlogSelect.addEventListener('change', updateEligibility);

  // Initial calculation on load
  updateEligibility();
}

/* --------------------------------------------------------------------------
   3. Copy Application Template to Clipboard
   -------------------------------------------------------------------------- */
function initCopyApplication() {
  const copyBtn = document.getElementById('copyAppBtn');
  const appText = document.getElementById('applicationText');

  if (!copyBtn || !appText) return;

  copyBtn.addEventListener('click', async () => {
    try {
      const textToCopy = appText.textContent || appText.innerText;
      await navigator.clipboard.writeText(textToCopy);
      showToast('Application format copy ho gaya! Ab isme apni details bharein.');
      
      const originalText = copyBtn.textContent;
      copyBtn.textContent = 'Copied! ✓';
      copyBtn.classList.add('btn-secondary');
      copyBtn.classList.remove('btn-primary');

      setTimeout(() => {
        copyBtn.textContent = originalText;
        copyBtn.classList.add('btn-primary');
        copyBtn.classList.remove('btn-secondary');
      }, 2500);
    } catch (err) {
      showToast('Failed to copy. Kripya manually text select karke copy karein.');
    }
  });
}

/* --------------------------------------------------------------------------
   4. FAQ Accordion Interaction
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answerDiv = item.querySelector('.faq-answer');

    if (!questionBtn || !answerDiv) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherAnswer = otherItem.querySelector('.faq-answer');
        if (otherAnswer) otherAnswer.style.maxHeight = null;
      });

      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
        answerDiv.style.maxHeight = answerDiv.scrollHeight + 30 + 'px';
      }
    });
  });
}

/* --------------------------------------------------------------------------
   5. Interactive Checklist with LocalStorage Persistence
   -------------------------------------------------------------------------- */
function initChecklistTracker() {
  const checkboxes = document.querySelectorAll('.exit-checkbox');
  const progressBar = document.getElementById('checklistProgressBar');
  const progressText = document.getElementById('checklistProgressText');
  const resetBtn = document.getElementById('resetChecklistBtn');

  const STORAGE_KEY = 'imca_exit_checklist_state';

  // Load saved state from localStorage
  let savedState = {};
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) savedState = JSON.parse(stored);
  } catch (e) {
    console.warn('LocalStorage not available');
  }

  // Restore checkbox states
  checkboxes.forEach(cb => {
    const id = cb.getAttribute('data-id');
    if (savedState[id]) {
      cb.checked = true;
    }

    cb.addEventListener('change', () => {
      savedState[id] = cb.checked;
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(savedState));
      } catch (e) {}
      updateProgress();
    });
  });

  function updateProgress() {
    const total = checkboxes.length;
    let checkedCount = 0;
    checkboxes.forEach(cb => {
      if (cb.checked) checkedCount++;
    });

    const percent = Math.round((checkedCount / total) * 100);
    if (progressBar) progressBar.style.width = percent + '%';
    if (progressText) {
      if (percent === 100) {
        progressText.innerHTML = `🎉 <strong>100% Completed!</strong> Aapka BCA exit procedure successfully ready hai.`;
        progressText.style.color = 'var(--color-success)';
      } else {
        progressText.textContent = `${checkedCount} of ${total} steps completed (${percent}%)`;
        progressText.style.color = 'var(--color-text-muted)';
      }
    }
  }

  // Reset button
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Kya aap checklist ke sabhi ticks reset karna chahte hain?')) {
        checkboxes.forEach(cb => cb.checked = false);
        savedState = {};
        try {
          localStorage.removeItem(STORAGE_KEY);
        } catch (e) {}
        updateProgress();
        showToast('Checklist reset ho gayi.');
      }
    });
  }

  updateProgress();
}

/* --------------------------------------------------------------------------
   6. Share & Print Features
   -------------------------------------------------------------------------- */
function initShareAndPrint() {
  const printBtn = document.getElementById('printBtn');
  const shareBtn = document.getElementById('shareBtn');
  const copyLinkBtn = document.getElementById('copyLinkBtn');

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
      const shareData = {
        title: 'IMCA Exit Guide: 6th Sem ke Baad BCA Degree Kaise Le?',
        text: 'RGPV Ordinance 33 ke clauses 5.8 & 5.9 ke tehat Integrated MCA se BCA lene ki puri process!',
        url: window.location.href
      };

      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        try {
          await navigator.share(shareData);
        } catch (err) {
          if (err.name !== 'AbortError') copyCurrentUrl();
        }
      } else {
        copyCurrentUrl();
      }
    });
  }

  if (copyLinkBtn) {
    copyLinkBtn.addEventListener('click', copyCurrentUrl);
  }

  function copyCurrentUrl() {
    navigator.clipboard.writeText(window.location.href)
      .then(() => showToast('Article link clipboard mein copy ho gaya!'))
      .catch(() => showToast('Could not copy link automatically.'));
  }
}

/* --------------------------------------------------------------------------
   Toast Notification Helper
   -------------------------------------------------------------------------- */
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

