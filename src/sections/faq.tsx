'use client'

import SlideEffect from "@/components/slide-effect"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const settings = {
  title: 'Frequently asked questions',
  faqs: [
    {
      question: 'How long does it take to set up my server?',
      answer: 'Your server is ready to play in less than 60 seconds! We provision servers instantly. Just choose your plan, click deploy, and invite your friends.',
    },
    {
      question: 'Do you offer a free trial?',
      answer: 'Yes! All new customers get a 7-day free trial with full access to our Professional plan. No credit card required. Experience our service risk-free.',
    },
    {
      question: 'What modpacks do you support?',
      answer: 'We support Forge, Fabric, Spigot, Paper, and over 500 curated modpacks. If your favorite isn&apos;t in our library, you can upload custom modpacks directly to your server.',
    },
    {
      question: 'Is DDoS protection included?',
      answer: 'Yes! All Creepy Host plans include enterprise-grade DDoS protection. Your server is protected from attacks 24/7 with zero performance impact.',
    },
    {
      question: 'How often are backups created?',
      answer: 'Starter and Professional plans get daily backups. Enterprise plans include hourly backups. You can restore any backup with one click, and your data is always safe.',
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Absolutely! Change your plan anytime. Upgrades take effect immediately, and downgrades are prorated on your next billing cycle.',
    },
  ]
}

export default function FAQ() {
  return (
    <div id='faq' className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      {/* Title */}
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header capitalize text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-medium leading-normale">{settings.title}</h2>
      </SlideEffect>

      {/* Accordion */}
      <SlideEffect>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto text-base text-black">
          {settings.faqs.map((faq, index) => (
            <AccordionItem key={index} value={index + '-item'}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SlideEffect>
    </div>
  )
}
