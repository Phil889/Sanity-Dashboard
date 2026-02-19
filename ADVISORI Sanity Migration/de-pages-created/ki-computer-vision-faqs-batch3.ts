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
    console.log('Updating KI Computer Vision page with Industry Applications FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'ki-computer-vision' })
    
    if (!existingDoc) {
      throw new Error('Document "ki-computer-vision" not found')
    }
    
    // Create new Industry Applications FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Welche branchenspezifischen Computer Vision Anwendungen bietet ADVISORI und wie werden diese an die einzigartigen Anforderungen verschiedener Industrien angepasst?",
        answer: "ADVISORI entwickelt maßgeschneiderte Computer Vision Lösungen für verschiedene Branchen, die jeweils spezifische Herausforderungen und regulatorische Anforderungen haben. Unser branchenspezifischer Ansatz kombiniert tiefgreifende Industrieexpertise mit fortschrittlicher Computer Vision Technologie, um optimale Ergebnisse für jeden Sektor zu erzielen.\n\n🏭 Manufacturing und Industrie:\n• Automatisierte Qualitätskontrolle: Echtzeit-Erkennung von Produktionsfehlern, Oberflächendefekten und Abweichungen von Qualitätsstandards mit höherer Präzision als menschliche Inspektion.\n• Predictive Maintenance: Visuelle Überwachung von Maschinen und Anlagen zur Früherkennung von Verschleiß und potenziellen Ausfällen.\n• Robotik-Integration: Computer Vision für intelligente Robotersysteme in der Montage, Verpackung und Materialhandhabung.\n• Sicherheitsüberwachung: Automatische Erkennung von Sicherheitsverstößen und gefährlichen Situationen in Produktionsumgebungen.\n\n🏥 Healthcare und Medizintechnik:\n• Medizinische Bildanalyse: DSGVO-konforme Analyse von Röntgenbildern, MRT-Scans und anderen medizinischen Bilddaten zur Unterstützung der Diagnose.\n• Pathologie-Unterstützung: Automatisierte Analyse von Gewebeproben und histopathologischen Bildern.\n• Patientenüberwachung: Kontaktlose Überwachung von Vitalparametern und Bewegungsmustern.\n• Medikamentenerkennung: Visuelle Identifikation und Verifizierung von Medikamenten zur Vermeidung von Verwechslungen.\n\n🛒 Retail und E-Commerce:\n• Inventory Management: Automatisierte Bestandserfassung und -überwachung durch visuelle Erkennung von Produkten.\n• Customer Analytics: DSGVO-konforme Analyse von Kundenverhalten und Bewegungsmustern im Geschäft.\n• Visual Search: Produktsuche basierend auf Bildern für verbesserte Kundenerfahrung.\n• Loss Prevention: Intelligente Überwachungssysteme zur Erkennung von Diebstahl und verdächtigen Aktivitäten.\n\n🚗 Automotive und Mobilität:\n• Autonomous Driving: Computer Vision für Fahrerassistenzsysteme und autonome Fahrzeuge.\n• Quality Assurance: Visuelle Inspektion von Fahrzeugkomponenten und Endmontage.\n• Traffic Management: Intelligente Verkehrsüberwachung und -steuerung.\n• Parking Solutions: Automatisierte Parkplatzüberwachung und -verwaltung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Wie implementiert ADVISORI Computer Vision Lösungen für die automatisierte Qualitätskontrolle in der Fertigung und welche messbaren Verbesserungen können Unternehmen erwarten?",
        answer: "Die automatisierte Qualitätskontrolle durch Computer Vision revolutioniert die Fertigungsindustrie, indem sie menschliche Inspektionsprozesse durch präzise, konsistente und skalierbare visuelle Analysesysteme ersetzt. ADVISORI hat spezialisierte Lösungen entwickelt, die nicht nur die Qualitätssicherung verbessern, sondern auch erhebliche operative Effizienzsteigerungen ermöglichen.\n\n🔍 Umfassende Qualitätskontroll-Systeme:\n• Oberflächendefekt-Erkennung: Hochpräzise Identifikation von Kratzern, Dellen, Verfärbungen und anderen Oberflächenfehlern, die für das menschliche Auge schwer erkennbar sind.\n• Dimensionale Messungen: Automatisierte Vermessung von Produktabmessungen mit Mikrometer-Genauigkeit zur Sicherstellung der Maßhaltigkeit.\n• Montage-Verifikation: Überprüfung der korrekten Montage und Positionierung von Komponenten in komplexen Baugruppen.\n• Vollständigkeitsprüfung: Automatische Erkennung fehlender Teile oder Komponenten in Produkten oder Verpackungen.\n\n📊 Messbare Geschäftsverbesserungen:\n• Fehlererkennungsrate: Steigerung der Defekterkennung um bis zu 95% gegenüber manueller Inspektion durch konsistente und ermüdungsfreie Überwachung.\n• Durchsatzsteigerung: Erhöhung der Inspektionsgeschwindigkeit um das Zehnfache oder mehr, was zu höheren Produktionskapazitäten führt.\n• Kostenreduzierung: Reduzierung der Qualitätskontrollkosten durch Automatisierung und Verringerung von Nacharbeit und Reklamationen.\n• Konsistenz: Eliminierung menschlicher Variabilität in der Qualitätsbewertung für gleichbleibend hohe Standards.\n\n⚙️ Technische Implementierungsexzellenz:\n• Multi-Spektral-Bildgebung: Nutzung verschiedener Lichtspektren und Bildgebungstechniken für umfassende Materialanalyse.\n• 3D-Vision-Systeme: Dreidimensionale Erfassung und Analyse für komplexe geometrische Qualitätsprüfungen.\n• Echtzeit-Verarbeitung: Inline-Qualitätskontrolle ohne Verlangsamung der Produktionslinie.\n• Adaptive Algorithmen: Selbstlernende Systeme, die sich an neue Produktvarianten und veränderte Qualitätsanforderungen anpassen.\n\n🔧 Integration in bestehende Fertigungsprozesse:\n• Nahtlose ERP-Integration: Verbindung mit bestehenden Enterprise Resource Planning Systemen für vollständige Rückverfolgbarkeit.\n• Flexible Deployment-Optionen: Anpassung an verschiedene Produktionslinien und Fertigungsumgebungen.\n• Skalierbare Architektur: Erweiterung von einzelnen Prüfstationen auf vollständige Produktionslinien.\n• Benutzerfreundliche Interfaces: Intuitive Bedienoberflächen für Produktionsmitarbeiter und Qualitätsmanager."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Welche Rolle spielt Computer Vision im Einzelhandel und wie nutzt ADVISORI visuelle KI für verbesserte Kundenerfahrungen und operative Effizienz?",
        answer: "Computer Vision transformiert den Einzelhandel fundamental, indem es neue Dimensionen der Kundeninteraktion, Bestandsverwaltung und operativen Optimierung eröffnet. ADVISORI entwickelt DSGVO-konforme Retail-Computer-Vision-Lösungen, die sowohl die Kundenerfahrung verbessern als auch operative Effizienz steigern, während Datenschutz und Privatsphäre vollständig respektiert werden.\n\n🛍️ Kundenerfahrungs-Optimierung:\n• Visual Product Search: Kunden können Produkte durch Fotografieren ähnlicher Artikel finden, was die Produktentdeckung revolutioniert und Conversion-Raten erhöht.\n• Personalisierte Empfehlungen: Analyse von Kundenpräferenzen basierend auf visuellen Interaktionen für maßgeschneiderte Produktvorschläge.\n• Virtual Try-On: Augmented Reality Lösungen, die es Kunden ermöglichen, Produkte virtuell anzuprobieren.\n• Smart Checkout: Automatisierte Kassensysteme, die Produkte visuell erkennen und den Checkout-Prozess beschleunigen.\n\n📦 Intelligente Bestandsverwaltung:\n• Automated Inventory Tracking: Kontinuierliche visuelle Überwachung von Regalen und Lagerbeständen für Echtzeit-Bestandsmanagement.\n• Planogram Compliance: Automatische Überprüfung der korrekten Produktplatzierung und Regalpräsentation.\n• Expiry Date Monitoring: Visuelle Erkennung von Verfallsdaten zur Minimierung von Produktverlusten.\n• Supply Chain Optimization: Vorhersage von Nachfrage basierend auf visueller Analyse von Kundenverhalten und Produktinteraktionen.\n\n🔒 DSGVO-konforme Kundenanalyse:\n• Anonymisierte Bewegungsanalyse: Erfassung von Kundenbewegungsmustern ohne Identifikation einzelner Personen.\n• Heat Map Generation: Visualisierung von Kundenfrequenz und Verweildauer in verschiedenen Geschäftsbereichen.\n• Queue Management: Automatische Erkennung von Warteschlangen und Optimierung der Personalzuteilung.\n• Demographic Insights: Anonymisierte Analyse von Kundendemografie für bessere Sortimentsplanung.\n\n💡 Operative Effizienzsteigerung:\n• Loss Prevention: Intelligente Überwachungssysteme zur Erkennung verdächtiger Aktivitäten und Diebstahlprävention.\n• Staff Optimization: Analyse von Kundenfrequenz zur optimalen Personalplanung und -verteilung.\n• Store Layout Optimization: Datengetriebene Erkenntnisse für optimale Geschäftslayout-Gestaltung.\n• Maintenance Monitoring: Visuelle Überwachung der Geschäftsausstattung und rechtzeitige Wartungsplanung.\n\n🎯 Branchenspezifische Anwendungen:\n• Fashion Retail: Stil- und Trendsanalyse basierend auf visuellen Daten.\n• Grocery Retail: Frische-Monitoring und automatisierte Qualitätskontrolle von Lebensmitteln.\n• Electronics Retail: Produktdemonstration und technische Spezifikationserkennung.\n• Luxury Retail: Hochwertige Kundenerfahrungen durch personalisierte visuelle Services."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Wie revolutioniert ADVISORI's Computer Vision das Gesundheitswesen und welche spezifischen medizinischen Anwendungen werden unter strikter Einhaltung von Datenschutz und medizinischen Standards implementiert?",
        answer: "Computer Vision im Gesundheitswesen repräsentiert eine der vielversprechendsten Anwendungen visueller KI, birgt jedoch auch die höchsten Anforderungen an Datenschutz, Sicherheit und regulatorische Compliance. ADVISORI hat spezialisierte Healthcare-Computer-Vision-Lösungen entwickelt, die medizinische Fachkräfte unterstützen, während sie höchste Standards für Patientendatenschutz und medizinische Genauigkeit erfüllen.\n\n🏥 Medizinische Bildanalyse und Diagnostik-Unterstützung:\n• Radiologie-Assistenz: KI-gestützte Analyse von Röntgenbildern, CT-Scans und MRT-Aufnahmen zur Früherkennung von Anomalien und Unterstützung der radiologischen Diagnose.\n• Pathologie-Automation: Automatisierte Analyse von Gewebeproben und histopathologischen Bildern für präzisere und schnellere Diagnosen.\n• Ophthalmologie-Support: Erkennung von Netzhauterkrankungen und anderen Augenleiden durch Analyse von Fundusbildern.\n• Dermatologie-Screening: Automatisierte Hautläsionsanalyse zur Früherkennung von Hautkrebs und anderen dermatologischen Erkrankungen.\n\n🔒 Höchste Datenschutz- und Compliance-Standards:\n• DSGVO und HIPAA Compliance: Vollständige Einhaltung europäischer und internationaler Datenschutzbestimmungen für Gesundheitsdaten.\n• On-Premise-Verarbeitung: Lokale Bildverarbeitung ohne Verlassen der Klinikumgebung für maximalen Datenschutz.\n• Anonymisierung und Pseudonymisierung: Fortschrittliche Techniken zur Entfernung identifizierender Informationen aus medizinischen Bildern.\n• Audit-Trail-Systeme: Lückenlose Dokumentation aller Zugriffe und Verarbeitungsschritte für regulatorische Compliance.\n\n⚕️ Patientenüberwachung und -sicherheit:\n• Kontaktlose Vitalparameter-Überwachung: Visuelle Erfassung von Herzfrequenz, Atemfrequenz und anderen Vitalzeichen ohne direkten Patientenkontakt.\n• Sturzerkennung: Automatische Erkennung von Patientenstürzen in Krankenhäusern und Pflegeeinrichtungen.\n• Medikamentensicherheit: Visuelle Verifikation von Medikamenten zur Vermeidung von Verwechslungen und Dosierungsfehlern.\n• Hygiene-Monitoring: Überwachung der Einhaltung von Hygienemaßnahmen und Infektionsschutzprotokollen.\n\n🔬 Forschung und Entwicklung:\n• Clinical Trial Support: Automatisierte Datenerfassung und -analyse für klinische Studien.\n• Drug Discovery: Computer Vision Unterstützung bei der Medikamentenentwicklung und -forschung.\n• Biomarker-Identifikation: Visuelle Analyse zur Identifikation neuer diagnostischer Biomarker.\n• Treatment Response Monitoring: Objektive Bewertung von Behandlungsverläufen durch visuelle Analyse.\n\n🎯 Spezialisierte Healthcare-Anwendungen:\n• Chirurgie-Assistenz: Echtzeit-Bildanalyse zur Unterstützung chirurgischer Eingriffe.\n• Rehabilitation: Bewegungsanalyse und Fortschrittsverfolgung in der Physiotherapie.\n• Mental Health: Visuelle Analyse von Verhaltensmustern zur Unterstützung der psychiatrischen Diagnose.\n• Telemedicine: Computer Vision Unterstützung für Ferndiagnose und -überwachung."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new Industry Applications FAQs (German) to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ Industry Applications FAQs batch 3 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
