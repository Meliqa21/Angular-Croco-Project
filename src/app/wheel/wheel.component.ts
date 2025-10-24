import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wheel',
  imports: [FormsModule],
  templateUrl: './wheel.component.html',
  styleUrl: './wheel.component.css'
})
export class WheelComponent {
sectors = Array.from({ length: 10 }, (_, i) => i + 1);
  rotation = 0;
  inputValue: number | null = null;
  error: string | null = null;
  isSpinning = false;
  showWinner = false;
  winnerNumber: number | null = null;

  public readonly sectorAngle = 360 / 10; 

  spin() {
    const target = Number(this.inputValue);
    
    if (!target || !Number.isInteger(target) || target < 1 || target > 10) {
      this.error = 'აღნიშნული სექტორი ვერ მოიძებნა';
      return;
    }

    this.error = null;
    this.showWinner = false;

    if (this.isSpinning) return;
    this.isSpinning = true;

    const targetIndex = target - 1;
    const fullTurns = 3; 
    const targetAngle = targetIndex * this.sectorAngle + (this.sectorAngle / 2);
    
    const finalRotation = this.rotation + (fullTurns * 360) + (360 - targetAngle);
    
    this.rotation = finalRotation;

    const transitionMs = 4000;
    setTimeout(() => {
      this.isSpinning = false;
      this.winnerNumber = target;
      this.showWinner = true;
    }, transitionMs);
  }

  closeWinner() {
    this.showWinner = false;
    this.winnerNumber = null;
    this.rotation = 0;
  }
}