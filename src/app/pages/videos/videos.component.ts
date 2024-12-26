import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: "app-videos",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="videos-container">
      <h2>วิดีโอให้ความรู้</h2>
      <div class="video-grid">
        <div *ngFor="let video of videos" class="video-card">
          <iframe
            [src]="video.safeUrl"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h3>{{ video.title }}</h3>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .videos-container {
        padding: 2rem;
        max-width: 1200px;
        margin: 0 auto;
      }
      .video-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-top: 2rem;
      }
      .video-card {
        background: white;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s;
      }
      .video-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }
      .video-card iframe {
        width: 100%;
        aspect-ratio: 16/9;
      }
      .video-card h3 {
        padding: 1rem;
        margin: 0;
        font-size: 1rem;
        color: #333;
        line-height: 1.4;
      }
    `,
  ],
})
export class VideosComponent {
  videos: { title: string; safeUrl: SafeResourceUrl }[];

  constructor(private sanitizer: DomSanitizer) {
    this.videos = [
      {
        title: "ความรู้โรคความดันโลหิต",
        safeUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
          "https://www.youtube.com/embed/zMbYH1SBHtc?si=3wrp2ZsGP5qM4Lty"
        ),
      },
      {
        title: "วิธีอ่านฉลากโภชนาการ",
        safeUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
          "https://www.youtube.com/embed/EGvLA3Qte60?si=gvfAO1XfeiQQPpnP"
        ),
      },
      // {
      //   title: "สารต้านโภชนาการกับสุขภาพ | รู้สู้โรค",
      //   safeUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
      //     "https://www.youtube.com/embed/N9BGG5x0OUo"
      //   ),
      // },
      // {
      //   title:
      //     "พาเข้าครัวทำอาหารเพื่อสุขภาพ พร้อมให้ความรู้เรื่องการกินและโภชนาการ",
      //   safeUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
      //     "https://www.youtube.com/embed/vqgmckH91d4"
      //   ),
      // },
      // {
      //   title: "EP04 อาหารและโภชนาการสำหรับประชาชน เมนูชูสุขภาพ",
      //   safeUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
      //     "https://www.youtube.com/embed/Bx9B50Lt1tQ"
      //   ),
      // },
      // {
      //   title: "ความรู้เกี่ยวกับโภชนาการ เพื่อหุ่นและสุขภาพที่ดี",
      //   safeUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
      //     "https://www.youtube.com/embed/playlist?list=PLzMA9xpnQTDiLTM6M508nrER-URpyF_px"
      //   ),
      // },
      // {
      //   title: "Doctor Talk... 'โภชนาการพื้นฐานดี สุขภาพดี 24 ชม.' | USANA",
      //   safeUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
      //     "https://www.youtube.com/embed/h-ABM8Itp_I"
      //   ),
      // },
      // {
      //   title: "สุขภาพดีด้วยโภชนาการที่สมดุล",
      //   safeUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
      //     "https://www.youtube.com/embed/RV8HSIJr2To"
      //   ),
      // },
      // {
      //   title: "สร้างสมดุลโภชนาการในผู้สูงวัย : รู้สู้โรค",
      //   safeUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
      //     "https://www.youtube.com/embed/yFf-XscA0PA"
      //   ),
      // },
      // {
      //   title: "healthy life กินอย่างไรให้สุขภาพดี (อาหารและโภชนาการ)",
      //   safeUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
      //     "https://www.youtube.com/embed/vh0jnITvZLo"
      //   ),
      // },
    ];
  }
}
