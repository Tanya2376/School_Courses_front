
class MyDate {

   monthText = ''

   generateDate() {
      let date = new Date()
      const year = date.getFullYear()
      const month = date.getMonth()
      const day = date.getDate()
   
      switch(month) {
         case 0:
            this.monthText = 'Января'
            break;
         case 1:
            this.monthText = 'Февраля'
            break;
         case 2:
            this.monthText = 'Марта'
            break;
         case 3:
            this.monthText = 'Апреля'
            break;
         case 4:
            this.monthText = 'Мая'
            break;
         case 5:
            this.monthText = 'Июня'
            break;
         case 6:
            this.monthText = 'Июля'
            break;
         case 7:
            this.monthText = 'Августа'
            break;
         case 8:
            this.monthText = 'Сентября'
            break;
         case 9:
            this.monthText = 'Октября'
            break;
         case 10:
            this.monthText = 'Ноября'
            break;
         case 11:
            this.monthText = 'Декабря'
            break;
      }

      return day + ' ' + this.monthText + ' ' + year
   }
}

export default new MyDate()