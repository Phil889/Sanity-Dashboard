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
    console.log('Updating NIST Cybersecurity Framework page with C-Level FAQs batch 5 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'standards-frameworks-nist-cybersecurity-framework' })
    
    if (!existingDoc) {
      throw new Error('Document "standards-frameworks-nist-cybersecurity-framework" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie unterstützt ADVISORI bei der Entwicklung von Business Continuity und Disaster Recovery-Strategien im Rahmen der NIST Framework-Implementierung?",
        answer: "Business Continuity und Disaster Recovery sind zentrale Komponenten einer robusten Cybersecurity-Strategie, die über reine Technologie hinausgehen und strategische Geschäftsplanung erfordern. Im NIST Framework sind diese Aspekte primär in der 'Recover'-Funktion verankert, aber ihre Implementierung erfordert ganzheitliche Integration in alle Framework-Bereiche. ADVISORI entwickelt comprehensive BC/DR-Strategien, die Cybersecurity-Resilienz mit Geschäftskontinuität vereinen.\n\n🔄 Business Continuity Integration in NIST Framework:\n• Recovery Planning: Entwicklung detaillierter Recovery-Pläne, die sowohl Cyber-Incidents als auch andere Geschäftsunterbrechungen adressieren.\n• Critical Asset Protection: Identifikation und prioritärer Schutz geschäftskritischer Assets und Prozesse für minimale Recovery-Zeiten.\n• Stakeholder Communication: Etablierung klarer Kommunikationsstrategien für verschiedene Stakeholder-Gruppen während Incidents.\n• Supply Chain Resilience: Integration von Lieferantenausfällen und Third-Party-Risiken in BC/DR-Planungen.\n\n⚡ ADVISORI's Resilience-Engineering Approach:\n• Recovery Time Optimization: Wissenschaftlich fundierte Ansätze zur Minimierung von RTO (Recovery Time Objectives) und RPO (Recovery Point Objectives).\n• Scenario-Based Planning: Entwicklung multipler Recovery-Szenarien für verschiedene Incident-Typen und Schweregrade.\n• Cross-Functional Integration: Koordination zwischen IT, Operations, HR, Legal und Communications für holistische Recovery-Strategien.\n• Continuous Testing: Implementierung regelmäßiger BC/DR-Tests und Tabletop-Exercises für kontinuierliche Verbesserung der Recovery-Fähigkeiten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche Rolle spielt Executive Leadership und Board Engagement in ADVISORI's NIST Framework-Implementierung?",
        answer: "Erfolgreiche Cybersecurity-Transformation erfordert nicht nur technische Exzellenz, sondern auch starkes Leadership-Engagement und strategische Governance. Das NIST Framework kann nur dann sein volles Potential entfalten, wenn es von der Führungsebene als strategische Priorität behandelt und in Corporate Governance-Strukturen integriert wird. ADVISORI entwickelt spezialisierte Leadership-Engagement-Programme, die Executives zu Cybersecurity-Champions transformieren.\n\n👔 Executive Leadership-Herausforderungen in Cybersecurity:\n• Strategic Vision: Entwicklung einer klaren Cybersecurity-Vision, die mit übergeordneten Geschäftszielen aligned ist.\n• Resource Allocation: Optimale Allokation von Budget und Personal für maximale Cybersecurity-ROI.\n• Risk Appetite Definition: Präzise Definition der organisationalen Risikotoleranz und entsprechende Framework-Kalibrierung.\n• Cultural Leadership: Förderung einer sicherheitsbewussten Organisationskultur durch Führungsverhalten und -kommunikation.\n\n🎯 ADVISORI's Executive Enablement-Programme:\n• C-Suite Cybersecurity Education: Spezialisierte Schulungsprogramme, die komplexe Cybersecurity-Konzepte in geschäftsrelevante Insights übersetzen.\n• Board Reporting Frameworks: Entwicklung executive-appropriate Dashboards und Reporting-Mechanismen für effektive Governance.\n• Strategic Planning Integration: Einbettung von Cybersecurity-Überlegungen in strategische Planungs- und Investitionsentscheidungen.\n• Crisis Leadership Preparation: Training von Executives für effektive Führung während Cybersecurity-Krisen und öffentlicher Kommunikation."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie adressiert ADVISORI emerging Technologies wie Quantum Computing, 5G und Edge Computing in der NIST Framework-Implementierung?",
        answer: "Emerging Technologies schaffen sowohl neue Möglichkeiten als auch neue Vulnerabilities, die traditionelle Cybersecurity-Ansätze herausfordern. Quantum Computing bedroht aktuelle Verschlüsselungsstandards, 5G erweitert die Angriffsfläche exponentiell, und Edge Computing vertreibt Daten und Processing über traditionelle Sicherheitsperimeter hinaus. ADVISORI entwickelt zukunftsorientierte NIST-Implementierungen, die diese technologischen Disruptions proaktiv adressieren.\n\n🚀 Emerging Technology Cybersecurity-Herausforderungen:\n• Quantum Threat: Vorbereitung auf post-quantum Cryptography und Migration von quantum-vulnerable Verschlüsselungsverfahren.\n• 5G Security: Schutz massiv erweiterter IoT-Umgebungen und ultra-low-latency Anwendungen.\n• Edge Computing: Sicherung verteilter Computing-Infrastrukturen mit limitierten traditionellen Schutzmaßnahmen.\n• AI/ML Security: Schutz von und vor künstlicher Intelligenz in sicherheitskritischen Anwendungen.\n\n🔬 ADVISORI's Future-Ready Framework Design:\n• Quantum-Resilient Architecture: Design von Sicherheitsarchitekturen, die quantum-safe Cryptography und hybrid Transitional-Approaches integrieren.\n• 5G Security Orchestration: Entwicklung spezialisierter Sicherheitskonzepte für 5G-enabled IoT-Ecosystems und Industry 4.0-Anwendungen.\n• Edge Security Frameworks: Implementierung von Zero Trust-Prinzipien für edge computing-Umgebungen mit minimaler latency Impact.\n• Adaptive Threat Modeling: Kontinuierliche Anpassung von Threat Models an evolvierende Technologie-Landschaften und neue Attack Vectors."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche langfristigen Wertschöpfungsstrategien entwickelt ADVISORI für nachhaltige NIST Framework-Excellence über Jahrzehnte hinweg?",
        answer: "Cybersecurity ist keine einmalige Implementierung, sondern ein kontinuierlicher Prozess der Adaptation und Excellence. Eine nachhaltige NIST Framework-Implementierung muss sowohl aktuelle Bedrohungen adressieren als auch über Jahrzehnte hinweg relevant und effektiv bleiben. ADVISORI entwickelt evolutionsfähige Cybersecurity-Strategien, die generational value creation ermöglichen und organisationelle Cyber-Resilienz als langfristigen Wettbewerbsvorteil etablieren.\n\n📈 Langfristige Value Creation durch Cybersecurity-Excellence:\n• Innovation Enablement: Nutzung robuster Cybersecurity als Fundament für sichere Innovation und digitale Transformation.\n• Market Differentiation: Etablierung von Cybersecurity-Excellence als Brand-differenzierendes Merkmal und Vertrauensbuilding.\n• Ecosystem Leadership: Positionierung als Cybersecurity-Leader in Branchen-Ecosystems und Supply Chains.\n• Talent Attraction: Attraktivität für Top-Talente durch modernste Cybersecurity-Umgebungen und -Praktiken.\n\n🌟 ADVISORI's Generational Excellence-Framework:\n• Sustainability-Oriented Design: Aufbau von Cybersecurity-Programmen, die environmental sustainability und social responsibility integrieren.\n• Knowledge Institution Building: Schaffung organisationaler Cybersecurity-Expertise, die institutional knowledge preservation ermöglicht.\n• Innovation Labs: Etablierung interner Cybersecurity-Forschung und -Entwicklung für kontinuierliche technological leadership.\n• Legacy Planning: Design von Cybersecurity-Architekturen und -Kulturen, die generational transfer und long-term value preservation unterstützen."
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
    console.log('✅ C-Level FAQs batch 5 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
