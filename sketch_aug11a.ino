const int leds[] = {2, 3, 4, 5}; // סיכות בהירות (אדום, ירוק, כחול, צהוב)
const int buttons[] = {7, 8, 9, 10}; // סיכות כפתורים
const int buzzer = 6; // סיכת זמור
const int failLed = 11; // סיכת LED אדומה לכשל
const int successLed = 12; // סיכת נורה ירוקה להצלחה
int sequence[4]; // מערך לאחסון רצפים אקראיים
int userSequence[4]; // מערך לאחסון רצף הכפתורים שלוחצים על הנגן
int userIndex = 0; // מחוון למעקב אחר כפתור לחיצה על ידי הנגן
unsigned long startTime; // משתנה לאחסון זמן ההתחלה של תגובת השחקן
bool gameActive = false; // משתנה המציין אם המשחק פעיל או לא

void setup() {
  for (int i = 0; i < 4; i++) {
    pinMode(leds[i], OUTPUT);
    pinMode(buttons[i], INPUT);
  }
  pinMode(buzzer, OUTPUT);
  pinMode(failLed, OUTPUT);
  pinMode(successLed, OUTPUT);

  randomSeed(analogRead(0)); //זהה את מקור האקראיות
  startGame(); // התחל את המשחק
}
//שלב 1: 
//הגדרת רכיבים והגדרת פונקציות עזר
//תיאור COMET: "הגדרת רכיבי חומרה והוספת פונקציות עוזר.                              
//" בשלב זה, הוגדרו אורות סיכות, 
//כפתורים, אורות ניקוד וצפרים. 
//מערכים הוגדרו גם כדי לאחסן רצפים אקראיים וכניסות נגן, 
//וכדי להגדיר משתני מצב.
