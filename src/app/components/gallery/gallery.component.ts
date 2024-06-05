import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  items= [
    { title: 'Unberechtigte Inkassoforderungen', area:'Verbraucherrecht', description: 'Als Student werde ich von einem Inkassobüro bedrängt, das von mir die Zahlung einer Schuldenforderung verlangt, die auf einem angeblich nicht gekündigten Abonnement beruht, von dem ich keine Kenntnis habe.' },
    { title: 'Streit mit Vermieter über Wohnungsmängel', area:'Mietrecht', description: 'Als alleinerziehende Mutter stehe ich vor einem Problem mit meinem Vermieter, der es trotz wiederholter Aufforderungen nicht geschafft hat, ernsthafte Mängel wie Feuchtigkeitsschäden und Schimmel in meiner Wohnung zu beheben.' },
    { title: 'Versicherungstreit nach einem Verkehrsunfall', area:'Versicherungsrecht', description: 'Nach einem Verkehrsunfall weigert sich meine Versicherung, die mir zustehenden Leistungen auszuzahlen. Sie beruft sich auf angebliche Inkonsistenzen im Unfallbericht, was ich als ungerecht empfinde.'},
    { title: 'Ungerechtfertigte Kündigung', area: 'Arbeitsrecht', description: 'Ich wurde als Teilzeitkraft in einem Lebensmittelgeschäft ohne vorherige Abmahnung entlassen, nachdem ich mich über unsichere Arbeitsbedingungen beschwert hatte, was mir unfair und rechtswidrig erscheint.'},
    { title: 'Fehlerhafte medizinische Behandlung', area: 'Medizinrecht', description: 'Ich bin ein Patient, der nach einer fehlerhaften medizinischen Behandlung in einem Krankenhaus ernsthafte gesundheitliche Probleme erleidet. Mir wurde eine falsche Medikation verabr...'}
  ];

  constructor(private router: Router,  private route: ActivatedRoute) {
  }

  navigateToOpenCase() {
    this.router.navigate(['/case/1']);
  }


}
