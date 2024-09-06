@octet
Feature: Verify succesfuly payment
  Scenario: Should payment via banks's pos
   When Validate with endpoint
   When Login with endpoint
   When Fetch banks info
   When Fetch pos connection info
   Given I am on the home page with "giris"
   Then Verify on the "giris" page
   When Fill on the for email "email"
   When Fill on the for pasword "password"
   When Click button with text "DEVAM ET"
   Then Verify on the text "Güvenlik Resmi ve Doğrulama Kodu"
   When Fill otp code with "otpCode"
   When Click button with text "ONAYLA VE GİRİŞ YAP"
   When Intercept network "currentUserInfo"
   Then Verify on the "pos-islemleri" page
   When Hover on text with "Tanımlamalar" 
   When Click button with text "POS Tanımla"
   Then Verify on the "pos-tanimlama" page
   When Click button with text "Ekle"
   Then Verify on the text "Yeni POS Ekle" 
   When Click button with first text "Ödeme Sistemi(Sanal POS)"
   When Click with on the "paymentSystemPos"
   When Type text with xpath on the "posName","Test-POS04"
   When Click with on the "status"
   When Click with on the "statusofActive"
   When Click with on the "posModeType"
   When Click with on the "posModeTypeofTest"
   When Type text with xpath on the "apiUserName","FRY-TestAPI"
   When Type text with xpath on the "apiPassword","FRY1"
   When Type text with xpath on the "threeDKey","82"
   When Type text with xpath on the "posNo","085300000009593"
   When Type text with xpath on the "mbrld","6"
   When Click with on the "posType"
   When Click button with text "Standart"
   When Click with on the "cardAccountType"
   When Click button with text "Tümü"
   When Click with on the "threeDKeySelect"
   When Click button with text "Her zaman 3D Kullan"
   When Click personal card installment "posPersonal"
   When Click commercial card installment "posCommercial"
   When Click button with text "Kaydet"
   When Get "Test-POS04" transaction button using index "posListTable"
   When Click transaction button with index
   Then Verify on the text "Komisyonlar" 
   When Click button with text "Komisyonlar"
   When Click button with text "Ekle"
   When Click button for tomorrow date
   When Click button with text "Tamam"
   When Fill single rates "singleRates"
   When Fill foreign cards "foreignCards"
   When Fill installment rates for personal
   When Fill installment rates for commercial
   When Click button with text "Kaydet"
   When Hover on text with "İşlemler" 
   When Click button with text "Test İşlemleri"
   When Click button with text "Ekle"
   When Type text with xpath on the "amount","1000"
   When Get order number "posOrderNumber"
   When Click button with first text "Banka"
   When Click with on the "bankName"
   When Click with on the "functionPOS"
   When Click button with text "Test-POS04"
   When Type text with on the "cardNumber","5456165456165454"
   When Type text with on the "cardHolderName","test test"
   When Type text with on the "cardExpireDate","12/30"
   When Type text with on the "cardCVV","000"
   When Type text with on the "refNumber","453"
   When Click button with text "Satış (3D)"
   Then Verify on the text "İşlem Başarılı"
   When Click with on the "errPageClose"
   When Hover on text with "İşlemler" 
   When Click button with text "İşlem Raporları"
   When Click button with text "Filtreleri Temizle"
   When Click button with text "Filtre"
   When Click with on the "vPOSFilter"
   When Click button with text "Test-POS04"
   When Click button with text "Uygula"
   When Click with on the "closeFilterPage"
   When Click with on the "transactionDetail"
   Then Verify transaction detail with card number "cardNumberReport","5454"
   Then Verify transaction detail with order number "orderNoReport"
   
   



   
   
  

   
   


  

   
   
   


 

   
  
















   
   
   
   

 