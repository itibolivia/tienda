import { LoadingService } from '@/services/loading.service';
import { AfterViewChecked, ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  loading = true;

  constructor(
    private loadingService: LoadingService,
    private zone: NgZone
  ) {

    this.loadingService.loading$.subscribe(isLoading => {
      if (isLoading) {
        // Mostrar loader inmediatamente
        this.loading = true;
      } else {
        // Esperar a que Angular renderice antes de ocultar
        this.zone.runOutsideAngular(() => {
         setTimeout(() => {
              this.zone.run(() => {
                this.loading = false;
              });
            }, 2000); // 2000 ms = 2 segundos
        });
      }
    });
   
  }

}
