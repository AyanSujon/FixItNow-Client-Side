// 'use client';

// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import { ArrowRight, Star, Users, ShieldCheck } from 'lucide-react';
// import Image from 'next/image';

// export default function Hero() {
//   return (
//     <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-background pt-16">
//       {/* Subtle background pattern */}
//       <div className="absolute inset-0 bg-[radial-gradient(#ff730820_0.8px,transparent_1px)] bg-[length:20px_20px] dark:bg-[radial-gradient(#ff730810_0.8px,transparent_1px)]" />

//       <div className="container mx-auto px-6 max-w-7xl">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//           {/* Left Content */}
//           <div className="space-y-8">
//             <div className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-1.5 text-sm">
//               <span className="text-primary">🏠</span>
//               <span className="font-medium">Your Trusted Home Service Platform</span>
//             </div>

//             <div className="space-y-6">
//               <h1 className="text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] text-foreground">
//                 Find Trusted Home Service<br />
//                 Professionals in{' '}
//                 <span className="bg-gradient-to-r from-primary via-orange-500 to-amber-500 bg-clip-text text-transparent">
//                   Minutes
//                 </span>
//               </h1>

//               <p className="text-xl text-muted-foreground max-w-lg">
//                 Book verified technicians for plumbing, electrical, cleaning, AC repair, 
//                 painting, and more—all from one platform.
//               </p>
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-wrap gap-4">
//               <Button
//                 size="lg"
//                 className="text-lg h-14 px-10 rounded-xl font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
//                 asChild
//               >
//                 <a href="/services">
//                   Find a Service
//                   <ArrowRight className="ml-2 h-5 w-5" />
//                 </a>
//               </Button>

//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="text-lg h-14 px-8 rounded-xl font-semibold border-2 hover:bg-secondary"
//                 asChild
//               >
//                 <a href="/become-technician">Become a Technician</a>
//               </Button>
//             </div>

//             {/* Trust Badges */}
//             <div className="flex flex-wrap gap-8 pt-6">
//               <div className="flex items-center gap-3">
//                 <div className="flex text-2xl text-amber-500">
//                   ★★★★☆
//                 </div>
//                 <div>
//                   <div className="font-semibold text-lg leading-none">4.9</div>
//                   <div className="text-sm text-muted-foreground">Average Rating</div>
//                 </div>
//               </div>

//               <div className="flex items-center gap-3">
//                 <Users className="h-9 w-9 text-primary" />
//                 <div>
//                   <div className="font-semibold text-lg leading-none">500+</div>
//                   <div className="text-sm text-muted-foreground">Verified Technicians</div>
//                 </div>
//               </div>

//               <div className="flex items-center gap-3">
//                 <ShieldCheck className="h-9 w-9 text-emerald-500" />
//                 <div>
//                   <div className="font-semibold text-lg leading-none">Secure</div>
//                   <div className="text-sm text-muted-foreground">Payments</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Visual */}
//           <div className="relative flex justify-center lg:justify-end">
//             <div className="relative w-full max-w-[520px] aspect-[4/3.1]">
//               {/* Main Hero Image / Illustration Container */}
//               <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-orange-500/5 to-transparent rounded-[3rem] -rotate-3 scale-[1.02]" />

//               {/* Happy Customer Illustration */}
//               <div className="absolute -top-6 -left-4 bg-card border rounded-3xl p-4 shadow-2xl z-20 w-52 rotate-[-8deg] transition-transform hover:rotate-[-4deg]">
//                 <div className="relative h-64 bg-muted rounded-2xl overflow-hidden mb-3">
//                   <Image
//                     src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600"
//                     alt="Happy customer"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//                 <div className="text-center">
//                   <div className="font-semibold">“Fixed my AC in 2 hours!”</div>
//                   <div className="text-sm text-muted-foreground">Sarah M. • Verified</div>
//                 </div>
//               </div>

//               {/* Technician Illustration */}
//               <div className="absolute top-24 right-0 bg-card border rounded-3xl p-4 shadow-2xl z-30 w-52 rotate-[6deg] transition-transform hover:rotate-[2deg]">
//                 <div className="relative h-64 bg-muted rounded-2xl overflow-hidden mb-3">
//                   <Image
//                     src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600"
//                     alt="Professional technician"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//                 <div className="flex items-center justify-between text-sm">
//                   <div>
//                     <div className="font-semibold">Mike Rivera</div>
//                     <div className="text-emerald-600">✓ Verified • 4.98</div>
//                   </div>
//                   <Badge className="bg-primary text-primary-foreground">Plumbing</Badge>
//                 </div>
//               </div>

//               {/* Home Repair Illustration */}
//               <div className="absolute bottom-8 left-20 bg-card border rounded-3xl p-5 shadow-2xl z-10 w-60">
//                 <div className="relative h-52 bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-950/40 dark:to-amber-950/40 rounded-2xl overflow-hidden mb-4 flex items-center justify-center">
//                   <div className="text-[120px] opacity-75">🔧</div>
//                 </div>
//                 <div className="text-center space-y-1">
//                   <div className="font-semibold text-lg">Expert Home Repairs</div>
//                   <div className="text-sm text-muted-foreground">Ready in 30 minutes</div>
//                 </div>
//               </div>

//               {/* Floating Trust Badge */}
//               <div className="absolute -bottom-4 -right-6 bg-card border shadow-xl rounded-2xl px-6 py-4 z-40 flex items-center gap-3">
//                 <div className="text-4xl">⭐</div>
//                 <div>
//                   <div className="font-bold text-xl leading-none">4.9/5</div>
//                   <div className="text-xs text-muted-foreground">from 2,847 reviews</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-xs text-muted-foreground">
//         <span>Scroll to explore services</span>
//         <div className="w-px h-8 bg-border" />
//       </div>
//     </section>
//   );
// }





















'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import HeroCard from './HeroCard';


export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-background pt-8">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ff730820_0.8px,transparent_1px)] bg-[length:20px_20px] dark:bg-[radial-gradient(#ff730810_0.8px,transparent_1px)]" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 pt-4 lg:pt-0">
            <div className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-1.5 text-sm">
              <span className="text-primary">🏠</span>
              <span className="font-medium">Your Trusted Home Service Platform</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] text-foreground">
                Find Trusted Home Service<br />
                Professionals in{' '}
                <span className="bg-gradient-to-r from-primary via-orange-500 to-amber-500 bg-clip-text text-transparent">
                  Minutes
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Book verified technicians for plumbing, electrical, cleaning, AC repair, 
                painting, and more—all from one platform.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-lg h-14 px-10 rounded-xl font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all w-full sm:w-auto"
                asChild
              >
                <a href="/services">
                  Find a Service
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-lg h-14 px-8 rounded-xl font-semibold border-2 hover:bg-secondary w-full sm:w-auto"
                asChild
              >
                <a href="/become-technician">Become a Technician</a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 md:gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="flex text-2xl text-amber-500">★★★★☆</div>
                <div>
                  <div className="font-semibold text-lg leading-none">4.9</div>
                  <div className="text-sm text-muted-foreground">Average Rating</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Users className="h-9 w-9 text-primary" />
                <div>
                  <div className="font-semibold text-lg leading-none">500+</div>
                  <div className="text-sm text-muted-foreground">Verified Technicians</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <ShieldCheck className="h-9 w-9 text-emerald-500" />
                <div>
                  <div className="font-semibold text-lg leading-none">Secure</div>
                  <div className="text-sm text-muted-foreground">Payments</div>
                </div>
              </div>
            </div>
          </div>

          <HeroCard/>
        </div>
      </div>
    </section>
  );
}