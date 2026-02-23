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
    console.log('Updating CIS Controls page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cis-controls' })
    
    if (!existingDoc) {
      throw new Error('Document "cis-controls" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum sind die CIS Controls für die C-Suite mehr als nur eine weitere Cybersicherheits-Checkliste und wie transformiert ADVISORI diese zu einem strategischen Competitive Advantage?",
        answer: "Für die C-Suite repräsentieren die CIS Controls weit mehr als technische Sicherheitsmaßnahmen – sie sind ein strategisches Framework zur Geschäftsabsicherung und zum Aufbau nachhaltiger Wettbewerbsvorteile. In einer digitalisierten Wirtschaft, in der Cyber-Resilienz über Marktposition und Unternehmenswert entscheidet, positioniert ADVISORI die CIS Controls als Enabler für vertrauensvolle Geschäftsbeziehungen und operative Exzellenz.\n\n🎯 Strategische Werttreiber für die Führungsebene:\n• Vertrauensbildung bei Stakeholdern: Nachweisbare Implementierung der CIS Controls signalisiert institutionellen Investoren, Partnern und Kunden höchste Cybersicherheitsstandards und schafft Vertrauen in die digitale Transformation.\n• Risikominimierung und Haftungsschutz: Systematische Umsetzung reduziert die persönliche Haftung der Geschäftsführung bei Cyber-Vorfällen und stärkt die Argumentation gegenüber Aufsichtsbehörden und Versicherern.\n• Operational Excellence: Die priorisierten Controls optimieren nicht nur die Sicherheit, sondern auch die operative Effizienz durch standardisierte Prozesse und verbesserte Systemverfügbarkeit.\n• M&A-Readiness: Unternehmen mit nachgewiesener CIS-Compliance sind attraktivere Übernahmeziele und erzielen höhere Bewertungen bei Due-Diligence-Prozessen.\n\n💡 Der ADVISORI-Transformationsansatz:\n• Business-Value-Mapping: Wir verknüpfen jede CIS Control mit konkreten Geschäftszielen und quantifizieren den ROI durch reduzierte Ausfallzeiten, vermiedene Compliance-Strafen und gesteigerte Kundenakzeptanz.\n• Executive Dashboard Integration: Entwicklung von C-Level-Dashboards, die Cybersicherheits-KPIs in Geschäftskennzahlen übersetzen und fundierte strategische Entscheidungen ermöglichen.\n• Stakeholder-Kommunikation: Aufbereitung der CIS-Implementierung für Board-Präsentationen, Investor Relations und Kundenkommunikation zur Stärkung des Markenimages.\n• Integration in Corporate Strategy: Positionierung der CIS Controls als integraler Bestandteil der digitalen Transformation und Wachstumsstrategie, nicht als isolierte IT-Initiative."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie quantifiziert ADVISORI den ROI einer CIS Controls Implementierung und welchen direkten Einfluss hat dies auf Profitabilität und Shareholder Value?",
        answer: "Die Investition in CIS Controls durch ADVISORI ist keine reine Sicherheitsausgabe, sondern ein strategischer Hebel zur Wertsteigerung und Profitabilitätssicherung. Unser datengestützter Ansatz transformiert Cybersicherheitsinvestitionen in messbare Geschäftsergebnisse und demonstriert klaren Shareholder Value durch quantifizierte Risikoreduktion und operative Effizienzsteigerungen.\n\n💰 Direkte finanzielle Werttreiber:\n• Vermeidung von Cyber-Schäden: Statistisch reduzieren gut implementierte CIS Controls das Risiko erfolgreicher Angriffe um 85%. Bei durchschnittlichen Cyber-Schäden von 4,35 Millionen USD bedeutet dies erhebliche Kostenvermeidung.\n• Optimierung der Cyber-Versicherungsprämien: Nachweisbare CIS-Compliance kann Versicherungsprämien um 15-30% reduzieren und verbessert gleichzeitig die Deckungsbedingungen.\n• Reduktion von Compliance-Kosten: Die CIS Controls erfüllen Anforderungen multipler Frameworks (ISO 27001, NIST, SOX), wodurch redundante Audit- und Zertifizierungskosten vermieden werden.\n• Operative Effizienzsteigerung: Automatisierte Controls reduzieren manuelle Sicherheitsprozesse und IT-Betriebskosten um durchschnittlich 25-40%.\n\n📈 Indirekte Wertsteigerung und strategische Vorteile:\n• Accelerated Time-to-Market: Sichere Entwicklungs- und Deployment-Prozesse ermöglichen schnellere Produkteinführungen ohne Sicherheitsrisiken.\n• Premium Pricing für sichere Services: Nachweisbare Cybersicherheit rechtfertigt Preisaufschläge bei sicherheitskritischen Dienstleistungen und Produkten.\n• Improved Customer Lifetime Value: Vertrauen in die Datensicherheit führt zu höherer Kundenbindung und reduzierten Kundenabwanderungen.\n• Enhanced Enterprise Valuation: Cyber-resiliente Unternehmen erzielen bei Bewertungen und Exits 10-15% höhere Multiples.\n\n🔍 ADVISORI's ROI-Quantifizierungsmethodik:\n• Baseline-Risiko-Assessment: Quantifizierung des aktuellen Cyber-Risikos in finanziellen Begriffen durch Monte-Carlo-Simulationen und Branchenbenchmarks.\n• Control-Effectiveness-Modelling: Messung der Risikoreduktion durch spezifische CIS Controls basierend auf empirischen Daten und Threat-Intelligence.\n• Business-Impact-Calculation: Übersetzung von Sicherheitsverbesserungen in konkrete Geschäftskennzahlen wie EBITDA-Schutz, Working-Capital-Optimierung und Cash-Flow-Stabilität."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Die Bedrohungslandschaft entwickelt sich exponentiell – von KI-gestützten Angriffen bis hin zu Supply-Chain-Kompromittierungen. Wie stellt ADVISORI sicher, dass unsere CIS Controls Implementation dieser dynamischen Realität gewachsen ist?",
        answer: "In einer Ära der Hyperkonvergenz von Bedrohungen, in der KI sowohl Angriffsvektoren verstärkt als auch Verteidigungsmöglichkeiten erweitert, erfordert eine zukunftsfähige CIS Controls Implementierung mehr als statische Sicherheitsmaßnahmen. ADVISORI konzipiert adaptive Cybersicherheits-Architekturen, die nicht nur gegen aktuelle Bedrohungen schützen, sondern auch die Flexibilität besitzen, sich proaktiv an emerging threats anzupassen.\n\n🔄 Adaptive Security durch Next-Generation CIS Implementation:\n• Threat-Intelligence-Integration: Kontinuierliche Einspeisung aktueller Bedrohungsdaten in die CIS Controls, um Schutzmaßnahmen dynamisch an neue Angriffsmuster anzupassen.\n• AI-Enhanced Controls: Einsatz von Machine Learning zur Verstärkung traditioneller CIS Controls, insbesondere bei Anomalieerkennung, Behavioral Analysis und automatisierter Incident Response.\n• Zero-Trust-Prinzipien: Integration von Zero-Trust-Architekturen in die CIS Controls Implementation, um auch gegen sophisticated insider threats und lateral movement zu schützen.\n• Supply-Chain-Security-Integration: Erweiterung der CIS Controls auf die gesamte digitale Lieferkette durch kontinuierliche Vendor-Assessments und Third-Party-Risk-Management.\n\n🛡️ Proaktive Bedrohungsantizipation:\n• Threat Modeling 2.0: Entwicklung von Bedrohungsmodellen, die nicht nur aktuelle Risks abbilden, sondern auch potenzielle future attack vectors basierend auf Technologietrends vorhersagen.\n• Red Team Exercises mit KI-Komponenten: Regelmäßige Penetrationstests, die moderne Angriffstechniken simulieren, einschließlich KI-gestützter Social Engineering und automatisierter Exploits.\n• Scenario-based Stress Testing: Simulation komplexer, mehrdimensionaler Angriffszenarien, die mehrere CIS Controls gleichzeitig testen und Schwachstellen in der Gesamtarchitektur aufdecken.\n• Continuous Improvement Loops: Etablierung von Feedback-Mechanismen, die Lessons Learned aus globalen Cyber-Incidents automatisch in die lokale CIS Controls Implementation integrieren.\n\n🚀 Future-Ready Architecture Design:\n• Cloud-Native Security Integration: Anpassung der CIS Controls für Multi-Cloud und Hybrid-Cloud-Umgebungen mit nativer Integration von Cloud Security Posture Management (CSPM).\n• DevSecOps-Integration: Einbettung von CIS Controls in moderne Entwicklungspipelines zur Sicherstellung, dass Security-by-Design auch bei agiler Softwareentwicklung gewährleistet ist.\n• Quantum-Ready Cryptography: Vorbereitung der kryptographischen Controls auf die Post-Quantum-Ära durch Migration zu quantum-resistenten Algorithmen.\n• IoT- und OT-Security-Extension: Erweiterung der traditionellen IT-fokussierten CIS Controls auf Industrial IoT und Operational Technology für ganzheitlichen Schutz digitaler Ökosysteme."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie transformiert ADVISORI die CIS Controls von einem reaktiven Compliance-Tool zu einem proaktiven Business Enabler für digitale Innovation und nachhaltiges Wachstum?",
        answer: "Die traditionelle Betrachtung der CIS Controls als defensive Cybersicherheitsmaßnahmen greift in der heutigen digitalen Wirtschaft zu kurz. ADVISORI positioniert die CIS Controls als strategischen Innovationskatalysator, der nicht nur Risiken mitigiert, sondern aktiv neue Geschäftsmöglichkeiten schafft und die digitale Transformation acceleriert. Für die C-Suite bedeutet dies, dass Cybersicherheitsinvestitionen direkt zu Umsatzwachstum und Marktexpansion beitragen.\n\n🚀 Von Defense zu Digital Business Acceleration:\n• Innovation Security Framework: Integration der CIS Controls in Innovationsprozesse, sodass neue digitale Produkte und Services von Anfang an security-by-design implementieren und schneller zum Markt gebracht werden können.\n• Trust-as-a-Service Monetization: Transformation der nachgewiesenen CIS-Compliance in marktfähige Trust-Services, die als Wettbewerbsvorteil bei Kunden positioniert und monetarisiert werden können.\n• Digital Ecosystem Enablement: Sichere Integration mit Partnern, Zulieferern und Kunden durch standardisierte CIS Controls, die neue Geschäftsmodelle und digitale Ökosysteme ermöglichen.\n• Regulatory Arbitrage: Proaktive CIS-Implementation schafft Vorsprung bei regulatorischen Anforderungen und ermöglicht earlier market entry in regulierten Industrien.\n\n💡 Strategic Business Value Creation:\n• Data Monetization Security: Sichere Grundlage für erweiterte Datenanalytik und KI-Initiativen durch robuste Data Governance Controls, die neue Revenue Streams aus Datenassets ermöglichen.\n• Platform Economy Readiness: CIS Controls als Foundation für sichere API-Ökonomie und Plattform-Geschäftsmodelle, die Skalierung ohne proportionale Sicherheitsrisiken erlauben.\n• ESG-Integration: Cybersicherheit als integraler Bestandteil der ESG-Strategie, der ESG-Ratings verbessert und Zugang zu nachhaltigkeitsorientierten Investoren und Kunden schafft.\n• Acquisition Integration Framework: Standardisierte CIS Controls erleichtern M&A-Integration durch einheitliche Sicherheitsstandards und reduzieren Post-Merger-Integration-Risiken.\n\n🔄 Agile Security Operations für Business Agility:\n• DevSecOps Excellence: Integration der CIS Controls in CI/CD-Pipelines ermöglicht continuous deployment ohne Sicherheitskompromisse und beschleunigt Time-to-Market.\n• Zero Downtime Security: Implementation von CIS Controls mit Focus auf Business Continuity gewährleistet, dass Sicherheitsupdates und Incident Response ohne Geschäftsunterbrechung erfolgen.\n• Predictive Security Analytics: Einsatz von Advanced Analytics zur Vorhersage und Prävention von Sicherheitsereignissen, bevor sie Geschäftsprozesse beeinträchtigen können.\n• Automated Compliance Reporting: Automatisierung von Compliance-Nachweisen reduziert administrative Lasten und ermöglicht es Teams, sich auf wertschöpfende Aktivitäten zu konzentrieren."
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
