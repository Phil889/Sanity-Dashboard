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
    console.log('Updating DSGVO Rollen & Verantwortlichkeiten DPO Koordinator page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dsgvo-rollen-verantwortlichkeiten-dpo-koordinator' })
    
    if (!existingDoc) {
      throw new Error('Document "dsgvo-rollen-verantwortlichkeiten-dpo-koordinator" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie entwickelt ADVISORI eine crisis-resiliente DSGVO-Organisation, die auch in Krisensituationen und disruptiven Ereignissen die C-Suite optimal unterstützt?",
        answer: "Krisenresilienz in der Datenschutzorganisation ist für die C-Suite von entscheidender Bedeutung, um auch in außergewöhnlichen Situationen handlungsfähig zu bleiben und regulatorische Compliance zu gewährleisten. ADVISORI entwickelt robuste DSGVO-Organisationsstrukturen, die sich flexibel an Krisensituationen anpassen und der Geschäftsleitung in turbulenten Zeiten Stabilität und Sicherheit bieten.\n\n🔥 Crisis-Management und Business Continuity:\n• Notfall-DPO-Koordination: Etablierung von Backup-Strukturen und Notfallprozessen für die kontinuierliche DPO-Funktionalität auch bei Personalausfällen oder Betriebsunterbrechungen.\n• Remote-Compliance-Fähigkeiten: Aufbau digitaler Infrastrukturen und Prozesse, die auch bei räumlicher Trennung oder Home-Office-Szenarien vollständige Datenschutz-Compliance gewährleisten.\n• Rapid-Response-Teams: Vorbereitete Krisenteams mit klaren Eskalationswegen und Entscheidungskompetenzen für schnelle Reaktionen auf Datenschutzvorfälle oder regulatorische Änderungen.\n• Stakeholder-Kommunikation: Vordefinierte Kommunikationsstrategien für verschiedene Krisenszenarien zur transparenten Information von Kunden, Behörden und Investoren.\n\n⚡ Agile Anpassungsfähigkeit und Zukunftssicherheit:\n• Scenario-basierte Planung: Entwicklung multipler Szenarien und entsprechender Handlungspläne für verschiedene Krisentypen (Pandemie, Cyberangriff, regulatorische Umbrüche, wirtschaftliche Disruption).\n• Flexible Organisationsstrukturen: Modulare DPO-Koordinationsmodelle, die sich schnell an veränderte Rahmenbedingungen anpassen und skalieren lassen.\n• Technology-Resilience: Redundante technische Systeme und Cloud-basierte Lösungen für kontinuierliche Verfügbarkeit kritischer Datenschutzfunktionen.\n• Continuous Learning: Integration von Learnings aus Krisensituationen in die Organisationsentwicklung für kontinuierliche Verbesserung der Resilienz."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Welche strategischen Partnerschaften und Ecosystem-Ansätze nutzt ADVISORI, um der C-Suite eine umfassende und zukunftssichere DSGVO-Organisationslösung zu bieten?",
        answer: "ADVISORI verfolgt einen integrierten Ecosystem-Ansatz, der strategische Partnerschaften und innovative Kollaborationsmodelle nutzt, um der C-Suite eine ganzheitliche und zukunftssichere DSGVO-Organisationslösung zu bieten. Durch die Orchestrierung spezialisierter Partner und Technologieanbieter schaffen wir Mehrwert, der über traditionelle Beratungsleistungen hinausgeht.\n\n🤝 Strategische Partner-Ecosystem-Integration:\n• Technology-Partnerships: Enge Zusammenarbeit mit führenden Privacy-Tech-Anbietern zur Integration modernster Compliance-Technologien in die DPO-Koordinationsstrukturen.\n• Legal-Expert-Networks: Kooperationen mit spezialisierten Datenschutz-Kanzleien und Regulierungsexperten für umfassende rechtliche Abdeckung komplexer Compliance-Fragestellungen.\n• Industry-Alliances: Mitgliedschaft in Branchenverbänden und Standards-Organisationen zur frühzeitigen Antizipation regulatorischer Entwicklungen und Best-Practice-Austausch.\n• Academic-Partnerships: Zusammenarbeit mit Forschungseinrichtungen und Universitäten für Zugang zu neuesten wissenschaftlichen Erkenntnissen und Nachwuchstalenten.\n\n🌐 Comprehensive Solution Architecture:\n• End-to-End-Integration: Nahtlose Integration verschiedener Speziallösungen (Privacy-Management-Plattformen, Schulungsanbieter, Audit-Services) in eine einheitliche DSGVO-Organisationsarchitektur.\n• Best-of-Breed-Ansatz: Auswahl und Integration der jeweils besten verfügbaren Lösungen für spezifische Anforderungen statt Lock-in in monolithische Systeme.\n• Innovation Labs: Gemeinsame Entwicklung zukunftsweisender Lösungen mit Partnern zur kontinuierlichen Evolution der Datenschutzorganisation.\n• Knowledge Sharing: Regelmäßiger Austausch von Expertise und Learnings zwischen Partnern zur kontinuierlichen Qualitätsverbesserung und Innovation."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie gewährleistet ADVISORI die kontinuierliche Weiterentwicklung und Professionalisierung der DPO-Teams für langfristige C-Level-Zufriedenheit?",
        answer: "Die kontinuierliche Entwicklung und Professionalisierung der DPO-Teams ist entscheidend für nachhaltigen Erfolg und C-Level-Zufriedenheit. ADVISORI implementiert umfassende Talent-Development-Programme und Exzellenz-Frameworks, die sicherstellen, dass DPO-Koordinatoren stets auf höchstem professionellem Niveau agieren und sich kontinuierlich weiterentwickeln.\n\n📚 Structured Learning und Professional Development:\n• Kontinuierliche Zertifizierung: Systematische Weiterbildung der DPO-Teams durch führende Zertifizierungsprogramme (CIPP/E, CIPM, FIP) und spezialisierte Trainings.\n• Cross-functional Skills: Entwicklung von Business-Kompetenzen, Technologie-Verständnis und Führungsqualitäten zur Transformation der DPO-Rolle von Compliance-Funktion zu strategischem Business Partner.\n• Mentoring-Programme: Strukturierte Mentoring-Beziehungen zwischen erfahrenen Seniors und Junior-DPOs für Wissenstransfer und Karriereentwicklung.\n• Industry Exposure: Regelmäßige Teilnahme an Fachkonferenzen, Roundtables und Branchenevents für kontinuierlichen Austausch und Netzwerkaufbau.\n\n🎯 Performance Excellence und Quality Assurance:\n• 360-Grad-Feedback: Regelmäßige Bewertung der DPO-Performance durch alle Stakeholder (C-Suite, Fachbereiche, externe Partner) für umfassende Entwicklungsinsights.\n• Best-Practice-Sharing: Systematischer Austausch von Erfolgsgeschichten und Learnings zwischen verschiedenen DPO-Teams und Mandaten.\n• Innovation Incentives: Anreizsysteme für die Entwicklung innovativer Lösungsansätze und kontinuierliche Prozessverbesserungen.\n• Client Success Metrics: KPI-basierte Messung der DPO-Performance anhand von Client-Zufriedenheit und geschäftlichen Erfolgsmetriken."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Welchen Beitrag leistet ADVISORI's DSGVO-Rollenorganisation zur ESG-Performance und Nachhaltigkeitsstrategie aus C-Level-Sicht?",
        answer: "Datenschutz und ESG-Performance sind zunehmend miteinander verknüpft, da Stakeholder höchste Standards in beiden Bereichen erwarten. ADVISORI entwickelt DSGVO-Organisationsstrukturen, die nicht nur Compliance sicherstellen, sondern auch aktiv zur ESG-Performance und Nachhaltigkeitsstrategie des Unternehmens beitragen und der C-Suite zusätzliche Wertschöpfungsmöglichkeiten eröffnen.\n\n🌱 ESG-Integration und Stakeholder Value Creation:\n• Governance Excellence: Professionelle DSGVO-Organisationsstrukturen demonstrieren beste Corporate Governance-Praktiken und stärken das 'G' in ESG durch nachweisbare Compliance-Exzellenz.\n• Transparenz und Accountability: Systematische Dokumentation und Reporting von Datenschutzaktivitäten trägt zur Transparenz gegenüber Investoren, Kunden und Regulierungsbehörden bei.\n• Stakeholder Trust: Vertrauensbildung durch nachweisbar verantwortungsvolles Datenmanagement und proaktive Kommunikation von Datenschutzmaßnahmen.\n• Social Impact: Schutz der Privatsphäre und Datenrechte von Kunden und Mitarbeitern als wichtiger Beitrag zu sozialer Verantwortung und dem 'S' in ESG.\n\n📊 Sustainable Business Practice und Long-term Value:\n• Digital Ethics: Integration ethischer Prinzipien in Datennutzung und KI-Anwendungen als Grundlage für nachhaltige digitale Geschäftsmodelle.\n• Green Compliance: Optimierung von Datenschutzprozessen für Ressourceneffizienz und Reduktion des ökologischen Fußabdrucks durch digitale Transformation.\n• Innovation for Good: Entwicklung datenbasierter Lösungen für gesellschaftliche Herausforderungen unter strikter Einhaltung von Datenschutzprinzipien.\n• Supplier Standards: Integration von Datenschutz- und ESG-Kriterien in Lieferantenbewertung und -management für ganzheitliche Nachhaltigkeitsperformance."
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
