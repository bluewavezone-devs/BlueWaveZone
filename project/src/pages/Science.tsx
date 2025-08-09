import React, { useState } from 'react';
import { Calendar, Tag } from 'lucide-react';

const Science: React.FC = () => {
  const [activeTab, setActiveTab] = useState('rhizosphere');

  const tabs = [
    { id: 'rhizosphere', label: 'Rhizosphere' },
    { id: 'pure-soil', label: 'Pure Soil' },
    { id: 'industry', label: 'Industry' },
    { id: 'agriculture', label: 'Agriculture' },
    { id: 'gut-microbiota', label: 'Gut Microbiota' },
    { id: 'bacteria-research', label: 'Bacteria Research' }
  ];

  const articles = {
    rhizosphere: [
      {
        title: 'The Rhizosphere Microbiome: Nature\'s Underground Network',
        date: '2025-01-10',
        category: 'Rhizosphere',
        content: `The rhizosphere represents one of the most dynamic and bioactive zones in terrestrial ecosystems. This narrow region of soil directly influenced by root secretions and associated soil microorganisms plays a crucial role in plant health, nutrient cycling, and ecosystem stability.

**Understanding Rhizosphere Dynamics**

The rhizosphere extends approximately 1-3 millimeters from the root surface, creating a unique microenvironment where plant roots, bacteria, fungi, and other microorganisms interact in complex ways. This zone is characterized by:

- Enhanced microbial activity (10-100 times higher than bulk soil)
- Increased nutrient availability
- Modified pH and oxygen levels
- Rich biochemical signaling networks

**Bacterial Communities in the Rhizosphere**

The bacterial communities in the rhizosphere are remarkably diverse, with studies showing that a single gram of rhizosphere soil can contain up to 10^9 bacterial cells representing thousands of different species. These communities are primarily dominated by:

1. **Proteobacteria** - Including nitrogen-fixing Rhizobium species
2. **Actinobacteria** - Known for antibiotic production
3. **Bacteroidetes** - Specialized in complex carbon degradation
4. **Firmicutes** - Spore-forming bacteria with stress resistance

**Plant-Bacteria Interactions**

The relationship between plants and rhizosphere bacteria is largely mutualistic. Plants release up to 30% of their photosynthetically fixed carbon as root exudates, which serve as energy sources for bacterial communities. In return, bacteria provide numerous benefits:

- **Nutrient mobilization**: Converting inorganic nutrients into bioavailable forms
- **Growth promotion**: Producing plant hormones like auxins and cytokinins
- **Disease suppression**: Outcompeting pathogens and producing antimicrobial compounds
- **Stress tolerance**: Helping plants cope with drought, salinity, and heavy metals

**Research Implications**

Our research at BlueWave Zone focuses on isolating and characterizing beneficial rhizosphere bacteria that can be developed into bioinoculants for agricultural applications. By understanding the natural mechanisms that govern plant-bacteria interactions, we can harness these relationships to develop sustainable solutions for crop production and soil health management.`
      },
      {
        title: 'Isolation Techniques for Rhizosphere Bacteria',
        date: '2025-01-08',
        category: 'Rhizosphere',
        content: `The isolation and cultivation of rhizosphere bacteria presents unique challenges due to their specialized growth requirements and complex ecological relationships. This technical guide outlines the methodologies we employ at BlueWave Zone for successful bacterial isolation.

**Sample Collection Protocols**

Proper sample collection is critical for maintaining bacterial viability and diversity:

1. **Site Selection**: Choose areas with healthy, actively growing plants
2. **Timing**: Collect during active growing season when root exudation is high
3. **Depth**: Focus on the upper 10-15 cm of soil where root activity is greatest
4. **Storage**: Maintain samples at 4°C and process within 24 hours

**Physical Separation Methods**

The first step involves physically separating rhizosphere soil from bulk soil:

- **Root Washing**: Gently shake roots to remove loosely adhering soil
- **Sonication**: Brief ultrasonic treatment to dislodge tightly bound bacteria
- **Serial Dilution**: Create dilution series from 10^-3 to 10^-8

**Selective Cultivation Approaches**

Different bacterial groups require specific cultivation conditions:

**Nitrogen-Fixing Bacteria**
- Medium: Nitrogen-free media (Ashby's, Jensen's)
- Atmosphere: Microaerophilic conditions
- Temperature: 28-30°C
- Indicators: Acetylene reduction assay for nitrogenase activity

**Phosphate-Solubilizing Bacteria**
- Medium: Pikovskaya's agar with insoluble phosphates
- pH: 6.8-7.2
- Indicators: Clear halos around colonies

**Siderophore Producers**
- Medium: Iron-limited conditions
- Detection: Chrome azurol S (CAS) assay
- Characteristics: Orange halos on CAS plates

**Modern Molecular Techniques**

Traditional cultivation methods capture only 1-5% of bacterial diversity. We complement culture-dependent approaches with:

- **16S rRNA gene sequencing**: For taxonomic identification
- **Metagenomics**: To understand functional potential
- **qPCR**: For quantification of specific bacterial groups
- **FISH**: For spatial distribution analysis

**Quality Control and Validation**

All isolated strains undergo rigorous characterization:
- Morphological analysis
- Biochemical testing
- Molecular identification
- Functional assessment (plant growth promotion, biocontrol)
- Storage in glycerol stocks at -80°C

This systematic approach ensures that we maintain viable cultures with documented beneficial properties for downstream applications.`
      }
    ],
    'pure-soil': [
      {
        title: 'Defining Pure Soil: Standards and Characteristics',
        date: '2025-01-07',
        category: 'Pure Soil',
        content: `Pure soil represents the foundation of our research at BlueWave Zone. Understanding what constitutes "pure" soil and establishing rigorous standards for soil quality assessment is essential for consistent bacterial extraction and application development.

**Defining Pure Soil**

Pure soil, in the context of our research, refers to soil samples that meet specific criteria for minimal contamination and optimal microbial diversity. These criteria include:

**Chemical Purity Standards**
- Heavy metal concentrations below WHO guidelines
- Absence of synthetic pesticides and herbicides
- Low levels of industrial pollutants
- Balanced pH (6.0-7.5) indicating minimal acid/base contamination
- Appropriate nutrient levels without artificial fertilizer residues

**Biological Integrity Markers**
- High microbial diversity indices (Shannon index >3.5)
- Presence of indicator species for healthy soil ecosystems
- Absence of pathogenic microorganisms
- Active enzymatic activity (dehydrogenase, phosphatase, urease)
- Robust fungal-bacterial ratios (typically 1:100 to 1:1000)

**Physical Characteristics**
- Optimal soil structure with adequate pore space
- Appropriate water-holding capacity
- Minimal compaction
- Organic matter content of 3-6%
- Absence of physical contaminants (plastics, metals)

**Source Identification and Selection**

We source pure soil from carefully selected environments:

**Protected Areas**
- National parks and nature reserves
- Areas with minimal human intervention
- Locations with documented ecological stability
- Sites with diverse plant communities

**Agricultural Considerations**
- Organic farms with multi-year certification
- Permaculture systems with established soil health
- Pastures with rotational grazing practices
- Areas with minimal external inputs

**Testing Protocols**

Our soil purity assessment involves comprehensive testing:

1. **Chemical Analysis**: ICP-MS for heavy metals, GC-MS for organic contaminants
2. **Microbiological Screening**: Culture-based and molecular diversity assessments
3. **Enzyme Activity Tests**: Multiple enzyme assays as biological health indicators
4. **Physical Characterization**: Particle size distribution, bulk density, porosity

**Maintenance of Soil Integrity**

Once identified, pure soil samples require careful handling:
- Sterile collection techniques
- Appropriate storage conditions (4°C, controlled moisture)
- Documentation of collection metadata
- Regular quality assessments during storage

**Research Applications**

Pure soil serves as our primary source for:
- Bacterial strain isolation programs
- Comparative studies of microbial communities
- Development of quality control standards
- Training datasets for soil health assessment tools

By maintaining strict standards for soil purity, we ensure that our bacterial extraction processes yield high-quality cultures with consistent beneficial properties for agricultural, industrial, and medical applications.`
      }
    ],
    industry: [
      {
        title: 'Industrial Biotechnology Applications of Soil Bacteria',
        date: '2025-01-06',
        category: 'Industry',
        content: `Soil bacteria represent an untapped reservoir of biotechnological potential for industrial applications. Our research at BlueWave Zone focuses on identifying and developing bacterial strains that can address key industrial challenges while promoting sustainability.

**Enzyme Production and Biocatalysis**

Soil bacteria produce a remarkable diversity of enzymes with industrial applications:

**Proteases**
- Applications: Detergent industry, leather processing, food production
- Advantages: High stability, broad pH tolerance, temperature resistance
- Key species: Bacillus subtilis, Streptomyces griseus
- Market value: $2.5 billion globally

**Lipases**
- Applications: Biodiesel production, pharmaceutical synthesis, food processing
- Benefits: Enantioselective catalysis, mild reaction conditions
- Sources: Pseudomonas species, Bacillus thermocatenulatus
- Efficiency: Up to 95% conversion rates in optimal conditions

**Cellulases and Hemicellulases**
- Applications: Paper and pulp, textile industry, biofuel production
- Sustainability: Replacement of harsh chemical treatments
- Producers: Trichoderma reesei, Cellulomonas species
- Impact: 30-50% reduction in chemical usage

**Bioremediation and Waste Treatment**

Soil bacteria excel at degrading complex organic compounds:

**Hydrocarbon Degradation**
- Target compounds: Petroleum products, PAHs, BTEX compounds
- Mechanisms: Aerobic and anaerobic metabolism pathways
- Efficiency: 70-95% removal rates in optimized conditions
- Applications: Oil spill cleanup, contaminated site restoration

**Heavy Metal Bioremediation**
- Processes: Biosorption, bioaccumulation, biotransformation
- Target metals: Lead, cadmium, chromium, mercury
- Bacterial groups: Pseudomonas, Bacillus, Ralstonia species
- Advantages: Cost-effective, environmentally friendly

**Plastic Degradation**
- Target polymers: PET, polyurethane, polystyrene
- Novel enzymes: PETases, cutinases, esterases
- Research status: Emerging field with high commercial potential
- Timeline: 5-10 years to commercial viability

**Biosynthesis of Industrial Chemicals**

Bacteria can produce valuable chemicals through fermentation:

**Organic Acids**
- Products: Citric acid, lactic acid, acetic acid
- Applications: Food preservatives, biodegradable plastics
- Production volumes: Multi-million ton scale
- Benefits: Renewable feedstocks, lower environmental impact

**Amino Acids**
- Key products: L-lysine, L-glutamate, L-threonine
- Markets: Animal feed, pharmaceuticals, cosmetics
- Production methods: Fed-batch fermentation
- Global market: $15+ billion annually

**Biopolymers**
- Products: Polyhydroxyalkanoates (PHAs), bacterial cellulose
- Properties: Biodegradable, biocompatible
- Applications: Packaging, medical devices, textiles
- Growth potential: 15-20% annual market expansion

**Manufacturing Process Integration**

Our research focuses on integrating bacterial processes into existing industrial operations:

**Process Optimization**
- Fermentation parameter optimization
- Downstream processing development
- Scale-up from laboratory to industrial scale
- Cost-benefit analysis and economic modeling

**Quality Control**
- Strain stability maintenance
- Product purity standards
- Regulatory compliance protocols
- Environmental impact assessment

**Future Directions**

The industrial biotechnology sector is rapidly evolving, with soil bacteria playing an increasingly important role in:
- Circular economy implementations
- Green chemistry initiatives
- Sustainable manufacturing practices
- Climate change mitigation strategies

Our ongoing research continues to identify novel bacterial strains and develop innovative applications that can transform industrial processes while reducing environmental impact.`
      }
    ],
    agriculture: [
      {
        title: 'Bacterial Bioinoculants: Revolutionizing Sustainable Agriculture',
        date: '2025-01-05',
        category: 'Agriculture',
        content: `The integration of beneficial bacteria into agricultural systems represents one of the most promising approaches for achieving sustainable crop production. Our research at BlueWave Zone focuses on developing effective bacterial bioinoculants that enhance crop productivity while reducing environmental impact.

**The Science Behind Bioinoculants**

Bioinoculants are living microorganisms that, when applied to plants or soil, provide beneficial effects through various mechanisms:

**Plant Growth Promotion**
- Hormone production (auxins, cytokinins, gibberellins)
- Enhanced nutrient uptake efficiency
- Root system development stimulation
- Photosynthetic capacity improvement

**Nutrient Mobilization**
- Nitrogen fixation from atmospheric N2
- Phosphorus solubilization from inorganic sources
- Potassium mobilization from soil minerals
- Micronutrient chelation and transport

**Disease Suppression**
- Antibiotic compound production
- Competition for nutrients and space
- Induced systemic resistance activation
- Pathogen growth inhibition

**Key Bacterial Groups in Our Research**

**Rhizobium Species**
- Primary function: Symbiotic nitrogen fixation
- Host plants: Legumes (soybeans, peas, beans, alfalfa)
- Nitrogen fixation rates: 100-300 kg N/ha/year
- Economic impact: $10-15 billion annually in saved fertilizer costs

**Bacillus Species**
- Functions: Disease suppression, growth promotion, stress tolerance
- Advantages: Spore formation, environmental stability, broad host range
- Key strains: B. subtilis, B. amyloliquefaciens, B. licheniformis
- Applications: Seed coating, soil drench, foliar spray

**Pseudomonas Fluorescens**
- Primary benefits: Root colonization, pathogen suppression
- Mechanisms: Siderophore production, HCN synthesis, enzyme secretion
- Stability: Excellent rhizosphere competence
- Crop applications: Cereals, vegetables, ornamentals

**Azospirillum Species**
- Function: Associative nitrogen fixation and growth promotion
- Host range: Grasses, cereals (wheat, corn, rice)
- Nitrogen contribution: 20-40% of plant nitrogen needs
- Additional benefits: Drought tolerance, root development

**Formulation Technologies**

Successful bioinoculant development requires sophisticated formulation approaches:

**Carrier Systems**
- Peat-based formulations: Traditional, cost-effective
- Vermiculite carriers: Improved bacterial survival
- Alginate encapsulation: Controlled release properties
- Liquid formulations: Easy application, rapid colonization

**Stability Enhancement**
- Cryoprotectant addition for freeze-drying
- pH buffer systems for soil pH variations
- Osmoprotectant inclusion for drought resistance
- Multi-strain compatibility optimization

**Quality Control Standards**
- Minimum viable cell counts (10^8-10^9 CFU/ml)
- Purity testing for contaminants
- Shelf-life validation (12-24 months)
- Field efficacy verification

**Field Performance and Efficacy**

Our extensive field trials demonstrate significant benefits:

**Yield Improvements**
- Cereals: 10-25% yield increases
- Legumes: 15-30% productivity gains
- Vegetables: 20-40% enhanced production
- Consistency: 70-80% of trials show positive results

**Input Reduction**
- Nitrogen fertilizer savings: 20-50%
- Phosphorus application reduction: 30-60%
- Pesticide use decrease: 25-45%
- Water use efficiency improvement: 15-25%

**Economic Benefits**
- Return on investment: 3:1 to 8:1 ratio
- Cost per hectare: $10-50 (vs. $200-400 for chemical fertilizers)
- Market size: $2.3 billion globally, growing 12% annually
- Adoption rates: 15-20% in developed countries, 5-10% in developing regions

**Implementation Strategies**

**Farmer Education**
- Training programs on application methods
- Demonstration plots and field days
- Technical support and troubleshooting
- Economic impact documentation

**Integration with Existing Practices**
- Compatibility with conventional farming systems
- Organic certification compliance
- IPM (Integrated Pest Management) incorporation
- Precision agriculture technology integration

**Future Research Directions**

Our ongoing research focuses on:
- Multi-strain consortia development
- Climate-resilient bacterial strains
- Precision application technologies
- Digital monitoring and optimization systems

The future of sustainable agriculture increasingly relies on harnessing the power of beneficial bacteria to create productive, environmentally responsible farming systems.`
      }
    ],
    'gut-microbiota': [
      {
        title: 'Soil-to-Gut: Exploring Bacterial Connections in Human Health',
        date: '2025-01-04',
        category: 'Gut Microbiota',
        content: `The connection between soil bacteria and human gut microbiota represents a fascinating area of research that bridges environmental microbiology and human health. Our investigations at BlueWave Zone explore how soil-derived bacteria can contribute to gut health and therapeutic applications.

**The Soil-Gut Connection**

Recent research has revealed surprising similarities between soil and gut microbial communities:

**Shared Bacterial Families**
- Bacteroidetes: Major component of both ecosystems
- Firmicutes: Dominant in gut, common in soil
- Actinobacteria: Antibiotic producers in both environments
- Proteobacteria: Metabolically diverse in soil and gut

**Functional Parallels**
- Complex carbohydrate degradation
- Short-chain fatty acid production
- Antimicrobial compound synthesis
- pH regulation and buffering
- Nutrient cycling and availability

**Evolutionary Perspectives**
The human gut microbiome evolved in close contact with environmental microorganisms, suggesting that soil bacteria may play important roles in maintaining gut health through:
- Priming immune system development
- Providing metabolic diversity
- Contributing to microbial succession patterns
- Offering protective functions against pathogens

**Soil Bacteria with Gut Health Potential**

**Spore-Forming Bacillus Species**
- Survival advantages: Acid resistance, bile tolerance
- Therapeutic potential: Digestive enzyme production, immune modulation
- Safety profile: Generally recognized as safe (GRAS) status
- Research applications: Probiotic development, gut barrier function

**Bifidobacterium from Soil Sources**
- Habitat: Soil, plant surfaces, animal intestines
- Health benefits: Lactose metabolism, immune support
- Mechanisms: Organic acid production, pathogen inhibition
- Clinical applications: Infant gut colonization, elderly health

**Lactobacillus Environmental Strains**
- Sources: Fermented plants, soil environments
- Functions: Lactic acid production, antimicrobial activity
- Diversity: Higher genetic diversity in environmental strains
- Applications: Novel probiotic development, fermented foods

**Research Methodologies**

**In Vitro Studies**
- Simulated gastric fluid survival tests
- Bile salt tolerance assays
- Adhesion to intestinal cell lines
- Antimicrobial activity screening
- Metabolite profiling analysis

**Animal Model Research**
- Germ-free mouse colonization studies
- Inflammatory bowel disease models
- Metabolic syndrome investigations
- Immune system development analysis
- Microbiome diversity assessments

**Clinical Translation Pathways**
- Phase I safety studies
- Dose-response relationship establishment
- Biomarker development for efficacy
- Regulatory pathway navigation
- Manufacturing scale-up considerations

**Therapeutic Applications**

**Digestive Health**
- Irritable bowel syndrome management
- Inflammatory bowel disease support
- Antibiotic-associated diarrhea prevention
- Small intestinal bacterial overgrowth treatment
- Digestive enzyme supplementation

**Immune System Support**
- Allergy prevention and management
- Autoimmune condition modulation
- Vaccine response enhancement
- Infection resistance improvement
- Inflammation regulation

**Metabolic Health**
- Obesity management support
- Diabetes prevention strategies
- Cholesterol level regulation
- Fatty liver disease intervention
- Metabolic syndrome treatment

**Challenges and Considerations**

**Safety Assessment**
- Comprehensive toxicological studies
- Antibiotic resistance screening
- Virulence factor absence verification
- Environmental impact assessment
- Long-term safety monitoring

**Regulatory Requirements**
- FDA/EMA approval pathways
- Good Manufacturing Practice compliance
- Clinical trial design standards
- Labeling and marketing guidelines
- Post-market surveillance protocols

**Technical Challenges**
- Strain stability during production
- Delivery system optimization
- Standardization of bacterial preparations
- Quality control methodology development
- Shelf-life extension techniques

**Future Research Directions**

**Personalized Medicine**
- Microbiome analysis-based selection
- Individual strain response profiling
- Genetic marker identification
- Customized bacterial consortia development
- Precision dosing strategies

**Advanced Delivery Systems**
- Targeted release technologies
- Microencapsulation methods
- Synbiotic formulations (probiotics + prebiotics)
- Engineered bacterial strains
- Smart delivery devices

**Multi-Omics Integration**
- Genomics, transcriptomics, proteomics, metabolomics
- Systems biology approaches
- Artificial intelligence applications
- Predictive modeling development
- Real-time monitoring systems

The intersection of soil microbiology and gut health research offers tremendous potential for developing innovative therapeutic approaches that harness the power of environmental bacteria for human health benefits.`
      }
    ],
    'bacteria-research': [
      {
        title: 'Advanced Techniques in Bacterial Research and Characterization',
        date: '2025-01-03',
        category: 'Bacteria Research',
        content: `Modern bacterial research employs cutting-edge techniques to understand microbial diversity, function, and application potential. At BlueWave Zone, we utilize a comprehensive array of methodologies to characterize bacteria isolated from pure soil environments.

**Genomic Approaches**

**Whole Genome Sequencing (WGS)**
- Technology: Illumina NovaSeq, Oxford Nanopore MinION
- Coverage: 100-200x depth for comprehensive analysis
- Applications: Strain identification, functional prediction, comparative genomics
- Outputs: Complete genome assemblies, gene annotations, metabolic pathways
- Timeline: 48-72 hours from DNA extraction to analysis

**Comparative Genomics**
- Database integration: NCBI, KEGG, COG, CAZy databases
- Analysis tools: BLAST, Mauve, OrthoMCL, PhyloPhlAn
- Insights: Evolutionary relationships, horizontal gene transfer, unique genes
- Applications: Strain selection, functional validation, patent landscape analysis

**Pangenome Analysis**
- Core genome: Genes present in all strains (typically 60-80%)
- Accessory genome: Variable genes conferring specific traits
- Cloud genome: Rare genes present in few isolates
- Significance: Understanding strain diversity and adaptation mechanisms

**Transcriptomic Studies**

**RNA Sequencing (RNA-seq)**
- Sample types: Pure cultures, environmental samples, host-associated bacteria
- Conditions: Various stress conditions, growth phases, co-culture experiments
- Analysis: Differential expression, pathway enrichment, regulatory networks
- Validation: qRT-PCR confirmation of key findings

**Single-Cell RNA Sequencing**
- Technology: 10x Genomics, Drop-seq protocols
- Applications: Heterogeneity analysis, rare cell type identification
- Challenges: Low RNA content, amplification bias, computational complexity
- Future potential: Understanding bacterial communication, stress responses

**Proteomic Approaches**

**Mass Spectrometry-Based Proteomics**
- Instruments: Orbitrap, Q-TOF, Triple Quadrupole systems
- Methods: Label-free quantification, iTRAQ, SILAC
- Coverage: 2000-4000 proteins per analysis
- Applications: Functional validation, biomarker discovery, stress response analysis

**Structural Proteomics**
- X-ray crystallography: Protein structure determination
- Cryo-electron microscopy: Large complex structures
- NMR spectroscopy: Solution structures, dynamics
- Applications: Drug target identification, enzyme engineering, mechanism elucidation

**Metabolomic Analysis**

**Untargeted Metabolomics**
- Platforms: LC-MS, GC-MS, NMR spectroscopy
- Coverage: 500-2000 metabolites per sample
- Applications: Biomarker discovery, pathway analysis, phenotyping
- Challenges: Metabolite identification, standardization, data integration

**Targeted Metabolomics**
- Focus: Specific metabolic pathways or compound classes
- Sensitivity: ng/L to mg/L detection limits
- Applications: Bioactive compound quantification, quality control
- Methods: Multiple reaction monitoring (MRM), selected ion monitoring (SIM)

**Microscopy and Imaging**

**Advanced Light Microscopy**
- Confocal microscopy: 3D structure visualization
- Super-resolution techniques: PALM, STORM, SIM
- Live cell imaging: Time-lapse bacterial behavior
- Fluorescence labeling: GFP, specific stains, immunofluorescence

**Electron Microscopy**
- Transmission EM: Internal structure analysis
- Scanning EM: Surface morphology characterization
- Cryo-EM: Native state preservation
- Applications: Ultrastructure, biofilm architecture, cell division studies

**Functional Characterization**

**Enzyme Activity Assays**
- Colorimetric assays: Substrate-specific measurements
- Fluorogenic substrates: High sensitivity detection
- Kinetic parameters: Km, Vmax, inhibition constants
- Environmental conditions: pH, temperature, salinity optimization

**Antimicrobial Activity Screening**
- Agar diffusion assays: Zone of inhibition measurements
- MIC/MBC determination: Quantitative antimicrobial assessment
- Time-kill studies: Bactericidal vs. bacteriostatic effects
- Resistance development: Long-term exposure studies

**Plant Growth Promotion Assays**
- Hormone quantification: IAA, cytokinins, gibberellins
- Nutrient mobilization: Phosphate solubilization, nitrogen fixation
- Biofilm formation: Root colonization ability
- Stress tolerance: Salt, drought, heavy metal resistance

**Bioinformatics and Data Integration**

**Phylogenetic Analysis**
- Software: MEGA, PhyML, RAxML, IQ-TREE
- Markers: 16S rRNA, multi-locus sequence typing (MLST)
- Applications: Taxonomic classification, evolutionary relationships
- Validation: Bootstrap analysis, posterior probabilities

**Functional Annotation**
- Tools: RAST, IMG, PROKKA, eggNOG-mapper
- Databases: UniProt, KEGG, COG, Pfam
- Outputs: Gene functions, metabolic pathways, protein domains
- Quality assessment: Manual curation, experimental validation

**Machine Learning Applications**
- Classification: Strain typing, function prediction
- Clustering: Metabolite grouping, expression patterns
- Regression: Growth prediction, optimization
- Deep learning: Image analysis, sequence analysis

**Quality Control and Standardization**

**Reference Standards**
- Type strains: Authenticated reference cultures
- Control samples: Positive and negative controls
- Standard protocols: Reproducible methodologies
- Inter-laboratory validation: Method transferability

**Data Management**
- FAIR principles: Findable, Accessible, Interoperable, Reusable
- Metadata standards: Minimum information requirements
- Database submissions: GenBank, SRA, MetaboLights
- Long-term storage: Institutional repositories, cloud storage

**Future Directions**

**Emerging Technologies**
- CRISPR-based diagnostics: Rapid bacterial identification
- Microfluidics: Single-cell analysis platforms
- AI-driven discovery: Automated hypothesis generation
- Synthetic biology: Engineered bacterial systems

**Integration Approaches**
- Multi-omics data fusion: Systems-level understanding
- Network analysis: Interaction mapping
- Predictive modeling: Phenotype prediction from genotype
- Real-time monitoring: Sensor-based bacterial tracking
`
      }
    ],
    'gut-microbiome': [
      {
        title: 'The Gut Microbiome and Human Health',
        date: '2024-12-01',
        category: 'Gut Microbiome',
        content: `
**Introduction**

The human gut microbiome is a complex ecosystem composed of trillions of microorganisms that play a crucial role in maintaining our overall health and well-being. The gut microbiome influences various physiological processes, including digestion, immune system function, and even brain development.

**Gut Microbiome Composition**

The gut microbiome is composed of various microorganisms, including bacteria, viruses, fungi, and protozoa. The most abundant phyla in the human gut microbiome are Firmicutes, Bacteroidetes, Actinobacteria, and Proteobacteria.

**Gut Microbiome Functions**

The gut microbiome performs various functions that are essential for our health, including:

* Digestion and absorption of nutrients
* Production of certain vitamins, such as vitamin K and biotin
* Modulation of the immune system
* Production of hormones and neurotransmitters
* Maintenance of the gut barrier function

**Gut Microbiome and Disease**

An imbalance of the gut microbiome, also known as dysbiosis, has been linked to various diseases, including:

* Inflammatory bowel disease (IBD)
* Irritable bowel syndrome (IBS)
* Obesity and metabolic disorders
* Mental health disorders, such as anxiety and depression
* Autoimmune diseases, such as rheumatoid arthritis and lupus

**Modulating the Gut Microbiome**

The gut microbiome can be modulated through various means, including:

* Probiotics: Live microorganisms that confer health benefits
* Prebiotics: Non-digestible fibers that feed beneficial microorganisms
* Synbiotics: Combination of probiotics and prebiotics
* Fecal microbiota transplantation (FMT): Transfer of fecal matter from a healthy donor to a patient

**Future Directions**

The study of the gut microbiome is a rapidly evolving field, and future research directions include:

* Elucidating the mechanisms by which the gut microbiome influences human health
* Developing novel therapeutic strategies to modulate the gut microbiome
* Investigating the role of the gut microbiome in various diseases
* Exploring the potential of the gut microbiome as a diagnostic tool
`
      }
    ]
  };

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
      {/* Hero Section */}
      <section className="section py-24">
  <div className="container flex flex-col items-center justify-center text-center">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4 tracking-tight">
      SCIENCE <span className="text-teal-600 underline decoration-4 decoration-teal-400">FRONTIER</span>
    </h1>
    <p className="text-xl sm:text-2xl text-gray-700 max-w-2xl mx-auto mb-8 mt-2">
      Explore the latest discoveries in soil, microbiomes, and applied science for agriculture, industry, and health.
    </p>
    <a
      href="/blog"
      className="px-6 py-3 rounded border border-teal-600 text-teal-700 bg-white font-medium shadow hover:bg-teal-50 transition-colors mb-10"
    >
      Read Our Science Blog
    </a>
  </div>
</section>
      <section className="space-y-12">
        <div className="flex flex-col space-y-4 md:space-y-6 lg:space-y-12 xl:space-y-24">
          <h1 className="text-3xl font-bold" style={{ color: 'var(--color-deep-blue)' }}>
            Science
          </h1>
          <div className="flex flex-col space-y-4 md:space-y-6 lg:space-y-12 xl:space-y-24">
            <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-12 xl:gap-24">
              {tabs.map((tabObj, index) => (
                <button
                  key={index}
                  className={`py-2 px-4 rounded-md text-sm font-medium ${
                    activeTab === tabObj.id
                      ? 'bg-teal-100 text-teal-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveTab(tabObj.id)}
                >
                  {tabObj.label}
                </button>
              ))}
            </div>
            {/* Articles */}
            <div className="space-y-8">
              {articles[activeTab as keyof typeof articles]?.map((article, index) => (
                <article key={index} className="card">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag className="h-4 w-4" />
                      <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-md text-xs font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-deep-blue)' }}>
                    {article.title}
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    {article.content.split('\n\n').map((paragraph: string, pIndex: number) => {
                      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                        return (
                          <h3 key={pIndex} className="text-xl font-semibold mt-8 mb-4" style={{ color: 'var(--color-teal)' }}>
                            {paragraph.slice(2, -2)}
                          </h3>
                        );
                      } else if (paragraph.startsWith('- ')) {
                        const items = paragraph.split('\n').filter((line: string) => line.startsWith('- '));
                        return (
                          <ul key={pIndex} className="list-disc pl-6 mb-4 space-y-2">
                            {items.map((item: string, itemIndex: number) => (
                              <li key={itemIndex}>{item.slice(2)}</li>
                            ))}
                          </ul>
                        );
                      } else if (paragraph.match(/^\d+\./)) {
                        const items = paragraph.split('\n').filter((line: string) => line.match(/^\d+\./));
                        return (
                          <ol key={pIndex} className="list-decimal pl-6 mb-4 space-y-2">
                            {items.map((item: string, itemIndex: number) => (
                              <li key={itemIndex}>{item.replace(/^\d+\.\s*/, '')}</li>
                            ))}
                          </ol>
                        );
                      } else {
                        return (
                          <p key={pIndex} className="mb-4 leading-relaxed">
                            {paragraph}
                          </p>
                        );
                      }
                    })}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Science;