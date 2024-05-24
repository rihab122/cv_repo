const int BUTTON1_PIN = 6;
const int BUTTON2_PIN = 11;
const int BUTTON3_PIN = 9;
const int BUTTON4_PIN = 10;

const int LEDred_PIN = 2;
const int LEDyellow_PIN = 3;
const int LEDgreen_PIN = 4;
const int LEDblue_PIN = 12;

const int BLINK_COUNT = 3;

void setup() {
  Serial.begin(9600);
  pinMode(BUTTON1_PIN, INPUT_PULLUP);
  pinMode(BUTTON2_PIN, INPUT_PULLUP);
  pinMode(BUTTON3_PIN, INPUT_PULLUP);
  pinMode(BUTTON4_PIN, INPUT_PULLUP);

  pinMode(LEDred_PIN, OUTPUT);
  pinMode(LEDyellow_PIN, OUTPUT);
  pinMode(LEDgreen_PIN, OUTPUT);
  pinMode(LEDblue_PIN, OUTPUT);
}

void loop() {
  if (digitalRead(BUTTON1_PIN) == LOW) {
    blink(LEDred_PIN);
  }
  if (digitalRead(BUTTON2_PIN) == LOW) {
    blink(LEDyellow_PIN);
  }
  if (digitalRead(BUTTON3_PIN) == LOW) {
    blink(LEDgreen_PIN);
  }
  if (digitalRead(BUTTON4_PIN) == LOW) {
    blink(LEDblue_PIN);
  }
}

void blink(int ledPin) {
  for (int i = 0; i < BLINK_COUNT; i++) {
    digitalWrite(ledPin, HIGH);
    delay(500);
    digitalWrite(ledPin, LOW);
    delay(500);
    
  }
}
