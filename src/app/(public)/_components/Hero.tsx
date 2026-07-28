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






















// "use client";

// import { Search, MapPin, Bolt, Wrench, UserPlus } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// export default function HeroSection() {
//   return (
//     <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-zinc-950">
//       {/* Background Image */}
//       <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
//            style={{
//              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC2uxoDs1IMNrxtd4YXhnzXZRLX_2QvNDOR_zvlPZf10uqnBAianbDnz867StYGLvgo9IbPJAt5-MzqMEQHaLcP8BdBF36WDzpk5hKvp24qmFW_5gH1Wv48vIjRKsSdDeUvW570jV46nt6pYBsV6wmSrx8D7Si7JeYNiA1fGlp4LOFRyY7Vw27zg1bHVTPOpVNNZGu0DuqQMDa5Q4eGDuEfnvkPv66u-vFBB2KhEJ3OwBS5rwJt')`
//            }}>
//         <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 container max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="max-w-2xl text-white">
//           <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
//             Trusted Home Services<br />
//             <span className="text-[#ff7308] italic">Across Central Israel</span>
//           </h1>

//           <p className="text-lg text-zinc-300 max-w-lg mb-10">
//             From mounting to moving, book trusted locals who show up ready to help. 
//             Professional expertise at your fingertips.
//           </p>

//           {/* Search Form */}
//           <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-2 mb-10 max-w-xl">
//             <div className="flex flex-col md:flex-row gap-2">
//               <div className="flex-1 relative">
//                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
//                 <Input
//                   type="text"
//                   placeholder="Find anything you want"
//                   className="pl-12 h-14 bg-transparent border-0 text-white placeholder:text-zinc-400 focus-visible:ring-1 focus-visible:ring-[#ff7308]"
//                 />
//               </div>

//               <div className="hidden md:block w-px bg-white/20 self-center h-10" />

//               <div className="flex-1 relative">
//                 <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
//                 <Input
//                   type="text"
//                   placeholder="Location"
//                   defaultValue="Tel Aviv"
//                   className="pl-12 h-14 bg-transparent border-0 text-white placeholder:text-zinc-400 focus-visible:ring-1 focus-visible:ring-[#ff7308]"
//                 />
//               </div>

//               <Button
//                 size="lg"
//                 className="h-14 px-8 bg-[#ff7308] hover:bg-[#ff7308]/90 text-white font-semibold rounded-xl"
//               >
//                 <span>Search</span>
//               </Button>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex flex-wrap gap-4">
//             <Button
//               size="lg"
//               className="h-14 px-8 bg-[#ff7308] hover:bg-[#ff7308]/90 text-white font-semibold rounded-xl flex items-center gap-3"
//             >
//               <Wrench className="w-5 h-5" />
//               Find a Service
//               <Bolt className="w-5 h-5" />
//             </Button>

//             <Button
//               size="lg"
//               variant="outline"
//               className="h-14 px-8 border-white/30 text-white hover:bg-white/10 font-semibold rounded-xl flex items-center gap-3"
//             >
//               <UserPlus className="w-5 h-5" />
//               Become a Technician
//             </Button>
//           </div>

//           {/* Popular Industries */}
//           <div className="mt-16">
//             <p className="uppercase text-xs tracking-widest text-zinc-400 mb-6 font-medium">
//               POPULAR INDUSTRIES
//             </p>
            
//             <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
//               {[
//                 { icon: "🏠", label: "Flooring" },
//                 { icon: "🏠", label: "Roofing" },
//                 { icon: "🪟", label: "Windows" },
//                 { icon: "🧹", label: "Carpet" },
//                 { icon: "❄️", label: "AC Repair" },
//                 { icon: "🧼", label: "Cleaners" },
//                 { icon: "🔧", label: "Handyman" },
//                 { icon: "🚰", label: "Plumbing" },
//               ].map((item, i) => (
//                 <div key={i} className="flex flex-col items-center gap-3 group cursor-pointer">
//                   <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-2xl transition-all group-hover:bg-[#ff7308]/20 group-hover:border-[#ff7308]">
//                     {item.icon}
//                   </div>
//                   <span className="text-xs font-medium text-zinc-400 group-hover:text-white transition-colors">
//                     {item.label}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }









"use client";

import { 
  Search, 
  MapPin, 
  Wrench, 
  UserPlus, 
  Bolt,
  Hammer,
  Home,
  Paintbrush,
  Sofa,
  Fan,
  Droplet,
  Zap 
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Hero() {
  return (
    <section className=" min-h-[90vh] flex flex-col items-center pt-20 overflow-hidden bg-zinc-950">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC2uxoDs1IMNrxtd4YXhnzXZRLX_2QvNDOR_zvlPZf10uqnBAianbDnz867StYGLvgo9IbPJAt5-MzqMEQHaLcP8BdBF36WDzpk5hKvp24qmFW_5gH1Wv48vIjRKsSdDeUvW570jV46nt6pYBsV6wmSrx8D7Si7JeYNiA1fGlp4LOFRyY7Vw27zg1bHVTPOpVNNZGu0DuqQMDa5Q4eGDuEfnvkPv66u-vFBB2KhEJ3OwBS5rwJt')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
            Trusted Home Services<br />
            <span className="text-[#ff7308] italic">Across Central Israel</span>
          </h1>

          <p className="text-lg text-zinc-300 max-w-lg mb-10">
            From mounting to moving, book trusted locals who show up ready to help. 
            Professional expertise at your fingertips.
          </p>

          {/* Search Form */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-2 mb-10 max-w-xl">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Find anything you want"
                  className="pl-12 h-14 bg-transparent border-0 text-white placeholder:text-zinc-400 focus-visible:ring-1 focus-visible:ring-[#ff7308]"
                />
              </div>

              <div className="hidden md:block w-px bg-white/20 self-center h-10" />

              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Location"
                  defaultValue="Tel Aviv"
                  className="pl-12 h-14 bg-transparent border-0 text-white placeholder:text-zinc-400 focus-visible:ring-1 focus-visible:ring-[#ff7308]"
                />
              </div>

              <Button
                size="lg"
                className="h-14 px-8 bg-[#ff7308] hover:bg-[#ff7308]/90 text-white font-semibold rounded-xl"
              >
                Search
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="h-14 px-8 bg-[#ff7308] hover:bg-[#ff7308]/90 text-white font-semibold rounded-xl flex items-center gap-3"
            >
              <Wrench className="w-5 h-5" />
              Find a Service
              <Bolt className="w-5 h-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 border-white/30 hover:bg-white/10 text-white font-semibold rounded-xl flex items-center gap-3"
            >
              <UserPlus className="w-5 h-5" />
              Become a Technician
            </Button>
          </div>
        </div>
      </div>

      {/* Popular Industries - Responsive & Full Width on Desktop */}
      <div className=" z-10 w-full mt-auto pb-12 pt-16 lg:pt-20">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <p className="uppercase text-xs tracking-[2px] text-zinc-400 mb-6 font-medium text-center lg:text-left">
            POPULAR INDUSTRIES
          </p>

          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-6 md:gap-8">
            {[
              { icon: Hammer, label: "Flooring" },
              { icon: Home, label: "Roofing" },
              { icon: Paintbrush, label: "Windows" },
              { icon: Sofa, label: "Carpet" },
              { icon: Fan, label: "AC Repair" },
              { icon: Droplet, label: "Cleaning" },
              { icon: Wrench, label: "Handyman" },
              { icon: Droplet, label: "Plumbing" },
            ].map((item, i) => (
              <div 
                key={i} 
                className="flex flex-col items-center gap-3 group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-[#ff7308]/20 group-hover:border-[#ff7308] group-hover:scale-110">
                  <item.icon className="w-8 h-8 text-white group-hover:text-[#ff7308] transition-colors" />
                </div>
                <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors text-center">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}