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
    console.log('Updating CIS Controls page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'standards-frameworks-cis-controls' })
    
    if (!existingDoc) {
      throw new Error('Document "standards-frameworks-cis-controls" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie entwickelt ADVISORI eine CIS Controls-Strategie, die gleichzeitig kurzfristige Security-Wins und langfristige digitale Transformation unterstützt?",
        answer: "Die Balance zwischen sofortigen Security-Verbesserungen und langfristiger strategischer Positionierung ist entscheidend für den Erfolg von CIS Controls-Implementierungen. ADVISORI entwickelt intelligente Implementierungsstrategien, die Quick Wins in den ersten 90 Tagen liefern, während gleichzeitig das Fundament für langfristige digitale Transformation und Geschäftswachstum gelegt wird.\n\n⚡ Quick Wins und sofortige Wertschöpfung:\n• Implementation Group 1 Prioritization: Fokus auf die ersten 6 CIS Controls für maximale Risikoreduktion bei minimalen Investitionen - messbare Verbesserungen in 30-60 Tagen.\n• Automated Asset Discovery: Sofortige Transparenz über alle IT-Assets und deren Sicherheitsstatus, oft 40-60% mehr Assets als bisher bekannt.\n• Emergency Response Readiness: Schnelle Implementierung kritischer Incident Response-Fähigkeiten für unmittelbaren Schutz.\n• Compliance Quick Assessment: Sofortige Bewertung der Compliance-Readiness für anstehende Audits oder Zertifizierungen.\n\n🚀 Langfristige digitale Transformation und Strategic Enablement:\n• Scalable Architecture Design: CIS Controls-Framework wird so entwickelt, dass es mit Unternehmenswachstum und technologischer Evolution mitwächst.\n• Innovation Platform Creation: Security-Infrastructure wird als Enabler für neue Geschäftsmodelle, Cloud-Adoption und digitale Services positioniert.\n• Data-Driven Culture: Implementation schafft Grundlage für datengestützte Entscheidungsfindung und Analytics-getriebene Optimierung.\n• Future-Technology Integration: Vorbereitung für KI, Machine Learning, IoT und andere emerging Technologies.\n\n🎯 ADVISORI's Balanced Implementation Approach:\n• Dual-Track Strategy: Parallele Verfolgung von Quick Wins und langfristigen strategischen Zielen durch intelligente Ressourcenallokation.\n• Value Stream Mapping: Alignment jeder CIS Control mit spezifischen Business Value Streams für maximale Relevanz und Akzeptanz.\n• Progressive Enhancement: Kontinuierliche Erweiterung von Basic Controls zu Advanced Analytics und Intelligence-driven Security.\n• Stakeholder Engagement: Verschiedene Implementierungsgeschwindigkeiten für verschiedene Stakeholder-Gruppen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche spezifischen CIS Controls bieten für C-Level-Führungskräfte den höchsten strategischen Wert und wie priorisiert ADVISORI diese für maximalen Business Impact?",
        answer: "Nicht alle CIS Controls sind für die C-Suite gleich relevant. ADVISORI entwickelt eine strategische Priorisierung, die Controls nach direktem Business-Impact, Risikoreduktion und strategischem Wert für die Führungsebene bewertet. Diese Herangehensweise gewährleistet, dass Investitionen dort getätigt werden, wo sie den größten Einfluss auf Geschäftsergebnisse haben.\n\n🎯 High-Impact CIS Controls für strategische Führung:\n• Control 1 & 2 (Asset Management): Fundamentale Transparenz und Kontrolle - ohne vollständiges Asset-Verständnis sind alle anderen Security-Investitionen suboptimal.\n• Control 5 (Account Management): Direkter Einfluss auf Insider-Risiken und Compliance-Anforderungen, besonders kritisch bei M&A-Aktivitäten.\n• Control 11 (Data Recovery): Business Continuity und Resilience - unmittelbare Auswirkung auf operative Stabilität und Kundenvertrauen.\n• Control 12 (Network Infrastructure Management): Grundlage für sichere digitale Geschäftsmodelle und Cloud-Adoption.\n\n📊 Business-Impact Priorisierung Matrix:\n• Tier 1 - Existenziell: Controls, die direkten Einfluss auf Business Continuity und kritische Geschäftsprozesse haben.\n• Tier 2 - Strategisch: Controls, die Wachstumschancen ermöglichen und Wettbewerbsvorteile schaffen.\n• Tier 3 - Operational: Controls, die operative Effizienz steigern und Kosten reduzieren.\n• Tier 4 - Optimierung: Advanced Controls für kontinuierliche Verbesserung und Innovation.\n\n🔄 ADVISORI's Strategic Implementation Sequencing:\n• Phase 1 (0-90 Tage): Kritische Controls für sofortige Risikoreduktion und Quick Wins.\n• Phase 2 (3-9 Monate): Business-enabling Controls für Wachstum und neue Geschäftschancen.\n• Phase 3 (9-18 Monate): Advanced Controls für Optimierung und Competitive Advantage.\n• Phase 4 (18+ Monate): Innovation Controls für Next-Generation Security und Business Models.\n\n💰 ROI-optimierte Control-Auswahl:\n• Cost-Benefit Analysis: Quantifizierung des erwarteten ROI für jeden Control basierend auf Ihrer spezifischen Risikolage.\n• Resource Optimization: Intelligent Sequencing zur maximalen Nutzung vorhandener Ressourcen und Minimierung von Implementierungskosten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie gewährleistet ADVISORI, dass CIS Controls-Implementierungen mit internationalen Compliance-Anforderungen und branchenspezifischen Regulierungen harmonieren?",
        answer: "Moderne Unternehmen navigieren in einem komplexen Geflecht aus internationalen Compliance-Anforderungen, branchenspezifischen Regulierungen und sich ständig ändernden Standards. ADVISORI entwickelt CIS Controls-Implementierungen, die als Master-Framework fungieren und Multiple-Compliance-Ziele gleichzeitig adressieren, wodurch Audit-Aufwand reduziert und Compliance-Effizienz maximiert wird.\n\n🌍 Multi-Framework Integration und Harmonisierung:\n• ISO 27001 Alignment: CIS Controls werden so implementiert, dass sie direkt ISO 27001-Anforderungen erfüllen und Zertifizierungsprozesse beschleunigen.\n• NIST Framework Mapping: Nahtlose Integration mit NIST Cybersecurity Framework für US-Markt-Compliance und föderale Aufträge.\n• GDPR/DSGVO Compliance: Spezielle Berücksichtigung von Datenschutz-Controls und Privacy-by-Design-Prinzipien.\n• Industry Standards: Anpassung an branchenspezifische Anforderungen (PCI DSS, HIPAA, SOX, TISAX etc.).\n\n📋 Regulatory Intelligence und Proactive Compliance:\n• Regulatory Monitoring: Kontinuierliche Überwachung sich ändernder Compliance-Landschaften und proaktive Anpassung der Controls.\n• Cross-Border Compliance: Berücksichtigung verschiedener nationaler und internationaler Rechtssysteme bei multinationalen Implementierungen.\n• Audit-Ready Documentation: Automatisierte Generierung von Compliance-Nachweisen und Audit-Trails für verschiedene Standards.\n• Regulatory Gap Analysis: Identifikation und Schließung von Compliance-Lücken vor kritischen Audit-Terminen.\n\n🛡️ ADVISORI's Compliance-First CIS Implementation:\n• Universal Control Mapping: Entwicklung von Controls, die gleichzeitig multiple Compliance-Anforderungen erfüllen.\n• Efficiency Optimization: Reduzierung von Compliance-Overhead durch intelligente Control-Konsolidierung.\n• Future-Proofing: Antizipation kommender Regulierungen und präventive Implementation relevanter Controls.\n• Regional Expertise: Lokale Compliance-Expertise für verschiedene Märkte und Jurisdiktionen.\n\n📈 Messbare Compliance-Verbesserungen:\n• Audit Efficiency: Reduzierung von Audit-Zeiten um 40-60% durch systematische Control-Dokumentation.\n• Multi-Standard Certification: Beschleunigung von Zertifizierungsprozessen für multiple Standards.\n• Compliance Cost Reduction: Optimierung von Compliance-Ausgaben durch Control-Konsolidierung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Wie entwickelt ADVISORI CIS Controls-basierte Governance-Strukturen, die sowohl operative Excellence als auch strategische Agilität ermöglichen?",
        answer: "Moderne Unternehmensführung erfordert die Balance zwischen rigoroser Governance und strategischer Agilität. ADVISORI entwickelt CIS Controls-basierte Governance-Frameworks, die robuste Sicherheit und Compliance gewährleisten, während sie gleichzeitig Geschäftsagilität und Innovationsfähigkeit erhalten und verstärken.\n\n⚖️ Balanced Governance Framework Design:\n• Risk-Based Governance: Adaptive Governance-Strukturen, die sich automatisch an sich ändernde Risikolagen anpassen.\n• Agile Compliance: Implementierung von DevSecOps-Prinzipien für schnelle, sichere Entwicklungs- und Deployment-Zyklen.\n• Automated Policy Enforcement: Intelligente Automatisierung reduziert manuelle Governance-Overhead und ermöglicht Fokus auf strategische Entscheidungen.\n• Continuous Governance: Real-time Monitoring und Anpassung von Governance-Parametern basierend auf aktuellen Geschäftsanforderungen.\n\n🎯 Strategic Governance Integration:\n• Board-Level Dashboards: Executive-gerechte Visualisierung von Security-Posture und Compliance-Status für fundierte strategische Entscheidungen.\n• Risk Appetite Alignment: Konfiguration von Controls basierend auf definiertem Risk Appetite und Geschäftszielen.\n• Innovation Enablement: Governance-Strukturen, die Innovation beschleunigen statt behindern durch 'Security by Design'.\n• M&A Integration: Governance-Frameworks, die schnelle Integration neuer Geschäftsbereiche oder Akquisitionen ermöglichen.\n\n🔄 Operative Excellence durch intelligente Automatisierung:\n• Policy as Code: Automatisierte Implementation und Durchsetzung von Security-Policies als Teil der IT-Infrastructure.\n• Exception Management: Intelligente Systeme für die Verwaltung und Genehmigung von Policy-Ausnahmen.\n• Continuous Audit: Automatisierte, kontinuierliche Compliance-Überwachung eliminiert traditionelle Audit-Zyklen.\n• Performance Optimization: KI-gestützte Optimierung von Security-Controls für maximale Effizienz bei minimaler Geschäftsbeeinträchtigung.\n\n📊 ADVISORI's Adaptive Governance Methodology:\n• Stakeholder-Centric Design: Governance-Strukturen werden für verschiedene Stakeholder-Gruppen optimiert (C-Suite, Operations, Development, Compliance).\n• Feedback-Loop Integration: Kontinuierliche Verbesserung durch systematische Erfassung und Integration von Stakeholder-Feedback.\n• Scenario Planning: Governance-Flexibilität für verschiedene Geschäftsszenarien (Wachstum, Krise, Transformation)."
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
    console.log('✅ C-Level FAQs batch 2 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
