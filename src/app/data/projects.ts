export const projects = [
  {
    id: 'screen-electrotech-company',
    name: 'Screen Electrotech Company — 250kW Industrial System',
    location: 'Lebanon',
    category: 'Industrial System',
    capacity: '250kW',
    year: '2024',
    tags: ['Industrial', '250kW', 'Manufacturing', 'Automation'],
    challenge: 'Industrial manufacturing facility needed to reduce operational costs and improve power reliability for continuous production.',
    solution: 'iPower designed a comprehensive 250kW on-grid electrical system with advanced automation controls for industrial manufacturing operations.',
    results: 'Achieved 30% energy cost reduction and 99.9% power reliability for continuous manufacturing operations.',
    specs: {
      systemType: 'On-Grid Industrial',
      capacity: '250kW',
      controllers: 'DEIF, Delta PLC',
      inverters: 'SMA Sunny Tripower',
      mounting: 'Industrial Roof-Mounted',
      integration: 'Generator synchronization with load sharing',
      monitoring: 'SCADA Industrial Monitoring System'
    },
    metrics: {
      capacity: '250kW',
      savings: '30%',
      hours: '12 hrs',
      co2: '45 tons/year'
    },
    images: ['warehouse.png', 'business-complex.png', 'farm.png'],
    video: 'hero.mp4',
    engineeringInsight: {
      title: 'Industrial Power Management: Optimizing Manufacturing Efficiency',
      content: 'Our industrial system design ensures continuous power flow with intelligent load balancing and automated generator synchronization for uninterrupted production.'
    }
  },
  {
    id: 'bent-jubail-hospital',
    name: 'Bent Jubail Hospital — 100kW Healthcare System',
    location: 'Bent Jubail, Lebanon',
    category: 'Healthcare System',
    capacity: '100kW',
    year: '2023',
    tags: ['Healthcare', '100kW', 'Hospital', 'Safety'],
    challenge: 'Critical healthcare facility required reliable backup power and energy cost reduction while maintaining patient safety standards.',
    solution: 'iPower implemented a 100kW on-grid system with hospital-grade safety standards and redundant power systems.',
    results: 'Achieved 35% energy cost reduction and zero power interruptions during critical medical operations.',
    specs: {
      systemType: 'On-Grid Healthcare',
      capacity: '100kW',
      controllers: 'Schneider Electric, DEIF',
      inverters: 'SMA Sunny Boy',
      mounting: 'Hospital Roof-Mounted',
      integration: 'Medical-grade UPS integration',
      monitoring: 'Real-time health monitoring system'
    },
    metrics: {
      capacity: '100kW',
      savings: '35%',
      hours: '10 hrs',
      co2: '20 tons/year'
    },
    images: ['hospital.png', 'school.png', 'villa.png'],
    engineeringInsight: {
      title: 'Healthcare Power: Ensuring Zero Interruption',
      content: 'Our healthcare system design prioritizes patient safety with redundant power paths and instant failover capabilities for critical medical equipment.'
    }
  },
  {
    id: 'jabal-el-ez-restaurant',
    name: 'Jabal El Ez Restaurant — 150 KVA Commercial System',
    location: 'South Lebanon',
    category: 'Restaurant System',
    capacity: '150 KVA',
    year: '2023',
    tags: ['Commercial', '150 KVA', 'Restaurant', 'Hospitality'],
    challenge: 'Restaurant operations needed reliable power for kitchen equipment and customer comfort while reducing energy costs.',
    solution: 'iPower designed a 150 KVA full load electrical system optimized for restaurant operations with kitchen equipment and HVAC systems.',
    results: 'Reduced energy costs by 25% while ensuring reliable power for all restaurant operations.',
    specs: {
      systemType: 'Commercial On-Grid',
      capacity: '150 KVA',
      controllers: 'Schneider Electric',
      inverters: 'SMA Sunny Boy',
      mounting: 'Restaurant Roof-Mounted',
      integration: 'Kitchen equipment integration',
      monitoring: 'Commercial monitoring dashboard'
    },
    metrics: {
      capacity: '150 KVA',
      savings: '25%',
      hours: '11 hrs',
      co2: '12 tons/year'
    },
    images: ['business-complex.png', 'shopping-center.png', 'eco-lodge.png']
  },
  {
    id: 'al-mabarrat-school',
    name: 'Al Mabarrat School — 60kW Educational System',
    location: 'Bent Jubail, Lebanon',
    category: 'Educational System',
    capacity: '60kW',
    year: '2023',
    tags: ['Educational', '60kW', 'School', 'Solar'],
    challenge: 'Educational institution needed to reduce energy costs while providing reliable power for classrooms and facilities.',
    solution: 'iPower implemented a 60kW on-grid system with generator synchronization for educational facilities.',
    results: 'Achieved 40% energy cost reduction and reliable power for educational activities.',
    specs: {
      systemType: 'On-Grid Educational',
      capacity: '60kW',
      controllers: 'DEIF, Schneider Electric',
      inverters: 'SMA Sunny Boy',
      mounting: 'School Roof-Mounted',
      integration: 'Generator synchronization (100, 150, 200 KVA)',
      monitoring: 'Educational facility monitoring'
    },
    metrics: {
      capacity: '60kW',
      savings: '40%',
      hours: '9 hrs',
      co2: '8 tons/year'
    },
    images: ['school.png', 'hospital.png', 'villa.png']
  },
  {
    id: 'hill-side-restaurant',
    name: 'Hill Side Restaurant — 250 KVA Commercial System',
    location: 'Shamaa, South Lebanon',
    category: 'Restaurant System',
    capacity: '250 KVA',
    year: '2023',
    tags: ['Commercial', '250 KVA', 'Restaurant', 'Water Pump'],
    challenge: 'Large restaurant facility needed comprehensive power solution including water pump systems and multiple generator coordination.',
    solution: 'iPower designed a 250 KVA load system with 50 HP water pump and 4-generator load sharing for optimal efficiency.',
    results: 'Achieved 30% energy cost reduction with improved water system efficiency and generator coordination.',
    specs: {
      systemType: 'Commercial Multi-Generator',
      capacity: '250 KVA',
      controllers: 'DEIF Multi-Generator',
      inverters: 'SMA Sunny Boy',
      mounting: 'Restaurant Complex',
      integration: '50 HP water pump + 4-generator load sharing',
      monitoring: 'Multi-generator monitoring system'
    },
    metrics: {
      capacity: '250 KVA',
      savings: '30%',
      hours: '12 hrs',
      co2: '18 tons/year'
    },
    images: ['business-complex.png', 'shopping-center.png', 'eco-lodge.png']
  },
  {
    id: 'solar-pump-system',
    name: 'Solar Pump System — 50 HP Agricultural System',
    location: 'Byot El Sayyad, Lebanon',
    category: 'Solar Pump System',
    capacity: '50 HP',
    year: '2023',
    tags: ['Solar', '50 HP', 'Agricultural', 'Pump'],
    challenge: 'Agricultural operation needed reliable water pumping system with solar power for irrigation and farming operations.',
    solution: 'iPower implemented a 50 HP solar pump system with 11 hours daily operation for agricultural irrigation.',
    results: 'Achieved 100% solar-powered irrigation with 11 hours daily operation and zero fuel costs.',
    specs: {
      systemType: 'Solar Pump System',
      capacity: '50 HP',
      controllers: 'Solar Pump Controller',
      inverters: 'Solar Pump Inverter',
      mounting: 'Ground-Mounted Solar Array',
      integration: 'Direct solar to pump conversion',
      monitoring: 'Solar pump performance monitoring'
    },
    metrics: {
      capacity: '50 HP',
      savings: '100%',
      hours: '11 hrs',
      co2: '25 tons/year'
    },
    images: ['farm.png', 'warehouse.png', 'business-complex.png'],
    engineeringInsight: {
      title: 'Agricultural Solar: Powering Sustainable Farming',
      content: 'Our solar pump system eliminates fuel dependency while providing reliable water supply for agricultural operations, supporting sustainable farming practices.'
    }
  },
  {
    id: 'bent-jbeil-university',
    name: 'Bent Jbeil University — 15kW Hybrid System',
    location: 'Bent Jbeil, Lebanon',
    category: 'Hybrid System',
    capacity: '15kW',
    year: '2023',
    tags: ['Hybrid', '15kW', 'University', 'International'],
    challenge: 'University facility needed hybrid power solution with international collaboration and educational demonstration capabilities.',
    solution: 'iPower implemented a 15kW hybrid system with Italian CIMIC team collaboration for educational and research purposes.',
    results: 'Created educational demonstration system with international collaboration and 20% energy cost reduction.',
    specs: {
      systemType: 'Hybrid Educational',
      capacity: '15kW',
      controllers: 'Hybrid Controller',
      inverters: 'Hybrid Inverter System',
      mounting: 'University Roof-Mounted',
      integration: 'International CIMIC collaboration',
      monitoring: 'Educational monitoring system'
    },
    metrics: {
      capacity: '15kW',
      savings: '20%',
      hours: '8 hrs',
      co2: '3 tons/year'
    },
    images: ['school.png', 'hospital.png', 'villa.png']
  },
  {
    id: 'alaweye-villa',
    name: 'Alaweye Villa — 30kW Residential System',
    location: 'Maron El Ras, Lebanon',
    category: 'Residential System',
    capacity: '30kW',
    year: '2023',
    tags: ['Residential', '30kW', 'Villa', '3-Phase'],
    challenge: 'Luxury residential villa needed comprehensive power solution with 3-phase system for high-end electrical loads.',
    solution: 'iPower designed a 30kW hybrid 3-phase system for luxury residential villa with smart home integration.',
    results: 'Achieved 45% energy cost reduction with smart home automation and 3-phase power reliability.',
    specs: {
      systemType: 'Residential Hybrid 3-Phase',
      capacity: '30kW',
      controllers: 'Smart Home Controller',
      inverters: '3-Phase Hybrid Inverter',
      mounting: 'Villa Roof-Mounted',
      integration: 'Smart home automation',
      monitoring: 'Residential smart monitoring'
    },
    metrics: {
      capacity: '30kW',
      savings: '45%',
      hours: '10 hrs',
      co2: '6 tons/year'
    },
    images: ['villa.png', 'school.png', 'hospital.png']
  }
];

export const getProjectById = (id: string) => {
  return projects.find(project => project.id === id);
};

export const getRelatedProjects = (currentProjectId: string, limit: number = 3) => {
  return projects
    .filter(project => project.id !== currentProjectId)
    .slice(0, limit)
    .map(project => ({
      id: project.id,
      name: project.name,
      category: project.category,
      capacity: project.capacity,
      image: project.images[0]
    }));
};
