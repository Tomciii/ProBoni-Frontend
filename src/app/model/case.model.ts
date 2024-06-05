import {Status} from "./casestatus.model";

export interface Case {
  id?: number,
  title: string,
  description: string,
  status?: Status,
  creationDate?: Date,
  lastModified?: Date,
  clientID?: number,
  lawyerID?: number,
  isPublic?: boolean,
  hoursSpent?: number
}

export let OPEN_TEST_CASE = { id: 1, title: 'Unberechtigte Inkassoforderungen', description: 'Als Student werde ich von einem Inkassobüro bedrängt, das von mir die Zahlung einer Schuldenforderung verlangt, die auf einem angeblich nicht gekündigten Abonnement beruht, von dem ich keine Kenntnis habe.', status: Status.Offen, creationDate: new Date(), lastModified: new Date(), clientID: 1, isPublic: true, hoursSpent: 1 };

export let TEST_CASES: Case[] = [
 // { id: 1, title: 'Unberechtigte Inkassoforderungen', description: 'Als Student werde ich von einem Inkassobüro bedrängt, das von mir die Zahlung einer Schuldenforderung verlangt, die auf einem angeblich nicht gekündigten Abonnement beruht, von dem ich keine Kenntnis habe.', status: Status.Offen, creationDate: new Date(), lastModified: new Date(), clientID: 1, isPublic: true, hoursSpent: 1 },
  { id: 2, title: 'Unberechtigte Inkassoforderungen', description: 'Als alleinerziehende Mutter stehe ich vor einem Problem mit meinem Vermieter, der es trotz wiederholter Aufforderungen nicht geschafft hat, ernsthafte Mängel wie Feuchtigkeitsschäden und Schimmel in meiner Wohnung zu beheben.', status: Status.InBearbeitung, creationDate: new Date(), lastModified: new Date(), clientID: 1, lawyerID: 1, isPublic: true, hoursSpent: 1 },
  { id: 3, title: 'Versicherungstreit nach einem Verkehrsunfall', description: 'Nach einem Verkehrsunfall weigert sich meine Versicherung, die mir zustehenden Leistungen auszuzahlen. Sie beruft sich auf angebliche Inkonsistenzen im Unfallbericht, was ich als ungerecht empfinde.', status: Status.InBearbeitung, creationDate: new Date(), lastModified: new Date(), clientID: 1, lawyerID: 1, isPublic: true, hoursSpent: 1 },
  { id: 4, title: 'Ungerechtfertigte Kündigung', description: 'Ich wurde als Teilzeitkraft in einem Lebensmittelgeschäft ohne vorherige Abmahnung entlassen, nachdem ich mich über unsichere Arbeitsbedingungen beschwert hatte, was mir unfair und rechtswidrig erscheint.', status: Status.InBearbeitung, creationDate: new Date(), lastModified: new Date(), clientID: 1, lawyerID: 1, isPublic: true, hoursSpent: 1 },
  { id: 5, title: 'Fehlerhafte medizinische Behandlung', description: 'Ich bin ein Patient, der nach einer fehlerhaften medizinischen Behandlung in einem Krankenhaus ernsthafte gesundheitliche Probleme erleidet. Mir wurde eine falsche Medikation verabr...', status: Status.InBearbeitung, creationDate: new Date(), lastModified: new Date(), clientID: 1, lawyerID: 1, isPublic: true, hoursSpent: 1 },
];
