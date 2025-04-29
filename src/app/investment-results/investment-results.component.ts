import { Component, inject, input } from '@angular/core';
import {
  type InvestmentInput,
  InvestmentsService,
} from '../investment-service.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  investmentService = inject(InvestmentsService);

  results = input<InvestmentInput[]>();
}
