let arrR = [[1,2],[5,6]]
let arrS = [[2,6,],[6,4]]
const arr = [[],[]]
arrR.forEach((a,i)=>{
a.forEach((row,j)=>{
    arr[i][j]=arrR[i][j]+arrS[i][j]

}
)
}
)

console.log(arr)
//34. Написать метод, находящий сумму матриц одинакового размера и возвращающий новую матрицу. С помощью этого метода обработать пары матриц и отобразить результаты на экране.-