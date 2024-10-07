import {
  AfterViewInit,
  Component,
  inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
})
export class SigninComponent implements OnDestroy {
  @Input() username: string = 'SLKT';

  private route = inject(Router);

  goToPrivate() {
    this.route.navigate(['app/private'], { replaceUrl: false });
  }

  goToPublic() {
    this.route.navigate(['app/public'], { replaceUrl: false });
  }

  ngOnDestroy(): void {
    console.log('Home Component is destroyed.');
  }
}
