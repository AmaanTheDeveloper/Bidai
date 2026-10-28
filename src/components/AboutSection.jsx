import React from 'react';
import { Sparkles, Heart, ShieldCheck, Award } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-brand-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Box */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white rounded-2xl p-8 border-2 border-brand-gold/40 shadow-wedding relative">
              <div className="w-14 h-14 rounded-full bg-brand-maroon flex items-center justify-center text-brand-gold font-serif text-3xl font-bold mb-6 border border-brand-gold">
                B
              </div>

              <h3 className="font-serif text-2xl font-bold text-brand-dark mb-4">
                Bidai Marriage & Household Solutions
              </h3>

              <div className="w-16 h-1 bg-brand-gold mb-6"></div>

              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mb-6">
                Designed to make wedding preparation easier by offering carefully planned packages containing different wedding and household essentials under one platform.
              </p>

              <div className="space-y-3 pt-4 border-t border-brand-beige">
                <div className="flex items-center gap-3 text-xs text-brand-dark font-medium">
                  <div className="w-6 h-6 rounded-full bg-brand-beige flex items-center justify-center text-brand-maroon">✓</div>
                  <span>Family-First Pakistani Approach</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-brand-dark font-medium">
                  <div className="w-6 h-6 rounded-full bg-brand-beige flex items-center justify-center text-brand-maroon">✓</div>
                  <span>Transparent & All-Inclusive Packages</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-brand-dark font-medium">
                  <div className="w-6 h-6 rounded-full bg-brand-beige flex items-center justify-center text-brand-maroon">✓</div>
                  <span>Dedicated Personal Assistance</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Narrative Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-beige border border-brand-gold/40 text-brand-maroon text-xs font-semibold uppercase mb-4 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              <span>About Bidai</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-6 leading-tight">
              Making Wedding Preparation Simpler
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-brand-muted leading-relaxed mb-8">
              <p>
                Bidai was created to simplify the process of preparing for a new beginning.
              </p>

              <p>
                Instead of managing different requirements separately — from furniture vendors and kitchenware suppliers to home electronics and bridal makeup services — Bidai brings carefully planned wedding, household and bridal essentials together through convenient, all-in-one packages.
              </p>

              <p>
                Our goal is to make the process easier, more organized and more transparent for Pakistani families, ensuring peace of mind during one of life's most meaningful milestones.
              </p>
            </div>

            {/* Core Values Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-brand-gold/30">
              <div className="p-4 bg-white rounded-xl border border-brand-beige shadow-xs">
                <Heart className="w-5 h-5 text-brand-maroon mb-2" />
                <h4 className="font-serif font-bold text-sm text-brand-dark mb-1">Thoughtful</h4>
                <p className="text-[11px] text-brand-muted">Curated with family needs in mind.</p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-brand-beige shadow-xs">
                <ShieldCheck className="w-5 h-5 text-brand-maroon mb-2" />
                <h4 className="font-serif font-bold text-sm text-brand-dark mb-1">Transparent</h4>
                <p className="text-[11px] text-brand-muted">No hidden costs or confusing tiers.</p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-brand-beige shadow-xs">
                <Award className="w-5 h-5 text-brand-maroon mb-2" />
                <h4 className="font-serif font-bold text-sm text-brand-dark mb-1">Reliable</h4>
                <p className="text-[11px] text-brand-muted">Quality checked household items.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
