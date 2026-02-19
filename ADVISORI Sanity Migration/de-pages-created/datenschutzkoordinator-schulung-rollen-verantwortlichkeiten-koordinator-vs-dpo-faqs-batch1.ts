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
    console.log('Updating Datenschutzkoordinator Schulung Rollen & Verantwortlichkeiten - Koordinator vs DPO page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'datenschutzkoordinator-schulung-rollen-verantwortlichkeiten-koordinator-vs-dpo' })
    
    if (!existingDoc) {
      throw new Error('Document "datenschutzkoordinator-schulung-rollen-verantwortlichkeiten-koordinator-vs-dpo" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist die klare Abgrenzung zwischen Datenschutzkoordinator und DPO für moderne Unternehmen strategisch kritisch und wie positioniert ADVISORI diese Rollenaufteilung?",
        answer: "Die strategische Relevanz einer klaren Rollenabgrenzung zwischen Datenschutzkoordinator und Datenschutzbeauftragtem (DPO) geht weit über die reine Compliance-Erfüllung hinaus. In der heutigen datengetriebenen Geschäftswelt sind beide Rollen entscheidend für den nachhaltigen Unternehmenserfolg, erfordern jedoch unterschiedliche Kompetenzen und Verantwortlichkeiten.\n\n🎯 Strategische Dimensionen der Rollenabgrenzung:\n• Operative Effizienz vs. strategische Überwachung: Der Datenschutzkoordinator fokussiert auf die tägliche Umsetzung und operative Abläufe, während der DPO die strategische Überwachung und Beratung der Geschäftsleitung übernimmt.\n• Unabhängigkeit und Objektivität: Die klare Trennung gewährleistet die vom Gesetzgeber geforderte Unabhängigkeit des DPO bei gleichzeitiger Integration des Koordinators in operative Geschäftsprozesse.\n• Skalierbare Datenschutzorganisation: Durch definierte Rollen können Unternehmen ihre Datenschutzkapazitäten bedarfsgerecht ausbauen ohne Kompetenzüberschneidungen.\n• Risikominimierung: Klare Verantwortlichkeiten reduzieren das Risiko von Compliance-Lücken und Haftungsunklarheiten.\n\n🛡️ ADVISORIs strategischer Organisationsansatz:\n• Maßgeschneiderte Rollenmodelle: Entwicklung spezifischer Organisationsstrukturen, die sowohl rechtliche Anforderungen als auch operative Bedürfnisse optimal erfüllen.\n• Kompetenz-Mapping: Systematische Zuordnung von Aufgaben basierend auf den jeweiligen Stärken und rechtlichen Vorgaben beider Rollen.\n• Synergie-Optimierung: Gestaltung von Kooperationsmodellen, die die Komplementarität beider Funktionen maximal ausschöpfen.\n• Governance-Integration: Einbettung der Rollenaufteilung in bestehende Unternehmensstrukturen und Führungsprozesse für nachhaltige Effektivität."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche rechtlichen Unterschiede und Haftungsaspekte bestehen zwischen Datenschutzkoordinator und DPO und wie können Unternehmen diese optimal strukturieren?",
        answer: "Die rechtlichen Unterschiede zwischen Datenschutzkoordinator und DPO sind fundamental für die Gestaltung einer compliance-konformen und haftungsrechtlich sicheren Datenschutzorganisation. Während der DPO spezifische gesetzliche Anforderungen erfüllen muss, ist die Rolle des Datenschutzkoordinators flexibler gestaltbar, aber nicht weniger wichtig.\n\n⚖️ Rechtliche Grundlagen und Unterschiede:\n• DPO-Anforderungen nach DSGVO Art. 37-39: Benennungspflicht bei bestimmten Datenverarbeitungen, spezifische Qualifikationsanforderungen, Unabhängigkeitsgebot und direkte Berichtslinie zur Geschäftsleitung.\n• Koordinator-Flexibilität: Keine spezifischen gesetzlichen Vorgaben, aber faktische Notwendigkeit für operative Datenschutzumsetzung in größeren Organisationen.\n• Haftungsverteilung: DPO haftet für ordnungsgemäße Beratung und Überwachung, Koordinator für operative Umsetzung in seinem Verantwortungsbereich.\n• Weisungsfreiheit vs. Integration: DPO muss weisungsfrei agieren können, Koordinator ist in normale Hierarchiestrukturen eingebunden.\n\n🔧 Strukturelle Optimierungsansätze für Unternehmen:\n• Klare Kompetenzabgrenzung: Definition präziser Aufgabenkataloge und Entscheidungsbefugnisse zur Vermeidung von Verantwortungslücken oder -überschneidungen.\n• Eskalationsmechanismen: Entwicklung strukturierter Kommunikations- und Eskalationswege zwischen beiden Rollen und zur Geschäftsleitung.\n• Dokumentationspflichten: Festlegung spezifischer Dokumentationsanforderungen für beide Rollen zur Nachweisführung und Haftungsabgrenzung.\n• Ressourcenallokation: Angemessene Ausstattung beider Funktionen mit notwendigen Ressourcen, Tools und Befugnissen für effektive Aufgabenerfüllung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können Datenschutzkoordinatoren und DPOs in der Praxis effektiv zusammenarbeiten ohne Kompetenzstreitigkeiten und welche Erfolgsmodelle existieren?",
        answer: "Die erfolgreiche Zusammenarbeit zwischen Datenschutzkoordinator und DPO erfordert durchdachte Kooperationsstrukturen, die sowohl die rechtlichen Anforderungen als auch die praktischen Bedürfnisse des Unternehmens berücksichtigen. Erfolgreiche Modelle basieren auf klarer Kommunikation, definierten Schnittstellen und gegenseitigem Verständnis der jeweiligen Rollen.\n\n🤝 Erfolgsprinzipien für effektive Zusammenarbeit:\n• Komplementäre Spezialisierung: Nutzen der unterschiedlichen Stärken - DPO für strategische Beratung und Aufsicht, Koordinator für operative Umsetzung und Prozessmanagement.\n• Regelmäßige Abstimmung: Etablierung strukturierter Kommunikationsroutinen mit definierten Agenda-Punkten und Entscheidungsverantwortlichkeiten.\n• Geteilte Zielsetzungen: Entwicklung gemeinsamer KPIs und Erfolgsmessungen, die beide Rollen auf übergeordnete Datenschutzziele ausrichten.\n• Konfliktpräventive Prozesse: Proaktive Klärung von Grenzfällen und Entwicklung von Entscheidungsmatrix für typische Situationen.\n\n💡 Bewährte Erfolgsmodelle in der Praxis:\n• Matrix-Organisation: DPO als strategischer Berater mit fachlicher Weisungsbefugnis, Koordinator als operativer Umsetzer mit disziplinarischer Einbindung in Linienorganisation.\n• Teambasierter Ansatz: Bildung eines Datenschutz-Teams mit klar definierten, sich ergänzenden Rollen und gemeinsamer Verantwortung für Datenschutzergebnisse.\n• Projekt-Kooperation: Strukturierte Zusammenarbeit in spezifischen Datenschutzprojekten mit rollenbezogener Aufgabenverteilung und gemeinsamer Erfolgsmessung.\n• Eskalations-Partnership: Entwicklung vertrauensvoller Arbeitsbeziehung mit klaren Eskalationswegen für komplexe oder grenzüberschreitende Datenschutzfragen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche organisatorischen Strukturen und Tools unterstützen die optimale Aufgabenverteilung zwischen Datenschutzkoordinator und DPO am effektivsten?",
        answer: "Die optimale Aufgabenverteilung zwischen Datenschutzkoordinator und DPO erfordert durchdachte organisatorische Strukturen und spezialisierte Tools, die beide Rollen in ihrer spezifischen Funktion unterstützen und gleichzeitig eine nahtlose Zusammenarbeit ermöglichen. Moderne Datenschutzorganisationen setzen auf integrierte Lösungsansätze.\n\n🏗️ Organisatorische Strukturelemente für optimale Aufgabenverteilung:\n• RACI-Matrix für Datenschutzprozesse: Systematische Zuordnung von Verantwortlichkeiten (Responsible, Accountable, Consulted, Informed) für alle datenschutzrelevanten Aktivitäten.\n• Governance-Struktur: Etablierung von Datenschutz-Committees mit definierten Rollen beider Funktionen und klaren Entscheidungskompetenzen.\n• Berichtswesen und Monitoring: Entwicklung spezifischer Reporting-Linien und KPI-Dashboards, die beiden Rollen relevante Informationen für ihre Aufgabenerfüllung liefern.\n• Eskalations- und Kommunikationsmatrix: Strukturierte Prozesse für Informationsaustausch, Konfliktlösung und strategische Entscheidungsfindung.\n\n🛠️ Technologische Tools und Plattformen:\n• Integrierte GRC-Plattformen: Umfassende Governance, Risk & Compliance-Systeme mit rollenspezifischen Dashboards und Workflow-Funktionen für beide Positionen.\n• Datenschutz-Management-Software: Spezialisierte Tools für Verarbeitungsverzeichnisse, DSFA-Management und Betroffenenrechte mit differenzierten Zugriffsrechten.\n• Collaboration-Plattformen: Moderne Kommunikations- und Projektmanagement-Tools, die strukturierte Zusammenarbeit und Dokumentation ermöglichen.\n• Monitoring und Analytics: Automatisierte Überwachungssysteme für Datenschutz-Compliance mit individualisierten Berichten für strategische und operative Ebenen."
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
