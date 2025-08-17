const CalendarSection = () => {
  return (
    <section className="py-32 px-6" id="calendar">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">
            Book a call to get for <span className="gradient-primary bg-clip-text text-transparent">FREE</span> our "XYZ document"
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12">
            our doc xyz, we provide it to you, book this if you are X, only serious
          </p>
          
          <div className="gradient-card rounded-3xl p-12 shadow-premium">
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center border-2 border-dashed border-primary/30">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">Calendly embedded</div>
                <div className="text-muted-foreground">Calendar booking interface will be placed here</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;