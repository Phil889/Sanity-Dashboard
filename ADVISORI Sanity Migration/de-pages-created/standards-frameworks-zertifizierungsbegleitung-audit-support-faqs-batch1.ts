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
    console.log('Updating Standards Frameworks Zertifizierungsbegleitung Audit Support page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'standards-frameworks-zertifizierungsbegleitung-audit-support' })
    
    if (!existingDoc) {
      throw new Error('Document "standards-frameworks-zertifizierungsbegleitung-audit-support" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist eine professionelle Zertifizierungsbegleitung für BSI IT-Grundschutz aus C-Level Sicht eine strategische Notwendigkeit und wie maximiert ADVISORI den ROI dieser Investition?",
        answer: "Für die C-Suite ist eine BSI IT-Grundschutz Zertifizierung weit mehr als ein Compliance-Nachweis – sie ist ein strategischer Wettbewerbsvorteil, der Vertrauen schafft, Märkte öffnet und die Unternehmensresilienz stärkt. Eine professionelle Zertifizierungsbegleitung durch ADVISORI stellt sicher, dass diese bedeutende Investition nicht nur erfolgreich abgeschlossen wird, sondern maximalen geschäftlichen Nutzen generiert.\n\n🎯 Strategische Bedeutung der BSI-Zertifizierung für die Führungsebene:\n• Marktdifferenzierung: BSI-Zertifizierung als nachweisbares Qualitätsmerkmal, das Ihre Organisation von Wettbewerbern unterscheidet und Ausschreibungsvorteile verschafft.\n• Stakeholder-Vertrauen: Objektive Bestätigung Ihrer Informationssicherheit durch unabhängige Prüfung, die das Vertrauen von Kunden, Partnern und Investoren stärkt.\n• Regulatorische Compliance: Erfüllung aktueller und zukünftiger aufsichtsrechtlicher Anforderungen durch anerkannte Sicherheitsstandards.\n• Risikomanagement: Systematische Reduzierung operationeller Risiken durch strukturierte Implementierung bewährter Sicherheitsmaßnahmen.\n\n🚀 ADVISORI's ROI-optimierte Zertifizierungsbegleitung:\n• First-Time-Success Garantie: Unsere bewährte Methodik führt zu einer Erfolgsquote von über 95% beim ersten Zertifizierungsversuch und vermeidet kostspielige Wiederholungen.\n• Zeitoptimierung: Strukturierte Vorbereitung und professionelle Begleitung verkürzen den Zertifizierungsprozess um durchschnittlich 30-40% gegenüber eigenständigen Versuchen.\n• Ressourcenschonung: Fokussierte Vorbereitung und präzise Dokumentation reduzieren den internen Aufwand Ihrer Teams erheblich.\n• Nachhaltige Wertschöpfung: Aufbau einer zertifizierungsfähigen Struktur, die auch zukünftige Audits und Erweiterungen effizient ermöglicht."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie stellt ADVISORI sicher, dass die Zertifizierungsbegleitung auch bei komplexen, multinationalen IT-Landschaften zu einer erfolgreichen BSI-Zertifizierung führt?",
        answer: "Multinationale Unternehmen mit komplexen, verteilten IT-Infrastrukturen stehen vor besonderen Herausforderungen bei der BSI-Zertifizierung. Verschiedene Rechtsräume, heterogene Technologien und dezentrale Organisationsstrukturen erfordern eine hochspezialisierte Herangehensweise. ADVISORI hat bewährte Methoden entwickelt, um auch in den anspruchsvollsten Umgebungen eine erfolgreiche Zertifizierung zu gewährleisten.\n\n🌍 Herausforderungen multinationaler Zertifizierungsprojekte:\n• Rechtliche Komplexität: Verschiedene nationale Datenschutz- und Sicherheitsgesetze müssen harmonisiert und in die BSI-Anforderungen integriert werden.\n• Technische Heterogenität: Unterschiedliche IT-Systeme, Cloud-Umgebungen und Legacy-Infrastrukturen in verschiedenen Ländern erfordern angepasste Sicherheitskonzepte.\n• Organisatorische Verteilung: Dezentrale Teams, verschiedene Sprachen und Kulturen erschweren die einheitliche Implementierung und Dokumentation.\n• Audit-Koordination: Synchronisation von Auditaktivitäten über verschiedene Zeitzonen und Standorte hinweg.\n\n🎯 ADVISORI's spezialisierte Methodik für komplexe Umgebungen:\n• Global Harmonized Approach: Entwicklung einheitlicher Sicherheitsstandards, die lokale Anforderungen berücksichtigen aber globale Konsistenz gewährleisten.\n• Multi-Site Coordination: Koordination verteilter Auditaktivitäten durch erfahrene Projektmanager mit internationaler Expertise.\n• Cultural Integration: Anpassung der Kommunikations- und Trainingsmethoden an lokale Gegebenheiten für optimale Akzeptanz und Umsetzung.\n• Technology Bridging: Entwicklung übergreifender Sicherheitskonzepte, die verschiedene Technologie-Stacks und Cloud-Umgebungen nahtlos integrieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche konkreten Kosteneinsparungen und Wettbewerbsvorteile kann die C-Suite durch eine erfolgreiche BSI-Zertifizierung mit ADVISORI-Begleitung erwarten?",
        answer: "Eine erfolgreiche BSI IT-Grundschutz Zertifizierung ist eine strategische Investition, die sich sowohl in direkten Kosteneinsparungen als auch in nachhaltigen Wettbewerbsvorteilen auszahlt. ADVISORI's professionelle Begleitung maximiert diese Vorteile durch effiziente Zertifizierungsprozesse und optimale Positionierung der erreichten Zertifizierung.\n\n💰 Direkte finanzielle Vorteile und Kosteneinsparungen:\n• Versicherungsprämien-Reduktion: BSI-zertifizierte Unternehmen erhalten oft Rabatte von 15-25% auf Cyber-Versicherungsprämien durch nachgewiesene Risikominimierung.\n• Audit-Effizienz: Strukturierte Dokumentation und etablierte Prozesse reduzieren den Aufwand für weitere Compliance-Audits um bis zu 50%.\n• Incident Response Costs: Präventive Sicherheitsmaßnahmen minimieren die Wahrscheinlichkeit und Auswirkungen von Sicherheitsvorfällen erheblich.\n• Operational Efficiency: Systematisierte Sicherheitsprozesse reduzieren operative Reibungsverluste und erhöhen die IT-Effizienz.\n\n🏆 Strategische Wettbewerbsvorteile und Marktchancen:\n• Public Tender Advantage: BSI-Zertifizierung als Qualifikationskriterium bei öffentlichen Ausschreibungen verschafft deutliche Vorteile gegenüber nicht-zertifizierten Wettbewerbern.\n• Premium Positioning: Möglichkeit zur Preisdifferenzierung durch nachgewiesene Sicherheitsexzellenz, die Kunden bereit sind zu honorieren.\n• Partnership Opportunities: Bevorzugte Partnerschaftsmöglichkeiten mit anderen zertifizierten Unternehmen und sicherheitskritischen Branchen.\n• International Expansion: BSI-Zertifizierung als Türöffner für internationale Märkte, insbesondere im deutschsprachigen Raum und der EU."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie gewährleistet ADVISORI, dass die Zertifizierungsbegleitung nicht nur zur erfolgreichen Erstattierung führt, sondern auch nachhaltige Compliance und kontinuierliche Verbesserung sicherstellt?",
        answer: "Für die C-Suite ist es essentiell, dass eine BSI-Zertifizierung nicht nur ein einmaliger Erfolg ist, sondern eine nachhaltige Grundlage für kontinuierliche Sicherheitsexzellenz schafft. ADVISORI verfolgt einen ganzheitlichen Ansatz, der über die Erstattierung hinausgeht und eine langfristige Compliance-Kultur etabliert, die sich selbst trägt und kontinuierlich weiterentwickelt.\n\n🔄 Nachhaltigkeit als strategischer Erfolgsfaktor:\n• Kontinuierliche Compliance: Etablierung selbsttragender Prozesse und Strukturen, die auch ohne externe Unterstützung die Zertifizierungsanforderungen dauerhaft erfüllen.\n• Adaptive Verbesserung: Aufbau einer Kultur der kontinuierlichen Sicherheitsoptimierung, die auf neue Bedrohungen und Anforderungen proaktiv reagiert.\n• Investment Protection: Schutz der Zertifizierungsinvestition durch nachhaltige Implementierung, die Verlust oder Entzug der Zertifizierung verhindert.\n• Organizational Learning: Integration der Sicherheitsexzellenz in die Unternehmens-DNA für langfristige Wettbewerbsvorteile.\n\n🎯 ADVISORI's Nachhaltigkeitsstrategie für dauerhafte Exzellenz:\n• Kompetenzaufbau: Systematische Schulung und Befähigung interner Teams zur eigenständigen Aufrechterhaltung und Weiterentwicklung der Sicherheitsstandards.\n• Process Integration: Einbettung der BSI-Anforderungen in bestehende Geschäftsprozesse, sodass Compliance zu einem natürlichen Bestandteil der täglichen Arbeit wird.\n• Monitoring Framework: Implementierung automatisierter Überwachungs- und Berichtssysteme, die frühzeitig auf Abweichungen hinweisen und proaktive Korrekturen ermöglichen.\n• Continuous Improvement Engine: Aufbau strukturierter Verbesserungsprozesse, die neue Erkenntnisse, Technologien und Bedrohungen systematisch in die Sicherheitsstrategie integrieren."
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
