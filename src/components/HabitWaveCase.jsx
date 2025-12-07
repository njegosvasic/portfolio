// src/app/habitwave/page.js
import Image from "next/image";
import banner from "@/assets/habitwave/banner.jpg";
import personaImage from "@/assets/habitwave/persona.png";
import painPointsImage from "@/assets/habitwave/painpoints.png";
import empathyMap from "@/assets/habitwave/empathymap.png";
import features from "@/assets/habitwave/features.png";
import paperWireframe from "@/assets/habitwave/paperwireframe.png";
import digitalWireframe from "@/assets/habitwave/digitalwireframe.png";
import usabilityStudy from "@/assets/habitwave/usabilitystudy.png";
import lowFidelity from "@/assets/habitwave/lowfi.png";
import highFidelity from "@/assets/habitwave/highfi.png";
import seaburyImage from "@/assets/habitwave/seabury.png";
import inkyImage from "@/assets/habitwave/inkyy.png";

export default function HabitWavePage() {
  // Tipografija vuče boju iz CSS varijable umesto iz Tailwind palete
  const h2 = "text-4xl font-bold uppercase text-[var(--foreground)]";
  const h3 = "text-2xl font-semibold text-[var(--foreground)]";
  const p = "text-left text-lg text-[var(--foreground)]";
  const cardImg = "rounded-3xl shadow-xl w-full";
  const heroImg = "w-full rounded-[2rem] shadow-xl shadow-black/20 dark:shadow-black/40";

  return (
    <section className="px-6 md:px-28 py-10 space-y-24 text-[var(--foreground)]">
      {/* Hero */}
      <Image src={banner} alt="HabitWave Hero" className={heroImg} priority />

      {/* Title + Intro */}
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className={h2}>HabitWave</h2>
        <div className="text-left space-y-4">
          <p className={p}>
            HabitWave is an all-in-one application designed to assist users in
            building and maintaining positive habits.
          </p>
          <ul className="list-disc list-inside text-lg space-y-1">
            <li>Set up your desired habits</li>
            <li>Track your progress</li>
            <li>Achieve your goals</li>
          </ul>
          <p className={p}>
            From the outset, the core concept of HabitWave has been to offer a
            flexible system catering to users' diverse needs and preferences.
          </p>
        </div>
      </div>

      {/* My Role */}
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className={h2}>My Role</h2>
        <p className={p}>
          In the HabitWave project, I was involved in several key areas of UX/UI
          design, including:
        </p>
        <ul className="list-disc list-inside text-left text-lg space-y-1">
          <li>Research and User Surveys</li>
          <li>Graphic Design</li>
          <li>Wireframing and Prototyping</li>
          <li>Usability Testing</li>
          <li>Final Design Implementation</li>
        </ul>
      </div>

      {/* Research Goals */}
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className={h2}>Research Goals</h2>
        <p className={p}>
          I aim to understand how users interact with habit-building platforms
          to enhance HabitWave’s effectiveness in supporting users' efforts to
          cultivate positive habits.
        </p>
        <p className="text-left font-semibold mt-2 text-[var(--foreground)]">Methodologies:</p>
        <ul className="list-disc list-inside text-left text-lg">
          <li>Competitive Analysis</li>
          <li>User Survey</li>
        </ul>
      </div>

      {/* Competitive Analysis */}
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className={h2}>Competitive Analysis</h2>
        <p className={p}>
          I looked at habit apps like Habitica, Habitify, and HabitNow. Each app
          has its own unique strengths. Habitica makes tracking habits fun like
          a game. Habitify is simple and clean. HabitNow lets you customize
          everything. But people want more than just tracking. They want some
          fun, to-do lists, and habits customized for their life. They also want
          more than just tips, they want a guide to improve their lives. After
          spotting these gaps I see a chance for HabitWave. It won't just track
          habits, but will be a journey with insights, growth, and enjoyment.
        </p>
      </div>

      {/* User Research */}
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className={h2}>User Research</h2>

        <h3 className={h3}>Respondent Demographics</h3>
        <p className={p}>
          Five people were interviewed, providing a focused insight into user
          habits and app usage preferences.
        </p>

        <h3 className={h3}>Pain Points</h3>
        <Image src={painPointsImage} alt="User Pain Points" className={cardImg} />

        <h3 className={h3}>User Research Summary</h3>
        <p className={p}>
          During the user research for HabitWave, I delved deeply into studying
          user habits, behaviors, and preferences. By using qualitative methods
          like interviews and surveys, I gained valuable insights into what
          drives users, what challenges they face, and what goals they have when
          it comes to forming habits. Initially, I had certain assumptions about
          why users use habit-tracking apps, but my research uncovered a variety
          of reasons, including improving mental health and personal growth.
          These discoveries gave us direction on how to customize HabitWave to
          better meet the diverse needs and preferences of our users.
        </p>
      </div>

      {/* Persona */}
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className={h2}>User Persona</h2>
        <p className={p}>
          Based on this user survey, I've crafted a persona that encapsulates
          the characteristics and preferences identified among our respondents.
        </p>
        <Image src={personaImage} alt="User Persona" className={cardImg} />
      </div>

      {/* Empathy Map */}
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className={h2}>Empathy Map</h2>
        <p className={p}>
          To truly step into users’ shoes, I delve deeper with an empathy map.
        </p>
        <Image src={empathyMap} alt="Empathy Map" className={cardImg} />
      </div>

      {/* Features */}
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className={h2}>Features</h2>
        <Image src={features} alt="Key Features of HabitWave" className="w-full shadow-xl" />
      </div>

      {/* Wireframes */}
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className={h2}>Starting the Design</h2>
        <p className={p}>
          After laying a solid foundation with research and feature analysis,
          the time has come to translate these insights into tangible design
          solutions.
        </p>
        <h3 className={`${h3} text-left`}>Paper Wireframes</h3>
        <p className={p}>
          My design process often starts away from the computer, armed with just
          a sketchpad and pen. This simple setup allows me to quickly iterate
          and let creativity flow freely, without any digital barriers.
        </p>
        <Image src={paperWireframe} alt="Paper Wireframes" className={cardImg} />
        <h3 className={`${h3} text-left`}>Digital Wireframes</h3>
        <p className={p}>
          The sketches were then meticulously transformed into digital
          wireframes, setting the stage for detailed design phases and
          interactive prototypes.
        </p>
        <Image src={digitalWireframe} alt="Digital Wireframes" className={cardImg} />
      </div>

      {/* Usability Study */}
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className={h2}>Usability Study</h2>
        <p className={p}>
          With design at a good point, it was crucial to delve into a Usability
          Study to refine the functionality and ensure a seamless user
          experience. In case of usability study based around habit creation
          process I found that moving the "+" button to the bottom center of the
          screen greatly improved accessibility. This change is in line with how
          people naturally use their thumbs on smartphones, making it easier to
          use and reducing the need for hand movements. I also added a streak
          counter icon that reflects the app's wave theme that gives a visual
          boost to keep habits on track.
        </p>
        <Image src={usabilityStudy} alt="Usability Study" className={cardImg} />
      </div>

      {/* Prototypes */}
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className={h2}>Prototypes</h2>

        <h3 className={`${h3} text-left`}>Low Fidelity Prototype</h3>
        <p className={p}>
          To begin, the user clicks on the "+" button. After that, they decide
          on a name for their habit, choose an icon, and select a color. They
          then set the days and times for the habit. Lastly, the first screen is
          refreshed to display the newly established habit.
        </p>
        <Image src={lowFidelity} alt="Low Fidelity Prototype" className="w-full shadow-xl" />

        <h3 className={`${h3} text-left`}>High Fidelity Prototype</h3>
        <p className={p}>
          With our low fidelity prototype refined, it was time to add visual
          detail and bring the user interface closer to the final product. The
          high fidelity prototype provides a more precise representation of the
          user experience, incorporating color, typography, and spacing into the
          design.
        </p>
        <Image src={highFidelity} alt="High Fidelity Prototype" className="w-full shadow-xl" />
      </div>

      {/* Mascots */}
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className={h2}>Meet Your New Friends</h2>
        <p className={p}>
          Seabury the Seahorse and Inky the Octopus are here to assist you on
          your journey to build and maintain positive habits. As friendly
          navigators of your habit-tracking app, they offer advice and support,
          making the process not just effective but enjoyable. They are designed
          to provide a friendly impression and make your app experience feel
          more personal and engaging.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image src={seaburyImage} alt="Seabury" className="rounded-3xl w-full" />
          <Image src={inkyImage} alt="Inky" className="rounded-3xl w-full" />
        </div>
      </div>

      {/* Conclusion */}
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className={h2}>Conclusion</h2>
        <p className={p}>
          Thank you for taking the time to explore the various aspects of the
          HabitWave project with me. While I would have loved to delve deeper
          into some of the more detailed findings from these usability studies,
          I must respect the confidentiality agreements that protect the project
          details.
        </p>
        <p className={p}>
          Working on HabitWave has been a truly enriching experience. Each phase
          of the project brought its own set of challenges and learnings. From
          conceptualizing the initial user flows to crafting engaging personas
          like Seabury the Seahorse and Inky the Octopus, every step was a
          chance to apply my Graphic design and UX/UI skills in dynamic ways.
        </p>
      </div>

      <Image src={banner} alt="HabitWave Hero" className={heroImg} priority />
    </section>
  );
}
