import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  role = signal<'Supervisor' | 'Trainee'>('Supervisor');

  switchRole() {
    this.role.update(r => r === 'Supervisor' ? 'Trainee' : 'Supervisor');
  }

  isSupervisor = computed(() => this.role() === 'Supervisor');
  isTrainee = computed(() => this.role() === 'Trainee');
}
