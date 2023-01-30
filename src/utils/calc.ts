export const CalcUtils =  {
  sum(arr:number[]):number{
    return arr.reduce((a, b) => a + b, 0)
  },
  max(arr:number[]):number{
    return arr.reduce((a, b) => Math.max(a,b))
  },
  min(arr:number[]):number{
    return arr.reduce((a, b) => Math.min(a,b))
  },
  median(arr:number[]):number{
    const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  }
}