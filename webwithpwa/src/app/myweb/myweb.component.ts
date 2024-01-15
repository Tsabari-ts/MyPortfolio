import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-myweb',
  templateUrl: './myweb.component.html',
  styleUrl: './myweb.component.css'
})
export class MywebComponent {
  deferredPrompt: any;
  ngOnInit() {
    if (typeof window !== 'undefined') {
    window.addEventListener('beforeinstallprompt', (event) => {
      // Prevent the mini-infobar from appearing on mobile
      event.preventDefault();
      // Stash the event so it can be triggered later.
      this.deferredPrompt = event;
      
    });
  }
}

  installPWA() {
    if (this.deferredPrompt) {
      // Show the install prompt
      this.deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      this.deferredPrompt.userChoice.then((choiceResult: { outcome: 'accepted' | 'dismissed' }) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        this.deferredPrompt = null;
      });
    }
  }
}
