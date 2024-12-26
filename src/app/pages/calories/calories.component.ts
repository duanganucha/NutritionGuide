import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-calories",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="calories-container">
      <div class="calculator-card">
        <h2>คำนวณความต้องการพลังงาน</h2>

        <div class="calculator-grid">
          <div class="input-section">
            <div class="input-group">
              <label>เพศ</label>
              <div class="gender-toggle">
                <button
                  [class.active]="gender === 'male'"
                  (click)="setGender('male')"
                >
                  👨 ชาย
                </button>
                <button
                  [class.active]="gender === 'female'"
                  (click)="setGender('female')"
                >
                  👩 หญิง
                </button>
              </div>
            </div>

            <div class="input-group">
              <label>อายุ (ปี)</label>
              <div class="input-wrapper">
                <input
                  type="number"
                  [(ngModel)]="age"
                  (ngModelChange)="calculateCalories()"
                  min="1"
                  max="120"
                  placeholder="กรุณากรอกอายุ"
                />
                <span class="unit">ปี</span>
              </div>
            </div>

            <div class="input-group">
              <label>น้ำหนัก (กก.)</label>
              <div class="input-wrapper">
                <input
                  type="number"
                  [(ngModel)]="weight"
                  (ngModelChange)="calculateCalories()"
                  min="1"
                  max="300"
                  placeholder="กรุณากรอกน้ำหนัก"
                />
                <span class="unit">กก.</span>
              </div>
            </div>

            <div class="input-group">
              <label>ส่วนสูง (ซม.)</label>
              <div class="input-wrapper">
                <input
                  type="number"
                  [(ngModel)]="height"
                  (ngModelChange)="calculateCalories()"
                  min="1"
                  max="300"
                  placeholder="กรุณากรอกส่วนสูง"
                />
                <span class="unit">ซม.</span>
              </div>
            </div>

            <div class="input-group">
              <label>ระดับกิจกรรม</label>
              <div class="activity-select">
                <select
                  [(ngModel)]="activityLevel"
                  (ngModelChange)="calculateCalories()"
                >
                  <option value="1.2">📱 นั่งทำงานตลอดวัน</option>
                  <option value="1.375">
                    🚶 ออกกำลังกายเบาๆ 1-3 วัน/สัปดาห์
                  </option>
                  <option value="1.55">
                    🏃 ออกกำลังกายปานกลาง 3-5 วัน/สัปดาห์
                  </option>
                  <option value="1.725">
                    💪 ออกกำลังกายหนัก 6-7 วัน/สัปดาห์
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div class="result-section" *ngIf="calories">
            <div class="calories-display">
              <div class="calories-value">
                {{ calories | number : "1.0-0" }}
              </div>
              <div class="calories-unit">แคลอรี่/วัน</div>
            </div>

            <div class="calories-breakdown">
              <div class="breakdown-item">
                <div class="breakdown-label">ลดน้ำหนัก</div>
                <div class="breakdown-value">
                  {{ calories - 500 | number : "1.0-0" }}
                </div>
              </div>
              <div class="breakdown-item active">
                <div class="breakdown-label">คงที่</div>
                <div class="breakdown-value">
                  {{ calories | number : "1.0-0" }}
                </div>
              </div>
              <div class="breakdown-item">
                <div class="breakdown-label">เพิ่มน้ำหนัก</div>
                <div class="breakdown-value">
                  {{ calories + 500 | number : "1.0-0" }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .calories-container {
        max-width: 800px;
        margin: 0px auto 0;
      }

      .calculator-card {
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

      .calculator-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
      }

      .input-section {
        padding-right: 2rem;
        border-right: 1px solid #e2e8f0;
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

      .gender-toggle {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
      }

      .gender-toggle button {
        padding: 0.75rem;
        border: 2px solid #e2e8f0;
        background: white;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-weight: 500;
      }

      .gender-toggle button.active {
        background: #2196f3;
        color: white;
        border-color: #2196f3;
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

      .activity-select select {
        width: 100%;
        padding: 0.75rem 1rem;
        border: 2px solid #e2e8f0;
        border-radius: 8px;
        font-size: 1rem;
        background: white;
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .activity-select select:focus {
        outline: none;
        border-color: #2196f3;
        box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.1);
      }

      .result-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .calories-display {
        text-align: center;
        margin-bottom: 2rem;
      }

      .calories-value {
        font-size: 3.5rem;
        font-weight: 700;
        color: #2196f3;
        line-height: 1;
        margin-bottom: 0.5rem;
      }

      .calories-unit {
        color: #718096;
        font-weight: 500;
      }

      .calories-breakdown {
        background: #f7fafc;
        border-radius: 12px;
        padding: 1.5rem;
      }

      .breakdown-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.75rem;
        border-radius: 8px;
        margin-bottom: 0.5rem;
        transition: all 0.3s ease;
      }

      .breakdown-item:last-child {
        margin-bottom: 0;
      }

      .breakdown-item.active {
        background: #2196f3;
        color: white;
      }

      .breakdown-label {
        font-weight: 500;
      }

      .breakdown-value {
        font-weight: 600;
      }

      @media (max-width: 768px) {
        .calories-container {
          padding: 1rem;
        }

        .calculator-card {
          padding: 1.5rem;
        }

        .calculator-grid {
          grid-template-columns: 1fr;
        }

        .input-section {
          padding-right: 0;
          border-right: none;
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 2rem;
        }

        .result-section {
          padding-top: 2rem;
        }
      }
    `,
  ],
})
export class CaloriesComponent {
  gender: "male" | "female" = "male";
  age: number = 25;
  weight: number = 70;
  height: number = 170;
  activityLevel: number = 1.2;
  calories: number = 0;

  setGender(gender: "male" | "female") {
    this.gender = gender;
    this.calculateCalories();
  }

  calculateCalories() {
    if (this.age && this.weight && this.height) {
      // Harris-Benedict Equation
      let bmr = 0;
      if (this.gender === "male") {
        bmr =
          88.362 +
          13.397 * this.weight +
          4.799 * this.height -
          5.677 * this.age;
      } else {
        bmr =
          447.593 + 9.247 * this.weight + 3.098 * this.height - 4.33 * this.age;
      }
      this.calories = bmr * this.activityLevel;
    }
  }
}
