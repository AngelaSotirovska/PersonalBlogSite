import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({ providedIn: 'root' })
export class AppService {
  private readonly httpClient = inject(HttpClient);

  requestArray<T>(source: string) {
    return toSignal(this.httpClient.get<T[]>(source), { initialValue: [] });
  }

  requestObject<T>(source: string) {
    return toSignal(this.httpClient.get<T>(source), { initialValue: null });
  }
}
