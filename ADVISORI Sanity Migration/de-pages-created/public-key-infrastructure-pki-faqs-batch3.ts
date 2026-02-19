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
    console.log('Updating Public Key Infrastructure (PKI) page with FAQ batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'public-key-infrastructure-pki' })
    
    if (!existingDoc) {
      throw new Error('Document "public-key-infrastructure-pki" not found')
    }
    
    // Create new FAQs for security and compliance aspects
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Welche Compliance-Anforderungen und regulatorischen Standards müssen bei PKI-Implementierungen berücksichtigt werden?',
        answer: "PKI-Implementierungen unterliegen einer Vielzahl regulatorischer Anforderungen und Compliance-Standards, die je nach Branche, geografischer Lage und Anwendungsbereich variieren. Die Einhaltung dieser Vorschriften ist nicht nur rechtlich erforderlich, sondern auch entscheidend für das Vertrauen von Kunden, Partnern und Aufsichtsbehörden in die digitale Infrastruktur einer Organisation.\n\n🏛️ Europäische Datenschutz- und Sicherheitsregulierungen:\n• DSGVO (Datenschutz-Grundverordnung) erfordert angemessene technische und organisatorische Maßnahmen zum Schutz personenbezogener Daten durch PKI-Verschlüsselung\n• NIS2-Richtlinie definiert Cybersicherheitsanforderungen für kritische Infrastrukturen mit spezifischen PKI-Sicherheitsmaßnahmen\n• eIDAS-Verordnung reguliert elektronische Identifizierung und Vertrauensdienste mit strengen Anforderungen an qualifizierte Zertifikate\n• DORA (Digital Operational Resilience Act) für Finanzdienstleister erfordert robuste PKI-Systeme für operative Resilienz\n• Cyber Resilience Act (CRA) wird zukünftig Cybersicherheitsanforderungen für Produkte mit digitalen Elementen definieren\n\n🏦 Finanzdienstleistungs-Regulierungen:\n• PCI DSS (Payment Card Industry Data Security Standard) erfordert starke Kryptographie und PKI für Zahlungskartenverarbeitung\n• SOX (Sarbanes-Oxley Act) verlangt interne Kontrollen und Audit-Trails für PKI-Systeme in börsennotierten Unternehmen\n• Basel III Rahmenwerk definiert operationelle Risikomanagement-Anforderungen einschließlich PKI-Sicherheit\n• MiFID II erfordert sichere Kommunikation und Datenintegrität durch PKI-Implementierungen\n• Open Banking Standards verlangen starke Authentifizierung und Verschlüsselung für API-Sicherheit\n\n🏥 Gesundheitswesen und Life Sciences Compliance:\n• HIPAA (Health Insurance Portability and Accountability Act) erfordert Verschlüsselung von Gesundheitsdaten durch PKI-Systeme\n• FDA 21 CFR Part 11 reguliert elektronische Aufzeichnungen und Signaturen in pharmazeutischen Unternehmen\n• Medical Device Regulation (MDR) erfordert Cybersicherheitsmaßnahmen für Medizinprodukte einschließlich PKI\n• Good Manufacturing Practice (GMP) Standards verlangen sichere elektronische Systeme und digitale Signaturen\n• Clinical Trial Regulation (CTR) erfordert Datenintegrität und sichere Kommunikation in klinischen Studien\n\n🏭 Industrielle und Kritische Infrastruktur Standards:\n• IEC 62443 definiert Cybersicherheitsstandards für industrielle Automatisierungssysteme mit PKI-Anforderungen\n• NERC CIP (North American Electric Reliability Corporation Critical Infrastructure Protection) für Energieversorgung\n• ISO 27001/27002 Information Security Management Standards mit spezifischen PKI-Kontrollen\n• NIST Cybersecurity Framework bietet Leitlinien für PKI-Implementierung in kritischen Infrastrukturen\n• Common Criteria (ISO 15408) für Sicherheitsevaluierung von PKI-Produkten und -systemen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Wie werden PKI-Systeme gegen moderne Cyber-Bedrohungen und Advanced Persistent Threats (APT) abgesichert?',
        answer: "Die Absicherung von PKI-Systemen gegen moderne Cyber-Bedrohungen erfordert einen mehrschichtigen, adaptiven Sicherheitsansatz, der sowohl traditionelle als auch emerging Threats berücksichtigt. Advanced Persistent Threats (APT) und staatlich unterstützte Angreifer stellen besondere Herausforderungen dar, da sie über erhebliche Ressourcen, Zeit und Expertise verfügen, um auch gut geschützte PKI-Infrastrukturen zu kompromittieren.\n\n🛡️ Defense-in-Depth Sicherheitsarchitektur:\n• Multi-Layer Security Implementation schützt PKI-Komponenten durch redundante Sicherheitsmaßnahmen auf verschiedenen Ebenen\n• Network Segmentation isoliert kritische PKI-Systeme in separaten, hochsicheren Netzwerksegmenten mit strengen Zugangskontrollen\n• Zero Trust Architecture vertraut keinem Netzwerkverkehr standardmäßig und validiert kontinuierlich alle PKI-Zugriffe\n• Micro-Segmentation grenzt PKI-Services granular ab und minimiert potenzielle Angriffsflächen\n• Air-Gap Protection isoliert kritischste PKI-Komponenten physisch von Netzwerken für maximale Sicherheit\n\n🔍 Advanced Threat Detection und Response:\n• Behavioral Analytics überwachen PKI-Systeme auf anomale Aktivitätsmuster und verdächtige Zugriffe\n• Machine Learning-based Threat Detection identifiziert unbekannte Angriffsmuster und Zero-Day-Exploits\n• Security Information and Event Management (SIEM) korreliert PKI-Ereignisse mit organisationsweiten Sicherheitsdaten\n• User and Entity Behavior Analytics (UEBA) erkennen kompromittierte Benutzerkonten und Insider-Bedrohungen\n• Threat Intelligence Integration nutzt aktuelle Bedrohungsinformationen für proaktive PKI-Verteidigung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Welche Disaster Recovery und Business Continuity Strategien sind für kritische PKI-Infrastrukturen erforderlich?',
        answer: "Disaster Recovery und Business Continuity für PKI-Infrastrukturen erfordern spezialisierte Strategien, die die kritische Rolle von PKI für organisationsweite Sicherheit und Geschäftsprozesse berücksichtigen. PKI-Ausfälle können weitreichende Auswirkungen haben, von der Unterbrechung sicherer Kommunikation bis zur Blockierung geschäftskritischer Anwendungen, weshalb robuste Continuity-Pläne essentiell sind.\n\n🎯 Business Impact Analysis und Recovery Objectives:\n• Recovery Time Objective (RTO) definiert maximale akzeptable Ausfallzeiten für verschiedene PKI-Services\n• Recovery Point Objective (RPO) bestimmt maximalen akzeptablen Datenverlust bei PKI-Systemen\n• Business Impact Assessment bewertet Auswirkungen von PKI-Ausfällen auf kritische Geschäftsprozesse\n• Service Level Agreements (SLA) definieren Verfügbarkeitsanforderungen für PKI-Services\n• Criticality Classification priorisiert PKI-Komponenten basierend auf Geschäftskritikalität\n\n🏗️ Redundante PKI-Architektur und High Availability:\n• Geographic Distribution verteilt PKI-Komponenten auf mehrere physische Standorte für Ausfallsicherheit\n• Active-Active Configuration ermöglicht gleichzeitigen Betrieb mehrerer PKI-Instanzen für kontinuierliche Verfügbarkeit\n• Load Balancing und Failover Mechanisms gewährleisten automatische Umschaltung bei Komponentenausfällen\n• Clustered Certificate Authorities bieten horizontale Skalierung und Redundanz für CA-Services\n• Multi-Site Replication synchronisiert PKI-Daten zwischen verschiedenen Standorten in Echtzeit"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Wie erfolgt die Migration und Modernisierung bestehender PKI-Systeme ohne Unterbrechung kritischer Services?',
        answer: "Die Migration und Modernisierung bestehender PKI-Systeme stellt eine der komplexesten Herausforderungen in der IT-Sicherheit dar, da PKI-Services oft kritische Geschäftsprozesse unterstützen und Ausfälle weitreichende Konsequenzen haben können. Erfolgreiche PKI-Migrationen erfordern sorgfältige Planung, schrittweise Implementierung und umfassende Risikominimierung.\n\n📋 Comprehensive Migration Planning und Assessment:\n• Current State Analysis dokumentiert detailliert bestehende PKI-Architektur, Abhängigkeiten und Konfigurationen\n• Future State Design definiert Ziel-PKI-Architektur mit verbesserten Funktionen, Sicherheit und Performance\n• Gap Analysis identifiziert Unterschiede zwischen aktueller und gewünschter PKI-Konfiguration\n• Risk Assessment bewertet potenzielle Risiken und Auswirkungen der PKI-Migration\n• Stakeholder Impact Analysis identifiziert alle betroffenen Systeme, Anwendungen und Benutzergruppen\n\n🔄 Phased Migration Strategies und Rollout-Ansätze:\n• Parallel Operation ermöglicht gleichzeitigen Betrieb alter und neuer PKI-Systeme während der Übergangsphase\n• Gradual Cutover migriert PKI-Services schrittweise mit minimalen Auswirkungen auf laufende Operationen\n• Service-by-Service Migration isoliert Risiken durch separate Migration verschiedener PKI-Funktionen\n• Pilot Implementation testet neue PKI-Systeme mit ausgewählten Anwendungen vor vollständiger Migration\n• Rollback Planning definiert Verfahren für schnelle Rückkehr zu ursprünglichen Systemen bei Problemen"
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
    console.log('✅ FAQ batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
