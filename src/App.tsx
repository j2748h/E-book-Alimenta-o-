/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { PaymentProvider } from "./components/PaymentContext";
import { PaymentToolbar } from "./components/PaymentToolbar";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Benefits } from "./components/Benefits";
import { TargetAudience } from "./components/TargetAudience";
import { BookInside } from "./components/BookInside";
import { PracticalTips } from "./components/PracticalTips";
import { Testimonials } from "./components/Testimonials";
import { WhatYouReceive } from "./components/WhatYouReceive";
import { Story } from "./components/Story";
import { Pricing } from "./components/Pricing";
import { Footer } from "./components/Footer";
import { CheckoutSimulator } from "./components/CheckoutSimulator";
import { StickyButton } from "./components/StickyButton";

export default function App() {
  return (
    <PaymentProvider>
      <div className="min-h-screen bg-[#fafdfb] antialiased selection:bg-brand-tint selection:text-brand-dark flex flex-col justify-between" id="landing-page-root">
        {/* Main page content container */}
        <div>
          {/* Top Control Settings Ribbon for Afilliates */}
          <PaymentToolbar />

          {/* Site Navigation */}
          <Header />

          {/* Content sections stack */}
          <main>
            {/* Sec 1: Welcome & Hero */}
            <Hero />

            {/* Sec 2: Key Value Benefits */}
            <Benefits />

            {/* Sec 2.5: Who is this guide for (high-conversion section) */}
            <TargetAudience />

            {/* Sec 3: Content Index Details */}
            <BookInside />

            {/* Sec 4: Practical Lifestyle Habits */}
            <PracticalTips />

            {/* Sec 5: Client Reviews & Social proof */}
            <Testimonials />

            {/* Sec 5.5: Deliverology breakdown of what reader receives */}
            <WhatYouReceive />

            {/* Sec 6: Backstory and Family Purpose */}
            <Story />

            {/* Sec 7: Financial savings tool & Final Sales Action Card */}
            <Pricing />
          </main>
        </div>

        {/* Closing Footer with disclaimers */}
        <Footer />

        {/* Floating elements & interactive modals */}
        <CheckoutSimulator />
        
        {/* Fixed bottom navigation drawer specifically on mobile */}
        <StickyButton />
      </div>
    </PaymentProvider>
  );
}
