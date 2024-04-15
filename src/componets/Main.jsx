function Main() {
  return (
    <main id="content" className="pt-24 lg:w-1/2 lg:py24 text-test1">
      <section
        id="about"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-16 lg:scooll-mt-24"
        aria-label="About me"
      >
        <div
          className="sticky top-0 z-20 -mx-6 mb-4 w-screen  px-6 py-5 backdrop-blur md:-mx-12 md:px-12 
          lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
        >
          <h1 className="text-xl font-bold uppercase tracking-widest ls:sr-only ">
            Über mich
          </h1>
        </div>
        <div>
          <p className="mb-4 lg:text-2xl sm:text-xl">
            2022 habe ich meine Ausbildung als Fachinformatiker für
            Systemintegration im Forschungszentrum Jülich angefangen. Schnell
            bemerkte ich, dass ich sehr gerne Programmiere, daher haben ich
            angefangen mithilfe meines Ausbilders HTML, CSS und Javascript
            zulernen. Derzeit Fokosiere ich mich auf React und Tailwindcss und
            in der Zukunft will mein Wissen im bereicht PHP und SQL vergrößern.
          </p>
          <p className="mb-4 lg:text-2xl sm:text-xl">
            Wenn ich nicht Programmiere, gehe ich in meiner Freizeit sehr gerne
            ins Fitnessstudio und mache Kampfsport.
          </p>
        </div>
      </section>
      <section
        id="Erfahrung"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-16 lg:scooll-mt-24"
        aria-label="Erfahrung"
      >
        <div
          className="sticky top-0 z-20 -mx-6 mb-4 w-screen  px-6 py-5 backdrop-blur md:-mx-12 md:px-12 
          lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
        >
          <h1 className="text-xl font-bold uppercase tracking-widest ls:sr-only">
            Erfahung
          </h1>
        </div>
        <div>
          <p className="mb-4 lg:text-2xl sm:text-xl">
            Im Jahr 2022 habe ich mir bei Udemy einen online Kurs für HTML, CSS
            und Javascript gekauft. Nachdem ich die Grundlagen verstanden hatte,
            habe ich angefangen kleine einfache Webseiten selber zu entwickeln.
            Zu Beginn habe ich mit einfachen Portfolio-Webseiten und Onlineshops
            angefangen, um die Grundlagen noch weiter zu vertiefen. Nach knapp
            1,5 Jahren HTML, CSS und Javascript habe ich mit den ersten
            Frameworks angefangen. Der Zeit nutze ich React und Tailwindcss.
          </p>
          <p className="mb-4 lg:text-2xl sm:text-xl">
            Derzeit arbeite ich an dem Frontend eines
            Inventarverwaltungssystems, hierfür nutze ich HTML, Tailwindcss und
            React. Der Code befindet sich auf meinem Github.
          </p>
        </div>
      </section>
      <section></section>
      <footer></footer>
    </main>
  );
}

export default Main;
