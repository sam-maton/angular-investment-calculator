import { inject, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentsService } from '../investment-service.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initialInvestment = 0;
  annualInvestment = 0;
  expectedReturn = 10;
  duration = 5;

  private investmentsService = inject(InvestmentsService);

  onSbubmit() {
    this.investmentsService.calculateInvestmentResults(
      this.initialInvestment,
      this.annualInvestment,
      this.expectedReturn,
      this.duration
    );
  }
}
