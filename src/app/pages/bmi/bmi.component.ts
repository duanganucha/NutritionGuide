import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-bmi",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="bmi-container">
      <div class="card">
        <h2>คำนวณดัชนีมวลกาย (BMI)</h2>
        <div class="calculator">
          <div class="input-group">
            <label for="weight">น้ำหนัก (กิโลกรัม)</label>
            <div class="input-wrapper">
              <input
                type="number"
                id="weight"
                [(ngModel)]="weight"
                (ngModelChange)="calculateBMI()"
                min="0"
                max="300"
                placeholder="กรุณากรอกน้ำหนัก"
              />
              <span class="unit">kg</span>
            </div>
          </div>

          <div class="input-group">
            <label for="height">ส่วนสูง (เซนติเมตร)</label>
            <div class="input-wrapper">
              <input
                type="number"
                id="height"
                [(ngModel)]="height"
                (ngModelChange)="calculateBMI()"
                min="0"
                max="300"
                placeholder="กรุณากรอกส่วนสูง"
              />
              <span class="unit">cm</span>
            </div>
          </div>

          <div class="result-container" *ngIf="bmi">
            <div class="bmi-gauge" [style.--percentage]="getBMIPercentage()">
              <div class="gauge-value">{{ bmi | number : "1.1-1" }}</div>
              <div class="gauge-label">BMI ของคุณ</div>
            </div>

            <div class="category" [ngClass]="getBMIClass()">
              <div class="category-icon">
                {{ getCategoryEmoji() }}
              </div>
              <div class="category-text">
                {{ getBMICategory() }}
              </div>
            </div>

            <div class="bmi-scale">
              <div class="scale-item underweight">น้ำหนักต่ำ<br />&lt;18.5</div>
              <div class="scale-item normal">ปกติ<br />18.5-24.9</div>
              <div class="scale-item overweight">น้ำหนักเกิน<br />25-29.9</div>
              <div class="scale-item obese">อ้วน<br />&gt;30</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .bmi-container {
        padding: 0rem 2rem 2rem 2rem;
        max-width: 600px;
        margin: 80px auto 0;
      }

      .card {
        background: white;
        border-radius: 16px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
          0 2px 4px -1px rgba(0, 0, 0, 0.06);
        padding: 2rem;
      }

      h2 {
        text-align: center;
        color: #1a1a1a;
        margin-bottom: 2rem;
        font-size: 1.75rem;
        font-weight: 600;
      }

      .input-group {
        margin-bottom: 1.5rem;
      }

      .input-group label {
        display: block;
        margin-bottom: 0.5rem;
        color: #4a5568;
        font-weight: 500;
      }

      .input-wrapper {
        position: relative;
        display: flex;
        align-items: center;
      }

      input {
        width: 100%;
        padding: 0.75rem 1rem;
        border: 2px solid #e2e8f0;
        border-radius: 8px;
        font-size: 1rem;
        transition: all 0.3s ease;
        padding-right: 3rem;
      }

      input:focus {
        outline: none;
        border-color: #2196f3;
        box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.1);
      }

      .unit {
        position: absolute;
        right: 1rem;
        color: #718096;
        font-weight: 500;
      }

      .result-container {
        margin-top: 2rem;
        text-align: center;
      }

      .bmi-gauge {
        width: 200px;
        height: 100px;
        margin: 0 auto 1.5rem;
        background: #f7fafc;
        border-radius: 100px 100px 0 0;
        position: relative;
        overflow: hidden;
      }

      .bmi-gauge::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: calc(var(--percentage) * 1%);
        height: 100%;
        background: linear-gradient(
          to right,
          #2196f3,
          #4caf50,
          #ff9800,
          #f44336
        );
        transition: width 0.3s ease;
      }

      .gauge-value {
        position: relative;
        font-size: 2rem;
        font-weight: 700;
        color: #1a1a1a;
        margin-top: 1rem;
      }

      .gauge-label {
        position: relative;
        color: #4a5568;
        font-weight: 500;
      }

      .category {
        border-radius: 8px;
        transition: all 0.3s ease;
      }

      .category-icon {
        font-size: 2rem;
        margin-bottom: 0.5rem;
      }

      .category-text {
        font-weight: 600;
      }

      .underweight {
        color: #2196f3;
      }
      .normal {
        color: #4caf50;
      }
      .overweight {
        color: #ff9800;
      }
      .obese {
        color: #f44336;
      }

      .bmi-scale {
        display: flex;
        justify-content: space-between;

        padding: 1rem;
        background: #f7fafc;
        border-radius: 8px;
      }

      .scale-item {
        text-align: center;
        font-size: 0.875rem;
        padding: 0.5rem;
        flex: 1;
      }

      @media (max-width: 480px) {
        .bmi-container {
          padding: 1rem;
        }

        .card {
          padding: 1.5rem;
        }

        .bmi-scale {
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .scale-item {
          flex: 1 1 40%;
        }
      }
    `,
  ],
})
export class BMIComponent {
  weight: number = 0;
  height: number = 0;
  bmi: number = 0;

  calculateBMI() {
    if (this.weight > 0 && this.height > 0) {
      const heightInMeters = this.height / 100;
      this.bmi = this.weight / (heightInMeters * heightInMeters);
    }
  }

  getBMICategory(): string {
    if (!this.bmi) return "";
    if (this.bmi < 18.5) return "น้ำหนักต่ำกว่าเกณฑ์";
    if (this.bmi < 25) return "น้ำหนักปกติ";
    if (this.bmi < 30) return "น้ำหนักเกิน";
    return "อ้วน";
  }

  getBMIClass(): string {
    if (!this.bmi) return "";
    if (this.bmi < 18.5) return "underweight";
    if (this.bmi < 25) return "normal";
    if (this.bmi < 30) return "overweight";
    return "obese";
  }

  getCategoryEmoji(): string {
    if (!this.bmi) return "";
    if (this.bmi < 18.5) return "😟";
    if (this.bmi < 25) return "😊";
    if (this.bmi < 30) return "😕";
    return "😟";
  }

  getBMIPercentage(): number {
    if (!this.bmi) return 0;
    return Math.min(Math.max((this.bmi / 40) * 100, 0), 100);
  }
}
