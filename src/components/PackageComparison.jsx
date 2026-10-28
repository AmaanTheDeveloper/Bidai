import React from 'react';
import { packagesData, comparisonMatrix } from '../config/packagesData';
import { Check, Minus, Sparkles } from 'lucide-react';

export default function PackageComparison({ onSelectPackage }) {
  const handleSelect = (pkgId) => {
    if (onSelectPackage) {
      onSelectPackage(pkgId);
    }
    const element = document.querySelector('#order-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-16 bg-white border-y border-brand-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-ivory border border-brand-gold/40 text-brand-maroon text-xs font-semibold uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>Side-By-Side Comparison</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark mb-3">
            Compare Bidai Packages
          </h2>
          <p className="text-sm text-brand-muted">
            Find the perfect package that aligns with your family's wedding & household requirements.
          </p>
        </div>

        {/* Scrollable Table Container */}
        <div className="overflow-x-auto rounded-2xl border border-brand-gold/30 shadow-card bg-brand-ivory/40">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-brand-maroon text-white border-b border-brand-gold">
                <th className="py-4 px-4 font-serif text-sm font-bold tracking-wide w-1/5">
                  Package Features
                </th>
                {packagesData.map((pkg) => (
                  <th key={pkg.id} className="py-4 px-3 text-center border-l border-brand-maroon-dark/60">
                    <div className="font-serif text-base font-bold text-brand-gold">
                      {pkg.shortName}
                    </div>
                    <div className="text-xs text-white/90 font-mono mt-0.5">
                      {pkg.formattedPrice}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-beige text-xs">
              {comparisonMatrix.features.map((feature, idx) => (
                <tr 
                  key={feature.key}
                  className={idx % 2 === 0 ? 'bg-white' : 'bg-brand-ivory/60'}
                >
                  <td className="py-3.5 px-4 font-semibold text-brand-dark flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                    {feature.label}
                  </td>

                  {packagesData.map((pkg) => {
                    const value = comparisonMatrix.packages[pkg.id]?.[feature.key] || "—";
                    const isAvailable = value !== "—";

                    return (
                      <td key={pkg.id} className="py-3.5 px-3 text-center border-l border-brand-beige/80">
                        {isAvailable ? (
                          <div className="flex flex-col items-center gap-1">
                            <Check className="w-4 h-4 text-brand-maroon" />
                            <span className="text-[11px] text-brand-dark/90 font-medium">
                              {value}
                            </span>
                          </div>
                        ) : (
                          <Minus className="w-4 h-4 text-brand-muted/40 mx-auto" />
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
              
              {/* Table Action Row */}
              <tr className="bg-brand-beige/40">
                <td className="py-4 px-4 font-serif text-sm font-bold text-brand-dark">
                  Select & Order
                </td>
                {packagesData.map((pkg) => (
                  <td key={pkg.id} className="py-4 px-2 text-center border-l border-brand-beige">
                    <button
                      onClick={() => handleSelect(pkg.id)}
                      className="px-3 py-1.5 bg-brand-maroon hover:bg-brand-maroon-dark text-white rounded-lg text-xs font-semibold transition-all border border-brand-gold/40 shadow-xs"
                    >
                      Select {pkg.id}
                    </button>
                  </td>
                ))}
              </tr>

            </tbody>
          </table>
        </div>

        <p className="text-[11px] text-brand-muted text-center mt-4">
          ↔ Scroll horizontally to view all package features across tiers.
        </p>

      </div>
    </section>
  );
}
