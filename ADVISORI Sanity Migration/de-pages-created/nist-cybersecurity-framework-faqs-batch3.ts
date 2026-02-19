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
    console.log('Updating NIST Cybersecurity Framework page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nist-cybersecurity-framework' })
    
    if (!existingDoc) {
      throw new Error('Document "nist-cybersecurity-framework" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie entwickelt ADVISORI maßgeschneiderte NIST CSF-Implementierungsstrategien für verschiedene Branchen und wie werden branchenspezifische Risiken und regulatorische Anforderungen berücksichtigt?",
        answer: "Verschiedene Branchen stehen vor einzigartigen Cybersicherheitsherausforderungen, die eine differenzierte Herangehensweise an die NIST CSF-Implementierung erfordern. ADVISORI entwickelt branchenspezifische Implementierungsstrategien, die sowohl die allgemeinen Framework-Prinzipien als auch die spezifischen Risikoprofile, regulatorischen Anforderungen und operativen Realitäten verschiedener Sektoren berücksichtigen.\n\n🏦 Finanzdienstleistungen - Hochregulierte Umgebung:\n• DORA-Integration: Nahtlose Integration der Digital Operational Resilience Act-Anforderungen in die NIST CSF-Struktur, insbesondere für ICT-Risikomanagement und Third-Party-Risk.\n• Real-time Fraud Detection: Spezialisierte 'Detect'-Funktionen für die Erkennung von Finanzbetrug und verdächtigen Transaktionen in Echtzeit.\n• Regulatory Reporting Automation: Automatisierte Berichterstattung für Aufsichtsbehörden (BaFin, EBA, ECB) integriert in die Framework-Überwachung.\n• Critical Infrastructure Protection: Besondere Berücksichtigung systemkritischer Funktionen und deren Schutz vor Cyberangriffen.\n\n🏥 Gesundheitswesen - Datenschutz und Patientensicherheit:\n• HIPAA/GDPR-Compliance: Integration von Datenschutzanforderungen in alle Framework-Funktionen mit besonderem Fokus auf Patientendaten.\n• Medical Device Security: Spezielle Kontrollen für IoMT (Internet of Medical Things) und kritische medizinische Geräte.\n• Business Continuity for Patient Care: Priorisierung von Systemen, die direkten Einfluss auf die Patientenversorgung haben.\n• Research Data Protection: Schutz sensibler Forschungsdaten und geistigen Eigentums.\n\n🏭 Fertigungsindustrie - OT/IT-Konvergenz:\n• Industrial Control System Security: Integration von OT-Sicherheit in das traditionell IT-fokussierte NIST CSF.\n• Supply Chain Resilience: Erweiterte Lieferkettensicherheit und Vendor Risk Management für komplexe Fertigungspartnerschaften.\n• Safety-Security Integration: Harmonisierung von Funktionssicherheit (Safety) und Cybersicherheit (Security) in kritischen Produktionsumgebungen.\n• Intellectual Property Protection: Schutz von Fertigungsgeheimnissen und Produktionsprozessen vor Industriespionage.\n\n⚡ ADVISORI's Branchenexpertise:\n• Regulatory Intelligence: Tiefes Verständnis branchenspezifischer Regulierungslandschaften und deren Integration in Framework-Implementierungen.\n• Risk Taxonomy Anpassung: Entwicklung branchenspezifischer Risikotaxonomien, die sowohl allgemeine Cyber-Risiken als auch sektorspezifische Bedrohungen erfassen.\n• Benchmark-basierte Implementierung: Nutzung branchenspezifischer Sicherheits-Benchmarks und Best Practices für optimale Framework-Konfiguration."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Wie adressiert ADVISORI die Herausforderung der Cybersicherheits-Governance auf Board-Ebene und wie wird das NIST CSF als Kommunikationsinstrument zwischen IT-Teams und dem Aufsichtsrat genutzt?",
        answer: "Die Kommunikation von Cybersicherheitsrisiken auf Board-Ebene ist eine der kritischsten Herausforderungen moderner Unternehmensführung. ADVISORI nutzt das NIST CSF als Brücke zwischen technischer Cybersicherheit und strategischer Governance, um Aufsichtsräten und Geschäftsleitungen die notwendigen Einblicke und Werkzeuge für fundierte Entscheidungen zu bieten.\n\n🎯 Board-Level Cybersecurity Governance:\n• Risk Translation Framework: Übersetzung technischer NIST CSF-Metriken in geschäfts- und risikoorientierte Sprache, die für Board-Mitglieder ohne technischen Hintergrund verständlich ist.\n• Fiduciary Duty Compliance: Sicherstellung, dass Board-Mitglieder ihren treuhänderischen Pflichten in Bezug auf Cybersicherheits-Oversight nachkommen können.\n• Strategic Risk Appetite Definition: Unterstützung bei der Definition und Kommunikation der Cybersicherheits-Risikotoleranz auf strategischer Ebene.\n• Incident Escalation Protocols: Klare Eskalationswege und Kommunikationsprotokolle für Cybersicherheitsvorfälle, die Board-Aufmerksamkeit erfordern.\n\n📊 Executive Reporting und Communication:\n• Board-Ready Dashboards: Entwicklung executive-tauglicher Dashboards, die NIST CSF-Performance in Business-KPIs übersetzen (z.B. Business Impact, Cost of Downtime, Regulatory Compliance Status).\n• Quarterly Cybersecurity Reports: Strukturierte, regelmäßige Berichterstattung, die Framework-Fortschritt, Risikolandschaft und strategische Empfehlungen kombiniert.\n• Cyber Risk Heat Maps: Visuelle Darstellung von Cybersicherheitsrisiken im Kontext von Geschäftszielen und strategischen Initiativen.\n• ROI and Value Demonstration: Quantifizierung des Geschäftswerts von Cybersicherheitsinvestitionen und Framework-Implementierungen für Board-Präsentationen.\n\n🔄 Strategic Decision Support:\n• Investment Prioritization: Datengestützte Empfehlungen für Cybersicherheitsinvestitionen basierend auf NIST CSF-Assessments und Geschäftsrisiken.\n• M&A Cyber Due Diligence: Integration von Cybersicherheitsbewertungen in M&A-Prozesse mit Board-relevanten Risiko- und Wertbewertungen.\n• Digital Transformation Risk Assessment: Bewertung von Cybersicherheitsrisiken neuer digitaler Initiativen und Technologieadoptionen.\n• Crisis Management Preparedness: Vorbereitung des Boards auf Cybersicherheitskrisen mit klaren Rollen, Verantwortlichkeiten und Entscheidungsrahmen.\n\n🛡️ Governance Integration:\n• Board Education Programs: Maßgeschneiderte Cybersicherheits-Bildungsprogramme für Board-Mitglieder zur Verbesserung der Oversight-Kapazitäten.\n• Policy Framework Alignment: Integration von NIST CSF-Prinzipien in Corporate Governance-Policies und -Prozesse.\n• Third-Party Risk Oversight: Board-level Oversight für kritische Drittanbieter-Risiken und Supply Chain Security.\n• Regulatory Compliance Assurance: Sicherstellung, dass das Board über regulatorische Cybersicherheitsanforderungen und Compliance-Status informiert ist."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie integriert ADVISORI Threat Intelligence und proaktive Cyber Threat Hunting in NIST CSF-Implementierungen, um von reaktiver zu proaktiver Cybersicherheit zu wechseln?",
        answer: "Der Übergang von reaktiver zu proaktiver Cybersicherheit ist entscheidend für die Wirksamkeit moderner Cybersicherheitsstrategien. ADVISORI integriert fortgeschrittene Threat Intelligence und Cyber Threat Hunting nahtlos in alle fünf Kernfunktionen des NIST CSF, um Organisationen zu befähigen, Bedrohungen zu antizipieren, zu erkennen und zu neutralisieren, bevor sie Schäden verursachen können.\n\n🔍 Proaktive Threat Intelligence Integration:\n• Strategic Threat Intelligence: Integration von Strategic Intelligence in die 'Identify'-Funktion zur Bewertung langfristiger Bedrohungstrends und deren Auswirkungen auf Geschäftsstrategien.\n• Tactical Threat Intelligence: Operative Integration von IOCs (Indicators of Compromise) und TTPs (Tactics, Techniques, Procedures) in Erkennungs- und Schutzmaßnahmen.\n• Industry-Specific Intelligence: Branchenspezifische Threat Intelligence-Feeds, die auf die einzigartigen Bedrohungslandschaften verschiedener Sektoren zugeschnitten sind.\n• Geopolitical Risk Assessment: Integration geopolitischer Risikofaktoren und Nation-State-Bedrohungen in die Framework-Bewertung.\n\n🎯 Advanced Threat Hunting Capabilities:\n• Hypothesis-Driven Hunting: Entwicklung und Durchführung strukturierter Threat Hunting-Kampagnen basierend auf aktueller Threat Intelligence und Unternehmensrisikoprofilen.\n• Behavioral Analytics: Implementierung von Behavioral Analytics zur Erkennung anomaler Aktivitäten, die auf Advanced Persistent Threats hinweisen könnten.\n• Threat Actor Profiling: Profilierung bekannter Threat Actors und deren Angriffsmuster zur proaktiven Verteidigung gegen wahrscheinliche Angriffsvektoren.\n• Purple Team Operations: Integration von Red Team-Erkenntnissen in Blue Team-Operationen zur kontinuierlichen Verbesserung der Erkennungskapazitäten.\n\n⚡ Framework-Integration und Automation:\n• Threat Intelligence Platform (TIP) Integration: Nahtlose Integration von TIP-Lösungen in NIST CSF-Prozesse zur automatisierten Threat Intelligence-Verarbeitung und -Verteilung.\n• SOAR-Enhanced Response: Security Orchestration, Automation and Response-Plattformen, die Threat Intelligence automatisch in Incident Response-Workflows integrieren.\n• Predictive Analytics: Machine Learning-basierte Vorhersagemodelle, die Threat Intelligence nutzen, um zukünftige Angriffsmuster und -wahrscheinlichkeiten zu modellieren.\n• Real-time Intelligence Feeds: Kontinuierliche Integration von Real-time Threat Intelligence in Monitoring- und Erkennungssysteme.\n\n🔄 Continuous Improvement und Adaptation:\n• Threat Landscape Monitoring: Kontinuierliche Überwachung der sich entwickelnden Bedrohungslandschaft und entsprechende Anpassung der Framework-Implementierung.\n• Hunt Results Integration: Systematische Integration von Threat Hunting-Erkenntnissen in Framework-Verbesserungen und Kontrollanpassungen.\n• Intelligence Sharing: Partizipation in Threat Intelligence-Sharing-Communities zur Verbesserung der kollektiven Cybersicherheit.\n• Lessons Learned Integration: Strukturierte Integration von Lessons Learned aus Threat Hunting-Aktivitäten in die kontinuierliche Framework-Optimierung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Wie stellt ADVISORI sicher, dass NIST CSF-Implementierungen die Balance zwischen Cybersicherheit und Business Enablement halten, ohne die operative Effizienz und Benutzerexperience zu beeinträchtigen?",
        answer: "Die größte Herausforderung moderner Cybersicherheit liegt darin, robusten Schutz zu bieten, ohne die Geschäftsagilität und Benutzerproduktivität zu beeinträchtigen. ADVISORI entwickelt 'Security-by-Design'-Ansätze, die Cybersicherheit nahtlos in Geschäftsprozesse integrieren und das NIST CSF als Enabler für digitale Transformation und Geschäftswachstum positionieren.\n\n⚖️ Security-Business Balance Framework:\n• Risk-Based Security Controls: Implementierung risikobasierter Sicherheitskontrollen, die kritische Assets schützen, ohne unnötige Reibung für weniger kritische Geschäftsprozesse zu erzeugen.\n• User-Centric Security Design: Entwicklung von Sicherheitsmaßnahmen, die die Benutzererfahrung verbessern statt verschlechtern, durch intuitive Interfaces und nahtlose Integration.\n• Business Process Integration: Einbettung von Sicherheitskontrollen direkt in Geschäftsprozesse, sodass Sicherheit zu einem natürlichen Teil des Workflows wird.\n• Performance Impact Assessment: Kontinuierliche Bewertung und Optimierung der Performance-Auswirkungen von Sicherheitsmaßnahmen auf Geschäftsprozesse.\n\n🚀 Security as Business Enabler:\n• Zero Trust Enablement: Implementierung von Zero Trust-Architekturen, die nicht nur Sicherheit verbessern, sondern auch flexible, ortsunabhängige Arbeitsmodelle ermöglichen.\n• Automated Security Operations: Maximierung der Automation in Sicherheitsoperationen zur Reduzierung manueller Interventionen und Verbesserung der Responsezeiten.\n• Self-Service Security: Entwicklung von Self-Service-Sicherheitstools, die Benutzern ermöglichen, sicherheitsrelevante Aufgaben eigenständig und effizient zu erledigen.\n• DevSecOps Integration: Einbettung von Sicherheit in Entwicklungsprozesse, um schnellere, sicherere Softwareentwicklung zu ermöglichen.\n\n💡 Innovation und Transformation Support:\n• Cloud Security Enablement: Sicherheitsframeworks, die Cloud-Adoption und digitale Transformation beschleunigen statt behindern.\n• API Security Framework: Entwicklung von API-Sicherheitsstandards, die Innovation und Partnerintegration ermöglichen, während sie Risiken minimieren.\n• Mobile-First Security: Mobile-optimierte Sicherheitslösungen, die moderne, flexible Arbeitsweisen unterstützen.\n• AI/ML Security Integration: Nutzung von KI und Machine Learning zur Verbesserung sowohl der Sicherheitseffektivität als auch der Geschäftsperformance.\n\n🎯 Continuous Optimization:\n• User Experience Monitoring: Kontinuierliche Überwachung der Auswirkungen von Sicherheitsmaßnahmen auf die Benutzererfahrung und entsprechende Optimierungen.\n• Business Impact Metrics: Entwicklung von Metriken, die sowohl Sicherheitsverbesserungen als auch Geschäftsvorteile erfassen.\n• Feedback Loop Integration: Etablierung von Feedback-Schleifen zwischen Sicherheits- und Geschäftsteams zur kontinuierlichen Verbesserung der Balance.\n• Agile Security Adaptation: Agile Anpassung von Sicherheitsmaßnahmen an sich ändernde Geschäftsanforderungen und technologische Entwicklungen."
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
    console.log('✅ C-Level FAQs batch 3 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
