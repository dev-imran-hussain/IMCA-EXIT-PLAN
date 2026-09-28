import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EligibilityChecker from "@/components/EligibilityChecker";
import ApplicationCopier from "@/components/ApplicationCopier";
import ExitTracker from "@/components/ExitTracker";
import AuthorCard from "@/components/AuthorCard";
import ShareCluster from "@/components/ShareCluster";
import { BookOpen, AlertCircle, FileCheck2, Clock3, AlertOctagon, HelpCircle, ExternalLink, Lightbulb } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Header with Reading Progress Bar */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Main Content Area */}
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 w-full">
        
        {/* Prose Wrapper for Main Article */}
        <article className="prose prose-terracotta max-w-none text-[#3B2E27] font-sans">
          
          {/* Section 1: Intro */}
          <div className="p-5 sm:p-6 bg-[#F3E9D8] border-l-4 border-[#C56A3C] rounded-r-xl not-prose mb-10 shadow-sm">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-[#C56A3C] shrink-0 mt-0.5" />
              <p className="text-sm sm:text-base text-[#2D1F17] leading-relaxed m-0 font-medium">
                <strong>Ordinance (अध्यादेश) kya hota hai?</strong> Vishwavidyalaya (University) ke aantarik niyamon aur by-laws ka ek aadhikarik likhit dastavez hota hai jo uske academic aur administrative rules ko sanchalit karta hai. College apni marzi se in niyamon ko badal nahi sakte. Jo RGPV ke ordinance mein likha hai, wahi final law hai!
              </p>
            </div>
          </div>

          {/* Section 2: Ordinance 33 Rules */}
          <h2 className="flex items-center gap-2.5 text-[#2D1F17] border-b border-[#E6D8C8] pb-3">
            <BookOpen className="w-6 h-6 text-[#C56A3C]" />
            RGPV Ordinance 33: Exit Aur Re-Entry Ke Official Niyam
          </h2>
          
          <p>
            Integrated MCA (5-Year Dual Degree) program ke official Ordinance 33 ke tahat do sabse mahatvapoorna clauses hain jo aapke exit, degree conferment, aur re-entry ko regulate karte hain:
          </p>

          {/* Official Source Link Banner */}
          <div className="not-prose my-6 p-4 sm:p-5 bg-white border border-[#E6D8C8] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🏛️</span>
              <div>
                <div className="text-sm font-bold text-[#2D1F17]">Official RGPV Ordinance Repository</div>
                <div className="text-xs text-[#736155]">Aap University ke portal par Ordinance No. 33 ko direct verify kar sakte hain.</div>
              </div>
            </div>
            <a
              href="https://www.rgpv.ac.in/aboutrgtu/frm_viewordinance.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#F7ECE4] text-[#C56A3C] hover:bg-[#C56A3C] hover:text-white transition shrink-0"
            >
              Verify on rgpv.ac.in <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Clause 5.8 Alert Card */}
          <div className="not-prose my-8 bg-white border-2 border-[#C56A3C]/30 rounded-2xl p-6 sm:p-7 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#C56A3C] bg-[#F7ECE4] px-2.5 py-1 rounded">
                Clause 5.8
              </span>
              <span className="text-xs text-[#736155] font-semibold">Exit &amp; Degree Award</span>
            </div>
            
            <h3 className="font-serif text-xl sm:text-2xl text-[#2D1F17] font-normal mb-3">
              BCA Degree Milne Ki Conditions
            </h3>

            {/* Exact Quote */}
            <div className="bg-[#261D18] text-[#F4EBE3] p-4 rounded-xl font-mono text-xs sm:text-sm leading-relaxed mb-4 border border-[#3B2E27]">
              <span className="text-[#E07A5F] block font-bold mb-1 text-[11px] uppercase tracking-wider">Exact Words:</span>
              "A candidate on successfully completion of the first Six semesters with minimum CGPA of 5.0, shall be eligible for the award of a Bachelor Degree of Computer Applications (BCA) Or A candidate on successfully completion of the first Eight semesters with minimum CGPA of 5.0, shall be eligible for the award of a Bachelor Degree of Computer Applications (BCA) with honours."
            </div>

            <div className="space-y-3 text-sm text-[#3B2E27] leading-relaxed">
              <div className="p-3 bg-[#FAF6F0] rounded-xl border border-[#E6D8C8]">
                <strong className="text-[#2D1F17]">🎯 3 Saal Baad Exit (Option A):</strong> Agar aapne pehle <strong>6 semesters</strong> successfully pass kar liye hain aur aapka overall <strong>CGPA 5.0 ya usse adhik</strong> hai, toh aap Bachelor of Computer Applications (BCA) ki standard degree claim kar sakte hain.
              </div>
              <div className="p-3 bg-[#FAF6F0] rounded-xl border border-[#E6D8C8]">
                <strong className="text-[#2D1F17]">🎯 4 Saal Baad Exit (Option B):</strong> Agar aap <strong>8 semesters</strong> poore karke exit karte hain aur aapka CGPA 5.0 ya usse upar hai, toh aapko 4-year undergraduate <strong>BCA (Honours)</strong> ki degree milti hai.
              </div>
            </div>
          </div>

          {/* Clause 5.9 Alert Card */}
          <div className="not-prose my-8 bg-white border border-[#E6D8C8] rounded-2xl p-6 sm:p-7 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#736155] bg-[#F3E9D8] px-2.5 py-1 rounded">
                Clause 5.9
              </span>
              <span className="text-xs text-[#736155] font-semibold">Re-Entry &amp; Surrender</span>
            </div>

            <h3 className="font-serif text-xl sm:text-2xl text-[#2D1F17] font-normal mb-3">
              Wapas Aakar MCA Pura Karne Ka Option
            </h3>

            {/* Exact Quote */}
            <div className="bg-[#261D18] text-[#F4EBE3] p-4 rounded-xl font-mono text-xs sm:text-sm leading-relaxed mb-4 border border-[#3B2E27]">
              <span className="text-[#E07A5F] block font-bold mb-1 text-[11px] uppercase tracking-wider">Exact Words:</span>
              "A candidate who possesses a Bachelor Degree of Computer Applications (BCA) of the university shall be eligible for admission to the seventh semester... provided that immediately after the declaration of the results of the final semester examinations and before conferment of the Degree of Master of Computer Applications the candidate shall surrender to the university the Bachelor Degree of Computer Applications (BCA)..."
            </div>

            <div className="space-y-3 text-sm text-[#3B2E27] leading-relaxed">
              <div className="p-3 bg-[#FAF6F0] rounded-xl border border-[#E6D8C8]">
                <strong className="text-[#2D1F17]">🔄 Re-entry Feature:</strong> BCA degree lekar exit karne ke baad, agar future mein aapko MCA poora karna ho, toh aap direct <strong>7th semester</strong> mein admission le sakte hain (BCA Honours wale direct 9th semester mein entry le sakte hain).
              </div>
              <div className="p-3 bg-[#FEF2F2] rounded-xl border border-[#FECACA] text-[#991B1B]">
                <strong>⚠️ Degree Surrender Rule:</strong> Jab aap apna MCA poora kar lenge, toh final MCA degree milne se pehle aapko apni purani BCA/BCA Honours degree university ko wapas (surrender) karni hogi. Ek hi integrated course se do alag-alag degrees retain karne ki ijazat nahi hoti.
              </div>
            </div>
          </div>

          {/* INTERACTIVE ELIGIBILITY CHECKER */}
          <div className="not-prose">
            <EligibilityChecker />
          </div>

          {/* Section 3: Practical 5-Step Process */}
          <h2 className="flex items-center gap-2.5 text-[#2D1F17] border-b border-[#E6D8C8] pb-3 mt-14">
            <FileCheck2 className="w-6 h-6 text-[#C56A3C]" />
            Exit Karne Ka Practical 5-Step Process
          </h2>

          <p>
            Official rulebook ke alawa, college ke student cell se file pass karwane ka practical ground-level process is prakar hota hai:
          </p>

          <ol className="space-y-4 my-6">
            <li>
              <strong>Sabhi Subjects Clear Karein (Zero Backlogs):</strong> 1st se lekar 6th semester tak ke sabhi theory aur practical subjects bina kisi backlog/ATKT ke clear hone chahiye. Overall CGPA <strong>5.0 ya usse upar</strong> hona anivarya hai. Agar koi back hai toh pehle re-exam dekar use clear karein.
            </li>
            <li>
              <strong>HOD Aur Principal Ko Formal Application Dein:</strong> 6th semester ke final exams ya result aane ke aas-paas, RGPV Ordinance 33, Clause 5.8 ka reference dete hue apne HOD aur College Principal ko formal application submit karein.
            </li>
            <li>
              <strong>'No Dues' Clearance Lein:</strong> Regular pass-out students ki tarah aapko Central Library (kitabein wapas), Accounts Department (fees cleared), Computer Labs, aur Hostel (agar liya ho) se 'No Dues' form par sign &amp; stamp lena hoga.
            </li>
            <li>
              <strong>Consolidated Mark Sheet Aur PDC Ke Liye Apply Karein:</strong> 6th semester ka result aane ke baad, Final Consolidated Mark Sheet aur Provisional Degree Certificate (PDC) ke liye portal ya college ke through apply karein. Aage kisi bhi job, B.Ed ya entrance exam ke admission mein <strong>PDC hi sabse pehle kaam aati hai</strong> kyunki original degree aane mein time lagta hai.
            </li>
            <li>
              <strong>TC Aur Migration Certificate Collect Karein:</strong> Course officially khatam karke nikalne ke liye college se Transfer Certificate (TC) aur kisi doosri university ya post-graduate course mein admission ke liye RGPV portal se Migration Certificate prapt karein.
            </li>
          </ol>

          {/* Insider Babu Advice Box */}
          <div className="not-prose my-8 p-5 sm:p-6 bg-[#FFFDF9] border-2 border-dashed border-[#C56A3C] rounded-2xl">
            <div className="flex items-start gap-3.5">
              <span className="text-3xl">🤫</span>
              <div>
                <h4 className="font-serif text-lg font-normal text-[#2D1F17] mb-1.5">
                  Ground Reality: "Student Section Ke Babu Se Pehle Mil Lo!"
                </h4>
                <p className="text-sm text-[#3B2E27] leading-relaxed mb-2">
                  Official document mein toh sirf rule likha hota hai, par practically saara paper-work college ki Student Section Cell hi handle karti hai. Best practice yeh hai ki jab aapka 6th semester chal raha ho, tabhi ek baar shanti se student section ke clerk ya apne HOD se milkar pooch lein:
                </p>
                <div className="bg-[#F7ECE4] p-3 rounded-lg text-xs sm:text-sm font-semibold text-[#C56A3C] italic">
                  "Sir, humare yahan 6th sem ke baad Ordinance Clause 5.8 ke under BCA degree lene ka kya specific form ya internal process chalta hai?"
                </div>
              </div>
            </div>
          </div>

          {/* INTERACTIVE APPLICATION COPIER */}
          <div className="not-prose">
            <ApplicationCopier />
          </div>

          {/* Section 4: Timeline */}
          <h2 className="flex items-center gap-2.5 text-[#2D1F17] border-b border-[#E6D8C8] pb-3 mt-14">
            <Clock3 className="w-6 h-6 text-[#C56A3C]" />
            Documents Kab Tak Milenge? (Expected Timeline)
          </h2>

          <p>
            RGPV ke normal administrative cycle ke hisaab se degrees aur documents aane ka time schedule aamtaur par is prakar rehta hai:
          </p>

          <div className="not-prose grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
            <div className="bg-white border border-[#E6D8C8] p-5 rounded-xl shadow-sm">
              <span className="text-xs font-mono font-bold uppercase text-[#736155] block mb-1">Stage 01</span>
              <h4 className="font-serif text-lg text-[#2D1F17] mb-2 font-normal">Result &amp; Marksheet</h4>
              <p className="text-xs sm:text-sm text-[#736155] leading-relaxed">
                Exams khatam hone ke <strong>30-60 din</strong> baad portal par result aata hai aur 3-year consolidated marksheet generate hoti hai.
              </p>
            </div>

            <div className="bg-white border-2 border-[#C56A3C] p-5 rounded-xl shadow-sm relative">
              <span className="absolute -top-2.5 right-3 bg-[#C56A3C] text-white text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded">
                Key Document
              </span>
              <span className="text-xs font-mono font-bold uppercase text-[#C56A3C] block mb-1">Stage 02</span>
              <h4 className="font-serif text-lg text-[#2D1F17] mb-2 font-normal">PDC Certificate</h4>
              <p className="text-xs sm:text-sm text-[#736155] leading-relaxed">
                Result aane aur 'No Dues' clear hone ke baad apply karne par <strong>15 se 30 din</strong> mein PDC mil jati hai. Yahi sabhi jobs aur admissions ke liye valid hai!
              </p>
            </div>

            <div className="bg-white border border-[#E6D8C8] p-5 rounded-xl shadow-sm">
              <span className="text-xs font-mono font-bold uppercase text-[#736155] block mb-1">Stage 03</span>
              <h4 className="font-serif text-lg text-[#2D1F17] mb-2 font-normal">Original Degree</h4>
              <p className="text-xs sm:text-sm text-[#736155] leading-relaxed">
                Original hard-copy degree University ke Convocation (दीक्षांत समारोह) mein aati hai, jisme <strong>6 mahine se 1 saal+</strong> ka samay lag sakta hai.
              </p>
            </div>
          </div>

          {/* Section 5: Traps & Caution */}
          <h2 className="flex items-center gap-2.5 text-[#2D1F17] border-b border-[#E6D8C8] pb-3 mt-14">
            <AlertOctagon className="w-6 h-6 text-[#C56A3C]" />
            Dhyan Rakhne Layak Zaroori Baatein (Savdhaniyan)
          </h2>

          <p>
            Faisla lene se pehle in do critical sawalon ko apne college administration se zaroor clear karein:
          </p>

          <div className="not-prose space-y-4 my-6">
            <div className="p-5 bg-white border-l-4 border-[#D97706] rounded-r-xl border-y border-r border-[#E6D8C8] shadow-sm">
              <h4 className="font-serif text-lg text-[#2D1F17] font-normal mb-1">
                ⚠️ Sawal 1: Degree Par Naam Kya Hoga?
              </h4>
              <p className="text-sm text-[#3B2E27] leading-relaxed">
                Apne college examination cell se confirm karein ki degree par clear shabdon mein <strong>"Bachelor of Computer Applications (BCA)"</strong> likha hoga ya usme koi exit remark hoga? B.Ed, government jobs, aur teaching exams ke document verification mein ek clear-cut 3-year Bachelor's degree maangi jaati hai.
              </p>
            </div>

            <div className="p-5 bg-white border-l-4 border-[#DC2626] rounded-r-xl border-y border-r border-[#E6D8C8] shadow-sm">
              <h4 className="font-serif text-lg text-[#2D1F17] font-normal mb-1">
                🚨 Sawal 2: Remaining Fees Trap Se Bachein
              </h4>
              <p className="text-sm text-[#3B2E27] leading-relaxed">
                Kuch private colleges seat khali hone ka hawala dekar aage ke semesters ki fees maangte hain. RGPV Ordinance 33 mein aisi kisi penalty ya aage ki fees maangne ka <strong>koi niyam nahi hai</strong>. 'No Dues' process ke waqt kisi vivaad se bachne ke liye 5th ya 6th semester mein hi accounts section se situation clear kar lein.
              </p>
            </div>
          </div>

          {/* INTERACTIVE ACTION TRACKER */}
          <div className="not-prose">
            <ExitTracker />
          </div>

          {/* Section 6: Conclusion */}
          <h2 className="flex items-center gap-2.5 text-[#2D1F17] border-b border-[#E6D8C8] pb-3 mt-14">
            <HelpCircle className="w-6 h-6 text-[#C56A3C]" />
            Conclusion
          </h2>

          <p>
            RGPV ka Ordinance 33 students ke paksh mein hai aur early exit ka legal raasta pradan karta hai. Agar aap upar diye gaye steps aur rules ko sahi tarike se follow karte hain, toh aap aasani se apna BCA claim karke aage ke career plans par focus kar sakte hain. Tension mat lijiye, timely application submit karke confidence ke sath apna haq lijiye!
          </p>

          <p className="text-sm italic text-[#736155] border-t border-[#E6D8C8] pt-4 mt-6">
            (Note: Is article ki research aur RGPV Ordinance 33 ke clauses ko students ke liye aasaan bhasha mein explain karne ka credit IMCA student aur researcher Imran Hussain ko jata hai.)
          </p>

        </article>

        {/* AUTHOR BIO CARD */}
        <AuthorCard />

        {/* SHARE CLUSTER */}
        <ShareCluster />

      </main>

      {/* Footer */}
      <footer className="bg-[#F3E9D8] border-t border-[#E6D8C8] py-8 text-center text-xs text-[#736155]">
        <div className="max-w-4xl mx-auto px-4">
          <p className="mb-2">
            IMCA Exit Blueprint • Academic Guide based on RGPV Ordinance 33 (Clauses 5.8 &amp; 5.9)
          </p>
          <p className="text-[#9B897D]">
            Researched &amp; Published by <strong className="text-[#C56A3C]">Imran Hussain (IMCA Student &amp; Researcher)</strong>
          </p>
        </div>
      </footer>
    </div>
  );
}
