const dom = {
  calendar: document.getElementById('calendar')
}

const year=2024

function isVisokosny(year){
  if(year % 4 == 0 && (year % 100 !=0 || year % 400 == 0)){
    return 1
  }
  return 0
}

const months = [
  {
    title :'Новый Год',
    name: 'Январь',
    days:31,
  },
  {
    title :'Холод',
    name: 'Февраль',
    days:28 + isVisokosny(year),
  },
  {
    title :'Грязь',
    name: 'Март',
    days:31,
  },
  {
    title :'Шутник',
    name: 'Апрель',
    days:30,
  },
  {
    title :'День Труда',
    name: 'Май',
    days:31,
  },
  {
    title :'Школьники',
    name: 'Юнь',
    days:30,
  },
  {
    title :'Жара',
    name: 'Июль',
    days:31,
  },
  {
    title :'Отпуск',
    name: 'Август',
    days:31,
  },
  {
    title :'3 Сентября',
    name: 'Сентябрь',
    days:30,
  },
  {
    title :'Дождь',
    name: 'Октябрь',
    days:31,
  },
  {
    title :'Скидки',
    name: 'Ноябрь',
    days:30,
  },
  {
    title :'Подарки',
    name: 'Декабрь',
    days:31,
  }

]



/* const year = new Date().getFullYear()
dom.year.innerHTML = year; */

function renderMonth(monthIndex, year){
  const month = months[monthIndex]
  const monthHeadString =  buildMonthHead(month.title, month.name) 
  const monthContentHTML = []
  monthContentHTML.push(buildMonthHead(month.title, month.name))
  monthContentHTML.push(['<div class="month__content">'])
  const monthBox = document.createElement('div')
  monthBox.className = 'month'
  monthContentHTML.push(buildWeekDaysNames())
  monthContentHTML.push(buildDates(year,monthIndex, month.days))
  monthContentHTML.push('</div>')
  monthBox.innerHTML = monthContentHTML.join('')
  dom.calendar.appendChild(monthBox) 
}
for(let i=0; i<12; i++){
  renderMonth(i,year)
}


function buildMonthHead(title, monthName){
  return `
  <div class="month__title">${title}</div>
  <div class="month__name">${monthName}</div>
  `
}


function buildWeekDaysNames(){
  const weekDayNames =  ['Пн','Вт','Ср','Чт','Пт','Сб','Вс',]
  let daysNames=[]
  for(let i =0; i<7; i++){
    const dayNameTag = `<div class="month__date month__date_accent">${weekDayNames[i]}</div>`
    daysNames.push(dayNameTag)
  }
    return daysNames.join("")
}

function buildDates(year, month,daysCount){
  const date = new Date(year, month, 1)
  const datesHtml = []
  const weekDaysStart = date.getDay()
  let i = 1
  let day = 1
  while(day <= daysCount){
    let dateHTML;
    if(i<weekDaysStart||weekDaysStart == 0 && i < 7){
      dateHTML = buildDate("")
      datesHtml.push(dateHTML)
      i++
    }else{
      dateHTML = buildDate(day)
      datesHtml.push(dateHTML)
      day++
    }
 
   
  }
  return datesHtml.join('')
}



function buildDate(content, isAccent = false){
  const cls = isAccent ? 'month__date month__date_accent' : 'month__date'
  return `<div class="${cls}">${content}</div>`

}

