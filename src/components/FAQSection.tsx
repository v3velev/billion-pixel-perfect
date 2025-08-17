import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What makes GTM Revenue different from other sales agencies?",
      answer: "We combine AI technology with human expertise to deliver fully managed go-to-market solutions. Unlike traditional agencies, we provide immediate value delivery and custom-built solutions aligned with your company's specific needs."
    },
    {
      question: "How quickly can we see results?",
      answer: "Our clients typically see immediate value delivery within the first weeks. We focus on quick wins while building long-term sustainable growth systems."
    },
    {
      question: "Do you work with companies of all sizes?",
      answer: "We primarily work with B2B companies looking to scale their sales operations. Our solutions are designed to work best with companies that are serious about transforming their go-to-market approach."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide fully managed outcomes with strategy handled for you. Our team of AI and go-to-market experts work alongside your team throughout the entire process from ideation to execution to optimization."
    },
    {
      question: "How do you measure success?",
      answer: "We measure success through real results and numbers - increased sales pipeline, closed deals, improved conversion rates, and overall revenue growth. Our clients have generated over $53M+ in sales pipeline using our solutions."
    }
  ];

  return (
    <section className="py-32 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20">
            <span className="gradient-primary bg-clip-text text-transparent">FAQ</span>
          </h2>
          
          <div className="gradient-card rounded-3xl p-8 shadow-premium">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border/20 rounded-2xl px-6"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-smooth py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;