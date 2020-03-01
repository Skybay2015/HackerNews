import IGetTime from './model'

export const getTime = (data: any): IGetTime => {
   const date = new Date(data.time * 1000)
   const hours: number = date.getHours()
   const minutes: number = date.getMinutes()
   return {
      minutes,
      hours
   }
}

