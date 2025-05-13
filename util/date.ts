export function FormetDate(date: Date | string) {
  const d = typeof date === "string" ? new Date(date) : date;
  return `${d.getFullYear()}-${(d.getMonth() + 1 > 9) ? (d.getMonth() + 1) : (`0${d.getMonth() + 1}`)}-${(d.getDate() + 1 > 9) ? (d.getDate() + 1) : (`0${d.getDate() + 1}`)}`;
}


export function getDateMinusDays(date:any, days:any){
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days)
}