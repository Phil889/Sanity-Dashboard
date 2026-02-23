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
    console.log('Updating Basel III Einführung neuer Kennzahlen page with FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'basel-iii-einfuehrung-neuer-kennzahlen-countercyclical-buffer-etc' })
    
    if (!existingDoc) {
      throw new Error('Document "basel-iii-einfuehrung-neuer-kennzahlen-countercyclical-buffer-etc" not found')
    }
    
    // Create new FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie unterstützt ADVISORI bei der Integration der Basel III Kennzahlen in das strategische Performance Management und die Kapitalallokation?",
        answer: "Die Integration von Basel III Kennzahlen in das strategische Performance Management und die Kapitalallokation geht weit über die reine Compliance hinaus. Sie ermöglicht eine risikoadjustierte Steuerung, die regulatorische Anforderungen mit geschäftlichen Zielen in Einklang bringt und die Eigenkapitalrendite maximiert. ADVISORI unterstützt Banken dabei, diese Integration systematisch umzusetzen und die strategische Steuerung auf ein neues Niveau zu heben.\n\n📈 Integration in das strategische Performance Management:\n• Risikoadjustierte Performancemessung: Entwicklung von Kennzahlensystemen, die den Kapital- und Liquiditätsverbrauch gemäß Basel III direkt in die Erfolgsmessung von Geschäftsbereichen, Produkten und Kundenbeziehungen integrieren.\n• Harmonisierung von Steuerungskreisen: Abstimmung von regulatorischen Anforderungen mit internen Steuerungsgrößen, um konsistente Anreize und transparente Entscheidungsgrundlagen zu schaffen.\n• Implementierung eines Regulatory Burden Accounting: Präzise Zuordnung der regulatorischen Kosten zu Geschäftsaktivitäten als Basis für strategische Entscheidungen und Preisgestaltung.\n• Performance Attribution: Differenzierte Analyse der Geschäftsergebnisse unter Berücksichtigung des regulatorischen Umfelds, um die tatsächlichen Wertbeiträge transparent zu machen.\n\n🧩 Strategische Kapitalallokation unter Basel III:\n• Mehrdimensionale Kapitalallokation: Entwicklung von Allokationsmodellen, die simultan verschiedene Kapital- und Liquiditätsmetriken (CET1, Leverage Ratio, LCR, NSFR) berücksichtigen und die optimale Balance finden.\n• Hurdle-Rate-Management: Etablierung differenzierter Hurdle Rates, die den spezifischen regulatorischen Anforderungen verschiedener Geschäftsaktivitäten Rechnung tragen.\n• Szenariobasierte Kapitalplanung: Integration von Basel III Kennzahlen in die strategische Mehrjahresplanung mit robusten Szenarien, die regulatorische Entwicklungen antizipieren.\n• Strategisches De-Risking: Identifikation von Portfoliosegmenten mit suboptimalem Verhältnis von regulatorischem Aufwand zu wirtschaftlichem Ertrag als Basis für strategische Desinvestitionen.\n\n🔍 ADVISORIs integrierter Beratungsansatz:\n• Regulatory-Finance-Alignment: Zusammenführung von regulatorischen und finanzwirtschaftlichen Perspektiven zu einem konsistenten Steuerungsansatz, der Compliance-Anforderungen mit Wertschöpfungszielen verbindet.\n• Performance Management Redesign: Überarbeitung von Planungs-, Reporting- und Incentivierungssystemen, um Basel III Kennzahlen konsistent zu integrieren und Fehlsteuerungen zu vermeiden.\n• Management Information System Enhancement: Weiterentwicklung der Management-Informationssysteme zur transparenten Darstellung der regulatorischen Dimension in allen Geschäftsentscheidungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie verändert sich die Implementierung von Basel III Kennzahlen im Kontext der zunehmenden Digitalisierung und Automatisierung im Bankensektor?",
        answer: "Die Implementierung von Basel III Kennzahlen durchläuft einen fundamentalen Wandel im Zuge der fortschreitenden Digitalisierung und Automatisierung des Bankensektors. Diese Transformation bietet enorme Chancen, den regulatorischen Compliance-Prozess effizienter, präziser und wertschöpfender zu gestalten. ADVISORI unterstützt Banken dabei, diese digitale Transformation der regulatorischen Prozesse erfolgreich umzusetzen und strategische Vorteile zu realisieren.\n\n🔄 Paradigmenwechsel in der Basel III Implementierung:\n• Von der nachgelagerten Berechnung zum Echtzeit-Monitoring: Traditionelle End-of-Period-Berechnungen werden zunehmend durch kontinuierliche, echtzeitnahe Überwachung regulatorischer Kennzahlen ersetzt, was proaktive Steuerung ermöglicht.\n• Von isolierten Reporting-Silos zur integrierten Datenplattform: Spezialisierte Reporting-Lösungen weichen ganzheitlichen Datenplattformen, die regulatorische Anforderungen mit anderen Steuerungsdimensionen verbinden.\n• Von manuellen Prozessen zur intelligenten Automatisierung: Arbeitsintensive manuelle Validierungs- und Korrekturprozesse werden durch KI-gestützte Automatisierung ersetzt, die Fehler frühzeitig erkennt und selbstlernend optimiert.\n• Von starren Systemen zu flexiblen, modularen Architekturen: Monolithische Regulatory-Reporting-Systeme werden durch flexible Microservices-Architekturen abgelöst, die agile Anpassungen an regulatorische Änderungen ermöglichen.\n\n💡 Digitale Innovationen für die Basel III Implementierung:\n• Regulatory-as-a-Service: Cloud-basierte Lösungen ermöglichen skalierbare, kosteneffiziente Implementierungen regulatorischer Anforderungen mit kontinuierlichen Updates und Shared-Service-Ansätzen.\n• KI-gestützte Datenvalidierung: Fortschrittliche Algorithmen identifizieren Anomalien und Inkonsistenzen in regulatorischen Daten und ermöglichen präzisere, effizientere Validierungsprozesse.\n• Automatisierte Regulatory Change Management: Intelligente Systeme analysieren regulatorische Publikationen, identifizieren relevante Änderungen und übersetzen diese automatisiert in Systemanpassungen.\n• Digitale Twins für regulatorische Simulation: Virtuelle Abbilder der Bank ermöglichen die Simulation von Geschäftsentscheidungen und deren Auswirkungen auf regulatorische Kennzahlen vor der tatsächlichen Umsetzung.\n\n🚀 ADVISORIs digitaler Transformationsansatz:\n• Digital Maturity Assessment: Bewertung des digitalen Reifegrads Ihrer regulatorischen Prozesse und Identifikation der höchstprioritären Digitalisierungschancen.\n• Regulatory Technology Roadmap: Entwicklung einer mehrjährigen Technologie-Roadmap, die die Digitalisierung der Basel III Implementierung mit der übergreifenden IT-Strategie harmonisiert.\n• Agile Regulatory Implementation: Einführung agiler Methoden in die Umsetzung regulatorischer Anforderungen, um schnellere Implementierungszyklen und höhere Qualität zu erreichen.\n• Change Management für digitale Regulatory Teams: Unterstützung bei der Transformation traditioneller Regulatory-Teams zu digitalen, datengetriebenen Expertenteams mit neuen Kompetenzen und Arbeitsweisen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche konkreten Maßnahmen können Banken ergreifen, um die Bilanzstruktur unter Berücksichtigung aller Basel III Kennzahlen zu optimieren?",
        answer: "Die simultane Optimierung der Bilanzstruktur unter Berücksichtigung aller Basel III Kennzahlen stellt Banken vor komplexe Herausforderungen, bietet aber auch erhebliche Chancen zur Verbesserung der Gesamtperformance. Eine systematische Optimierung erfordert ein tiefes Verständnis der Wechselwirkungen zwischen verschiedenen Kennzahlen und einen ganzheitlichen Ansatz. ADVISORI unterstützt Banken mit einem strukturierten Optimierungsframework, das konkrete Maßnahmen auf allen Ebenen der Bilanzstruktur umfasst.\n\n🏦 Optimierung der Aktivseite:\n• Strategisches Exposure Management: Systematische Überprüfung und Restrukturierung von Kreditportfolios zur Verbesserung der RWA-Effizienz unter Berücksichtigung von Sicherheiten, Laufzeiten und Gegenparteirisiken.\n• High-Quality Liquid Assets (HQLA) Optimierung: Feinabstimmung des HQLA-Portfolios zur effizienten Erfüllung der LCR bei gleichzeitiger Minimierung negativer Ertragseffekte durch diversifizierte Investmentstrategien.\n• Collateral Management Enhancement: Implementierung eines intelligenten Collateral Managements, das die regulatorische Behandlung von Sicherheiten optimiert und Cross-Product-Netting-Potenziale ausschöpft.\n• Bilanzverkürzende Maßnahmen: Selektiver Einsatz von Verbriefungen, Kreditverkäufen und Clearing-Lösungen zur Entlastung der Leverage Ratio bei gleichzeitiger Schonung risikobasierter Kapitalquoten.\n\n💰 Optimierung der Passivseite:\n• Strategisches Funding Mix Design: Entwicklung einer optimalen Refinanzierungsstruktur, die simultan die Anforderungen von NSFR, Liquiditätskennzahlen und Kapitaleffizienz berücksichtigt.\n• Liability Composition Refinement: Gezielte Anpassung der Zusammensetzung und Laufzeitstruktur von Verbindlichkeiten zur Verbesserung der Stable Funding Ratio und Optimierung der Liquiditätspuffer.\n• Innovative Kapitalinstrumente: Entwicklung und Emission maßgeschneiderter Kapitalinstrumente, die regulatorische Anforderungen effizient erfüllen und gleichzeitig attraktive Konditionen für Investoren bieten.\n• Deposit Strategy Recalibration: Überarbeitung der Einlagenstrategie mit Fokus auf stabile Einlagen, die positiv auf LCR und NSFR wirken, bei gleichzeitiger Optimierung der Zinsaufwendungen.\n\n⚖️ Bilanzübergreifende Optimierungsmaßnahmen:\n• Produktdesign und Pricing Optimization: Neugestaltung von Bankprodukten und deren Preismodellen unter Berücksichtigung aller regulatorischen Kosten, um profitablere Geschäftsbeziehungen zu fördern.\n• Regulatory Netting Enhancement: Implementierung fortschrittlicher Netting-Strategien für Derivate und Securities Financing Transactions zur simultanen Entlastung von Leverage Ratio und RWA.\n• Balance Sheet Velocity Improvement: Erhöhung der Bilanzrotation durch effizienteres Kapital- und Liquiditätsrecycling, um die Rentabilität des regulatorisch gebundenen Kapitals zu steigern.\n• Strategic Business Mix Shift: Strategische Neuausrichtung des Geschäftsmix in Richtung regulatorisch effizienterer Aktivitäten bei gleichzeitiger Berücksichtigung von Wachstumspotenzial und Profitabilität."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie können Finanzinstitute die komplexen Datenmanagement-Herausforderungen bei der Implementierung neuer Basel III Kennzahlen bewältigen?",
        answer: "Die erfolgreiche Implementierung neuer Basel III Kennzahlen stellt hohe Anforderungen an das Datenmanagement von Finanzinstituten. Die Komplexität und Granularität der erforderlichen Daten, die strengen Qualitätsanforderungen und die Notwendigkeit einer konsistenten Integration verschiedener Datenquellen schaffen erhebliche Herausforderungen. ADVISORI unterstützt Banken mit einem umfassenden Ansatz zur Bewältigung dieser Datenmanagement-Herausforderungen und zur Schaffung nachhaltiger Mehrwerte über die reine Compliance hinaus.\n\n🔍 Zentrale Datenmanagement-Herausforderungen bei Basel III Kennzahlen:\n• Datenintegration und -harmonisierung: Die Berechnung der Basel III Kennzahlen erfordert die Integration und Harmonisierung von Daten aus verschiedenen Quellsystemen mit unterschiedlichen Datenmodellen, Granularitäten und Aktualisierungszyklen.\n• Datenqualität und -konsistenz: Strenge regulatorische Anforderungen an Datenqualität, Vollständigkeit und Konsistenz erhöhen den Aufwand für Datenvalidierung und -bereinigung erheblich.\n• Datenlineage und Auditfähigkeit: Die Notwendigkeit, den vollständigen Datenfluss von der Quelle bis zum regulatorischen Report nachvollziehbar und prüffähig zu dokumentieren, stellt hohe Anforderungen an Metadata Management und Dokumentation.\n• Datengovernance und Ownership: Die klare Zuweisung von Verantwortlichkeiten für Datenqualität und -definitionen über Abteilungsgrenzen hinweg erfordert robuste Governance-Strukturen und Prozesse.\n\n🛠️ ADVISORIs Lösungsansatz für Basel III Datenmanagement:\n• Regulatory Data Foundation: Etablierung einer zentralen Datenbasis für alle regulatorischen Anforderungen mit einheitlichen Datenmodellen, Definitionen und Qualitätsstandards, die als Single Source of Truth dient.\n• Regulatory Data Lineage Framework: Implementierung eines umfassenden Frameworks zur durchgängigen Dokumentation des Datenflusses von der Quelle bis zum Report, das Transparenz schafft und Prüfanforderungen erfüllt.\n• Integrated Data Quality Management: Entwicklung eines proaktiven Datenqualitätsmanagements mit automatisierten Kontrollen, Anomalieerkennung und Root-Cause-Analyse, das Qualitätsprobleme frühzeitig identifiziert und behebt.\n• Data Governance Operating Model: Etablierung eines effektiven Governance-Modells mit klaren Rollen, Verantwortlichkeiten und Eskalationswegen für das regulatorische Datenmanagement.\n\n🚀 Transformative Datenmanagement-Ansätze für Basel III:\n• Regulatory Data Lake: Implementierung eines flexiblen Data Lake-Konzepts, das große Mengen strukturierter und unstrukturierter Daten effizient speichert und für verschiedene regulatorische Anforderungen nutzbar macht.\n• ML-gestützte Datenqualitätssicherung: Einsatz von Machine Learning-Algorithmen zur automatisierten Erkennung von Datenqualitätsproblemen, Mustererkennung und Validierung komplexer Datenbeziehungen.\n• Metadata-driven Automation: Nutzung von Metadaten zur automatisierten Steuerung von Datentransformationen, Validierungen und Reporting-Prozessen, was Flexibilität erhöht und manuelle Eingriffe reduziert.\n• API-basierte Datenintegration: Implementierung moderner API-Architekturen für die Echtzeit-Integration von Daten aus verschiedenen Quellsystemen, die Silos aufbrechen und Datenkonsistenz fördern."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new FAQs (German) to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ FAQs batch 3 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
