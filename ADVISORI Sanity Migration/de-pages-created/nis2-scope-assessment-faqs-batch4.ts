import 'dotenv/config'
import { createClient } from '@sanity/client'

// Create client with direct credentials
const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

// Helper function to generate unique keys
function generateKey(prefix: string, index: number): string {
  return `${prefix}_${Date.now()}_${index}`
}

const run = async () => {
  try {
    console.log('Updating NIS2 Scope Assessment page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nis2-scope-assessment' })
    
    if (!existingDoc) {
      throw new Error('Document "nis2-scope-assessment" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Wie können wir unsere NIS2 Scope Assessment nutzen, um Board-Level-Kommunikation über Cybersicherheitsrisiken zu verbessern und Governance zu stärken?",
        answer: "Die NIS2 Scope Assessment liefert strukturierte, quantifizierbare Daten über Cybersicherheitsrisiken, die als Grundlage für professionelle Board-Level-Kommunikation und verbesserte Governance-Entscheidungen dienen. Durch transformation technischer Erkenntnisse in geschäftsrelevante Insights können Vorstände informierte Entscheidungen treffen und ihrer Aufsichtspflicht im Cybersicherheitsbereich effektiv nachkommen.\n\n📊 Board-Ready Risk Communication:\n• Business Impact Translation: Übersetzung technischer Risiken in verständliche Geschäftsauswirkungen mit quantifizierten finanziellen Implikationen.\n• Risk Appetite Alignment: Strukturierte Darstellung von Cybersicherheitsrisiken im Kontext der organisatorischen Risikobereitschaft und strategischen Ziele.\n• Comparative Analysis: Benchmarking der eigenen Cybersicherheitsposition gegen Branchenstandards und Wettbewerber.\n• Scenario Planning: Präsentation verschiedener Risikoszenarien und deren potenzielle Auswirkungen auf Geschäftskontinuität und Unternehmenswert.\n\n🎯 Governance Enhancement durch strukturierte Assessment-Erkenntnisse:\n• Decision Framework: Entwicklung strukturierter Entscheidungsrahmen für Cybersicherheitsinvestitionen basierend auf Assessment-Daten.\n• Accountability Clarity: Klare Zuordnung von Cybersicherheitsverantwortlichkeiten und Rechenschaftspflichten auf verschiedenen Organisationsebenen.\n• Performance Monitoring: Etablierung von Board-Level-KPIs für kontinuierliche Überwachung der Cybersicherheitsperformance.\n• Strategic Integration: Integration von Cybersicherheitsüberlegungen in strategische Planungsprozesse und Geschäftsentscheidungen.\n\n📈 Kontinuierliche Board-Education und -Engagement:\n• Regular Updates: Systematische, verständliche Updates über Entwicklungen in der Cybersicherheitslandschaft und deren Geschäftsrelevanz.\n• Executive Training: Strukturierte Schulungsprogramme für Board-Mitglieder über Cybersicherheitsgrundlagen und Governance-Anforderungen.\n• External Perspectives: Integration externer Expertise und Branchenintelligenz in Board-Diskussionen.\n• Crisis Preparedness: Vorbereitung des Boards auf potenzielle Cybersicherheitskrisen durch Simulationen und Notfallplanung.\n\n💡 ADVISORIs Board-Governance-Framework:\n• Executive Summary Development: Aufbereitung technischer Assessment-Ergebnisse in board-gerechte Executive Summaries mit klaren Handlungsempfehlungen.\n• Governance Maturity Assessment: Bewertung der aktuellen Cybersicherheits-Governance und Entwicklung von Verbesserungsroadmaps.\n• Board Dashboard Design: Entwicklung intuitiver Dashboards für kontinuierliche Board-Level-Überwachung der Cybersicherheitsposition.\n• Crisis Communication Planning: Vorbereitung strukturierter Kommunikationspläne für Cybersicherheitsvorfälle und Board-Engagement."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Welche branchenspezifischen Besonderheiten müssen bei der NIS2 Scope Assessment berücksichtigt werden und wie können wir sektorale Expertise optimal nutzen?",
        answer: "Verschiedene Branchen und Sektoren haben spezifische Cybersicherheitsherausforderungen, regulatorische Überschneidungen und Geschäftsmodell-Eigenarten, die bei der NIS2 Scope Assessment berücksichtigt werden müssen. Eine branchenspezifische Herangehensweise gewährleistet nicht nur akkurate Compliance-Bewertung, sondern identifiziert auch sektorale Best Practices und Optimierungspotenziale.\n\n🏭 Sektorale Komplexitäten und Spezifika:\n• Kritische Infrastrukturen: Energie-, Transport- und Telekommunikationsunternehmen haben erhöhte Kritikalitätseinstufungen und zusätzliche Berichtspflichten.\n• Finanzdienstleistungen: Überschneidungen mit DORA-Anforderungen erfordern koordinierte Compliance-Strategien und gemeinsame Risikobewertungen.\n• Gesundheitswesen: Patientendatenschutz und medizinische Gerätesicherheit schaffen zusätzliche Compliance-Dimensionen.\n• Öffentliche Verwaltung: Spezielle Anforderungen an Bürgerdatenschutz und staatliche Sicherheitsinteressen.\n\n⚖️ Regulatorische Konvergenz und Harmonisierung:\n• Multi-Framework-Compliance: Koordination zwischen NIS2, ISO 27001, NIST Framework und branchenspezifischen Standards.\n• Internationale Standards: Integration globaler Branchenstandards mit europäischen NIS2-Anforderungen.\n• Legacy Regulations: Berücksichtigung bestehender sektoraler Regulierungen und deren Integration in NIS2-Compliance.\n• Future-Proofing: Antizipation kommender branchenspezifischer Cybersicherheitsregulierungen.\n\n🔍 Branchenspezifische Risikoprofile und Assessment-Schwerpunkte:\n• Supply Chain Complexity: Bewertung branchentypischer Lieferketten-Vulnerabilitäten und -abhängigkeiten.\n• Technology Stacks: Analyse sektoraler Technologie-Präferenzen und deren spezifischer Sicherheitsanforderungen.\n• Business Model Risks: Identifikation geschäftsmodellspezifischer Cybersicherheitsrisiken und Angriffsvektoren.\n• Operational Technology: Besondere Berücksichtigung von OT/IT-Konvergenz in produktionsnahen Branchen.\n\n💼 Sektorale Best Practices und Benchmarking:\n• Industry Consortiums: Nutzung branchenspezifischer Cybersicherheits-Initiativen und Threat-Intelligence-Sharing.\n• Peer Learning: Systematischer Austausch mit Branchenführern über erfolgreiche NIS2-Implementierungen.\n• Regulatory Engagement: Aktive Teilnahme an branchenspezifischen regulatorischen Konsultationen und Standards-Entwicklung.\n• Innovation Adoption: Frühzeitige Adoption branchentypischer Cybersicherheitsinnovationen und -technologien.\n\n🎯 ADVISORIs branchenspezifische Assessment-Expertise:\n• Sector-Specific Teams: Einsatz von Beratungsteams mit tiefgreifender Branchenexpertise und regulatorischem Know-how.\n• Industry Benchmarking: Zugang zu branchenspezifischen Benchmarks und Comparative Analysis für realistische Zielsetzung.\n• Regulatory Intelligence: Kontinuierliche Überwachung branchenspezifischer regulatorischer Entwicklungen und deren Auswirkungen.\n• Cross-Sector Learning: Transfer von Best Practices zwischen Branchen zur Identifikation innovativer Lösungsansätze."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie können kleine und mittlere Unternehmen (KMU) ihre begrenzte Ressourcen optimal für eine effektive NIS2 Scope Assessment einsetzen?",
        answer: "Kleine und mittlere Unternehmen stehen bei der NIS2 Scope Assessment vor der Herausforderung, mit begrenzten personellen und finanziellen Ressourcen dennoch eine vollständige und rechtssichere Assessment durchzuführen. Ein ressourcenoptimierter Ansatz kann durch strategische Priorisierung, Automatisierung und intelligente Outsourcing-Entscheidungen erhebliche Effizienzgewinne erzielen.\n\n💰 Ressourcenoptimierte Assessment-Strategien für KMU:\n• Phased Implementation: Stufenweise Assessment-Durchführung, die sich an verfügbaren Budgets und Kapazitäten orientiert.\n• Risk-Based Prioritization: Fokussierung auf die kritischsten Systeme und Prozesse für maximale Compliance-Wirkung bei minimalen Kosten.\n• Shared Resources: Nutzung geteilter Cybersicherheits-Services und Brancheninitiativen zur Kostenverteilung.\n• Technology Leverage: Einsatz kosteneffizienter, cloudbasierter Assessment-Tools statt teurer On-Premise-Lösungen.\n\n🔧 Effiziente Assessment-Methoden und Tools:\n• Automated Scanning: Nutzung automatisierter Vulnerability-Scans und Asset-Discovery-Tools zur Reduzierung manueller Aufwände.\n• Template-Based Approaches: Verwendung standardisierter Assessment-Templates und Checklisten für strukturierte Evaluierung.\n• Self-Assessment Components: Integration von Selbstbewertungskomponenten für weniger kritische Bereiche.\n• Vendor Assessments: Nutzung bestehender Vendor-Security-Assessments zur Reduzierung eigener Assessment-Aufwände.\n\n🤝 Strategische Partnerschaften und Outsourcing:\n• Managed Security Services: Outsourcing spezialisierter Assessment-Komponenten an erfahrene MSS-Provider.\n• Consultant Collaboration: Strategische Nutzung externer Expertise für komplexe Assessment-Bereiche.\n• Industry Cooperation: Teilnahme an branchenweiten Assessment-Initiativen und Erfahrungsaustausch.\n• Knowledge Sharing: Aufbau von Peer-Networks für gegenseitigen Erfahrungsaustausch und Lernsynergien.\n\n📊 ROI-Maximierung durch intelligente Investitionsentscheidungen:\n• Quick Wins Identification: Identifikation kosteneffizienter Maßnahmen mit hoher Compliance-Wirkung.\n• Multi-Purpose Solutions: Bevorzugung von Lösungen, die sowohl Assessment- als auch operative Cybersicherheitsanforderungen erfüllen.\n• Compliance Bundling: Koordination der NIS2-Assessment mit anderen regulatorischen Anforderungen für Synergien.\n• Future-Proofing: Investition in skalierbare Lösungen, die mit Unternehmenswachstum mitwachsen können.\n\n💡 ADVISORIs KMU-spezifische Assessment-Unterstützung:\n• Resource Planning: Entwicklung realistischer Assessment-Pläne basierend auf verfügbaren KMU-Ressourcen.\n• Cost-Effective Solutions: Identifikation und Implementierung kostenoptimierter Assessment-Lösungen.\n• Capability Building: Aufbau interner KMU-Kompetenzen durch gezielte Schulungen und Knowledge Transfer.\n• Ongoing Support: Bereitstellung kontinuierlicher Unterstützung zur nachhaltigen Cybersicherheits-Governance."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Welche Auswirkungen hat die NIS2 Scope Assessment auf unsere ESG-Strategie und wie können wir Cybersicherheit in Nachhaltigkeitsberichte integrieren?",
        answer: "Cybersicherheit wird zunehmend als kritische Komponente der ESG-Performance (Environmental, Social, Governance) betrachtet, da Cyberangriffe erhebliche Auswirkungen auf Stakeholder, Umwelt und Governance-Qualität haben können. Die NIS2 Scope Assessment liefert strukturierte Daten, die direkt in ESG-Reporting integriert werden können und die Nachhaltigkeitsposition Ihres Unternehmens stärken.\n\n🌱 Cybersicherheit als ESG-Komponente:\n• Governance Excellence: Robuste Cybersicherheits-Governance demonstriert Führungsqualität und Risikomanagement-Kompetenz.\n• Social Responsibility: Schutz von Kundendaten und kritischen Services zeigt gesellschaftliche Verantwortung und Stakeholder-Schutz.\n• Environmental Impact: Cyberangriffe können erhebliche Umweltauswirkungen haben (Energieverschwendung, Hardware-Verschrott).\n• Sustainable Operations: Resiliente Cybersicherheit unterstützt nachhaltige Geschäftskontinuität und langfristige Wertschöpfung.\n\n📈 ESG-Integration von NIS2-Assessment-Erkenntnissen:\n• Risk Disclosure: Strukturierte Offenlegung von Cybersicherheitsrisiken in ESG-Berichten mit quantifizierten Auswirkungen.\n• Performance Metrics: Integration von Cybersicherheits-KPIs in ESG-Scorecards und Sustainability-Dashboards.\n• Stakeholder Communication: Transparente Kommunikation von Cybersicherheitsmaßnahmen als Teil der Stakeholder-Engagement-Strategie.\n• Third-Party Validation: Nutzung unabhängiger Cybersicherheits-Assessments als externe Validierung der ESG-Performance.\n\n🎯 Investor Relations und Rating-Optimierung:\n• ESG Ratings: Verbesserte Cybersicherheits-Governance kann ESG-Ratings positiv beeinflussen und Kapitalkosten senken.\n• Due Diligence: Strukturierte Cybersicherheits-Dokumentation erleichtert ESG-focused Due Diligence bei Investoren.\n• Regulatory Compliance: NIS2-Compliance demonstriert proaktive Regulierungs-Governance und reduziert regulatorische Risiken.\n• Long-term Value: Cybersicherheitsinvestitionen unterstützen nachhaltige Wertschöpfung und langfristige Geschäftsresilienz.\n\n🔄 Integrierte Nachhaltigkeits- und Cybersicherheitsstrategie:\n• Circular Security: Entwicklung nachhaltiger Cybersicherheitsansätze, die Ressourceneffizienz und Umweltschutz berücksichtigen.\n• Green IT Security: Integration umweltfreundlicher Sicherheitstechnologien und energieeffizienter Implementierungen.\n• Social Impact: Nutzung verbesserter Cybersicherheit zur Unterstützung sozialer Initiativen und Community-Protection.\n• Governance Leadership: Positionierung als Cybersicherheitsführer zur Stärkung der gesamten ESG-Leadership-Position.\n\n🌟 ADVISORIs ESG-Cybersicherheits-Integration:\n• ESG Reporting Framework: Entwicklung strukturierter Frameworks zur Integration von Cybersicherheitsdaten in ESG-Berichte.\n• Stakeholder Engagement: Unterstützung bei der Kommunikation von Cybersicherheits-ESG-Initiativen an verschiedene Stakeholder-Gruppen.\n• Performance Measurement: Aufbau von Metriken, die Cybersicherheits- und Nachhaltigkeitsperformance verknüpfen.\n• Strategic Alignment: Integration von Cybersicherheitszielen in übergeordnete Nachhaltigkeits- und ESG-Strategien."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new C-Level FAQs (German) to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ C-Level FAQs batch 4 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
