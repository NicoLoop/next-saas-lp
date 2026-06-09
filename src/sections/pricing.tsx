'use client'

import Card from "@/components/card"
import SlideEffect from "@/components/slide-effect"
import { Button } from "@/components/ui/button"
import { CircleCheck } from "lucide-react"

const settings = {
  title: 'Hosting Plans',
  description: 'Choose the perfect plan for your Minecraft server. All plans include 24/7 support, DDoS protection, and automatic backups. Start free for 7 days!',
  plan_1: {
    planName: 'Starter',
    price: 4.99,
    currency: '$',
    description: 'Perfect for small servers and beginner communities.',
    cta: 'Get Started',
    features: [
      'Up to 20 Players',
      'NVMe SSD Storage',
      'DDoS Protection',
      'Daily Backups',
      'One-Click Restores',
      'Basic Support',
      '99.9% Uptime',
      'Automatic Updates'
    ]
  },
  plan_2: {
    planName: 'Professional',
    price: 9.99,
    currency: '$',
    description: 'For growing communities and modded servers.',
    cta: 'Get Started',
    features: [
      'Up to 50 Players',
      'NVMe SSD Storage',
      'DDoS Protection',
      'Hourly Backups',
      'One-Click Modpacks',
      'Priority Support',
      '99.95% Uptime',
      'Custom Java Arguments',
      'Extra RAM & CPU',
    ]
  },
  plan_3: {
    planName: 'Enterprise',
    price: 24.99,
    currency: '$',
    description: 'For large communities and high-traffic servers.',
    cta: 'Get Started',
    features: [
      'Unlimited Players',
      'Premium SSD Storage',
      'Advanced DDoS Shield',
      'Real-time Backups',
      'All Modpacks Included',
      '24/7 Priority Support',
      '99.99% Uptime',
      'Dedicated IP Address',
      'Custom Domain',
      'Admin Access',
    ]
  },
}

export default function Pricing() {
  return (
    <div id='pricing' className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      {/* Title */}
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header capitalize text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-medium leading-normal">{settings.title}</h2>
      </SlideEffect>

      {/* Description */}
      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base">{settings.description}</SlideEffect>

      {/* Pricing Plans */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* plan 1 */}
        <SlideEffect isSpring={false} delay={0.1} className="text-base">
          <Card className="bg-white">
            <div className="capitalize text-start text-black">{settings.plan_1.planName}</div>
            <div className="flex items-baseline gap-1">
              <span className="font-medium text-4xl text-black">{settings.plan_1.currency}{settings.plan_1.price}</span>
              <span className="text-sm">/month</span>
            </div>
            <Button className="w-full">{settings.plan_1.cta}</Button>
            <div className="text-start space-y-6">
              <p className="text-black text-sm">{settings.plan_1.description}</p>

              <div className="flex flex-col items-start gap-4 text-sm">
                {settings.plan_1.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CircleCheck className="text-primary" size={16} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </SlideEffect>

        {/* plan 2 */}
        <SlideEffect isSpring={false} delay={0.2} className="flex flex-col gap-6 text-base">
          <Card className="bg-secondary">
            <div className="w-full flex items-center gap-2 justify-between">
              <div className="capitalize text-start text-black">{settings.plan_2.planName}</div>
              <div className="text-xs bg-accent px-2 py-1 rounded-full text-black capitalize">most popular</div>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-medium text-4xl text-black">{settings.plan_2.currency}{settings.plan_2.price}</span>
              <span className="text-sm">/month</span>
            </div>
            <Button className="w-full">{settings.plan_2.cta}</Button>
            <div className="text-start space-y-6">
              <p className="text-black text-sm">{settings.plan_2.description}</p>

              <div className="flex flex-col items-start gap-4 text-sm">
                {settings.plan_2.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CircleCheck className="text-primary" size={16} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </SlideEffect>

        {/* plan 3 */}
        <SlideEffect isSpring={false} delay={0.3} className="flex flex-col gap-6 text-base">
          <Card className="bg-white">
            <div className="capitalize text-start text-black">{settings.plan_3.planName}</div>
            <div className="flex items-baseline gap-1">
              <span className="font-medium text-4xl text-black">{settings.plan_3.currency}{settings.plan_3.price}</span>
              <span className="text-sm">/month</span>
            </div>
            <Button className="w-full">{settings.plan_3.cta}</Button>
            <div className="text-start space-y-6">
              <p className="text-black text-sm">{settings.plan_3.description}</p>

              <div className="flex flex-col items-start gap-4 text-sm">
                {settings.plan_3.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CircleCheck className="text-primary" size={16} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </SlideEffect>
      </div>
    </div>
  )
}
