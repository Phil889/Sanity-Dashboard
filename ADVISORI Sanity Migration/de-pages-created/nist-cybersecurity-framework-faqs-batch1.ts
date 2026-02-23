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
    console.log('Updating NIST Cybersecurity Framework page with C-Level FAQs batch 1 (German)...')
    
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
        _key: generateKey('faq', 1),
        question: "Warum ist das NIST Cybersecurity Framework aus strategischer C-Level-Sicht mehr als nur ein technisches Compliance-Tool und wie positioniert ADVISORI es als Geschäftsenablement?",
        answer: "Das NIST Cybersecurity Framework (CSF) transzendiert die reine technische Compliance und etabliert sich als strategisches Governance-Instrument für die Unternehmensführung. Für C-Level-Führungskräfte bietet es eine gemeinsame Sprache zur Kommunikation von Cybersicherheitsrisiken im Kontext der Geschäftsziele und ermöglicht fundierte Investitionsentscheidungen. ADVISORI positioniert das NIST CSF als zentralen Baustein einer resilienten Unternehmensstrategie.\n\n🎯 Strategische Geschäftsvorteile für die C-Suite:\n• Risikotransparenz und -kommunikation: Das Framework schafft eine einheitliche Sprache zwischen IT, Risk Management und der Geschäftsleitung für die Bewertung und Kommunikation von Cybersicherheitsrisiken.\n• Investitionsoptimierung: Strukturierte Priorisierung von Cybersicherheitsinvestitionen basierend auf Geschäftsrisiken und -zielen, anstatt isolierter technischer Anforderungen.\n• Regulatorische Exzellenz: Das NIST CSF bildet eine solide Grundlage für die Erfüllung verschiedener Compliance-Anforderungen (DORA, NIS2, ISO 27001) und reduziert regulatorische Komplexität.\n• Wettbewerbsvorteil: Demonstrierte Cybersicherheits-Maturität stärkt das Vertrauen von Kunden, Partnern und Investoren und kann zu besseren Geschäftskonditionen führen.\n\n🏗️ ADVISORI's strategischer Implementierungsansatz:\n• Business-aligned Cybersecurity: Wir entwickeln Cybersicherheitsprofile, die direkt mit Ihren Geschäftszielen, Wachstumsstrategien und Risikotoleranz verknüpft sind.\n• Executive Dashboards: Bereitstellung von C-Level-gerechten Metriken und KPIs, die den Geschäftswert der Cybersicherheitsinvestitionen transparent machen.\n• Integrierte Governance: Einbettung des NIST CSF in bestehende Corporate Governance-Strukturen und Entscheidungsprozesse.\n• Kontinuierliche Strategieanpassung: Regelmäßige Überprüfung und Anpassung der Cybersicherheitsstrategie an sich ändernde Geschäftsprioritäten und Bedrohungslandschaften."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie quantifiziert ADVISORI den Return on Investment (ROI) einer NIST CSF-Implementierung und welche messbaren Geschäftsvorteile können C-Level-Führungskräfte erwarten?",
        answer: "Die ROI-Berechnung einer NIST CSF-Implementierung geht weit über traditionelle Kostenvermeidungsmodelle hinaus und umfasst strategische Werttreiber, die direkt zur Unternehmensperformance beitragen. ADVISORI entwickelt umfassende Business Cases, die sowohl quantifizierbare als auch qualitative Vorteile erfassen und in executive-taugliche Metriken übersetzen.\n\n💰 Quantifizierbare ROI-Komponenten:\n• Incident-Kostenreduktion: Studien zeigen, dass Unternehmen mit ausgereiften NIST CSF-Implementierungen die durchschnittlichen Kosten von Cybersicherheitsvorfällen um 60-80% reduzieren können.\n• Operational Efficiency: Standardisierte Prozesse und automatisierte Sicherheitskontrollen reduzieren manuelle Aufwände um bis zu 40% und ermöglichen es IT-Teams, sich auf strategische Initiativen zu konzentrieren.\n• Compliance-Kostenoptimierung: Ein einheitliches Framework reduziert die Kosten für multiple Compliance-Audits und -Assessments um durchschnittlich 30-50%.\n• Cyber-Versicherungsprämien: Nachweisbare NIST CSF-Compliance kann zu Prämieneinsparungen von 15-25% bei Cyber-Versicherungen führen.\n\n📈 Strategische Werttreiber und Geschäftsenablement:\n• Beschleunigte Marktexpansion: Vertrauensvolle Cybersicherheitshaltung ermöglicht sicherere und schnellere Expansion in neue Märkte und Kundenregionen.\n• Verbesserte Partnerintegration: Standardisierte Sicherheitsprozesse erleichtern die Integration von Geschäftspartnern und Lieferanten.\n• Innovation ohne Kompromisse: Robuste Sicherheitsgrundlagen ermöglichen es Unternehmen, innovative Technologien (Cloud, IoT, KI) sicher und schnell zu adoptieren.\n• M&A-Readiness: Gut dokumentierte und strukturierte Cybersicherheitsprozesse erleichtern Due-Diligence-Prozesse und können den Unternehmenswert bei Transaktionen steigern.\n\n🎯 ADVISORI's ROI-Messansatz:\n• Baseline-Etablierung: Detaillierte Erfassung der aktuellen Cybersicherheitskosten, -risiken und -performance als Ausgangspunkt für Verbesserungsmessungen.\n• Multi-dimensionale Metriken: Entwicklung von KPIs, die sowohl finanzielle als auch operative und strategische Verbesserungen erfassen.\n• Kontinuierliches Monitoring: Implementierung von Dashboards zur laufenden Überwachung und Berichterstattung der Geschäftsvorteile."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "In einer zunehmend komplexen Bedrohungslandschaft mit Advanced Persistent Threats und Nation-State-Angriffen – wie stellt ADVISORI sicher, dass das NIST CSF auch gegen moderne, sophistizierte Cyberbedrohungen effektiv bleibt?",
        answer: "Die moderne Cybersicherheitslandschaft ist geprägt von hochentwickelten, persistenten Bedrohungen, die traditionelle Perimeter-basierte Sicherheitsansätze umgehen. ADVISORI nutzt das NIST CSF als adaptive Grundlage und erweitert es um moderne Threat Intelligence, Zero-Trust-Prinzipien und KI-gestützte Abwehrmechanismen, um auch gegen die raffiniertesten Angriffe zu bestehen.\n\n🔍 Evolution der Bedrohungslandschaft und Framework-Anpassung:\n• Advanced Persistent Threats (APTs): Langanhaltende, zielgerichtete Angriffe erfordern kontinuierliche Überwachung und adaptive Verteidigungsstrategien, die über traditionelle Erkennungsverfahren hinausgehen.\n• Nation-State-Attacken: Staatlich gesponserte Angriffe nutzen Zero-Day-Exploits und Supply-Chain-Kompromittierungen, die präventive und proaktive Abwehrmaßnahmen erfordern.\n• AI-powered Attacks: Künstliche Intelligenz ermöglicht Angreifern, Angriffe zu automatisieren und zu personalisieren, was neue Erkennungs- und Abwehrstrategien notwendig macht.\n• Hybrid Cloud-Bedrohungen: Multi-Cloud- und Hybrid-Umgebungen schaffen neue Angriffsvektoren, die eine ganzheitliche Sicherheitsarchitektur erfordern.\n\n🛡️ ADVISORI's erweiterte NIST CSF-Implementierung:\n• Threat Intelligence Integration: Kontinuierliche Einspeisung aktueller Threat Intelligence in das Framework zur proaktiven Anpassung der Sicherheitsmaßnahmen an neue Bedrohungsmuster.\n• Zero Trust Architecture: Integration von Zero-Trust-Prinzipien in alle fünf NIST CSF-Kernfunktionen, um das Vertrauen in Netzwerke, Geräte und Benutzer kontinuierlich zu verifizieren.\n• AI-gestützte Anomalieerkennung: Implementierung von Machine Learning-Algorithmen zur Erkennung subtiler Angriffsmuster, die herkömmliche signaturbasierte Systeme umgehen.\n• Supply Chain Security: Erweiterte Bewertung und Überwachung der Lieferantensicherheit als integraler Bestandteil der 'Identify'-Funktion.\n\n🔄 Kontinuierliche Adaptation und Resilienz:\n• Dynamic Risk Assessment: Regelmäßige Neubewertung des Bedrohungsprofils und entsprechende Anpassung der Sicherheitskontrollen und -prozesse.\n• Incident Response Evolution: Kontinuierliche Verbesserung der Incident Response-Capabilities basierend auf aktuellen Angriffstechniken und Lessons Learned.\n• Red Team Exercises: Regelmäßige Durchführung fortgeschrittener Penetrationstests und Red Team-Übungen zur Validierung der Wirksamkeit gegen moderne Angriffstechniken."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie integriert ADVISORI das NIST Cybersecurity Framework in bestehende Compliance-Frameworks und regulatorische Anforderungen, um Synergien zu schaffen statt zusätzliche Compliance-Bürden?",
        answer: "Moderne Unternehmen sehen sich einer Vielzahl von Compliance-Anforderungen gegenüber, die oft überlappend und zeitaufwändig sind. ADVISORI nutzt das NIST CSF als harmonisierendes Element, um bestehende Compliance-Frameworks zu konsolidieren und Synergien zu schaffen. Dies reduziert nicht nur den administrativen Aufwand, sondern schafft auch eine ganzheitliche Governance-Struktur für Cybersicherheit und Compliance.\n\n🔗 Framework-Integration und Compliance-Harmonisierung:\n• ISO 27001 Alignment: Das NIST CSF ergänzt die strukturierten Kontrollen von ISO 27001 und bietet eine risikobasierte Priorisierung der Implementierung.\n• DORA Compliance: Für Finanzdienstleister bildet das NIST CSF eine solide Grundlage zur Erfüllung der Digital Operational Resilience Act-Anforderungen, insbesondere in den Bereichen ICT-Risikomanagement und Incident Reporting.\n• NIS2-Konformität: Die fünf Kernfunktionen des NIST CSF decken die wesentlichen Sicherheitsanforderungen der NIS2-Richtlinie ab und erleichtern die Compliance für kritische Infrastrukturen.\n• GDPR-Integration: Datenschutz-by-Design-Prinzipien werden nahtlos in die 'Protect'-Funktion des Frameworks integriert.\n\n⚡ ADVISORI's Synergy-Approach:\n• Unified Governance Structure: Entwicklung einer einheitlichen Governance-Struktur, die alle relevanten Compliance-Anforderungen unter dem NIST CSF-Dach vereint.\n• Cross-Framework Mapping: Detaillierte Zuordnung von Kontrollen und Anforderungen zwischen verschiedenen Frameworks zur Vermeidung von Doppelarbeit.\n• Integrated Audit Trails: Etablierung von Audit-Prozessen, die gleichzeitig mehrere Compliance-Anforderungen erfüllen und den Aufwand für separate Audits reduzieren.\n• Risk-based Prioritization: Nutzung des NIST CSF-Ansatzes zur Priorisierung von Compliance-Aktivitäten basierend auf Geschäftsrisiken statt regulatorischen Checkboxen.\n\n🎯 Operative Effizienz und Kosteneinsparungen:\n• Consolidated Reporting: Entwicklung integrierter Berichterstattungsmechanismen, die mehrere regulatorische Anforderungen gleichzeitig erfüllen.\n• Streamlined Documentation: Einheitliche Dokumentationsstandards, die für verschiedene Audit- und Compliance-Prozesse verwendet werden können.\n• Optimized Resource Allocation: Strategische Allokation von Compliance-Ressourcen basierend auf Risikoprioritäten und Framework-Überschneidungen.\n• Vendor Management Integration: Einheitliche Bewertung und Management von Drittanbietern im Kontext aller relevanten Compliance-Anforderungen."
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
    console.log('✅ C-Level FAQs batch 1 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
