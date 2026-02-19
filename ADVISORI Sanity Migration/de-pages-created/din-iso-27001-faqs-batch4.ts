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
    console.log('Updating DIN ISO 27001 page with FAQ batch 4...')
    
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
        _key: generateKey('faq', 13),
        question: 'Wie lange dauert ein typisches DIN ISO 27001 Zertifizierungsprojekt?',
        answer: "Die Dauer eines Zertifizierungsprojekts hängt stark von der Größe, Komplexität und dem anfänglichen Reifegrad des Unternehmens ab. Es gibt jedoch typische Zeitrahmen, an denen man sich orientieren kann.\n\n⏱️ Kleine und mittlere Unternehmen (KMU):\n• Für KMU mit relativ klaren Strukturen und einer begrenzten Anzahl an Prozessen und Systemen kann eine Implementierung oft innerhalb von 6 bis 12 Monaten erreicht werden.\n• Voraussetzung ist hierbei eine starke Unterstützung durch das Management und die Verfügbarkeit der notwendigen Ressourcen.\n\n🏢 Große Unternehmen und Konzerne:\n• In größeren Organisationen mit komplexen Strukturen, mehreren Standorten und einer Vielzahl von Stakeholdern kann ein Projekt 12 bis 24 Monate oder länger dauern.\n• Hier spielen Faktoren wie internationale Abstimmung, komplexe IT-Landschaften und die Notwendigkeit umfangreicher Change-Management-Prozesse eine große Rolle.\n\n🚀 Beschleunigende Faktoren:\n• Ein bereits vorhandenes, funktionierendes Qualitätsmanagement-System (z.B. nach ISO 9001) kann die Einführung erheblich beschleunigen.\n• Klare und engagierte Unterstützung durch die Geschäftsführung ist der wichtigste Erfolgsfaktor.\n• Externe Beratung kann durch bewährte Methoden und zusätzliche Ressourcen die Projektdauer signifikant verkürzen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Welche personellen Ressourcen werden für den Betrieb eines ISMS nach DIN ISO 27001 benötigt?',
        answer: "Der personelle Bedarf für ein ISMS ist skalierbar und hängt von der Unternehmensgröße und dem definierten Anwendungsbereich ab. Es gibt jedoch einige Schlüsselrollen.\n\n👤 Informationssicherheitsbeauftragter (ISB) / CISO:\n• Dies ist die zentrale Rolle, die für die Koordination, Steuerung und Überwachung des ISMS verantwortlich ist. In kleineren Unternehmen kann dies eine Teilzeitrolle sein, in größeren ist es eine Vollzeitposition.\n• Der ISB ist der primäre Ansprechpartner für alle sicherheitsrelevanten Themen und berichtet idealerweise direkt an die Geschäftsführung.\n\n👥 ISMS-Team / Sicherheits-Komitee:\n• Oft wird ein interdisziplinäres Team gebildet, das den ISB unterstützt. Dieses Team sollte Vertreter aus der IT, dem Personalwesen, der Rechtsabteilung und den Kern-Geschäftsbereichen umfassen.\n• Dieses Gremium hilft, Sicherheitsanforderungen im gesamten Unternehmen zu verankern und die praktische Umsetzung zu fördern.\n\n👨‍💼 Prozess- und Asset-Eigentümer:\n• Die Verantwortung für die Sicherheit liegt nicht allein beim ISB. Die Norm fordert, dass für wichtige Informationswerte (Assets) und Prozesse Eigentümer benannt werden.\n• Diese 'Owner' sind für die Umsetzung der Sicherheitsmaßnahmen in ihrem jeweiligen Verantwortungsbereich zuständig.\n\n🏢 Alle Mitarbeiter:\n• Letztendlich ist jeder Mitarbeiter Teil des ISMS. Die Einhaltung von Sicherheitsrichtlinien und die Teilnahme an Awareness-Schulungen sind für alle verpflichtend. Eine starke Sicherheitskultur ist die Basis für ein wirksames ISMS."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Was sind die häufigsten Stolpersteine bei der Implementierung von DIN ISO 27001?',
        answer: "Die Implementierung eines ISMS ist ein komplexes Projekt. Kennt man die häufigsten Fehler, kann man sie proaktiv vermeiden.\n\n🧗 Mangelndes Management-Commitment:\n• Wenn die Geschäftsführung das Projekt nicht vollumfänglich unterstützt (finanziell, personell, ideell), fehlt dem ISMS die notwendige Durchsetzungskraft und es wird als reines IT-Thema missverstanden.\n\nscope-creep Scope-Definition:\n• Ein unklar oder zu weit gefasster Anwendungsbereich (Scope) kann das Projekt von Anfang an überladen und zum Scheitern bringen. Es ist oft besser, mit einem klar definierten, kritischen Bereich zu beginnen und das ISMS später zu erweitern.\n\n📄 Überdokumentation:\n• Der Versuch, alles bis ins kleinste Detail zu dokumentieren, führt zu einem bürokratischen Monster, das niemand pflegen kann oder will. Das ISMS sollte so schlank wie möglich und so umfassend wie nötig sein.\n\n🗣️ Fehlende Kommunikation und Awareness:\n• Wenn die Mitarbeiter nicht verstehen, warum die neuen Prozesse und Regeln notwendig sind, werden sie diese nicht akzeptieren oder aktiv umgehen. Kontinuierliche Schulung und Kommunikation sind entscheidend.\n\n⚖️ Risikomanagement als Alibi-Übung:\n• Ein nur oberflächlich oder einmalig durchgeführtes Risikomanagement ohne echte Anbindung an die Geschäftsrisiken ist wertlos. Der Risikomanagementprozess muss ein lebendiger, kontinuierlicher Kern des ISMS sein."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Kann ich für mein ISMS nach DIN ISO 27001 eine Software nutzen?',
        answer: "Ja, der Einsatz von spezialisierter Software, oft als GRC-Tool (Governance, Risk & Compliance) bezeichnet, kann die Verwaltung eines ISMS erheblich erleichtern, ist aber keine zwingende Voraussetzung.\n\n✅ Vorteile von ISMS-Software:\n• **Zentralisierung:** Alle Informationen, Dokumente, Risiken und Maßnahmen sind an einem zentralen Ort gespeichert und miteinander verknüpft.\n• **Automatisierung:** Viele wiederkehrende Aufgaben wie die Zuweisung von Maßnahmen, Erinnerungen, Berichterstattung und KPI-Tracking können automatisiert werden.\n• **Workflow-Unterstützung:** Die Software führt die Benutzer durch die Prozesse der Norm, z.B. bei der Durchführung von Risikoanalysen oder internen Audits.\n• **Nachvollziehbarkeit:** Änderungen und Entscheidungen werden versioniert und dokumentiert, was die Nachvollziehbarkeit für Audits enorm verbessert.\n\n❌ Mögliche Nachteile:\n• **Kosten:** Die Anschaffung und der Betrieb von GRC-Tools können mit erheblichen Lizenz- und Wartungskosten verbunden sein.\n• **Komplexität:** Die Einführung einer neuen Software ist selbst ein Projekt und erfordert Schulung und Anpassung.\n• **Flexibilitätsverlust:** Manchmal zwingt die Software dem Unternehmen Prozesse auf, die nicht optimal zur eigenen Struktur passen.\n\n🤔 Entscheidungsgrundlage:\n• Für kleinere Unternehmen mit einem überschaubaren Scope können oft Standard-Office-Anwendungen (wie Confluence, Jira, SharePoint in Kombination mit Excel) ausreichend sein.\n• Je größer und komplexer das Unternehmen und das ISMS, desto mehr Vorteile bietet eine spezialisierte Softwarelösung. Eine sorgfältige Kosten-Nutzen-Analyse ist vor der Anschaffung entscheidend."
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
    console.log('✅ FAQ batch 4 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
