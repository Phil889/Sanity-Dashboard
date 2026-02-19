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
    console.log('Updating BCBS-239 Ongoing Compliance page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'bcbs-239-ongoing-compliance' })
    
    if (!existingDoc) {
      throw new Error('Document "bcbs-239-ongoing-compliance" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie unterscheidet sich Ongoing Compliance von einer einmaligen BCBS-239 Implementierung und welche langfristigen Vorteile bietet dieser Ansatz?",
        answer: "Eine einmalige BCBS-239 Implementierung ist lediglich der erste Schritt, während Ongoing Compliance einen transformativen, kontinuierlichen Ansatz darstellt, der Compliance zu einem integralen Bestandteil der Unternehmens-DNA macht. Dieser Unterschied ist entscheidend für langfristigen regulatorischen Erfolg und operative Exzellenz im Risikomanagement.\n\n🔄 Fundamentale Unterschiede zwischen einmaliger Implementierung und Ongoing Compliance:\n• Prozessintegration vs. Projektfokus: Ongoing Compliance verankert BCBS-239 Anforderungen nahtlos in alltäglichen Geschäftsprozessen, anstatt sie als isolierte Compliance-Übung zu behandeln.\n• Evolutionärer vs. statischer Ansatz: Während einmalige Implementierungen einen Zeitpunkt abbilden, entwickelt sich Ongoing Compliance kontinuierlich weiter, um mit regulatorischen Änderungen, neuen Geschäftsmodellen und Technologien Schritt zu halten.\n• Präventive vs. reaktive Kontrollen: Ongoing Compliance setzt auf automatisierte, präventive Kontrollen, die Probleme frühzeitig erkennen, bevor sie zu Compliance-Verstößen führen.\n• Organisationelle Verankerung vs. technische Lösung: Ongoing Compliance kultiviert ein Compliance-Bewusstsein in der gesamten Organisation und ist nicht auf technische Implementierungen beschränkt.\n\n💼 Langfristige strategische und operative Vorteile:\n• Reduzierte Compliance-Kosten: Durch die Integration in operative Prozesse werden manuelle Nacharbeiten und kostspielige Ad-hoc-Maßnahmen vor Prüfungen minimiert.\n• Verbesserte Datenqualität und Entscheidungsfindung: Kontinuierliche Optimierung der Datenqualität führt zu zuverlässigeren Risikoeinschätzungen und fundierteren strategischen Entscheidungen.\n• Höhere Anpassungsfähigkeit: Finanzinstitute können schneller auf regulatorische Änderungen und neue Anforderungen reagieren.\n• Stärkeres Vertrauen der Aufsichtsbehörden: Eine nachweisbar robuste Ongoing Compliance Kultur führt oft zu positiverem Feedback bei regulatorischen Prüfungen und kann den Prüfungsaufwand reduzieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche technologischen Ansätze empfiehlt ADVISORI zur Automatisierung der BCBS-239 Compliance-Überwachung und wie werden diese in bestehende IT-Landschaften integriert?",
        answer: "Die Automatisierung der BCBS-239 Compliance-Überwachung erfordert einen strategischen Technologieeinsatz, der sowohl auf bestehende Systemlandschaften aufbaut als auch innovative Lösungen integriert. ADVISORI verfolgt einen pragmatischen Ansatz, der Compliance-Anforderungen nahtlos in die IT-Infrastruktur einbettet und gleichzeitig zukunftssichere Technologien implementiert.\n\n🔍 Empfohlene Technologieansätze für automatisierte Compliance-Überwachung:\n• Data Lineage & Metadata Management Tools: Implementierung von Lösungen, die den gesamten Datenlebenszyklus von der Quelle bis zum Reporting transparent machen und automatisiert überwachen.\n• Regelbasierte Validierungs-Frameworks: Entwicklung zentraler Regelwerke zur automatisierten Prüfung von Datenqualität, Vollständigkeit und Konsistenz über alle Risikodatenströme hinweg.\n• KI-gestützte Anomalieerkennung: Einsatz von Machine Learning zur Identifikation ungewöhnlicher Muster in Risikodaten, die auf potenzielle Compliance-Probleme hindeuten könnten.\n• Real-time Compliance Dashboards: Implementierung von Echtzeit-Visualisierungen, die den aktuellen Compliance-Status und potenzielle Risikobereiche für verschiedene Stakeholder aufbereiten.\n• API-basierte Compliance-Checking Services: Entwicklung von Micro-Services, die Compliance-Checks als integrierte Komponenten in bestehende Prozesse einbetten.\n\n🔗 Integrationsstrategie in bestehende IT-Landschaften:\n• Schichtenmodell statt Komplettaustausch: Wir setzen auf eine Overlay-Architektur, die bestehende Systeme durch Compliance-Layer ergänzt, anstatt kostspielige Komplettmigrationen zu erfordern.\n• API-First-Ansatz: Entwicklung standardisierter Schnittstellen, die eine flexible Integration in heterogene Systemlandschaften ermöglichen und gleichzeitig Vendor-Lock-in vermeiden.\n• Inkrementelle Automatisierung: Priorisierung von High-Impact-Bereichen für erste Automatisierungen, gefolgt von einer schrittweisen Ausweitung auf weitere Compliance-Aspekte.\n• Hybride Cloud-Strategien: Nutzung von Cloud-Technologien für Skalierbarkeit und Innovationskraft, während sensible Daten in kontrollierten Umgebungen verbleiben können.\n• DevSecOps-Integration: Verankerung von Compliance-Checks direkt in Entwicklungs- und Deployment-Prozessen, um Compliance-by-Design zu fördern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie sollten Finanzinstitute ihre BCBS-239 Governance-Strukturen anpassen, um eine nachhaltige Compliance-Kultur zu etablieren und welche Rollen und Verantwortlichkeiten sind dabei entscheidend?",
        answer: "Eine nachhaltige BCBS-239 Compliance erfordert mehr als technische Lösungen – sie verlangt eine tiefgreifende Verankerung in der Governance-Struktur und Unternehmenskultur. Die richtige Balance zwischen klarer Verantwortungszuweisung und organisationsweiter Beteiligung ist der Schlüssel für langfristigen Erfolg.\n\n🏛️ Evolution der Governance-Strukturen für nachhaltige Compliance:\n• Integration in bestehende Governance: BCBS-239 Compliance sollte nicht als separate Governance-Schicht existieren, sondern in bestehende Risiko- und Daten-Governance-Frameworks integriert werden.\n• Three Lines of Defense: Klare Abgrenzung zwischen operativer Verantwortung (1st Line), unabhängiger Überwachung (2nd Line) und interner Revision (3rd Line) mit spezifischen BCBS-239 Kontrollpunkten in jeder Linie.\n• Matrixstruktur für Data Governance: Kombination aus vertikaler (geschäftsbereichsbasierter) und horizontaler (datendomänenbasierter) Governance zur effektiven Steuerung der Risikodatenflüsse.\n• Einrichtung dedizierter Oversight-Gremien: Etablierung von Data Governance Councils und BCBS-239 Steering Committees mit direkter Berichtslinie zum Vorstand.\n• Kontinuierlicher Verbesserungszyklus: Integration von Compliance-Feedback-Schleifen in die Governance-Strukturen, um proaktive Anpassungen zu ermöglichen.\n\n👥 Schlüsselrollen und Verantwortlichkeiten für erfolgreiche Ongoing Compliance:\n• Chief Data Officer (CDO): Verantwortung für die übergreifende Datenstrategie und -qualität mit spezifischem Fokus auf regulatorische Anforderungen an Risikodaten.\n• Data Owners: Fachbereichsverantwortliche, die die inhaltliche Korrektheit und Geschäftsrelevanz der Risikodaten sicherstellen.\n• Data Stewards: Operative Experten, die Datenqualitätsstandards definieren, überwachen und durchsetzen.\n• BCBS-239 Compliance Officer: Spezialist für die kontinuierliche Überwachung und Berichterstattung zum Compliance-Status sowie die Koordination von Verbesserungsmaßnahmen.\n• Risk IT Specialists: Technische Experten, die die IT-Infrastruktur für Risikodaten-Aggregation kontinuierlich optimieren.\n• Internal Audit: Unabhängige Prüfer, die die Wirksamkeit des BCBS-239 Compliance-Frameworks periodisch evaluieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie können Ongoing Compliance Metriken zur Bewertung der BCBS-239 Reife entwickelt werden und welche KPIs sollten in ein effektives Dashboard für das Management aufgenommen werden?",
        answer: "Effektive Metriken und KPIs für BCBS-239 Ongoing Compliance bilden das Fundament für eine datengestützte Compliance-Steuerung und transparente Management-Information. Die strategische Auswahl und strukturierte Messung dieser Indikatoren ermöglicht eine präzise Bewertung der Compliance-Reife und gezielte Optimierungsmaßnahmen.\n\n📊 Methodischer Ansatz zur Entwicklung aussagekräftiger Compliance-Metriken:\n• Prinzipienbasierte Metrik-Architektur: Entwicklung von Metriken, die direkt mit den 14 BCBS-239 Prinzipien korrespondieren und deren Erfüllungsgrad messbar machen.\n• Mehrdimensionale Reifegrad-Modelle: Bewertung der Compliance-Reife anhand verschiedener Dimensionen (Prozesse, Daten, Technologie, Governance, Kultur) mit definierten Reifegradstufen.\n• Quantitative und qualitative Balance: Kombination harter Kennzahlen (z.B. Datenqualitätsmetriken) mit qualitativen Assessments (z.B. Governance-Effektivität) für ein ganzheitliches Bild.\n• Trend- und Benchmark-Orientierung: Fokus nicht nur auf absolute Werte, sondern auch auf Entwicklungstrends und interne/externe Vergleichswerte.\n• Risikoorientierte Priorisierung: Höhere Gewichtung von Metriken für besonders kritische oder schwach ausgeprägte Compliance-Bereiche.\n\n🔔 Essenzielle KPIs für ein effektives Management-Dashboard:\n• Data Quality Index: Aggregierter Score für Vollständigkeit, Genauigkeit, Konsistenz und Aktualität kritischer Risikodaten mit Drill-down-Möglichkeiten.\n• Risikodaten-Aggregationszeit: Messung der Zeit, die für die End-to-End-Aggregation von Risikodaten benötigt wird, mit Benchmarks für Normalbetrieb und Stressszenarien.\n• Automatisierungsgrad: Prozentualer Anteil automatisierter vs. manueller Prozesse in der Risikodatenaggregation und -berichterstattung.\n• Kontroll-Effektivität: Erfolgsquote der implementierten Kontrollen bei der Erkennung und Prävention von Datenqualitätsproblemen.\n• Abhängigkeitsrisiko: Bewertung kritischer Systemabhängigkeiten und Single Points of Failure in der Risikodaten-Infrastruktur.\n• Compliance-Incident-Tracking: Anzahl, Schweregrad und Lösungszeit von BCBS-239-relevanten Vorfällen und Schwachstellen."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ FAQs batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
