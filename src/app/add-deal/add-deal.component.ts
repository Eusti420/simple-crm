import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DealService } from 'deal.service';

@Component({
  selector: 'app-add-deal',
  templateUrl: './add-deal.component.html',
  styleUrls: ['./add-deal.component.scss']
})
export class AddDealComponent {
  dealForm: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private dealService: DealService) {
    this.dealForm = this.fb.group({
      title: ['', Validators.required],
      accountId: ['', Validators.required],
      amount: [0, [Validators.required, Validators.min(1)]],
      stage: ['Lead', Validators.required],
      createdAt: [new Date(), Validators.required],
    });
  }

  async saveDeal() {
    if (this.dealForm.invalid) return;

    this.loading = true;
    await this.dealService.addDeal(this.dealForm.value);
    this.loading = false;
  }
}

