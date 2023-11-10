import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { APIResponse, Message } from './interfaces/api-response.interface';

// curl https://api.openai.com/v1/chat/completions \
//   -H "Content-Type: application/json" \
//   -H "Authorization: Bearer $OPENAI_API_KEY" \
//   -d '{
//      "model": "gpt-3.5-turbo",
//      "messages": [{"role": "user", "content": "Say this is a test!"}],
//      "temperature": 0.7
//    }'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  readonly http: HttpClient = inject(HttpClient);

  getResponse(prompt: string): Observable<Message> {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${environment.OPENAI_API_KEY}`,
      },
    };

    const body = {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
    };

    return this.http.post<APIResponse>(environment.BASE_API_URL, body).pipe(
      map<APIResponse, Message>(
        (response: APIResponse) => response.choices[0].message
      ),

      tap((value) => console.log({ value })),

      catchError((error) => {
        console.warn({ ERROR: error });

        return of({
          role: 'system',
          content: error.error.error.message,
        });
      })
    );
  }
}
