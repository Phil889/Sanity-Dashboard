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
    console.log('Updating DIN ISO 27001 page with FAQ batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'din-iso-27001' })
    
    if (!existingDoc) {
      throw new Error('Document "din-iso-27001" not found')
    }
    
    // Create new FAQs for DIN ISO 27001
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Welche spezifischen Branchen in Deutschland profitieren am meisten von einer DIN ISO 27001 Zertifizierung?',
        answer: "Während eine DIN ISO 27001 Zertifizierung branchenübergreifend von Vorteil ist, gibt es Sektoren in Deutschland, für die sie von besonderer strategischer Bedeutung ist.\n\n🚗 Automobilindustrie:\n• Schutz von sensiblen Forschungs- und Entwicklungsdaten (Prototypen, Patente).\n• Absicherung der vernetzten Produktion (Industrie 4.0) und der Lieferketten (Supply Chain Security).\n• Erfüllung der Anforderungen von TISAX (Trusted Information Security Assessment Exchange), das stark an ISO 27001 angelehnt ist.\n\n🏥 Gesundheitswesen:\n• Schutz hochsensibler Patientendaten gemäß DSGVO und spezifischen Gesundheitsdatenschutzgesetzen.\n• Absicherung kritischer medizinischer IT-Systeme in Krankenhäusern und Praxen.\n• Vertrauensbildung bei Patienten, Krankenkassen und Partnern im Gesundheitsnetzwerk.\n\n🏦 Finanz- und Versicherungswirtschaft:\n• Erfüllung strenger regulatorischer Anforderungen wie MaRisk, BAIT, VAIT und DORA.\n• Schutz von Finanzdaten und Transaktionssystemen vor Cyberangriffen.\n• Stärkung des Kundenvertrauens in die Sicherheit von Online-Banking und digitalen Finanzdienstleistungen.\n\n🏭 Kritische Infrastrukturen (KRITIS):\n• Erfüllung der gesetzlichen Anforderungen des IT-Sicherheitsgesetzes und der BSI-KRITIS-Verordnung.\n• Nachweis eines angemessenen Schutzniveaus für essenzielle Dienstleistungen (Energie, Wasser, Telekommunikation etc.).\n• Verbesserung der Resilienz gegenüber Ausfällen und Angriffen auf die nationale Versorgungssicherheit."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Wie aufwändig ist die Aufrechterhaltung einer DIN ISO 27001 Zertifizierung?',
        answer: "Die Aufrechterhaltung der Zertifizierung ist ein kontinuierlicher Prozess, der über das initiale Audit hinausgeht. Der Aufwand hängt von der Größe und Komplexität des Unternehmens ab, lässt sich aber durch ein gut implementiertes ISMS effizient gestalten.\n\n🔄 Jährliche Überwachungsaudits:\n• In den beiden Jahren nach der Erstzertifizierung finden jährliche, weniger umfangreiche Überwachungsaudits statt.\n• Diese prüfen, ob das ISMS wirksam betrieben und kontinuierlich verbessert wird.\n• Schwerpunkte liegen oft auf der Behandlung von Abweichungen aus dem Vorjahr, internen Audits und der Managementbewertung.\n\n🔍 Interne Audits und Management-Review:\n• Das Unternehmen muss regelmäßig interne Audits durchführen, um die Konformität und Wirksamkeit des ISMS selbst zu überprüfen.\n• Die oberste Leitung muss das ISMS in geplanten Abständen bewerten (Management-Review), um dessen fortdauernde Eignung, Angemessenheit und Wirksamkeit sicherzustellen.\n• Diese internen Prozesse sind entscheidend für die kontinuierliche Verbesserung (PDCA-Zyklus: Plan-Do-Check-Act).\n\n📈 Kontinuierliche Verbesserung:\n• Das ISMS muss leben und sich an neue Bedrohungen, Technologien und Geschäftsziele anpassen.\n• Dies erfordert die regelmäßige Aktualisierung der Risikobewertung, die Anpassung von Kontrollen und die Schulung von Mitarbeitern.\n• Der Aufwand wird durch die Integration des ISMS in die täglichen Geschäftsprozesse und die Etablierung einer Sicherheitskultur minimiert."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Können Cloud-Dienste in einem DIN ISO 27001-zertifizierten Umfeld genutzt werden?',
        answer: "Ja, die Nutzung von Cloud-Diensten ist absolut vereinbar mit einer DIN ISO 27001 Zertifizierung. Es erfordert jedoch einen strukturierten Ansatz zur Steuerung der damit verbundenen Risiken.\n\n☁️ Geteilte Verantwortung (Shared Responsibility):\n• Es ist entscheidend, das Shared Responsibility Model des Cloud-Anbieters genau zu verstehen. Wer ist für welche Sicherheitsmaßnahmen verantwortlich – der Anbieter oder das Unternehmen?\n• Die Verantwortung für die Sicherheit der Daten und die korrekte Konfiguration der Dienste verbleibt immer beim Unternehmen.\n\n📝 Auswahl und Steuerung von Anbietern:\n• Die Norm fordert einen Prozess zur Steuerung externer Dienstleister. Cloud-Anbieter müssen sorgfältig ausgewählt und bewertet werden.\n• Wichtige Kriterien sind die eigenen Zertifizierungen des Anbieters (z.B. ISO 27001, C5 des BSI), Vertragsbedingungen (AVV/SCC), Transparenz und Audit-Möglichkeiten.\n• Die Anforderungen an den Cloud-Anbieter müssen in den Dienstleistungsvereinbarungen (SLAs) klar definiert werden.\n\n🔐 Datensicherheit in der Cloud:\n• Daten, die in der Cloud verarbeitet werden, müssen in die Risikoanalyse des ISMS einbezogen werden.\n• Es müssen angemessene Kontrollen implementiert werden, wie z.B. Verschlüsselung von Daten (im Ruhezustand und bei der Übertragung), starkes Identitäts- und Zugriffsmanagement (IAM) und kontinuierliches Monitoring der Cloud-Umgebung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Was sind die typischen ersten Schritte bei einem DIN ISO 27001 Implementierungsprojekt?',
        answer: "Ein erfolgreiches Implementierungsprojekt beginnt mit einer soliden Planungs- und Vorbereitungsphase.\n\n1️⃣ Management-Commitment sichern:\n• Der erste und wichtigste Schritt ist die volle Unterstützung der obersten Leitung. Ohne dieses Commitment ist das Projekt zum Scheitern verurteilt.\n• Die Leitung muss die strategische Bedeutung verstehen und die notwendigen Ressourcen (Personal, Budget, Zeit) bereitstellen.\n\n2️⃣ Projektrahmen festlegen:\n• Definition des Anwendungsbereichs (Scope) des ISMS: Welche Organisationsteile, Standorte, Prozesse und Technologien sollen abgedeckt werden?\n• Ernennung eines Projektteams und eines Informationssicherheitsbeauftragten (ISB) oder CISO.\n• Erstellung eines groben Projektplans mit Meilensteinen und Zielen.\n\n3️⃣ Gap-Analyse durchführen:\n• Durchführung einer detaillierten Analyse, um den aktuellen Stand der Informationssicherheit im Unternehmen mit den Anforderungen der DIN ISO 27001 zu vergleichen.\n• Dies schafft eine klare Grundlage für die weitere Planung und priorisiert die notwendigen Maßnahmen.\n\n4️⃣ ISMS-Leitlinie entwickeln:\n• Erstellung einer übergeordneten Informationssicherheitsleitlinie, die die Absichten und die Richtung der Organisation in Bezug auf Informationssicherheit formell festlegt.\n• Diese Leitlinie muss von der obersten Leitung genehmigt und kommuniziert werden."
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
    console.log('✅ FAQ batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
