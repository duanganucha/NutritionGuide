import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-topbar",
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="topbar">
      <div class="logo">
        <a routerLink="/">
          <span class="logo-text">NutritionGuide</span>
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button class="mobile-menu-btn" (click)="toggleMenu()">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

      <ul class="nav-links" [class.active]="isMenuOpen">
        <li>
          <a
            routerLink="/"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
            >หน้าแรก</a
          >
        </li>
        <li>
          <a routerLink="/videos" routerLinkActive="active">วิดีโอความรู้</a>
        </li>
        <li>
          <a routerLink="/bmi" routerLinkActive="active">คำนวณ BMI</a>
        </li>
        <li>
          <a routerLink="/calories" routerLinkActive="active">คำนวณแคลอรี่</a>
        </li>
        <li>
          <a routerLink="/ingredients" routerLinkActive="active"
            >รายการส่วนประกอบ</a
          >
        </li>
      </ul>
    </nav>
  `,
  styles: [
    `
      .topbar {
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
          0 2px 4px -1px rgba(0, 0, 0, 0.06);
        padding: 1rem 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        transition: all 0.3s ease;
      }

      .logo a {
        text-decoration: none;
      }

      .logo-text {
        background: linear-gradient(45deg, #2196f3, #21cbf3);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        font-size: 1.75rem;
        font-weight: 700;
        letter-spacing: -0.5px;
      }

      .nav-links {
        display: flex;
        gap: 1.5rem;
        list-style: none;
        margin: 0;
        padding: 0;
        align-items: center;
      }

      .nav-links a {
        color: #1a1a1a;
        text-decoration: none;
        padding: 0.625rem 1.25rem;
        border-radius: 8px;
        transition: all 0.2s ease;
        font-weight: 500;
        position: relative;
      }

      .nav-links a:hover {
        background: rgba(33, 150, 243, 0.1);
        transform: translateY(-1px);
      }

      .nav-links a.active {
        background: #2196f3;
        color: white;
        box-shadow: 0 4px 6px -1px rgba(33, 150, 243, 0.2);
      }

      .mobile-menu-btn {
        display: none;
        flex-direction: column;
        gap: 6px;
        background: none;
        border: none;
        cursor: pointer;
        padding: 8px;
      }

      .bar {
        width: 24px;
        height: 2px;
        background: #1a1a1a;
        transition: all 0.3s ease;
      }

      @media (max-width: 768px) {
        .mobile-menu-btn {
          display: flex;
        }

        .nav-links {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          flex-direction: column;
          padding: 1rem;
          gap: 0.5rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .nav-links.active {
          display: flex;
        }

        .nav-links a {
          width: 100%;
          text-align: center;
          padding: 1rem;
        }
      }
    `,
  ],
})
export class TopbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
