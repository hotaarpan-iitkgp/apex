import { 
  BookOpen, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Users, 
  FileText, 
  Lightbulb, 
  Globe, 
  Mail, 
  Linkedin, 
  ExternalLink,
  Home,
  Cpu,
  Zap,
  Battery,
  Grid
} from 'lucide-react';
import profilePhoto from '@/assets/Arpan_hota.png';

export const profile = {
  name: "Arpan Hota",
  title: "Assistant Professor - Grade II",
  department: "Department of Electrical Engineering",
  institution: "IIT Kharagpur",
  location: "Kharagpur, West Bengal, India",
  email: "arpan@ee.iitkgp.ac.in",
  linkedin: "https://linkedin.com/in/arpanhota",
  scholar: "https://scholar.google.com/citations?user=placeholder", // Placeholder
  website: "https://sites.google.com/view/arpan-hota",
  cvLink: "/cv.pdf", // Placeholder
  iitkgpHeroImage: "https://upload.wikimedia.org/wikipedia/commons/d/df/IIT_Kharagpur_Main_Building.JPG",
  iitkgpHeroImageSecondary: "https://upload.wikimedia.org/wikipedia/commons/7/79/Indian_Institute_of_Kharagpur_Main_Building.jpg",
  profileImage: profilePhoto,
  bio: "I am an Assistant Professor in the Department of Electrical Engineering at IIT Kharagpur. My research interests include Multilevel Inverters, Electric Vehicles, PWM techniques, and Dual Active Bridge Converters. I have industry experience as a Senior Design Engineer at Schneider Electric and Senior Engineer at FEV India.",
  shortBio: "Assistant Professor at IIT Kharagpur specializing in Power Electronics, EV Powertrains, and Multilevel Inverters.",
  stats: {
    journalPapers: 15,
    confPapers: 15,
    patents: 4,
    grants: 2
  }
};

export const flagshipFrontiers = [
  {
    id: "ai-power-design",
    title: "AI-Based Power Electronics Design & Simulation",
    tagline: "Autonomous Converter Engineering & Neural Surrogates",
    badge: "AI & Physics Integration",
    summary: "Leveraging machine learning models and AI agents, for accelerating converter design cycles from months to hours, from weeks to seconds.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
    highlights: [
      "Generative converter topology synthesis with automated switch reduction",
      "Agentic AI approach to Simulation and Design for power converters",
      "Reinforcement learning for adaptive PWM pulse placement & harmonic elimination",
      "Physics-Informed Digital Twins for real-time thermal state estimation in EV drives"
    ],
    stats: "18,500x Faster Design Cycles"
  },
  {
    id: "multiport-multilevel",
    title: "Multiport Multilevel Inverter Topologies",
    tagline: "Integrated Multi-Source Energy Architectures",
    badge: "Renewable & EV Microgrids",
    summary: "Developing novel compact multi-input multi-output multilevel inverter topologies that integrate solar PV, battery storage, and fuel cells with reduced switch counts, self-voltage balancing, and ultra-high power conversion efficiency.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200",
    highlights: [
      "Reduced component count multilevel inverter modules",
      "Single-stage multi-port bidirectional energy routing between PV, Battery & Grid",
      "Special Space Vector PWM techniques for THD and CMV reduction",
      "Fault-tolerant reconfigurable operation under semiconductor switch breakdown"
    ],
    stats: "Up to 50% Component Reduction"
  },
  {
    id: "high-freq-converters",
    title: "High-Frequency Wide-Bandgap (SiC/GaN) DC-DC-AC Converters",
    tagline: "Wide-Bandgap Ultra-Dense Power Densities",
    badge: "GaN/SiC Semiconductors",
    summary: "Designing sub-megahertz soft-switched (ZVS/ZCS) resonant converters, Dual Active Bridges (DAB), and integrated DC-DC-AC converters achieving unprecedented volumetric power density for electrified transport, data centers, and superchargers.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    highlights: [
      "Wide-bandgap SiC & GaN gate drive optimization up to 500 kHz fsw",
      "Zero-Voltage-Switching (ZVS) bidirectional Dual Active Bridge (DAB) DC-DC stages",
      "Integrated DC-DC and DC-AC converters: single stage and semi two stage conversion",
      "Active thermal management for high kW/L volumetric power density"
    ],
    stats: "500 kHz Switching & 99%+ Eff."
  },/*
  {
    id: "zero-cmv-inverters",
    title: "Zero CMV Inverters for Drives & Solar PV",
    tagline: "Mitigating Bearing Currents & Leakage in EV & Solar PV",
    badge: "EMI & Motor Reliability",
    summary: "Creating advanced vector modulation and inverter topologies that completely eliminate or minimize Common Mode Voltage (CMV), preventing premature bearing failures in high-speed EV traction motors and eliminating leakage currents in transformerless PV grids.",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&q=80&w=1200",
    highlights: [
      "H8/ANPC Zero-CMV inverter topologies for high-speed EV powertrain traction",
      "Complete suppression of bearing capacitive currents and shaft voltage stress",
      "Ground leakage current mitigation (<10mA) in transformerless solar PV systems",
      "Active common-mode EMI filtering with minimal passive component footprint"
    ],
    stats: "100% Motor Bearing Protection"
  },
  {
    id: "pwm-modulation",
    title: "Advanced PWM & Space Vector Modulation",
    tagline: "Harmonic Elimination & Real-Time DSP Pulse Control",
    badge: "DSP & Predictive Control",
    summary: "Pioneering space vector modulation (SVM), selective harmonic elimination (SHE-PWM), and model predictive control (MPC) algorithms implemented on TMS320F28379D DSP & FPGA platforms for ultra-low distortion power conversion.",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=1200",
    highlights: [
      "Sub-microsecond FPGA pulse generation with minimal dead-time distortion",
      "Selective harmonic elimination (SHE-PWM) up to 49th order harmonics",
      "Model predictive current control for 3-phase Voltage Source Inverters",
      "Dynamic dv/dt transition reduction preventing insulation breakdown"
    ],
    stats: "THD < 1.5% & Low Switching Loss"
  },
  {
    id: "ev-powertrain",
    title: "EV Powertrain & Battery Management Systems",
    tagline: "High-Efficiency Traction Drives & Active Battery Balancing",
    badge: "e-Mobility & Traction",
    summary: "Developing e-powertrain architectures, switched reluctance motor (SRM) drives, wide-bandgap traction inverters, and fast battery cell-balancing circuits for urban and heavy-duty electric vehicles.",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1200",
    highlights: [
      "100 kW wide-bandgap SiC EV traction drive testbench",
      "Switched Reluctance Motor (SRM) dynamic torque ripple control",
      "Active cell-to-cell switched-capacitor battery precharging & balancing",
      "Unified bidirectional onboard fast charger (OBC) integration"
    ],
    stats: "98.5%+ Peak Traction Efficiency"
  }*/
];

export const apexLab = {
  name: "APEX Lab",
  fullName: "Advanced Power Electronics & eXcellence Laboratory",
  tagline: "Pioneering Next-Generation Power Converters, Wide-Bandgap Semiconductor Applications, and AI-Driven Circuit Optimization",
  institution: "IIT Kharagpur",
  department: "Department of Electrical Engineering",
  description: "The APEX Lab at IIT Kharagpur bridges cutting-edge power semiconductor physics, advanced digital control, and AI-driven automated converter design. We develop ultra-dense, highly efficient power conversion architectures for Electric Transportation, Smart Grids, and Industrial Automation.",
  image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200",
  aiResearchImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
  testbenchImage: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&q=80&w=1200",
  stats: {
    testbenches: "5+ Custom Hardware Benches",
    hilPlatforms: "Typhoon HIL & OPAL-RT",
    powerRating: "Up to 100 kW",
    switchingFreq: "Up to 500 kHz (GaN/SiC)"
  },
  capabilities: [
    {
      title: "Wide-Bandgap (SiC/GaN) Testbed",
      desc: "Double-pulse test setups and high-frequency gate drive characterization up to 500 kHz."
    },
    {
      title: "Real-Time Hardware-in-the-Loop (HIL)",
      desc: "Typhoon HIL and OPAL-RT real-time digital controllers for rapid power converter validation."
    },
    {
      title: "AI Power Electronics Design Station",
      desc: "GPU-accelerated workstation for generative topology synthesis and ML surrogate loss modeling."
    },
    {
      title: "EV Traction & Battery Emulator Bench",
      desc: "100 kW dynamic load bank and active battery balancing test bench for electric motor drives."
    }
  ],
  aiResearchDetails: {
    title: "AI-Based Power Electronics Design & Simulation",
    subtitle: "Merging Artificial Intelligence with Power Semiconductor Physics for Autonomous Converter Engineering",
    summary: "Traditional power electronics design relies on iterative manual tuning, FEA magnetics simulation, and trial-and-error thermal testing. Our research leverages machine learning surrogate models, physics-informed neural networks (PINNs), and deep reinforcement learning to revolutionize converter design cycles.",
    highlights: [
      {
        topic: "Automated Topology Synthesis",
        detail: "Generative AI algorithms that synthesize minimal-component inverter topologies for given voltage and harmonic targets."
      },
      {
        topic: "ML Loss & EMI Surrogate Models",
        detail: "Ultra-fast neural network models predicting magnetic core loss, switching loss, and radiated EMI in sub-milliseconds instead of hours."
      },
      {
        topic: "AI-Driven Adaptive PWM Control",
        detail: "Reinforcement learning agents that adaptively modify modulation pulses to eliminate Common Mode Voltage (CMV) and minimize THD dynamically."
      },
      {
        topic: "Physics-Informed Digital Twins",
        detail: "Real-time thermal and electrical digital twins for health monitoring, predictive maintenance, and lifetime estimation in EV traction drives."
      }
    ]
  }
};

export const researchAreas = [
  {
    title: "AI-Based Power Electronics Design & Simulation",
    description: "Automated converter topology synthesis, neural network surrogate models for thermal & magnetic loss, and AI-driven optimal PWM generation.",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
    contributions: [
      "Generative topology synthesis for reduced component count converters.",
      "Fast neural surrogate modeling replacing computationally heavy FEA simulations."
    ]
  },
  {
    title: "Multilevel Inverter Topologies",
    description: "Development of novel multilevel inverter configurations for medium voltage drives and grid integration.",
    icon: Grid,
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200",
    contributions: [
      "Developed H8, H10, and T-Structured inverter topologies.",
      "Reduced switch count configurations for cost-effective solutions."
    ]
  },
  {
    title: "PWM and Modulation Techniques",
    description: "Advanced modulation strategies to improve power quality and efficiency.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=1200",
    contributions: [
      "Optimized PWM for common mode voltage elimination.",
      "Predictive control strategies for voltage source inverters."
    ]
  },
  {
    title: "Common Mode Voltage Elimination",
    description: "Techniques to mitigate common mode voltage in inverter-fed drives to enhance reliability.",
    icon: ActivityIcon,
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&q=80&w=1200",
    contributions: [
      "Zero common mode voltage topologies.",
      "Reduced dv/dt and peak-to-peak CMV."
    ]
  },
  {
    title: "Electric Vehicle Powertrain",
    description: "Power electronics solutions for EV traction and battery management.",
    icon: Battery,
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1200",
    contributions: [
      "Integrated active pre-charge and cell balancing.",
      "Switched reluctance motor drives for EVs."
    ]
  },
  {
    title: "Dual Active Bridge Converters",
    description: "High-efficiency isolated DC-DC converters for energy storage and smart grid applications.",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    contributions: [
      "Integrated H3/3 DAB converter for single-stage conversion.",
      "Voltage doubler interfacing for low voltage batteries."
    ]
  }
];

function ActivityIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  )
}

export const education = [
  {
    degree: "PhD in Electrical Engineering",
    institution: "Indian Institute of Technology Bombay",
    location: "Mumbai, India",
    year: "2016 - 2022",
    details: "Specialization in Power Electronics. Tata Fellowship recipient."
  },
  {
    degree: "M.Tech in Power Electronics and Drives",
    institution: "National Institute of Technology Warangal",
    location: "Warangal, India",
    year: "2014 - 2016",
    details: "Secured First Class with Distinction. Engineer Infinite First Prize winner."
  },
  {
    degree: "B.E. in Electrical Engineering",
    institution: "Jadavpur University",
    location: "Kolkata, India",
    year: "2009 - 2013",
    details: ""
  }
];

export const experience = [
  {
    role: "Assistant Professor - Grade II",
    institution: "IIT Kharagpur",
    location: "Kharagpur, India",
    year: "2025 - Present",
    details: "Department of Electrical Engineering. Research in Multilevel inverters, Electric Vehicles, PWM techniques."
  },
  {
    role: "Senior Design Engineer - Power Electronics",
    institution: "Schneider Electric",
    location: "Bengaluru, India",
    year: "2024 - 2025",
    details: "Three Phase Dual active bridge, Control board design, controller design, model based development."
  },
  {
    role: "Senior Engineer",
    institution: "FEV India Pvt Ltd",
    location: "Pune, India",
    year: "2021 - 2024",
    details: "Vehicle System Engineering, BEV e-powertrain architecture, BMS development."
  }
];

export const publications = {
  journals: [
    {
      title: "Reduction of Common Mode Voltage Transitions in Two-Level Voltage Source Inverters using Predictive Control and H10 Inverter Topology",
      authors: "Amit Kumar Singh, Arpan Hota, Sonti Venu, and Sachin Jain",
      journal: "IEEE Transactions on Industry Applications",
      year: 2026,
      doi: "62(3): 4024-4035"
    },
    {
      title: "An Optimized Half Bridge Type Single-Phase 5-level Switched Capacitor Inverter with Charging State Availability in Each Switching Period",
      authors: "Amit Kumar Singh, Arpan Hota, V. Sonti, Sachin Jain, Y. P. Siwakoti, and Vivek Agarwal",
      journal: "IEEE Transactions on Consumer Electronics",
      year: 2026,
      doi: "10.1109/TCE.2026.3688233"
    },
    {
      title: "A Novel Leg-Integrated Switched Capacitor Inverter Topology for Three-Phase Induction Motor Drives",
      authors: "Hota, Arpan, and Vivek Agarwal",
      journal: "IEEE Transactions on Industrial Electronics",
      year: 2024,
      doi: "71(5): 4353-4360"
    },
    {
      title: "Improved Dual Boost Mid-Point Clamped Five-Level Inverter Topology",
      authors: "Jagabar Sathik, M, N. Gopinath, Arpan Hota, Vijayakumar K, Saad Mekhilef, and Vivek Agarwal",
      journal: "IEEE Transactions on Circuits and Systems II: Express Briefs",
      year: 2024,
      doi: "71(6): 3221-3225"
    },
    {
      title: "A New H8 Inverter Topology With Low Common Mode Voltage and Phase Current THD for 3-φ Induction Motor Drive Applications",
      authors: "Hota, Arpan, and Vivek Agarwal",
      journal: "IEEE Transactions on Industry Applications",
      year: 2022,
      doi: "58(5): 6245-6252"
    },
    {
      title: "A Novel Switched Capacitor Precharging Method for Three-Phase Induction Motor Drive Applications Utilizing the Winding Inductance",
      authors: "Hota, Arpan, and Vivek Agarwal",
      journal: "IEEE Transactions on Industry Applications",
      year: 2022,
      doi: "58(5): 6237-6244"
    },
    {
      title: "Novel Switched Capacitor Quadruple-Boost Inverter Configuration for 3φ Induction Motor Drive",
      authors: "Hota, Arpan, and Vivek Agarwal",
      journal: "IEEE Journal of Emerging and Selected Topics in Power Electronics",
      year: 2022,
      doi: "10(5): 6093-6100"
    },
    {
      title: "Novel Three-Phase H10 Inverter Topology With Zero or Constant Common-Mode Voltage for Three-Phase Induction Motor Drive Applications",
      authors: "Hota, Arpan, and Vivek Agarwal",
      journal: "IEEE Transactions on Industrial Electronics",
      year: 2022,
      doi: "69(7): 7522-7525"
    },
    {
      title: "A Single-Stage Common Ground-Type Transformerless Five-Level Inverter Topology",
      authors: "JSM Ali, Arpan Hota, N. Sandeep, and Dhafer J. Almakhles",
      journal: "IEEE Journal of Emerging and Selected Topics in Power Electronics",
      year: 2022,
      doi: "10(1): 837-845"
    },
    {
      title: "Compact Quadratic Boost Switched-Capacitor Inverter",
      authors: "Sathik, Mohamed AliJagabar, Marif Daula Siddique, N. Sandeep, Arpan Hota, Dhafer Almakhles, Saad Mekhilef, and Udaykumar R Yaragatti",
      journal: "IEEE Transactions on Industry Applications",
      year: 2022,
      doi: "58(4): 4923-4931"
    },
    {
      title: "A New Three-Phase Inverter Topology for Reducing the dv/dt and Peak-to-Peak Value of Common Mode Voltage",
      authors: "Hota, Arpan, and Vivek Agarwal",
      journal: "IEEE Transactions on Industrial Electronics",
      year: 2022,
      doi: "69(12): 11979-11986"
    },
    {
      title: "A Transformerless 1-φ, 5-Level Half-Bridge PV Inverter Configuration Based on Switched-Capacitor Technique",
      authors: "Dhara, Sumon, Arpan Hota, Sachin Jain, and Vivek Agarwal",
      journal: "IEEE Transactions on Industry Applications",
      year: 2021,
      doi: "57(2): 1619-1628"
    },
    {
      title: "Novel Switched Capacitor Boost Inverter Configuration for Three-Phase Induction Motor Driven Home Appliances",
      authors: "Hota, Arpan, Mohammad M. Qasim, James L. Kirtley, and Vivek Agarwal",
      journal: "IEEE Transactions on Industry Applications",
      year: 2021,
      doi: "57(2): 1450-1458"
    },
    {
      title: "A New Family of 1-φ Five-Level Transformerless Inverters for Solar PV Applications",
      authors: "Bharath, G Veera, Arpan Hota, and Vivek Agarwal",
      journal: "IEEE Transactions on Industry Applications",
      year: 2020,
      doi: "56(1): 561-569"
    },
    {
      title: "An Improved Three-Phase Five-Level Inverter Topology With Reduced Number of Switching Power Devices",
      authors: "Arpan Hota, Sachin Jain, and Vivek Agarwal",
      journal: "IEEE Transactions on Industrial Electronics",
      year: 2018,
      doi: "65(4): 3296-3305"
    },
    {
      title: "A Modified T-Structured Three-Level Inverter Configuration Optimized With Respect to PWM Strategy Used for Common-Mode Voltage Elimination",
      authors: "Arpan Hota, Sachin Jain, and Vivek Agarwal",
      journal: "IEEE Transactions on Industry Applications",
      year: 2017,
      doi: "53(5): 4779-4787"
    },
    {
      title: "An Optimized Three-Phase Multilevel Inverter Topology With Separate Level and Phase Sequence Generation Part",
      authors: "Arpan Hota, Sachin Jain, and Vivek Agarwal",
      journal: "IEEE Transactions on Power Electronics",
      year: 2017,
      doi: "32(10): 7414-7418"
    }
  ],
  conferences: [
    {
      title: "Digital Hysteretic Burst Mode Light Load Control With Phase Shedding For Input-Series Output-Parallel Dual Active Bridge Converter",
      authors: "Faraz Ahmad, Santanu Kapat, and Arpan Hota",
      conference: "2026 IEEE Transportation Electrification Conference & Expo (ITEC) & Electric Aircraft Technologies Symposium (EATS) (ITEC+EATS)",
      year: 2026,
      location: "Novi, MI, USA"
    },
    {
      title: "A Novel Three-Phase Three-Level Transformerless Inverter with Reduced Components and Single-Source Voltage Boosting Capability",
      authors: "Amit Kumar Singh, Arpan Hota, Sonti Venu, and Sachin Jain",
      conference: "2026 Fifth International Conference on Power, Control and Computing Technologies (ICPC2T)",
      year: 2026,
      location: "Raipur, India"
    },
    {
      title: "Single-Stage High Boost Five-Level ANPC Inverter with Low Device Count",
      authors: "G. N. P., J. S. M., S. N., and Arpan Hota",
      conference: "2025 IEEE 5th International Conference on Sustainable Energy and Future Electric Transportation (SEFET)",
      year: 2025,
      location: "Jaipur, India"
    },
    {
      title: "A Novel DC-DC-AC Converter Based on a Dual Active Bridge Integrated Switched Capacitor Voltage Doubler Interfacing Low Voltage Battery",
      authors: "Shyamlal Kumawat, Faraz Ahmed, Arpan Hota, and Santanu Kapat",
      conference: "2025 12th National Power Electronics Conference (NPEC)",
      year: 2025,
      location: "Kozhikode, India"
    },
    {
      title: "Improved Boost Type-ANPC 5L Inverter Topology",
      authors: "J. S. Mohamed Ali, Arpan Hota, V. K. Ramachandaramurthy, M. L. Alghaythi, Saad Mekhilef, and Vivek Agarwal",
      conference: "2024 IEEE International Conference on Power Electronics, Drives and Energy Systems (PEDES)",
      year: 2024,
      location: "Mangalore, India"
    },
    {
      title: "A New Three-Phase Three-Level Inverter Obtained From Two-Level Inverter By Considering the Effect of Device Junction Capacitance Across the Switch",
      authors: "S. D. Ratrey, Arpan Hota, V. Sonti, and Sachin Jain",
      conference: "2023 IEEE 3rd International Conference on Sustainable Energy and Future Electric Transportation (SEFET)",
      year: 2023,
      location: "Bhubaneswar, India"
    },
    {
      title: "A Modified 2-level Three-Phase Inverter Topology with Common Mode Voltage Performance of a 3-level Inverter",
      authors: "Arpan Hota and Vivek Agarwal",
      conference: "2021 International Conference on Sustainable Energy and Future Electric Transportation (SEFET)",
      year: 2021,
      location: "Hyderabad, India"
    },
    {
      title: "A Novel Single-Phase Switched-Capacitor Based 5-level Inverter Topology Featuring Voltage Boosting Capability and Common Mode Voltage Reduction",
      authors: "Arpan Hota, V. Sonti, Sachin Jain, and Vivek Agarwal",
      conference: "2021 International Conference on Sustainable Energy and Future Electric Transportation (SEFET)",
      year: 2021,
      location: "Hyderabad, India"
    },
    {
      title: "A New Single-Phase Five-Level Neutral Point Clamped Cascaded Multilevel Inverter for Minimization of Leakage Current in PV Systems",
      authors: "A. Chaudhury, V. Sonti, Arpan Hota, A. R. Saxena, and Sachin Jain",
      conference: "2021 International Conference on Sustainable Energy and Future Electric Transportation (SEFET)",
      year: 2021,
      location: "Hyderabad, India"
    },
    {
      title: "Common Mode Voltage Elimination in Single-Phase Multilevel Inverter using a 3rd Leg",
      authors: "Arpan Hota, V. Sonti, Sachin Jain, and Vivek Agarwal",
      conference: "2021 International Conference on Sustainable Energy and Future Electric Transportation (SEFET)",
      year: 2021,
      location: "Hyderabad, India"
    },
    {
      title: "A Novel Single-Phase Switched-Capacitor Transformer-less 5-level Inverter Topology with Voltage Boosting",
      authors: "Arpan Hota, V. Sonti, Sachin Jain, and Vivek Agarwal",
      conference: "2021 International Conference on Sustainable Energy and Future Electric Transportation (SEFET)",
      year: 2021,
      location: "Hyderabad, India"
    },
    {
      title: "A Novel Three Phase Induction Motor Drive for Ceiling Fan Application with Improved Dc-link Utilization",
      authors: "Arpan Hota and Vivek Agarwal",
      conference: "2021 International Conference on Sustainable Energy and Future Electric Transportation (SEFET)",
      year: 2021,
      location: "Hyderabad, India"
    },
    {
      title: "Novel Pre-charging Method for a Switched Capacitor Voltage Boosted Three-Phase Induction Motor Drive",
      authors: "Arpan Hota and Vivek Agarwal",
      conference: "2020 IEEE International Conference on Power Electronics, Drives and Energy Systems (PEDES)",
      year: 2020,
      location: "Jaipur, India"
    },
    {
      title: "A Novel Single-Phase Five-Level Transformerless H9 Inverter with Voltage Boosting Capability",
      authors: "G. Veera Bharath, Arpan Hota, and Vivek Agarwal",
      conference: "2020 IEEE International Conference on Power Electronics, Drives and Energy Systems (PEDES)",
      year: 2020,
      location: "Jaipur, India"
    },
    {
      title: "A Novel Three-Phase Induction Motor Drive with Voltage Boosting Capability, Low Current THD and Low Common Mode Voltage",
      authors: "Arpan Hota and Vivek Agarwal",
      conference: "2020 IEEE International Conference on Power Electronics, Drives and Energy Systems (PEDES)",
      year: 2020,
      location: "Jaipur, India"
    },
    {
      title: "A Reduced Switch Count Boost Inverter (RSC- BI) Topology with Triple Voltage Gain",
      authors: "Marif Daula Siddique, Arpan Hota, et al.",
      conference: "2020 IEEE International Conference on Power Electronics, Drives and Energy Systems (PEDES)",
      year: 2020,
      location: "Jaipur, India"
    },
    {
      title: "A Novel Switched Capacitor 4-level Single-Phase Inverter with Voltage Boosting and Common Ground",
      authors: "A. Chaurasia and Arpan Hota",
      conference: "2020 IEEE International Conference on Power Electronics, Drives and Energy Systems (PEDES)",
      year: 2020,
      location: "Jaipur, India"
    },
    {
      title: "Performance analysis of Closed Loop Hysteresis Control of a PV based 8/6 Pole and 10/8 Pole Switched Reluctance Motor for EV Application",
      authors: "S. V. S. P. Kumar Ch., Sachin Jain, Arpan Hota, and V. Sonti",
      conference: "2020 IEEE International Conference on Power Electronics, Drives and Energy Systems (PEDES)",
      year: 2020,
      location: "Jaipur, India"
    },
    {
      title: "Novel Boost Inverter Configuration and 3-φ Induction Motor Drive for Home Appliances",
      authors: "Arpan Hota, Mohammad M. Qasim, James L. Kirtley, and Vivek Agarwal",
      conference: "2019 Innovations in Power and Advanced Computing Technologies (i-PACT)",
      year: 2019,
      location: "Vellore, India"
    },
    {
      title: "A Low Cost Electrolytic Capacitor-less Induction Motor Drive Based on a Novel Open Loop Model Predictive Control Strategy",
      authors: "Arpan Hota, Mohammad M. Qasim, James L. Kirtley, and Vivek Agarwal",
      conference: "2019 Innovations in Power and Advanced Computing Technologies (i-PACT)",
      year: 2019,
      location: "Vellore, India"
    },
    {
      title: "A Novel Single-Phase T-Type PV Inverter with Improved DC Utilization",
      authors: "Sumon Dhara, Arpan Hota, Sachin Jain, and Vivek Agarwal",
      conference: "2018 IEEE International Conference on Power Electronics, Drives and Energy Systems (PEDES)",
      year: 2018,
      location: "Chennai, India"
    },
    {
      title: "A novel switched-capacitor based single-phase five-level transformerless inverter",
      authors: "G. Veera Bharath, Arpan Hota, and Vivek Agarwal",
      conference: "2018 International Conference on Power, Instrumentation, Control and Computing (PICC)",
      year: 2018,
      location: "Thrissur, India"
    },
    {
      title: "A Novel Three-Phase Induction Motor Drive for Domestic Fan Application with Improved Reliability",
      authors: "Arpan Hota, Mohammad M. Qasim, James L. Kirtley, and Vivek Agarwal",
      conference: "2018 IEEE International Conference on Power Electronics, Drives and Energy Systems (PEDES)",
      year: 2018,
      location: "Chennai, India"
    },
    {
      title: "A Novel 1-ϕ, 5-level transformerless inverter with voltage boosting capability",
      authors: "G. Veera Bharath, Arpan Hota, and Vivek Agarwal",
      conference: "2017 National Power Electronics Conference (NPEC)",
      year: 2017,
      location: "Pune, India"
    },
    {
      title: "A new three phase multilevel inverter topology with reduced number of switches with Common Mode Voltage elimination",
      authors: "Arpan Hota and Sachin Jain",
      conference: "2016 IEEE 1st International Conference on Power Electronics, Intelligent Control and Energy Systems (ICPEICES)",
      year: 2016,
      location: "Delhi, India"
    },
    {
      title: "An optimized dual inverter configuration for open end winding induction motor drive with Common Mode Voltage elimination",
      authors: "R. Chandan, Arpan Hota, Sachin Jain, and Vivek Agarwal",
      conference: "2016 IEEE International Conference on Power Electronics, Drives and Energy Systems (PEDES)",
      year: 2016,
      location: "Trivandrum, India"
    },
    {
      title: "A new three phase multilevel inverter with reduced number of switching power devices with Common Mode Voltage elimination",
      authors: "Arpan Hota, Sachin Jain, J. I. Leon, and L. G. Franquelo",
      conference: "2016 IEEE Students' Conference on Electrical, Electronics and Computer Science (SCEECS)",
      year: 2016,
      location: "Bhopal, India"
    }
  ]
};

export const projects = {
  sponsored: [
    {
      title: "A novel low cost multi-port multilevel inverter configuration optimized with respect to modulation index of operation",
      agency: "ANRF/PMECRG",
      role: "Principal Investigator (PI)",
      status: "Ongoing"
    },
    {
      title: "Low cost three-phase inverter with zero common mode voltage",
      agency: "SRIC/FSRG",
      role: "Principal Investigator (PI)",
      status: "Ongoing"
    }
  ],
  consultancy: [
    {
      title: "Failure Analysis and Recommendations for Design Improvement of A Multi-Output Switched Mode Power Supply",
      agency: "RVNL",
      role: "Principal Investigator (PI)",
      status: "Completed"
    },
    {
      title: "Optimization and Enhancement of AI-Driven Automated Power Electronics Design and Simulation Tool",
      agency: "Tailorflow AI",
      role: "Principal Investigator (PI)",
      status: "Ongoing"
    }
  ]
};

export interface PedagogicalApp {
  id: string;
  title: string;
  shortTitle: string;
  tagline: string;
  url: string;
  category: string;
  badge: string;
  description: string;
  concepts: string[];
  keyFeatures: string[];
  suggestedCourses: string[];
  color: string;
}

export const pedagogicalApps: PedagogicalApp[] = [
  {
    id: "power-factor",
    title: "Power Factor & Reactive Power Interactive Lab",
    shortTitle: "Power Factor Lab",
    tagline: "Real-time AC power triangle, phasor dynamics & power factor correction visualization",
    url: "https://hotaarpan-iitkgp.github.io/Power-factor/",
    category: "AC Circuits & Power Systems",
    badge: "Interactive AC Sim",
    description: "An interactive pedagogical tool for visualizing real power (P), reactive power (Q), apparent power (S), and power factor under varying resistive, inductive, and capacitive loads. Demonstrates real-time capacitor bank compensation and phasor displacement.",
    concepts: [
      "Real, Reactive & Apparent Power (P, Q, S)",
      "Phasor Angle (cos φ) & Phase Displacement",
      "Power Factor Correction (PFC) via Shunt Capacitors",
      "Lagging vs. Leading Current Dynamics"
    ],
    keyFeatures: [
      "Live adjustable load sliders for R, L, C components",
      "Real-time synchronized phasor diagram & time-domain waveform generator",
      "Automatic capacitor bank rating calculation for target power factor",
      "Interactive power triangle visualization"
    ],
    suggestedCourses: ["EE101", "EE31011", "Basic Electrical Technology"],
    color: "from-blue-600 to-indigo-700"
  },
  {
    id: "vismmf",
    title: "VisMMF — Magnetomotive Force in Electrical Machines",
    shortTitle: "VisMMF Machine Tool",
    tagline: "Rotating magnetic field (RMF) evolution & spatial MMF distribution in AC machines",
    url: "https://hotaarpan-iitkgp.github.io/VisMMF/",
    category: "Electrical Machines",
    badge: "RMF & Space Harmonics",
    description: "Designed to illustrate how discrete, distributed stator windings generate stepped MMF waveforms and synthesize a continuous rotating magnetic field (RMF) in synchronous and induction machines, highlighting fundamental and spatial harmonic distributions.",
    concepts: [
      "Stator Winding Distribution & Phase Bands",
      "Stepped MMF Waveform Synthesis",
      "Rotating Magnetic Field (RMF) Vector Locus",
      "Spatial Harmonics & Pitch/Distribution Factors"
    ],
    keyFeatures: [
      "Interactive slot-by-slot winding configuration",
      "Dynamic 2D air-gap cross-section and rotating vector animation",
      "Fourier harmonic spectrum breakdown of spatial MMF",
      "Step-by-step 3-phase excitation progression"
    ],
    suggestedCourses: ["EE234 (Electrical Machines)", "EE60208"],
    color: "from-amber-600 to-orange-700"
  },
  {
    id: "rectifier-lab",
    title: "Rectifier Lab — Power Electronics Circuit Simulator",
    shortTitle: "Rectifier Lab",
    tagline: "Uncontrolled & controlled 1-phase / 3-phase converter topologies with filter synthesis",
    url: "https://hotaarpan-iitkgp.github.io/Rectfier-lab/",
    category: "Power Electronics",
    badge: "AC-DC Converter Sim",
    description: "A comprehensive virtual laboratory for investigating single-phase and three-phase uncontrolled (diode) and controlled (thyristor/SCR) AC-to-DC converters. Allows real-time analysis of conduction angles, firing delays (α), load currents (R-L-E), ripple factor, and harmonic distortion.",
    concepts: [
      "1-Phase & 3-Phase Half-Wave and Full-Bridge Topologies",
      "SCR Firing Angle (α) & Commutation Dynamics",
      "Continuous vs. Discontinuous Conduction Modes (CCM/DCM)",
      "Output Voltage Ripple & Input THD Analysis"
    ],
    keyFeatures: [
      "Seamless switching across 6+ rectifier configurations",
      "Interactive slider controls for firing angle α and load parameters (R, L, Back-EMF)",
      "Instantaneous voltage/current waveform plotting with harmonic analysis",
      "Freewheeling diode (FWD) impact demonstrator"
    ],
    suggestedCourses: ["EE31011 (Power Electronics)", "EE39006 (PE Lab)"],
    color: "from-emerald-600 to-teal-700"
  },
  {
    id: "dc-dc-converters",
    title: "DC-DC Converters Interactive Simulation Suite",
    shortTitle: "DC-DC Converters",
    tagline: "Buck, Boost, and Buck-Boost switch-mode power conversion dynamics & CCM/DCM boundaries",
    url: "https://hotaarpan-iitkgp.github.io/DC-DC-Converters/",
    category: "Power Electronics & SMPS",
    badge: "Switched-Mode Sim",
    description: "An intuitive simulation sandbox exploring fundamental switch-mode DC-DC converters (Buck, Boost, Buck-Boost). Students can interactively modulate switching frequency, duty cycle, inductance, and capacitance to examine inductor volt-second balance and capacitor charge balance.",
    concepts: [
      "Inductor Volt-Second Balance & Capacitor Charge Balance",
      "Continuous vs. Discontinuous Conduction Mode (CCM/DCM)",
      "Duty Cycle (D) & Voltage Gain Relationships",
      "Component Sizing for Peak-to-Peak Ripple Tolerances"
    ],
    keyFeatures: [
      "Topological toggling between Buck, Boost, and Buck-Boost topologies",
      "Real-time duty cycle (D), switching frequency (fs), and load variation",
      "Inductor current $i_L(t)$ and output voltage $v_o(t)$ waveform tracking",
      "Critical inductance boundary calculation for CCM/DCM transitions"
    ],
    suggestedCourses: ["EE31011", "EE39006", "EE60208"],
    color: "from-cyan-600 to-blue-700"
  },
  {
    id: "emanimate",
    title: "EManimate — Electromagnetics & Field Dynamics Animator",
    shortTitle: "EManimate Fields",
    tagline: "Interactive 2D/3D electromagnetic wave propagation, boundary conditions & field visualization",
    url: "https://hotaarpan-iitkgp.github.io/EManimate/",
    category: "Electromagnetic Fields",
    badge: "Wave & Vector Fields",
    description: "An animated visualizer for electromagnetic theory, illustrating plane wave propagation, electric (E) and magnetic (H) field vector orthography, Poynting vectors, polarization types, and reflection/transmission across dielectric boundaries.",
    concepts: [
      "Plane Electromagnetic Wave Propagation & Wavelength",
      "Orthogonal E-Field and H-Field Vector Interaction",
      "Linear, Circular, and Elliptical Polarization",
      "Poynting Vector & Electromagnetic Energy Flow"
    ],
    keyFeatures: [
      "Dynamic 3D perspective field vector rendering",
      "Adjustable frequency, phase angle, and medium permittivity/permeability",
      "Interactive polarization mode synthesis",
      "Real-time wave reflection at conducting and dielectric interfaces"
    ],
    suggestedCourses: ["EE101", "Electromagnetic Fields & Waves", "Physics"],
    color: "from-purple-600 to-pink-700"
  }
];

export const teaching = {
  courses: [
    { code: "EE31011", name: "Power Electronics", role: "Instructor" },
    { code: "EE39006", name: "Power Electronics Laboratory", role: "Instructor" },
    { code: "EE60208", name: "Multilevel Converters: Analysis and Control", role: "Instructor (Ongoing)" },
    { code: "EE39004", name: "Embedded Systems Laboratory", role: "Instructor (Ongoing)" }
  ],
  assistantship: [
    "Introduction to Electrical and Electronic Circuits (EE101)",
    "Power Electronics minor (EE321)",
    "Control systems laboratory (EE211)",
    "Electrical machines laboratory (EE-234)",
    "NPTEL online certification course"
  ]
};

export const awards = [
  {
    title: "Outstanding Reviewer Award",
    organization: "IEEE Power Electronics Society",
    year: "2022",
    description: "For the role as a reviewer in IEEE Transactions on Power Electronics."
  },
  {
    title: "Paper Award",
    organization: "SEFET Conference",
    year: "2021",
    description: "For the paper 'A Novel Single-Phase Switched-Capacitor Based 5-level Inverter Topology...'"
  },
  {
    title: "Excellence in Teaching Assistantship Award",
    organization: "IIT Bombay",
    year: "2021",
    description: "For the course 'Introduction to Electrical and Electronics Circuits'."
  },
  {
    title: "Tata Fellowship",
    organization: "Tata Centre for Technology and Design - IIT Bombay",
    year: "2016",
    description: "Selected for the Tata Fellowship."
  },
  {
    title: "First Prize in Engineer Infinite 2016",
    organization: "ELECRAMA-2016",
    year: "2016",
    description: "Won first prize (cash award of INR 2,00,000) in nationwide project competition."
  }
];

export const patents = [
  {
    title: "INTEGRATED H3/3 DUAL ACTIVE BRIDGE CONVERTER FOR SINGLE-STAGE BIDIRECTIONAL ISOLATED DC–AC POWER CONVERSION",
    status: "Filed",
    number: "Application No 202531131816",
    year: "2025",
    inventors: "Faraz Ahmed, Arpan Hota, S. N. Kapat"
  },
  {
    title: "Quasi multilevel inverter (QMLI) for multi-phase applications",
    status: "Granted",
    number: "IN Patent No: 418210",
    year: "2023",
    inventors: "Arpan Hota, Vivek Agarwal"
  },
  {
    title: "System for balancing energy stored in a battery",
    status: "Filed",
    number: "Application No. 202311007753",
    year: "2023",
    inventors: "Arpan Hota, Nand Gavali, Sumon Dhara, Yash Sukhatme"
  },
  {
    title: "System and Apparatus for Integrated Active Pre-charge and Active Cell Balancing of Series Connected Battery Cells",
    status: "Filed",
    number: "Pending",
    year: "Pending",
    inventors: "Arpan Hota, Nand Gavali"
  }
];

export const service = {
  peerReview: [
    "IEEE Transactions on Power Electronics",
    "IEEE Transactions on Industry Applications",
    "IEEE Transactions on Industrial Electronics",
    "IEEE Journal of Emerging and Selected Topics on Power Electronics",
    "IEEE Access",
    "Journal of Modern Power Systems and Clean Energy (Springer)"
  ],
  conferenceRoles: [
    { role: "Meta Reviewer", conference: "IEEE conference ICPCCT (2024)" }
  ]
};

export const students = {
  phd: [
    {
      name: "Proma Paul",
      role: "PhD Research Scholar",
      topic: "Investigation on model predictive control strategies for back to back induction motor drives",
      year: "Joined 2025",
      email: "promapaul25@kgpian.iitkgp.ac.in",
      status: "active"
    },
    {
      name: "Golam Mujaddid Alam",
      role: "PhD Research Scholar",
      topic: "Zero common mode voltage isolated DC-DC-AC converter",
      year: "Joined 2026",
      email: "mujaddid.alam99@gmail.com",
      status: "active"
    },
    {
      name: "Amit Kumar Singh",
      role: "PhD Research Scholar",
      topic: "Investigation on optimized multilevel converter topologies and control",
      year: "Joined 2025",
      email: "amitscience27@gmail.com",
      status: "active"
    }
  ],
  masters: [
    {
      name: "Piyush Kumar",
      role: "M.Tech Student",
      topic: "Totem-pole PFC and Dual Active Bridge Two stage battery charger",
      year: "2025 - 2027",
      email: "25EE61R1025@kgpian.iitkgp.ac.in",
      status: "active"
    },
    {
      name: "Kaki Sindhusha",
      role: "M.Tech Student",
      topic: "DC-DC-AC isolated converter closed loop control",
      year: "2025 - 2027",
      email: "sindhusha020625@kgpian.iitkgp.ac.in",
      status: "active"
    },
    {
      name: "Jyotismoy Guchhait",
      role: "M.Tech Student",
      topic: "Novel integrated circuit based BLDC motor drive design",
      year: "2025 - 2027",
      email: "jyotismoy25@kgpian.iitkgp.ac.in",
      status: "active"
    },
    {
      name: "Shyam Lal Kumawat",
      role: "M.Tech Student",
      topic: "Novel integrated DC-DC-AC isolated converter for 48V dc to 230V AC conversion",
      year: "2024 - 2026",
      email: "shyamlalkumawat@ee.iitkgp.ac.in",
      status: "alumni"
    }
  ]
};
