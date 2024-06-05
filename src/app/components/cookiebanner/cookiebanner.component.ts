import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cookiebanner',
  templateUrl: './cookiebanner.component.html',
  styleUrls: ['./cookiebanner.component.css']
})
export class CookiebannerComponent implements OnInit {

  closed: boolean = true;

  close()  {
    this.closed = true;
    // Store in localStorage that the banner has been closed
    localStorage.setItem('cookieBannerClosed', 'true');
    const cookieBanner = document.getElementById('cookiebanner');
    if (cookieBanner) {
      cookieBanner.remove();
    }
  }

  ngOnInit(): void {
    const bannerClosed = localStorage.getItem('cookieBannerClosed');
    if (bannerClosed) {
      this.closed = true;
    } else {
      this.closed = false;
    }
  }
}
