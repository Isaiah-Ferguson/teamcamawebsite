const questions = [
  ["Do I need experience?", "No experience is needed to get started. Our programs welcome beginners as well as experienced students. Tell us where you are starting and which class interests you."],
  ["Which class is right for me?", "Brazilian Jiu-Jitsu focuses on grappling and ground control. Muay Thai is striking and conditioning. Taekwondo develops kicking, balance, and confidence, with separate kids and adult sessions."],
  ["What should I bring?", "Ask us about clothing and equipment for your chosen class when you arrange your visit. Let us know if you do not have training gear yet."],
  ["Are there classes for kids?", "Yes—Taekwondo has kids sessions for different experience levels. The adult Taekwondo sessions are listed for ages 12 and up. Contact us about the right group for your child and age eligibility for the other programs."],
  ["How much does training cost?", "Your first class is free. Contact us for current membership pricing and the options for your chosen program."],
];

export default function FirstVisit() {
  return <section className="section-space border-t border-rule">
    <div className="site-container grid lg:grid-cols-[1fr_1.3fr] gap-8 lg:gap-20">
      <div><p className="eyebrow text-primary mb-4">Before you step on the mat</p><h2 className="section-heading">New here?<br />Start here.</h2></div>
      <div className="border-t border-rule">
        {questions.map(([question, answer]) => <details key={question} className="faq-row border-b border-rule">
          <summary className="flex items-center justify-between gap-6 py-5 font-medium text-base"><span>{question}</span><span aria-hidden="true" className="faq-plus text-primary text-2xl transition-transform">+</span></summary>
          <p className="text-ink-muted text-sm leading-relaxed pb-6 pr-6">{answer}</p>
        </details>)}
      </div>
    </div>
  </section>;
}
