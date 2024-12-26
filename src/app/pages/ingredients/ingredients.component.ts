import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

interface IngredientCategory {
  name: string;
  items: {
    name: string;
    weight: number;
    calories: number;
    image: string;
    iconType: string;
  }[];
}

@Component({
  selector: "app-ingredients",
  templateUrl: "./ingredients.component.html",
  styleUrl: "./ingredients.component.css",
  standalone: true,
  imports: [CommonModule],
})
export class IngredientsComponent {
  getIconColor(type: string): string {
    switch (type) {
      case "vegetable":
        return "#4CAF50";
      case "processed":
        return "#FF9800";
      default:
        return "#9E9E9E";
    }
  }
  categories: IngredientCategory[] = [
    {
      name: "ผัก",
      items: [
        {
          name: "แตงกวา",
          weight: 100,
          calories: 5,
          image:
            "https://cdn.pixabay.com/photo/2016/03/05/19/02/cucumber-1238493_960_720.jpg",
          iconType: "vegetable",
        },
        {
          name: "มะเขือเทศ",
          weight: 100,
          calories: 10,
          image:
            "https://cdn.pixabay.com/photo/2016/03/05/19/02/tomatoes-1238255_960_720.jpg",
          iconType: "vegetable",
        },
        {
          name: "ถั่วงอก",
          weight: 60,
          calories: 11,
          image:
            "https://cdn.pixabay.com/photo/2017/01/30/13/50/sprouts-2024433_960_720.jpg",
          iconType: "vegetable",
        },
        {
          name: "ถั่วฝักยาว",
          weight: 100,
          calories: 19,
          image:
            "https://cdn.pixabay.com/photo/2018/07/15/10/27/long-beans-3532510_960_720.jpg",
          iconType: "vegetable",
        },
        {
          name: "กะหล่ำปลี",
          weight: 60,
          calories: 24,
          image:
            "https://cdn.pixabay.com/photo/2014/12/15/13/40/cabbage-569067_960_720.jpg",
          iconType: "vegetable",
        },
        {
          name: "ผักกาดขาว",
          weight: 60,
          calories: 46,
          image:
            "https://cdn.pixabay.com/photo/2018/05/29/21/22/chinese-cabbage-3449606_960_720.jpg",
          iconType: "vegetable",
        },
        {
          name: "ผักคะน้า",
          weight: 50,
          calories: 86,
          image:
            "https://cdn.pixabay.com/photo/2018/05/29/21/22/kale-3449607_960_720.jpg",
          iconType: "vegetable",
        },
        {
          name: "เห็ดฟาง",
          weight: 60,
          calories: 21,
          image:
            "https://cdn.pixabay.com/photo/2016/03/05/19/02/mushrooms-1238254_960_720.jpg",
          iconType: "vegetable",
        },
        {
          name: "กวางตุ้ง",
          weight: 50,
          calories: 32,
          image:
            "https://cdn.pixabay.com/photo/2018/05/29/21/22/pak-choi-3449608_960_720.jpg",
          iconType: "vegetable",
        },
        {
          name: "ฟักทอง",
          weight: 200,
          calories: 2,
          image:
            "https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",
          iconType: "vegetable",
        },
        {
          name: "แครอท",
          weight: 100,
          calories: 50,
          image:
            "https://cdn.pixabay.com/photo/2016/03/05/19/02/carrots-1238253_960_720.jpg",
          iconType: "vegetable",
        },
        {
          name: "สะเดา",
          weight: 100,
          calories: 7,
          image:
            "https://cdn.pixabay.com/photo/2017/01/30/13/50/neem-2024434_960_720.jpg",
          iconType: "vegetable",
        },
        {
          name: "คันจองหรือผักก้านจอง",
          weight: 100,
          calories: 25,
          image:
            "https://cdn.pixabay.com/photo/2017/01/30/13/50/neem-2024434_960_720.jpg",
          iconType: "vegetable",
        },
        {
          name: "ถั่วพู",
          weight: 100,
          calories: 4,
          image:
            "https://cdn.pixabay.com/photo/2016/03/05/19/02/fern-1238252_960_720.jpg",
          iconType: "vegetable",
        },
        {
          name: "ผักหวาน",
          weight: 100,
          calories: 8,
          image:
            "https://cdn.pixabay.com/photo/2016/03/05/19/02/vegetables-1238251_960_720.jpg",
          iconType: "vegetable",
        },
        {
          name: "มะละกอ",
          weight: 100,
          calories: 3,
          image:
            "https://cdn.pixabay.com/photo/2016/03/05/19/02/papaya-1238250_960_720.jpg",
          iconType: "vegetable",
        },
      ],
    },
    {
      name: "อาหารแปรรูป",
      items: [
        {
          name: "แหนม",
          weight: 100,
          calories: 990,
          image:
            "https://cdn.pixabay.com/photo/2016/03/05/19/02/fermented-pork-1238249_960_720.jpg",
          iconType: "processed",
        },
        {
          name: "เนื้อแดดเดียว",
          weight: 100,
          calories: 1514,
          image:
            "https://cdn.pixabay.com/photo/2016/03/05/19/02/sun-dried-beef-1238248_960_720.jpg",
          iconType: "processed",
        },
        {
          name: "ปลาสลิดแดดเดียว",
          weight: 100,
          calories: 1694,
          image:
            "https://cdn.pixabay.com/photo/2016/03/05/19/02/sun-dried-catfish-1238247_960_720.jpg",
          iconType: "processed",
        },
        {
          name: "หมูแผ่น",
          weight: 100,
          calories: 1592,
          image:
            "https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-sheet-1238246_960_720.jpg",
          iconType: "processed",
        },
        {
          name: "กุนเชียง",
          weight: 100,
          calories: 1303,
          image:
            "https://cdn.pixabay.com/photo/2016/03/05/19/02/chinese-sausage-1238245_960_720.jpg",
          iconType: "processed",
        },
        {
          name: "ไส้กรอก",
          weight: 100,
          calories: 680,
          image:
            "https://cdn.pixabay.com/photo/2016/03/05/19/02/sausage-1238244_960_720.jpg",
          iconType: "processed",
        },
        {
          name: "ผักกาดดอง",
          weight: 100,
          calories: 1498,
          image:
            "https://cdn.pixabay.com/photo/2016/03/05/19/02/pickled-mustard-1238243_960_720.jpg",
          iconType: "processed",
        },
        {
          name: "มะม่วงแช่อิ่ม",
          weight: 100,
          calories: 504,
          image:
            "https://cdn.pixabay.com/photo/2016/03/05/19/02/pickled-mango-1238242_960_720.jpg",
          iconType: "processed",
        },
        {
          name: "ปลากระป๋อง",
          weight: 100,
          calories: 400,
          image:
            "https://cdn.pixabay.com/photo/2016/03/05/19/02/canned-fish-1238241_960_720.jpg",
          iconType: "processed",
        },
        {
          name: "มาม่า",
          weight: 100,
          calories: 1200,
          image:
            "https://cdn.pixabay.com/photo/2016/03/05/19/02/instant-noodles-1238240_960_720.jpg",
          iconType: "processed",
        },
        {
          name: "หมูยอ",
          weight: 100,
          calories: 800,
          image:
            "https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg",
          iconType: "processed",
        },
        {
          name: "หน่อไม้ดอง",
          weight: 100,
          calories: 800,
          image:
            "https://cdn.pixabay.com/photo/2016/03/05/19/02/steamed-fish-1238238_960_720.jpg",
          iconType: "processed",
        },
        {
          name: "ปลาหมึกแห้ง",
          weight: 100,
          calories: 1500,
          image:
            "https://cdn.pixabay.com/photo/2016/03/05/19/02/dried-squid-1238237_960_720.jpg",
          iconType: "processed",
        },
      ],
    },
  ];
  // categories: IngredientCategory[] = [
  //   {
  //     name: "ผัก",
  //     items: [
  //       // ภาพที่ 1
  //       {
  //         name: "แตงกวา",
  //         weight: 100,
  //         calories: 5,
  //         image: "assets/vegetables/cucumber.jpg",
  //         iconType: "vegetable",
  //       },
  //       {
  //         name: "มะเขือเทศ",
  //         weight: 100,
  //         calories: 10,
  //         image: "assets/vegetables/tomato.jpg",
  //         iconType: "vegetable",
  //       },
  //       {
  //         name: "ถั่วงอก",
  //         weight: 60,
  //         calories: 11,
  //         image: "assets/vegetables/beansprouts.jpg",
  //         iconType: "vegetable",
  //       },
  //       {
  //         name: "ถั่วยาว",
  //         weight: 100,
  //         calories: 19,
  //         image: "assets/vegetables/longbeans.jpg",
  //         iconType: "vegetable",
  //       },
  //       {
  //         name: "กะหล่ำปลี",
  //         weight: 60,
  //         calories: 24,
  //         image: "assets/vegetables/cabbage.jpg",
  //         iconType: "vegetable",
  //       },
  //       {
  //         name: "ผักกาดขาว",
  //         weight: 60,
  //         calories: 46,
  //         image: "assets/vegetables/chinese-cabbage.jpg",
  //         iconType: "vegetable",
  //       },
  //       {
  //         name: "ผักคะน้า",
  //         weight: 50,
  //         calories: 86,
  //         image: "assets/vegetables/kale.jpg",
  //         iconType: "vegetable",
  //       },
  //       {
  //         name: "เห็ดฟาง",
  //         weight: 60,
  //         calories: 21,
  //         image: "assets/vegetables/mushroom.jpg",
  //         iconType: "vegetable",
  //       },
  //       // ภาพที่ 2
  //       {
  //         name: "กวางตุ้ง",
  //         weight: 50,
  //         calories: 32,
  //         image: "assets/vegetables/chinese-broccoli.jpg",
  //         iconType: "vegetable",
  //       },
  //       {
  //         name: "ฟักทอง",
  //         weight: 200,
  //         calories: 2,
  //         image: "assets/vegetables/pumpkin.jpg",
  //         iconType: "vegetable",
  //       },
  //       {
  //         name: "แครอท",
  //         weight: 100,
  //         calories: 50,
  //         image: "assets/vegetables/carrot.jpg",
  //         iconType: "vegetable",
  //       },
  //       {
  //         name: "สะเดา",
  //         weight: 100,
  //         calories: 7,
  //         image: "assets/vegetables/neem.jpg",
  //         iconType: "vegetable",
  //       },
  //       {
  //         name: "ดันเจียงหรือผักก้านจอง",
  //         weight: 100,
  //         calories: 20,
  //         image: "assets/vegetables/stem-vegetable.jpg",
  //         iconType: "vegetable",
  //       },
  //       {
  //         name: "ผักกูด",
  //         weight: 100,
  //         calories: 4,
  //         image: "assets/vegetables/fern.jpg",
  //         iconType: "vegetable",
  //       },
  //       {
  //         name: "ผักหวาน",
  //         weight: 100,
  //         calories: 8,
  //         image: "assets/vegetables/water-spinach.jpg",
  //         iconType: "vegetable",
  //       },
  //       {
  //         name: "มะละกอ",
  //         weight: 100,
  //         calories: 3,
  //         image: "assets/vegetables/papaya.jpg",
  //         iconType: "vegetable",
  //       },
  //     ],
  //   },
  //   {
  //     name: "อาหารแปรรูป",
  //     items: [
  //       // ภาพที่ 3
  //       {
  //         name: "แหนม",
  //         weight: 100,
  //         calories: 990,
  //         image: "assets/processed/naem.jpg",
  //         iconType: "processed",
  //       },
  //       {
  //         name: "เนื้อแดดเดียว",
  //         weight: 100,
  //         calories: 1514,
  //         image: "assets/processed/dried-meat.jpg",
  //         iconType: "processed",
  //       },
  //       {
  //         name: "ปลาดุกแดดเดียว",
  //         weight: 100,
  //         calories: 1694,
  //         image: "assets/processed/dried-fish.jpg",
  //         iconType: "processed",
  //       },
  //       {
  //         name: "หมูแผ่น",
  //         weight: 100,
  //         calories: 1592,
  //         image: "assets/processed/pork-sheet.jpg",
  //         iconType: "processed",
  //       },
  //       {
  //         name: "กุนเชียง",
  //         weight: 100,
  //         calories: 1303,
  //         image: "assets/processed/chinese-sausage.jpg",
  //         iconType: "processed",
  //       },
  // {
  //   name: "ไส้กรอก",
  //   weight: 100,
  //   calories: 680,
  //   image: "assets/processed/sausage.jpg",
  //   iconType: "processed",
  // },
  // {
  //   name: "ผักกาดดอง",
  //   weight: 100,
  //   calories: 1498,
  //   image: "assets/processed/pickled-mustard.jpg",
  //   iconType: "processed",
  // },
  // {
  //   name: "มะม่วงดอง",
  //   weight: 100,
  //   calories: 504,
  //   image: "assets/processed/pickled-mango.jpg",
  //   iconType: "processed",
  // },
  // // ภาพที่ 4
  // {
  //   name: "ปลากระป๋อง",
  //   weight: 100,
  //   calories: 400,
  //   image: "assets/processed/canned-fish.jpg",
  //   iconType: "processed",
  // },
  // {
  //   name: "มาม่า",
  //   weight: 100,
  //   calories: 1200,
  //   image: "assets/processed/instant-noodles.jpg",
  //   iconType: "processed",
  // },
  // {
  //   name: "หมูยอ",
  //   weight: 100,
  //   calories: 800,
  //   image: "assets/processed/pork-roll.jpg",
  //   iconType: "processed",
  // },
  // {
  //   name: "หม้อไม้ลอง",
  //   weight: 100,
  //   calories: 800,
  //   image: "assets/processed/steamed-fish.jpg",
  //   iconType: "processed",
  // },
  // {
  //   name: "ปลาหมึกแห้ง",
  //   weight: 100,
  //   calories: 1500,
  //   image: "assets/processed/dried-squid.jpg",
  //   iconType: "processed",
  // },
  //     ],
  //   },
  // ];
}