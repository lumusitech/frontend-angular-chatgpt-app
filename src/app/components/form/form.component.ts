import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';
import { map } from 'rxjs';
import { Message } from './interfaces/api-response.interface';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  apiService: ApiService = inject(ApiService);
  apiResponse?: string;
  apiResponseError?: string;

  constructor() {
    this.apiService
      .getResponse('Qué es angular')

      .subscribe({
        next: (value) => {
          this.apiResponse = value.content;
        },
        error: (err) => {
          console.log({ ERROR: err.error.error.message });
          this.apiResponseError = err.error.error.message;
        },
      });
  }
}
