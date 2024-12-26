import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { MenuItem, MenuCategory } from "../models/menu.model";

@Injectable({
  providedIn: "root",
})
export class MenuService {
  private selectedMenuItemSubject = new BehaviorSubject<MenuItem | null>(null);
  selectedMenuItem$ = this.selectedMenuItemSubject.asObservable();

  private menuData: { [key: string]: any } = {
    น้ำพริก: [
      {
        name: "น้ำพริกป่นปลานิล",
        ingredients: [
          "ปลานิลต้ม 100 กรัม",
          "กระเทียม 10 กรัม",
          "หอมแดง 10 กรัม",
          "ต้นหอมซอย 5 กรัม",
          "พริกสด 5 กรัม",
          "น้ำปลาร้า 10 กรัม",
          "น้ำปลา 2.5 มิลลิลิตร",
        ],
        instructions: [
          "ต้มเนื้อปลาในน้ำเดือด เติมน้ำปลาร้าลงไป จนปลาสุก",
          "ตักพักและแกะเอาเนื้อปลา",
          "โขลกพริกสด หอมแดงและกระเทียมจนละเอียดหลังจากนั้นนำเนื้อปลาลงไปโขลกรวมกัน",
          "ปรุงรสด้วยน้ำปลา ตักน้ำซุปที่ต้มปลาในขั้นตอนแรกลงไป 2 ทัพพีโรยหน้าด้วยต้นหอมซอยพร้อมเสิร์ฟพร้อมผักเคียงที่ชอบ",
        ],
        nutrition: {
          calories: 111,
          protein: 12,
          fat: 11,
          carbs: 2,
          sodium: 562,
          sodium_reduction: "79%",
        },
      },
    ],
    ลาบ: [
      {
        name: "ลาบหมู",
        ingredients: [
          "สันในหมูสับ 100 กรัม",
          "ผักชีฝรั่ง 1 ช้อนโต๊ะ",
          "หอมแดงหั่น 1 ช้อนโต๊ะ",
          "ใบมะกรูด หั่น 1 ช้อนโต๊ะ",
          "ใบสะระแหน่ 1 ช้อนโต๊ะ",
          "น้ำมะนาว 1 ช้อนชา",
          "น้ำปลาเสริมไอโอดีน 0.5 ช้อนชา",
          "พริกป่น 1 ช้อนชา",
          "ข้าวคั่วป่น 1 ช้อนชา",
        ],
        instructions: [
          "รวนหมูให้สุกพอดีแล้วพักไว้ให้อุ่น",
          "นำหมูที่รวนไว้มาปรุงรสด้วยน้ำปลา น้ำมะนาว พริกป่น ข้าวคั่วป่น คนส่วนผสมให้เข้ากัน",
          "ใส่ผักชีฝรั่ง หอมแดงหั่น ใบมะกรูด หั่น ผสมให้เข้ากันดี",
          "โรยหน้าด้วยใบสะระแหน่ แล้วตักใส่จาน ทานพร้อมกับผักสดตามชอบ",
        ],
        nutrition: {
          calories: 214,
          protein: 18,
          fat: 25,
          carbs: 4,
          sodium: 842,
          sodium_reduction: "67%",
        },
      },
    ],
    ต้ม: [
      {
        name: "ต้มยำปลาทับทิม",
        ingredients: [
          "เนื้อปลาทับทิม หั่นแล่ 150 กรัม",
          "ตะไคร้หั่นท่อน 3 ต้น",
          "มะเขือเทศผ่า 4 ชิ้น 2 ลูกเล็ก",
          "ผักชีรุ้งนั้น 1 ช้อนโต๊ะ",
          "ข่าอ่อนหั่นแว่น 1 ช้อนโต๊ะ",
          "หอมแดงทุบ 5 หัว",
          "พริกขี้หนูทุบ 5 เม็ด",
          "น้ำมะนาว 1 ช้อนโต๊ะ",
          "น้ำมะขามเปียก 2 ช้อนโต๊ะ",
          "น้ำปลา 1 ช้อนชา",
        ],
        instructions: [
          "ตั้งหม้อใส่น้ำเปล่า รอน้ำเดือดแล้วใส่เครื่องต้มยำ ข่า ตะไคร้ ใบมะกรูด ลงในหม้อ",
          "จากนั้นใส่เนื้อปลาทับทิมที่เตรียมไว้ลงในหม้อ",
          "เมื่อปลาสุกแล้ว ใส่มะเขือเทศ ปรุงรสด้วยน้ำปลา น้ำตาล น้ำมะนาว พริกขี้หนูผักชีฝรั่งหั่น",
        ],
        nutrition: {
          calories: 110,
          protein: 3,
          fat: 18,
          carbs: 2,
          sodium: 329,
          sodium_reduction: "36%",
        },
      },
      {
        name: "ต้มไก่บ้าน",
        ingredients: [
          "ไก่บ้านทั้งกระดูก 180 กรัม",
          "ข่า 20 กรัม",
          "ตะไคร้ 20 กรัม",
          "ยอดมะขาม 1 กรัม",
          "มะขามเปียก 5 กรัม",
          "พริกแห้ง 2 กรัม",
          "ใบมะกรูด 3 ใบ",
          "มะเขือเทศ 1 ลูก",
          "น้ำปลา 1.5 ช้อนชา",
        ],
        instructions: [
          "นำไก่มาหั่นเป็นชิ้น ล้างน้ำให้สะอาด",
          "ใส่น้ำลงไปในหม้อใส่ข่า ตะไคร้ ใบมะกรูดลงไป",
          "พอน้ำเดือดให้ใส่ไก่ลงไป อย่าเพิ่งคนเพื่อไม่ให้เกิดกลิ่นคาว",
          "พอไก่สุกใส่มะขามเปียก มะเขือเทศ พริกแห้ง แล้วปรุงรสด้วยน้ำปลา และใส่ยอดมะขามตามหลัง ปิดไฟแล้วจัดเสิร์ฟได้",
        ],
        nutrition: {
          calories: 170,
          protein: 11,
          fat: 20,
          carbs: 5,
          sodium: 360,
          sodium_reduction: "46%",
        },
      },
      {
        name: "ต้มยำปลาเนื้ออ่อน",
        ingredients: [
          "ปลาเนื้ออ่อน (ปลานาง) 200 กรัม",
          "ข่า 35 กรัม",
          "ตะไคร้ 35 กรัม",
          "มะเขือเทศ 2 ลูก",
          "ใบมะกรูด 4 ใบ",
          "ผักชี 1 ต้น",
          "ผักชีฝรั่ง 1 ต้น",
          "พริกขี้หนูสวน 10 กรัม",
          "น้ำเปล่า 500 มิลลิลิตร",
        ],
        instructions: [
          "ต้มน้ำเปล่าประมาณ 500 มิลลิลิตร",
          "ใส่เครื่องต้มยำ",
          "ใส่ปลาและปรุงรส",
          "โรยด้วยผักชี ผักชีฝรั่ง",
        ],
        nutrition: {
          calories: 185,
          protein: 21,
          fat: 19,
          carbs: 3,
          sodium: 352,
          sodium_reduction: "34%",
        },
      },
    ],
    แกง: [
      {
        name: "แกงเห็ดรวม",
        ingredients: [
          "เต้าหู้ขาว 50 กรัม",
          "เต้าหู้นางฟ้า 50 กรัม",
          "ฟักทอง 50 กรัม",
          "บวบ 50 กรัม",
          "ใบแมงลัก 100 กรัม",
          "พริกหอม 5 เม็ด",
          "พริกแดง 5 เม็ด",
          "ตะไคร้ 50 กรัม",
          "ข้าวตัว 2 ช้อนโต๊ะ",
          "น้ำย่านาง 300 มิลลิลิตร",
          "น้ำมะนาวต้มสุก 3 ช้อนโต๊ะ",
          "น้ำปลา 500 มิลลิลิตร",
        ],
        instructions: [
          "นำวัตถุดิบมาล้างทำความสะอาด",
          "ปอก คั้น เตรียมวัตถุดิบในการปรุงให้เรียบร้อย",
          "โขลกพริก หอมแดง ตะไคร้ ข่าหั่น เตรียมไว้",
          "ตั้งหม้อเทน้ำย่านางลงไปเติมน้ำให้ได้ 500 มิลลิลิตร",
          "รอน้ำเดือด ตักพริก หอมแดง ตะไคร้ ลงในหม้อ",
          "ใส่ฟักทอง บวบ เต้า ลงไปตามลำดับ",
          "ปรุงรส เติมข่าหั่น ได้ที่แล้วปิดไฟ พร้อมรับประทาน",
        ],
        nutrition: {
          calories: 286,
          protein: 56,
          fat: 11,
          carbs: 2,
          sodium: 1147,
          sodium_reduction: "59%",
        },
      },

      {
        name: "แกงแคปลา",
        ingredients: [
          "พริกแห้ง 3 กรัม",
          "กระเทียมแกะสับ 10 กรัม",
          "หอมแดงซอย 30 กรัม",
          "ข่าหั่น 5 กรัม",
          "ตะไคร้หั่นซอย 0.5 กรัม",
          "ขมิ้นสด 0.5 กรัม",
          "กะปิ 5 กรัม",
          "ปลาร้าสำเร็จรูป 5 มิลลิลิตร",
        ],
        instructions: [
          "โขลกเครื่องแกงให้ละเอียด",
          "ต้มน้ำให้เดือด",
          "ใส่เครื่องแกงและปรุงรส",
          "ใส่ผักตามลำดับการสุก",
        ],
        nutrition: {
          calories: 286,
          protein: 56,
          fat: 11,
          carbs: 2,
          sodium: 1147,
          sodium_reduction: "59%",
        },
      },
      {
        name: "แกงหวายซี่โครงหมู",
        ingredients: [
          "หวายปอกเปลือก 50 กรัม",
          "ซี่โครงอ่อนหมู 80 กรัม",
          "น้ำย่านาง 520 มิลลิลิตร",
          "บวบหอม 30 กรัม",
          "ฟักทอง 90 กรัม",
          "เต็ดหูหนู 14 กรัม",
          "เต็ดฟาง 40 กรัม",
          "ใบแมงลัก 10 กรัม",
          "พริกสด 10 กรัม",
          "น้ำปลา 1.5 ช้อนชา",
          "น้ำมะนาว 2 ช้อนชา",
          "ข้าวเบือ 1 ช้อนโต๊ะ",
        ],
        instructions: [
          "เตรียมหวายปอกเปลือก เลือกอ่อนที่สั้วน ตัดเป็น ค่อนหวายประมาณ 1 นิ้ว ไล่ความแล้วแช่น้ำไว้",
          "เตรียมข้าวเบือ ใช้ข้าวสารหนึ่งชา 1 ช้อนโต๊ะ แช่น้ำแบล็คข้าวส้อนช้า แล้วนำมาตำให้ละเอียดและเติมน้ำย่านางลงไปประมาณ 250 มิลลิลิตร จะได้น้ำข้าวเบือพร้อมใส่หากหวาย",
          "ใส่น้ำปลา 150 มิลลิลิตร ในหม้อตั้งไฟกลางไฟลดพริกให้ละเอียด จากนั้นนำพริกที่บดละเอียดใส่ลงในหม้อคนช้วยน้ำปลา น้ำมะนาว และซี่โครงอ่อนหมูคนบน ๆ ให้เข้ากัน ตับให้ซี่โครงอ่อนหมูสุกและนุ่ม",
          "พอซี่โครงอ่อนหมูสุกนุ่ม ใส่หวาย เพิ่มไฟแรงขึ้นคนให้ส่วนผสมเข้ากัน ค่อย ๆ เติมน้ำย่านางส่วนที่เหลือ ตับต่อจนหวายสุก",
          "ใส่ฟักทอง บวบ เต็ดฟาง เต็ดหูหนู คนเข้า ๆ เบือ ส่วนผสมทุกอย่างสุก ค่อย ๆ เติมน้ำย่านางที่เตรียมไว้จนเสร็จ",
          "เมื่อข้าวเบือสุก ใส่แมงลัก คนให้เข้ากัน ปิดเตาไฟ",
        ],
        nutrition: {
          calories: 280,
          protein: 27,
          fat: 18,
          carbs: 10,
          sodium: 705,
          sodium_reduction: "32%",
        },
      },

      {
        name: "แกงเปรอะหน่อไม้",
        ingredients: [
          "หน่อไผ่ 70 กรัม",
          "เต้าซี้เหนียว 30 กรัม",
          "ฟักทอง 30 กรัม",
          "บวบเหลี่ยม 40 กรัม",
          "น้ำใบย่านาง 200 กรัม",
          "ข้าวสารเหนียวแช่น้ำ 10 กรัม",
          "เครื่องแกง (พริกแห้ง หอมแดงตะไคร้ กระชาย) 10 กรัม",
          "ใบแมงลัก 3 กรัม",
          "ยอดมะรุด 3 กรัม",
          "น้ำมะนาว 5 กรัม",
          "น้ำปลา 5 กรัม",
        ],
        instructions: [
          "ต้มหน่อไม้ให้พอลดความขมประมาณ 30 นาที",
          "ตำเครื่องแกง (พริกแห้ง หอมแดง ตะไคร้ กระชาย) ให้พอหยาบ แล้วใส่ข้าวเหนียวแช่น้ำลงไปตำให้ละเอียดพร้อมกับเครื่องแกง",
          "นำหม้อตั้งไฟ ใส่น้ำย่านางและเครื่องแกงผสมข้าวเหนียวแช่น้ำตำแล้วลงไป คนให้เข้ากัน ก่อนน้ำเดือด",
          "ใส่ผักลงไป ฟักทอง รอให้น้ำเดือด แล้วใส่เต้มและบวบตามลงไป",
          "ปรุงรสด้วยน้ำมะนาว และน้ำปลา",
          "รอให้ฟักทองย่างสุกแล้วใส่ยอดแมงลักและใบแมงลักลงไปปิดเตาพร้อมเสิร์ฟ",
        ],
        nutrition: {
          calories: 111,
          protein: 18,
          fat: 5,
          carbs: 1,
          sodium: 426,
          sodium_reduction: "28%",
        },
      },
    ],
    แจ่ว: [
      {
        name: "แจ่วบอง",
        ingredients: [
          "พริกจินดาสด 40 กรัม",
          "พริกจินดาแห้ง 10 กรัม",
          "หอมแดง/หอมแทก 260 กรัม",
          "กระเทียมแกะ 100 กรัม",
          "ใบมะกรูดสดละเอียด 10 กรัม",
          "ข่าสดครึ่ง 70 กรัม",
          "ตะไคร้ย่อย 60 กรัม",
          "ปลานิลสเตียด 200 กรัม",
          "น้ำมะนาว 80 มิลลิลิตร",
          "น้ำปลาลดโซเดียม 40 มิลลิลิตร",
          "น้ำมันพืชตั้วเหลือง 15 มิลลิลิตร",
          "ไลท์ ชูการ์ (LITE SUGAR) 8 กรัม",
        ],
        instructions: [
          "นำกาดกที่พับแบ่งหมกครึ่งถึ่งแช่น้ำลงในกระจานแล้วห่อร้อยให้อลง",
          "นำใบมะกรูดที่สับละเอียดไปคั่วในกระทะเหล็ก ด้วยไฟอ่อน ให้เเห้งเล็กน้อยเพิ่มความหอมของใบมะกรูด",
          "นำวัตถุดิบพริกจินดาสด พริกจินดาแห้ง หอมแดง/หอมแทกกระเทียมแกะลงในกระทะเหล็กเติมน้ำ 400 มิลลิลิตร",
          "คั่วไฟกลางไปทางอ่อนเพื่อป้องกันการไหม้",
          "นำกระทะเพื่อนตั้งไฟกลาง เทน้ำมันพืชตั้วเหลืองแลงกระทะ 15 กรัม รอนน้ำมันพืชตั้วเหลืองร้อนปานกลางแล้วชั้นเล็ก 200 กรัม ใช้ในกระทะลงสุกดี",
          "ตำทุกอินาะไตร์ลง ตามด้วยตำพริก หอมแดง กระเทียมและปลาบดสด ทำให้ละเอียดเป็นเนื้อเดียวกัน เติมใบมะกรูด เติมเครื่องปรุงน้ำมะนาว น้ำปลาลดโซเดียมและไลท์ ชูการ์ (LITE SUGAR)ปรุงแต่งของลาวให้สมบูรณ์แบบปรุงแล้วไปผัดในกระทะเพื่อนที่ใช้นำมันเชื้อย 4 ใช้สูก",
          "ตักใส่จาน ทานพร้อมผักสดตามชอบ",
        ],
        nutrition: {
          calories: 3,
          protein: 0.44,
          fat: 0.27,
          carbs: 0.1,
          sodium: 11,
          sodium_reduction: "55%",
        },
      },
    ],
    ซุป: [
      {
        name: "ซุปหน่อไม้",
        ingredients: [
          "หน่อไผ่ตัด 70 กรัม",
          "น้ำหญ้านาง 40 กรัม",
          "พริก 5 เม็ด",
          "กระเทียม 3 กลีบ",
          "น้ำมะนาว 2 ช้อนชา",
          "น้ำปลา 1 ช้อนชา",
          "ปลาแห้งปั่น 1 ช้อนโต๊ะ",
          "ขาดหัว 0.5 ช้อนชา",
        ],
        instructions: [
          "ปอกเปลือกหน่อไม้ จ่างน้ำให้สะอาด ใช้ส่วยขดใต้เป็นส้นเล็ก ๆ",
          "ตำเครื่องแกง (พริกแห้ง หอมแดง ตะไคร้ กระชาย) ให้พอหยาบ แล้วใส่ข้าวเหนียวแช่น้ำลงไปตำให้ละเอียดและเติมน้ำย่านางลงไป",
          "ตั้งหม้อใส่น้ำย่านางและเครื่องแกงผสมข้าวเหนียวแช่น้ำตำแล้วลงไป คนให้เข้ากัน ก่อนน้ำเดือด",
          "ใส่ผักลงไป ฟักทอง รอให้น้ำเดือด แล้วใส่เต้มและบวบตามลงไป",
          "ปรุงรสด้วยน้ำมะนาว และน้ำปลา",
          "รอให้ฟักทองย่างสุกแล้วใส่ยอดแมงลักและใบแมงลักลงไปปิดเตาพร้อมเสิร์ฟ",
        ],
        nutrition: {
          calories: 77,
          protein: 7,
          fat: 8,
          carbs: 2,
          sodium: 582,
          sodium_reduction: "55%",
        },
      },
    ],
  };

  private categories: MenuCategory[] = Object.keys(this.menuData).map(
    (categoryName) => ({
      name: categoryName,
      items: this.menuData[categoryName].map((item: any) => ({
        id: item.id,
        name: item.name,
        category: categoryName,
        ingredients: item.ingredients,
        instructions: item.instructions,
        nutrition: item.nutrition,
      })),
    })
  );

  getCategories(): MenuCategory[] {
    return this.categories;
  }

  selectMenuItem(item: MenuItem) {
    this.selectedMenuItemSubject.next(item);
  }

  searchMenuItems(query: string): MenuItem[] {
    const allItems: MenuItem[] = this.categories.flatMap((cat) => cat.items);
    return allItems.filter(
      (item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.ingredients.some((ing) =>
          ing.toLowerCase().includes(query.toLowerCase())
        )
    );
  }
}