export type Lang = 'en' | 'es'

export const translations = {
  en: {
    header: {
      tagline: 'Licensed & Insured',
      home: 'Home',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
      callNow: 'Call Now',
      freeEstimate: 'Free Estimate',
      needHelp: 'Need help choosing a service?',
      freeEstimateLink: 'Free estimate →',
      closeMenu: 'Close menu',
      openMenu: 'Open menu',
      servicesList: [
        { label: 'Emergency Plumbing',   desc: '24/7 rapid response'    },
        { label: 'Drain Cleaning',        desc: 'Clear blockages fast'   },
        { label: 'Water Heater',          desc: 'Tankless & traditional' },
        { label: 'Leak Detection',        desc: 'Advanced technology'    },
        { label: 'Sewer Line Repair',     desc: 'Minimal disruption'     },
        { label: 'Commercial Plumbing',   desc: 'All facility sizes'     },
      ],
    },
    hero: {
      badge: 'Licensed & Insured — 24/7 Emergency Service',
      headline1: 'Fast, Honest',
      headline2: 'Plumbing',
      headline3: 'You Can Trust.',
      subheadline:
        'From burst pipes to full installations — Atlas Plumbing arrives fast, fixes it right, and backs every job with a satisfaction guarantee.',
      ratingLabel: '— 200+ Verified Reviews',
      callNow: 'Call Now — (555) 123-4567',
      getFreeEstimate: 'Get Free Estimate',
      trustItems: ['Same-Day Service', '100% Satisfaction', 'Upfront Pricing'],
      stats: [
        { value: '15+',  label: 'Years of Experience' },
        { value: '500+', label: 'Jobs Completed'       },
        { value: '24/7', label: 'Emergency Service'    },
      ],
    },
    services: {
      eyebrow: 'What We Do',
      heading: 'Our Plumbing Services',
      subheading:
        'From routine maintenance to complex installations, we handle every plumbing challenge with skill and care.',
      cards: [
        {
          title: 'Emergency Plumbing',
          description:
            'Burst pipes, flooding, or sudden leaks — our team is on call 24/7 to handle any plumbing emergency fast.',
        },
        {
          title: 'Drain Cleaning',
          description:
            'Slow or clogged drains? We use professional-grade equipment to clear blockages and restore proper flow.',
        },
        {
          title: 'Water Heater Installation',
          description:
            'Expert installation, repair, and replacement of tankless and traditional water heaters for reliable hot water.',
        },
        {
          title: 'Leak Detection',
          description:
            'Advanced leak detection technology to locate hidden leaks behind walls and underground without unnecessary damage.',
        },
        {
          title: 'Sewer Line Repair',
          description:
            'From root intrusions to collapsed pipes, we diagnose and repair sewer line issues with minimal disruption.',
        },
        {
          title: 'Commercial Plumbing',
          description:
            'Full-service plumbing solutions for businesses, restaurants, and commercial facilities of all sizes.',
        },
      ],
      emergencyHeading: "Plumbing emergency? We're available 24/7.",
      emergencySubtext: 'Call now for immediate, professional assistance — no waiting.',
    },
    whyChooseUs: {
      eyebrow: 'Why Atlas Plumbing',
      heading: 'The Plumbing Team You Can Always Count On',
      description:
        "We've built our reputation on honest work, fair pricing, and exceptional results. When you call Atlas Plumbing, you get a team that treats your home or business like their own.",
      yearsLabel: 'Years of Experience',
      features: [
        {
          title: 'Licensed & Insured',
          description:
            'Every technician is fully licensed, bonded, and insured for your complete peace of mind.',
        },
        {
          title: 'Upfront Pricing',
          description:
            'No surprise charges. We provide transparent quotes before any work begins — guaranteed.',
        },
        {
          title: 'Fast Response',
          description:
            'We arrive on time, every time. Same-day service available for most plumbing needs.',
        },
        {
          title: 'Satisfaction Guaranteed',
          description:
            "We stand behind our work 100%. If you're not satisfied, we make it right — no questions asked.",
        },
      ],
      stats: [
        { value: '500+', label: 'Happy Customers'    },
        { value: '15+',  label: 'Years Experience'   },
        { value: '24/7', label: 'Emergency Service'  },
        { value: '100%', label: 'Satisfaction Rate'  },
      ],
    },
    estimateForm: {
      eyebrow: 'Free Estimate',
      heading: 'Get Your Free Plumbing Estimate Today',
      description:
        'Fill out the form and one of our expert plumbers will reach out within 1 hour. No obligations, no hidden fees — just honest, professional plumbing service.',
      perks: [
        'Response within 60 minutes',
        'Free, no-obligation estimates',
        'Upfront, transparent pricing',
        'Licensed & insured professionals',
      ],
      formTitle: 'Request a Free Estimate',
      fullName: 'Full Name',
      phone: 'Phone',
      email: 'Email',
      serviceNeeded: 'Service Needed',
      selectService: 'Select a service...',
      message: 'Message',
      messagePlaceholder: 'Describe your plumbing issue...',
      sendRequest: 'Send My Request',
      sending: 'Sending...',
      successTitle: 'Request Received!',
      successMessage: "We'll contact you within 60 minutes to discuss your plumbing needs.",
      submitAnother: 'Submit another request',
      errors: {
        nameRequired:    'Full name is required',
        phoneRequired:   'Phone number is required',
        phoneInvalid:    'Enter a valid phone number',
        emailRequired:   'Email is required',
        emailInvalid:    'Enter a valid email address',
        serviceRequired: 'Please select a service',
      },
      serviceOptions: [
        'Emergency Plumbing',
        'Drain Cleaning',
        'Water Heater Installation',
        'Leak Detection',
        'Sewer Line Repair',
        'Commercial Plumbing',
        'Other',
      ],
      serviceGroups: [
        {
          group: 'Plumbing',
          options: [
            'Emergency Plumbing',
            'Drain Cleaning',
            'Water Heater Installation',
            'Leak Detection',
            'Sewer Line Repair',
            'Commercial Plumbing',
          ],
        },
        {
          group: 'Heating',
          options: [
            'Furnace Installation',
            'Boiler Services',
            'Heat Pump Systems',
            'Radiant Heating',
            'Heating Repair',
            'Annual Tune-Up',
          ],
        },
        {
          group: 'Cooling',
          options: [
            'AC Installation',
            'AC Repair',
            'Ductless Mini-Splits',
            'Central Air Systems',
            'Indoor Air Quality',
            'Emergency AC Service',
          ],
        },
        {
          group: 'Other',
          options: ['Other / Not Listed'],
        },
      ],
    },
    testimonials: {
      eyebrow: 'Customer Reviews',
      heading: 'What Our Customers Say',
      subheading: 'Real reviews from real homeowners and businesses who trust Atlas Plumbing.',
      ratingLabel: '— Based on 200+ reviews',
      reviews: [
        {
          name: 'Sarah M.',
          location: 'Newark, NJ',
          review:
            "Atlas Plumbing saved the day when our main line burst at 2am. They arrived within 30 minutes and had it fixed before morning. Truly exceptional service — I wouldn't call anyone else.",
          initials: 'SM',
        },
        {
          name: 'James T.',
          location: 'Jersey City, NJ',
          review:
            'The team replaced our water heater quickly and for a fair price. They explained everything clearly and left the space cleaner than they found it. Highly recommend Atlas Plumbing!',
          initials: 'JT',
        },
        {
          name: 'Linda R.',
          location: 'Edison, NJ',
          review:
            'Professional, punctual, and honest. They detected a hidden slab leak that two other plumbers missed. Upfront pricing, no surprises on the bill. Atlas Plumbing is the real deal.',
          initials: 'LR',
        },
        {
          name: 'Maria G.',
          location: 'Trenton, NJ',
          review:
            'Needed an emergency pipe repair on a Sunday. Atlas showed up within the hour — professional, fast, and priced fairly. Fixed the issue completely and cleaned up before leaving.',
          initials: 'MG',
        },
        {
          name: 'Robert K.',
          location: 'Princeton, NJ',
          review:
            'Our boiler broke down during the coldest week of winter. Atlas dispatched a technician the same morning, diagnosed the problem quickly, and had us warm by afternoon. Incredible service.',
          initials: 'RK',
        },
        {
          name: 'Anna T.',
          location: 'Hoboken, NJ',
          review:
            'Called Atlas to install a new central AC system. They handled everything from permits to the final walk-through. Professional crew, clean work, and the system runs perfectly. Very happy!',
          initials: 'AT',
        },
        {
          name: 'David M.',
          location: 'Morristown, NJ',
          review:
            'They installed a heat pump system for our home and the energy savings have been remarkable. The team was knowledgeable, efficient, and respectful of our space. Highly recommend!',
          initials: 'DM',
        },
        {
          name: 'Jennifer S.',
          location: 'Parsippany, NJ',
          review:
            "Burst pipe on New Year's Eve — not ideal! Atlas had a technician out within 45 minutes. Repaired everything properly and checked the entire system before leaving. True emergency heroes.",
          initials: 'JS',
        },
      ],
    },
    serviceAreas: {
      cardHeading: 'Greater New Jersey',
      cardSubtext:
        'Proudly serving all of New Jersey with fast, expert plumbing & HVAC services.',
      availableNow: 'Available Now — 24/7 Service',
      eyebrow: 'Where We Work',
      heading: 'Areas We Serve',
      description:
        "Atlas Plumbing proudly serves homeowners and businesses across New Jersey. Don't see your city? Give us a call — we may still be able to help!",
      notListed: 'Not in our listed areas?',
      callUs: "Call us and we'll let you know if we can reach you.",
    },
    footer: {
      tagline:
        'Your trusted plumbing partner for residential and commercial services. Licensed, insured, and available 24/7.',
      quickLinks: 'Quick Links',
      ourServices: 'Our Services',
      contactUs: 'Contact Us',
      emergencyLine: '24/7 Emergency Line',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      allRightsReserved: 'All rights reserved.',
      links: [
        { label: 'Home',     href: '#home'    },
        { label: 'Services', href: '#services' },
        { label: 'About Us', href: '#about'   },
        { label: 'Contact',  href: '#contact' },
      ],
      services: [
        'Emergency Plumbing',
        'Drain Cleaning',
        'Water Heater Installation',
        'Leak Detection',
        'Sewer Line Repair',
        'Commercial Plumbing',
      ],
    },

    // ── Heating Page ─────────────────────────────────────────────────────────
    heatingPage: {
      hero: {
        badge: 'NATE-Certified — 24/7 Emergency Service',
        headline1: 'Professional',
        headline2: 'Heating Services',
        headline3: 'in New Jersey',
        subheadline:
          'Keep your home warm all winter long. Atlas Plumbing installs, repairs, and maintains every type of heating system — furnaces, boilers, heat pumps, and more.',
        callNow: 'Call Now — (555) 123-4567',
        freeEstimate: 'Free Estimate',
      },
      intro: {
        eyebrow: 'Heating Solutions',
        heading: 'Complete Heating Services',
        subheading: 'From new installations to emergency repairs — we keep your home or business warm.',
      },
      serviceBadge: 'Heating Service',
      callForService: 'Call for This Service',
      services: [
        {
          title: 'Furnace Installation',
          description:
            'High-efficiency gas and electric furnace installation by certified technicians. We properly size, install, and commission your new system for maximum comfort and energy savings all winter long.',
          badge: 'Furnace',
          features: ['All major brands carried', 'High-efficiency models available', 'Full manufacturer warranty support', 'Proper sizing & load calculation'],
        },
        {
          title: 'Boiler Services',
          description:
            'Complete boiler repair, maintenance, and replacement for residential and commercial properties. We work on oil, gas, and electric boilers of all makes and models with expert precision.',
          badge: 'Boiler',
          features: ['Oil, gas & electric boilers', '24/7 emergency repairs', 'Full system replacement', 'Preventive maintenance plans'],
        },
        {
          title: 'Heat Pump Systems',
          description:
            'Energy-efficient heat pump installation and service. Provides both heating and cooling with up to 300% efficiency — perfect for year-round New Jersey comfort and lower energy bills.',
          badge: 'Heat Pump',
          features: ['Heating & cooling in one unit', 'Up to 300% energy efficiency', 'Rebate eligibility guidance', 'Multi-zone configurations'],
        },
        {
          title: 'Radiant Heating',
          description:
            'In-floor radiant heating systems that deliver even, draft-free warmth throughout your home. We install hydronic and electric radiant systems for new builds and retrofits with minimal disruption.',
          badge: 'Radiant',
          features: ['Hydronic & electric systems', 'New builds & retrofits', 'Individual zone controls', 'Even, comfortable warmth'],
        },
        {
          title: 'Heating Repair',
          description:
            'Fast diagnosis and repair of all heating systems. No heat in winter? Our technicians carry common parts on the truck so most repairs are completed in a single visit — getting you warm fast.',
          badge: 'Repair',
          features: ['Same-day diagnosis & repair', 'Parts stocked on every truck', 'All brands & models serviced', '24/7 emergency response'],
        },
        {
          title: 'Annual Tune-Up',
          description:
            'Keep your heating system running at peak efficiency with our comprehensive annual maintenance inspection. Catch small issues before they become costly mid-winter breakdowns.',
          badge: 'Tune-Up',
          features: ['Full system inspection', 'Filter replacement included', 'Priority customer status', 'Extended equipment life'],
        },
      ],
      whyUs: {
        eyebrow: 'Why Atlas',
        heading: "NJ's Heating Specialists",
        description:
          "Don't spend another winter dealing with unreliable heat. Our certified technicians will assess your system, give you honest options, and keep your family warm all season long.",
        certBadge: 'NATE-Certified Technicians',
        items: [
          { title: 'NATE-Certified Techs',   desc: 'All HVAC technicians hold current NATE certifications.' },
          { title: 'Transparent Quotes',     desc: 'Detailed pricing before any work starts — always.'      },
          { title: '24/7 Emergency Heat',    desc: 'No heat in winter? We respond around the clock.'        },
          { title: '100% Satisfaction',      desc: 'We make it right or your money back — guaranteed.'      },
        ],
      },
    },

    // ── Cooling Page ─────────────────────────────────────────────────────────
    coolingPage: {
      hero: {
        badge: 'EPA 608 Certified — 24/7 Emergency Service',
        headline1: 'Professional',
        headline2: 'Cooling Services',
        headline3: 'in New Jersey',
        subheadline:
          'Stay cool all summer long. Atlas Plumbing installs, repairs, and maintains every type of air conditioning system — from mini-splits to whole-home central air.',
        callNow: 'Call Now — (555) 123-4567',
        freeEstimate: 'Free Estimate',
      },
      intro: {
        eyebrow: 'Cooling Solutions',
        heading: 'Complete Cooling Services',
        subheading: 'From new installations to emergency repairs — we keep you cool when it matters most.',
      },
      serviceBadge: 'Cooling Service',
      callForService: 'Call for This Service',
      services: [
        {
          title: 'AC Installation',
          description:
            "Professional installation of central air conditioning and ductless systems. We recommend the right system for your home's size and layout, handle all permits, and install it cleanly and efficiently.",
          badge: 'AC Install',
          features: ['Central & ductless options', 'Proper load calculation', 'Permits & inspections handled', 'Clean, professional install'],
        },
        {
          title: 'AC Repair & Maintenance',
          description:
            'Fast diagnosis and repair of any air conditioning problem. Our trucks are fully stocked so most repairs are completed on the first visit. We service all brands and models.',
          badge: 'AC Repair',
          features: ['All brands serviced', 'Same-day repairs available', 'Common parts stocked on trucks', 'Preventative maintenance plans'],
        },
        {
          title: 'Ductless Mini-Splits',
          description:
            'Flexible, energy-efficient cooling (and heating) for rooms without ductwork. Perfect for additions, garages, home offices, and older homes. No duct installation required — just comfort.',
          badge: 'Mini-Splits',
          features: ['No ductwork needed', 'Dual heat & cool capability', 'Multi-zone configurations', 'Up to 30% energy savings'],
        },
        {
          title: 'Central Air Systems',
          description:
            'Design and installation of new central air systems for whole-home comfort. We handle everything from ductwork design to final system balancing and commissioning for perfect airflow.',
          badge: 'Central Air',
          features: ['Full duct design & installation', 'Whole-home comfort', 'Energy Star certified options', 'Smart thermostat integration'],
        },
        {
          title: 'Indoor Air Quality',
          description:
            'Improve the air your family breathes with HEPA filtration, UV purifiers, humidity control, and fresh-air ventilation solutions integrated seamlessly with your existing HVAC system.',
          badge: 'Air Quality',
          features: ['HEPA & UV filtration systems', 'Humidity control', 'Allergen & pollutant reduction', 'Whole-home ventilation'],
        },
        {
          title: 'Emergency AC Service',
          description:
            'No AC in a NJ summer is an emergency. Our technicians are on call 24/7 — we respond fast, diagnose accurately, and get you cool again the same day with no overtime charges.',
          badge: 'Emergency',
          features: ['24/7 emergency response', 'No overtime charges', 'Same-day cooling restored', 'All makes & models covered'],
        },
      ],
      whyUs: {
        eyebrow: 'Why Atlas',
        heading: "NJ's Cooling Specialists",
        description:
          'A NJ summer without working AC is miserable. Our EPA-certified technicians are ready to respond quickly, diagnose accurately, and restore your comfort — same day.',
        certBadge: 'EPA 608 Certified',
        items: [
          { title: 'EPA 608 Certified',      desc: 'All technicians carry EPA 608 certification for refrigerants.'    },
          { title: 'Flat-Rate Pricing',      desc: 'Know your price upfront — no surprise add-ons, ever.'             },
          { title: 'Same-Day Service',       desc: 'Most cooling jobs scheduled within hours of your call.'            },
          { title: 'Satisfaction Guarantee', desc: '100% satisfied or we return and fix it — no questions asked.'     },
        ],
      },
    },

    // ── Plumbing Page ────────────────────────────────────────────────────────
    plumbingPage: {
      hero: {
        badge: 'Licensed & Insured — 24/7 Service',
        headline1: 'Professional',
        headline2: 'Plumbing Services',
        headline3: 'in New Jersey',
        subheadline:
          'From emergency repairs to complete system installations — Atlas Plumbing delivers fast, reliable plumbing you can count on.',
        callNow: 'Call Now — (555) 123-4567',
        freeEstimate: 'Free Estimate',
      },
      intro: {
        eyebrow: 'What We Offer',
        heading: 'Our Plumbing Services',
        subheading: 'Expert solutions for every plumbing need — residential and commercial. Scroll to explore each service.',
      },
      callForService: 'Call for This Service',
      services: [
        {
          title: 'Residential Plumbing Repairs',
          description:
            'From a dripping kitchen faucet to a burst pipe under the sink, our certified plumbers handle every residential repair with speed and precision. We arrive fully equipped so most jobs are completed in a single visit — no repeat trips, no disruption to your daily routine.',
          badge: 'Residential Service',
          features: ['Same-day service for most repairs', 'Fully stocked service trucks', 'Kitchen, bathroom & utility repairs', 'No overtime or after-hours fees'],
        },
        {
          title: 'Commercial Plumbing Systems',
          description:
            'Large-scale commercial facilities demand precision-engineered plumbing. Our team designs, installs, and maintains complex pipe networks for office buildings, industrial facilities, and multi-unit properties — ensuring code compliance, maximum efficiency, and zero downtime for your business.',
          badge: 'Commercial Service',
          features: ['Full system design & installation', 'Code-compliant for all facility types', 'Preventative maintenance contracts', 'Minimal business disruption'],
        },
        {
          title: 'Pipe Installation & Repair',
          description:
            'Whether you need new pipes run for a renovation or an urgent repair on an aging system, we handle all pipe types — copper, PVC, PEX, and galvanized steel. Our technicians diagnose the root cause of every issue and deliver a permanent fix, not a temporary patch.',
          badge: 'Pipe Services',
          features: ['All pipe materials & sizes covered', 'New construction & remodel installs', 'Emergency repair — 24/7 response', 'Long-lasting, code-approved work'],
        },
        {
          title: 'Fixture Installation & Upgrades',
          description:
            'Upgrade your home or business with modern, water-efficient fixtures installed by professionals. From sleek kitchen faucets to high-performance showerheads and commercial-grade taps, we ensure every fixture is leak-free, properly pressured, and working perfectly from day one.',
          badge: 'Fixture Upgrades',
          features: ['Kitchen, bathroom & utility fixtures', 'Water-efficient upgrades available', 'Proper pressure & flow balancing', 'All major brands installed'],
        },
        {
          title: 'Water Pressure & Pump Systems',
          description:
            'Low water pressure and failing pump systems can cripple both homes and businesses. We install, service, and repair all types of water pumps and pressure systems — including booster pumps, well pumps, and industrial-grade configurations — restoring reliable water flow throughout your property.',
          badge: 'Pump Systems',
          features: ['Booster & well pump installation', 'Pressure diagnostics & balancing', 'Industrial & residential systems', 'Preventative maintenance plans'],
        },
      ],
      whyUs: {
        eyebrow: 'Why Atlas',
        heading: "New Jersey's Trusted Plumbing Experts",
        description:
          'For over 15 years, Atlas Plumbing has been the go-to choice for homeowners and businesses across New Jersey. Our technicians are highly trained, background-checked, and ready to solve any plumbing challenge.',
        certBadge: '15+ Years Serving NJ',
        items: [
          { title: 'Licensed & Insured',     desc: 'All technicians are NJ-licensed, bonded, and insured.'         },
          { title: 'Upfront Pricing',        desc: 'Flat-rate quotes before we start — no surprise bills.'         },
          { title: 'Same-Day Service',       desc: 'Most jobs scheduled for the same day you call.'                },
          { title: 'Satisfaction Guaranteed',desc: '100% satisfaction or we come back and make it right.'          },
        ],
      },
    },
  },

  es: {
    header: {
      tagline: 'Licenciado y Asegurado',
      home: 'Inicio',
      services: 'Servicios',
      about: 'Nosotros',
      contact: 'Contacto',
      callNow: 'Llamar',
      freeEstimate: 'Presupuesto Gratis',
      needHelp: '¿Necesita ayuda para elegir un servicio?',
      freeEstimateLink: 'Presupuesto gratis →',
      closeMenu: 'Cerrar menú',
      openMenu: 'Abrir menú',
      servicesList: [
        { label: 'Plomería de Emergencia',     desc: 'Respuesta rápida 24/7'    },
        { label: 'Limpieza de Drenajes',       desc: 'Desatascos rápidos'       },
        { label: 'Calentadores de Agua',       desc: 'Sin tanque y tradicional' },
        { label: 'Detección de Fugas',         desc: 'Tecnología avanzada'      },
        { label: 'Reparación de Alcantarillas',desc: 'Mínima disrupción'        },
        { label: 'Plomería Comercial',         desc: 'Todos los tamaños'        },
      ],
    },
    hero: {
      badge: 'Licenciado y Asegurado — Servicio de Emergencia 24/7',
      headline1: 'Rápida y Honesta',
      headline2: 'Plomería',
      headline3: 'En la que Puede Confiar.',
      subheadline:
        'Desde tuberías rotas hasta instalaciones completas — Atlas Plumbing llega rápido, lo arregla bien y respalda cada trabajo con garantía de satisfacción.',
      ratingLabel: '— 200+ Reseñas Verificadas',
      callNow: 'Llamar Ahora — (555) 123-4567',
      getFreeEstimate: 'Obtener Presupuesto Gratis',
      trustItems: ['Servicio el Mismo Día', '100% Satisfacción', 'Precios Transparentes'],
      stats: [
        { value: '15+',  label: 'Años de Experiencia'    },
        { value: '500+', label: 'Trabajos Completados'   },
        { value: '24/7', label: 'Servicio de Emergencia' },
      ],
    },
    services: {
      eyebrow: 'Lo Que Hacemos',
      heading: 'Nuestros Servicios de Plomería',
      subheading:
        'Desde mantenimiento rutinario hasta instalaciones complejas, manejamos cada desafío de plomería con habilidad y cuidado.',
      cards: [
        {
          title: 'Plomería de Emergencia',
          description:
            'Tuberías rotas, inundaciones o fugas repentinas — nuestro equipo está disponible 24/7 para manejar cualquier emergencia de plomería rápidamente.',
        },
        {
          title: 'Limpieza de Drenajes',
          description:
            '¿Drenajes lentos o tapados? Usamos equipo profesional para limpiar obstrucciones y restaurar el flujo adecuado.',
        },
        {
          title: 'Instalación de Calentadores',
          description:
            'Instalación, reparación y reemplazo experto de calentadores de agua sin tanque y tradicionales para agua caliente confiable.',
        },
        {
          title: 'Detección de Fugas',
          description:
            'Tecnología avanzada para localizar fugas ocultas detrás de paredes y bajo tierra sin daños innecesarios.',
        },
        {
          title: 'Reparación de Alcantarillas',
          description:
            'Desde intrusiones de raíces hasta tuberías colapsadas, diagnosticamos y reparamos problemas de alcantarilla con mínima disrupción.',
        },
        {
          title: 'Plomería Comercial',
          description:
            'Soluciones completas de plomería para negocios, restaurantes e instalaciones comerciales de todos los tamaños.',
        },
      ],
      emergencyHeading: '¿Emergencia de plomería? Estamos disponibles 24/7.',
      emergencySubtext: 'Llame ahora para asistencia profesional inmediata — sin esperas.',
    },
    whyChooseUs: {
      eyebrow: 'Por Qué Atlas Plumbing',
      heading: 'El Equipo de Plomería en el que Siempre Puede Contar',
      description:
        'Hemos construido nuestra reputación en trabajo honesto, precios justos y resultados excepcionales. Cuando llama a Atlas Plumbing, obtiene un equipo que trata su hogar o negocio como propio.',
      yearsLabel: 'Años de Experiencia',
      features: [
        {
          title: 'Licenciado y Asegurado',
          description:
            'Cada técnico está completamente licenciado, afianzado y asegurado para su total tranquilidad.',
        },
        {
          title: 'Precios Transparentes',
          description:
            'Sin cargos sorpresa. Proporcionamos presupuestos transparentes antes de comenzar cualquier trabajo — garantizado.',
        },
        {
          title: 'Respuesta Rápida',
          description:
            'Llegamos a tiempo, siempre. Servicio el mismo día disponible para la mayoría de necesidades de plomería.',
        },
        {
          title: 'Satisfacción Garantizada',
          description:
            'Respaldamos nuestro trabajo al 100%. Si no está satisfecho, lo solucionamos — sin preguntas.',
        },
      ],
      stats: [
        { value: '500+', label: 'Clientes Satisfechos'   },
        { value: '15+',  label: 'Años de Experiencia'    },
        { value: '24/7', label: 'Servicio de Emergencia' },
        { value: '100%', label: 'Tasa de Satisfacción'   },
      ],
    },
    estimateForm: {
      eyebrow: 'Presupuesto Gratis',
      heading: 'Obtenga Su Presupuesto de Plomería Gratis Hoy',
      description:
        'Complete el formulario y uno de nuestros plomeros expertos se comunicará con usted en 1 hora. Sin obligaciones, sin cargos ocultos — solo servicio de plomería honesto y profesional.',
      perks: [
        'Respuesta en 60 minutos',
        'Presupuestos gratuitos sin obligación',
        'Precios transparentes y claros',
        'Profesionales licenciados y asegurados',
      ],
      formTitle: 'Solicitar un Presupuesto Gratis',
      fullName: 'Nombre Completo',
      phone: 'Teléfono',
      email: 'Correo Electrónico',
      serviceNeeded: 'Servicio Necesario',
      selectService: 'Seleccione un servicio...',
      message: 'Mensaje',
      messagePlaceholder: 'Describa su problema de plomería...',
      sendRequest: 'Enviar Mi Solicitud',
      sending: 'Enviando...',
      successTitle: '¡Solicitud Recibida!',
      successMessage:
        'Nos comunicaremos con usted en 60 minutos para hablar sobre sus necesidades de plomería.',
      submitAnother: 'Enviar otra solicitud',
      errors: {
        nameRequired:    'El nombre completo es requerido',
        phoneRequired:   'El número de teléfono es requerido',
        phoneInvalid:    'Ingrese un número de teléfono válido',
        emailRequired:   'El correo electrónico es requerido',
        emailInvalid:    'Ingrese una dirección de correo válida',
        serviceRequired: 'Por favor seleccione un servicio',
      },
      serviceOptions: [
        'Plomería de Emergencia',
        'Limpieza de Drenajes',
        'Instalación de Calentadores',
        'Detección de Fugas',
        'Reparación de Alcantarillas',
        'Plomería Comercial',
        'Otro',
      ],
      serviceGroups: [
        {
          group: 'Plomería',
          options: [
            'Plomería de Emergencia',
            'Limpieza de Drenajes',
            'Instalación de Calentadores',
            'Detección de Fugas',
            'Reparación de Alcantarillas',
            'Plomería Comercial',
          ],
        },
        {
          group: 'Calefacción',
          options: [
            'Instalación de Calefacción',
            'Servicios de Caldera',
            'Sistemas de Bomba de Calor',
            'Calefacción Radiante',
            'Reparación de Calefacción',
            'Mantenimiento Anual',
          ],
        },
        {
          group: 'Enfriamiento',
          options: [
            'Instalación de Aire Acondicionado',
            'Reparación de Aire Acondicionado',
            'Mini-Splits Sin Ductos',
            'Sistemas de Aire Central',
            'Calidad del Aire Interior',
            'Servicio de Emergencia de Aire',
          ],
        },
        {
          group: 'Otro',
          options: ['Otro / No Listado'],
        },
      ],
    },
    testimonials: {
      eyebrow: 'Reseñas de Clientes',
      heading: 'Lo Que Dicen Nuestros Clientes',
      subheading: 'Reseñas reales de propietarios y negocios que confían en Atlas Plumbing.',
      ratingLabel: '— Basado en 200+ reseñas',
      reviews: [
        {
          name: 'Sarah M.',
          location: 'Newark, NJ',
          review:
            'Atlas Plumbing nos salvó cuando nuestra tubería principal se rompió a las 2am. Llegaron en 30 minutos y la arreglaron antes del amanecer. Un servicio verdaderamente excepcional — no llamaría a nadie más.',
          initials: 'SM',
        },
        {
          name: 'James T.',
          location: 'Jersey City, NJ',
          review:
            'El equipo reemplazó nuestro calentador de agua rápidamente y a un precio justo. Explicaron todo claramente y dejaron el espacio más limpio de lo que lo encontraron. ¡Recomiendo Atlas Plumbing!',
          initials: 'JT',
        },
        {
          name: 'Linda R.',
          location: 'Edison, NJ',
          review:
            'Profesional, puntual y honesto. Detectaron una fuga oculta en la losa que otros dos plomeros no encontraron. Precios transparentes, sin sorpresas. Atlas Plumbing es la opción real.',
          initials: 'LR',
        },
        {
          name: 'Maria G.',
          location: 'Trenton, NJ',
          review:
            'Necesitaba una reparación de emergencia de tuberías un domingo. Atlas llegó en menos de una hora — profesionales, rápidos y con precios justos. Resolvieron el problema completamente y limpiaron antes de irse.',
          initials: 'MG',
        },
        {
          name: 'Robert K.',
          location: 'Princeton, NJ',
          review:
            'Nuestra caldera se averió durante la semana más fría del invierno. Atlas envió un técnico la misma mañana, diagnosticó el problema rápidamente y nos dejó calientes antes del mediodía. Un servicio increíble.',
          initials: 'RK',
        },
        {
          name: 'Anna T.',
          location: 'Hoboken, NJ',
          review:
            'Llamé a Atlas para instalar un nuevo sistema central de aire acondicionado. Se encargaron de todo, desde los permisos hasta la inspección final. Equipo profesional, trabajo limpio y el sistema funciona perfectamente.',
          initials: 'AT',
        },
        {
          name: 'David M.',
          location: 'Morristown, NJ',
          review:
            'Instalaron un sistema de bomba de calor en nuestra casa y los ahorros de energía han sido notables. El equipo fue experto, eficiente y respetuoso con nuestro espacio. ¡Muy recomendable!',
          initials: 'DM',
        },
        {
          name: 'Jennifer S.',
          location: 'Parsippany, NJ',
          review:
            'Tubería rota en Nochevieja — ¡no fue lo ideal! Atlas envió un técnico en 45 minutos. Repararon todo correctamente y revisaron todo el sistema antes de irse. Verdaderos héroes de emergencias.',
          initials: 'JS',
        },
      ],
    },
    serviceAreas: {
      cardHeading: 'Mayor Nueva Jersey',
      cardSubtext:
        'Sirviendo con orgullo todo el estado de Nueva Jersey con servicios rápidos y expertos de plomería y HVAC.',
      availableNow: 'Disponible Ahora — Servicio 24/7',
      eyebrow: 'Dónde Trabajamos',
      heading: 'Áreas que Servimos',
      description:
        'Atlas Plumbing sirve con orgullo a propietarios y negocios en toda Nueva Jersey. ¿No ve su ciudad? ¡Llámenos — es posible que podamos ayudarle!',
      notListed: '¿No está en nuestras áreas listadas?',
      callUs: 'Llámenos y le informaremos si podemos llegar hasta usted.',
    },
    footer: {
      tagline:
        'Su socio de plomería de confianza para servicios residenciales y comerciales. Licenciado, asegurado y disponible 24/7.',
      quickLinks: 'Enlaces Rápidos',
      ourServices: 'Nuestros Servicios',
      contactUs: 'Contáctenos',
      emergencyLine: 'Línea de Emergencia 24/7',
      privacyPolicy: 'Política de Privacidad',
      termsOfService: 'Términos de Servicio',
      allRightsReserved: 'Todos los derechos reservados.',
      links: [
        { label: 'Inicio',    href: '#home'    },
        { label: 'Servicios', href: '#services' },
        { label: 'Nosotros',  href: '#about'   },
        { label: 'Contacto',  href: '#contact' },
      ],
      services: [
        'Plomería de Emergencia',
        'Limpieza de Drenajes',
        'Instalación de Calentadores',
        'Detección de Fugas',
        'Reparación de Alcantarillas',
        'Plomería Comercial',
      ],
    },

    // ── Heating Page ─────────────────────────────────────────────────────────
    heatingPage: {
      hero: {
        badge: 'Certificado NATE — Servicio de Emergencia 24/7',
        headline1: 'Servicios Profesionales de',
        headline2: 'Calefacción',
        headline3: 'en Nueva Jersey',
        subheadline:
          'Mantenga su hogar cálido durante todo el invierno. Atlas Plumbing instala, repara y mantiene todo tipo de sistemas de calefacción — calefactores, calderas, bombas de calor y más.',
        callNow: 'Llamar Ahora — (555) 123-4567',
        freeEstimate: 'Presupuesto Gratis',
      },
      intro: {
        eyebrow: 'Soluciones de Calefacción',
        heading: 'Servicios Completos de Calefacción',
        subheading: 'Desde nuevas instalaciones hasta reparaciones de emergencia — mantenemos cálido su hogar o negocio.',
      },
      serviceBadge: 'Servicio de Calefacción',
      callForService: 'Llamar para Este Servicio',
      services: [
        {
          title: 'Instalación de Calefactor',
          description:
            'Instalación de calefactores de gas y eléctricos de alta eficiencia por técnicos certificados. Dimensionamos, instalamos y ponemos en marcha su nuevo sistema para máximo confort y ahorro energético durante todo el invierno.',
          badge: 'Calefactor',
          features: ['Todas las marcas principales disponibles', 'Modelos de alta eficiencia disponibles', 'Soporte completo de garantía del fabricante', 'Dimensionamiento y cálculo de carga correctos'],
        },
        {
          title: 'Servicios de Caldera',
          description:
            'Reparación, mantenimiento y reemplazo completo de calderas para propiedades residenciales y comerciales. Trabajamos con calderas de aceite, gas y eléctricas de todas las marcas y modelos con precisión experta.',
          badge: 'Caldera',
          features: ['Calderas de aceite, gas y eléctricas', 'Reparaciones de emergencia 24/7', 'Reemplazo completo del sistema', 'Planes de mantenimiento preventivo'],
        },
        {
          title: 'Sistemas de Bomba de Calor',
          description:
            'Instalación y servicio de bombas de calor de alta eficiencia. Proporciona calefacción y refrigeración con hasta un 300% de eficiencia — perfecto para el confort durante todo el año en Nueva Jersey.',
          badge: 'Bomba de Calor',
          features: ['Calefacción y refrigeración en una unidad', 'Hasta 300% de eficiencia energética', 'Orientación sobre elegibilidad de reembolsos', 'Configuraciones multizona'],
        },
        {
          title: 'Calefacción Radiante',
          description:
            'Sistemas de calefacción radiante en el suelo que brindan calor uniforme y sin corrientes de aire en toda su casa. Instalamos sistemas radiantes hidrónico y eléctrico para construcciones nuevas y renovaciones.',
          badge: 'Radiante',
          features: ['Sistemas hidrónico y eléctrico', 'Construcciones nuevas y renovaciones', 'Controles de zona individuales', 'Calor uniforme y confortable'],
        },
        {
          title: 'Reparación de Calefacción',
          description:
            'Diagnóstico y reparación rápida de todos los sistemas de calefacción. ¿Sin calor en invierno? Nuestros técnicos llevan piezas comunes en el camión para que la mayoría de reparaciones se completen en una sola visita.',
          badge: 'Reparación',
          features: ['Diagnóstico y reparación el mismo día', 'Piezas almacenadas en cada camión', 'Todos los modelos y marcas atendidos', 'Respuesta de emergencia 24/7'],
        },
        {
          title: 'Mantenimiento Anual',
          description:
            'Mantenga su sistema de calefacción funcionando a máxima eficiencia con nuestra inspección de mantenimiento anual completa. Detecte problemas pequeños antes de que se conviertan en costosas averías.',
          badge: 'Mantenimiento',
          features: ['Inspección completa del sistema', 'Reemplazo de filtro incluido', 'Estado de cliente prioritario', 'Mayor vida útil del equipo'],
        },
      ],
      whyUs: {
        eyebrow: 'Por Qué Atlas',
        heading: 'Especialistas en Calefacción de NJ',
        description:
          'No pase otro invierno lidiando con calefacción poco confiable. Nuestros técnicos certificados evaluarán su sistema, le darán opciones honestas y mantendrán a su familia cálida durante toda la temporada.',
        certBadge: 'Técnicos Certificados NATE',
        items: [
          { title: 'Técnicos Cert. NATE',        desc: 'Todos los técnicos de HVAC tienen certificaciones NATE vigentes.' },
          { title: 'Presupuestos Transparentes',  desc: 'Precios detallados antes de comenzar cualquier trabajo — siempre.' },
          { title: 'Emergencia de Calor 24/7',    desc: '¿Sin calor en invierno? Respondemos las 24 horas.'               },
          { title: '100% Satisfacción',           desc: 'Lo solucionamos o le devolvemos su dinero — garantizado.'         },
        ],
      },
    },

    // ── Cooling Page ─────────────────────────────────────────────────────────
    coolingPage: {
      hero: {
        badge: 'Certificado EPA 608 — Servicio de Emergencia 24/7',
        headline1: 'Servicios Profesionales de',
        headline2: 'Refrigeración',
        headline3: 'en Nueva Jersey',
        subheadline:
          'Manténgase fresco durante todo el verano. Atlas Plumbing instala, repara y mantiene todo tipo de sistemas de aire acondicionado — desde mini-splits hasta aire central para toda la casa.',
        callNow: 'Llamar Ahora — (555) 123-4567',
        freeEstimate: 'Presupuesto Gratis',
      },
      intro: {
        eyebrow: 'Soluciones de Refrigeración',
        heading: 'Servicios Completos de Refrigeración',
        subheading: 'Desde nuevas instalaciones hasta reparaciones de emergencia — le mantenemos fresco cuando más lo necesita.',
      },
      serviceBadge: 'Servicio de Refrigeración',
      callForService: 'Llamar para Este Servicio',
      services: [
        {
          title: 'Instalación de Aire Acondicionado',
          description:
            'Instalación profesional de sistemas de aire acondicionado central y sin ductos. Recomendamos el sistema adecuado para el tamaño de su hogar, gestionamos todos los permisos y lo instalamos de forma limpia y eficiente.',
          badge: 'Instalación',
          features: ['Opciones central y sin ductos', 'Cálculo de carga adecuado', 'Permisos e inspecciones gestionados', 'Instalación limpia y profesional'],
        },
        {
          title: 'Reparación y Mantenimiento de Aire',
          description:
            'Diagnóstico y reparación rápida de cualquier problema de aire acondicionado. Nuestros camiones están completamente equipados para que la mayoría de las reparaciones se completen en la primera visita. Atendemos todas las marcas y modelos.',
          badge: 'Reparación',
          features: ['Todas las marcas atendidas', 'Reparaciones disponibles el mismo día', 'Piezas comunes almacenadas en camiones', 'Planes de mantenimiento preventivo'],
        },
        {
          title: 'Mini-Splits Sin Ductos',
          description:
            'Refrigeración (y calefacción) flexible y eficiente para habitaciones sin conductos. Perfecto para ampliaciones, garajes, oficinas en casa y hogares más antiguos. No se requiere instalación de conductos.',
          badge: 'Mini-Splits',
          features: ['No se necesitan conductos', 'Capacidad dual de calor y frío', 'Configuraciones multizona', 'Hasta 30% de ahorro energético'],
        },
        {
          title: 'Sistemas de Aire Central',
          description:
            'Diseño e instalación de nuevos sistemas de aire central para el confort de todo el hogar. Nos encargamos de todo, desde el diseño de conductos hasta el equilibrio final del sistema para un flujo de aire perfecto.',
          badge: 'Aire Central',
          features: ['Diseño e instalación completa de conductos', 'Confort para todo el hogar', 'Opciones certificadas Energy Star', 'Integración de termostato inteligente'],
        },
        {
          title: 'Calidad del Aire Interior',
          description:
            'Mejore el aire que respira su familia con filtración HEPA, purificadores UV, control de humedad y soluciones de ventilación de aire fresco integradas perfectamente con su sistema HVAC existente.',
          badge: 'Aire Interior',
          features: ['Sistemas de filtración HEPA y UV', 'Control de humedad', 'Reducción de alérgenos y contaminantes', 'Ventilación para todo el hogar'],
        },
        {
          title: 'Servicio de Emergencia de Aire',
          description:
            'Sin aire acondicionado en un verano de NJ es una emergencia. Nuestros técnicos están disponibles 24/7 — respondemos rápido, diagnosticamos con precisión y le volvemos a poner fresco el mismo día sin cargos extra.',
          badge: 'Emergencia',
          features: ['Respuesta de emergencia 24/7', 'Sin cargos por horas extra', 'Refrigeración restaurada el mismo día', 'Todas las marcas y modelos cubiertos'],
        },
      ],
      whyUs: {
        eyebrow: 'Por Qué Atlas',
        heading: 'Especialistas en Refrigeración de NJ',
        description:
          'Un verano en NJ sin aire acondicionado es insoportable. Nuestros técnicos certificados EPA están listos para responder rápidamente, diagnosticar con precisión y restaurar su confort — el mismo día.',
        certBadge: 'Certificado EPA 608',
        items: [
          { title: 'Certificado EPA 608',        desc: 'Todos los técnicos tienen certificación EPA 608 para refrigerantes.' },
          { title: 'Precios Fijos',              desc: 'Conozca su precio por adelantado — sin sorpresas, nunca.'            },
          { title: 'Servicio el Mismo Día',      desc: 'La mayoría de trabajos se programan en horas desde su llamada.'     },
          { title: 'Garantía de Satisfacción',   desc: '100% satisfecho o volvemos y lo arreglamos — sin preguntas.'        },
        ],
      },
    },

    // ── Plumbing Page ────────────────────────────────────────────────────────
    plumbingPage: {
      hero: {
        badge: 'Licenciado y Asegurado — Servicio 24/7',
        headline1: 'Servicios Profesionales de',
        headline2: 'Plomería',
        headline3: 'en Nueva Jersey',
        subheadline:
          'Desde reparaciones de emergencia hasta instalaciones completas de sistemas — Atlas Plumbing ofrece plomería rápida y confiable en la que puede contar.',
        callNow: 'Llamar Ahora — (555) 123-4567',
        freeEstimate: 'Presupuesto Gratis',
      },
      intro: {
        eyebrow: 'Lo Que Ofrecemos',
        heading: 'Nuestros Servicios de Plomería',
        subheading: 'Soluciones expertas para cada necesidad de plomería — residencial y comercial. Desplácese para explorar cada servicio.',
      },
      callForService: 'Llamar para Este Servicio',
      services: [
        {
          title: 'Reparaciones Residenciales de Plomería',
          description:
            'Desde un grifo de cocina que gotea hasta una tubería rota debajo del fregadero, nuestros plomeros certificados manejan cada reparación residencial con velocidad y precisión. Llegamos completamente equipados para que la mayoría de trabajos se completen en una sola visita.',
          badge: 'Servicio Residencial',
          features: ['Servicio el mismo día para la mayoría de reparaciones', 'Camiones de servicio completamente equipados', 'Reparaciones de cocina, baño y utilidades', 'Sin cargos por horas extra o fuera del horario'],
        },
        {
          title: 'Sistemas de Plomería Comercial',
          description:
            'Las instalaciones comerciales a gran escala requieren plomería de ingeniería de precisión. Nuestro equipo diseña, instala y mantiene redes de tuberías complejas para edificios de oficinas, instalaciones industriales y propiedades de múltiples unidades.',
          badge: 'Servicio Comercial',
          features: ['Diseño e instalación completa del sistema', 'Conforme al código para todos los tipos de instalaciones', 'Contratos de mantenimiento preventivo', 'Mínima interrupción del negocio'],
        },
        {
          title: 'Instalación y Reparación de Tuberías',
          description:
            'Ya sea que necesite tuberías nuevas para una renovación o una reparación urgente, manejamos todos los tipos — cobre, PVC, PEX y acero galvanizado. Nuestros técnicos diagnostican la causa raíz y brindan una solución permanente, no un parche temporal.',
          badge: 'Servicios de Tuberías',
          features: ['Todos los materiales y tamaños de tuberías cubiertos', 'Instalaciones para construcciones nuevas y remodelaciones', 'Reparación de emergencia — respuesta 24/7', 'Trabajo duradero y aprobado por el código'],
        },
        {
          title: 'Instalación y Mejora de Accesorios',
          description:
            'Mejore su hogar o negocio con accesorios modernos y eficientes en agua instalados por profesionales. Desde elegantes grifos de cocina hasta alcachofas de ducha de alto rendimiento, aseguramos que cada accesorio funcione perfectamente desde el primer día.',
          badge: 'Mejoras de Accesorios',
          features: ['Accesorios de cocina, baño y utilidades', 'Mejoras eficientes en agua disponibles', 'Equilibrio adecuado de presión y flujo', 'Todas las marcas principales instaladas'],
        },
        {
          title: 'Presión de Agua y Sistemas de Bomba',
          description:
            'La baja presión del agua y los sistemas de bomba defectuosos pueden paralizar hogares y negocios. Instalamos, mantenemos y reparamos todo tipo de bombas de agua — bombas de refuerzo, bombas de pozo y configuraciones de grado industrial.',
          badge: 'Sistemas de Bomba',
          features: ['Instalación de bombas de refuerzo y de pozo', 'Diagnóstico y equilibrio de presión', 'Sistemas industriales y residenciales', 'Planes de mantenimiento preventivo'],
        },
      ],
      whyUs: {
        eyebrow: 'Por Qué Atlas',
        heading: 'Expertos en Plomería de Confianza en Nueva Jersey',
        description:
          'Durante más de 15 años, Atlas Plumbing ha sido la opción preferida para propietarios y negocios en toda Nueva Jersey. Nuestros técnicos están altamente capacitados y listos para resolver cualquier desafío de plomería.',
        certBadge: '15+ Años Sirviendo a NJ',
        items: [
          { title: 'Licenciado y Asegurado',     desc: 'Todos los técnicos tienen licencia, fianza y seguro de NJ.'           },
          { title: 'Precios Transparentes',      desc: 'Presupuestos de tarifa fija antes de comenzar — sin facturas sorpresa.' },
          { title: 'Servicio el Mismo Día',      desc: 'La mayoría de trabajos se programan para el mismo día que llama.'      },
          { title: 'Satisfacción Garantizada',   desc: '100% de satisfacción o volvemos y lo hacemos bien.'                    },
        ],
      },
    },
  },
} as const
