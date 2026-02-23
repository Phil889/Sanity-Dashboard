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
    console.log('Updating Standards Frameworks Struktur Baustein Analyse page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'standards-frameworks-struktur-baustein-analyse' })
    
    if (!existingDoc) {
      throw new Error('Document "standards-frameworks-struktur-baustein-analyse" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist eine strukturierte Baustein-Analyse für IT-Grundschutz aus C-Level Perspektive essentiell und wie garantiert ADVISORI eine ROI-optimierte Implementierung?",
        answer: "Für die C-Suite ist eine professionelle Strukturanalyse und Baustein-Bewertung der Grundstein für eine wirtschaftlich erfolgreiche IT-Grundschutz Implementierung. Ohne systematische Analyse drohen Ressourcenverschwendung, unvollständige Compliance und ineffiziente Sicherheitsmaßnahmen. ADVISORI transformiert diese Herausforderung in einen strategischen Vorteil durch datengetriebene Entscheidungsfindung und präzise Ressourcenallokation.\n\n🎯 Strategische Vorteile für die Führungsebene:\n• Kostenoptimierung: Vermeidung von Über-Engineering durch präzise Identifikation nur der wirklich relevanten IT-Grundschutz Bausteine für Ihre spezifische IT-Landschaft.\n• Compliance-Sicherheit: Systematische Abdeckung aller regulatorischen Anforderungen ohne Lücken oder redundante Maßnahmen.\n• Risikomanagement: Transparente Bewertung und Priorisierung von Sicherheitsrisiken basierend auf Geschäftskritikalität und Bedrohungslandschaft.\n• Ressourcenplanung: Präzise Budgetierung und Personalplanung durch strukturierte Umsetzungsroadmap mit klaren Meilensteinen.\n\n🔍 Der ADVISORI-Ansatz für wirtschaftliche Exzellenz:\n• Business-Impact orientierte Analyse: Wir bewerten nicht nur technische Aspekte, sondern deren direkte Auswirkungen auf Ihre Geschäftsprozesse und Wertschöpfungsketten.\n• Maßgeschneiderte Baustein-Priorisierung: Entwicklung einer individuellen Prioritätsmatrix basierend auf Ihren spezifischen Geschäftsanforderungen, Risikoappetit und verfügbaren Ressourcen.\n• Iterative Implementierungsstrategie: Aufbau einer stufenweisen Umsetzungsplanung, die schnelle Wins ermöglicht und kontinuierliche Wertschöpfung sicherstellt.\n• Messbare Erfolgsmetriken: Definition klarer KPIs und ROI-Kennzahlen, die es der C-Suite ermöglichen, den Fortschritt und Wert der IT-Grundschutz Initiative zu verfolgen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie stellt ADVISORI sicher, dass die Strukturanalyse und Baustein-Bewertung auch in komplexen, hybriden IT-Umgebungen präzise Ergebnisse liefert?",
        answer: "Moderne Unternehmen operieren in zunehmend komplexen, hybriden IT-Landschaften mit Cloud-Services, Legacy-Systemen, IoT-Komponenten und mobilen Arbeitsplätzen. Diese Komplexität erfordert eine hochspezialisierte Analysemethodik, die über traditionelle Ansätze hinausgeht. ADVISORI hat bewährte Verfahren entwickelt, um auch in den anspruchsvollsten IT-Umgebungen präzise und verlässliche Strukturanalysen durchzuführen.\n\n🔄 Herausforderungen komplexer IT-Landschaften:\n• Multi-Cloud und Hybrid-Infrastrukturen: Verschiedene Cloud-Provider, On-Premise-Systeme und Hybrid-Lösungen erfordern differenzierte Sicherheitsansätze.\n• Legacy-Integration: Ältere Systeme mit begrenzten Sicherheitsfunktionen müssen in moderne Sicherheitskonzepte integriert werden.\n• Dynamische Infrastrukturen: Container, Microservices und DevOps-Umgebungen schaffen ständig verändernde Sicherheitsperimeter.\n• Remote Work und BYOD: Dezentrale Arbeitsmodelle erweitern die Angriffsfläche und erfordern neue Schutzkonzepte.\n\n🛠️ ADVISORI's spezialisierte Analysemethodik:\n• Automatisierte Discovery-Tools: Einsatz modernster Scanning- und Inventarisierungstechnologien zur vollständigen Erfassung aller IT-Assets, einschließlich Shadow-IT und temporärer Ressourcen.\n• Cloud-native Analyseverfahren: Spezielle Bewertungsmethoden für Cloud-Workloads, Serverless-Architekturen und Container-Umgebungen unter Berücksichtigung der geteilten Verantwortungsmodelle.\n• Kontinuierliche Überwachung: Implementierung von Monitoring-Systemen, die Änderungen in der IT-Infrastruktur automatisch erfassen und Baustein-Zuordnungen entsprechend aktualisieren.\n• Interdependenz-Mapping: Darstellung komplexer Abhängigkeiten zwischen verschiedenen IT-Komponenten und deren Auswirkungen auf die Baustein-Anwendung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche konkreten Kosteneinsparungen und Effizienzgewinne kann die C-Suite durch ADVISORI's systematische Baustein-Analyse erwarten?",
        answer: "Eine professionelle Strukturanalyse und Baustein-Bewertung durch ADVISORI ist eine Investition, die sich sowohl kurz- als auch langfristig in messbaren Kosteneinsparungen und Effizienzsteigerungen auszahlt. Unsere Methodik eliminiert typische Kostentreiber ungeplanter IT-Grundschutz Implementierungen und maximiert den Return on Security Investment (ROSI) durch präzise Ressourcenallokation.\n\n💰 Direkte Kosteneinsparungen und Effizienzgewinne:\n• Reduktion des Implementierungsaufwands: Durch präzise Baustein-Zuordnung können bis zu 40% der Implementierungszeit eingespart werden, da nur relevante Maßnahmen umgesetzt werden.\n• Vermeidung von Redundanzen: Systematische Analyse verhindert Doppelungen und überflüssige Sicherheitsmaßnahmen, die zu Kosteneinsparungen von 25-35% führen können.\n• Optimierte Tool-Auswahl: Bedarfsgerechte Technologie-Empfehlungen vermeiden Over-Engineering und reduzieren Lizenz- und Betriebskosten um durchschnittlich 20-30%.\n• Verkürzte Audit-Zyklen: Strukturierte Dokumentation und klare Baustein-Zuordnung beschleunigen interne und externe Audits um bis zu 50%.\n\n📈 Langfristige strategische Vorteile:\n• Skalierbarkeit: Eine gut strukturierte Basis ermöglicht effiziente Erweiterungen und Anpassungen bei Unternehmenswachstum oder Änderungen der IT-Landschaft.\n• Automatisierungspotenzial: Klar definierte Strukturen und Prozesse schaffen die Grundlage für weitreichende Automatisierung von Sicherheitsmaßnahmen.\n• Risikoreduktion: Präventive Identifikation und Behandlung von Sicherheitslücken verhindert kostspielige Sicherheitsvorfälle und deren Folgekosten.\n• Compliance-Effizienz: Einmalige strukturelle Investition schafft eine solide Basis für die Erfüllung aktueller und zukünftiger regulatorischer Anforderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie gewährleistet ADVISORI, dass die Strukturanalyse nicht nur aktuellen Standards entspricht, sondern auch zukunftsfähig für kommende IT-Grundschutz Entwicklungen ist?",
        answer: "In der sich rasant entwickelnden Cybersecurity-Landschaft ist es für die C-Suite essentiell, dass Investitionen in IT-Grundschutz nicht nur heutige Anforderungen erfüllen, sondern auch zukunftssicher sind. ADVISORI verfolgt einen vorausschauenden Ansatz, der sowohl aktuelle BSI-Standards optimal umsetzt als auch die Grundlage für zukünftige Entwicklungen und Erweiterungen schafft.\n\n🔮 Zukunftsorientierte Analysemethodik:\n• Trend-Monitoring: Kontinuierliche Beobachtung der Entwicklungen bei BSI, EU-Regulatorik (NIS2, DORA, Cyber Resilience Act) und internationalen Standards (ISO 27001, NIST Framework).\n• Emerging Technology Assessment: Berücksichtigung neuer Technologien wie KI, Quantum Computing, 5G/6G und deren Auswirkungen auf zukünftige Sicherheitsanforderungen.\n• Adaptive Architektur-Prinzipien: Design der Strukturanalyse basierend auf modularen und erweiterbaren Konzepten, die Anpassungen ohne komplette Neugestaltung ermöglichen.\n• Forward-Looking Risk Assessment: Bewertung nicht nur aktueller, sondern auch potentieller zukünftiger Bedrohungsszenarien und deren Implikationen für die Baustein-Auswahl.\n\n🚀 Strategische Zukunftssicherung durch ADVISORI:\n• Modulare Implementierungsstrategie: Aufbau der IT-Grundschutz Struktur in flexiblen Modulen, die unabhängig erweitert oder angepasst werden können ohne die Gesamtarchitektur zu beeinträchtigen.\n• Technology-Agnostic Approach: Fokus auf prozessuale und methodische Ansätze, die unabhängig von spezifischen Technologie-Stacks funktionieren und dadurch vendor lock-ins vermeiden.\n• Continuous Improvement Framework: Etablierung von Prozessen und Strukturen für die kontinuierliche Weiterentwicklung und Anpassung der IT-Grundschutz Maßnahmen.\n• Innovation Integration: Systematische Bewertung und Integration neuer Sicherheitstechnologien und -methoden in die bestehende Struktur ohne disruptive Änderungen."
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
