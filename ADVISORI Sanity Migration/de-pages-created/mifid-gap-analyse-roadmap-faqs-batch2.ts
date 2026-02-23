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
    console.log('Updating MiFID Gap-Analyse & Roadmap page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'mifid-gap-analyse-roadmap' })
    
    if (!existingDoc) {
      throw new Error('Document "mifid-gap-analyse-roadmap" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Welche technologischen Anforderungen ergeben sich aus einer MiFID II Gap-Analyse und wie können Finanzinstitute ihre IT-Infrastruktur strategisch anpassen?",
        answer: "Die technologischen Implikationen einer MiFID II-Implementierung sind tiefgreifend und vielschichtig. Die regulatorischen Anforderungen fungieren als Katalysator für eine umfassende technologische Transformation, die weit über punktuelle Anpassungen hinausgeht. Eine strategisch ausgerichtete Gap-Analyse offenbart nicht nur Compliance-Lücken, sondern bietet die Chance, die IT-Landschaft zukunftsorientiert zu gestalten.\n\n💻 Zentrale technologische Anforderungsbereiche:\n• Datenintegrations- und Aggregationsfähigkeiten: Notwendigkeit zur Konsolidierung fragmentierter Datenquellen aus verschiedenen Systemen, um eine einheitliche Datenbasis für Anlegerschutz, Best Execution und Transaktionsreporting zu schaffen, mit besonderem Fokus auf Datenqualität, -konsistenz und -vollständigkeit.\n• Erweiterte Reporting-Kapazitäten: Erfordernis hochperformanter Reporting-Engines, die umfangreiche Transaktionsmeldungen mit zahlreichen Datenfeldern und strengen Validierungsregeln in Echtzeit oder nahezu Echtzeit verarbeiten können.\n• Transparenz- und Nachverfolgbarkeitsinfrastruktur: Implementierung von End-to-End-Tracking-Mechanismen, die den vollständigen Lebenszyklus von Kundenaufträgen, Ausführungsentscheidungen und Transaktionen transparent und nachvollziehbar dokumentieren.\n• Analytische Intelligence-Plattformen: Etablierung fortschrittlicher Analyse-Tools zur kontinuierlichen Überwachung der Best-Execution-Qualität, zur Erkennung potenzieller Interessenkonflikte und zur Validierung der Produkteignung für spezifische Kundensegmente.\n\n🔄 Strategische IT-Transformationsansätze:\n• Architektonische Neuausrichtung: Entwicklung einer zukunftsorientierten IT-Architektur, die regulatorische Anforderungen nicht als Zusatzlast, sondern als integralen Bestandteil des Systemdesigns betrachtet, mit Fokus auf Modularität, Skalierbarkeit und Anpassungsfähigkeit.\n• Data Governance Framework: Implementierung eines umfassenden Data Governance-Modells, das Datenqualität, -eigentümerschaft, -lebenszyklusmanagement und -sicherheit über alle relevanten Systeme hinweg orchestriert und konsistente Regelwerke etabliert.\n• Integrierte Compliance-by-Design: Verankerung regulatorischer Anforderungen als fundamentale Design-Prinzipien in der Systemarchitektur, um nachträgliche Anpassungen zu minimieren und eine intrinsische Compliance-Fähigkeit zu schaffen.\n• API-getriebene Integrationsstrategie: Nutzung moderner API-Technologien zur flexiblen Integration verschiedener Systeme und Datenquellen, wodurch monolithische Strukturen aufgebrochen und eine agilere Anpassungsfähigkeit an sich ändernde regulatorische Anforderungen ermöglicht wird."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie sollten Finanzinstitute die Governance-Strukturen und Verantwortlichkeiten für eine erfolgreiche MiFID II-Implementierung gestalten?",
        answer: "Eine effektive Governance-Architektur bildet das organisatorische Rückgrat einer erfolgreichen MiFID II-Implementierung. Die Komplexität und Reichweite der regulatorischen Anforderungen erfordert eine durchdachte Orchestrierung von Verantwortlichkeiten, Entscheidungsprozessen und Kontrollmechanismen, die weit über traditionelle Compliance-Strukturen hinausgeht.\n\n🏛️ Architektur einer MiFID II-Governance-Struktur:\n• Multi-Level-Steuerungsmodell: Etablierung eines mehrstufigen Governance-Frameworks mit klaren Verantwortlichkeiten auf strategischer (Board/Vorstand), taktischer (Lenkungsausschuss) und operativer Ebene (Implementierungsteams), das konsistente Entscheidungsfindung und effektive Eskalationspfade sicherstellt.\n• Cross-funktionale Ownership-Matrix: Entwicklung einer detaillierten Verantwortlichkeitsmatrix, die für jede MiFID II-Anforderung klare primäre und sekundäre Verantwortlichkeiten über verschiedene Geschäftsbereiche und Supportfunktionen hinweg definiert und Accountability sicherstellt.\n• Integrierte Kontrollsystematik: Implementation eines mehrstufigen Kontrollsystems mit klarer Unterscheidung zwischen erster Verteidigungslinie (operative Einheiten), zweiter Verteidigungslinie (Compliance, Risikomanagement) und dritter Verteidigungslinie (interne Revision) für MiFID II-relevante Prozesse.\n• Continuous Compliance Monitoring: Etablierung eines robusten Frameworks zur kontinuierlichen Überwachung der MiFID II-Compliance mit klaren KPIs, regelmäßigen Assessments und systematischer Berichterstattung an alle relevanten Governance-Ebenen.\n\n📋 Erfolgskritische Governance-Praktiken:\n• Aktive Executive Sponsorship: Sicherstellung eines aktiven Engagements der obersten Führungsebene, das über formale Genehmigungen hinausgeht und die strategische Bedeutung der MiFID II-Compliance für das gesamte Institut kommuniziert und verkörpert.\n• Integriertes Stakeholder Management: Systematische Identifikation und Einbindung aller relevanten internen und externen Stakeholder durch strukturierte Kommunikationsprozesse, Feedback-Schleifen und Entscheidungsbeteiligung.\n• Agiles Governance-Modell: Implementierung eines flexiblen Governance-Ansatzes, der schnelle Entscheidungsfindung ermöglicht und gleichzeitig robuste Kontrollen aufrechterhält, um auf sich ändernde regulatorische Interpretationen und Marktpraktiken reagieren zu können.\n• Kulturelle Transformation: Förderung einer organisationsweiten Compliance-Kultur, die regulatorische Anforderungen nicht als externe Vorgabe, sondern als integralen Bestandteil einer nachhaltigen Geschäftspraxis begreift und entsprechende Verhaltensänderungen auf allen Ebenen fördert."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche Herausforderungen und Best Practices gibt es bei der Integration von MiFID II-Anforderungen in bestehende Geschäftsprozesse?",
        answer: "Die Integration von MiFID II-Anforderungen in bestehende Geschäftsprozesse stellt Finanzinstitute vor vielschichtige Herausforderungen, die weit über technische Anpassungen hinausgehen. Eine erfolgreiche Integration erfordert einen ganzheitlichen Transformationsansatz, der regulatorische Compliance mit operativer Exzellenz und Kundenorientierung in Einklang bringt.\n\n🧩 Kernherausforderungen der Prozessintegration:\n• Prozessuale Komplexitätssteigerung: MiFID II-Anforderungen erhöhen die Komplexität bestehender Prozesse durch zusätzliche Dokumentations-, Validierungs- und Kontrollschritte, was ohne durchdachte Redesign-Maßnahmen zu Effizienzverlusten und erhöhten Durchlaufzeiten führen kann.\n• Kundeninteraktionsfriktionen: Erweiterte Informations-, Aufklärungs- und Dokumentationspflichten können den Kundenberatungsprozess erheblich verlängern und verkomplizieren, was ohne sorgfältige Gestaltung zu einer verschlechterten Customer Experience führen kann.\n• Front-to-Back-Integration: Die durchgängige Implementierung von MiFID II-Anforderungen erfordert eine nahtlose Integration von Front-, Middle- und Back-Office-Prozessen, was bei historisch gewachsenen, silohaften Organisationsstrukturen besondere Herausforderungen mit sich bringt.\n• Operative Kontrolldichte: Die Implementierung wirksamer Kontrollen zur Sicherstellung der MiFID II-Compliance ohne übermäßige Belastung des Tagesgeschäfts erfordert eine sorgfältige Balance zwischen Kontrollwirksamkeit und operativer Effizienz.\n\n🌟 Best Practices für eine erfolgreiche Prozessintegration:\n• End-to-End-Prozessredesign: Grundlegende Neugestaltung von Schlüsselprozessen mit MiFID II-Anforderungen als integralen Designparametern, anstatt regulatorische Elemente in bestehende Prozesse einzufügen, mit Fokus auf Effizienz, Kundenerlebnis und Compliance.\n• Digitale Prozessbeschleuniger: Strategischer Einsatz digitaler Technologien wie intelligente Formulare, automatisierte Validierungsregeln und Workflow-Management-Systeme, um regulatorische Compliance zu automatisieren und gleichzeitig Prozesseffizienz zu steigern.\n• Intelligente Kundenjourney-Gestaltung: Neukonzeption der Kundeninteraktionen mit nahtlos integrierten regulatorischen Elementen, die das Kundenerlebnis bereichern statt belasten, z.B. durch personalisierte Risikoaufklärung und interaktive Kostentransparenz.\n• Prozessuale Kontrollintegration: Entwicklung intelligenter, prozessimmanenter Kontrollen, die regulatorische Compliance sicherstellen, ohne den Prozessfluss zu unterbrechen, ergänzt durch datengetriebene Monitoring- und Analysemechanismen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie können Finanzinstitute das Change Management während einer MiFID II-Implementierung effektiv gestalten?",
        answer: "Die erfolgreiche Implementierung von MiFID II erfordert einen umfassenden Change-Management-Ansatz, der weit über technische und prozessuale Anpassungen hinausgeht. Die tiefgreifenden Veränderungen in Arbeitsweisen, Entscheidungsprozessen und Kundenkommunikation machen ein strategisches Change Management zu einem kritischen Erfolgsfaktor der regulatorischen Transformation.\n\n🔄 Dimensionen des MiFID II-Change-Managements:\n• Kulturelle Transformation: Förderung eines grundlegenden Mentalitätswandels von einer regelbasierten Compliance-Sichtweise hin zu einer werteorientierten Kundenverantwortung, die Anlegerschutz und Transparenz als fundamentale Geschäftsprinzipien verankert.\n• Kompetenzentwicklung und Skill-Transformation: Systematischer Aufbau neuer fachlicher und methodischer Kompetenzen auf allen Ebenen, von erweiterten regulatorischen Kenntnissen über neue Beratungsansätze bis hin zu datenanalytischen Fähigkeiten für komplexere Nachweispflichten.\n• Verhaltensänderungen im Kundenumgang: Unterstützung bei der Anpassung etablierter Beratungs- und Verkaufspraktiken an neue Transparenz- und Dokumentationsanforderungen, ohne die Kundenbeziehung zu belasten oder die Beratungseffizienz zu kompromittieren.\n• Organisatorische Anpassungsfähigkeit: Stärkung der organisatorischen Resilienz und Adaptionsfähigkeit angesichts fortlaufender regulatorischer Weiterentwicklungen und Marktveränderungen durch flexible Strukturen und agile Arbeitsweisen.\n\n🚀 Strategische Change-Management-Praktiken:\n• Integrative Stakeholder-Mobilisierung: Frühzeitige und kontinuierliche Einbindung aller betroffenen Stakeholder durch maßgeschneiderte Kommunikationsformate, kollaborative Workshops und partizipative Entscheidungsprozesse, um Ownership und Commitment auf allen Ebenen zu fördern.\n• Evidenzbasierte Narrativgestaltung: Entwicklung einer überzeugenden Change-Story, die nicht nur regulatorische Notwendigkeiten, sondern vor allem geschäftliche Vorteile und persönliche Entwicklungsperspektiven betont und so intrinsische Motivation für den Wandel schafft.\n• Mehrdimensionales Schulungs- und Enablement-Programm: Implementierung eines ganzheitlichen Lernansatzes, der verschiedene Lernformate (von traditionellen Schulungen über E-Learning bis hin zu On-the-Job-Coaching) kombiniert und auf spezifische Zielgruppen und deren Bedürfnisse zugeschnitten ist.\n• Systematisches Adoptionsmonitoring: Etablierung eines differenzierten Messsystems, das nicht nur formale Compliance-Kennzahlen, sondern auch Verhaltensänderungen, Kompetenzentwicklung und kulturelle Transformation erfasst und evidenzbasierte Anpassungen des Change-Ansatzes ermöglicht."
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
    console.log('✅ FAQs batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
